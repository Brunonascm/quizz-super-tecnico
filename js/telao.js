(function () {
  var CFG = window.QUIZ_CONFIG;
  var Store = window.QuizStore;
  var alvo = document.getElementById("telao");
  var INTERVALO = 5000;

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function num(n) { return Number(n).toLocaleString("pt-BR"); }

  function degrau(l, pos, medalha) {
    if (!l) return '<div class="pod pod-' + pos + ' vazio"><div class="pod-medalha">' + medalha + '</div><div class="pod-nome">—</div><div class="pod-bloco"><span class="pod-pos">' + pos + 'º</span></div></div>';
    return (
      '<div class="pod pod-' + pos + '">' +
        '<div class="pod-medalha">' + medalha + "</div>" +
        '<div class="pod-nome">' + esc(l.jogador) + "</div>" +
        '<div class="pod-pts">' + num(l.pontos) + "</div>" +
        '<div class="pod-info">' + l.acertos + "/" + l.total + " acertos</div>" +
        '<div class="pod-bloco"><span class="pod-pos">' + pos + "º</span></div>" +
      "</div>"
    );
  }

  function desenhar(rk) {
    var L = rk.linhas;
    var resto = L.slice(3, 10).map(function (l, k) {
      return (
        '<li><span class="t-pos">' + (k + 4) + 'º</span><span class="t-nome">' + esc(l.jogador) + '</span>' +
        '<span class="t-acertos">' + l.acertos + "/" + l.total + '</span><span class="t-pts">' + num(l.pontos) + "</span></li>"
      );
    }).join("");

    var aviso = rk.origem === "nuvem" ? "" : '<p class="telao-aviso">⚠️ Sem conexão com o ranking da equipe. Mostrando só este computador.</p>';
    var hora = new Date().toLocaleTimeString("pt-BR");

    alvo.innerHTML =
      '<header class="telao-topo">' +
        '<h1>SUPER TÉCNICO <span>MODO EVENTO</span></h1>' +
        '<p>🏆 RANKING AO VIVO · melhor pontuação de cada técnico</p>' +
      "</header>" +
      (L.length
        ? '<section class="podio">' + degrau(L[1], 2, "🥈") + degrau(L[0], 1, "🥇") + degrau(L[2], 3, "🥉") + "</section>" +
          (resto ? '<ol class="telao-lista">' + resto + "</ol>" : "")
        : '<p class="telao-vazio">Aguardando as primeiras pontuações…</p>') +
      aviso +
      '<footer class="telao-rodape">Atualizado às ' + hora + "</footer>";
  }

  function atualizar() {
    Store.buscarRanking("evento", "tudo").then(desenhar).catch(function () {});
  }

  atualizar();
  setInterval(atualizar, INTERVALO);
})();
