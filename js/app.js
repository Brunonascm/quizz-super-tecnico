(function () {
  var CFG = window.QUIZ_CONFIG;
  var META = window.QUIZ_META;
  var TODAS = window.QUIZ_QUESTIONS;
  var Store = window.QuizStore;
  var Som = window.QuizAudio;
  var app = document.getElementById("app");

  var NIVEIS = { 1: "FÁCIL", 2: "MÉDIO", 3: "DIFÍCIL" };
  var LETRAS = ["A", "B", "C", "D"];
  var MULT_COMBO = [1, 1, 1.2, 1.5, 1.75, 2];

  var E = {
    fase: "inicio",
    jogador: "",
    escopo: "mix",
    perguntas: [],
    i: 0,
    pontos: 0,
    combo: 0,
    melhorCombo: 0,
    resultados: [],
    opcoes: [],
    total: 20,
    t0: 0,
    timer: null,
    ultimoTique: -1
  };

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function embaralhar(lista) {
    var a = lista.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function modulo(id) {
    for (var i = 0; i < META.modulos.length; i++) if (META.modulos[i].id === id) return META.modulos[i];
    return null;
  }

  function rotuloEscopo(escopo) {
    if (escopo === "mix") return "Dúvidas Gerais";
    var m = modulo(escopo);
    return m ? m.nome : escopo;
  }

  function iconeEscopo(escopo) {
    if (escopo === "mix") return "🎮";
    var m = modulo(escopo);
    return m ? m.icone : "🎮";
  }

  function corEscopo(escopo) {
    if (escopo === "mix") return "#ff2bd6";
    var m = modulo(escopo);
    return m ? m.cor : "#00e5ff";
  }

  function estrelas(n) {
    var s = "";
    for (var i = 1; i <= 3; i++) s += i <= n ? "★" : "☆";
    return s;
  }

  function limparTimer() {
    if (E.timer) { clearInterval(E.timer); E.timer = null; }
  }

  function render(html, classe) {
    limparTimer();
    Som.tema(classe === "contagem" || classe === "jogo" ? "jogo" : "menu");
    app.innerHTML = '<section class="tela ' + (classe || "") + '">' + html + "</section>";
    window.scrollTo(0, 0);
  }

  function $(sel) { return app.querySelector(sel); }
  function $$(sel) { return Array.prototype.slice.call(app.querySelectorAll(sel)); }

  function contarPerguntas(escopo) {
    if (escopo === "mix") return TODAS.length;
    return TODAS.filter(function (q) { return q.modulo === escopo; }).length;
  }

  function recorde(escopo) {
    var nome = (E.jogador || "").toLowerCase();
    var melhor = 0;
    Store.historicoLocal().forEach(function (p) {
      if (p.escopo === escopo && String(p.jogador).toLowerCase() === nome && p.pontos > melhor) melhor = p.pontos;
    });
    return melhor;
  }

  function animarNumero(el, de, para, ms) {
    var ini = Date.now();
    function passo() {
      var t = Math.min(1, (Date.now() - ini) / ms);
      var v = Math.round(de + (para - de) * (1 - Math.pow(1 - t, 3)));
      el.textContent = v.toLocaleString("pt-BR");
      if (t < 1) requestAnimationFrame(passo);
    }
    passo();
  }

  /* ---------------- TELA INICIAL ---------------- */

  function telaInicio() {
    E.fase = "inicio";
    var nome = E.jogador || Store.lerNome();
    render(
      '<div class="logo">' +
        '<svg class="logo-raio" viewBox="0 0 64 64" aria-hidden="true"><defs><linearGradient id="gr" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffe14d"/><stop offset="1" stop-color="#ff6a00"/></linearGradient></defs><polygon points="36,2 10,36 28,36 22,62 54,24 34,24" fill="url(#gr)" stroke="#fff" stroke-width="2" stroke-linejoin="round"/></svg>' +
        '<h1 class="logo-titulo" aria-label="Super Técnico"><span>SUPER</span><span>T<i class="ac">E</i>CNICO</span></h1>' +
        '<p class="logo-sub">QUIZ DOMÍNIO</p>' +
      "</div>" +
      '<div class="painel painel-inicio">' +
        '<label for="nome" class="rotulo">DIGITE SEU NOME</label>' +
        '<input id="nome" class="campo" maxlength="24" autocomplete="off" spellcheck="false" placeholder="Ex.: Maria S." value="' + esc(nome) + '">' +
        '<p class="msg-erro" id="erro-nome" role="alert"></p>' +
        '<button class="btn btn-grande btn-pulsa" id="jogar">▶ JOGAR</button>' +
        '<button class="btn btn-sec" id="ver-ranking">🏆 RANKING</button>' +
      "</div>" +
      '<p class="dica">Responda dúvidas reais de implantação, ganhe pontos pela velocidade e suba no ranking.</p>',
      "inicio"
    );
    var campo = $("#nome");
    if (!nome) campo.focus();

    function avancar(destino) {
      Som.destravar();
      var n = campo.value.replace(/\s+/g, " ").trim();
      if (n.length < 2) {
        $("#erro-nome").textContent = "Digite seu nome (mínimo 2 letras).";
        campo.focus();
        return;
      }
      E.jogador = n;
      Store.gravarNome(n);
      Som.clique();
      destino();
    }

    $("#jogar").addEventListener("click", function () { avancar(telaModo); });
    $("#ver-ranking").addEventListener("click", function () { avancar(function () { telaRanking("mix", "tudo"); }); });
    campo.addEventListener("keydown", function (ev) {
      if (ev.key === "Enter") avancar(telaModo);
    });
  }

  /* ---------------- ESCOLHA DE MODO ---------------- */

  function telaModo() {
    E.fase = "modo";
    var cards = META.modulos.map(function (m) {
      var n = contarPerguntas(m.id);
      var rec = recorde(m.id);
      return (
        '<button class="card-modulo" data-escopo="' + m.id + '" style="--cor:' + m.cor + '">' +
          '<span class="card-icone">' + m.icone + "</span>" +
          '<span class="card-nome">' + esc(m.nome).replace(/-/g, "\u2011") + "</span>" +
          '<span class="card-info">' + n + " perguntas</span>" +
          '<span class="card-recorde">' + (rec ? "RECORDE " + rec.toLocaleString("pt-BR") : "SEM RECORDE") + "</span>" +
        "</button>"
      );
    }).join("");

    var recMix = recorde("mix");
    render(
      '<div class="topo-tela">' +
        '<button class="btn btn-mini" id="voltar">◀ VOLTAR</button>' +
        '<div class="jogador-tag">👤 ' + esc(E.jogador) + "</div>" +
      "</div>" +
      '<h2 class="titulo-tela">ESCOLHA SUA MISSÃO</h2>' +
      '<button class="card-mix" data-escopo="mix">' +
        '<span class="card-icone">🎮</span>' +
        '<span class="mix-texto"><strong>DÚVIDAS GERAIS</strong><em>' + contarPerguntas("mix") + ' perguntas misturadas de todos os módulos</em></span>' +
        '<span class="card-recorde">' + (recMix ? "RECORDE " + recMix.toLocaleString("pt-BR") : "SEM RECORDE") + "</span>" +
      "</button>" +
      '<h3 class="subtitulo">OU TREINE UM MÓDULO</h3>' +
      '<div class="grade-modulos">' + cards + "</div>" +
      '<div class="regras">' +
        '<span>♾ Responda quantas quiser</span><span>⏹ Pare quando quiser: o placar é salvo</span><span>⚡ Mais rápido = mais pontos</span><span>🔥 Acertos seguidos = combo</span><span>📖 Explicação após cada resposta</span>' +
      "</div>",
      "modo"
    );

    $("#voltar").addEventListener("click", function () { Som.clique(); telaInicio(); });
    $$("[data-escopo]").forEach(function (b) {
      b.addEventListener("click", function () {
        Som.destravar();
        iniciar(b.getAttribute("data-escopo"));
      });
    });
  }

  /* ---------------- PARTIDA ---------------- */

  function sortear(escopo) {
    var vistas = Store.lerVistas();

    function porVistas(lista) {
      return embaralhar(lista).sort(function (a, b) { return (vistas[a.id] || 0) - (vistas[b.id] || 0); });
    }

    if (escopo === "mix") {
      var escolhidas = [];
      var grupos = {};
      META.modulos.forEach(function (m) {
        grupos[m.id] = porVistas(TODAS.filter(function (q) { return q.modulo === m.id; }));
      });
      var idx = 0;
      var havia = true;
      while (havia) {
        havia = false;
        var ordem = embaralhar(META.modulos);
        for (var k = 0; k < ordem.length; k++) {
          var q = grupos[ordem[k].id][idx];
          if (q) { escolhidas.push(q); havia = true; }
        }
        idx++;
      }
      return escolhidas;
    }
    return porVistas(TODAS.filter(function (q) { return q.modulo === escopo; }));
  }

  function iniciar(escopo) {
    E.escopo = escopo;
    E.perguntas = sortear(escopo);
    E.i = 0;
    E.pontos = 0;
    E.combo = 0;
    E.melhorCombo = 0;
    E.resultados = [];
    E.zerou = false;
    E.fase = "contagem";

    var passos = ["3", "2", "1", "VAI!"];
    var n = 0;
    function mostrar() {
      render(
        '<div class="contagem">' +
          '<div class="contagem-missao" style="--cor:' + corEscopo(escopo) + '">' + iconeEscopo(escopo) + " " + esc(rotuloEscopo(escopo).toUpperCase()) + "</div>" +
          '<div class="contagem-num' + (n === 3 ? " vai" : "") + '">' + passos[n] + "</div>" +
          '<div class="contagem-sub">' + E.perguntas.length + " perguntas no banco · responda quantas quiser, " + esc(E.jogador) + "</div>" +
        "</div>",
        "contagem"
      );
      if (n === 3) Som.iniciar(); else Som.tique();
      n++;
      if (n < passos.length) setTimeout(mostrar, 700);
      else setTimeout(function () { telaPergunta(); }, 700);
    }
    mostrar();
  }

  function telaPergunta() {
    var q = E.perguntas[E.i];
    var m = modulo(q.modulo);
    E.total = Math.max(5, Math.round((CFG.segundosPorNivel[q.nivel] || 20) * (CFG.fatorTempo || 1)));
    E.opcoes = embaralhar(
      [{ t: q.certa, ok: true }].concat(q.erradas.map(function (t) { return { t: t, ok: false }; }))
    );

    var marco = CFG.marcoPerguntas || 10;
    var blocoIni = Math.floor(E.i / marco) * marco;
    var pontinhos = "";
    for (var k = blocoIni; k < blocoIni + marco; k++) {
      var cls = "ponto";
      if (k < E.resultados.length) cls += E.resultados[k].ok ? " p-ok" : " p-erro";
      else if (k === E.i) cls += " atual";
      pontinhos += '<span class="' + cls + '"></span>';
    }
    var acertosAteAqui = E.resultados.filter(function (r) { return r.ok; }).length;

    var botoes = E.opcoes.map(function (o, k) {
      return (
        '<button class="opcao opcao-' + k + '" data-i="' + k + '">' +
          '<span class="opcao-letra">' + LETRAS[k] + "</span>" +
          '<span class="opcao-texto">' + esc(o.t) + "</span>" +
        "</button>"
      );
    }).join("");

    render(
      '<header class="hud">' +
        '<div class="hud-esq"><span class="hud-nome">👤 ' + esc(E.jogador) + '</span><button class="hud-parar" id="parar" title="Encerrar e salvar a pontuação">⏹ PARAR</button></div>' +
        '<div class="hud-meio">PERGUNTA <b>' + (E.i + 1) + '</b><span class="hud-acertos">✔ ' + acertosAteAqui + " · ✘ " + (E.resultados.length - acertosAteAqui) + "</span></div>" +
        '<div class="hud-dir"><span class="hud-label">PONTOS</span><span class="hud-pontos" id="pontos">' + E.pontos.toLocaleString("pt-BR") + "</span></div>" +
      "</header>" +
      '<div class="progresso">' + pontinhos + "</div>" +
      '<div class="barra-tempo" id="barra-tempo"><div class="barra" id="barra"></div><span class="seg" id="seg">' + E.total + "</span></div>" +
      '<div class="cartao-pergunta" style="--cor:' + m.cor + '">' +
        '<div class="tags"><span class="tag tag-mod">' + m.icone + " " + esc(m.nome) + '</span><span class="tag tag-nivel nivel-' + q.nivel + '">' + estrelas(q.nivel) + " " + NIVEIS[q.nivel] + "</span></div>" +
        '<h2 class="pergunta">' + esc(q.pergunta) + "</h2>" +
      "</div>" +
      '<div class="combo-faixa" id="combo-faixa">' + textoCombo() + "</div>" +
      '<div class="opcoes" id="opcoes">' + botoes + "</div>" +
      '<div id="feedback" class="feedback" hidden></div>',
      "jogo"
    );

    E.fase = "pergunta";
    Som.urgente(false);
    E.ultimoTique = -1;
    E.t0 = Date.now();

    $$(".opcao").forEach(function (b) {
      b.addEventListener("click", function () { responder(parseInt(b.getAttribute("data-i"), 10)); });
    });
    $("#parar").addEventListener("click", function () { parar(); });

    E.timer = setInterval(tictac, 100);
    tictac();
  }

  function textoCombo() {
    if (E.combo >= 2) {
      var mult = MULT_COMBO[Math.min(E.combo, MULT_COMBO.length - 1)];
      return '<span class="combo-chip">🔥 COMBO x' + E.combo + " · pontos ×" + String(mult).replace(".", ",") + "</span>";
    }
    return '<span class="combo-dica">Acerte em sequência para ativar o combo</span>';
  }

  function restante() {
    return Math.max(0, E.total - (Date.now() - E.t0) / 1000);
  }

  function tictac() {
    if (E.fase !== "pergunta") return;
    var r = restante();
    var barra = $("#barra");
    var seg = $("#seg");
    var cont = $("#barra-tempo");
    if (!barra) return;
    var frac = r / E.total;
    barra.style.width = (frac * 100).toFixed(1) + "%";
    seg.textContent = Math.ceil(r);
    cont.classList.toggle("alerta", frac <= 0.5 && frac > 0.25);
    cont.classList.toggle("urgente", frac <= 0.25);
    var inteiro = Math.ceil(r);
    if (r <= 5 && r > 0 && inteiro !== E.ultimoTique) {
      E.ultimoTique = inteiro;
      Som.tique();
      Som.urgente(true);
    }
    if (r <= 0) responder(-1);
  }

  function responder(escolha) {
    if (E.fase !== "pergunta") return;
    E.fase = "feedback";
    limparTimer();
    Som.urgente(false);

    var q = E.perguntas[E.i];
    var r = restante();
    var gasto = Math.round((E.total - r) * 1000);
    var tempoEsgotado = escolha < 0;
    var ok = !tempoEsgotado && E.opcoes[escolha].ok;
    var pts = 0;

    if (ok) {
      E.combo++;
      if (E.combo > E.melhorCombo) E.melhorCombo = E.combo;
      var bonus = Math.round(CFG.pontosVelocidadeMax * (r / E.total));
      var mult = MULT_COMBO[Math.min(E.combo, MULT_COMBO.length - 1)];
      pts = Math.round((CFG.pontosBase + bonus) * mult);
      Som.acerto(E.combo);
    } else {
      E.combo = 0;
      if (tempoEsgotado) Som.tempoEsgotado(); else Som.erro();
    }

    var de = E.pontos;
    E.pontos += pts;
    E.resultados.push({
      id: q.id,
      ok: ok,
      esgotou: tempoEsgotado,
      ms: tempoEsgotado ? E.total * 1000 : gasto,
      pts: pts
    });

    $$(".opcao").forEach(function (b, k) {
      b.disabled = true;
      if (E.opcoes[k].ok) b.classList.add("certa");
      else if (k === escolha) b.classList.add("errada");
      else b.classList.add("apagada");
    });
    $("#barra-tempo").classList.remove("alerta", "urgente");
    $("#combo-faixa").innerHTML = textoCombo();
    animarNumero($("#pontos"), de, E.pontos, 600);

    var titulo, classe;
    if (ok) { titulo = "ACERTOU!"; classe = "fb-ok"; }
    else if (tempoEsgotado) { titulo = "TEMPO ESGOTADO"; classe = "fb-erro"; }
    else { titulo = "NÃO FOI DESSA VEZ"; classe = "fb-erro"; }

    var ultima = E.i === E.perguntas.length - 1;
    var marcoN = CFG.marcoPerguntas || 10;
    var noMarco = !ultima && E.resultados.length % marcoN === 0;
    var acertosTotal = E.resultados.filter(function (x) { return x.ok; }).length;
    var fb = $("#feedback");
    fb.className = "feedback " + classe;
    fb.innerHTML =
      '<div class="fb-topo"><span class="fb-titulo">' + titulo + "</span>" +
        (ok ? '<span class="fb-pts">+' + pts.toLocaleString("pt-BR") + "</span>" : "") +
      "</div>" +
      (ok ? "" : '<p class="fb-certa"><b>Resposta certa:</b> ' + esc(q.certa) + "</p>") +
      '<p class="fb-expl">' + esc(q.explicacao) + "</p>" +
      (q.caminho ? '<p class="fb-caminho"><span>📍 CAMINHO</span> ' + esc(q.caminho) + "</p>" : "") +
      '<p class="fb-fonte">Fonte: ' + esc(q.fonte) + "</p>" +
      (noMarco ? '<p class="fb-marco">🏅 <b>' + E.resultados.length + ' perguntas respondidas!</b> ' + acertosTotal + ' acertos até aqui. Continue para pontuar mais.</p>' : "") +
      '<div class="fb-botoes">' +
        '<button class="btn btn-grande" id="proxima">' + (ultima ? "🏁 VER RESULTADO" : "CONTINUAR ▶") + "</button>" +
        (ultima ? "" : '<button class="btn btn-sec btn-parar-fb" id="parar-fb">⏹ PARAR E VER RESULTADO</button>') +
      "</div>";
    fb.hidden = false;
    if (noMarco) Som.marco();
    $("#proxima").addEventListener("click", proxima);
    var pf = $("#parar-fb");
    if (pf) pf.addEventListener("click", function () { parar(); });
    $("#proxima").focus({ preventScroll: true });
    fb.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  function proxima() {
    if (E.fase !== "feedback") return;
    E.fase = "transicao";
    Som.clique();
    E.i++;
    if (E.i >= E.perguntas.length) { E.zerou = true; finalizar(); }
    else telaPergunta();
  }

  function parar() {
    if (E.fase !== "pergunta" && E.fase !== "feedback") return;
    E.fase = "transicao";
    limparTimer();
    Som.urgente(false);
    Som.clique();
    if (!E.resultados.length) { telaModo(); return; }
    finalizar();
  }

  /* ---------------- RESULTADO ---------------- */

  function patente(pct, total) {
    if (total < 20 && pct >= 90) pct = 89;
    if (total < 10 && pct >= 70) pct = 69;
    if (pct >= 90) return { nome: "SUPER TÉCNICO", cls: "ouro", msg: "Lendário! Você domina o Domínio." };
    if (pct >= 70) return { nome: "TÉCNICO SÊNIOR", cls: "prata", msg: "Ótimo resultado! Poucos detalhes separam você do topo." };
    if (pct >= 50) return { nome: "TÉCNICO PLENO", cls: "bronze", msg: "Bom caminho! Revise as respostas abaixo e volte mais forte." };
    if (pct >= 30) return { nome: "TÉCNICO JÚNIOR", cls: "ferro", msg: "Cada erro é uma dica nova. Revise abaixo e tente de novo!" };
    return { nome: "APRENDIZ", cls: "ferro", msg: "Todo Super Técnico começou aqui. Leia as explicações e jogue outra vez!" };
  }

  function finalizar() {
    E.fase = "resultado";
    var total = E.resultados.length;
    var acertos = E.resultados.filter(function (r) { return r.ok; }).length;
    var pct = Math.round((acertos / total) * 100);
    var tempoMedio = Math.round(E.resultados.reduce(function (s, r) { return s + r.ms; }, 0) / total);
    var pat = patente(pct, total);
    var estr = pct >= 80 ? 3 : pct >= 50 ? 2 : acertos > 0 ? 1 : 0;

    if (pct >= 70) Som.vitoria(); else Som.fimFraco();

    var erros = E.resultados.map(function (r, k) { return { r: r, q: E.perguntas[k] }; })
      .filter(function (x) { return !x.r.ok; });

    var revisao = erros.length
      ? erros.map(function (x) {
          return (
            '<details class="rev-item"><summary>' + esc(x.q.pergunta) + "</summary>" +
              '<p class="fb-certa"><b>Resposta certa:</b> ' + esc(x.q.certa) + "</p>" +
              '<p class="fb-expl">' + esc(x.q.explicacao) + "</p>" +
              (x.q.caminho ? '<p class="fb-caminho"><span>📍 CAMINHO</span> ' + esc(x.q.caminho) + "</p>" : "") +
              '<p class="fb-fonte">Fonte: ' + esc(x.q.fonte) + "</p>" +
            "</details>"
          );
        }).join("")
      : '<p class="perfeito">Nenhum erro nesta rodada. Perfeito!</p>';

    render(
      '<h2 class="titulo-tela fim">' + (E.zerou ? "MÓDULO ZERADO!" : "PARTIDA ENCERRADA") + "</h2>" +
      (E.zerou ? '<p class="patente-msg">Você respondeu todas as perguntas desta missão. Volte quando chegarem novas!</p>' : "") +
      '<div class="resultado-missao" style="--cor:' + corEscopo(E.escopo) + '">' + iconeEscopo(E.escopo) + " " + esc(rotuloEscopo(E.escopo).toUpperCase()) + " · " + esc(E.jogador) + "</div>" +
      '<div class="placar-final"><span class="placar-label">PONTUAÇÃO</span><span class="placar-valor" id="placar-valor">0</span></div>' +
      '<div class="estrelas">' + [1, 2, 3].map(function (n) { return '<span class="estrela' + (n <= estr ? " on" : "") + '" style="animation-delay:' + (0.4 + n * 0.25) + 's">★</span>'; }).join("") + "</div>" +
      '<div class="patente ' + pat.cls + '">' + pat.nome + "</div>" +
      '<p class="patente-msg">' + pat.msg + "</p>" +
      '<div class="stats">' +
        '<div class="stat"><b>' + total + '</b><span>RESPONDIDAS</span></div>' +
        '<div class="stat"><b>' + acertos + '</b><span>ACERTOS</span></div>' +
        '<div class="stat"><b>' + pct + '%</b><span>APROVEITAMENTO</span></div>' +
        '<div class="stat"><b>' + E.melhorCombo + 'x</b><span>MELHOR COMBO</span></div>' +
        '<div class="stat"><b>' + (tempoMedio / 1000).toFixed(1).replace(".", ",") + 's</b><span>TEMPO MÉDIO</span></div>' +
      "</div>" +
      '<p class="status-salvo" id="status-salvo">Salvando sua pontuação…</p>' +
      '<div class="acoes">' +
        '<button class="btn btn-grande btn-pulsa" id="de-novo">🔁 JOGAR DE NOVO</button>' +
        '<button class="btn btn-sec" id="ir-ranking">🏆 VER RANKING</button>' +
        '<button class="btn btn-sec" id="ir-menu">☰ MENU</button>' +
      "</div>" +
      '<section class="revisao"><h3 class="subtitulo">' + (erros.length ? "REVISE O QUE ERROU (" + erros.length + ")" : "REVISÃO") + "</h3>" + revisao + "</section>",
      "resultado"
    );

    animarNumero($("#placar-valor"), 0, E.pontos, 1400);
    if (pct >= 70) confete();

    $("#de-novo").addEventListener("click", function () { Som.clique(); iniciar(E.escopo); });
    $("#ir-ranking").addEventListener("click", function () { Som.clique(); telaRanking(E.escopo, "tudo"); });
    $("#ir-menu").addEventListener("click", function () { Som.clique(); telaModo(); });

    var partida = {
      jogador: E.jogador,
      escopo: E.escopo,
      pontos: E.pontos,
      acertos: acertos,
      total: total,
      tempo_medio_ms: tempoMedio,
      melhor_combo: E.melhorCombo,
      versao: META.versao,
      criado_em: new Date().toISOString()
    };
    var respostas = E.resultados.map(function (r) {
      return { pergunta_id: r.id, acertou: r.ok, tempo_ms: r.ms, versao: META.versao };
    });

    Store.marcarVistas(E.resultados.map(function (r) { return r.id; }));
    var escopoSalvo = E.escopo;
    var nomeSalvo = E.jogador;

    Store.salvarPartida(partida, respostas).then(function (res) {
      var el = $("#status-salvo");
      if (!el) return;
      Store.buscarRanking(escopoSalvo, "tudo").then(function (rk) {
        var el2 = $("#status-salvo");
        if (!el2) return;
        var pos = -1;
        rk.linhas.forEach(function (l, k) {
          if (pos < 0 && String(l.jogador).toLowerCase() === nomeSalvo.toLowerCase()) pos = k + 1;
        });
        var base = res.nuvem
          ? "✅ Pontuação salva no ranking da equipe."
          : Store.nuvemAtiva()
            ? "⚠️ Sem conexão com o ranking da equipe. Pontuação salva só neste computador."
            : "💾 Pontuação salva neste computador.";
        el2.innerHTML = esc(base) + (pos > 0 ? " Sua melhor posição em <b>" + esc(rotuloEscopo(escopoSalvo)) + "</b>: <b>" + pos + "º lugar</b>." : "");
      });
    });
  }

  /* ---------------- RANKING ---------------- */

  function telaRanking(escopo, periodo) {
    E.fase = "ranking";
    var abas = [{ id: "mix", rotulo: "🎮 Gerais" }].concat(META.modulos.map(function (m) {
      return { id: m.id, rotulo: m.icone + " " + m.nome };
    }));
    var periodos = [{ id: "tudo", r: "SEMPRE" }, { id: "mes", r: "30 DIAS" }, { id: "semana", r: "7 DIAS" }];

    render(
      '<div class="topo-tela"><button class="btn btn-mini" id="voltar">◀ VOLTAR</button><div class="jogador-tag">👤 ' + esc(E.jogador || "visitante") + "</div></div>" +
      '<h2 class="titulo-tela">🏆 RANKING</h2>' +
      '<div class="abas" role="tablist">' + abas.map(function (a) {
        return '<button class="aba' + (a.id === escopo ? " ativa" : "") + '" data-escopo="' + a.id + '">' + esc(a.rotulo) + "</button>";
      }).join("") + "</div>" +
      '<div class="periodos">' + periodos.map(function (p) {
        return '<button class="chip' + (p.id === periodo ? " ativa" : "") + '" data-periodo="' + p.id + '">' + p.r + "</button>";
      }).join("") + "</div>" +
      '<div class="tabela-wrap"><div id="ranking-corpo" class="carregando">Carregando…</div></div>' +
      '<p class="nota-ranking" id="nota-ranking"></p>' +
      '<div class="acoes"><button class="btn btn-grande" id="jogar-agora">▶ JOGAR AGORA</button></div>',
      "ranking"
    );

    $("#voltar").addEventListener("click", function () {
      Som.clique();
      if (E.jogador) telaModo(); else telaInicio();
    });
    $("#jogar-agora").addEventListener("click", function () {
      Som.clique();
      if (E.jogador) telaModo(); else telaInicio();
    });
    $$("[data-escopo]").forEach(function (b) {
      b.addEventListener("click", function () { Som.clique(); telaRanking(b.getAttribute("data-escopo"), periodo); });
    });
    $$("[data-periodo]").forEach(function (b) {
      b.addEventListener("click", function () { Som.clique(); telaRanking(escopo, b.getAttribute("data-periodo")); });
    });

    var ativa = app.querySelector(".aba.ativa");
    if (ativa && ativa.scrollIntoView) ativa.scrollIntoView({ block: "nearest", inline: "center" });

    Store.buscarRanking(escopo, periodo).then(function (rk) {
      var corpo = $("#ranking-corpo");
      if (!corpo) return;
      var eu = (E.jogador || "").toLowerCase();
      if (!rk.linhas.length) {
        corpo.className = "vazio";
        corpo.innerHTML = "Ainda não há pontuações aqui.<br>Seja o primeiro a entrar no ranking!";
      } else {
        var medalhas = ["🥇", "🥈", "🥉"];
        corpo.className = "";
        corpo.innerHTML =
          '<table class="tabela"><thead><tr><th>#</th><th>JOGADOR</th><th class="num">ACERTOS</th><th class="num">PONTOS</th></tr></thead><tbody>' +
          rk.linhas.map(function (l, k) {
            var meu = String(l.jogador).toLowerCase() === eu;
            return (
              '<tr class="' + (meu ? "meu " : "") + (k < 3 ? "top" + (k + 1) : "") + '">' +
                '<td class="pos">' + (k < 3 ? medalhas[k] : k + 1) + "</td>" +
                '<td class="jog">' + esc(l.jogador) + (meu ? ' <small>(você)</small>' : "") + "</td>" +
                '<td class="num">' + l.acertos + "/" + l.total + "</td>" +
                '<td class="num pts">' + Number(l.pontos).toLocaleString("pt-BR") + "</td>" +
              "</tr>"
            );
          }).join("") + "</tbody></table>";
      }
      var nota = $("#nota-ranking");
      if (!nota) return;
      if (rk.origem === "nuvem") nota.textContent = "🌐 Ranking compartilhado da equipe · melhor pontuação de cada jogador";
      else if (rk.origem === "local-falha") nota.textContent = "⚠️ Não foi possível acessar o ranking da equipe agora. Mostrando as pontuações deste computador.";
      else nota.textContent = "💾 Ranking deste computador · melhor pontuação de cada jogador";
    });
  }

  /* ---------------- CONFETE ---------------- */

  function confete() {
    var cv = document.getElementById("confete");
    if (!cv || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    var ctx = cv.getContext("2d");
    cv.width = window.innerWidth;
    cv.height = window.innerHeight;
    var cores = ["#ffe14d", "#ff6a00", "#ff2bd6", "#00e5ff", "#22d37a", "#ffffff"];
    var parts = [];
    for (var i = 0; i < 140; i++) {
      parts.push({
        x: Math.random() * cv.width,
        y: -20 - Math.random() * cv.height * 0.5,
        w: 6 + Math.random() * 6,
        h: 8 + Math.random() * 8,
        vx: -1.5 + Math.random() * 3,
        vy: 2 + Math.random() * 4,
        r: Math.random() * 6.28,
        vr: -0.2 + Math.random() * 0.4,
        c: cores[Math.floor(Math.random() * cores.length)]
      });
    }
    var fim = Date.now() + 4200;
    function quadro() {
      ctx.clearRect(0, 0, cv.width, cv.height);
      parts.forEach(function (p) {
        p.x += p.vx; p.y += p.vy; p.r += p.vr;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.r);
        ctx.fillStyle = p.c;
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();
      });
      if (Date.now() < fim) requestAnimationFrame(quadro);
      else ctx.clearRect(0, 0, cv.width, cv.height);
    }
    quadro();
  }

  /* ---------------- GLOBAIS ---------------- */

  document.addEventListener("keydown", function (ev) {
    if (E.fase === "pergunta") {
      var mapa = { "1": 0, "2": 1, "3": 2, "4": 3, a: 0, b: 1, c: 2, d: 3 };
      var k = mapa[String(ev.key).toLowerCase()];
      if (k !== undefined && k < E.opcoes.length) {
        ev.preventDefault();
        responder(k);
      }
    } else if (E.fase === "feedback" && (ev.key === "Enter" || ev.key === " ")) {
      ev.preventDefault();
      proxima();
    } else if (E.fase === "feedback" && String(ev.key).toLowerCase() === "p") {
      ev.preventDefault();
      parar();
    }
  });

  var btnSom = document.getElementById("btn-som");
  function atualizarSom() {
    btnSom.textContent = Som.estaMudo() ? "🔇" : "🔊";
    btnSom.setAttribute("aria-label", Som.estaMudo() ? "Ativar som" : "Desativar som");
  }
  btnSom.addEventListener("click", function () { Som.alternarMudo(); atualizarSom(); });
  atualizarSom();

  var btnMusica = document.getElementById("btn-musica");
  function atualizarMusica() {
    btnMusica.classList.toggle("desligado", !Som.musicaLigada());
    btnMusica.setAttribute("aria-label", Som.musicaLigada() ? "Desligar música" : "Ligar música");
  }
  btnMusica.addEventListener("click", function () { Som.alternarMusica(); atualizarMusica(); });
  atualizarMusica();

  function destravarAudio() {
    Som.destravar();
    document.removeEventListener("pointerdown", destravarAudio, true);
    document.removeEventListener("keydown", destravarAudio, true);
  }
  document.addEventListener("pointerdown", destravarAudio, true);
  document.addEventListener("keydown", destravarAudio, true);

  document.getElementById("rodape").textContent =
    "Base: " + META.origem + " · " + TODAS.length + " perguntas · versão " + META.versao;

  E.jogador = Store.lerNome();
  telaInicio();
})();
