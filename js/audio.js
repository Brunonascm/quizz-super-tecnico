(function () {
  var ctx = null;
  var mudo = window.QuizStore ? window.QuizStore.lerMudo() : false;
  var musicaLigada = window.QuizStore ? window.QuizStore.lerMusicaLigada() : true;

  function garantir() {
    if (!ctx) {
      var AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      ctx = new AC();
    }
    if (ctx.state === "suspended" && !document.hidden) ctx.resume();
    return ctx;
  }

  function tom(freq, inicio, dur, tipo, vol) {
    var c = garantir();
    if (!c || mudo) return;
    var t0 = c.currentTime + inicio;
    var osc = c.createOscillator();
    var g = c.createGain();
    osc.type = tipo || "square";
    osc.frequency.setValueAtTime(freq, t0);
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(vol || 0.08, t0 + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    osc.connect(g);
    g.connect(c.destination);
    osc.start(t0);
    osc.stop(t0 + dur + 0.02);
  }

  function deslizar(f1, f2, inicio, dur, tipo, vol) {
    var c = garantir();
    if (!c || mudo) return;
    var t0 = c.currentTime + inicio;
    var osc = c.createOscillator();
    var g = c.createGain();
    osc.type = tipo || "sawtooth";
    osc.frequency.setValueAtTime(f1, t0);
    osc.frequency.exponentialRampToValueAtTime(f2, t0 + dur);
    g.gain.setValueAtTime(vol || 0.09, t0);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    osc.connect(g);
    g.connect(c.destination);
    osc.start(t0);
    osc.stop(t0 + dur + 0.02);
  }

  /* ---------------- MÚSICA (synthwave anos 80, original) ---------------- */

  function hz(m) { return 440 * Math.pow(2, (m - 69) / 12); }

  var TEMAS = {
    menu: {
      bpm: 84,
      ganho: 0.21,
      acordes: [[52, 55, 59, 64], [48, 52, 55, 60], [45, 48, 52, 57], [47, 51, 54, 59]],
      baixo: [40, 36, 33, 35]
    },
    jogo: {
      bpm: 124,
      ganho: 0.35,
      acordes: [[50, 53, 57, 62], [46, 50, 53, 58], [53, 57, 60, 65], [48, 52, 55, 60]],
      baixo: [38, 34, 41, 36]
    }
  };

  var ruidoBuf = new WeakMap();
  function bufferRuido(c) {
    var b = ruidoBuf.get(c);
    if (!b) {
      b = c.createBuffer(1, c.sampleRate, c.sampleRate);
      var d = b.getChannelData(0);
      for (var i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
      ruidoBuf.set(c, b);
    }
    return b;
  }

  var impulsoBuf = new WeakMap();
  function impulso(c) {
    var b = impulsoBuf.get(c);
    if (!b) {
      var len = Math.floor(c.sampleRate * 1.8);
      b = c.createBuffer(2, len, c.sampleRate);
      for (var ch = 0; ch < 2; ch++) {
        var d = b.getChannelData(ch);
        for (var i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 2.6);
      }
      impulsoBuf.set(c, b);
    }
    return b;
  }

  function sinte(c, bus, freq, t, dur, vol, o) {
    var f = c.createBiquadFilter();
    f.type = "lowpass";
    f.Q.value = o.q || 3;
    f.frequency.setValueAtTime(o.f0, t);
    f.frequency.exponentialRampToValueAtTime(Math.max(80, o.f1), t + dur * (o.fdur || 0.8));
    var g = c.createGain();
    var atk = o.atk || 0.006;
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(vol, t + atk);
    if (o.sustenta) g.gain.setValueAtTime(vol, t + Math.max(atk, dur - (o.rel || 0.3)));
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    f.connect(g);
    g.connect(bus);
    [-1, 1].forEach(function (lado) {
      var os = c.createOscillator();
      os.type = o.tipo || "sawtooth";
      os.frequency.setValueAtTime(freq, t);
      os.detune.value = lado * (o.det || 8);
      os.connect(f);
      os.start(t);
      os.stop(t + dur + 0.05);
    });
  }

  function nota(c, bus, tipo, freq, t, dur, vol) {
    var o = c.createOscillator();
    var g = c.createGain();
    o.type = tipo;
    o.frequency.setValueAtTime(freq, t);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(vol, t + 0.006);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g);
    g.connect(bus);
    o.start(t);
    o.stop(t + dur + 0.03);
  }

  function bumbo(c, bus, t, vol) {
    var o = c.createOscillator();
    var g = c.createGain();
    o.type = "sine";
    o.frequency.setValueAtTime(140, t);
    o.frequency.exponentialRampToValueAtTime(46, t + 0.1);
    g.gain.setValueAtTime(vol, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.22);
    o.connect(g);
    g.connect(bus);
    o.start(t);
    o.stop(t + 0.25);
  }

  function ruido(c, bus, t, dur, vol, tipoFiltro, freqFiltro) {
    var s = c.createBufferSource();
    s.buffer = bufferRuido(c);
    var f = c.createBiquadFilter();
    f.type = tipoFiltro;
    f.frequency.value = freqFiltro;
    var g = c.createGain();
    g.gain.setValueAtTime(vol, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    s.connect(f);
    f.connect(g);
    g.connect(bus);
    s.start(t);
    s.stop(t + dur + 0.02);
  }

  function criarBus(c, destino, tema) {
    var entrada = c.createGain();
    var tom = c.createBiquadFilter();
    tom.type = "lowpass";
    tom.frequency.value = 5200;
    var master = c.createGain();
    var atraso = c.createDelay(1.5);
    atraso.delayTime.value = (60 / TEMAS[tema].bpm) * 0.75;
    var realim = c.createGain();
    realim.gain.value = 0.32;
    var wetAtraso = c.createGain();
    wetAtraso.gain.value = 0.28;
    var conv = c.createConvolver();
    conv.buffer = impulso(c);
    var wetConv = c.createGain();
    wetConv.gain.value = 0.3;

    entrada.connect(tom);
    tom.connect(master);
    tom.connect(atraso);
    atraso.connect(realim);
    realim.connect(atraso);
    atraso.connect(wetAtraso);
    wetAtraso.connect(master);
    tom.connect(conv);
    conv.connect(wetConv);
    wetConv.connect(master);
    master.connect(destino);
    return { entrada: entrada, gain: master, nos: [entrada, tom, master, atraso, realim, wetAtraso, conv, wetConv] };
  }

  function agendarPasso(c, bus, tema, passo, t, dp) {
    var T = TEMAS[tema];
    var G = T.ganho;
    var s = passo % 16;
    var compasso = Math.floor(passo / 16) % 4;
    var acorde = T.acordes[compasso];
    var raiz = T.baixo[compasso];
    var b = bus.entrada;
    var barra = dp * 16;

    if (tema === "menu") {
      if (s === 0) {
        [0, 1, 2].forEach(function (k) {
          sinte(c, b, hz(acorde[k] + 12), t, barra * 1.02, 0.05 * G, { f0: 700, f1: 1500, fdur: 1, q: 1, atk: 0.9, rel: 0.8, sustenta: true, det: 9 });
        });
        sinte(c, b, hz(raiz), t, barra, 0.17 * G, { f0: 260, f1: 200, q: 1, atk: 0.05, rel: 0.6, sustenta: true, det: 5 });
        bumbo(c, b, t, 0.16 * G);
      }
      if (s % 2 === 0) {
        var idx = [0, 1, 2, 3, 2, 1, 3, 2][s / 2];
        sinte(c, b, hz(acorde[idx] + 12), t, dp * 3.2, (s % 8 === 0 ? 0.095 : 0.07) * G, { f0: 2600, f1: 520, fdur: 0.7, q: 5, det: 7 });
      }
    } else {
      if (s === 0) {
        [0, 1, 2].forEach(function (k) {
          sinte(c, b, hz(acorde[k] + 12), t, barra * 1.02, 0.035 * G, { f0: 900, f1: 1800, fdur: 1, q: 1, atk: 0.15, rel: 0.4, sustenta: true, det: 10 });
        });
      }
      if (s % 2 === 0) {
        var off = [0, 0, 12, 0, 7, 0, 12, 10][s / 2];
        sinte(c, b, hz(raiz + off), t, dp * 1.9, 0.24 * G, { f0: 520, f1: 170, fdur: 0.6, q: 6, atk: 0.004, det: 4 });
      }
      var arp = [0, 1, 2, 3, 2, 1, 2, 3, 0, 1, 2, 3, 3, 2, 1, 2][s];
      sinte(c, b, hz(acorde[arp] + 12), t, dp * 1.7, (s % 4 === 0 ? 0.075 : 0.05) * G, { f0: 3200, f1: 700, fdur: 0.55, q: 4, det: 8 });
      if (s % 4 === 0) bumbo(c, b, t, 0.34 * G);
      if (s === 4 || s === 12) {
        ruido(c, b, t, 0.2, 0.15 * G, "bandpass", 1700);
        nota(c, b, "triangle", 185, t, 0.12, 0.09 * G);
      }
      if (s % 4 === 2) ruido(c, b, t, 0.06, 0.04 * G, "highpass", 7500);
      else if (s % 2 === 1) ruido(c, b, t, 0.03, 0.022 * G, "highpass", 8500);
    }
  }

  var M = {
    tema: null,
    pedido: null,
    bus: null,
    passo: 0,
    proximo: 0,
    timer: null,
    urgente: false,
    volume: 0.4
  };

  function duracaoPasso(tema) {
    var bpm = TEMAS[tema].bpm * (M.urgente ? 1.16 : 1);
    return 60 / bpm / 4;
  }

  function tique() {
    if (!ctx || !M.bus || !M.tema || ctx.state !== "running") return;
    while (M.proximo < ctx.currentTime + 0.3) {
      var dp = duracaoPasso(M.tema);
      agendarPasso(ctx, M.bus, M.tema, M.passo, M.proximo, dp);
      M.proximo += dp;
      M.passo++;
    }
  }

  function pararMusica() {
    if (M.timer) { clearInterval(M.timer); M.timer = null; }
    if (M.bus && ctx) {
      var antigo = M.bus;
      var agora = ctx.currentTime;
      antigo.gain.gain.cancelScheduledValues(agora);
      antigo.gain.gain.setValueAtTime(antigo.gain.gain.value, agora);
      antigo.gain.gain.linearRampToValueAtTime(0.0001, agora + 0.4);
      setTimeout(function () { antigo.nos.forEach(function (n) { try { n.disconnect(); } catch (e) {} }); }, 900);
    }
    M.bus = null;
    M.tema = null;
  }

  function iniciarMusica(tema) {
    var c = ctx;
    if (!c || !musicaLigada) return;
    pararMusica();
    M.bus = criarBus(c, c.destination, tema);
    M.bus.gain.gain.setValueAtTime(0.0001, c.currentTime);
    M.bus.gain.gain.linearRampToValueAtTime(M.volume, c.currentTime + 0.5);
    M.tema = tema;
    M.passo = 0;
    M.proximo = c.currentTime + 0.06;
    M.timer = setInterval(tique, 40);
    tique();
  }

  function aplicarTema() {
    if (!ctx || ctx.state !== "running") return;
    if (!musicaLigada) { pararMusica(); return; }
    if (M.pedido && M.pedido !== M.tema) iniciarMusica(M.pedido);
  }

  document.addEventListener("visibilitychange", function () {
    if (!ctx) return;
    if (document.hidden) ctx.suspend();
    else ctx.resume().then(aplicarTema);
  });

  window.QuizAudio = {
    destravar: function () {
      var c = garantir();
      if (c && c.state !== "running") c.resume().then(aplicarTema);
      else aplicarTema();
    },
    estaMudo: function () { return mudo; },
    alternarMudo: function () {
      mudo = !mudo;
      window.QuizStore.gravarMudo(mudo);
      if (!mudo) this.clique();
      return mudo;
    },
    musicaLigada: function () { return musicaLigada; },
    alternarMusica: function () {
      musicaLigada = !musicaLigada;
      window.QuizStore.gravarMusicaLigada(musicaLigada);
      garantir();
      if (musicaLigada) aplicarTema();
      else pararMusica();
      return musicaLigada;
    },
    tema: function (nome) {
      M.pedido = nome;
      aplicarTema();
    },
    urgente: function (sim) { M.urgente = !!sim; },
    clique: function () { tom(660, 0, 0.06, "square", 0.05); },
    iniciar: function () {
      tom(392, 0, 0.1, "square", 0.07);
      tom(523, 0.1, 0.1, "square", 0.07);
      tom(784, 0.2, 0.18, "square", 0.07);
    },
    acerto: function (combo) {
      var base = 523 + Math.min(combo || 0, 6) * 40;
      tom(base, 0, 0.1, "square", 0.08);
      tom(base * 1.25, 0.09, 0.1, "square", 0.08);
      tom(base * 1.5, 0.18, 0.22, "square", 0.08);
    },
    erro: function () { deslizar(300, 110, 0, 0.35, "sawtooth", 0.1); },
    tempoEsgotado: function () {
      deslizar(420, 160, 0, 0.18, "sawtooth", 0.08);
      deslizar(320, 90, 0.2, 0.3, "sawtooth", 0.08);
    },
    tique: function () { tom(880, 0, 0.04, "triangle", 0.06); },
    vitoria: function () {
      var notas = [523, 659, 784, 1047, 784, 1047, 1319];
      notas.forEach(function (f, i) { tom(f, i * 0.12, 0.16, "square", 0.07); });
    },
    marco: function () {
      [659, 784, 988, 1319].forEach(function (f, i) { tom(f, 0.45 + i * 0.09, 0.12, "square", 0.06); });
    },
    fimFraco: function () {
      tom(392, 0, 0.18, "triangle", 0.08);
      tom(330, 0.2, 0.18, "triangle", 0.08);
      tom(262, 0.4, 0.3, "triangle", 0.08);
    },
    _teste: { agendarPasso: agendarPasso, criarBus: criarBus, volume: M.volume, ganhos: function () { return { menu: TEMAS.menu.ganho, jogo: TEMAS.jogo.ganho }; }, definirGanho: function (t, g) { TEMAS[t].ganho = g; }, passoDur: function (t) { return 60 / TEMAS[t].bpm / 4; } }
  };
})();
