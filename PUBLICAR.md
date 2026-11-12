# Super Técnico Quiz — manutenção e publicação

## 1. Testar agora (sem instalar nada)
Dê dois cliques em `index.html`. Funciona direto no navegador. Sem backend configurado, as pontuações ficam salvas só no computador de quem jogou.

## 2. Manter as perguntas (incluir, editar, apagar)
Todas as perguntas ficam na planilha `perguntas/perguntas.xlsx` (aba **Perguntas**, uma pergunta por linha). A aba **Instruções** explica o passo a passo.

- **Incluir:** preencha uma linha nova (deixe o ID em branco, ele é criado sozinho). Módulo, Nível e Ativa têm lista de opções.
- **Editar:** altere o texto na célula. Não mude o ID.
- **Apagar:** troque **Ativa** para NÃO (a linha fica cinza e sai do jogo, dá para reativar) ou exclua a linha.

Para publicar a mudança: salve e feche a planilha e dê dois cliques em `perguntas/ATUALIZAR_PERGUNTAS.bat`. Ele confere tudo, aponta erros por linha (nada é alterado se houver erro), gera `js/questions.js` e guarda um backup do anterior em `perguntas/backups/`. Depois abra o `index.html` para testar.

O conversor precisa de Python com o pacote `openpyxl`. Se não houver Python na máquina, peça ao Lou: "atualize o quiz a partir da planilha de perguntas".

## 3. Ranking compartilhado da equipe
O GitHub Pages só hospeda arquivos, não guarda pontuação. Para o ranking ser comum a todos é preciso um pequeno serviço de dados. O quiz aceita dois, configurados em `js/config.js`:

**A. Power Automate + lista do SharePoint (dentro do Microsoft 365 do TR; sugerido para validar com a TI)**
1. Crie uma lista no SharePoint com as colunas: Jogador, Escopo, Pontos, Acertos, Total, TempoMedioMs, MelhorCombo, Versao.
2. Fluxo 1, gatilho “Quando uma solicitação HTTP é recebida”: leia o JSON (`partida` e `respostas`) e use “Criar item” na lista. Copie a URL do gatilho para `flowSalvarUrl`.
3. Fluxo 2, gatilho HTTP (GET): leia a lista, filtre pelo parâmetro `escopo` e responda com uma lista JSON de objetos com `jogador`, `pontos`, `acertos`, `total`, `tempo_medio_ms` e `criado_em`. Adicione o cabeçalho `Access-Control-Allow-Origin: *` na resposta. Copie a URL para `flowRankingUrl`.
4. O envio usa `Content-Type: text/plain`, para o navegador não exigir pré-verificação CORS.

Observação: o gatilho HTTP do Power Automate costuma exigir licença premium. Confirme antes. Esta integração está implementada, mas ainda não foi testada num fluxo real.

**B. Supabase (gratuito, serviço externo ao TR)**
1. Crie um projeto, abra **SQL Editor**, cole `backend/supabase.sql` e execute.
2. Em **Project Settings > API**, copie a URL e a chave `anon public` para `supabaseUrl` e `supabaseAnonKey` em `js/config.js`.
3. A view `dificuldade_perguntas` mostra quais perguntas a equipe mais erra.
Por ser serviço externo, precisa de aprovação de Segurança/TI.

## 4. Publicar no GitHub Pages do TR
1. Crie o repositório na organização do TR com visibilidade **interna ou privada**. O conteúdo das perguntas vem das fichas do Super Técnico e é conhecimento interno: não publique em repositório público.
2. Envie todos os arquivos desta pasta, exceto `cerebro_super_tecnico_v2.md` e `perguntas/backups/`.
3. Em **Settings > Pages**, publique a branch `main`, pasta `/ (root)`.
4. Em **Settings > Pages > Visibility**, deixe o site restrito a quem tem acesso de leitura ao repositório. Esse controle depende de a organização estar no GitHub Enterprise Cloud, e só vale para sites de projeto (não para `<org>.github.io`). Peça a um administrador da organização para confirmar.
5. Quem tiver acesso ao repositório abre o link do Pages com o login do GitHub do TR.

O Open Arena não é lugar para hospedar o quiz: ele roda cadeias de IA e modelos, não sites estáticos.

## 5. Ajustes rápidos (`js/config.js`)
- `segundosPorPergunta`: segundos de cada pergunta, igual para todas (hoje 30).
- `rankingDesde`: só valem no ranking e nos recordes as partidas a partir dessa data/hora (`"2026-12-04T08:00:00-03:00"`). Deixe `""` para mostrar tudo. Serve para "zerar" o ranking sem apagar nada.
- `marcoPerguntas`: a cada quantas perguntas respondidas o jogo mostra um aviso de marco (hoje 10). A partida não tem limite: o jogador responde até apertar PARAR ou acabarem as perguntas da missão.
- `pontosBase` e `pontosVelocidadeMax`: cada acerto vale 100 + até 100 pela velocidade, multiplicado pelo combo (até ×2).

## 6. Modo Evento
- **Jogar:** `evento.html` (ex.: `https://brunonascm.github.io/quizz-super-tecnico/evento.html`). Só Dúvidas Gerais, sem botão PARAR, nome e sobrenome obrigatórios, ranking próprio ("evento"), separado dos rankings dos módulos.
- **Telão:** `telao.html` mostra o pódio e o top 10 ao vivo (atualiza a cada 5 s). Use F11 para tela cheia.
- **Ajustes** em `js/config.js`, bloco `evento`: `perguntas` (20), `tentativas` (2, vale a melhor), `segundos` (30) e `rankingDesde` (zera só o ranking do evento e as tentativas).
- **Apagar de verdade** só as partidas do evento: no Supabase, SQL Editor, `delete from public.placar where escopo = 'evento';`
- As tentativas são controladas pelo nome (no banco e no navegador): é uma regra de confiança.

Música: dois botões no canto superior direito ligam e desligam a música (🎵) e os efeitos (🔊). A música é gerada pelo navegador, sem arquivos de áudio nem direitos autorais, e só começa depois do primeiro clique (regra dos navegadores).

## Limites desta versão piloto
- Qualquer pessoa com o link consegue enviar pontuação: o ranking é de confiança, não à prova de fraude.
- Dois jogadores com o mesmo nome contam como a mesma pessoa. Peça nome e inicial do sobrenome.
