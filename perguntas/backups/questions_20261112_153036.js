// Arquivo gerado automaticamente por perguntas/converter.py a partir de perguntas/perguntas.xlsx.
// Não edite à mão: altere a planilha e rode ATUALIZAR_PERGUNTAS.bat.
window.QUIZ_META = {
  "versao": "2026.11.12-ad9241",
  "origem": "Cérebro Super Técnico v2 (8.369 treinamentos)",
  "modulos": [
    {
      "id": "geral",
      "nome": "Implantação e Config.",
      "longo": "Implantação e Configuração Geral",
      "icone": "🛠️",
      "cor": "#00e5ff"
    },
    {
      "id": "fiscal",
      "nome": "Escrita Fiscal",
      "longo": "Escrita Fiscal",
      "icone": "🧾",
      "cor": "#ffb300"
    },
    {
      "id": "folha",
      "nome": "Folha e eSocial",
      "longo": "Folha de Pagamento e eSocial",
      "icone": "👥",
      "cor": "#ff3b6b"
    },
    {
      "id": "contabilidade",
      "nome": "Contabilidade",
      "longo": "Contabilidade",
      "icone": "📒",
      "cor": "#22d37a"
    },
    {
      "id": "lalur",
      "nome": "Lalur e ECF",
      "longo": "Lalur, Lucro Real e ECF",
      "icone": "🏛️",
      "cor": "#b36bff"
    },
    {
      "id": "patrimonio",
      "nome": "Patrimônio",
      "longo": "Patrimônio",
      "icone": "🏭",
      "cor": "#ff7a45"
    },
    {
      "id": "honorarios",
      "nome": "Honorários",
      "longo": "Honorários e Gestão do Escritório",
      "icone": "💼",
      "cor": "#2d9cff"
    },
    {
      "id": "onvio",
      "nome": "Onvio",
      "longo": "Onvio — Portais, Messenger e Processos",
      "icone": "☁️",
      "cor": "#7cf3ff"
    },
    {
      "id": "busca",
      "nome": "Busca NF-e e Box-e",
      "longo": "Busca NF-e e Box-e",
      "icone": "📥",
      "cor": "#ff2bd6"
    }
  ]
};

