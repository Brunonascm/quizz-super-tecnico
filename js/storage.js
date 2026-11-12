(function () {
  var CFG = window.QUIZ_CONFIG;
  var K = { nome: "stq_nome", placar: "stq_placar", vistas: "stq_vistas", mudo: "stq_mudo", musica: "stq_musica_off", tent: "stq_evento_tent" };

  function lerJSON(chave, padrao) {
    try {
      var bruto = localStorage.getItem(chave);
      return bruto ? JSON.parse(bruto) : padrao;
    } catch (e) {
      return padrao;
    }
  }

  function gravarJSON(chave, valor) {
    try {
      localStorage.setItem(chave, JSON.stringify(valor));
    } catch (e) {}
  }

  function modoSupabase() {
    return !!(CFG.supabaseUrl && CFG.supabaseAnonKey);
  }

  function modoFlow() {
    return !!(CFG.flowSalvarUrl && CFG.flowRankingUrl);
  }

  function nuvemAtiva() {
    return modoSupabase() || modoFlow();
  }

  function cabecalhos(extra) {
    var h = {
      apikey: CFG.supabaseAnonKey,
      "Content-Type": "application/json"
    };
    if (String(CFG.supabaseAnonKey).indexOf("eyJ") === 0) h.Authorization = "Bearer " + CFG.supabaseAnonKey;
    for (var k in extra) h[k] = extra[k];
    return h;
  }

  function req(url, opcoes) {
    var ctl = new AbortController();
    var timer = setTimeout(function () { ctl.abort(); }, 7000);
    opcoes.signal = ctl.signal;
    return fetch(url, opcoes)
      .then(function (r) {
        clearTimeout(timer);
        if (!r.ok) throw new Error("HTTP " + r.status);
        return r;
      })
      .catch(function (e) {
        clearTimeout(timer);
        throw e;
      });
  }

  function corteRanking(escopo) {
    var bruto = escopo === "evento" ? (CFG.evento && CFG.evento.rankingDesde) : CFG.rankingDesde;
    if (!bruto) return null;
    var d = new Date(bruto);
    return isNaN(d.getTime()) ? null : d;
  }

  function inicioPeriodo(periodo, escopo) {
    var agora = new Date();
    var ini = null;
    if (periodo === "semana") ini = new Date(agora.getTime() - 7 * 86400000);
    else if (periodo === "mes") ini = new Date(agora.getTime() - 30 * 86400000);
    var corte = corteRanking(escopo);
    if (corte && (!ini || corte > ini)) ini = corte;
    return ini;
  }

  function melhorPorJogador(linhas, limite) {
    var mapa = {};
    linhas.forEach(function (l) {
      var chave = String(l.jogador).trim().toLowerCase();
      var atual = mapa[chave];
      if (!atual || l.pontos > atual.pontos || (l.pontos === atual.pontos && l.acertos > atual.acertos)) {
        mapa[chave] = l;
      }
    });
    return Object.keys(mapa)
      .map(function (k) { return mapa[k]; })
      .sort(function (a, b) {
        return b.pontos - a.pontos || b.acertos - a.acertos || a.tempo_medio_ms - b.tempo_medio_ms;
      })
      .slice(0, limite);
  }

  function chaveNome(nome) {
    return String(nome).replace(/\s+/g, " ").trim().toLowerCase();
  }

  window.QuizStore = {
    nuvemAtiva: nuvemAtiva,

    tentativasEvento: function (nome) {
      var corte = corteRanking("evento");
      var chave = chaveNome(nome);
      var iniciadas = (lerJSON(K.tent, {})[chave] || []).filter(function (t) { return !corte || new Date(t) >= corte; }).length;
      if (!modoSupabase()) return Promise.resolve(iniciadas);
      var url = CFG.supabaseUrl.replace(/\/+$/, "") + "/rest/v1/placar?select=criado_em&escopo=eq.evento&jogador=ilike." +
        encodeURIComponent(chave.replace(/[%*,()]/g, "_")) +
        (corte ? "&criado_em=gte." + encodeURIComponent(corte.toISOString()) : "") + "&limit=50";
      return req(url, { method: "GET", headers: cabecalhos({}) })
        .then(function (r) { return r.json(); })
        .then(function (linhas) { return Math.max(iniciadas, Array.isArray(linhas) ? linhas.length : 0); })
        .catch(function () { return iniciadas; });
    },

    registrarTentativaEvento: function (nome) {
      var mapa = lerJSON(K.tent, {});
      var chave = chaveNome(nome);
      (mapa[chave] = mapa[chave] || []).push(new Date().toISOString());
      gravarJSON(K.tent, mapa);
    },
    lerNome: function () { return localStorage.getItem(K.nome) || ""; },
    gravarNome: function (n) { try { localStorage.setItem(K.nome, n); } catch (e) {} },

    lerMudo: function () { return localStorage.getItem(K.mudo) === "1"; },
    gravarMudo: function (m) { try { localStorage.setItem(K.mudo, m ? "1" : "0"); } catch (e) {} },

    lerMusicaLigada: function () { return localStorage.getItem(K.musica) !== "1"; },
    gravarMusicaLigada: function (l) { try { localStorage.setItem(K.musica, l ? "0" : "1"); } catch (e) {} },

    lerVistas: function () { return lerJSON(K.vistas, {}); },
    marcarVistas: function (ids) {
      var v = lerJSON(K.vistas, {});
      ids.forEach(function (id) { v[id] = (v[id] || 0) + 1; });
      gravarJSON(K.vistas, v);
    },

    salvarPartida: function (partida, respostas) {
      var local = lerJSON(K.placar, []);
      local.push(partida);
      gravarJSON(K.placar, local.slice(-300));

      if (!nuvemAtiva()) return Promise.resolve({ nuvem: false });

      if (modoFlow() && !modoSupabase()) {
        var semData = {};
        for (var c2 in partida) if (c2 !== "criado_em") semData[c2] = partida[c2];
        return req(CFG.flowSalvarUrl, {
          method: "POST",
          headers: { "Content-Type": "text/plain;charset=UTF-8" },
          body: JSON.stringify({ partida: semData, respostas: respostas })
        })
          .then(function () { return { nuvem: true }; })
          .catch(function () { return { nuvem: false, erro: true }; });
      }

      var base = CFG.supabaseUrl.replace(/\/+$/, "") + "/rest/v1/";
      var remota = {};
      for (var campo in partida) if (campo !== "criado_em") remota[campo] = partida[campo];
      var envioPartida = req(base + "placar", {
        method: "POST",
        headers: cabecalhos({ Prefer: "return=minimal" }),
        body: JSON.stringify(remota)
      });
      var envioRespostas = respostas.length
        ? req(base + "respostas", {
            method: "POST",
            headers: cabecalhos({ Prefer: "return=minimal" }),
            body: JSON.stringify(respostas)
          }).catch(function () {})
        : Promise.resolve();

      return envioPartida
        .then(function () { return envioRespostas; })
        .then(function () { return { nuvem: true }; })
        .catch(function () { return { nuvem: false, erro: true }; });
    },

    buscarRanking: function (escopo, periodo) {
      var limite = CFG.rankingTamanho;
      var desde = inicioPeriodo(periodo, escopo);

      function doLocal() {
        var linhas = lerJSON(K.placar, []).filter(function (l) {
          if (l.escopo !== escopo) return false;
          if (desde && new Date(l.criado_em) < desde) return false;
          return true;
        });
        return { linhas: melhorPorJogador(linhas, limite), origem: "local" };
      }

      if (!nuvemAtiva()) return Promise.resolve(doLocal());

      if (modoFlow() && !modoSupabase()) {
        var sep = CFG.flowRankingUrl.indexOf("?") >= 0 ? "&" : "?";
        var urlFlow = CFG.flowRankingUrl + sep + "escopo=" + encodeURIComponent(escopo) +
          (desde ? "&desde=" + encodeURIComponent(desde.toISOString()) : "");
        return req(urlFlow, { method: "GET", headers: {} })
          .then(function (r) { return r.json(); })
          .then(function (dados) {
            var linhasFlow = Array.isArray(dados) ? dados : (dados.linhas || dados.value || []);
            linhasFlow = linhasFlow.filter(function (l) {
              return l && l.jogador && (!l.escopo || l.escopo === escopo) &&
                (!desde || !l.criado_em || new Date(l.criado_em) >= desde);
            }).map(function (l) {
              return { jogador: l.jogador, escopo: escopo, pontos: Number(l.pontos) || 0, acertos: Number(l.acertos) || 0, total: Number(l.total) || 10, tempo_medio_ms: Number(l.tempo_medio_ms) || 0, criado_em: l.criado_em };
            });
            return { linhas: melhorPorJogador(linhasFlow, limite), origem: "nuvem" };
          })
          .catch(function () {
            var lf = doLocal();
            lf.origem = "local-falha";
            return lf;
          });
      }

      var url = CFG.supabaseUrl.replace(/\/+$/, "") +
        "/rest/v1/placar?select=jogador,escopo,pontos,acertos,total,tempo_medio_ms,criado_em" +
        "&escopo=eq." + encodeURIComponent(escopo) +
        (desde ? "&criado_em=gte." + encodeURIComponent(desde.toISOString()) : "") +
        "&order=pontos.desc&limit=1000";

      return req(url, { method: "GET", headers: cabecalhos({}) })
        .then(function (r) { return r.json(); })
        .then(function (linhas) {
          return { linhas: melhorPorJogador(linhas, limite), origem: "nuvem" };
        })
        .catch(function () {
          var l = doLocal();
          l.origem = "local-falha";
          return l;
        });
    },

    historicoLocal: function () {
      return lerJSON(K.placar, []).filter(function (p) {
        var corte = corteRanking(p.escopo);
        return !corte || new Date(p.criado_em) >= corte;
      });
    }
  };
})();
