window.QUIZ_CONFIG = {
  titulo: "Super Técnico Quiz",

  // TEMPO
  // Segundos que cada pergunta dura (igual para todas).
  segundosPorPergunta: 30,

  // MODO EVENTO (página evento.html)
  evento: {
    perguntas: 20,   // perguntas por partida
    tentativas: 2,   // tentativas por técnico (vale a melhor pontuação)
    segundos: 30,    // segundos por pergunta no evento
    // Só valem no ranking do evento (e nas tentativas) as partidas a partir desta data/hora. "" = todas.
    rankingDesde: ""
  },

  // RANKING DOS MÓDULOS
  // Só aparecem no ranking e nos recordes as partidas jogadas a partir desta data/hora.
  // Para "zerar" o ranking sem apagar nada, coloque a data de agora. Deixe "" para mostrar tudo.
  // Formato: "AAAA-MM-DDTHH:MM:SS-03:00"  (exemplo: "2026-12-04T08:00:00-03:00")
  rankingDesde: "",
  rankingTamanho: 20,

  // PONTUAÇÃO
  marcoPerguntas: 10,
  pontosBase: 100,
  pontosVelocidadeMax: 100,

  // CONEXÃO COM O BANCO (não mexer)
  supabaseUrl: "https://joikislmmmzfxjgdlcay.supabase.co",
  supabaseAnonKey: "sb_publishable_ZXxxRpc_zeLXE3Hy5cqTkA_R579WGzz",

  flowSalvarUrl: "",
  flowRankingUrl: ""
};