window.QUIZ_QUESTIONS = [
  {
    "id": "geral-001",
    "modulo": "geral",
    "nivel": 1,
    "pergunta": "Você gravou o cadastro de uma empresa com o código errado. O que dá para fazer?",
    "certa": "Depois de gravado o código não muda mais: é preciso excluir a empresa e cadastrar de novo",
    "erradas": [
      "Editar o código em Controle > Parâmetros, desde que a empresa ainda não tenha nenhum movimento",
      "Pedir a um usuário gerente para alterar o código direto no cadastro da empresa, em Controle > Empresas",
      "Criar uma Nova Vigência informando o código correto e mantendo o histórico da empresa"
    ],
    "explicacao": "O sistema sugere um código sequencial e ele pode ser alterado antes de gravar. Depois de gravado, não dá mais. Para manter a numeração do sistema anterior, ajuste antes de gravar ou use a planilha de conversão.",
    "caminho": "Controle > Empresas > Novo",
    "fonte": "Cadastro inicial de empresa no sistema · visto em 1390 treinamentos"
  },
  {
    "id": "geral-002",
    "modulo": "geral",
    "nivel": 2,
    "pergunta": "Ao preencher o Quadro Societário, um sócio ficou com participação de 0%. O que acontece?",
    "certa": "O sistema trava a gravação: é preciso excluir o sócio ou ajustar os percentuais para somar 100%",
    "erradas": [
      "Grava normalmente e apenas exibe um aviso na tela, deixando a correção para depois da implantação",
      "O sócio é gravado e passa a ser tratado automaticamente como sócio administrador da empresa",
      "O sistema redistribui sozinho o percentual do sócio entre os demais sócios e grava o quadro"
    ],
    "explicacao": "O sistema só grava o quadro societário se os percentuais somarem 100%. Sócio com 0% (por exemplo, cadastrado só para assinar declarações) trava a gravação: exclua-o ou ajuste Capital Subscrito/Integralizar.",
    "caminho": "Controle > Empresas > aba Quadro Societário",
    "fonte": "Cadastro inicial de empresa no sistema · visto em 1390 treinamentos"
  },
  {
    "id": "geral-003",
    "modulo": "geral",
    "nivel": 2,
    "pergunta": "Um cliente que vem do IOB/Contmatic pergunta como ficam as filiais no Domínio. Qual é a resposta correta?",
    "certa": "Cada filial é uma empresa separada, com código próprio; a centralização contábil é configurada em Parâmetros",
    "erradas": [
      "A filial é um estabelecimento dentro do cadastro da matriz, como no IOB, usando o mesmo código dela",
      "A filial é uma aba dentro do cadastro da matriz, herdando automaticamente todos os parâmetros dela",
      "A filial usa o mesmo código da matriz com um sufixo de letra (ex.: 10A, 10B), como no Contmatic"
    ],
    "explicacao": "No Domínio a filial é uma empresa à parte. Depois, em Controle > Parâmetros > Contabilidade > Opções, marca-se “Gera lançamentos na matriz” e informa-se o código da matriz. Fiscal e Folha ficam na filial; Contabilidade na matriz.",
    "caminho": "Controle > Parâmetros > Contabilidade > Opções",
    "fonte": "Cadastro inicial de empresa no sistema · visto em 1390 treinamentos"
  },
  {
    "id": "geral-004",
    "modulo": "geral",
    "nivel": 2,
    "pergunta": "A empresa mudou de regime tributário. Como ajustar os Parâmetros?",
    "certa": "Criar uma Nova Vigência a partir da data da mudança, sem mexer na vigência já calculada",
    "erradas": [
      "Alterar o regime direto na vigência atual e recalcular os meses anteriores para corrigir a base",
      "Copiar os parâmetros de uma empresa modelo do novo regime por cima da vigência atual do cliente",
      "Excluir a empresa e cadastrar de novo, pois o regime tributário não pode ser trocado depois"
    ],
    "explicacao": "Nunca se altera uma vigência já gravada e calculada: cria-se Nova Vigência na data da mudança, com uma descrição clara (ex.: “Troca Lucro Real”). Copiar de empresa modelo de outro regime depois de importar o perfil sobrepõe cadastros e bagunça os impostos.",
    "caminho": "Controle > Parâmetros > Nova Vigência",
    "fonte": "Parametrização inicial da empresa · visto em 687 treinamentos"
  },
  {
    "id": "geral-005",
    "modulo": "geral",
    "nivel": 2,
    "pergunta": "Para importar dados do eSocial (processo “de fora para dentro”), onde o certificado digital precisa estar obrigatoriamente?",
    "certa": "No Gerenciador de Certificados; o certificado em Controle > Empresas não basta",
    "erradas": [
      "Somente em Controle > Empresas, na aba Autenticação, vinculado ao CNPJ da empresa",
      "Somente em Controle > Contadores, na aba Certificado Digital, como procuração do escritório",
      "Somente em Controle > Parâmetros > eSocial, no campo de tipo de certificado da empresa"
    ],
    "explicacao": "O certificado precisa estar em dois lugares: no Gerenciador (importações externas, como eSocial e notas) e no cadastro da empresa ou do contador (envios internos). Se faltar o Gerenciador, o certificado nem aparece para seleção.",
    "caminho": "Lista de Programas > Gerenciador de Certificados",
    "fonte": "Certificados digitais · visto em 1260 treinamentos"
  },
  {
    "id": "geral-006",
    "modulo": "geral",
    "nivel": 1,
    "pergunta": "Por que a equipe recomenda o certificado A1 em vez do A3 para o cliente?",
    "certa": "O A3 tira a automação, pois precisa estar plugado e exige digitar a senha",
    "erradas": [
      "O A3 não é aceito pela Receita Federal para transmissão de eventos do eSocial",
      "O A1 vale por cinco anos e o A3 por apenas um, o que encarece a renovação",
      "O A3 não pode ser instalado no Gerenciador de Certificados do Domínio Web"
    ],
    "explicacao": "O A1 fica em arquivo (.pfx) e permite automação total (importações e rotinas sem ninguém plugar token ou digitar senha). O A3 funciona, mas depende de presença física e senha.",
    "caminho": "Controle > Empresas > aba Autenticação",
    "fonte": "Certificados digitais · visto em 1260 treinamentos"
  },
  {
    "id": "geral-007",
    "modulo": "geral",
    "nivel": 3,
    "pergunta": "Ao enviar ao eSocial aparece “CNPJ do certificado diferente do CNPJ da empresa”, e o escritório usa o certificado do contador (procuração). Qual a causa e a solução?",
    "certa": "Parâmetros está como “Empresa” mas o certificado é do contador: trocar o tipo para “Contador”",
    "erradas": [
      "O certificado venceu: basta renová-lo e importar de novo no Gerenciador de Certificados",
      "A empresa é filial: trocar o certificado para o do CNPJ da matriz e regravar os parâmetros",
      "O plugin TR Computer não carregou: fechar tudo, reinstalar o plugin e reabrir o Domínio Web"
    ],
    "explicacao": "Em Controle > Parâmetros > eSocial, o tipo de certificado precisa bater com o que está sendo usado: “Contador” (procuração) ou “Empresa” (próprio), com a inscrição transmissora (CNPJ ou CPF) correspondente.",
    "caminho": "Controle > Parâmetros > eSocial > Tipo de certificado",
    "fonte": "Certificados digitais · visto em 1260 treinamentos"
  },
  {
    "id": "geral-008",
    "modulo": "geral",
    "nivel": 1,
    "pergunta": "Durante a admissão falta o cargo no cadastro. Qual tecla cadastra o novo registro a partir do campo ativo, sem sair da tela?",
    "certa": "F7",
    "erradas": [
      "F2",
      "F8",
      "F12"
    ],
    "explicacao": "F7 cadastra um novo registro a partir do campo ativo (cargo, sindicato, jornada...). F2 pesquisa/consulta a tabela do campo, F8 troca de empresa sem fechar as telas e F12 abre a calculadora.",
    "caminho": "Atalhos de teclado (em notebooks, pode ser necessário Fn + tecla F)",
    "fonte": "Atalhos confirmados nos treinamentos"
  },
  {
    "id": "geral-009",
    "modulo": "geral",
    "nivel": 3,
    "pergunta": "Ao importar perfil de empresa para a Folha, qual perfil deve ser usado, independentemente do regime fiscal da empresa?",
    "certa": "O perfil 101, da empresa padrão 9995, em qualquer regime",
    "erradas": [
      "O perfil do mesmo regime do Fiscal (Simples, Presumido ou Real)",
      "O perfil 7, Simples Sintético, igual ao usado no Fiscal",
      "O perfil 103, Terceiro Setor Filial, para empresas com filial"
    ],
    "explicacao": "No Fiscal e na Contabilidade o perfil segue o regime (Simples, Presumido, Real). Na Folha, usa-se sempre o perfil 101, da empresa padrão 9995, qualquer que seja o regime fiscal.",
    "caminho": "Controle > Empresas > Importação > Conforme cadastro de perfis de empresas",
    "fonte": "Replicação de parâmetros entre empresas · visto em 392 treinamentos"
  },
  {
    "id": "geral-010",
    "modulo": "geral",
    "nivel": 2,
    "pergunta": "No Controle > Parâmetros > aba Personaliza, qual a diferença entre a data “Inicial” e o “Início efetivo”?",
    "certa": "“Inicial” é quando a empresa começa a usar o Domínio; “Início efetivo” é a abertura do CNPJ",
    "erradas": [
      "“Inicial” é a abertura do CNPJ; “Início efetivo” é quando a empresa passa a usar o Domínio",
      "As duas datas são sinônimas e o sistema sempre preenche as duas com o mesmo valor automaticamente",
      "“Inicial” vale para o Fiscal e “Início efetivo” vale para a Contabilidade, cada um com sua data"
    ],
    "explicacao": "A data inicial bloqueia a importação de notas anteriores a ela. Depois de ajustada, não mexa: alterar apaga a receita bruta acumulada e exige reapuração (e só é possível após excluir os lançamentos).",
    "caminho": "Controle > Parâmetros > aba Personaliza",
    "fonte": "Configuração de período inicial · visto em 335 treinamentos"
  },
  {
    "id": "geral-011",
    "modulo": "geral",
    "nivel": 1,
    "pergunta": "Qual código de contador deve ser usado no cadastro, para o sistema vincular automaticamente às novas empresas?",
    "certa": "O contador 1, pois o sistema o atribui sozinho às novas empresas cadastradas",
    "erradas": [
      "O contador 0, reservado pelo sistema para o responsável técnico do escritório",
      "Qualquer código, pois o sistema vincula o último contador cadastrado às novas empresas",
      "O contador com o menor CRC, já que o sistema ordena os contadores pelo número do registro"
    ],
    "explicacao": "O cadastro em Controle > Contadores vale para todas as empresas; só se vincula o código no cadastro da empresa. Usar outro código exige troca manual em cada empresa. Atenção ao CRC: sem a numeração após a letra “O”, as declarações (ECD, SPED, Reinf) dão erro.",
    "caminho": "Controle > Contadores (ou F7 no campo Contador da empresa)",
    "fonte": "Cadastro de contador responsável · visto em 265 treinamentos"
  },
  {
    "id": "geral-012",
    "modulo": "geral",
    "nivel": 2,
    "pergunta": "O escritório trocou a senha do Domínio Web e o agente de comunicação ficou com a bolinha vermelha. O que fazer?",
    "certa": "Atualizar a senha no usuário gerente, em Controle > Permissões > Usuários, nos três pontinhos",
    "erradas": [
      "Reinstalar o agente de comunicação no servidor e reiniciar todas as máquinas do escritório",
      "Trocar o certificado digital da empresa no Gerenciador de Certificados e gravar novamente",
      "Pedir ao suporte que redefina o usuário gerente, pois a senha só muda pela Domínio"
    ],
    "explicacao": "A senha do gerente no sistema é diferente da senha do Domínio Web/Onvio. Se não atualizar, o agente fica vermelho e para o eSocial, o buscador de notas e o Messenger. O agente demora alguns segundos para ficar verde.",
    "caminho": "Controle > Permissões > Usuários > gerente > três pontinhos",
    "fonte": "Alteração de senha de usuário · visto em 371 treinamentos"
  },
  {
    "id": "geral-013",
    "modulo": "geral",
    "nivel": 2,
    "pergunta": "Qual é a ordem correta para atualizar o Domínio em um escritório com servidor e várias estações?",
    "certa": "Servidor primeiro e depois as estações, pois todas precisam ficar na mesma versão",
    "erradas": [
      "As estações primeiro e depois o servidor, para testar a versão nova antes de liberar",
      "Uma estação por vez, mantendo o servidor na versão antiga até o fim da semana",
      "Tanto faz, pois o sistema aceita versões diferentes entre servidor e estações"
    ],
    "explicacao": "O Domínio só funciona com todas as máquinas na mesma versão. Se atualizar só a estação, o servidor dá erro. Nunca interrompa a atualização do banco: pode corromper os dados.",
    "caminho": "Gerenciador de Atualizações ou Utilitários > Configurar Atualização",
    "fonte": "Atualização do sistema Domínio · visto em 361 treinamentos"
  },
  {
    "id": "geral-014",
    "modulo": "geral",
    "nivel": 2,
    "pergunta": "O Domínio travou e a tela ficou vermelha. Qual é a forma correta de encerrar o processo?",
    "certa": "Pelo Gerenciador de Tarefas do próprio Domínio (janela alaranjada), nunca pelo Ctrl+Alt+Del",
    "erradas": [
      "Pelo Ctrl+Alt+Del, finalizando o processo do Domínio no Gerenciador de Tarefas do Windows",
      "Desligando a máquina da tomada, pois o sistema recupera os dados ao ser reaberto",
      "Reiniciando o servidor do escritório, que libera todas as conexões presas na hora"
    ],
    "explicacao": "Encerrar pelo Gerenciador do Domínio libera a licença corretamente. Se o limite de usuários for atingido por um processo em segundo plano, encerre por ele e aguarde cerca de 10 minutos.",
    "caminho": "Lista de Programas > Gerenciador de Tarefas",
    "fonte": "Performance do sistema · visto em 523 treinamentos"
  },
  {
    "id": "geral-015",
    "modulo": "geral",
    "nivel": 1,
    "pergunta": "Ao montar uma planilha de importação, o CNPJ e o CPF perdem o zero à esquerda. O que fazer?",
    "certa": "Adicionar o zero manualmente ao colar, pois o Excel remove o zero à esquerda desses campos",
    "erradas": [
      "Nada: o Domínio completa os zeros à esquerda automaticamente ao importar a planilha",
      "Salvar a planilha em PDF antes de importar, para o sistema preservar a formatação original",
      "Trocar o separador decimal do Windows, que é o que remove os zeros dos documentos"
    ],
    "explicacao": "Além disso, mantenha o arquivo fechado na importação (senão o sistema não lê), não invente cadastros (o código precisa existir no Domínio) e use o Excel de verdade quando a planilha tiver macro.",
    "caminho": "Utilitários > Importação > Importador",
    "fonte": "Importação de planilha Excel · visto em 353 treinamentos"
  },
  {
    "id": "geral-016",
    "modulo": "geral",
    "nivel": 2,
    "pergunta": "Aparece o aviso de limite de estações conectadas, mas ninguém está usando o sistema. Quem pode derrubar a conexão presa?",
    "certa": "Só o usuário gerente, em Conexões; qualquer usuário consegue apenas visualizar",
    "erradas": [
      "Qualquer usuário, desde que seja o dono da conexão presa e informe a própria senha",
      "Somente o suporte da Domínio, por chamado, pois o escritório não tem acesso a esse recurso",
      "O sistema libera sozinho a conexão presa depois de 5 minutos sem nenhuma atividade"
    ],
    "explicacao": "Conexões presas costumam vir de queda de luz ou internet. Desconectar um usuário ativo faz ele perder o cadastro em andamento, então confirme antes. Abrir dois módulos ao mesmo tempo consome duas licenças.",
    "caminho": "Lista de Programas > Conexões",
    "fonte": "Limite de usuários simultâneos · visto em 152 treinamentos"
  },
  {
    "id": "geral-017",
    "modulo": "geral",
    "nivel": 2,
    "pergunta": "A conversão do sistema anterior traz a movimentação (lançamentos, notas) para o Domínio?",
    "certa": "Não: traz só os cadastros; a movimentação entra por SPED (melhor opção) ou por planilha",
    "erradas": [
      "Sim, traz toda a movimentação dos últimos 12 meses junto com os cadastros",
      "Sim, traz a movimentação, mas apenas dos módulos de Escrita Fiscal e Contabilidade",
      "Não traz nada: nem os cadastros, que precisam ser digitados um a um no Domínio"
    ],
    "explicacao": "A conversão traz cadastros como empresas e funcionários. Para a movimentação, o caminho recomendado é importar o SPED; alternativa é a planilha com data, valor, histórico e débito/crédito.",
    "caminho": "Utilitários > Importação",
    "fonte": "Importação de planilha Excel · visto em 353 treinamentos"
  },
  {
    "id": "geral-018",
    "modulo": "geral",
    "nivel": 2,
    "pergunta": "O cliente quer restaurar um backup apenas do módulo de Folha. É possível?",
    "certa": "Não: o backup é integral e a restauração também, não dá para restaurar só um módulo",
    "erradas": [
      "Sim, basta marcar o módulo de Folha na tela de restauração do backup",
      "Sim, mas só se o backup tiver sido feito pelo Agente de Backup em Nuvem",
      "Sim, desde que os demais módulos estejam fechados durante toda a restauração"
    ],
    "explicacao": "Como a restauração é integral, ela pode apagar parametrizações feitas depois do backup. Alinhe com a equipe antes. O banco local serve só para consulta: nunca trabalhe oficialmente nele.",
    "caminho": "Utilitários > Backup",
    "fonte": "Backup do banco de dados · visto em 238 treinamentos"
  },
  {
    "id": "fiscal-001",
    "modulo": "fiscal",
    "nivel": 1,
    "pergunta": "O que a Importação Padrão do Escrita Fiscal consegue ler?",
    "certa": "Apenas arquivos XML (podem estar em ZIP, mas soltos, sem subpastas)",
    "erradas": [
      "XML e PDF das notas, desde que os dois estejam juntos na mesma pasta",
      "XML e PDF, mas o PDF só é lido quando a nota é de serviço (NFS-e)",
      "Somente XML, organizados em uma subpasta por mês dentro do arquivo ZIP"
    ],
    "explicacao": "O sistema lê apenas XML, nunca PDF. Se os arquivos estiverem zipados, devem estar soltos no ZIP, sem subpastas.",
    "caminho": "Utilitários > Importação > Importação Padrão",
    "fonte": "Importação de documentos · visto em 1690 treinamentos"
  },
  {
    "id": "fiscal-002",
    "modulo": "fiscal",
    "nivel": 2,
    "pergunta": "Na importação de XMLs, o que deve ser importado primeiro?",
    "certa": "As notas normais, antes das canceladas (cada cancelamento vem em XML separado)",
    "erradas": [
      "As notas canceladas, para o sistema já ignorar as notas originais na importação",
      "As notas de saída, depois as de entrada, e só então os XMLs de cancelamento",
      "Tanto faz: o sistema cruza a ordem automaticamente pela chave de acesso da nota"
    ],
    "explicacao": "Se o cancelamento for importado antes da nota original, ou esquecido, a apuração fica errada. A ordem certa é: notas normais primeiro, canceladas depois.",
    "caminho": "Utilitários > Importação > Importação Padrão",
    "fonte": "Importação de documentos · visto em 1690 treinamentos"
  },
  {
    "id": "fiscal-003",
    "modulo": "fiscal",
    "nivel": 2,
    "pergunta": "A captura por SIEG/API pegou só as notas a partir da ativação. Como trazer notas mais antigas?",
    "certa": "Baixar os XMLs do portal/SIEG, salvar numa pasta local e importar pela Importação Padrão",
    "erradas": [
      "Reativar a empresa no painel Docs Fiscal para o sistema buscar o histórico completo",
      "Marcar “Somente notas não importadas” na Importação API para forçar o retroativo antigo",
      "Aguardar a rotina automática, que busca o histórico completo durante a madrugada"
    ],
    "explicacao": "SIEG/API só captura a partir da ativação (retroativo de 60 a 90 dias, conforme a Sefaz). Para notas anteriores, o caminho é XML manual pela Importação Padrão.",
    "caminho": "Utilitários > Importação > Importação Padrão",
    "fonte": "Importação de documentos · visto em 1690 treinamentos"
  },
  {
    "id": "fiscal-004",
    "modulo": "fiscal",
    "nivel": 1,
    "pergunta": "No Domínio instalado no computador (Local), a rotina automática de importação de notas roda com o sistema fechado?",
    "certa": "Não: no Local o sistema precisa estar aberto e logado no horário programado (o Domínio Web roda sem usuário logado)",
    "erradas": [
      "Sim, o servidor executa a rotina mesmo que ninguém esteja logado, desde que o computador esteja ligado",
      "Sim, desde que o Gerenciador de Certificados esteja configurado para a empresa que será importada",
      "Sim, mas só se a rotina tiver sido criada pelo usuário gerente e agendada para a madrugada"
    ],
    "explicacao": "No Domínio Local, rotinas automáticas só executam com o sistema aberto e o usuário logado no horário agendado. Por isso o agendamento deve considerar o expediente do escritório. O Domínio Web roda sem usuário logado.",
    "caminho": "Arquivos > Rotinas Automáticas > aba Importação",
    "fonte": "Importação de documentos · visto em 1690 treinamentos"
  },
  {
    "id": "fiscal-005",
    "modulo": "fiscal",
    "nivel": 2,
    "pergunta": "Ao importar aparece “Não foi encontrada vigência para o produto”. Qual é a causa e a correção?",
    "certa": "Produto cadastrado em mês posterior ao da nota: mudar a data de cadastro para o dia 1 do primeiro mês e reimportar",
    "erradas": [
      "O acumulador está sem imposto configurado: incluir o ICMS na aba Impostos e reimportar as notas do mês",
      "O certificado digital venceu: renovar no Gerenciador de Certificados e reimportar os arquivos",
      "O produto está duplicado no cadastro: excluir um dos registros e deixar o sistema recriar na importação"
    ],
    "explicacao": "Em Utilitários > Alterar Produtos, selecione os produtos, altere a data de cadastro para o dia 1 do primeiro mês e, na aba Impostos, marque “Alterar última vigência”. Depois reimporte.",
    "caminho": "Utilitários > Alterar Produtos",
    "fonte": "Importação de documentos · visto em 1690 treinamentos"
  },
  {
    "id": "fiscal-006",
    "modulo": "fiscal",
    "nivel": 1,
    "pergunta": "Você precisa mudar o código de um acumulador já cadastrado. O que fazer?",
    "certa": "Não dá para alterar o código (máximo 4 dígitos): crie um novo acumulador com um código disponível",
    "erradas": [
      "Editar o código do acumulador e, em seguida, clicar em Nova Vigência para gravar a mudança",
      "Alterar o código somente se nenhuma nota importada ainda estiver usando esse acumulador no período",
      "Pedir ao suporte, pois somente a Domínio consegue renumerar acumuladores no banco de dados"
    ],
    "explicacao": "O código do acumulador não é editável. Use Copiar Registro e crie outro com o código livre, depois ajuste as notas em Utilitários > Alterar Notas, se necessário.",
    "caminho": "Arquivos > Acumuladores",
    "fonte": "Acumuladores fiscais · visto em 1380 treinamentos"
  },
  {
    "id": "fiscal-007",
    "modulo": "fiscal",
    "nivel": 3,
    "pergunta": "O XML da nota traz valor de imposto, mas o sistema calcula zero. O acumulador está com a base zerada. Qual é o comportamento?",
    "certa": "A base zerada no acumulador força zero, mesmo com valor no XML; trocar para “Sem” faz o sistema considerar o XML",
    "erradas": [
      "O XML sempre prevalece sobre o acumulador, então o zero tem outra causa, como o CST ou o CFOP da nota importada",
      "A base zerada só vale para notas de serviço e nunca interfere no cálculo das notas de mercadorias",
      "O sistema usa a base do XML normalmente e apenas avisa a divergência na aba Advertências"
    ],
    "explicacao": "Uma base zerada no acumulador é uma ordem: o sistema obedece e zera, ignorando o valor do XML. Para que ele considere o XML, altere a base para “Sem”.",
    "caminho": "Arquivos > Acumuladores > aba Impostos",
    "fonte": "Acumuladores fiscais · visto em 1380 treinamentos"
  },
  {
    "id": "fiscal-008",
    "modulo": "fiscal",
    "nivel": 2,
    "pergunta": "Você ajustou um acumulador na empresa padrão. De onde deve ser feita a replicação para as demais empresas?",
    "certa": "Da empresa padrão do mesmo regime (Simples, Presumido ou Real), pois os impostos diferem entre regimes",
    "erradas": [
      "De qualquer empresa padrão, pois os acumuladores são idênticos em todos os regimes tributários",
      "Sempre da empresa padrão do Simples, que tem a estrutura de acumuladores mais completa do sistema",
      "Não existe replicação: cada acumulador precisa ser refeito manualmente em cada empresa"
    ],
    "explicacao": "Use o botão Replicar a partir da empresa padrão do mesmo regime. Atenção: o Padrão Nacional (NFS-e) não vem na importação de perfil e deve ser replicado manualmente da empresa padrão correspondente.",
    "caminho": "Arquivos > Acumuladores > Replicar",
    "fonte": "Acumuladores fiscais · visto em 1380 treinamentos"
  },
  {
    "id": "fiscal-009",
    "modulo": "fiscal",
    "nivel": 2,
    "pergunta": "Quantas vezes se acessa a tela de Receita Bruta Acumulada (PGDAS) de uma empresa do Simples?",
    "certa": "Uma única vez, no primeiro mês; depois o sistema calcula sozinho com as notas importadas",
    "erradas": [
      "Todo mês, para atualizar a receita bruta antes de cada apuração do Simples",
      "Uma vez por trimestre, sempre que o sistema pedir a atualização do limite",
      "Todo mês, mas só nas empresas que vieram de outro sistema e foram convertidas"
    ],
    "explicacao": "A data de início dessa tela deve ser igual à de Controle > Parâmetros > Personaliza, senão os dados são apagados ou ficam errados. Preencha o ano completo (12 meses) para permitir a DEFIS pelo Domínio. O sistema não sobrescreve: se já preencheu, não acesse de novo.",
    "caminho": "Movimentos > Outros > Simples Nacional > Receita Bruta Acumulada",
    "fonte": "Importação de receita bruta acumulada PGDAS · visto em 574 treinamentos"
  },
  {
    "id": "fiscal-010",
    "modulo": "fiscal",
    "nivel": 1,
    "pergunta": "Na importação de XMLs aparecem avisos na aba Advertências. O que fazer para as notas serem gravadas?",
    "certa": "Marcar “Todos” nas advertências; sem isso as notas não importam, mesmo sendo só avisos",
    "erradas": [
      "Nada: advertência não impede a gravação e as notas sobem sozinhas ao clicar em Gravar",
      "Corrigir cada aviso antes de gravar, pois advertência é um erro que bloqueia as notas",
      "Excluir as notas com advertência e importar de novo apenas as que vieram sem avisos"
    ],
    "explicacao": "Advertências não impedem a importação, mas precisam ser marcadas. Já os erros impedem a gravação: trate-os antes e reimporte. Nota duplicada (mesma série e número) é ignorada, sem gerar erro.",
    "caminho": "Tela de importação > aba Advertências",
    "fonte": "Advertências e erros na importação · visto em 570 treinamentos"
  },
  {
    "id": "fiscal-011",
    "modulo": "fiscal",
    "nivel": 1,
    "pergunta": "O DAS do Domínio saiu com 1 centavo de diferença do sistema anterior, e o faturamento é o mesmo. O que explica?",
    "certa": "Arredondamento: o Domínio arredonda para cima, então a diferença de centavos é normal",
    "erradas": [
      "Erro de importação: é preciso excluir as notas do mês e importar os XMLs de novo",
      "RBT12 incompleto: o sistema calcula errado e só a retificação do PGDAS corrige",
      "Diferença de vigência: o acumulador usado ainda está com a alíquota do ano anterior"
    ],
    "explicacao": "Se a diferença for maior que centavos, verifique o RBT12 dos 12 meses (se o primeiro mês estiver errado, todos erram) e a data de início das atividades em Parâmetros > Personaliza.",
    "caminho": "Movimentos > Apuração",
    "fonte": "Apuração de impostos Simples Nacional · visto em 897 treinamentos"
  },
  {
    "id": "fiscal-012",
    "modulo": "fiscal",
    "nivel": 3,
    "pergunta": "Em uma empresa do Simples com matriz e filiais, qual RBT12 deve ser usado na apuração?",
    "certa": "O RBT12 individual de cada empresa, nunca o consolidado de matriz e filiais",
    "erradas": [
      "O RBT12 consolidado da matriz com todas as filiais, pois o limite é do CNPJ raiz",
      "O RBT12 da matriz, replicado para as filiais no momento do cadastro de cada uma",
      "A soma do RBT12 da matriz com o da filial de maior faturamento, mês a mês"
    ],
    "explicacao": "Cada filial é uma empresa separada no Domínio, com seu próprio RBT12. Se a data de início de atividades estiver errada em Personaliza, o RBT12 sai errado.",
    "caminho": "Movimentos > Apuração",
    "fonte": "Apuração de impostos Simples Nacional · visto em 897 treinamentos"
  },
  {
    "id": "fiscal-013",
    "modulo": "fiscal",
    "nivel": 3,
    "pergunta": "Na apuração de PIS/COFINS, quando o flag de dedução do ICMS da base deve ser marcado em Parâmetros > Opções?",
    "certa": "Só se o XML não vier com a dedução pronta; se marcar e o XML já vier deduzido, deduz duas vezes",
    "erradas": [
      "Sempre, pois o sistema ignora a dedução que vem no XML e usa a dele",
      "Nunca, pois a dedução do ICMS só é feita pelo acumulador, e não por parâmetro",
      "Apenas no Lucro Presumido, já que no Lucro Real a dedução é feita pelo CST do produto"
    ],
    "explicacao": "Se a base não deduz o ICMS, verifique se o flag está marcado mas o XML já vem deduzido (ou o inverso), e ajuste em Parâmetros > Opções ou em Configuração de Importação > Impostos.",
    "caminho": "Controle > Parâmetros > Opções",
    "fonte": "Apuração de PIS e COFINS · visto em 650 treinamentos"
  },
  {
    "id": "fiscal-014",
    "modulo": "fiscal",
    "nivel": 3,
    "pergunta": "Em Utilitários > Exclusão, ao filtrar por acumulador, o que deve ser feito com o acumulador que se quer excluir?",
    "certa": "Incluí-lo no filtro, o que parece contraintuitivo mas é como a tela funciona",
    "erradas": [
      "Marcá-lo como excluído, pois o filtro funciona por exclusão de acumuladores",
      "Digitar o código do acumulador na caixa de exceção, que o preserva da exclusão",
      "Deixar o filtro vazio, pois a exclusão sempre vale para todos os acumuladores do período"
    ],
    "explicacao": "Pode-se informar um período amplo e filtrar por acumulador. Em notas segmentadas, cancele em todos os segmentos. Baixas em grupo: excluir uma nota desfaz a baixa de todas do grupo, e o sistema avisa.",
    "caminho": "Utilitários > Exclusão",
    "fonte": "Exclusão de notas fiscais · visto em 258 treinamentos"
  },
  {
    "id": "fiscal-015",
    "modulo": "fiscal",
    "nivel": 2,
    "pergunta": "Uma nota importada está com a data de emissão errada. Dá para alterá-la manualmente?",
    "certa": "Não, só a data de saída; a data de emissão vem do XML",
    "erradas": [
      "Sim, clicando na nota em Movimentos e editando o campo Data de Emissão",
      "Sim, mas apenas se a nota for de serviço e estiver no mesmo mês da apuração",
      "Sim, desde que a empresa esteja no regime de caixa e o mês ainda não esteja encerrado"
    ],
    "explicacao": "Para alterar notas manualmente, troque sempre o acumulador antes do CFOP, senão dá erro. Alteração individual só vale para poucas notas; para muitas, crie uma regra de acumulador ou use o utilitário em lote.",
    "caminho": "Movimentos > Entradas (ou Saídas) > clicar na nota",
    "fonte": "Alteração manual de nota fiscal · visto em 421 treinamentos"
  },
  {
    "id": "fiscal-016",
    "modulo": "fiscal",
    "nivel": 2,
    "pergunta": "A emissão do DAS pelo e-CAC falha no meio do expediente, por captcha ou bloqueio. Qual a orientação?",
    "certa": "Tentar após as 18h ou usar o código de acesso, pois o e-CAC pode bloquear robôs das 8h às 18h",
    "erradas": [
      "Trocar o certificado digital A1 por A3 durante o expediente, que não sofre o bloqueio",
      "Reiniciar o servidor do escritório e repetir a emissão logo em seguida, no mesmo horário",
      "Emitir o DAS apenas no último dia do prazo, quando o e-CAC libera mais acessos"
    ],
    "explicacao": "O código de acesso (Controle > Parâmetros > Federal > Simples Nacional) é mais rápido que o certificado. A verificação em duas etapas do Gov.br impede a emissão: desabilite no e-CAC. Sem movimento, emita pela tela de Relatórios > Guias.",
    "caminho": "Relatórios > Guias > Federais > DAS",
    "fonte": "Emissão e transmissão de guia DAS · visto em 529 treinamentos"
  },
  {
    "id": "fiscal-017",
    "modulo": "fiscal",
    "nivel": 2,
    "pergunta": "Ao alterar manualmente uma nota, qual ordem evita o erro na tela?",
    "certa": "Trocar primeiro o acumulador e só depois o CFOP",
    "erradas": [
      "Trocar primeiro o CFOP e só depois o acumulador da nota",
      "Gravar a nota duas vezes, uma para cada campo, na ordem que o usuário preferir",
      "Alterar os dois ao mesmo tempo, pois o sistema grava os campos em conjunto"
    ],
    "explicacao": "Quando se altera CFOP ou acumulador, o sistema pergunta se troca também no produto: clique em Sim. Alterar o ICMS na capa exige ajustar os itens (estoque) para não divergir no SPED.",
    "caminho": "Movimentos > Entradas (ou Saídas) > clicar na nota",
    "fonte": "Alteração manual de nota fiscal · visto em 421 treinamentos"
  },
  {
    "id": "fiscal-018",
    "modulo": "fiscal",
    "nivel": 2,
    "pergunta": "Uma NFS-e emitida em outubro, referente a setembro, não entrou na importação de setembro. Por quê?",
    "certa": "O importador usa a data de emissão, e não a competência; a nota entra no mês de emissão",
    "erradas": [
      "O importador usa a competência da nota, que veio errada no XML da prefeitura",
      "A NFS-e só é importada se a empresa tiver um RPS gerado pelo Domínio no mês",
      "O sistema bloqueia notas de competência anterior até o fechamento do mês corrente"
    ],
    "explicacao": "Para trazer pela competência, altere a data em Utilitários > Alterar Notas, ou importe pela Sieg, que considera a competência.",
    "caminho": "Utilitários > Importação > NFS-e",
    "fonte": "Emissão de NFS-e · visto em 404 treinamentos"
  },
  {
    "id": "fiscal-019",
    "modulo": "fiscal",
    "nivel": 2,
    "pergunta": "Na importação de XMLs, o que acontece se marcar “Sobrescrever cadastros” de produtos?",
    "certa": "Apaga as configurações feitas manualmente nos produtos; use só “Importar registros inexistentes”",
    "erradas": [
      "Atualiza só os preços dos produtos, mantendo as configurações de impostos já feitas",
      "Duplica os produtos já cadastrados, mantendo as duas versões lado a lado no cadastro",
      "Nada: a opção só vale na primeira importação da empresa e depois fica desabilitada"
    ],
    "explicacao": "Para evitar duplicação, configure a validação por Descrição e NCM na entrada (e Código na saída). Produtos novos todo mês precisam ser configurados de novo e o utilitário de PIS/COFINS rodado.",
    "caminho": "Arquivos > Configuração de Importação > Produtos",
    "fonte": "Cadastro de produtos no fiscal · visto em 677 treinamentos"
  },
  {
    "id": "fiscal-020",
    "modulo": "fiscal",
    "nivel": 3,
    "pergunta": "Para cancelar manualmente uma nota de serviço sem afetar o faturamento, qual cuidado é essencial?",
    "certa": "Zerar o Valor do Serviço antes de trocar a situação e usar o acumulador 9101",
    "erradas": [
      "Trocar a situação para cancelada e depois zerar o valor, pois a ordem não importa",
      "Excluir a nota e lançar de novo com o acumulador 9101 e o valor original do serviço",
      "Manter o valor e apenas desmarcar os impostos no acumulador da nota cancelada"
    ],
    "explicacao": "Se a situação mudar com o valor ainda preenchido, o faturamento é impactado. Prefira importar o XML do evento de cancelamento; nas NFS-e, a maioria das prefeituras não envia XML de cancelamento, então confira no portal.",
    "caminho": "Utilitários > Alterar Notas e Outros Lançamentos",
    "fonte": "Tratamento de notas canceladas · visto em 238 treinamentos"
  },
  {
    "id": "folha-001",
    "modulo": "folha",
    "nivel": 1,
    "pergunta": "Antes de calcular a folha no Domínio é preciso “ativar” a competência, como no Contmatic?",
    "certa": "Não: basta selecionar a competência e calcular",
    "erradas": [
      "Sim, a competência precisa ser ativada por um usuário gerente",
      "Sim, mas só no primeiro mês de uso do Domínio",
      "Só é preciso ativar quando a empresa é do regime caixa"
    ],
    "explicacao": "Diferente do Contmatic, não existe ativação de mês. O Domínio também calcula empregados e contribuintes juntos (seleção “Ambos”) e permite calcular várias empresas de uma vez.",
    "caminho": "Processos > Cálculo",
    "fonte": "Cálculo de folha e provisões · visto em 1039 treinamentos"
  },
  {
    "id": "folha-002",
    "modulo": "folha",
    "nivel": 2,
    "pergunta": "Em empresa de regime caixa, o que fazer antes de calcular o mês atual?",
    "certa": "Calcular o mês anterior primeiro (ex.: calcular junho para gerar o IR correto de julho)",
    "erradas": [
      "Calcular o mês seguinte antes, para projetar o pagamento e ajustar as bases do IR",
      "Excluir o cálculo do mês anterior para não duplicar os valores no mês atual da folha",
      "Nada: o regime caixa só altera a data de envio dos eventos periódicos ao eSocial"
    ],
    "explicacao": "No regime caixa o pagamento vem do mês anterior. Calculando o mês anterior primeiro, o IR do mês corrente é gerado corretamente. Confira também a data de pagamento no primeiro mês.",
    "caminho": "Processos > Cálculo",
    "fonte": "Cálculo de folha e provisões · visto em 1039 treinamentos"
  },
  {
    "id": "folha-003",
    "modulo": "folha",
    "nivel": 2,
    "pergunta": "Você alterou a tributação de forma que afeta todos os funcionários. Ao calcular de novo, o que o sistema faz por padrão?",
    "certa": "Recalcula só quem teve alteração; para forçar todos, use “Realizar Recálculo”",
    "erradas": [
      "Recalcula todos os funcionários da empresa sempre que o botão Calcular é clicado",
      "Exige excluir o cálculo anterior da competência antes de refazer qualquer valor",
      "Recalcula somente os funcionários que estavam na seleção anterior, em qualquer situação"
    ],
    "explicacao": "O sistema analisa alterações e só recalcula quem mudou. Quando a mudança afeta todos (ex.: tributação), marque “Realizar Recálculo”. Também não é necessário excluir o cálculo anterior.",
    "caminho": "Processos > Cálculo > Realizar Recálculo",
    "fonte": "Cálculo de folha e provisões · visto em 1039 treinamentos"
  },
  {
    "id": "folha-004",
    "modulo": "folha",
    "nivel": 1,
    "pergunta": "Qual é a melhor prática para criar uma nova rubrica?",
    "certa": "Copiar uma rubrica similar e ajustar, sem alterar as rubricas padrão",
    "erradas": [
      "Criar do zero, para não herdar configurações indevidas de outra rubrica",
      "Alterar a rubrica padrão existente e salvar com outro nome de rubrica",
      "Criar na empresa do cliente e depois replicar para a empresa padrão 9995"
    ],
    "explicacao": "Copiar uma rubrica parecida evita esquecer incidências (INSS, FGTS, IR, eSocial). As rubricas padrão (criadas em 01/01/2015) não devem ser alteradas. Se houver fórmula, ela é copiada à parte.",
    "caminho": "Arquivo > Rubricas",
    "fonte": "Rubricas e lançamentos · visto em 1162 treinamentos"
  },
  {
    "id": "folha-005",
    "modulo": "folha",
    "nivel": 2,
    "pergunta": "Em uma fórmula de rubrica, o valor 1.50 representa quanto?",
    "certa": "150% (o percentual na fórmula é decimal: 1.25 = 125%)",
    "erradas": [
      "1,5% do valor da base de cálculo informada na rubrica",
      "50% de acréscimo sobre a base, ou seja, 0,5 vez o valor",
      "1 hora e 50 minutos, como no campo de horas da rubrica"
    ],
    "explicacao": "Na fórmula, o percentual é decimal: 1.25 equivale a 125% e 1.50 a 150%. Por isso uma hora extra a 50% usa 1.50, e um adicional de 40% pode usar 1.40.",
    "caminho": "Arquivo > Rubricas > Fórmulas",
    "fonte": "Rubricas e lançamentos · visto em 1162 treinamentos"
  },
  {
    "id": "folha-006",
    "modulo": "folha",
    "nivel": 1,
    "pergunta": "As rubricas do sistema anterior vêm na conversão para o Domínio?",
    "certa": "Não: as médias vêm, mas as rubricas são criadas conforme a demanda na tabela nova (padrão 9995)",
    "erradas": [
      "Sim, todas as rubricas vêm com suas incidências, fórmulas e códigos do eSocial já ajustados",
      "Sim, mas só as rubricas de proventos vêm; os descontos precisam ser recriados na tabela nova",
      "Não vêm as rubricas e também não vêm as médias: tudo é lançado à mão no primeiro cálculo"
    ],
    "explicacao": "A tabela de rubricas é nova (padrão 9995). A conversão traz as médias, mas não as rubricas. Lançamentos fixos (insalubridade, vale-transporte), em geral, precisam ser refeitos.",
    "caminho": "Arquivo > Rubricas",
    "fonte": "Rubricas e lançamentos · visto em 1162 treinamentos"
  },
  {
    "id": "folha-007",
    "modulo": "folha",
    "nivel": 2,
    "pergunta": "Qual é a sequência correta dos eventos periódicos do eSocial no mês?",
    "certa": "Enviar S-1200 e S-1210; depois de validados, enviar o S-1299 (fechamento)",
    "erradas": [
      "Enviar S-1299 primeiro, para abrir a competência, e depois S-1200 e S-1210",
      "Enviar S-1210, depois S-1299 e por último S-1200",
      "Enviar os três juntos; o eSocial valida a ordem sozinho"
    ],
    "explicacao": "Calcule a folha, envie S-1200 (remuneração) e S-1210 (pagamento) e acompanhe no Painel até “Validados”. Só então desmarque os dois, marque o S-1299 e envie. O S-1299 cair em Advertências é padrão do sistema.",
    "caminho": "Relatórios > eSocial > Eventos Periódicos",
    "fonte": "eSocial · visto em 660 treinamentos"
  },
  {
    "id": "folha-008",
    "modulo": "folha",
    "nivel": 3,
    "pergunta": "O cliente quer enviar o eSocial por dois sistemas ao mesmo tempo durante a migração. O que orientar?",
    "certa": "Não fazer: cada sistema gera numeração própria, e isso causa retrabalho e erros de validação",
    "erradas": [
      "Pode, desde que um sistema envie só as admissões e o outro envie apenas a folha mensal",
      "Pode, o eSocial aceita eventos duplicados por CPF/mês e mantém sempre o mais recente na base",
      "Pode, desde que os dois sistemas usem exatamente o mesmo certificado digital da empresa"
    ],
    "explicacao": "O eSocial aceita um evento por CPF/mês. Se a folha já foi enviada pelo sistema anterior, é preciso excluir os eventos antes de reenviar pelo Domínio, ou usar as alternativas de primeiro mês (Identificador de Remuneração).",
    "caminho": "Relatórios > eSocial > Eventos Periódicos",
    "fonte": "eSocial · visto em 660 treinamentos"
  },
  {
    "id": "folha-009",
    "modulo": "folha",
    "nivel": 2,
    "pergunta": "Ao cadastrar um colaborador que já trabalhava na empresa, qual matrícula eSocial deve ser usada?",
    "certa": "A idêntica à do sistema anterior, pois matrícula diferente duplica o colaborador no portal",
    "erradas": [
      "A sequência nova do Domínio, que o sistema gera para cada colaborador admitido na empresa",
      "O número do CPF, pois o eSocial aceita o CPF como matrícula em qualquer tipo de vínculo",
      "Qualquer uma, já que o eSocial vincula pelo CPF e ignora o código da matrícula informado"
    ],
    "explicacao": "O código interno do Domínio pode diferir (ele usa sequências separadas para CLT, sócios e estagiários), mas a matrícula eSocial precisa ser igual. Matrícula divergente gera o erro 723; apague-a no Domínio, grave e reenvie.",
    "caminho": "Arquivo > Empregados",
    "fonte": "Cadastro de colaborador empregado · visto em 659 treinamentos"
  },
  {
    "id": "folha-010",
    "modulo": "folha",
    "nivel": 1,
    "pergunta": "Na tela de Serviços, o que representa o serviço 1?",
    "certa": "A própria empresa; os serviços 2, 3 e seguintes são os tomadores, quando houver",
    "erradas": [
      "O primeiro tomador de serviço contratado pela empresa, cadastrado na ordem de início",
      "O serviço do sócio administrador, enquanto os demais códigos são dos empregados",
      "O serviço da matriz, e os demais códigos são das filiais que a empresa possui"
    ],
    "explicacao": "Configure os serviços antes de calcular a folha: sem o FPAS aparece o erro de desmembramento do serviço faltando. O eSocial não aceita vigência futura; crie a vigência no mês de início.",
    "caminho": "Arquivo > Serviços",
    "fonte": "Configuração de serviços e lotação tributária · visto em 460 treinamentos"
  },
  {
    "id": "folha-011",
    "modulo": "folha",
    "nivel": 2,
    "pergunta": "Ao migrar para o Domínio, por que criar uma nova vigência no cadastro de Serviços?",
    "certa": "Para subir a tabela do Domínio ao eSocial; sem ela a folha não é enviada",
    "erradas": [
      "Para zerar o histórico do sistema anterior e recomeçar o cadastro de serviços do zero",
      "Porque a vigência do sistema anterior é apagada na conversão e precisa ser refeita",
      "Para liberar o cálculo da folha, que só funciona com a vigência criada no mês corrente"
    ],
    "explicacao": "As vigências antigas voltam como “duplicado” no painel: exclua-as, pois já foram enviadas pelo sistema anterior. No caso de erro de lotação invalidada, confira a lotação no eSocial web e crie a vigência com dados idênticos.",
    "caminho": "Arquivo > Serviços",
    "fonte": "Configuração de serviços e lotação tributária · visto em 460 treinamentos"
  },
  {
    "id": "folha-012",
    "modulo": "folha",
    "nivel": 2,
    "pergunta": "Uma empresa não teve movimento no mês. Como enviar o fechamento do eSocial?",
    "certa": "Enviando apenas o S-1299, sem marcar o S-1200 nem o S-1210",
    "erradas": [
      "Enviando S-1200 e S-1210 zerados e só depois o S-1299, para manter a sequência",
      "Não enviando nada, pois o eSocial fecha a competência sozinho sem movimento",
      "Enviando o S-1299 junto com o S-2299 de rescisão, para encerrar o vínculo do mês"
    ],
    "explicacao": "O S-1299 só é enviado depois que S-1200 e S-1210 estão validados; se tentar junto, o sistema trava em cinza. Não existe “fechar mês” ou “ativar mês” no Domínio, e a competência pode ser enviada a qualquer momento.",
    "caminho": "Relatórios > eSocial > Eventos Periódicos",
    "fonte": "Envio de fechamento eSocial · visto em 356 treinamentos"
  },
  {
    "id": "folha-013",
    "modulo": "folha",
    "nivel": 2,
    "pergunta": "Quais eventos o Domínio NÃO envia automaticamente ao eSocial, mesmo depois da data de início configurada?",
    "certa": "Folha e rescisão, que sempre são enviadas manualmente",
    "erradas": [
      "Admissão e férias, que dependem de aprovação do gerente antes de cada envio",
      "Afastamento e admissão, que só sobem com o fechamento da folha do mês seguinte",
      "Nenhum: depois da data de início configurada, todos os eventos sobem sozinhos"
    ],
    "explicacao": "Depois da data de início segura, admissão, férias e afastamento sobem automaticamente; antes dela o sistema pergunta. O parâmetro é por empresa e por módulo.",
    "caminho": "Controle > Parâmetros > aba eSocial",
    "fonte": "Configuração de parâmetros eSocial · visto em 394 treinamentos"
  },
  {
    "id": "folha-014",
    "modulo": "folha",
    "nivel": 2,
    "pergunta": "O cliente já fechou a rescisão no sistema anterior. No Domínio, ele pode apenas informar a data de fim do contrato?",
    "certa": "Não: no Domínio é obrigatório calcular a rescisão, senão o funcionário continua ativo",
    "erradas": [
      "Sim, basta a data de fim do contrato para o sistema desligar o funcionário",
      "Sim, mas só se a rescisão tiver sido enviada ao eSocial pelo sistema anterior",
      "Não: é preciso emitir o TRCT em papel e só depois desligar no cadastro do empregado"
    ],
    "explicacao": "Os valores não precisam bater exatamente se o informe for pelo sistema anterior. A rescisão desliga o funcionário automaticamente; para ajustar salário ou lançamento, exclua a rescisão, corrija e recalcule. Nunca teste com rescisão oficial: use o simulador.",
    "caminho": "Processos > Rescisões > Individual",
    "fonte": "Cálculo de rescisão individual · visto em 306 treinamentos"
  },
  {
    "id": "folha-015",
    "modulo": "folha",
    "nivel": 2,
    "pergunta": "Qual a diferença entre a importação de dados do eSocial e a conversão do sistema anterior?",
    "certa": "A importação traz só cadastros; a conversão traz também médias, férias e afastamentos",
    "erradas": [
      "A importação traz a folha calculada e a conversão traz apenas os cadastros",
      "As duas trazem exatamente os mesmos dados; a diferença é só o tempo de processamento",
      "A importação traz médias e férias, e a conversão traz apenas empresas e sócios"
    ],
    "explicacao": "A importação do eSocial não traz PIS, RG, nome do pai e da mãe, histórico de férias, afastamentos, médias nem folhas calculadas. Só importa o S-2200 completo; admissão preliminar retorna “Não importado”.",
    "caminho": "Utilitários > Importação de Dados do eSocial",
    "fonte": "Importação de dados do eSocial · visto em 732 treinamentos"
  },
  {
    "id": "folha-016",
    "modulo": "folha",
    "nivel": 2,
    "pergunta": "O valor de um lançamento fixo mudou. Qual o procedimento correto?",
    "certa": "Determinar fim no lançamento antigo e incluir um novo, com nova data e valor",
    "erradas": [
      "Alterar o valor direto no lançamento existente e recalcular a competência atual",
      "Excluir o lançamento antigo e incluir um novo com o mesmo código e a data original",
      "Criar uma nova rubrica com outro código e remover a rubrica anterior do cadastro"
    ],
    "explicacao": "Assim o histórico é preservado para reprocessamentos. A conversão não traz eventos fixos: relance manualmente. Se o valor antigo continua após atualizar, o lançamento estava no cadastro do empregado, não em Processos > Lançamentos.",
    "caminho": "Arquivo > Empregados > aba Lançamentos Fixos",
    "fonte": "Lançamento fixo mensal · visto em 355 treinamentos"
  },
  {
    "id": "folha-017",
    "modulo": "folha",
    "nivel": 3,
    "pergunta": "Um empregado tem múltiplos vínculos e o INSS do Domínio difere do que o cliente calculou. O que fazer?",
    "certa": "Nunca ajustar o INSS à mão; informar as outras bases e deixar o sistema recalcular",
    "erradas": [
      "Ajustar o INSS manualmente em Alteração de Cálculos até bater com o cálculo do cliente",
      "Excluir o vínculo secundário do cadastro, pois o sistema só calcula INSS de um vínculo",
      "Zerar o INSS no mês e recolher a diferença pela guia complementar no mês seguinte"
    ],
    "explicacao": "O sistema soma todas as bases informadas e recalcula a alíquota progressiva. Para múltiplo vínculo fixo, crie nova vigência em janeiro com o novo teto. O IR só soma se for a mesma raiz de CNPJ.",
    "caminho": "Processos > Informações > Outras Bases INSS",
    "fonte": "Cálculo de INSS e IR · visto em 380 treinamentos"
  },
  {
    "id": "folha-018",
    "modulo": "folha",
    "nivel": 2,
    "pergunta": "É possível emitir o DARF da folha antes de transmitir a DCTF-Web?",
    "certa": "Não: o sistema busca os débitos no e-CAC depois da transmissão",
    "erradas": [
      "Sim, o DARF é calculado pelo próprio Domínio e independe da DCTF-Web",
      "Sim, desde que o fechamento do eSocial tenha sido enviado e esteja validado",
      "Não, mas só no primeiro mês; nos demais o DARF sai direto da folha calculada"
    ],
    "explicacao": "A transmissão automática só ocorre se marcada na aba Geral dos Parâmetros; marcar só “fechar” não transmite ao e-CAC. A guia unifica vários tributos, então o valor não bate com a conta individual de INSS a pagar. Advertência no fechamento costuma indicar sucesso.",
    "caminho": "Relatórios > Guias > DARF DCTF Web",
    "fonte": "Geração de DARF via DCTFWeb · visto em 330 treinamentos"
  },
  {
    "id": "folha-019",
    "modulo": "folha",
    "nivel": 2,
    "pergunta": "Como alterar o salário de um pró-labore que já tem histórico?",
    "certa": "Em Processos > Alteração Salarial, nunca direto no cadastro",
    "erradas": [
      "Direto no cadastro de Contribuintes, trocando o valor e gravando com a nova data",
      "Criando um novo contribuinte para o sócio com o salário atualizado e inativando o antigo",
      "Lançando a diferença como RPA eventual na competência em que o salário mudou"
    ],
    "explicacao": "Pró-labore sem salário cadastral não calcula. O pagamento sobe na competência seguinte (o de agosto vai no evento de setembro). Matrícula e categoria devem ser idênticas ao eSocial.",
    "caminho": "Processos > Alteração Salarial",
    "fonte": "Cálculo de pró-labore · visto em 345 treinamentos"
  },
  {
    "id": "folha-020",
    "modulo": "folha",
    "nivel": 3,
    "pergunta": "Um sócio foi cadastrado como contribuinte e não gera INSS. Qual a causa provável?",
    "certa": "Categoria SEFIP 00, que não gera INSS; use 11 (diretor) ou 13, 14 ou 15 (autônomo)",
    "erradas": [
      "Categoria SEFIP 11, que isenta o pró-labore de INSS até o teto da Previdência",
      "Matrícula eSocial preenchida, o que desativa o cálculo do INSS no cadastro do sócio",
      "Falta de raça/cor no cadastro, que bloqueia todos os cálculos do contribuinte"
    ],
    "explicacao": "A matrícula eSocial do contribuinte deve ficar vazia. Raça/cor e endereço são obrigatórios para o eSocial. Sócios e pró-labore ficam em Arquivo > Contribuintes; Controle > Sócios é o cadastro genérico do quadro societário.",
    "caminho": "Arquivo > Contribuintes",
    "fonte": "Cadastro de pró-labore e contribuinte · visto em 358 treinamentos"
  },
  {
    "id": "folha-021",
    "modulo": "folha",
    "nivel": 3,
    "pergunta": "Ao migrar uma empresa durante o ano, a partir de qual mês deve ser criada a vigência do FAP no Domínio?",
    "certa": "A partir do mês de início no Domínio, não de janeiro, para evitar duplicidade de eventos",
    "erradas": [
      "De janeiro do ano corrente, para o FAP valer para o exercício inteiro",
      "Do mês seguinte ao de início no Domínio, para dar tempo de validar no eSocial",
      "De janeiro do ano anterior, quando o FAP foi divulgado pela Previdência"
    ],
    "explicacao": "O sistema anterior já enviou os eventos de janeiro; criar a vigência a partir de janeiro duplica S-1005/S-1020. A nova vigência é necessária para gerar os eventos periódicos pelo Domínio.",
    "caminho": "Arquivo > Filiais > aba FAP",
    "fonte": "Configuração de FAP e código de terceiros · visto em 320 treinamentos"
  },
  {
    "id": "contabilidade-001",
    "modulo": "contabilidade",
    "nivel": 2,
    "pergunta": "Um colaborador vindo do Questor tenta lançar só o débito, deixando o crédito para depois. O que o Domínio faz?",
    "certa": "Exige a contrapartida no mesmo lançamento e valida que total de débito = total de crédito",
    "erradas": [
      "Permite o lançamento só do débito, e o crédito é informado depois em outra data qualquer",
      "Permite, desde que a conta de crédito fique em branco para o sistema totalizar depois",
      "Grava, mas marca o lançamento como pendente no balancete até surgir a contrapartida"
    ],
    "explicacao": "No Domínio débito e crédito são obrigatórios no mesmo lançamento (diferente do Questor). Existem tipos de lançamento para vários débitos/vários créditos, e o sistema mostra a diferença embaixo.",
    "caminho": "Movimentos > Lançamentos",
    "fonte": "Lançamentos Contábeis · visto em 1010 treinamentos"
  },
  {
    "id": "contabilidade-002",
    "modulo": "contabilidade",
    "nivel": 2,
    "pergunta": "Como lançar o saldo inicial de uma empresa que está começando no Domínio?",
    "certa": "Lançamento normal, tipo “vários débitos para vários créditos”, na data do último balanço",
    "erradas": [
      "Em Arquivos > Saldo Inicial, que é o campo específico criado para esse tipo de carga",
      "Pelo módulo Fiscal, com um acumulador de saldo de abertura vinculado ao plano de contas",
      "Por um lançamento só de débito, sem contrapartida, na data de início das atividades"
    ],
    "explicacao": "Não existe campo específico de saldo inicial. Usa-se o tipo “vários para vários”, com débitos (ativo) e créditos (passivo), histórico “saldo” e respeitando a natureza das contas, mesmo que invertida.",
    "caminho": "Movimentos > Lançamentos",
    "fonte": "Lançamentos Contábeis · visto em 1010 treinamentos"
  },
  {
    "id": "contabilidade-003",
    "modulo": "contabilidade",
    "nivel": 3,
    "pergunta": "Lançamentos foram excluídos por engano. O que é possível reincluir?",
    "certa": "Apenas o último lançamento excluído (Utilitários > Exclusão > Reincluir)",
    "erradas": [
      "Todos os lançamentos excluídos no mês, consultando o histórico de exclusões",
      "Qualquer lançamento excluído, desde que dentro de 30 dias da exclusão",
      "Nenhum: o Domínio não permite reincluir lançamentos depois de excluídos"
    ],
    "explicacao": "Só o último lançamento excluído pode ser reincluído, e não há histórico das exclusões anteriores. Por isso vale redobrar a atenção antes de excluir em lote.",
    "caminho": "Utilitários > Exclusão > Reincluir",
    "fonte": "Lançamentos Contábeis · visto em 1010 treinamentos"
  },
  {
    "id": "contabilidade-004",
    "modulo": "contabilidade",
    "nivel": 2,
    "pergunta": "Como a folha de pagamento chega à Contabilidade no Domínio?",
    "certa": "Por comando manual em Processos > Integração Contábil ou rotina agendada, sem finalizar a folha",
    "erradas": [
      "Sobe sozinha assim que a folha é calculada, sem nenhum comando, como acontece no Contmatic",
      "Só sobe depois que a folha da competência é finalizada, como acontece no IOB/Folhamatic",
      "Só por importação de uma planilha gerada no módulo de Folha e lida na Contabilidade"
    ],
    "explicacao": "Por padrão a folha não sobe automaticamente: gera-se a integração por competência na Folha (ou agenda-se rotina automática). E não é preciso finalizar a folha para integrar.",
    "caminho": "Folha: Processos > Integração Contábil",
    "fonte": "Integração contábil · visto em 943 treinamentos"
  },
  {
    "id": "contabilidade-005",
    "modulo": "contabilidade",
    "nivel": 2,
    "pergunta": "Ao gerar a integração aparece a mensagem de rubricas não configuradas. O que fazer?",
    "certa": "Emitir o relatório, vincular as rubricas na configuração da integração e gerar de novo",
    "erradas": [
      "Clicar em Continuar: as rubricas sem vínculo vão para uma conta transitória do plano",
      "Excluir as rubricas novas da folha e recriá-las somente depois de concluir a integração",
      "Gerar mesmo assim e corrigir depois os lançamentos manualmente na Contabilidade"
    ],
    "explicacao": "Nunca clique em Continuar ignorando a mensagem. Emita o relatório, vincule as rubricas em Arquivo > Contabilidade > Configurar Integração (proventos no lançamento 1, descontos no 2) e gere novamente.",
    "caminho": "Arquivo > Contabilidade > Configurar Integração",
    "fonte": "Integração contábil · visto em 943 treinamentos"
  },
  {
    "id": "contabilidade-006",
    "modulo": "contabilidade",
    "nivel": 2,
    "pergunta": "O escritório já lançou a folha manualmente na Contabilidade e agora gera a integração. O que acontece?",
    "certa": "Duplica: é preciso marcar só os meses novos ou excluir os lançamentos por origem antes de integrar",
    "erradas": [
      "O sistema detecta os lançamentos manuais e ignora automaticamente os valores iguais aos já lançados",
      "Substitui automaticamente todos os lançamentos manuais do período pelos da integração gerada",
      "Gera os lançamentos em um lote separado que não soma nos relatórios nem no balancete"
    ],
    "explicacao": "A integração não reconhece o que foi lançado à mão. Para evitar duplicidade, integre só os meses novos ou exclua antes os lançamentos pela origem.",
    "caminho": "Folha: Processos > Integração Contábil",
    "fonte": "Integração contábil · visto em 943 treinamentos"
  },
  {
    "id": "contabilidade-007",
    "modulo": "contabilidade",
    "nivel": 1,
    "pergunta": "Qual atalho abre o plano de contas (árvore) no Escrita Fiscal e na Contabilidade?",
    "certa": "F4",
    "erradas": [
      "F2",
      "F6",
      "F8"
    ],
    "explicacao": "F4 abre o plano de contas (e dentro dele Ctrl+A inclui nova conta a partir da classificação). F2 pesquisa a tabela do campo, F6 consulta e edita os lançamentos da conta e F8 troca de empresa.",
    "caminho": "Atalhos de teclado",
    "fonte": "Atalhos confirmados nos treinamentos"
  },
  {
    "id": "contabilidade-008",
    "modulo": "contabilidade",
    "nivel": 2,
    "pergunta": "Qual é a forma recomendada de criar uma nova conta contábil no plano?",
    "certa": "Pelo F4 + Ctrl+A, e sempre na empresa 9995 (Padrão Geral) para manter a padronização",
    "erradas": [
      "Pelo botão Novo, na própria empresa operacional, informando a classificação à mão",
      "Copiando o plano de contas de outra empresa operacional e ajustando as contas depois",
      "Pelo F4 + Ctrl+A, mas só na empresa operacional, porque a 9995 é de consulta"
    ],
    "explicacao": "O botão Novo pede classificação manual e é moroso. Contas em negrito são sintéticas (totalizadoras): lance sempre em analíticas. Não apague o plano inteiro: as parametrizações (fiscal, contábil, integrações) foram feitas nele.",
    "caminho": "F4 > Ctrl+A",
    "fonte": "Criação de conta contábil · visto em 470 treinamentos"
  },
  {
    "id": "contabilidade-009",
    "modulo": "contabilidade",
    "nivel": 2,
    "pergunta": "Qual faixa de códigos de conta NÃO deve ser usada para cadastrar bancos ou outras contas manualmente?",
    "certa": "De 10000 a 10999, reservada para clientes e fornecedores criados pelo fiscal",
    "erradas": [
      "De 1 a 999, reservada para as contas sintéticas do grupo de ativo do plano padrão",
      "De 90000 a 99999, reservada para as contas transitórias usadas no zeramento",
      "Não há faixa reservada: o código só não pode repetir o de outra conta do plano"
    ],
    "explicacao": "Para a criação automática funcionar, confira três pontos: parâmetro marcado, configuração de importação com “Criar conta contábil” e vigência do parâmetro cobrindo a data de cadastro do participante. Sempre grave depois de gerar contas em lote.",
    "caminho": "Controle > Parâmetros > aba Contabilidade",
    "fonte": "Geração automática de contas de clientes · visto em 321 treinamentos"
  },
  {
    "id": "contabilidade-010",
    "modulo": "contabilidade",
    "nivel": 3,
    "pergunta": "O cliente tem três contas correntes no mesmo banco e quer usar o Open Finance. Quantos consentimentos são necessários?",
    "certa": "Três: o consentimento é por conta corrente, e não por CNPJ ou por banco",
    "erradas": [
      "Um só, pois o consentimento vale para o CNPJ em todas as contas do banco",
      "Um por banco e por CNPJ, desde que o responsável legal seja o mesmo nas contas",
      "Dois: um para a conta principal e outro compartilhado entre as demais contas"
    ],
    "explicacao": "O cliente precisa chegar à tela “Consentimento realizado com sucesso”. O Bradesco é o único que exige criar um usuário operador (não aceita master). Caixa e Baresul só funcionam pelo portal (QR Code).",
    "caminho": "Portal Domínio Empresa > Contabilidade Digital > Conectar conta",
    "fonte": "Integração bancária Open Finance · visto em 525 treinamentos"
  },
  {
    "id": "contabilidade-011",
    "modulo": "contabilidade",
    "nivel": 2,
    "pergunta": "No Onvio, o convite da Contabilidade Digital aparece com status “Ativo”. Isso significa que o cliente já fez o consentimento?",
    "certa": "Não: “Ativo” indica convite enviado; a guia só aparece depois do consentimento completo",
    "erradas": [
      "Sim, “Ativo” indica que o cliente concluiu o consentimento e a conta está conectada",
      "Sim, mas a guia só aparece depois que o escritório validar o extrato dos 30 primeiros dias",
      "Não, “Ativo” indica que o certificado digital do cliente foi validado pelo banco"
    ],
    "explicacao": "Para saber se o cliente concluiu, verifique a nota de rodapé “Contabilidade Digital” no sistema e a guia em Controle > Parâmetros. O consentimento tem prazo indeterminado: só cai se o cliente cancelar. Cada CNPJ exige um convite.",
    "caminho": "Controle > Parâmetros > guia Contabilidade Digital",
    "fonte": "Habilitação da Contabilidade Digital · visto em 279 treinamentos"
  },
  {
    "id": "contabilidade-012",
    "modulo": "contabilidade",
    "nivel": 3,
    "pergunta": "Um lançamento feito manualmente em Movimentos > Lançamentos não aparece na Contabilidade Digital. Por quê?",
    "certa": "Ela não puxa lançamentos do módulo Contabilidade; é preciso conciliar em Conciliação Bancária",
    "erradas": [
      "O lançamento manual só aparece depois do fechamento do período contábil do mês",
      "A Contabilidade Digital só mostra lançamentos feitos pela folha e pelo módulo Fiscal",
      "O lançamento foi feito na data errada; basta repetir com data posterior ao último extrato"
    ],
    "explicacao": "Na conciliação, não use “Desconsiderar” na contabilização: altera o saldo e gera divergência. Se a conciliação automática não funcionar, desmarque critérios que não batem (como a data) e use só valor e tipo. A conciliação apenas marca débito com crédito; não lança nem baixa título.",
    "caminho": "Movimentos > Conciliação > Bancária",
    "fonte": "Conciliação bancária · visto em 350 treinamentos"
  },
  {
    "id": "contabilidade-013",
    "modulo": "contabilidade",
    "nivel": 2,
    "pergunta": "O cliente entregou um extrato de três meses. Como importar?",
    "certa": "Mês a mês, pois o sistema lê no máximo 30 dias por vez; PDF não importa",
    "erradas": [
      "De uma vez, informando o período completo na tela de importação do extrato",
      "Em PDF, que é o formato mais completo e o sistema converte sozinho para lançamentos",
      "Em dois arquivos de 45 dias, que é o limite que o sistema aceita por importação"
    ],
    "explicacao": "Importe sem gerar lançamento se já fez lançamentos manuais contra o banco (para conciliar depois) e com lançamento se não fez, para evitar duplicação. Lançamento contábil não valida duplicidade, diferente de nota fiscal. Lançamentos incompletos ficam em Movimentos > Lançamento de Extrato Bancário.",
    "caminho": "Utilitários > Importação > Extrato Bancário",
    "fonte": "Importação de extrato bancário · visto em 596 treinamentos"
  },
  {
    "id": "contabilidade-014",
    "modulo": "contabilidade",
    "nivel": 3,
    "pergunta": "Qual a sequência correta para encerrar o resultado de uma empresa do Lucro Real, sem gerar diferença entre ativo e passivo?",
    "certa": "Calcular e integrar os impostos do Lalur e só depois fazer o zeramento",
    "erradas": [
      "Zerar primeiro e integrar os impostos do Lalur depois, para o resultado já estar apurado",
      "Fechar o período, zerar e integrar os impostos em seguida, na sequência dos menus",
      "Integrar os impostos do Lalur e zerar no mesmo comando, pois o sistema une as etapas"
    ],
    "explicacao": "Zeramento e fechamento são processos separados: o fechamento bloqueia alterações, o zeramento encerra o resultado. Para desfazer, exclua o Zeramento e a Transferência de Lucro/Prejuízo (duas exclusões). Lucro Real zera trimestralmente; os demais, anualmente.",
    "caminho": "Utilitários > Zeramento",
    "fonte": "Processo de zeramento contábil · visto em 335 treinamentos"
  },
  {
    "id": "contabilidade-015",
    "modulo": "contabilidade",
    "nivel": 2,
    "pergunta": "Um lançamento vindo do Fiscal está com a conta errada. Onde corrigir?",
    "certa": "No módulo de origem, e depois regerar a integração; alterar no Contábil perde o vínculo e duplica",
    "erradas": [
      "Direto no Contábil, em Utilitários > Alteração de Lançamentos, que mantém o vínculo",
      "Excluindo o lançamento no Contábil e lançando de novo à mão com a conta correta",
      "No Contábil, mas só se o período estiver aberto e nenhum balancete tiver sido emitido"
    ],
    "explicacao": "Ao excluir em lote, sempre especifique a origem (Extrato Bancário, Zeramento, Normal, Importado): período amplo sem filtro de origem exclui tudo. Regerar sem gravar não salva nada: faça sempre Regerar + Gravar.",
    "caminho": "Utilitários > Regerar > Lançamentos Contábeis",
    "fonte": "Alteração de lançamentos em lote · visto em 677 treinamentos"
  },
  {
    "id": "contabilidade-016",
    "modulo": "contabilidade",
    "nivel": 2,
    "pergunta": "Preciso regerar os lançamentos contábeis sempre que importo notas?",
    "certa": "Não: a importação normal já gera a contabilidade; só regere após alterar acumulador ou conta",
    "erradas": [
      "Sim, a importação traz a nota para o fiscal, mas a contabilidade só é criada ao regerar",
      "Sim, mas apenas nas notas de saída, que não geram contabilidade na importação normal",
      "Não, e regerar nunca é necessário: o sistema atualiza os lançamentos sozinho a cada alteração"
    ],
    "explicacao": "Alterar só a aba Contabilidade do acumulador pede regerar; alterar a aba Impostos ou um parâmetro pede reapurar o imposto. Crie nova vigência no acumulador antes de alterar, para não mexer nos meses anteriores. Período fechado bloqueia a regeração.",
    "caminho": "Utilitários > Regerar > Lançamentos Contábeis",
    "fonte": "Regeração de lançamentos contábeis · visto em 412 treinamentos"
  },
  {
    "id": "contabilidade-017",
    "modulo": "contabilidade",
    "nivel": 3,
    "pergunta": "Ao cadastrar um histórico padrão com hashtag, o complemento não aparece nos lançamentos. Qual a causa mais provável?",
    "certa": "O campo Histórico da tela principal está vazio; preencha algo (mesmo “ref”) antes de gravar",
    "erradas": [
      "A hashtag foi digitada à mão no lançamento, e o sistema só aceita hashtags da lista oficial",
      "O histórico foi cadastrado na empresa operacional, e o complemento só vale na 9995",
      "O período contábil está fechado e o complemento só aparece depois da reabertura"
    ],
    "explicacao": "As hashtags só funcionam se cadastradas em Arquivos > Históricos. O complemento de extrato só aparece depois de gravar o lançamento. Para notas já importadas, é preciso regerar os lançamentos contábeis.",
    "caminho": "Arquivos > Históricos",
    "fonte": "Cadastro de histórico padrão · visto em 506 treinamentos"
  },
  {
    "id": "lalur-001",
    "modulo": "lalur",
    "nivel": 2,
    "pergunta": "Qual é a ordem obrigatória para apurar IRPJ e CSLL no Lucro Real?",
    "certa": "Lucro Antes, depois Lançamentos (adições/exclusões) e por fim o Cálculo",
    "erradas": [
      "Cálculo, depois Lucro Antes e por fim os Lançamentos de adições e exclusões",
      "Lançamentos de adições e exclusões, depois o Cálculo e por fim o Lucro Antes",
      "Qualquer ordem, pois o Cálculo refaz as etapas anteriores sozinho ao rodar"
    ],
    "explicacao": "A sequência é Lucro Antes (importa o lucro/prejuízo contábil), Lançamentos (adições e exclusões) e Cálculo. No menu é de baixo para cima. Antes disso, concilie a contabilidade e faça o zeramento do trimestre.",
    "caminho": "Movimentos > Lucro Antes > Lançamentos > Calcular",
    "fonte": "Cálculo de IRPJ e CSLL · visto em 170 treinamentos"
  },
  {
    "id": "lalur-002",
    "modulo": "lalur",
    "nivel": 2,
    "pergunta": "Depois de calcular IRPJ e CSLL no Lalur, a guia de recolhimento é gerada pelo Domínio?",
    "certa": "Não: as guias não são geradas pelo módulo, usa-se o e-CAC/MIT",
    "erradas": [
      "Sim, em Movimentos > Guias, já com o código de receita preenchido",
      "Sim, mas apenas a guia da CSLL; a do IRPJ é emitida fora do sistema",
      "Sim, desde que o certificado digital esteja no Gerenciador de Certificados"
    ],
    "explicacao": "O cálculo do Lalur apura os valores, mas as guias de IRPJ/CSLL não são geradas pelo Domínio. Em temas fiscais, confirme sempre a regra vigente.",
    "caminho": "Movimentos > Calcular",
    "fonte": "Cálculo de IRPJ e CSLL · visto em 170 treinamentos"
  },
  {
    "id": "lalur-003",
    "modulo": "lalur",
    "nivel": 3,
    "pergunta": "O cliente reclama que os valores de IRPJ/CSLL do Domínio saem sempre menores que o cálculo manual dele. Qual é a explicação mais provável?",
    "certa": "O sistema deduz as retenções automaticamente (dá para ver na calculadora amarela)",
    "erradas": [
      "O Domínio ignora os prejuízos fiscais de períodos anteriores na hora de calcular",
      "O Domínio aplica a alíquota reduzida do Simples Nacional sobre a base recomposta",
      "O sistema considera só a CSLL e deixa o IRPJ para lançamento manual do usuário"
    ],
    "explicacao": "No cálculo o sistema gera a CSLL (9%) e o IRPJ (15%) sobre a base recomposta, já deduzindo as retenções. A calculadora amarela mostra a memória de cálculo.",
    "caminho": "Movimentos > Calcular",
    "fonte": "Cálculo de IRPJ e CSLL · visto em 170 treinamentos"
  },
  {
    "id": "lalur-004",
    "modulo": "lalur",
    "nivel": 2,
    "pergunta": "Você precisa excluir uma apuração já calculada. Qual é o caminho?",
    "certa": "Utilitários > Excluir Cálculo e, depois, excluir em Lucro Antes",
    "erradas": [
      "Excluir só o Lucro Antes: o cálculo é removido junto",
      "Movimentos > Calcular e clicar em Cancelar",
      "Não é possível excluir: só retificar a apuração no mês seguinte"
    ],
    "explicacao": "Primeiro Utilitários > Excluir Cálculo (Buscar, selecionar o período, Excluir), depois exclua o Lucro Antes. Para refazer vários períodos, refaça em sequência (jan, fev, mar...), sem pular meses.",
    "caminho": "Utilitários > Excluir Cálculo",
    "fonte": "Cálculo de IRPJ e CSLL · visto em 170 treinamentos / Apuração retroativa e recálculo · visto em 42"
  },
  {
    "id": "lalur-005",
    "modulo": "lalur",
    "nivel": 3,
    "pergunta": "Nas deduções (retenções) do Lucro Real, como lançar o IRPJ e a CSLL?",
    "certa": "Separadamente: IRPJ e CSLL não importam juntas, e se lança o total do trimestre, não mês a mês",
    "erradas": [
      "Juntos, pois a importação traz IRPJ e CSLL na mesma tela, como acontece nas adições",
      "Separadamente, mas mês a mês, repetindo a importação ao final de cada mês do trimestre",
      "Apenas o IRPJ, pois a CSLL deduz as retenções automaticamente a partir do Fiscal"
    ],
    "explicacao": "O botão Importar fica escondido no final da linha (role a barra). O sistema não grava deduções zeradas. Se a retenção não importar, confira se o acumulador fiscal tem todos os impostos marcados (PIS, COFINS, CSLL e IR) na aba Retenções.",
    "caminho": "Movimentos > Lançamentos do IRPJ > Lucro Real > Deduções",
    "fonte": "Compensação de retenções · visto em 45 treinamentos"
  },
  {
    "id": "lalur-006",
    "modulo": "lalur",
    "nivel": 3,
    "pergunta": "Na Parte B do Lalur, o que fazer para não perder o histórico ao migrar do SPED-CF anterior?",
    "certa": "Manter o identificador e a data de cadastro idênticos; senão o sistema cria nova conta",
    "erradas": [
      "Criar novos identificadores no Domínio e vincular as contas antigas por planilha depois",
      "Manter só o identificador igual; a data de cadastro é sempre recalculada pelo sistema",
      "Cadastrar a Parte B com data de hoje, pois o sistema reconstrói o histórico pela ECD"
    ],
    "explicacao": "A data de cadastro da conta deve ser sempre 01/01 do ano, senão ela não é usada desde o início. Preencha todos os históricos: a ECF exige. Saldo inicial em Controle > Parâmetros > Saldo Inicial.",
    "caminho": "Arquivos > Base Negativa e Parte B",
    "fonte": "Configuração da Parte B · visto em 42 treinamentos"
  },
  {
    "id": "lalur-007",
    "modulo": "lalur",
    "nivel": 2,
    "pergunta": "Como contabilizar o IRPJ e a CSLL apurados no Lalur?",
    "certa": "Sempre pela Integração Contábil do Lalur, nunca lançando à mão na contabilidade",
    "erradas": [
      "Manualmente na contabilidade, com base no relatório do cálculo do Lalur",
      "Pelo módulo Fiscal, com um acumulador específico de imposto de renda",
      "Pelo módulo Folha, na rotina de integração contábil dos tributos federais"
    ],
    "explicacao": "As retenções já são contabilizadas pelo Fiscal quando há nota. Marcando “Gerar lançamento das deduções”, o sistema abate as retenções do ativo no passivo automaticamente.",
    "caminho": "Controle > Parâmetros > aba Contabilidade",
    "fonte": "Configuração de integração contábil · visto em 110 treinamentos"
  },
  {
    "id": "lalur-008",
    "modulo": "lalur",
    "nivel": 2,
    "pergunta": "Por que o cálculo do IRPJ e da CSLL no Lucro Real pede três meses completos?",
    "certa": "Porque são trimestrais acumulativos: jan-fev-mar, abr-mai-jun, jul-ago-set e out-nov-dez",
    "erradas": [
      "Porque são quadrimestrais e o Domínio só calcula depois de fechar o quarto mês",
      "Porque são mensais, e o sistema exige três meses só para conferir o limite de isenção",
      "Porque são semestrais, e o primeiro trimestre serve apenas de base para o segundo"
    ],
    "explicacao": "Alterar lucro antes, adição, exclusão ou dedução exclui automaticamente os cálculos posteriores. O ano do período deve ser igual ao ano de trabalho (Controle > Ano de Trabalho).",
    "caminho": "Movimentos > Calcular",
    "fonte": "Apuração retroativa e recálculo · visto em 42 treinamentos"
  },
  {
    "id": "lalur-009",
    "modulo": "lalur",
    "nivel": 3,
    "pergunta": "O escritório quer calcular o IRPJ de 2025 sem ter fechado 2024. É possível?",
    "certa": "Não: o ajuste anual de 2024 precisa ser calculado antes de trabalhar em 2025",
    "erradas": [
      "Sim, os dois anos são independentes e o sistema só consolida na ECF",
      "Sim, mas só se o ano de 2024 não tiver nenhum prejuízo fiscal a compensar",
      "Sim, desde que a Parte B de 2024 seja importada manualmente por planilha"
    ],
    "explicacao": "Quebra cronológica gera o erro de empresa sem cálculo na competência anterior. A solução é refazer todos os anos desde o último calculado, criando vigências “não enquadrada” para anos sem movimento.",
    "caminho": "Movimentos > Ajuste Anual",
    "fonte": "Apuração retroativa e recálculo · visto em 42 treinamentos"
  },
  {
    "id": "lalur-010",
    "modulo": "lalur",
    "nivel": 3,
    "pergunta": "Em uma adição do Lalur, qual deve ser a data do lançamento para o sistema puxar os meses 2 e 3 do trimestre?",
    "certa": "O último dia do trimestre; com outra data, os meses 2 e 3 não são puxados",
    "erradas": [
      "O primeiro dia do trimestre, pois o sistema soma sempre a partir da data inicial",
      "O dia 15 do segundo mês, ponto médio que o sistema usa para ratear o trimestre",
      "Qualquer data do trimestre, porque o sistema considera o trimestre inteiro sempre"
    ],
    "explicacao": "O sistema traz adições padrão, que podem ser editadas ou criadas. Se a conta tem estornos (créditos maiores que débitos), aparece “total da adição não pode ser negativo”: lance os créditos na exclusão.",
    "caminho": "Arquivos > Adições",
    "fonte": "Cadastro de adições no Lalur · visto em 85 treinamentos"
  },
  {
    "id": "lalur-011",
    "modulo": "lalur",
    "nivel": 2,
    "pergunta": "Qual é a sequência correta para transmitir a ECF no Validador?",
    "certa": "Recuperar a ECD já assinada, validar a ECF, gerar, assinar e só então transmitir",
    "erradas": [
      "Transmitir a ECF primeiro e recuperar a ECD assinada depois, só para conferência",
      "Gerar a ECF sem a ECD, já que as duas são independentes dentro do validador",
      "Importar a ECD em TXT sem assinatura para que a ECF herde os saldos dela"
    ],
    "explicacao": "A ECD é validada, gerada e assinada antes, mas não transmitida junto. Na ECF, o caminho é Escrituração > Editar > Recuperar ECD assinada, validar, gerar, assinar e transmitir.",
    "caminho": "Validador ECF > Escrituração > Editar > Recuperar ECD assinada",
    "fonte": "Outros assuntos — Lalur, Lucro Real e ECF · visto em 172 treinamentos"
  },
  {
    "id": "lalur-012",
    "modulo": "lalur",
    "nivel": 2,
    "pergunta": "Você recuperou a ECD novamente no Validador ECF depois de já ter gerado a ECF. O que precisa fazer?",
    "certa": "Gerar, assinar e transmitir a ECF de novo, pois o nome do arquivo muda automaticamente",
    "erradas": [
      "Nada, a ECF já gerada continua válida e só a ECD precisa ser retransmitida",
      "Apenas assinar a ECF outra vez, mantendo o mesmo arquivo gerado antes",
      "Excluir a escrituração inteira da ECF e recomeçar a partir do cadastro"
    ],
    "explicacao": "Ao recuperar a ECD de novo, o arquivo da ECF é outro (o nome muda sozinho). Então é preciso gerar, assinar e transmitir de novo.",
    "caminho": "Validador ECF",
    "fonte": "Outros assuntos — Lalur, Lucro Real e ECF · visto em 172 treinamentos"
  },
  {
    "id": "lalur-013",
    "modulo": "lalur",
    "nivel": 1,
    "pergunta": "O Comparativo de regime tributário pode substituir a apuração oficial do Lalur?",
    "certa": "Não: ele só compara os regimes e pode não considerar situações específicas",
    "erradas": [
      "Sim, desde que as contas de salários e custos estejam configuradas",
      "Sim, quando a empresa é de Lucro Real anual e o cálculo foi gravado",
      "Não, mas ele gera automaticamente as guias de recolhimento do regime"
    ],
    "explicacao": "O comparativo é uma ferramenta de apoio: compara Real anual/trimestral e Presumido. A apuração oficial continua sendo feita no módulo.",
    "caminho": "Conteúdo > Comparativo de regime tributário",
    "fonte": "Outros assuntos — Lalur, Lucro Real e ECF · visto em 172 treinamentos"
  },
  {
    "id": "lalur-014",
    "modulo": "lalur",
    "nivel": 3,
    "pergunta": "Na ECF aparece que o signatário não é responsável legal nem possui procuração. Como corrigir?",
    "certa": "Em Cadastro > Signatários, cadastrar o CNPJ da empresa com a qualificação 205",
    "erradas": [
      "Trocar o certificado do contador por um e-CPF de um dos sócios da empresa",
      "Cadastrar a procuração eletrônica no e-CAC e aguardar a liberação do acesso",
      "Marcar a ECF como retificadora e transmitir novamente com o mesmo signatário"
    ],
    "explicacao": "O signatário estava incorreto. Delete o errado em Cadastro > Signatários e cadastre o CNPJ da empresa com qualificação 205.",
    "caminho": "Validador ECF > Cadastro > Signatários",
    "fonte": "Outros assuntos — Lalur, Lucro Real e ECF · visto em 172 treinamentos"
  },
  {
    "id": "lalur-015",
    "modulo": "lalur",
    "nivel": 2,
    "pergunta": "Qual é a diferença de origem dos dados entre o cálculo “Anual com balanço de redução/suspensão” e o “Anual por estimativa”?",
    "certa": "O de balanço busca os dados na Contabilidade; o de estimativa busca no Fiscal",
    "erradas": [
      "O de balanço busca os dados no Fiscal; o de estimativa busca na Contabilidade",
      "Os dois buscam na Contabilidade e só mudam o vencimento das guias",
      "Os dois buscam no Fiscal e só mudam a alíquota do adicional"
    ],
    "explicacao": "Ao criar a vigência do Lalur você escolhe o tipo de cálculo: anual com balanço (contabilidade), anual por estimativa (fiscal) ou trimestral.",
    "caminho": "Lalur > Controle > Parâmetros",
    "fonte": "Parametrização inicial do Lalur · visto em 147 treinamentos"
  },
  {
    "id": "lalur-016",
    "modulo": "lalur",
    "nivel": 2,
    "pergunta": "O Lalur está gerando DARF com códigos trimestrais para uma empresa que deveria ser anual. Qual é a causa?",
    "certa": "O tipo de cálculo está configurado errado em Controle > Parâmetros > Cálculo",
    "erradas": [
      "O certificado digital do escritório está vencido ou sem permissão",
      "As notas do período foram importadas com a data de competência trocada",
      "A empresa está sem o código de recolhimento cadastrado em Impostos"
    ],
    "explicacao": "Os códigos acompanham o tipo de cálculo. Se estiver trimestral onde deveria ser anual com balanço, os códigos saem errados: corrija em Controle > Parâmetros > Cálculo.",
    "caminho": "Controle > Parâmetros > Cálculo",
    "fonte": "Parametrização inicial do Lalur · visto em 147 treinamentos"
  },
  {
    "id": "lalur-017",
    "modulo": "lalur",
    "nivel": 2,
    "pergunta": "Por que não se deve importar o parâmetro do Lalur de uma empresa modelo com data antiga, como 2015?",
    "certa": "Porque o sistema trava os cálculos futuros; o parâmetro deve ser feito manualmente com a data correta",
    "erradas": [
      "Porque o parâmetro importado perde as adições e exclusões já cadastradas",
      "Porque a importação só funciona entre empresas de regimes tributários diferentes",
      "Porque o parâmetro antigo é recusado pelo validador na hora de gerar a ECF"
    ],
    "explicacao": "Parâmetro com vigência muito antiga deixa os cálculos futuros travados. Faça manualmente, com a data correta da empresa.",
    "caminho": "Lalur > Controle > Parâmetros",
    "fonte": "Parametrização inicial do Lalur · visto em 147 treinamentos"
  },
  {
    "id": "lalur-018",
    "modulo": "lalur",
    "nivel": 3,
    "pergunta": "Quando se deve criar uma nova vigência nos Parâmetros do Lalur?",
    "certa": "Só quando mudar a forma de cálculo, excluindo antes pagamentos e parcelamentos",
    "erradas": [
      "A cada início de ano, para que o cálculo recomece com os saldos zerados",
      "Sempre que uma adição nova for cadastrada na aba Configurações do módulo",
      "A cada troca de contador responsável pela empresa no cadastro de empresas"
    ],
    "explicacao": "A vigência nova serve para mudança na forma de cálculo (por exemplo, de trimestral para anual). Antes, é preciso excluir os pagamentos e parcelamentos.",
    "caminho": "Lalur > Controle > Parâmetros",
    "fonte": "Parametrização inicial do Lalur · visto em 147 treinamentos"
  },
  {
    "id": "lalur-019",
    "modulo": "lalur",
    "nivel": 1,
    "pergunta": "Nos Parâmetros do Lalur, a opção “realizar pagamento discriminado”, depois de marcada, pode ser desfeita?",
    "certa": "Não: a opção é irreversível",
    "erradas": [
      "Sim, basta desmarcar e gravar a vigência de novo",
      "Sim, mas só dentro do mesmo trimestre da marcação",
      "Sim, desde que o cálculo do período seja excluído"
    ],
    "explicacao": "Marcar “realizar pagamento discriminado” não tem volta. Confirme com o cliente antes de ativar.",
    "caminho": "Lalur > Controle > Parâmetros",
    "fonte": "Parametrização inicial do Lalur · visto em 147 treinamentos"
  },
  {
    "id": "lalur-020",
    "modulo": "lalur",
    "nivel": 2,
    "pergunta": "No Lucro Presumido, qual opção deve ser marcada para o sistema calcular os tributos federais conforme a DCTF Web?",
    "certa": "“Efetuar cálculos de tributos federais conforme DCTF Web”, na aba Federal",
    "erradas": [
      "“Calcular tributos pelo regime de caixa”, na aba Personaliza",
      "“Gerar arquivo MIT automaticamente”, na aba Informativos",
      "“Apurar adicional de IRPJ por trimestre”, na aba Impostos"
    ],
    "explicacao": "Na vigência do Presumido, na aba Federal, marca-se o regime (caixa ou competência) e, em Opções, o cálculo conforme DCTF Web.",
    "caminho": "Lalur > Controle > Parâmetros > aba Federal > Opções",
    "fonte": "Apuração de Lucro Presumido · visto em 78 treinamentos"
  },
  {
    "id": "lalur-021",
    "modulo": "lalur",
    "nivel": 3,
    "pergunta": "Como passar o IRPJ e a CSLL do Lucro Presumido para apuração mensal?",
    "certa": "Em Arquivos > Impostos, nos impostos 6 e 7, trocar “Trimestral” por “Trimestral/Mensal”",
    "erradas": [
      "Em Controle > Parâmetros, trocando o regime da empresa de Presumido para Real",
      "Em Movimento > Apuração, selecionando apenas os dois primeiros meses do trimestre",
      "Criando uma nova empresa no sistema, com o regime mensal já configurado nela"
    ],
    "explicacao": "Com “Trimestral/Mensal”, o sistema calcula mês a mês, mas não calcula o adicional proporcional nos meses 1 e 2: só no 3º mês ou se o mês passar de R$ 60 mil.",
    "caminho": "Lalur > Arquivos > Impostos > impostos 6 e 7",
    "fonte": "Apuração de Lucro Presumido · visto em 78 treinamentos"
  },
  {
    "id": "lalur-022",
    "modulo": "lalur",
    "nivel": 3,
    "pergunta": "Uma empresa do Presumido tem atividades com alíquotas de presunção diferentes. Como configurar?",
    "certa": "Copiar o acumulador 301, criar outro com a alíquota diferente e vinculá-lo ao código de serviço específico",
    "erradas": [
      "Criar uma vigência por atividade e usar uma empresa separada para cada uma",
      "Alterar a presunção do acumulador 301 a cada mês, conforme a nota lançada",
      "Lançar as notas de menor presunção como receita financeira, em outro imposto"
    ],
    "explicacao": "Cria-se um novo acumulador (por exemplo, 612) com a outra alíquota. Em Configuração de Impostos, ele é ligado ao código de serviço; o 301 fica sem código para pegar as demais notas.",
    "caminho": "Escrita > Arquivos > Acumuladores e Configuração de Impostos",
    "fonte": "Apuração de Lucro Presumido · visto em 78 treinamentos"
  },
  {
    "id": "lalur-023",
    "modulo": "lalur",
    "nivel": 2,
    "pergunta": "O Presumido calculou com presunção de 8%, mas o correto para serviços é 32%. Qual é a correção indicada?",
    "certa": "Criar nova vigência com a presunção correta no acumulador e reapurar",
    "erradas": [
      "Excluir as notas do trimestre e importar tudo de novo com o CFOP certo",
      "Alterar a alíquota direto no resultado da apuração, na calculadora amarela",
      "Trocar o regime para Lucro Real no trimestre e voltar depois ao Presumido"
    ],
    "explicacao": "A presunção errada vem do acumulador mal configurado. Ajuste (por exemplo, 32% para serviços) numa nova vigência e reapure.",
    "caminho": "Lalur > Movimento > Apuração",
    "fonte": "Apuração de Lucro Presumido · visto em 78 treinamentos"
  },
  {
    "id": "lalur-024",
    "modulo": "lalur",
    "nivel": 2,
    "pergunta": "Na geração da ECF, qual relatório mostra uma conta contábil ligada a mais de uma conta referencial?",
    "certa": "O relatório Relacionamento de Contas",
    "erradas": [
      "O relatório Balancete por Plano Referencial",
      "O relatório Razão Auxiliar de Contas",
      "O relatório Plano de Contas Analítico"
    ],
    "explicacao": "As contas precisam estar vinculadas ao plano referencial (Utilitários > Vincular Plano Referencial). O Relacionamento de Contas aponta a conta com mais de uma referencial.",
    "caminho": "Utilitários > Vincular Plano Referencial",
    "fonte": "Geração de ECF · visto em 67 treinamentos"
  },
  {
    "id": "lalur-025",
    "modulo": "lalur",
    "nivel": 3,
    "pergunta": "Na geração da ECF, o que se importa do Lalur para uma empresa do Lucro Real?",
    "certa": "O M300 (Parte A) e o M010 (Parte B)",
    "erradas": [
      "O P200, o P300, o P400 e o P500",
      "O Y570 (retenções) e o Y6",
      "O L100 e o L300 do balanço"
    ],
    "explicacao": "No Real, importam-se M300 (Parte A) e M010 (Parte B). No Presumido, importa-se IR/CSLL do fiscal (P200, P300, P400, P500).",
    "caminho": "Relatórios > Informativos > SPED ECF",
    "fonte": "Geração de ECF · visto em 67 treinamentos"
  },
  {
    "id": "lalur-026",
    "modulo": "lalur",
    "nivel": 2,
    "pergunta": "Lucros e dividendos entram sozinhos na ECF a partir da contabilidade?",
    "certa": "Não: eles não são importados automaticamente e devem ser lançados à mão",
    "erradas": [
      "Sim, qualquer conta de lucros acumulados é lida e enviada ao registro",
      "Sim, desde que o quadro societário esteja com a vigência atualizada",
      "Não, mas o sistema pergunta e preenche após a importação do Lalur"
    ],
    "explicacao": "A importação traz só o que foi calculado no módulo Lalur ou no Fiscal. Lucros e dividendos precisam ser lançados manualmente na ECF.",
    "caminho": "Relatórios > Informativos > SPED ECF",
    "fonte": "Geração de ECF · visto em 67 treinamentos"
  },
  {
    "id": "lalur-027",
    "modulo": "lalur",
    "nivel": 2,
    "pergunta": "Quando a Parte B aparece no Livro de Apuração do Lucro Real?",
    "certa": "Somente quando existe prejuízo fiscal",
    "erradas": [
      "Sempre que a empresa tem lançamento de adições ou exclusões",
      "Somente no último trimestre do ano-calendário da empresa",
      "Somente quando o relatório é emitido no modelo 2, resumido"
    ],
    "explicacao": "A Parte B só é impressa se houver prejuízo fiscal a controlar. Sem prejuízo, ela não aparece.",
    "caminho": "Relatórios > Livros Fiscais > Livro de Apuração do Lucro Real",
    "fonte": "Emissão de relatórios do Lalur · visto em 66 treinamentos"
  },
  {
    "id": "lalur-028",
    "modulo": "lalur",
    "nivel": 2,
    "pergunta": "Para que serve marcar “Detalhar lançamentos” no Livro de Apuração do Lucro Real?",
    "certa": "Para trazer o histórico contábil e achar uma conta errada antes do SPED-CF",
    "erradas": [
      "Para listar cada nota fiscal de saída que compõe a receita bruta",
      "Para incluir no livro as páginas de outros trimestres automaticamente",
      "Para esconder as adições e exclusões já conferidas pelo contador"
    ],
    "explicacao": "Com o detalhamento aparece o histórico contábil dos lançamentos, o que facilita encontrar a conta errada antes de gerar o SPED-CF.",
    "caminho": "Relatórios > Livros Fiscais > Livro de Apuração do Lucro Real",
    "fonte": "Emissão de relatórios do Lalur · visto em 66 treinamentos"
  },
  {
    "id": "lalur-029",
    "modulo": "lalur",
    "nivel": 3,
    "pergunta": "No 3º mês do trimestre, o que mostra a linha “antecipação” do livro de apuração?",
    "certa": "Os valores já recolhidos nos meses 1 e 2, que não são um novo lançamento contábil",
    "erradas": [
      "O adicional de IRPJ que será recolhido somente no trimestre seguinte",
      "O novo lançamento contábil que o sistema gera sozinho ao fechar o trimestre",
      "A estimativa de imposto que será paga no mês 3, antes de calcular o trimestre"
    ],
    "explicacao": "A antecipação é só a demonstração do que já foi pago nos meses 1 e 2 do trimestre. Não gera novo lançamento na contabilidade.",
    "caminho": "Relatórios > Livros Fiscais > Livro de Apuração do Lucro Real",
    "fonte": "Emissão de relatórios do Lalur · visto em 66 treinamentos"
  },
  {
    "id": "lalur-030",
    "modulo": "lalur",
    "nivel": 3,
    "pergunta": "Onde lançar a distribuição de lucros isenta (até R$ 50 mil) e a acima disso?",
    "certa": "A isenta em REINF > Outros Dados > Rendimentos Isentos; a acima em Movimentos > Lucros e Dividendos Tributáveis",
    "erradas": [
      "As duas em Movimentos > Lucros e Dividendos Tributáveis, separadas por sócio",
      "A isenta na Folha, no cadastro do sócio; a acima na Contabilidade, pelo razão",
      "As duas em REINF > Rendimentos Isentos, informando a alíquota do IR retido"
    ],
    "explicacao": "Pelos valores do cérebro, até 50 mil vai em Rendimentos Isentos (REINF); acima disso, em Lucros e Dividendos Tributáveis, onde o sistema retém o IR. Confirme sempre o limite vigente.",
    "caminho": "REINF > Outros Dados > Rendimentos Isentos / Movimentos > Lucros e Dividendos Tributáveis",
    "fonte": "Lançamento de distribuição de lucros · visto em 36 treinamentos"
  },
  {
    "id": "lalur-031",
    "modulo": "lalur",
    "nivel": 2,
    "pergunta": "A distribuição de lucros deve ser lançada em qual empresa do sistema?",
    "certa": "Na própria empresa, nunca na empresa padrão",
    "erradas": [
      "Sempre na empresa padrão, para replicar às demais empresas",
      "Na empresa matriz do escritório, que repassa a cada cliente",
      "Em qualquer uma, pois o sistema distribui pelos CPFs dos sócios"
    ],
    "explicacao": "Lançar na empresa padrão subscreveria contas particulares ao replicar. O lançamento é sempre na empresa do cliente.",
    "caminho": "Movimentos > Lucros e Dividendos",
    "fonte": "Lançamento de distribuição de lucros · visto em 36 treinamentos"
  },
  {
    "id": "lalur-032",
    "modulo": "lalur",
    "nivel": 2,
    "pergunta": "O sistema não trouxe os sócios ao importar a distribuição de lucros. Qual é a causa?",
    "certa": "A vigência do quadro societário é posterior ao período; ajuste o período para igual ou maior que a vigência",
    "erradas": [
      "O certificado digital do escritório não tem permissão para ler o quadro",
      "Os sócios foram cadastrados sem CPF no quadro societário da empresa",
      "A empresa padrão ainda não foi atualizada com os sócios do cliente"
    ],
    "explicacao": "Para importar os sócios, a vigência do quadro societário precisa ser menor ou igual à competência escolhida.",
    "caminho": "Movimentos > Lucros e Dividendos",
    "fonte": "Lançamento de distribuição de lucros · visto em 36 treinamentos"
  },
  {
    "id": "lalur-033",
    "modulo": "lalur",
    "nivel": 2,
    "pergunta": "O que o Domínio gera para a DCTF Web e quem faz a transmissão?",
    "certa": "Gera o arquivo MIT (JSON); a transmissão é feita manualmente no e-CAC",
    "erradas": [
      "Gera e transmite a DCTF Web direto à Receita, sem sair do sistema",
      "Gera apenas a guia DARF; a DCTF Web nem precisa ser transmitida",
      "Gera um arquivo TXT que o escritório envia pelo Validador ECF"
    ],
    "explicacao": "O sistema só gera o MIT. No e-CAC, importa-se a apuração (arquivo JSON), encerra, assina e transmite a DCTF Web.",
    "caminho": "Relatórios > Informativos > Federais > Arquivo MIT",
    "fonte": "Emissão de DARF · visto em 35 treinamentos"
  },
  {
    "id": "lalur-034",
    "modulo": "lalur",
    "nivel": 3,
    "pergunta": "Aparece o erro “autor do pedido não possui procuração” ao usar a API do Integra Contador. Qual a causa e a solução?",
    "certa": "A procuração está só no CPF; ajuste-a para o CNPJ do escritório ou use o método convencional",
    "erradas": [
      "O certificado digital venceu; renove o certificado e refaça a procuração",
      "O contador responsável não está no cadastro; inclua-o em Controle > Empresas",
      "A empresa está inapta na Receita; regularize antes de gerar a guia pela API"
    ],
    "explicacao": "A procuração tem que estar em nome do CNPJ do escritório. Se não for possível, emita a guia pelo método convencional, no e-CAC.",
    "caminho": "Relatórios > Informativos > Federais > Arquivo MIT",
    "fonte": "Emissão de DARF · visto em 35 treinamentos"
  },
  {
    "id": "lalur-035",
    "modulo": "lalur",
    "nivel": 1,
    "pergunta": "Qual percentual do lucro acumulado o Lalur compensa automaticamente com prejuízos de anos anteriores?",
    "certa": "30%",
    "erradas": [
      "20%",
      "50%",
      "100%"
    ],
    "explicacao": "Basta cadastrar o saldo inicial de prejuízo nos Parâmetros: o sistema compensa 30% a cada período acumulado (jan, jan+fev, jan+fev+mar...). Não existe flag adicional.",
    "caminho": "Controle > Parâmetros > aba Saldo Inicial",
    "fonte": "Compensação de prejuízo fiscal · visto em 23 treinamentos"
  },
  {
    "id": "lalur-036",
    "modulo": "lalur",
    "nivel": 3,
    "pergunta": "Com balancete de suspensão/redução, quando ocorre a compensação do prejuízo fiscal?",
    "certa": "No ajuste anual final, e não mês a mês",
    "erradas": [
      "Todo mês, sobre o lucro acumulado, com o limite de 30%",
      "Só no trimestre em que o prejuízo do ano corrente aparece",
      "No primeiro mês do ano seguinte, com o saldo transportado"
    ],
    "explicacao": "Na estimativa a compensação é mensal sobre o lucro acumulado. No balancete de suspensão/redução, ela acontece no ajuste anual final.",
    "caminho": "Controle > Parâmetros > guia Geral e guia Opções",
    "fonte": "Compensação de prejuízo fiscal · visto em 23 treinamentos"
  },
  {
    "id": "lalur-037",
    "modulo": "lalur",
    "nivel": 2,
    "pergunta": "Que valor usar no saldo inicial de prejuízo no Lalur?",
    "certa": "O da ECF anterior, pois o prejuízo fiscal é diferente do contábil",
    "erradas": [
      "O da contabilidade, direto do balancete de encerramento do ano",
      "O da DRE do último trimestre apurado no sistema anterior",
      "O valor médio dos prejuízos dos últimos cinco anos de escrituração"
    ],
    "explicacao": "Prejuízo fiscal e prejuízo contábil são diferentes. Use o valor da ECF anterior (Parte B).",
    "caminho": "Controle > Parâmetros > aba Saldo Inicial",
    "fonte": "Cadastro de saldo inicial de prejuízo · visto em 23 treinamentos"
  },
  {
    "id": "lalur-038",
    "modulo": "lalur",
    "nivel": 2,
    "pergunta": "Ao cadastrar o saldo inicial de prejuízo no Lalur, qual tipo informar?",
    "certa": "Credor: o prejuízo devedor do balancete é credor no Lalur para abater certo",
    "erradas": [
      "Devedor: o mesmo tipo do balancete, para não inverter o sinal do saldo",
      "Credor apenas na CSLL; no IRPJ mantém-se o tipo devedor do balancete",
      "Qualquer um, porque o sistema ajusta o sinal sozinho ao gravar"
    ],
    "explicacao": "O tipo é invertido: prejuízo devedor no balancete vira credor no Lalur. Repita para a Base Negativa (CSLL) com o mesmo valor.",
    "caminho": "Controle > Parâmetros > aba Saldo Inicial",
    "fonte": "Cadastro de saldo inicial de prejuízo · visto em 23 treinamentos"
  },
  {
    "id": "lalur-039",
    "modulo": "lalur",
    "nivel": 3,
    "pergunta": "Uma empresa está migrando para o Lucro Real. Em que ordem importar os arquivos?",
    "certa": "Primeiro o SPED, depois os XMLs de entrada e por último os XMLs de saída",
    "erradas": [
      "Primeiro os XMLs de saída, depois os de entrada e por último o SPED",
      "Primeiro os XMLs de entrada, depois os de saída e por último o SPED",
      "Primeiro o SPED, depois os XMLs de saída e por último os de entrada"
    ],
    "explicacao": "A ordem é crítica no Lucro Real. Importar XMLs antes do SPED apaga os dados já importados.",
    "caminho": "Controle > Empresas > Importação",
    "fonte": "Transição entre regimes tributários · visto em 20 treinamentos"
  },
  {
    "id": "lalur-040",
    "modulo": "lalur",
    "nivel": 2,
    "pergunta": "No cadastro da empresa, qual data vai no campo inferior de “Início das atividades”?",
    "certa": "A data real de início das atividades; a do Nire fica no campo superior",
    "erradas": [
      "A data de abertura registrada no Nire; a real fica no campo superior",
      "A data de início do uso do Domínio, igual à data inicial dos Parâmetros",
      "A data da última alteração contratual registrada na Junta Comercial"
    ],
    "explicacao": "O campo superior é o Nire; o inferior é a data real. Nunca coloque a data do Nire no campo inferior.",
    "caminho": "Controle > Empresas",
    "fonte": "Transição entre regimes tributários · visto em 20 treinamentos"
  },
  {
    "id": "patrimonio-001",
    "modulo": "patrimonio",
    "nivel": 2,
    "pergunta": "No cadastro de um bem antigo, qual data de aquisição deve ser informada?",
    "certa": "A data original de aquisição do bem, e não a data de entrada no Domínio",
    "erradas": [
      "A data de início do uso do Domínio, para a depreciação começar do zero",
      "A data de cadastro do bem no sistema, no momento da conversão ou implantação",
      "O primeiro dia do exercício em que o bem foi migrado para o novo sistema"
    ],
    "explicacao": "A data de aquisição é a original. A depreciação acumulada é informada até o mês anterior ao início no Domínio (o sistema calcula, mas o valor pode ser ajustado manualmente).",
    "caminho": "Patrimônio > Arquivos > Bens",
    "fonte": "Cadastro de bens no patrimônio · visto em 127 treinamentos"
  },
  {
    "id": "patrimonio-002",
    "modulo": "patrimonio",
    "nivel": 1,
    "pergunta": "De onde vem a taxa de depreciação de um bem?",
    "certa": "Da Conta Patrimonial escolhida; para outra taxa usa-se a “taxa alternativa” na aba Depreciação",
    "erradas": [
      "É digitada manualmente em cada bem, pois não existe uma taxa padrão por tipo de bem cadastrado",
      "Vem do acumulador da nota fiscal de compra, e não do cadastro do bem no módulo",
      "Vem do Centro de Custo informado no bem, que guarda a taxa usada por cada departamento"
    ],
    "explicacao": "Ao escolher a Conta Patrimonial (veículos, máquinas, edifícios...), a taxa já vem junto. Se o bem tiver taxa diferente, informe a taxa alternativa na aba Depreciação do próprio bem.",
    "caminho": "Patrimônio > Arquivos > Bens > aba Depreciação",
    "fonte": "Cadastro de bens no patrimônio · visto em 127 treinamentos"
  },
  {
    "id": "patrimonio-003",
    "modulo": "patrimonio",
    "nivel": 2,
    "pergunta": "A empresa compra veículos para revenda. Como lançar a nota de compra?",
    "certa": "Como mercadoria (CFOP e acumulador de mercadoria), pois veículo para revenda não é ativo imobilizado",
    "erradas": [
      "Com acumulador de imobilizado, para o sistema gerar o bem e também o crédito de ICMS/CIAP",
      "Como imobilizado, mas com taxa de depreciação zero para não reduzir o valor do veículo",
      "Não se lança no Escrita Fiscal: o veículo é cadastrado direto no módulo Patrimônio"
    ],
    "explicacao": "Veículo destinado à revenda é estoque, não ativo. Usando acumulador de imobilizado o sistema abriria o cadastro de bem e geraria crédito indevido.",
    "caminho": "Escrita > Movimentos > Entradas",
    "fonte": "Cadastro de bens no patrimônio · visto em 127 treinamentos"
  },
  {
    "id": "patrimonio-004",
    "modulo": "patrimonio",
    "nivel": 1,
    "pergunta": "Ao lançar uma nota de entrada com acumulador de imobilizado, o que o Domínio faz?",
    "certa": "Abre a tela de cadastro do bem automaticamente, sem precisar acessar o Patrimônio depois",
    "erradas": [
      "Nada: o bem sempre precisa ser cadastrado manualmente no módulo Patrimônio depois",
      "Cadastra o bem sozinho, sem pedir nenhum dado, e só avisa que o bem foi criado",
      "Bloqueia a gravação da nota até que o bem seja cadastrado no módulo Patrimônio"
    ],
    "explicacao": "Pela nota com acumulador de imobilizado a tela do bem abre na hora, e já se aproveita para preencher. Se a nota não gerou bem, verifique se o acumulador tem a opção de gerar bens e o CFOP.",
    "caminho": "Escrita > Movimentos > Entradas",
    "fonte": "Cadastro de bens no patrimônio · visto em 127 treinamentos"
  },
  {
    "id": "patrimonio-005",
    "modulo": "patrimonio",
    "nivel": 3,
    "pergunta": "Qual cuidado é essencial ao escolher a integração do módulo Patrimônio?",
    "certa": "Nunca integrar com a Escrita Fiscal e a Contabilidade ao mesmo tempo, pois duplica lançamentos",
    "erradas": [
      "Integrar sempre com as duas, pois cada uma recebe um tipo diferente de lançamento",
      "Integrar só com a Escrita Fiscal, que repassa os lançamentos à Contabilidade depois",
      "Integrar com a Folha, que é quem concentra os lançamentos de depreciação mensal"
    ],
    "explicacao": "O parâmetro deve ser feito antes de lançar notas de ativo no Fiscal (a integração é automática) e não pode ser importado: faça empresa por empresa.",
    "caminho": "Patrimônio > Controle > Parâmetros",
    "fonte": "Configuração inicial do módulo Patrimônio · visto em 101 treinamentos"
  },
  {
    "id": "patrimonio-006",
    "modulo": "patrimonio",
    "nivel": 2,
    "pergunta": "Um bem foi comprado no dia 16 e o cliente quer depreciar o mês inteiro. O que fazer?",
    "certa": "Marcar em Parâmetros > Geral “considerar todos os dias do mês”, pois o padrão é proporcional",
    "erradas": [
      "Nada: o padrão do Domínio já deprecia o mês inteiro, desde a data de aquisição",
      "Alterar a taxa de depreciação do bem para o dobro no primeiro mês de uso",
      "Cadastrar o bem com data de aquisição no dia 1º, e ajustar a nota no Fiscal depois"
    ],
    "explicacao": "Outra opção é ajustar a data de início de depreciação no próprio bem. O cálculo é por bem, não unificado; para um bem cadastrado depois, calcule só ele, com filtro.",
    "caminho": "Patrimônio > Processos > Calcular",
    "fonte": "Cálculo mensal de depreciação · visto em 104 treinamentos"
  },
  {
    "id": "patrimonio-007",
    "modulo": "patrimonio",
    "nivel": 3,
    "pergunta": "Qual integração do Patrimônio vale para cada regime tributário?",
    "certa": "Simples: só a Integração Contábil; Presumido e Real: Contábil e também Fiscal (créditos)",
    "erradas": [
      "Simples: Contábil e Fiscal; Presumido e Real: somente a Integração Fiscal",
      "Todos os regimes: somente a Integração Contábil, pois o crédito é feito pelo Lalur",
      "Simples: nenhuma integração; Presumido e Real: Contábil e Fiscal em qualquer caso"
    ],
    "explicacao": "Se a aquisição foi configurada para ir “ao cadastrar o bem”, ela já foi à Contabilidade, e a integração serve para a depreciação mensal. Desmarque “gerar a partir de centro de custo” se não houver centros configurados.",
    "caminho": "Patrimônio > Processos > Integração Contábil",
    "fonte": "Integração de depreciação com contabilidade · visto em 56 treinamentos"
  },
  {
    "id": "patrimonio-008",
    "modulo": "patrimonio",
    "nivel": 1,
    "pergunta": "Os parâmetros do Patrimônio podem ser importados de uma empresa modelo?",
    "certa": "Não: o parâmetro não pode ser importado e deve ser feito empresa por empresa",
    "erradas": [
      "Sim, pela importação de perfil, como acontece com os parâmetros da Escrita Fiscal",
      "Sim, mas apenas da empresa 9995, que é a única que serve de modelo",
      "Sim, desde que as duas empresas usem o mesmo regime tributário"
    ],
    "explicacao": "Se aparecer “Conta de crédito de histórico não configurada”, o parâmetro de centro de custos está marcado sem centro cadastrado: desmarque “Gerar a partir de centro de custo”.",
    "caminho": "Patrimônio > Controle > Parâmetros",
    "fonte": "Configuração inicial do módulo Patrimônio · visto em 101 treinamentos"
  },
  {
    "id": "patrimonio-009",
    "modulo": "patrimonio",
    "nivel": 3,
    "pergunta": "Na apuração do CIAP, onde se gera o DECIP?",
    "certa": "No site da SEFAZ, e não pelo sistema",
    "erradas": [
      "No Patrimônio, em Processos > Informações para Cálculo do Crédito de ICMS",
      "Na Escrita Fiscal, em Relatórios > Informativos > DECIP",
      "No Lalur, junto com a geração da ECF do exercício"
    ],
    "explicacao": "Na nota com CFOP 2551, deixe a base de ICMS zerada e não destaque crédito; lance o crédito em Movimentos > Outros > Impostos Lançados > Crédito de Imobilizado. A opção “Deduzir ICMS do valor original” só vale para bens cadastrados depois dela.",
    "caminho": "Processos > Informações para Cálculo do Crédito de ICMS",
    "fonte": "Cálculo de CIAP e créditos ICMS · visto em 28 treinamentos (caso pontual)"
  },
  {
    "id": "patrimonio-010",
    "modulo": "patrimonio",
    "nivel": 2,
    "pergunta": "Na importação de bens por planilha, o que deve ser garantido sobre o código do bem?",
    "certa": "Que seja único; se o sistema anterior repete códigos por conta, é preciso renumerar",
    "erradas": [
      "Que repita o código da conta contábil, para o bem herdar a classificação da conta",
      "Que seja igual ao número da nota fiscal de compra, para o bem ficar vinculado a ela",
      "Que tenha sempre oito dígitos, preenchidos com zeros à esquerda quando for menor"
    ],
    "explicacao": "O conversor traz cadastro e depreciação, mas os flags de crédito fiscal precisam ser feitos manualmente. A data vai no formato AAAA-MM-DD e o depara das contas é crítico: confira o que cada conta representa. Exclua a linha de cabeçalho antes de salvar o CSV.",
    "caminho": "Utilitários > Importação > Importador",
    "fonte": "Importação de bens via Excel e planilhas · visto em 79 treinamentos"
  },
  {
    "id": "patrimonio-011",
    "modulo": "patrimonio",
    "nivel": 2,
    "pergunta": "Nos Parâmetros do Patrimônio, qual mês/ano deve ser informado como inicial para depreciar?",
    "certa": "O mês seguinte ao último mês depreciado no sistema anterior",
    "erradas": [
      "O mês de abertura do CNPJ da empresa",
      "Janeiro do ano corrente, qualquer que seja o sistema anterior",
      "O mês de aquisição do bem mais antigo cadastrado"
    ],
    "explicacao": "A depreciação no Domínio começa no mês seguinte ao último que o sistema anterior já depreciou. Assim não há buraco nem duplicidade de cálculo.",
    "caminho": "Controle > Parâmetros (ou Patrimônio > Controle > Parâmetros)",
    "fonte": "Configuração inicial do módulo Patrimônio · visto em 101 treinamentos"
  },
  {
    "id": "patrimonio-012",
    "modulo": "patrimonio",
    "nivel": 2,
    "pergunta": "Ao integrar, aparece “Conta de crédito de histórico não configurada”. Qual a causa mais provável nos Parâmetros?",
    "certa": "Gerar a partir de centro de custo está marcado, mas não há centro cadastrado",
    "erradas": [
      "A conta patrimonial usada pelo bem está sem taxa de depreciação informada na tabela",
      "O bem foi cadastrado com data de aquisição posterior à competência que está sendo integrada",
      "A integração fiscal e a contábil foram marcadas ao mesmo tempo nos Parâmetros da empresa"
    ],
    "explicacao": "Com a opção de centro de custo marcada e nenhum centro cadastrado, o sistema não acha a conta. Desmarque “Gerar a partir de centro de custo” (ou cadastre o centro) e gere de novo.",
    "caminho": "Patrimônio > Controle > Parâmetros > Contabilidade",
    "fonte": "Configuração inicial do módulo Patrimônio · visto em 101 treinamentos"
  },
  {
    "id": "patrimonio-013",
    "modulo": "patrimonio",
    "nivel": 2,
    "pergunta": "O Parâmetro do Patrimônio não aceita a conta contábil que o cliente quer usar. Como contornar?",
    "certa": "Informar uma conta temporária, gravar o parâmetro e ajustar a conta depois",
    "erradas": [
      "Excluir o parâmetro da empresa e importar o de uma empresa modelo",
      "Desmarcar de vez a geração de lançamento contábil e lançar tudo manualmente",
      "Criar uma nova vigência da empresa só para conseguir gravar o parâmetro"
    ],
    "explicacao": "Para destravar a gravação, use uma conta qualquer aceita pelo sistema, grave e depois volte para corrigir. Lembre que o parâmetro não é importável: é empresa por empresa.",
    "caminho": "Controle > Parâmetros",
    "fonte": "Configuração inicial do módulo Patrimônio · visto em 101 treinamentos"
  },
  {
    "id": "patrimonio-014",
    "modulo": "patrimonio",
    "nivel": 1,
    "pergunta": "Um veículo tem taxa de depreciação de 20% ao ano e custou R$ 70.000,00. Qual é a depreciação mensal calculada?",
    "certa": "R$ 1.166,67",
    "erradas": [
      "R$ 14.000,00",
      "R$ 5.833,33",
      "R$ 700,00"
    ],
    "explicacao": "70.000 × 20% = 14.000 por ano; dividido por 12 meses dá R$ 1.166,67. A taxa vem da Conta Patrimonial escolhida no bem.",
    "caminho": "Patrimônio > Processos > Calcular",
    "fonte": "Cálculo mensal de depreciação · visto em 104 treinamentos"
  },
  {
    "id": "patrimonio-015",
    "modulo": "patrimonio",
    "nivel": 2,
    "pergunta": "A depreciação do mês está com milhares de reais de diferença do sistema anterior. Qual é a prova real recomendada?",
    "certa": "Depreciação do mês × 100 ÷ taxa, que deve resultar no valor de aquisição do bem",
    "erradas": [
      "Valor de aquisição × taxa × 12, comparando com o saldo da conta contábil",
      "Depreciação do mês ÷ taxa, que deve resultar no valor residual do bem",
      "Depreciação acumulada ÷ número de bens, comparando com a média do sistema anterior"
    ],
    "explicacao": "Se a conta não fecha com o valor de aquisição, o valor cadastrado está errado. Ajuste o bem, exclua o cálculo e calcule de novo.",
    "caminho": "Patrimônio > Processos > Calcular",
    "fonte": "Cálculo mensal de depreciação · visto em 104 treinamentos"
  },
  {
    "id": "patrimonio-016",
    "modulo": "patrimonio",
    "nivel": 1,
    "pergunta": "Um bem foi cadastrado depois que a depreciação do mês já tinha sido calculada. Qual a melhor forma de calcular só ele?",
    "certa": "Calcular de novo usando o filtro por bem, sem recalcular os demais",
    "erradas": [
      "Excluir o cálculo de todos os bens e recalcular a empresa inteira",
      "Esperar o mês seguinte, que recupera o mês perdido automaticamente",
      "Lançar a depreciação do bem manualmente na Contabilidade"
    ],
    "explicacao": "O cálculo aceita filtro por bem, conta patrimonial ou centro de custo. Filtrar só o bem novo evita refazer tudo.",
    "caminho": "Patrimônio > Processos > Calcular",
    "fonte": "Cálculo mensal de depreciação · visto em 104 treinamentos"
  },
  {
    "id": "patrimonio-017",
    "modulo": "patrimonio",
    "nivel": 1,
    "pergunta": "Ao excluir o cálculo de depreciação de um bem, o que acontece com os outros bens?",
    "certa": "Nada: o cálculo é por bem e não volta o período dos outros",
    "erradas": [
      "O cálculo de todos os bens do mesmo período é excluído junto",
      "O período volta para todos os bens da mesma conta patrimonial",
      "O sistema exclui o cálculo de toda a empresa depois de confirmar"
    ],
    "explicacao": "Cada bem tem o seu cálculo. Por isso dá para excluir e refazer um bem sem mexer no resto.",
    "caminho": "Utilitários > Excluir > Cálculo",
    "fonte": "Cálculo mensal de depreciação · visto em 104 treinamentos"
  },
  {
    "id": "patrimonio-018",
    "modulo": "patrimonio",
    "nivel": 3,
    "pergunta": "O cliente quer estender o crédito de um bem reduzindo a depreciação acumulada. Como proceder?",
    "certa": "Reduzir o valor acumulado na aba Depreciação do bem, excluir o cálculo e recalcular",
    "erradas": [
      "Alterar a data de aquisição do bem para uma mais recente e recalcular",
      "Mudar a taxa na conta patrimonial, que reflete em todos os bens retroativamente",
      "Lançar um ajuste manual direto no Fiscal, sem mexer no cadastro do bem"
    ],
    "explicacao": "O ajuste é feito no próprio bem: reduza o acumulado na aba Depreciação, exclua o cálculo existente e rode o cálculo outra vez.",
    "caminho": "Patrimônio > Arquivos > Bens > aba Depreciação",
    "fonte": "Cálculo mensal de depreciação · visto em 104 treinamentos"
  },
  {
    "id": "patrimonio-019",
    "modulo": "patrimonio",
    "nivel": 2,
    "pergunta": "No Lucro Real, de que duas formas o crédito de PIS/COFINS pode ser calculado no Patrimônio?",
    "certa": "Sobre a aquisição (dividida em 48 parcelas) ou sobre a depreciação mensal",
    "erradas": [
      "Sobre o valor residual do bem ou sobre o seu valor de mercado atualizado",
      "Só sobre a aquisição, lançada em parcela única no mês da compra do bem",
      "Sobre o faturamento do mês ou sobre a folha de pagamento da empresa"
    ],
    "explicacao": "Existem as duas formas, e o critério deve seguir o do sistema anterior. Exemplo sobre a aquisição: 10.000 × 9,25% ÷ 48. Sobre a depreciação: 10.000 × 10% × 9,25% ÷ 48.",
    "caminho": "Patrimônio > Controle > Parâmetros > aba Impostos",
    "fonte": "Configuração inicial do módulo Patrimônio · visto em 101 treinamentos"
  },
  {
    "id": "patrimonio-020",
    "modulo": "patrimonio",
    "nivel": 2,
    "pergunta": "Por que não se deve marcar o crédito sobre a aquisição no Patrimônio quando o Fiscal já dá crédito na compra pelo acumulador?",
    "certa": "Porque o crédito seria aproveitado em duplicidade",
    "erradas": [
      "Porque o Patrimônio só calcula crédito sobre a depreciação, nunca sobre a aquisição",
      "Porque o SPED rejeita bens que tenham crédito sobre a aquisição",
      "Porque o bem deixaria de ser depreciado nos meses seguintes"
    ],
    "explicacao": "Se o acumulador do Fiscal já gera o crédito na compra, marcar o crédito sobre a aquisição no bem duplica o valor. Escolha um só caminho.",
    "caminho": "Patrimônio > Arquivos > Bens > aba PIS e COFINS",
    "fonte": "Cálculo de créditos PIS e COFINS · visto em 19 treinamentos"
  },
  {
    "id": "patrimonio-021",
    "modulo": "patrimonio",
    "nivel": 2,
    "pergunta": "Qual é a divisão que o Patrimônio aplica automaticamente no crédito de PIS/COFINS do bem, e o que fazer se o crédito deve começar depois da aquisição?",
    "certa": "1/48 por mês; ajustar a data de início do crédito no bem",
    "erradas": [
      "1/60 por mês; ajustar a taxa na conta patrimonial",
      "1/12 por mês; ajustar a data de aquisição do bem",
      "1/24 por mês; ajustar a competência do Parâmetro"
    ],
    "explicacao": "O sistema calcula 1/48 sozinho. Se o crédito só passa a valer depois da aquisição, altere a data de início na aba PIS e COFINS do bem.",
    "caminho": "Patrimônio > Arquivos > Bens > aba PIS e COFINS",
    "fonte": "Cálculo de créditos PIS e COFINS · visto em 19 treinamentos"
  },
  {
    "id": "patrimonio-022",
    "modulo": "patrimonio",
    "nivel": 2,
    "pergunta": "Como atualizar o valor de um contrato de locação no Patrimônio?",
    "certa": "Pela renegociação, pois não existe atualização monetária automática",
    "erradas": [
      "O sistema atualiza todo mês pelo índice cadastrado no contrato",
      "Excluindo o contrato e cadastrando outro com a data atual",
      "Alterando a vigência dos Parâmetros para o mês corrente"
    ],
    "explicacao": "Não existe atualização monetária automática: use “renegociação” ou lance o índice mensal manualmente.",
    "caminho": "Patrimônio > Contratos",
    "fonte": "Controle de contratos de locação · visto em 6 treinamentos"
  },
  {
    "id": "patrimonio-023",
    "modulo": "patrimonio",
    "nivel": 2,
    "pergunta": "Na importação de bens pelo Super Conversor, o que NÃO vem pronto e precisa ser feito manualmente?",
    "certa": "As flags de crédito fiscal (ICMS e PIS/COFINS)",
    "erradas": [
      "O cadastro básico dos bens que foram importados",
      "A depreciação acumulada de cada um dos bens",
      "O código único de cada bem dentro do arquivo"
    ],
    "explicacao": "O conversor traz o cadastro e a depreciação, mas as flags de crédito fiscal (ICMS, PIS/COFINS) devem ser marcadas manualmente depois. O depara das contas também merece atenção.",
    "caminho": "Utilitários > Importação > Importador",
    "fonte": "Importação de bens via Excel e planilhas · visto em 79 treinamentos"
  },
  {
    "id": "patrimonio-024",
    "modulo": "patrimonio",
    "nivel": 1,
    "pergunta": "Qual é o formato de data exigido na planilha de importação de bens?",
    "certa": "AAAA-MM-DD",
    "erradas": [
      "DD/MM/AAAA",
      "MM/DD/AAAA",
      "DDMMAAAA"
    ],
    "explicacao": "As datas da planilha devem seguir o padrão ano-mês-dia. Outro formato gera erro na importação.",
    "caminho": "Utilitários > Importação > Importador",
    "fonte": "Importação de bens via Excel e planilhas · visto em 79 treinamentos"
  },
  {
    "id": "patrimonio-025",
    "modulo": "patrimonio",
    "nivel": 2,
    "pergunta": "Depois da Integração Contábil, como os lançamentos do Patrimônio aparecem na Contabilidade?",
    "certa": "Com origem “Patrimônio”, conciliados e sem edição",
    "erradas": [
      "Como lançamentos manuais, editáveis pelo contador",
      "Pendentes de aprovação até o fechamento do mês",
      "Agrupados num único lançamento anual"
    ],
    "explicacao": "Os lançamentos vêm marcados com origem Patrimônio. Para corrigir, ajuste no Patrimônio e gere de novo.",
    "caminho": "Patrimônio > Processos > Integração Contábil",
    "fonte": "Integração de depreciação com contabilidade · visto em 56 treinamentos"
  },
  {
    "id": "patrimonio-026",
    "modulo": "patrimonio",
    "nivel": 2,
    "pergunta": "Ao gerar a Integração Contábil aparece erro de conta não configurada. Onde corrigir?",
    "certa": "Em Contas Patrimoniais, guia Contabilidade, completando as contas faltantes",
    "erradas": [
      "No cadastro da empresa, em Controle > Empresas, na aba Contabilidade geral",
      "No acumulador fiscal da nota, na aba que define as contas de débito e crédito",
      "No plano de contas da Contabilidade, marcando as contas do ativo como sintéticas"
    ],
    "explicacao": "As contas contábeis da integração ficam em cada Conta Patrimonial. Complete as que faltam e gere novamente.",
    "caminho": "Patrimônio > Arquivos > Contas Patrimoniais > guia Contabilidade",
    "fonte": "Integração de depreciação com contabilidade · visto em 56 treinamentos"
  },
  {
    "id": "patrimonio-027",
    "modulo": "patrimonio",
    "nivel": 3,
    "pergunta": "Uma nota de ativo com CFOP 2551 foi lançada. Como tratar o crédito de ICMS?",
    "certa": "Zerar a base de ICMS na nota e lançar o crédito em Impostos Lançados > Crédito de Imobilizado",
    "erradas": [
      "Destacar o ICMS normalmente na nota e deixar o Patrimônio absorver todo o crédito sozinho",
      "Lançar com CFOP de mercadoria, convertendo a nota para imobilizado depois da entrada",
      "Usar o acumulador de uso e consumo e lançar o crédito no campo de outras informações"
    ],
    "explicacao": "Nesse CFOP não se destaca o crédito na nota: a base do ICMS fica zerada e o crédito é lançado em Movimentos > Outros > Impostos Lançados > Crédito de Imobilizado.",
    "caminho": "Escrita > Movimentos > Outros > Impostos Lançados > Crédito de Imobilizado",
    "fonte": "Cálculo de CIAP e créditos ICMS · visto em 28 treinamentos"
  },
  {
    "id": "patrimonio-028",
    "modulo": "patrimonio",
    "nivel": 2,
    "pergunta": "Qual é a ordem correta do cálculo do CIAP no Patrimônio?",
    "certa": "Importar as saídas do Fiscal, calcular o crédito e integrar com a Escrita Fiscal",
    "erradas": [
      "Calcular o crédito, importar as saídas do Fiscal e só então gravar o coeficiente",
      "Integrar com a Escrita Fiscal, calcular o crédito e depois importar as saídas",
      "Gerar o DECIP, importar as saídas do Fiscal e calcular o crédito"
    ],
    "explicacao": "Primeiro se inclui a competência e importa as saídas (o sistema calcula o coeficiente); depois calcula-se o crédito; por fim a integração lança o ajuste no Fiscal.",
    "caminho": "Patrimônio > Processos > Informações para Cálculo do Crédito de ICMS",
    "fonte": "Cálculo de CIAP e créditos ICMS · visto em 28 treinamentos"
  },
  {
    "id": "patrimonio-029",
    "modulo": "patrimonio",
    "nivel": 2,
    "pergunta": "O que representa o coeficiente usado no cálculo do crédito de ICMS (CIAP)?",
    "certa": "As saídas tributadas divididas pelas saídas totais do período",
    "erradas": [
      "As entradas com crédito divididas pelas entradas totais",
      "O valor do bem dividido pelas 48 parcelas do crédito",
      "A depreciação do mês dividida pela depreciação acumulada"
    ],
    "explicacao": "O sistema importa as saídas do Fiscal e calcula o coeficiente de tributado sobre o total, que define a parte do crédito aproveitável no mês.",
    "caminho": "Patrimônio > Processos > Informações para Cálculo do Crédito de ICMS",
    "fonte": "Cálculo de CIAP e créditos ICMS · visto em 28 treinamentos"
  },
  {
    "id": "patrimonio-030",
    "modulo": "patrimonio",
    "nivel": 2,
    "pergunta": "Notas de ativo já importadas antes de o acumulador ser configurado viram bens automaticamente?",
    "certa": "Não: só as lançadas com “Gerar bens automaticamente” marcado; as antigas são cadastradas à mão",
    "erradas": [
      "Sim, o Patrimônio varre todas as notas do período e cria os bens sozinho, sem marcação",
      "Sim, mas só as notas de empresas do Lucro Real são convertidas em bens no cálculo",
      "Não: é preciso reimportar o XML de cada nota usando outro CFOP no lançamento"
    ],
    "explicacao": "A criação automática depende da marcação no acumulador na hora do lançamento. Notas anteriores precisam ser cadastradas manualmente pela guia Bens.",
    "caminho": "Escrita > Arquivos > Acumuladores > aba Notas",
    "fonte": "Integração fiscal-patrimonial · visto em 24 treinamentos"
  },
  {
    "id": "patrimonio-031",
    "modulo": "patrimonio",
    "nivel": 3,
    "pergunta": "Como escolher quais notas de ativo são contabilizadas pelo Fiscal e quais pelo Patrimônio?",
    "certa": "Pelo acumulador: apagando as contas de débito e crédito do que o Patrimônio contabiliza",
    "erradas": [
      "Pelo CFOP da nota, que define sozinho o módulo contábil de destino do lançamento",
      "Pela data da nota: as anteriores ao primeiro cálculo seguem para o Fiscal",
      "Pelo parâmetro da empresa, que vale para todas as notas de uma vez só"
    ],
    "explicacao": "Quem decide é o acumulador. Sem contas de débito e crédito nele, o Fiscal não contabiliza e o Patrimônio assume. Contabilizar pelos dois duplica.",
    "caminho": "Escrita > Arquivos > Acumuladores",
    "fonte": "Integração fiscal-patrimonial · visto em 24 treinamentos"
  },
  {
    "id": "patrimonio-032",
    "modulo": "patrimonio",
    "nivel": 1,
    "pergunta": "No cadastro de um bem, o Centro de Custo é obrigatório. O que fazer se o cliente não usa centros de custo?",
    "certa": "Usar um centro genérico, como “1 - Geral”",
    "erradas": [
      "Deixar o campo em branco e gravar com aviso",
      "Desmarcar a opção de depreciar o bem",
      "Usar o código da empresa como centro de custo"
    ],
    "explicacao": "O centro de custo é obrigatório, assim como Histórico e Função (que podem repetir o nome do bem). Um centro “Geral” resolve.",
    "caminho": "Patrimônio > Arquivos > Bens",
    "fonte": "Cadastro de bens no patrimônio · visto em 127 treinamentos"
  },
  {
    "id": "honorarios-001",
    "modulo": "honorarios",
    "nivel": 2,
    "pergunta": "O vencimento do honorário cai num sábado e o tipo configurado é “adiados”. O que acontece?",
    "certa": "O vencimento é prorrogado para a segunda-feira",
    "erradas": [
      "Antecipa para a sexta-feira",
      "Mantém o sábado, como em “dias corridos direto”",
      "O sistema bloqueia o faturamento até o vencimento ser ajustado"
    ],
    "explicacao": "Dias corridos direto mantém a data mesmo em fim de semana; adiados prorroga para segunda; antecipados antecipa para sexta.",
    "caminho": "Controle > Parâmetros > aba Faturamento",
    "fonte": "Configuração de faturamento · visto em 179 treinamentos"
  },
  {
    "id": "honorarios-002",
    "modulo": "honorarios",
    "nivel": 3,
    "pergunta": "Ao faturar aparece “Data de emissão inferior à data de cadastro”. Qual é a causa?",
    "certa": "O “início de faturamento” do cliente está posterior à competência: ajustar em Controle > Empresas",
    "erradas": [
      "O contrato foi criado depois do vencimento: excluir e criar um novo contrato para o cliente",
      "O boleto está sem conta financeira vinculada: informar a conta em Dados do Boleto e refaturar",
      "A rotina automática está com competência “anterior”: trocar para a competência “da execução”"
    ],
    "explicacao": "O campo “início de faturamento” precisa ser anterior ou igual à primeira competência a faturar. Ajuste em Controle > Empresas e refaça.",
    "caminho": "Controle > Empresas",
    "fonte": "Configuração de faturamento · visto em 179 treinamentos"
  },
  {
    "id": "honorarios-003",
    "modulo": "honorarios",
    "nivel": 1,
    "pergunta": "O que é necessário para a rotina automática de faturamento rodar no horário agendado no Domínio Local?",
    "certa": "O sistema precisa estar aberto e com usuário logado no dia e hora programados",
    "erradas": [
      "Nada: ela roda no servidor mesmo com o Domínio fechado, desde que o computador esteja ligado",
      "O Portal do Cliente precisa estar configurado antes, com todos os clientes convidados",
      "É preciso que o boleto do mês anterior já tenha sido emitido manualmente pelo usuário"
    ],
    "explicacao": "Como as demais rotinas automáticas do Domínio Local, ela só executa com o sistema aberto e usuário logado no horário. A competência pode ser a “da execução” (mês atual) ou a “anterior”.",
    "caminho": "Arquivos > Rotinas Automáticas",
    "fonte": "Configuração de rotina automática · visto em 150 treinamentos"
  },
  {
    "id": "honorarios-004",
    "modulo": "honorarios",
    "nivel": 2,
    "pergunta": "Como impedir que clientes inadimplentes sejam faturados?",
    "certa": "Em Parâmetros > Faturamento, marcar “Não faturar com parcelas vencidas” e informar a quantidade",
    "erradas": [
      "Alterando a situação do cliente para “Em constituição” no cadastro, em Controle > Empresas",
      "Excluindo o contrato do cliente até que ele quite todas as parcelas em aberto no escritório",
      "Desmarcando “Limitar dias de vencimento” e deixando os dias livres nos parâmetros de faturamento"
    ],
    "explicacao": "Em Controle > Parâmetros > Faturamento marque “Não faturar com parcelas vencidas” e informe o limite (ex.: 3). Na aba Avisos, dá para ser avisado sobre clientes com várias parcelas em aberto.",
    "caminho": "Controle > Parâmetros > aba Faturamento",
    "fonte": "Configuração de faturamento · visto em 179 treinamentos"
  },
  {
    "id": "honorarios-005",
    "modulo": "honorarios",
    "nivel": 1,
    "pergunta": "O cliente pergunta se o faturamento é só um controle ou se já gera a cobrança. O que responder?",
    "certa": "Faturamento é o cálculo e pré-requisito: sem faturar, não é possível gerar boleto nem nota",
    "erradas": [
      "O faturamento já gera o boleto e a nota fiscal de cada cliente automaticamente",
      "O faturamento é só um relatório de conferência e não interfere na emissão de boletos",
      "O faturamento gera a nota fiscal, mas o boleto é emitido de forma independente"
    ],
    "explicacao": "O sistema só fatura clientes com contrato cadastrado ou lançamento manual. Confira por relatório antes de emitir documentos: depois de emitir boleto ou nota, só é possível excluir o faturamento excluindo antes os documentos vinculados.",
    "caminho": "Processos > Faturamento",
    "fonte": "Processamento de faturamento · visto em 332 treinamentos"
  },
  {
    "id": "honorarios-006",
    "modulo": "honorarios",
    "nivel": 2,
    "pergunta": "O faturamento de um cliente saiu errado. É preciso excluir o faturamento de todos?",
    "certa": "Não: exclua só do cliente específico, ajuste e fature de novo",
    "erradas": [
      "Sim, o sistema só permite excluir o faturamento do mês inteiro, de todos os clientes",
      "Sim, mas só se algum boleto já tiver sido emitido para os clientes do mês",
      "Não: basta alterar o valor do contrato e o faturamento se corrige sozinho"
    ],
    "explicacao": "A exclusão é em Utilitários > Excluir > Faturamento. Para faturar só alguns clientes, use os três pontinhos e desmarque os já faturados ou inativos. O cliente selecionado fica marcado até ser desmarcado manualmente no filtro.",
    "caminho": "Utilitários > Excluir > Faturamento",
    "fonte": "Processamento de faturamento · visto em 332 treinamentos"
  },
  {
    "id": "honorarios-007",
    "modulo": "honorarios",
    "nivel": 2,
    "pergunta": "O cliente recebeu a mensagem “boleto não registrado” ao tentar pagar. Qual a causa provável?",
    "certa": "O boleto foi enviado antes de o banco processar o arquivo de remessa",
    "erradas": [
      "O boleto foi emitido com data de vencimento em fim de semana, o que o banco rejeita",
      "O cliente não tem contrato ativo, e por isso o boleto sai sem registro no banco",
      "A competência do faturamento está no mês errado e o banco não reconhece o boleto"
    ],
    "explicacao": "O boleto só é válido depois que o banco processa a remessa. No Domínio Conta PJ a baixa é automática quando o cliente paga; nos outros bancos a baixa é manual. “Código de barras não localizado” indica numeração divergente: refaça a remessa.",
    "caminho": "Processos > Boletos > Emissão",
    "fonte": "Emissão de boleto · visto em 232 treinamentos"
  },
  {
    "id": "honorarios-008",
    "modulo": "honorarios",
    "nivel": 2,
    "pergunta": "O cliente pagou por PIX, mas fora do QR Code do boleto. O que acontece com a baixa?",
    "certa": "Não baixa automaticamente: exige baixa manual",
    "erradas": [
      "Baixa automaticamente, pois o PIX é identificado pelo CNPJ do pagador",
      "Baixa automaticamente, mas só no Domínio Conta PJ e depois de 24 horas",
      "Baixa automaticamente com juros, calculados pelo atraso do boleto original"
    ],
    "explicacao": "A baixa manual fica em Processos > Contas a Receber > Recebimento. Juros de 1% ao mês equivalem a 0,03% ao dia e podem divergir do banco: ajuste manualmente. PIX atrasado só cobra juros se usar o QR Code do boleto.",
    "caminho": "Processos > Contas a Receber > Recebimento",
    "fonte": "Baixa manual de recebimento · visto em 225 treinamentos"
  },
  {
    "id": "honorarios-009",
    "modulo": "honorarios",
    "nivel": 2,
    "pergunta": "Um lançamento mensal avulso foi feito em março. Ele aparece em abril?",
    "certa": "Não: existe só na competência indicada; para recorrentes use Eventos Fixos no contrato",
    "erradas": [
      "Sim, o lançamento mensal se repete em todos os meses até o término do contrato",
      "Sim, mas só se o cliente tiver contrato com a opção de reajuste anual marcada",
      "Não, e o sistema também não permite outro lançamento no mesmo mês para o cliente"
    ],
    "explicacao": "Pode haver vários lançamentos no mesmo mês para o mesmo cliente. Para excluir um lançamento adicional: Excluir Faturamento na competência, excluir o lançamento, gravar e refaturar.",
    "caminho": "Processos > Contas a Receber > Lançamento Mensal (F3)",
    "fonte": "Lançamento mensal avulso · visto em 223 treinamentos"
  },
  {
    "id": "honorarios-010",
    "modulo": "honorarios",
    "nivel": 1,
    "pergunta": "Qual a recomendação para o código do cliente em relação ao código da empresa?",
    "certa": "Igualar os dois, para padronização e para facilitar os relatórios",
    "erradas": [
      "Manter os dois diferentes, para separar o cadastro do cliente do cadastro fiscal",
      "Usar sempre um código maior no cliente, que o sistema reserva para o faturamento",
      "O sistema impede códigos iguais; o cliente recebe automaticamente o código seguinte"
    ],
    "explicacao": "Para clientes eventuais, use códigos altos (acima de 5000 ou 10000) para separá-los dos fixos nos relatórios; eles não precisam estar em Controle > Empresas. Cliente só aparece se “Honorários” estiver marcado em Controle > Empresas > Módulos.",
    "caminho": "Arquivos > Clientes",
    "fonte": "Cadastro de cliente · visto em 293 treinamentos"
  },
  {
    "id": "honorarios-011",
    "modulo": "honorarios",
    "nivel": 3,
    "pergunta": "No cadastro do contrato, quando marcar “Definir data de término” como Sim?",
    "certa": "Só quando o cliente encerrar definitivamente, pois o contrato fica inutilizável",
    "erradas": [
      "Sempre, para o sistema controlar a vigência e renovar o contrato automaticamente",
      "Quando houver reajuste, para registrar a data em que o novo valor passa a valer",
      "Quando o contrato for copiado para outro cliente, para evitar faturamento duplicado"
    ],
    "explicacao": "Depois de gravar um distrato, o contrato não pode ser reutilizado. O valor original fica fixo e os reajustes aparecem em “Valor do Contrato”. Ao copiar um contrato, atualize manualmente o código do contrato e o do cliente.",
    "caminho": "Arquivos > Contratos",
    "fonte": "Cadastro de contrato · visto em 228 treinamentos"
  },
  {
    "id": "onvio-001",
    "modulo": "onvio",
    "nivel": 2,
    "pergunta": "No Messenger, a “restrição de mensagens” afeta quais perfis?",
    "certa": "Só o perfil Usuário; Gerente e Administrador continuam vendo tudo",
    "erradas": [
      "Todos os perfis, inclusive o Gerente e o Administrador da ferramenta",
      "Usuário e Gerente; apenas o Administrador continua vendo todas as mensagens",
      "Só o Administrador, que passa a ver apenas as suas próprias conversas"
    ],
    "explicacao": "Com a restrição habilitada, o Usuário só vê o que é seu (os atendimentos pendentes, ainda não iniciados, continuam visíveis a todos). O usuário precisa logar de novo para valer.",
    "caminho": "Messenger > Configurações > Restrição de Mensagens",
    "fonte": "Onvio: outros assuntos · visto em 824 treinamentos"
  },
  {
    "id": "onvio-002",
    "modulo": "onvio",
    "nivel": 2,
    "pergunta": "O cliente habilitou o Box-e hoje e pergunta se as notas dos meses anteriores aparecerão. O que responder?",
    "certa": "Não: o Box-e só armazena a partir da data de habilitação, e as notas podem levar 24 horas para aparecer",
    "erradas": [
      "Sim, o Box-e busca automaticamente os últimos 5 anos de notas na Receita e já mostra tudo na hora",
      "Sim, desde que o cliente reenvie os XMLs antigos por e-mail para o endereço do Box-e do escritório",
      "Só as notas de saída aparecem de forma retroativa, e as notas de entrada começam a partir de hoje"
    ],
    "explicacao": "A ordem de habilitação é: primeiro no Box, depois no Domínio, depois no Busca. O Box-e não retroage e demora cerca de 24 horas para as primeiras notas aparecerem.",
    "caminho": "Portal do Cliente > Box > Configuração",
    "fonte": "Onvio: outros assuntos · visto em 824 treinamentos"
  },
  {
    "id": "onvio-003",
    "modulo": "onvio",
    "nivel": 3,
    "pergunta": "Para não consumir as horas contratadas, com quanto tempo de antecedência deve ser cancelado um agendamento?",
    "certa": "48 horas",
    "erradas": [
      "2 horas",
      "12 horas",
      "7 dias"
    ],
    "explicacao": "O cancelamento deve ser feito com 48 horas de antecedência para não consumir as horas contratadas.",
    "caminho": "Três risquinhos > Suporte",
    "fonte": "Onvio: outros assuntos · visto em 824 treinamentos"
  },
  {
    "id": "onvio-004",
    "modulo": "onvio",
    "nivel": 2,
    "pergunta": "Na integração com o Conta Azul, o que o escritório precisa ter?",
    "certa": "O Conta Azul Contador, convidando os clientes",
    "erradas": [
      "Apenas o Conta Azul de cada cliente, sem nada no escritório",
      "O Box-e habilitado para todas as empresas",
      "Um certificado A3 instalado no servidor do Domínio"
    ],
    "explicacao": "O contador precisa ter o Conta Azul Contador e convidar os clientes. A chave da API só aparece depois de trocar o layout para Domínio no Conta Azul.",
    "caminho": "Controle > Parâmetros > Integração Conta Azul",
    "fonte": "Onvio: outros assuntos · visto em 824 treinamentos"
  },
  {
    "id": "onvio-005",
    "modulo": "onvio",
    "nivel": 2,
    "pergunta": "Qual é a diferença entre os perfis Usuário e Gerente no Messenger?",
    "certa": "O Usuário vê só seu atendimento e histórico; o Gerente vê em tempo real todos do mesmo departamento",
    "erradas": [
      "O Usuário vê todos os atendimentos do departamento e o Gerente enxerga somente os seus",
      "O Gerente configura o robô do Messenger; o Usuário não consegue ver nenhum atendimento",
      "Não há diferença: a visibilidade dos atendimentos depende só do departamento do funcionário"
    ],
    "explicacao": "O acesso é controlado em Configuração > Grupos de permissões > Messenger. Para configurar o robô é preciso ter “Habilitar clientes”, e a Configuração geral da ferramenta fica com o administrador.",
    "caminho": "Configuração > Grupos de permissões > Messenger",
    "fonte": "Usuários e permissões · visto em 856 treinamentos"
  },
  {
    "id": "onvio-006",
    "modulo": "onvio",
    "nivel": 2,
    "pergunta": "Quem deve constar no convite da Contabilidade Digital enviado ao cliente?",
    "certa": "Nome e CPF do responsável legal na Receita; e-mail e celular podem ser de outra pessoa",
    "erradas": [
      "Nome, CPF, e-mail e celular do financeiro, que é quem opera a conta bancária",
      "Nome e CPF do contador responsável, com o e-mail e o celular do responsável legal",
      "Apenas o CNPJ da empresa, pois o convite é feito por empresa e não por pessoa"
    ],
    "explicacao": "O convite é feito uma única vez por CNPJ e não pode ser editado, excluído ou refeito no Onvio; faça um por CNPJ, começando pela matriz. Avise o cliente antes, para ele não achar que é golpe, e aguarde de 5 a 30 minutos antes de orientar o acesso.",
    "caminho": "Onvio > três risquinhos > Suporte > Serviços Digitais > Para seus clientes",
    "fonte": "Envio de convite ao cliente · visto em 346 treinamentos"
  },
  {
    "id": "onvio-007",
    "modulo": "onvio",
    "nivel": 1,
    "pergunta": "Na publicação de documentos, qual a diferença entre a maleta e o clips?",
    "certa": "A maleta publica direto no portal; o clips anexa o documento a uma solicitação do cliente",
    "erradas": [
      "A maleta anexa à solicitação do cliente; o clips publica direto no portal do cliente",
      "As duas publicam direto no portal; a diferença é só o formato do arquivo enviado",
      "A maleta publica só para o escritório e o clips publica para o cliente e o escritório"
    ],
    "explicacao": "A marcação “Pasta Padrão” envia sempre para a mesma pasta, o que é ruim para guias mensais. A primeira sincronização demora de 20 a 40 minutos. Documentos externos precisam de vencimento manual; os gerados no Domínio levam o vencimento automático.",
    "caminho": "Relatórios > (gerar relatório) > ícone maleta",
    "fonte": "Publicação de documentos do sistema · visto em 444 treinamentos"
  },
  {
    "id": "onvio-008",
    "modulo": "onvio",
    "nivel": 2,
    "pergunta": "Ao responder uma solicitação de serviço do cliente, qual status o escritório deve usar?",
    "certa": "Respondido, deixando o cliente concluir; “Concluído” bloqueia a conversa",
    "erradas": [
      "Concluído, para o cliente receber a confirmação de que o assunto foi encerrado",
      "Em Análise, para o cliente poder responder enquanto o escritório confere o pedido",
      "Em Análise Interna, para o cliente acompanhar cada trâmite feito pelo escritório"
    ],
    "explicacao": "Em Análise: o cliente não pode responder. Em Análise Interna: o cliente não vê o trâmite. O usuário precisa estar vinculado ao departamento da solicitação, e ela pode levar até 10 minutos para chegar do portal ao sistema.",
    "caminho": "Ícone balão > Solicitações de Serviço",
    "fonte": "Configuração de solicitações de serviço · visto em 286 treinamentos"
  },
  {
    "id": "onvio-009",
    "modulo": "onvio",
    "nivel": 2,
    "pergunta": "Qual e-mail o empregado deve usar para se cadastrar no Portal do Empregado?",
    "certa": "O e-mail pessoal, pois o corporativo se perde na demissão e ele precisa do informe",
    "erradas": [
      "O corporativo, pois a empresa precisa validar o cadastro pelo e-mail dela",
      "Qualquer um, porque o acesso é sempre validado pelo CPF e pelo número da matrícula",
      "O do escritório contábil, que centraliza o acesso de todos os empregados da empresa"
    ],
    "explicacao": "A validação em duas etapas (e-mail e telefone) só ocorre no primeiro acesso. O empregado demitido mantém o acesso aos documentos já publicados, mas não recebe novos. O agente de comunicação vermelho impede a publicação e o envio ao eSocial.",
    "caminho": "Controle > Empresas > Módulos > guia Envio",
    "fonte": "Habilitação do Portal do Empregado · visto em 324 treinamentos"
  },
  {
    "id": "onvio-010",
    "modulo": "onvio",
    "nivel": 2,
    "pergunta": "Um funcionário saiu do escritório. O que fazer com o cadastro dele no Onvio?",
    "certa": "Nunca excluir: inativar, colocando um ponto no fim do e-mail antes para liberar o endereço",
    "erradas": [
      "Excluir o colaborador, pois o cadastro inativo continua consumindo uma licença",
      "Manter o cadastro ativo e apenas trocar a senha, para não perder o histórico de tarefas",
      "Inativar sem alterar o e-mail, que é liberado automaticamente depois de 30 dias"
    ],
    "explicacao": "O mesmo e-mail não pode ser usado em dois usuários. A quantidade de usuários cadastrados não conta para o limite de acessos simultâneos. O usuário do Onvio e o do sistema são dois cadastros separados.",
    "caminho": "Onvio.com.br > Configuração > Funcionários",
    "fonte": "Cadastro de usuários do escritório no Onvio · visto em 369 treinamentos"
  },
  {
    "id": "onvio-011",
    "modulo": "onvio",
    "nivel": 3,
    "pergunta": "Por que evitar o nível Proprietário ao cadastrar um usuário do cliente no Portal?",
    "certa": "Porque ele permite que o cliente exclua documentos do escritório",
    "erradas": [
      "Porque ele impede o cliente de baixar os documentos publicados pelo escritório",
      "Porque ele compartilha as senhas dos demais usuários da empresa com o proprietário",
      "Porque ele desativa a validação em duas etapas dos usuários da empresa do cliente"
    ],
    "explicacao": "O e-mail do usuário do cliente não pode estar vinculado a um usuário do escritório. Separe departamentos por usuário (ex.: evitar que a secretária veja a própria rescisão) e só habilite a manifestação de NF-e se o cliente emitir notas.",
    "caminho": "Portal do Cliente > Configurações > Usuários de Clientes",
    "fonte": "Cadastro de usuários de cliente no Portal · visto em 456 treinamentos"
  },
  {
    "id": "onvio-012",
    "modulo": "onvio",
    "nivel": 1,
    "pergunta": "É preciso instalar o plugin do Domínio Web em cada máquina?",
    "certa": "Sim, uma vez por máquina; depois ele não pede mais",
    "erradas": [
      "Não, o plugin é instalado só no servidor e as estações acessam por ele",
      "Sim, e precisa ser reinstalado a cada atualização do Domínio Web",
      "Não, o plugin só é necessário na primeira máquina cadastrada pelo escritório"
    ],
    "explicacao": "O primeiro acesso é mais demorado (cache). Marque “Sempre permitir” para evitar a tela de autorização. Se o plugin não baixar, exclua os plugins antigos da máquina e baixe de novo. Não salve nada no servidor: use uma pasta transitória.",
    "caminho": "dominioweb.com.br > Entrar",
    "fonte": "Primeiro acesso ao Domínio Web · visto em 342 treinamentos"
  },
  {
    "id": "onvio-013",
    "modulo": "onvio",
    "nivel": 3,
    "pergunta": "Ao publicar um documento externo (que não foi gerado no Domínio), o que o usuário precisa definir manualmente?",
    "certa": "O vencimento, pois nos documentos gerados no Domínio ele é automático",
    "erradas": [
      "A pasta de destino, pois nos documentos gerados no Domínio ela é automática",
      "O nome do arquivo, pois documentos externos não aceitam nomes com espaços",
      "O tipo do imposto, pois documentos externos só são aceitos com a guia vinculada"
    ],
    "explicacao": "Ao publicar pelo ícone nuvem, marque “Concluir atividade” para a tarefa fechar automaticamente. Se o documento não aparecer no portal, aguarde alguns minutos: ele aparece primeiro na página inicial (últimos documentos) antes da pasta.",
    "caminho": "Onvio Gestão > Documentos > Documentos do Cliente > Upload",
    "fonte": "Publicação de documentos do sistema · visto em 444 treinamentos"
  },
  {
    "id": "onvio-014",
    "modulo": "onvio",
    "nivel": 2,
    "pergunta": "O que significa a maleta vermelha ou cinza no Domínio, e o que verificar primeiro?",
    "certa": "Falha de comunicação com o Onvio; verifique o ícone Onvio (play) e a senha do usuário gerente",
    "erradas": [
      "O documento foi rejeitado pelo cliente; verifique a caixa de entrada do portal",
      "O período contábil está fechado; reabra o período antes de tentar publicar novamente",
      "A pasta de destino está cheia; exclua documentos antigos do portal antes de publicar"
    ],
    "explicacao": "Se o ícone Onvio mostra play, está desconectado: clique para conectar. Maleta cinza indica usuário sem “Utiliza Onvio” e “Portal do Cliente” em Controle > Permissões. Para reenviar, use Estado de Integração > Reenviar.",
    "caminho": "Controle > Permissões > Usuários",
    "fonte": "Publicação de documentos do sistema · visto em 444 treinamentos"
  },
  {
    "id": "busca-001",
    "modulo": "busca",
    "nivel": 1,
    "pergunta": "Posso manter Busca NF-e e SIEG ativos ao mesmo tempo para o mesmo CNPJ?",
    "certa": "Não: dois buscadores no mesmo CNPJ geram conflito na Sefaz e as notas podem não importar de nenhum",
    "erradas": [
      "Sim, o sistema cruza as notas pela chave de acesso e nunca duplica nenhum documento fiscal",
      "Sim, desde que um dos buscadores capture somente entradas e o outro capture somente saídas",
      "Sim, desde que o certificado digital usado seja exatamente o mesmo nos dois buscadores"
    ],
    "explicacao": "Só um buscador ativo por CNPJ (Busca, SIEG, Gtax ou Cieg). Ao migrar, desative a empresa no SIEG antes de ativá-la no Busca.",
    "caminho": "Docs Fiscais / Busca NF-e > Configurações",
    "fonte": "Busca NF-e e Box-e: outros assuntos · visto em 680 treinamentos"
  },
  {
    "id": "busca-002",
    "modulo": "busca",
    "nivel": 2,
    "pergunta": "Até quanto tempo para trás o Busca NF-e consegue trazer notas?",
    "certa": "Somente os últimos 90 dias",
    "erradas": [
      "Os últimos 5 anos",
      "O ano fiscal inteiro",
      "Sem limite, desde que o certificado seja A1"
    ],
    "explicacao": "O Busca NF-e traz só os últimos 90 dias. SIEG e Gtax buscam histórico maior. Para notas mais antigas, importe XML manualmente.",
    "caminho": "Busca NF-e (aplicativo externo)",
    "fonte": "Busca NF-e e Box-e: outros assuntos · visto em 680 treinamentos"
  },
  {
    "id": "busca-003",
    "modulo": "busca",
    "nivel": 2,
    "pergunta": "O Busca NF-e traz as entradas perfeitamente, mas as notas de saída do cliente não baixam. Qual é a causa provável?",
    "certa": "O cliente não autorizou o CNPJ do escritório como terceiro no sistema emissor (ERP)",
    "erradas": [
      "O certificado do escritório é A3, e esse tipo de certificado só baixa notas de entrada",
      "O Busca NF-e só baixa notas de entrada e nunca consegue baixar notas de saída do cliente",
      "A empresa do cliente não está com o Box-e habilitado no Portal do Cliente do escritório"
    ],
    "explicacao": "Para as saídas, o cliente deve autorizar o CNPJ do escritório como terceiro no ERP emissor (tag no XML). Sem isso o Busca não baixa. Gtax não exige essa autorização.",
    "caminho": "Busca > Configuração > aba Certificado",
    "fonte": "Busca NF-e e Box-e: outros assuntos · visto em 680 treinamentos"
  },
  {
    "id": "busca-004",
    "modulo": "busca",
    "nivel": 3,
    "pergunta": "O Busca NF-e mostra “Certificado não instalado ou expirado” e o cliente usa certificado em token Head Trust. O que fazer?",
    "certa": "Instalar o certificado fisicamente na máquina, pois o Head Trust não funciona no Busca NF-e",
    "erradas": [
      "Reinstalar o plugin TR Computer, fechar tudo e reabrir o Domínio Web para carregar o token",
      "Aguardar 24 horas para o token sincronizar com a Sefaz e tentar buscar as notas de novo",
      "Trocar o tipo de certificado para “Contador” em Parâmetros > eSocial e gravar novamente"
    ],
    "explicacao": "O certificado A3 precisa estar instalado fisicamente na máquina onde roda o Busca NF-e. Head Trust não é compatível com a ferramenta.",
    "caminho": "Busca NF-e > Configurações",
    "fonte": "Busca NF-e e Box-e: outros assuntos · visto em 680 treinamentos"
  },
  {
    "id": "busca-005",
    "modulo": "busca",
    "nivel": 2,
    "pergunta": "O Box-e faz a mesma coisa que o Busca NF-e?",
    "certa": "Não: o Busca importa notas da Receita; o Box-e armazena as notas que o cliente envia (guarda por 5 anos)",
    "erradas": [
      "Sim, são o mesmo serviço da Domínio, apenas com nomes diferentes dependendo do módulo em uso",
      "Sim, mas o Box-e só serve para armazenar e importar as notas fiscais de serviço (NFS-e)",
      "Não: o Box-e importa as notas direto da Receita e o Busca guarda os arquivos enviados pelo cliente"
    ],
    "explicacao": "São ferramentas diferentes: o Busca busca documentos na Receita; o Box-e recebe e armazena arquivos enviados pelo cliente. A base também registra que o Box-e está em descontinuação.",
    "caminho": "Portal do Cliente > Box",
    "fonte": "Busca NF-e e Box-e: outros assuntos · visto em 680 treinamentos"
  },
  {
    "id": "busca-006",
    "modulo": "busca",
    "nivel": 3,
    "pergunta": "Em qual formato de compactação devem estar as notas baixadas do Gtax para o Domínio reconhecer?",
    "certa": ".zip",
    "erradas": [
      ".rar",
      ".7z",
      "Qualquer formato: o Domínio descompacta sozinho"
    ],
    "explicacao": "Compacte em .zip. O Domínio não reconhece arquivos .rar.",
    "caminho": "Utilitários > Importação",
    "fonte": "Busca NF-e e Box-e: outros assuntos · visto em 680 treinamentos"
  },
  {
    "id": "busca-007",
    "modulo": "busca",
    "nivel": 3,
    "pergunta": "Quando exportar o XML no Busca NF-e, para não perder o arquivo?",
    "certa": "Antes de importar, pois depois de importado o Busca apaga e não permite exportar",
    "erradas": [
      "Depois de importar, quando o Busca já organizou os arquivos por mês e tipo",
      "Em qualquer momento, pois o Busca guarda os XMLs por cinco anos como um cofre",
      "Somente no dia seguinte à importação, quando a Receita confirma a escrituração"
    ],
    "explicacao": "O Busca não armazena XML: não é um cofre. Para armazenar, contrate o Box-e. Para exportar: Busca NF-e > período e tipo > três pontinhos > pasta de destino > Exportar. Compactar em ZIP acelera.",
    "caminho": "Busca NF-e > período/tipo > três pontinhos > Exportar",
    "fonte": "Importação de notas pelo Busca NF-e · visto em 431 treinamentos"
  },
  {
    "id": "busca-008",
    "modulo": "busca",
    "nivel": 2,
    "pergunta": "Em quantas máquinas o Busca NF-e deve ser instalado para a mesma empresa?",
    "certa": "Em uma só; duas máquinas causam conflito e a Receita pode bloquear a empresa",
    "erradas": [
      "Em duas, uma principal e outra de reserva, para o caso de a primeira ficar desligada",
      "Em todas as estações do escritório, para cada uma buscar as notas do próprio cliente",
      "Em duas, desde que uma busque entradas e a outra busque apenas as saídas"
    ],
    "explicacao": "Pode centralizar em uma máquina (servidor ou estação que fica ligada) e a configuração no sistema vale para todos. O certificado deve estar nessa máquina. Ao trocar de máquina, desative primeiro na antiga.",
    "caminho": "download.dominiosistemas.com.br > Instalação > Busca NFe Cliente",
    "fonte": "Instalação do Busca NF-e · visto em 246 treinamentos"
  },
  {
    "id": "busca-009",
    "modulo": "busca",
    "nivel": 2,
    "pergunta": "Antes de incluir ou alterar empresas no aplicativo Busca NF-e, o que fazer?",
    "certa": "Parar o serviço, pois com ele rodando os menus Geral e Configurações ficam desabilitados",
    "erradas": [
      "Fechar o Domínio em todas as estações, pois o Busca só edita empresas com o sistema fechado",
      "Desinstalar o aplicativo e instalar a versão mais nova, que libera a inclusão de empresas",
      "Nada: as empresas podem ser incluídas com o Busca rodando, e ele atualiza sozinho"
    ],
    "explicacao": "Muitas reclamações de “Busca não funciona” são o Busca parado: esqueceram de iniciar depois de incluir a empresa. Ele fica em segundo plano, na bandeja do Windows, e consulta automaticamente a cada hora.",
    "caminho": "Aplicativo Busca NF-e > Inicialização > Parar",
    "fonte": "Busca NF-e não funciona · visto em 295 treinamentos"
  },
  {
    "id": "busca-010",
    "modulo": "busca",
    "nivel": 3,
    "pergunta": "Ao agendar a importação do Busca NF-e em rotinas automáticas, como devem ser criadas as rotinas?",
    "certa": "Uma rotina por tipo de nota (entrada, saída, CT-e, NFS-e...), diferente do SIEG/API",
    "erradas": [
      "Uma única rotina com todos os tipos marcados, como no SIEG/API",
      "Uma rotina por empresa, com todos os tipos de nota marcados dentro dela",
      "Uma rotina só para entradas, porque o Busca não importa os outros tipos de nota"
    ],
    "explicacao": "Ao trocar do SIEG para o Busca, desmarque “API” e marque “Busca NFe” nas rotinas existentes. Rotinas de canceladas devem rodar depois das normais. O horário configurado é o único em que ele busca, e o computador precisa estar ligado.",
    "caminho": "Arquivos > Rotinas Automáticas",
    "fonte": "Criação de rotina automática (Busca NF-e) · visto em 367 treinamentos"
  },
  {
    "id": "busca-011",
    "modulo": "busca",
    "nivel": 2,
    "pergunta": "Qual certificado o Busca NF-e usa para baixar as notas de ENTRADA de uma empresa?",
    "certa": "O certificado da própria empresa; o do escritório só vale como terceiro nas saídas",
    "erradas": [
      "O certificado do escritório, em qualquer caso, por procuração eletrônica",
      "Nenhum: as entradas são baixadas pelo CNPJ da empresa sem certificado digital",
      "O certificado do contador responsável (e-CPF), cadastrado em Controle > Contadores"
    ],
    "explicacao": "O Busca não funciona com procuração eletrônica. O certificado deve estar na máquina onde o Busca roda. Para saída de NF-e/CT-e, o cliente deve autorizar o CNPJ do escritório (ou CPF do contador) no emissor. Para NFS-e, só vale o certificado da empresa.",
    "caminho": "Aplicativo Busca NF-e > aba Configurações",
    "fonte": "Configuração de empresa no Busca NF-e · visto em 304 treinamentos"
  },
  {
    "id": "busca-012",
    "modulo": "busca",
    "nivel": 1,
    "pergunta": "Existe um certificado vencido na máquina e o Busca NF-e não grava a configuração. O que fazer?",
    "certa": "Excluir os certificados vencidos no Gerenciador de Certificados antes de configurar",
    "erradas": [
      "Renovar o certificado vencido e importar o novo por cima do antigo, mantendo os dois",
      "Desligar o antivírus para o Busca aceitar o certificado vencido durante a configuração",
      "Trocar o tipo do certificado para A3, que não depende da data de validade"
    ],
    "explicacao": "Se o Windows tiver certificados duplicados, ele valida o mais antigo, então remova os vencidos. O Busca não avisa o vencimento (há pedido de melhoria): a bolinha vermelha na empresa indica certificado expirado.",
    "caminho": "Gerenciador de Certificados > Pessoal > Certificados",
    "fonte": "Configuração inicial do Busca NF-e · visto em 294 treinamentos"
  },
  {
    "id": "busca-013",
    "modulo": "busca",
    "nivel": 2,
    "pergunta": "O agente de comunicação está vermelho. O que isso afeta no Busca NF-e e nas importações?",
    "certa": "Não impede a importação manual, mas bloqueia a comunicação automática com SIEG/Gtax",
    "erradas": [
      "Impede qualquer importação, inclusive a manual feita em Importação Padrão",
      "Só afeta o Messenger, e não tem nenhum efeito sobre eSocial ou importações",
      "Apenas atrasa a importação em até uma hora, até o agente reiniciar sozinho"
    ],
    "explicacao": "Bolinha vermelha também faz perder eSocial e Contabilidade Digital. Ative o agente apenas no servidor; nas estações, desinstale ou deixe a inicialização manual. A causa mais comum é a senha do Onvio alterada e não atualizada no sistema.",
    "caminho": "Controle > Permissões > Usuários (usuário gerente)",
    "fonte": "Ativação do agente de comunicação · visto em 417 treinamentos"
  },
  {
    "id": "busca-014",
    "modulo": "busca",
    "nivel": 2,
    "pergunta": "O cliente usa certificado A3 com o Busca NF-e. O que muda na rotina do escritório?",
    "certa": "Exige intervenção manual semanal: conectar o token, aguardar a busca e remover",
    "erradas": [
      "Nada: o A3 funciona com o Busca igual ao A1, sem nenhuma intervenção",
      "O A3 não funciona com o Busca em nenhuma hipótese, e o cliente precisa trocar",
      "O A3 exige instalar o Busca em cada estação do escritório que tenha uma porta USB"
    ],
    "explicacao": "O A1 permite automação total. Com A3, o certificado precisa estar plugado e instalado fisicamente na máquina do Busca. O Busca exige A1 de CNPJ da empresa (e-CPF dá “CNPJ informado não pertence”).",
    "caminho": "Aplicativo Busca NF-e > aba Configurações",
    "fonte": "Configuração de certificado digital (Busca NF-e) · visto em 244 treinamentos"
  }
];
