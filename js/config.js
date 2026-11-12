window.QUIZ_CONFIG = {
  titulo: "Super Técnico Quiz",

  // TEMPO DAS PERGUNTAS
  // fatorTempo multiplica o tempo de todas as perguntas: 1 = normal, 0.7 = mais rápido, 1.5 = mais tempo.
  fatorTempo: 1,
  // Tempo base em segundos por dificuldade (1 = fácil, 2 = médio, 3 = difícil).
  segundosPorNivel: { 1: 20, 2: 25, 3: 30 },

  // RANKING
  // Só aparecem no ranking (e nos recordes) as partidas jogadas a partir desta data/hora.
  // Para "zerar" o ranking sem apagar nada, coloque a data de hoje. Deixe "" para mostrar tudo.
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
