// Arquivo gerado automaticamente por perguntas/converter.py a partir de perguntas/perguntas.xlsx.
// Não edite à mão: altere a planilha e rode ATUALIZAR_PERGUNTAS.bat.
window.QUIZ_META = {
  "versao": "2026.11.12-9b4ed9",
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
    "id": "geral-019",
    "modulo": "geral",
    "nivel": 2,
    "pergunta": "Em quantos lugares o certificado digital precisa estar cadastrado para o Domínio funcionar nas importações e nos envios?",
    "certa": "Em dois: no Gerenciador de Certificados e no cadastro da empresa ou do contador",
    "erradas": [
      "Em um só: no cadastro da empresa, que serve tanto para importar quanto para enviar",
      "Em três: no Gerenciador, no cadastro da empresa e na aba Informativos dos parâmetros",
      "Em nenhum: o certificado fica guardado apenas no navegador de cada usuário"
    ],
    "explicacao": "O Gerenciador de Certificados atende as importações externas; o cadastro da empresa (aba Autenticação) ou do contador atende os envios internos. Sem os dois, uma das rotinas falha.",
    "caminho": "Lista de Programas > Gerenciador de Certificados | Controle > Empresas > aba Autenticação",
    "fonte": "Cadastro de certificado digital · visto em 1260 treinamentos"
  },
  {
    "id": "geral-020",
    "modulo": "geral",
    "nivel": 2,
    "pergunta": "O certificado incluído no Gerenciador de Certificados fica vinculado a quê?",
    "certa": "Ao e-mail do usuário, e não à máquina; se todos usam o mesmo e-mail, basta incluir uma vez",
    "erradas": [
      "À máquina em que foi instalado, e cada computador precisa incluir o arquivo de novo",
      "Ao CNPJ da empresa, valendo para todos os usuários e computadores do escritório",
      "Ao código do contador, cadastrado em Controle > Contadores, e a nenhum outro lugar"
    ],
    "explicacao": "O vínculo é com o e-mail do usuário. Cada usuário com e-mail próprio precisa incluir o certificado no Gerenciador; quem compartilha o mesmo e-mail inclui uma única vez.",
    "caminho": "Lista de Programas > Gerenciador de Certificados",
    "fonte": "Cadastro de certificado digital · visto em 1260 treinamentos"
  },
  {
    "id": "geral-021",
    "modulo": "geral",
    "nivel": 2,
    "pergunta": "Na aba Autenticação do cadastro da empresa, qual certificado deve ser anexado?",
    "certa": "O da empresa ou do responsável legal, nunca o do contador",
    "erradas": [
      "O do contador do escritório, para todos os envios saírem com a mesma assinatura",
      "O de qualquer usuário que esteja com o sistema aberto no momento da gravação",
      "Nenhum: essa aba serve apenas para guardar senhas de portais e observações"
    ],
    "explicacao": "Para os envios com certificado próprio, a aba Autenticação recebe o certificado da empresa ou do responsável legal. O certificado do contador fica no cadastro do contador.",
    "caminho": "Controle > Empresas > aba Autenticação",
    "fonte": "Validação de dados cadastrais · visto em 165 treinamentos"
  },
  {
    "id": "geral-022",
    "modulo": "geral",
    "nivel": 1,
    "pergunta": "Quando importar o perfil de empresa no cadastro de uma empresa nova?",
    "certa": "Antes de gravar parâmetros manuais ou lançamentos, pois importar por cima causa bagunça",
    "erradas": [
      "Depois de lançar as primeiras notas, para o perfil se ajustar ao movimento real da empresa",
      "Somente no fim da implantação, depois de conferir todos os saldos de abertura do cliente",
      "Apenas após o primeiro fechamento mensal da empresa, quando o movimento já estiver estável"
    ],
    "explicacao": "A importação de perfil traz parâmetros e plano de contas e sobrescreve o que existir. Por isso deve ser a primeira coisa, antes de qualquer ajuste manual ou lançamento.",
    "caminho": "Controle > Empresas > botão Importação",
    "fonte": "Importação de perfil de empresa · visto em 888 treinamentos"
  },
  {
    "id": "geral-023",
    "modulo": "geral",
    "nivel": 2,
    "pergunta": "Qual a diferença entre os perfis Analítico e Sintético na importação de perfil?",
    "certa": "O Analítico cria conta para cada cliente e fornecedor; o Sintético usa uma conta única “diversos”",
    "erradas": [
      "O Analítico traz somente o plano de contas; o Sintético traz também os parâmetros fiscais da empresa",
      "O Analítico serve apenas para o Simples Nacional; o Sintético serve só para o Lucro Real e o Presumido",
      "O Analítico cria conta apenas para fornecedores; o Sintético cria conta apenas para os clientes"
    ],
    "explicacao": "No Analítico cada cliente e fornecedor ganha sua conta contábil. No Sintético tudo cai numa conta única. O Misto é analítico para fornecedor e sintético para cliente.",
    "caminho": "Controle > Empresas > Importação > Conforme cadastro de perfis de empresas",
    "fonte": "Importação de perfil de empresa · visto em 888 treinamentos"
  },
  {
    "id": "geral-024",
    "modulo": "geral",
    "nivel": 3,
    "pergunta": "O que muda ao importar o perfil de uma filial?",
    "certa": "Não traz plano de contas, pois a filial usa o da matriz; não misturar perfil de matriz e de filial",
    "erradas": [
      "Traz um plano de contas próprio, totalmente separado do plano da matriz, para uso exclusivo da filial",
      "Traz uma cópia do plano da matriz, que depois pode ser editada só dentro da filial, sem refletir na matriz",
      "Funciona igual ao da matriz, e o recomendado é usar sempre o mesmo perfil nas duas empresas"
    ],
    "explicacao": "A filial usa o plano de contas da matriz, então o perfil de filial não o traz. Misturar perfil de matriz em filial (ou o contrário) gera erro; se acontecer, é preciso excluir o dado importado.",
    "caminho": "Controle > Empresas > botão Importação",
    "fonte": "Importação de perfil de empresa · visto em 888 treinamentos"
  },
  {
    "id": "geral-025",
    "modulo": "geral",
    "nivel": 2,
    "pergunta": "Que permissão o usuário precisa ter para a importação de perfil trazer tudo?",
    "certa": "Permissão em Fiscal e em Contábil; sem as duas, a importação traz só parte",
    "erradas": [
      "Apenas permissão em Folha, porque o perfil nasce do cadastro de empregados",
      "Ser o usuário externo, criado pelo sistema exclusivamente para importações",
      "Ter o certificado do escritório cadastrado no Gerenciador de Certificados"
    ],
    "explicacao": "O perfil alimenta parâmetros fiscais e plano de contas. Com permissão só em um dos módulos, a importação fica incompleta.",
    "caminho": "Controle > Empresas > botão Importação",
    "fonte": "Importação de perfil de empresa · visto em 888 treinamentos"
  },
  {
    "id": "geral-026",
    "modulo": "geral",
    "nivel": 2,
    "pergunta": "Para que serve o Período de Trabalho em Controle?",
    "certa": "Limitar as datas aceitas para lançamento, evitando lançar em anos como 2015 ou 2030",
    "erradas": [
      "Definir a competência ativa da empresa, como a ativação de competência do Contmatic",
      "Definir o horário do dia em que cada usuário pode entrar no sistema",
      "Informar o primeiro mês da empresa no Domínio, para o cálculo do Simples Nacional"
    ],
    "explicacao": "Sem Período de Trabalho, o sistema aceita lançamento em qualquer data. Com ele, você escolhe se datas fora do período são livres, só geram aviso ou ficam bloqueadas.",
    "caminho": "Controle > Período de Trabalho",
    "fonte": "Outros assuntos — Implantação e Configuração Geral · visto em 876 treinamentos"
  },
  {
    "id": "geral-027",
    "modulo": "geral",
    "nivel": 1,
    "pergunta": "O Domínio exige ativar a competência ao entrar na empresa, como o Contmatic?",
    "certa": "Não; a data de referência é só informativa e a competência é informada ao calcular ou apurar",
    "erradas": [
      "Sim; sem competência ativa, nenhum lançamento é aceito e o sistema bloqueia a empresa",
      "Sim, mas apenas nos módulos de Folha e de Escrita Fiscal, que dependem da competência",
      "Não, mas é preciso ativar o Período de Trabalho a cada nova competência trabalhada"
    ],
    "explicacao": "Diferente de outros sistemas, o Domínio não obriga a ativar competência. A data de referência exibida é informativa e se atualiza depois de processar.",
    "caminho": "F8 (troca de empresa)",
    "fonte": "Ativação e habilitação de empresa · visto em 168 treinamentos"
  },
  {
    "id": "geral-028",
    "modulo": "geral",
    "nivel": 2,
    "pergunta": "Como restringir o acesso de um usuário que está no grupo Administradores?",
    "certa": "Retirando o usuário desse grupo, pois o Administrador tem acesso total sempre",
    "erradas": [
      "Desmarcando as permissões individuais na aba Geral do cadastro do usuário",
      "Marcando “Controle de acesso por empresa” na aba Opções do usuário",
      "Inativando o usuário gerente da empresa, que concentra as permissões"
    ],
    "explicacao": "O grupo Administradores libera tudo, independentemente das outras configurações. Para restringir, primeiro é preciso tirar o usuário desse grupo.",
    "caminho": "Controle > Permissões > Usuários",
    "fonte": "Configuração de permissões de usuário · visto em 856 treinamentos"
  },
  {
    "id": "geral-029",
    "modulo": "geral",
    "nivel": 1,
    "pergunta": "Para quais tarefas o usuário gerente é necessário?",
    "certa": "Criar usuários, excluir relatórios, importar tabelas e fazer análises complexas",
    "erradas": [
      "Apenas para lançar notas fiscais de entrada e de saída no dia a dia",
      "Somente para calcular a folha e enviar eventos ao eSocial",
      "Para o trabalho de rotina, já que cada pessoa deve usar o gerente para ter acesso total"
    ],
    "explicacao": "O gerente serve para configurações. No dia a dia, cada pessoa deve ter o próprio login, o que garante rastreabilidade das ações.",
    "caminho": "Controle > Permissões > Usuários",
    "fonte": "Cadastro de usuários do sistema · visto em 667 treinamentos"
  },
  {
    "id": "geral-030",
    "modulo": "geral",
    "nivel": 1,
    "pergunta": "O que acontece com o nome de usuário depois que o cadastro é gravado?",
    "certa": "Não pode ser alterado, pois fica vinculado aos logs de auditoria; só é possível inativar",
    "erradas": [
      "Pode ser alterado pelo gerente a qualquer momento em Controle > Usuários",
      "Pode ser alterado, mas apenas se o usuário nunca tiver feito login no sistema",
      "Pode ser alterado, e o histórico de auditoria passa a mostrar o novo nome"
    ],
    "explicacao": "O login é amarrado ao histórico de auditoria. Por isso escolha com cuidado ao criar; se a pessoa sair, o caminho é inativar o usuário.",
    "caminho": "Controle > Permissões > Usuários",
    "fonte": "Cadastro de usuários do sistema · visto em 667 treinamentos"
  },
  {
    "id": "geral-031",
    "modulo": "geral",
    "nivel": 2,
    "pergunta": "Qual a diferença entre a senha do Domínio e a senha do Onvio?",
    "certa": "A do Domínio é simples (letras e números); a do Onvio exige maiúscula, minúscula, número e especial",
    "erradas": [
      "As duas seguem a mesma regra: de 8 a 20 caracteres, com letra maiúscula e símbolo obrigatórios",
      "A do Domínio é a complexa; a do Onvio aceita qualquer sequência numérica de 4 dígitos ou mais",
      "São sempre iguais, e a troca de uma altera a outra automaticamente em todos os computadores"
    ],
    "explicacao": "A senha do Onvio tem regra complexa (8 a 20 caracteres). A senha interna do Domínio é mais flexível. Por isso, ao trocar a do Onvio, é preciso atualizá-la também onde o sistema a usa.",
    "caminho": "Controle > Permissões > Usuários",
    "fonte": "Cadastro de usuários do sistema · visto em 667 treinamentos"
  },
  {
    "id": "geral-032",
    "modulo": "geral",
    "nivel": 1,
    "pergunta": "Quem pode importar um relatório personalizado (arquivo BGR) no Domínio?",
    "certa": "Apenas o usuário gerente",
    "erradas": [
      "Qualquer usuário que tenha permissão de consulta no módulo de Relatórios",
      "Somente o suporte da Domínio, por meio de acesso remoto à máquina",
      "O usuário que criou o relatório original no outro sistema ou na outra base"
    ],
    "explicacao": "A importação do BGR é restrita ao gerente. O arquivo só abre dentro do sistema e, na importação, vale conferir a classificação para saber onde o relatório vai aparecer.",
    "caminho": "Relatórios > Gerenciador de Relatórios > Novo > Importar",
    "fonte": "Geração de relatórios · visto em 737 treinamentos"
  },
  {
    "id": "geral-033",
    "modulo": "geral",
    "nivel": 2,
    "pergunta": "Onde salvar relatórios e arquivos exportados para não perdê-los?",
    "certa": "Na unidade M (a sua máquina), e nunca na C, pois o servidor faz limpeza periódica",
    "erradas": [
      "Na unidade C (servidor), que tem backup e é compartilhada por todos os usuários",
      "Na área de trabalho do servidor, que só é limpa quando ele é reiniciado",
      "Em qualquer unidade, pois o sistema guarda uma cópia de tudo que é exportado"
    ],
    "explicacao": "No ambiente remoto, a unidade C é do servidor e passa por limpeza periódica. Salve na M (a máquina do usuário) para não perder o arquivo.",
    "caminho": "Relatórios > Gerenciador de Relatórios",
    "fonte": "Geração de relatórios · visto em 737 treinamentos"
  },
  {
    "id": "geral-034",
    "modulo": "geral",
    "nivel": 1,
    "pergunta": "Os relatórios personalizados migram automaticamente de uma base para outra?",
    "certa": "Não; é preciso exportar e importar manualmente",
    "erradas": [
      "Sim, acompanham a empresa quando ela é importada para a nova base",
      "Sim, mas apenas os relatórios que foram criados pelo usuário gerente",
      "Não, e só podem ser recriados do zero pelo suporte da Domínio"
    ],
    "explicacao": "Relatórios personalizados não vão sozinhos para outra base. O caminho é exportar o BGR na origem e importar no destino.",
    "caminho": "Relatórios > Gerenciador de Relatórios",
    "fonte": "Geração de relatórios · visto em 737 treinamentos"
  },
  {
    "id": "geral-035",
    "modulo": "geral",
    "nivel": 2,
    "pergunta": "Como organizar as rotinas automáticas para evitar travamentos?",
    "certa": "Criar rotinas separadas por tipo (importação, apuração, guias), com intervalo de 30 min a 1 h",
    "erradas": [
      "Reunir tudo em uma única rotina noturna, para o sistema executar tudo em sequência sem parar",
      "Agendar todas para o mesmo horário, para o sistema processar em paralelo e terminar antes",
      "Criar uma rotina por empresa e agendar todas para a madrugada do dia 1º de cada mês"
    ],
    "explicacao": "Misturar tudo numa rotina só aumenta o risco de travar. Separar por tipo e dar um intervalo entre elas deixa a execução mais estável.",
    "caminho": "Arquivo > Rotinas Automáticas | Movimentos > Rotinas Automáticas",
    "fonte": "Criação de rotina automática · visto em 671 treinamentos"
  },
  {
    "id": "geral-036",
    "modulo": "geral",
    "nivel": 3,
    "pergunta": "Qual agendamento é recomendado para empresas com volume alto, de 5 a 15 mil notas?",
    "certa": "Semanal ou quinzenal, e não mensal",
    "erradas": [
      "Mensal, sempre no último dia útil do mês",
      "A cada hora, para a importação nunca acumular",
      "Apenas manual, pois rotinas automáticas não suportam esse volume"
    ],
    "explicacao": "Com muitas notas, a importação mensal fica pesada. Dividir em execuções semanais ou quinzenais reduz o tempo de cada rodada.",
    "caminho": "Movimentos > Rotinas Automáticas",
    "fonte": "Criação de rotina automática · visto em 671 treinamentos"
  },
  {
    "id": "geral-037",
    "modulo": "geral",
    "nivel": 2,
    "pergunta": "Numa rotina automática, o que significa a competência “Anterior à execução”?",
    "certa": "Importa o mês anterior ao da data em que a rotina roda",
    "erradas": [
      "Importa sempre o mês da data inicial configurada, que é fixo",
      "Importa os 12 meses anteriores de uma só vez, em toda execução",
      "Importa somente as notas que ainda estão sem lançamento no mês corrente"
    ],
    "explicacao": "Com “Anterior à execução”, uma rotina que roda em dezembro trabalha a competência de novembro. A outra opção usa a competência do próprio dia da execução.",
    "caminho": "Movimentos > Rotinas Automáticas",
    "fonte": "Criação de rotina automática · visto em 671 treinamentos"
  },
  {
    "id": "geral-038",
    "modulo": "geral",
    "nivel": 2,
    "pergunta": "Como liberar a integração de um ERP do cliente com o Domínio pela API genérica?",
    "certa": "No envio.com.br, aba API: localizar o CNPJ, clicar em Gerar e passar a chave ao suporte do ERP",
    "erradas": [
      "No Domínio, em Controle > Parâmetros, digitando o CNPJ e o endereço do ERP do cliente",
      "Pedindo ao ERP o certificado digital do escritório para importar as notas",
      "Instalando o aplicativo Busca NF-e na máquina do cliente e informando o ERP"
    ],
    "explicacao": "A API genérica (quase 400 sistemas homologados, sem custo) usa uma chave gerada no envio.com.br com o login do escritório. A chave é entregue ao suporte do ERP.",
    "caminho": "envio.com.br > aba API",
    "fonte": "Integração com sistemas externos · visto em 520 treinamentos"
  },
  {
    "id": "geral-039",
    "modulo": "geral",
    "nivel": 3,
    "pergunta": "Que certificado a API Integra Contador (Receita) aceita?",
    "certa": "Apenas certificado de CNPJ (não CPF); as empresas precisam dar procuração ao CNPJ do escritório",
    "erradas": [
      "Somente o certificado CPF do contador responsável, cadastrado no Gerenciador de Certificados",
      "Tanto certificado A1 quanto de CPF, desde que o contador seja o titular do certificado",
      "Qualquer certificado, desde que esteja cadastrado no Gerenciador e dentro da validade"
    ],
    "explicacao": "A API Integra Contador só funciona com certificado de CNPJ. Para consultar a situação das empresas, cada uma deve ter dado procuração ao CNPJ do escritório.",
    "caminho": "Controle > Contadores > aba API Integra Contador",
    "fonte": "Integração com sistemas externos · visto em 520 treinamentos"
  },
  {
    "id": "geral-040",
    "modulo": "geral",
    "nivel": 1,
    "pergunta": "A bolinha do agente de comunicação está vermelha. Qual a causa mais comum?",
    "certa": "Senha do gerente no Onvio desatualizada em Controle > Usuários",
    "erradas": [
      "Falta de espaço em disco no servidor onde fica o banco de dados",
      "Certificado digital de uma das empresas do escritório vencido",
      "Módulo de Patrimônio aberto ao mesmo tempo em outro computador"
    ],
    "explicacao": "O agente depende do e-mail e da senha do Onvio gravados no usuário gerente. Se a senha foi trocada no Onvio e não no sistema, a bolinha fica vermelha.",
    "caminho": "Controle > Permissões > Usuários",
    "fonte": "Configuração do Agente de Comunicação · visto em 155 treinamentos"
  },
  {
    "id": "geral-041",
    "modulo": "geral",
    "nivel": 2,
    "pergunta": "O que deixa de funcionar com o agente de comunicação vermelho?",
    "certa": "Eventos do eSocial, guias da escrita, Contabilidade Digital e portais do cliente e do empregado",
    "erradas": [
      "Apenas a impressão de relatórios e a exportação para o Excel e para o PDF do sistema",
      "Somente o cálculo da folha de pagamento e o fechamento da competência, que dependem do agente",
      "Nada importante: o agente serve apenas para mostrar o status das licenças e dos módulos"
    ],
    "explicacao": "O agente é a ponte com os serviços online. Vermelho, ele suspende o envio de eventos, guias e a comunicação com os portais. A cor aparece para todos, mas só o gerente corrige.",
    "caminho": "Bolinha no canto inferior direito da tela",
    "fonte": "Configuração do Agente de Comunicação · visto em 155 treinamentos"
  },
  {
    "id": "geral-042",
    "modulo": "geral",
    "nivel": 2,
    "pergunta": "Qual o procedimento para corrigir o agente de comunicação vermelho?",
    "certa": "No usuário gerente, redigitar a senha do Onvio, gravar e dar o play no ícone do Onvio",
    "erradas": [
      "Reinstalar o sistema Domínio na estação, pois o agente é instalado junto",
      "Reiniciar o servidor do banco de dados e aguardar a sincronização automática",
      "Excluir o usuário gerente e criar outro com um e-mail diferente do Onvio"
    ],
    "explicacao": "Abra o usuário gerente, apague e redigite a senha do Onvio, grave e clique no play ao lado do ícone Onvio. Em 1 a 2 minutos a bolinha deve ficar verde.",
    "caminho": "Controle > Permissões > Usuários",
    "fonte": "Configuração do Agente de Comunicação · visto em 155 treinamentos"
  },
  {
    "id": "geral-043",
    "modulo": "geral",
    "nivel": 2,
    "pergunta": "Qual a desvantagem de acessar a Central de Soluções por dentro do Domínio Web (nuvem)?",
    "certa": "É mais lento para baixar arquivos; o melhor é acessar direto pelo navegador",
    "erradas": [
      "Não permite pesquisar por palavra-chave, apenas navegar pelos temas",
      "Exige uma senha diferente da usada para entrar no sistema",
      "Não abre vídeos nem artigos, mostrando só o chat de suporte"
    ],
    "explicacao": "Pelo Domínio Web o download é mais lento. Abrir a Central direto no navegador (envio.com.br, com e-mail e senha do Domínio) resolve.",
    "caminho": "envio.com.br",
    "fonte": "Acesso à Central de Soluções · visto em 309 treinamentos"
  },
  {
    "id": "geral-044",
    "modulo": "geral",
    "nivel": 1,
    "pergunta": "Como pesquisar de forma eficiente na Central de Soluções?",
    "certa": "Com termos específicos do sistema (ex.: férias, DCTF), refinando pelo módulo",
    "erradas": [
      "Digitando a pergunta completa, como numa conversa com um colega de trabalho",
      "Pesquisando só pelo número do erro, pois palavras isoladas não funcionam",
      "Usando apenas o nome do cliente e o CNPJ da empresa que teve o problema"
    ],
    "explicacao": "A busca funciona melhor com palavras-chave do próprio sistema. Ela filtra primeiro pelo módulo atual, e você pode refinar escolhendo o módulo correto.",
    "caminho": "Ícone play (lateral direita) | envio.com.br",
    "fonte": "Acesso à Central de Soluções · visto em 309 treinamentos"
  },
  {
    "id": "geral-045",
    "modulo": "geral",
    "nivel": 1,
    "pergunta": "O chat de suporte com a Tria (IA) faz acesso remoto à máquina?",
    "certa": "Não; para acesso remoto é preciso usar o telefone",
    "erradas": [
      "Sim, o analista assume a máquina assim que o chat é transferido",
      "Sim, mas apenas dentro do horário comercial do chat",
      "Sim, quando o usuário envia um print da tela com o erro"
    ],
    "explicacao": "O chat orienta e abre atendimento, mas não faz acesso remoto. Quando precisar acessar a máquina, ligue para o suporte e escolha a opção da área (Fiscal, por exemplo).",
    "caminho": "Ícone da bonequinha (lado direito)",
    "fonte": "Abertura de chamado de suporte · visto em 331 treinamentos"
  },
  {
    "id": "geral-046",
    "modulo": "geral",
    "nivel": 1,
    "pergunta": "Em que período o suporte costuma ficar mais sobrecarregado?",
    "certa": "Perto do dia 15, no fechamento; vale usar antes a Central de Soluções ou a Academy",
    "erradas": [
      "No dia 1º de cada mês, na virada de competência de todas as empresas atendidas",
      "Na última sexta-feira de cada mês, depois do horário normal de atendimento do chat",
      "Apenas em dezembro, por causa do fechamento do exercício e da entrega de obrigações"
    ],
    "explicacao": "Perto do dia 15 o volume de chamados sobe. Para dúvidas que não são urgentes, a Central de Soluções e a Academy resolvem sem fila.",
    "caminho": "Rodapé > ícone + (maiszinho) ao lado de Suporte",
    "fonte": "Abertura de chamado de suporte · visto em 331 treinamentos"
  },
  {
    "id": "geral-047",
    "modulo": "geral",
    "nivel": 2,
    "pergunta": "Qual a validade do token da instalação com o auto_se, e o que fazer se ela falhar?",
    "certa": "Vale 7 dias; se falhar, basta executar de novo, que a instalação é retomada",
    "erradas": [
      "Vale 24 horas; é preciso gerar um token novo a cada tentativa",
      "Vale 30 dias; se falhar, é preciso desinstalar tudo antes de tentar outra vez",
      "Não expira, mas só funciona na primeira máquina em que for usado"
    ],
    "explicacao": "O token vale 7 dias. Em caso de falha, rodar o auto_se novamente retoma de onde parou. Em geral basta informar o token, escolher servidor ou estação e aguardar.",
    "caminho": "Executar o auto_se como administrador",
    "fonte": "Instalação do sistema Domínio · visto em 317 treinamentos"
  },
  {
    "id": "geral-048",
    "modulo": "geral",
    "nivel": 1,
    "pergunta": "Durante a instalação automática do Domínio, o que não se deve fazer?",
    "certa": "Mexer no teclado ou no mouse, pois a instalação trava",
    "erradas": [
      "Abrir o navegador, pois ele disputa a mesma porta de rede do instalador",
      "Usar o Excel, pois ele bloqueia os arquivos que o instalador precisa copiar",
      "Deixar a máquina conectada à internet enquanto o instalador roda"
    ],
    "explicacao": "A instalação automática simula ações na tela. Qualquer movimento de teclado ou mouse atrapalha e pode travar o processo.",
    "caminho": "auto_se (servidor ou estação)",
    "fonte": "Instalação do sistema Domínio · visto em 317 treinamentos"
  },
  {
    "id": "geral-049",
    "modulo": "geral",
    "nivel": 1,
    "pergunta": "O sistema não deixa trocar de empresa com o F8. Qual a causa mais provável?",
    "certa": "Há janelas abertas; é preciso fechar todas antes de trocar",
    "erradas": [
      "A empresa de destino está sem certificado digital cadastrado",
      "O usuário não é o gerente, único com permissão de trocar de empresa",
      "A competência atual ainda não foi encerrada pelo usuário"
    ],
    "explicacao": "O Domínio só troca de empresa com todas as telas fechadas. No notebook, use FN+F8; se o F8 ativar o modo avião, clique no ícone do prédio.",
    "caminho": "F8 | ícone do prédio",
    "fonte": "Troca e seleção de empresa ativa · visto em 285 treinamentos"
  },
  {
    "id": "geral-050",
    "modulo": "geral",
    "nivel": 1,
    "pergunta": "O que fazer com as empresas padrão do sistema (Simples Nacional, Presumido, Lucro Real etc.)?",
    "certa": "Não mexer nelas: servem apenas para copiar configurações",
    "erradas": [
      "Usar como empresa de teste, lançando notas reais antes da implantação",
      "Excluí-las, pois só ocupam licença do sistema sem utilidade",
      "Alterar o regime delas para atender os clientes novos do escritório"
    ],
    "explicacao": "As empresas padrão são modelos de configuração. Alterar ou excluir essas empresas prejudica quem for copiar delas depois.",
    "caminho": "F8",
    "fonte": "Troca e seleção de empresa ativa · visto em 285 treinamentos"
  },
  {
    "id": "geral-051",
    "modulo": "geral",
    "nivel": 2,
    "pergunta": "Esqueceram de marcar os módulos da empresa antes de importar o perfil. Qual a consequência?",
    "certa": "Parâmetros e plano de contas não vêm; é preciso marcar os módulos e refazer a importação",
    "erradas": [
      "O perfil importa normalmente, e os módulos são habilitados sozinhos logo depois da gravação",
      "Só o módulo de Folha deixa de receber os parâmetros do perfil importado na empresa",
      "A empresa fica bloqueada até o suporte da Domínio liberar os módulos por chamado"
    ],
    "explicacao": "Empresas importadas de outros sistemas vêm sem módulos. Sem habilitá-los antes, o perfil não leva parâmetros nem plano de contas.",
    "caminho": "Controle > Empresas > botão Módulos",
    "fonte": "Configuração de módulos da empresa · visto em 175 treinamentos"
  },
  {
    "id": "geral-052",
    "modulo": "geral",
    "nivel": 2,
    "pergunta": "Ao habilitar Honorários no cadastro de um cliente do escritório, o que selecionar?",
    "certa": "Cliente; “Escritório” é só para o próprio escritório",
    "erradas": [
      "Escritório, pois quem presta o serviço é o escritório",
      "Eventual, que vale para todos os clientes com contrato fixo",
      "Nenhum: o módulo se habilita apenas pelo contrato do cliente"
    ],
    "explicacao": "No botão Módulos, em Honorários, clientes do escritório devem ser marcados como Cliente. A opção Escritório é reservada à empresa do próprio escritório contábil.",
    "caminho": "Controle > Empresas > botão Módulos",
    "fonte": "Configuração de módulos da empresa · visto em 175 treinamentos"
  },
  {
    "id": "geral-053",
    "modulo": "geral",
    "nivel": 2,
    "pergunta": "Qual a diferença entre inativar e excluir uma empresa?",
    "certa": "Inativar mantém o histórico; Excluir Registro (botão direito) apaga tudo",
    "erradas": [
      "Inativar apaga só a folha; excluir apaga só o fiscal e o contábil",
      "Os dois apagam tudo, mas a inativação pode ser desfeita em até 30 dias",
      "Inativar remove a empresa do banco; excluir apenas a oculta da lista"
    ],
    "explicacao": "Para guardar o histórico, altere a Situação para Inativo (ou Ativo sem movimento). Para apagar de vez, use Excluir Registro, que remove todos os dados.",
    "caminho": "Controle > Empresas",
    "fonte": "Inativação e exclusão de empresas · visto em 175 treinamentos"
  },
  {
    "id": "geral-054",
    "modulo": "geral",
    "nivel": 3,
    "pergunta": "O que o botão Exclusão da tela de empresas apaga, em comparação ao Excluir Registro?",
    "certa": "Só folha, fiscal e contábil; para apagar tudo é o Excluir Registro (botão direito)",
    "erradas": [
      "Todos os dados da empresa, inclusive os de honorários e os eventos do eSocial enviados",
      "Apenas o cadastro da empresa, mantendo todos os lançamentos e movimentos já feitos nela",
      "Somente os dados do último exercício aberto, preservando os exercícios anteriores"
    ],
    "explicacao": "O botão Exclusão limpa folha, fiscal e contábil, mas não o restante (como Honorários). O Excluir Registro, pelo botão direito, apaga a empresa por inteiro.",
    "caminho": "Controle > Empresas",
    "fonte": "Inativação e exclusão de empresas · visto em 175 treinamentos"
  },
  {
    "id": "geral-055",
    "modulo": "geral",
    "nivel": 2,
    "pergunta": "Qual a ordem para excluir uma empresa com filiais?",
    "certa": "Filiais primeiro e depois a matriz; eventos do eSocial pendentes travam a exclusão",
    "erradas": [
      "A matriz primeiro, e as filiais são excluídas junto com ela de forma automática",
      "Qualquer ordem, desde que todas as empresas estejam com a situação Inativo no cadastro",
      "A matriz inativa primeiro e, só depois, a filial que ainda estiver com situação ativa"
    ],
    "explicacao": "Exclua as filiais antes da matriz. Se houver eventos do eSocial pendentes, o sistema não deixa excluir até serem resolvidos.",
    "caminho": "Controle > Empresas",
    "fonte": "Inativação e exclusão de empresas · visto em 175 treinamentos"
  },
  {
    "id": "geral-056",
    "modulo": "geral",
    "nivel": 1,
    "pergunta": "Quais são os dois logins para trabalhar no Domínio Web?",
    "certa": "Primeiro o do dominioweb.com.br (e-mail e senha do Onvio); depois o usuário interno do módulo",
    "erradas": [
      "Um só: o login do Onvio vale também dentro do módulo escolhido, sem pedir nenhum outro usuário",
      "Primeiro o usuário interno do sistema e, depois, o certificado digital do escritório contábil",
      "Primeiro o CRC do contador responsável pelo escritório e, depois, o e-mail e a senha do Onvio"
    ],
    "explicacao": "São duas etapas: entrar no portal com o login do Onvio e, ao abrir o módulo, entrar com o usuário interno (por padrão GERENTE/gerente).",
    "caminho": "dominioweb.com.br",
    "fonte": "Acesso ao Domínio Web · visto em 175 treinamentos"
  },
  {
    "id": "geral-057",
    "modulo": "geral",
    "nivel": 1,
    "pergunta": "Como funciona o plugin do Domínio Web?",
    "certa": "É por máquina: baixa na primeira vez e só baixa de novo se for excluído",
    "erradas": [
      "É por usuário do Onvio e precisa ser baixado de novo a cada novo login feito",
      "É instalado nos dois navegadores, Chrome e Edge, para funcionar bem em qualquer um",
      "É por empresa e precisa ser reinstalado a cada atualização do sistema Domínio"
    ],
    "explicacao": "O plugin (utilitário de acesso remoto e monitor de internet) fica na máquina. Instale em um navegador só, Chrome ou Edge, não nos dois.",
    "caminho": "dominioweb.com.br",
    "fonte": "Acesso ao Domínio Web · visto em 175 treinamentos"
  },
  {
    "id": "geral-058",
    "modulo": "geral",
    "nivel": 1,
    "pergunta": "Qual cuidado ter com a Inscrição Estadual no cadastro da empresa?",
    "certa": "Deixar em branco se não tiver; nunca escrever “isento”",
    "erradas": [
      "Digitar “isento” quando a empresa não tiver inscrição",
      "Repetir o número da Inscrição Municipal para o campo ficar completo",
      "Preencher com zeros para o cadastro passar na validação"
    ],
    "explicacao": "Se a empresa não tem inscrição estadual, o campo deve ficar vazio. Escrever “isento” é um erro de cadastro comum.",
    "caminho": "Controle > Empresas",
    "fonte": "Validação de dados cadastrais · visto em 165 treinamentos"
  },
  {
    "id": "geral-059",
    "modulo": "geral",
    "nivel": 1,
    "pergunta": "O código de uma empresa pode ser alterado depois de criado?",
    "certa": "Não; só o apelido pode ser alterado",
    "erradas": [
      "Sim, pelo gerente, em Controle > Empresas",
      "Sim, mas só se a empresa ainda não tiver movimento",
      "Sim, mas apenas pelo suporte da Domínio, a pedido do cliente"
    ],
    "explicacao": "O código não muda depois da criação da empresa. O apelido, usado nas buscas, pode ser alterado.",
    "caminho": "Controle > Empresas",
    "fonte": "Validação de dados cadastrais · visto em 165 treinamentos"
  },
  {
    "id": "geral-060",
    "modulo": "geral",
    "nivel": 1,
    "pergunta": "Qual a diferença entre a pesquisa do botão Domínio e a Central de Soluções?",
    "certa": "A pesquisa mostra ONDE fica a rotina; a Central ensina o passo a passo",
    "erradas": [
      "A pesquisa ensina o passo a passo; a Central só mostra o caminho",
      "As duas fazem a mesma coisa, mudando apenas o endereço de acesso",
      "A pesquisa só encontra relatórios; a Central só encontra mensagens de erro"
    ],
    "explicacao": "A pesquisa do botão Domínio lista as telas de todos os módulos com o caminho completo. Para aprender a fazer, use a Central de Soluções.",
    "caminho": "Botão Domínio (canto superior esquerdo) > campo de pesquisa",
    "fonte": "Pesquisa de menus e funcionalidades · visto em 157 treinamentos"
  },
  {
    "id": "geral-061",
    "modulo": "geral",
    "nivel": 2,
    "pergunta": "Na pesquisa do botão Domínio só aparece um módulo. O que verificar?",
    "certa": "Se os perfis dos outros módulos foram importados e se o usuário tem permissão neles",
    "erradas": [
      "Se o certificado digital da empresa está cadastrado no Gerenciador de Certificados",
      "Se a competência ativa é a mesma em todos os módulos que estão abertos na tela",
      "Se o agente de comunicação está com a bolinha verde no canto inferior da tela"
    ],
    "explicacao": "Os resultados dependem dos módulos habilitados e das permissões do usuário logado. Faltando perfil importado ou permissão, o módulo não aparece.",
    "caminho": "Botão Domínio > pesquisa",
    "fonte": "Pesquisa de menus e funcionalidades · visto em 157 treinamentos"
  },
  {
    "id": "geral-062",
    "modulo": "geral",
    "nivel": 1,
    "pergunta": "Qual a função dos atalhos F2, F7, F8 e F12?",
    "certa": "F2 pesquisa no campo, F7 cria o cadastro direto, F8 troca a empresa e F12 abre a calculadora",
    "erradas": [
      "F2 troca a empresa, F7 pesquisa no campo, F8 abre a calculadora e F12 grava o registro",
      "F2 abre a calculadora, F7 pesquisa no campo, F8 cria o cadastro e F12 troca a empresa",
      "F2 grava o registro, F7 troca a empresa, F8 pesquisa no campo e F12 cria o cadastro"
    ],
    "explicacao": "F2 consulta (conta, histórico, rubrica etc.), F7 cria cadastro sem sair da tela, F8 troca de empresa e F12 abre a calculadora. No notebook, use FN junto.",
    "caminho": "Ajuda > Dicas do Sistema > Atalhos",
    "fonte": "Atalhos de teclado · visto em 177 treinamentos"
  },
  {
    "id": "geral-063",
    "modulo": "geral",
    "nivel": 2,
    "pergunta": "O F2 ou o F7 não responde dentro de um campo. Qual a causa mais comum?",
    "certa": "A tela está em modo edição; cancele com Alt+C e tente de novo",
    "erradas": [
      "O campo exige perfil de gerente para usar esse atalho de teclado",
      "O teclado numérico está desligado no computador do usuário agora",
      "A empresa ativa está sem o módulo habilitado no seu cadastro"
    ],
    "explicacao": "Os atalhos F2 e F7 não funcionam em modo edição. Pressione Alt+C para cancelar e use o atalho. No notebook, teste com FN.",
    "caminho": "Qualquer tela",
    "fonte": "Atalhos de teclado · visto em 177 treinamentos"
  },
  {
    "id": "geral-064",
    "modulo": "geral",
    "nivel": 1,
    "pergunta": "Com quanta antecedência é preciso avisar para cancelar ou reagendar um treinamento sem perder horas?",
    "certa": "48 horas",
    "erradas": [
      "24 horas",
      "72 horas",
      "No mesmo dia, até 2 horas antes"
    ],
    "explicacao": "O cancelamento com menos de 48 horas consome as horas como se o treinamento tivesse ocorrido. O aviso vai ao backoffice, por WhatsApp ou e-mail.",
    "caminho": "Onview > Suporte > Acompanhar a implantação > Treinamentos",
    "fonte": "Agendamento de treinamento · visto em 294 treinamentos"
  },
  {
    "id": "geral-066",
    "modulo": "geral",
    "nivel": 1,
    "pergunta": "Em quanto tempo expira a gravação de um treinamento?",
    "certa": "180 dias; o ideal é baixar logo e salvar localmente",
    "erradas": [
      "30 dias depois do treinamento",
      "60 dias depois do treinamento",
      "Não expira, mas só abre com o e-mail do técnico"
    ],
    "explicacao": "As gravações expiram em 180 dias. Para acessar, use o e-mail do contato principal do projeto, digite o PIN recebido e baixe o vídeo ou a transcrição.",
    "caminho": "Onvio > Suporte > Acompanhar Implantação > Treinamentos > olhinho",
    "fonte": "Acesso a gravações de treinamento · visto em 245 treinamentos"
  },
  {
    "id": "geral-067",
    "modulo": "geral",
    "nivel": 2,
    "pergunta": "Por que não automatizar rotinas antes de validar o processo manualmente?",
    "certa": "Porque a automação repete o erro; primeiro se valida na mão e depois se automatiza",
    "erradas": [
      "Porque o sistema só libera as rotinas automáticas após 4 meses de uso da empresa",
      "Porque a automação só funciona depois do primeiro fechamento da folha de pagamento",
      "Porque rotinas automáticas dependem de licença adicional do módulo contratado"
    ],
    "explicacao": "Automatizar um processo ainda não validado multiplica o erro. Por isso as automações vêm no fim do cronograma, depois da parametrização e da rotina operacional.",
    "caminho": "Onvio > Suporte > Treinamentos",
    "fonte": "Cronograma de implantação · visto em 223 treinamentos"
  },
  {
    "id": "geral-068",
    "modulo": "geral",
    "nivel": 1,
    "pergunta": "O que acontece se criar uma etapa sem tarefa em um Fluxo de Tarefas?",
    "certa": "O fluxo não abre; nunca criar etapa vazia",
    "erradas": [
      "A etapa é ignorada e o fluxo segue normalmente",
      "A etapa herda automaticamente a tarefa da etapa anterior",
      "O fluxo abre, mas sem prazo definido para essa etapa"
    ],
    "explicacao": "Toda etapa precisa de pelo menos uma tarefa. Também é boa prática sempre adicionar responsáveis às tarefas.",
    "caminho": "Configure > Fluxo de Tarefas > Gerenciar",
    "fonte": "Criação de fluxo de tarefas · visto em 452 treinamentos"
  },
  {
    "id": "geral-069",
    "modulo": "geral",
    "nivel": 3,
    "pergunta": "No Fluxo de Tarefas, como os prazos se comportam quando as tarefas ficam na vertical e na horizontal?",
    "certa": "Na vertical não somam (vale o maior prazo); na horizontal os prazos somam",
    "erradas": [
      "Na vertical somam; na horizontal vale apenas o maior prazo",
      "Em ambos os casos os prazos somam, só mudando a ordem de abertura",
      "Em ambos vale o maior prazo, e a soma é feita só pelo gerente"
    ],
    "explicacao": "Tarefas em paralelo (vertical) correm ao mesmo tempo e o prazo da etapa é o do maior. Em sequência (horizontal), os prazos se acumulam.",
    "caminho": "Configure > Fluxo de Tarefas > Gerenciar",
    "fonte": "Criação de fluxo de tarefas · visto em 452 treinamentos"
  },
  {
    "id": "geral-070",
    "modulo": "geral",
    "nivel": 3,
    "pergunta": "Quando o sistema gera as tarefas recorrentes e o que fazer com um cliente novo?",
    "certa": "Gera no dia 20 para o mês seguinte; cliente novo após o dia 20 exige geração manual",
    "erradas": [
      "Gera no dia 1º, para o próprio mês; cliente novo entra sozinho no fluxo na mesma hora",
      "Gera no último dia do mês; cliente novo só passa a entrar na competência seguinte",
      "Gera a cada dia 15 do mês; cliente novo precisa ser incluído no fluxo pelo gerente"
    ],
    "explicacao": "As recorrentes são geradas no dia 20 para o mês seguinte. Quem entra depois dessa data precisa ter as tarefas geradas manualmente na tela de Geração.",
    "caminho": "Configure > Fluxo de Tarefas > Geração",
    "fonte": "Criação de fluxo de tarefas · visto em 452 treinamentos"
  },
  {
    "id": "geral-071",
    "modulo": "geral",
    "nivel": 2,
    "pergunta": "Qual a regra para mudar parâmetros que valem a partir de uma data (vigência)?",
    "certa": "Para mudar dali em diante, criar Nova Vigência; alterar a existente desfaz cálculos desde a data",
    "erradas": [
      "Sempre alterar a vigência existente, pois criar uma nova duplica os cálculos já feitos",
      "Excluir a vigência atual e recriar do zero, para o sistema recalcular tudo desde o início",
      "Só o suporte da Domínio pode criar vigência nova, mediante abertura de chamado técnico"
    ],
    "explicacao": "Mudar a vigência existente afeta o que já foi calculado desde a data dela. Para uma mudança daqui para frente, inclua Nova Vigência.",
    "caminho": "Controle > Parâmetros",
    "fonte": "Ajuste de parâmetros após conversão · visto em 195 treinamentos"
  },
  {
    "id": "geral-072",
    "modulo": "geral",
    "nivel": 2,
    "pergunta": "Uma empresa migrou para o Domínio em setembro de 2026. Qual o Período Inicial nos parâmetros?",
    "certa": "09/2026, o primeiro mês no Domínio",
    "erradas": [
      "A data de abertura do CNPJ da empresa",
      "01/2026, o início do exercício do ano da migração",
      "08/2026, o mês anterior ao da migração"
    ],
    "explicacao": "O Período Inicial é o primeiro mês da empresa no Domínio e impacta o cálculo do Simples Nacional (últimos 12 meses). Já o Início Efetivo é a data de abertura do CNPJ.",
    "caminho": "Controle > Parâmetros > aba Personaliza",
    "fonte": "Verificação de parâmetros obrigatórios · visto em 179 treinamentos"
  },
  {
    "id": "geral-073",
    "modulo": "geral",
    "nivel": 3,
    "pergunta": "Por que o Início Efetivo deve ser a data de abertura do CNPJ?",
    "certa": "Porque permite lançar a receita dos 12 meses anteriores (RBT12); data recente impede isso",
    "erradas": [
      "Porque define o dia a partir do qual a empresa passa a pagar honorários ao escritório",
      "Porque é a data de corte usada para importar as notas fiscais de períodos anteriores",
      "Porque o eSocial exige a mesma data de início em todos os eventos de tabela enviados"
    ],
    "explicacao": "Com Início Efetivo retroativo, o sistema permite lançar a receita dos 12 meses anteriores, usada no cálculo do Simples. Se deixar recente, esse lançamento não é permitido.",
    "caminho": "Controle > Parâmetros > aba Personaliza",
    "fonte": "Ajuste de parâmetros após conversão · visto em 195 treinamentos"
  },
  {
    "id": "geral-074",
    "modulo": "geral",
    "nivel": 2,
    "pergunta": "O que acontece se deixar impostos desnecessários marcados nos parâmetros da empresa?",
    "certa": "A apuração fica lenta, mas não causa erro",
    "erradas": [
      "A apuração é bloqueada até os impostos serem desmarcados",
      "O sistema gera guias em branco para esses impostos todo mês",
      "O cálculo do Simples Nacional passa a sair divergente"
    ],
    "explicacao": "Impostos que a empresa não usa (como IPI para quem não é indústria) só deixam a apuração mais lenta. Vale limpar a aba Impostos após a importação.",
    "caminho": "Controle > Parâmetros > aba Impostos",
    "fonte": "Verificação de parâmetros obrigatórios · visto em 179 treinamentos"
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
    "id": "fiscal-021",
    "modulo": "fiscal",
    "nivel": 2,
    "pergunta": "Qual é a ordem recomendada para importar XMLs de notas fiscais?",
    "certa": "Primeiro as saídas, depois as entradas e por último os cancelamentos",
    "erradas": [
      "Primeiro as entradas, depois as saídas e por último os cancelamentos",
      "Primeiro os cancelamentos, depois as saídas e por último as entradas",
      "Qualquer ordem, desde que os XMLs estejam descompactados na pasta"
    ],
    "explicacao": "A ordem é saídas, entradas e cancelamentos. Cada cancelamento vem em XML separado; se for importado antes, a apuração fica errada.",
    "caminho": "Utilitários > Importação > Importação Padrão",
    "fonte": "Importação de NF-e por XML · visto em 1690 treinamentos"
  },
  {
    "id": "fiscal-022",
    "modulo": "fiscal",
    "nivel": 3,
    "pergunta": "A NFS-e tem duas configurações de importação. Para que serve cada uma?",
    "certa": "Padrão Nacional para XML manual; ABRASF para SIEG ou API. Configure as duas",
    "erradas": [
      "ABRASF para XML manual; Padrão Nacional para SIEG ou API. Configure as duas",
      "Padrão Nacional para notas de entrada; ABRASF para as notas de saída",
      "Padrão Nacional para o Simples; ABRASF para Presumido e Lucro Real"
    ],
    "explicacao": "Cada origem usa um layout diferente. Para que as notas entrem tanto pelo XML manual quanto pela captura automática, as duas configurações precisam estar ativas.",
    "caminho": "Utilitários > Importação > Importação Padrão",
    "fonte": "Importação de NF-e por XML · visto em 1690 treinamentos"
  },
  {
    "id": "fiscal-023",
    "modulo": "fiscal",
    "nivel": 1,
    "pergunta": "Ao editar um acumulador que já tem movimento, o que fazer com a vigência?",
    "certa": "Clicar em Nova Vigência, e nunca alterar a vigência antiga",
    "erradas": [
      "Alterar a vigência antiga e gravar, pois o sistema guarda o histórico",
      "Excluir a vigência antiga e cadastrar o acumulador do zero",
      "Criar um novo acumulador, pois a vigência não pode ser alterada"
    ],
    "explicacao": "Nova Vigência preserva o histórico das notas já lançadas. Alterar a vigência antiga muda o cálculo de períodos passados.",
    "caminho": "Arquivos > Acumuladores > Editar > Nova Vigência",
    "fonte": "Cadastro e manutenção de acumuladores · visto em 1380 treinamentos"
  },
  {
    "id": "fiscal-024",
    "modulo": "fiscal",
    "nivel": 2,
    "pergunta": "Qual é a data mínima da vigência do Simples Nacional no acumulador?",
    "certa": "01/01/2018; antes disso o cálculo fica errado",
    "erradas": [
      "01/07/2007; antes disso o cálculo fica errado",
      "01/01/2012; antes disso o sistema bloqueia a gravação",
      "01/01/2020; antes disso o anexo é trocado sozinho"
    ],
    "explicacao": "A vigência do imposto Simples (44) no acumulador deve ser sempre igual ou posterior a 01/01/2018. Nos Parâmetros da empresa o limite é 07/2007.",
    "caminho": "Arquivos > Acumuladores > aba Impostos",
    "fonte": "Cadastro e manutenção de acumuladores · visto em 1380 treinamentos"
  },
  {
    "id": "fiscal-025",
    "modulo": "fiscal",
    "nivel": 3,
    "pergunta": "A empresa tem 50 fornecedores e você definiu exceção para 3 deles como uso e consumo. O que acontece com os outros 47?",
    "certa": "A exceção vira regra: defina também os outros 47, por exemplo como industrialização",
    "erradas": [
      "Eles seguem o padrão do acumulador normalmente, sem precisar de nenhuma definição",
      "Eles ficam bloqueados na importação até o gerente autorizar cada fornecedor novo",
      "Eles herdam a regra de uso e consumo definida para os três primeiros fornecedores"
    ],
    "explicacao": "Definir exceção por fornecedor cria regra para todos os demais. Se não definir os outros, as notas deles não seguem o acumulador esperado.",
    "caminho": "Arquivos > Acumuladores",
    "fonte": "Cadastro e manutenção de acumuladores · visto em 1380 treinamentos"
  },
  {
    "id": "fiscal-026",
    "modulo": "fiscal",
    "nivel": 3,
    "pergunta": "Como configurar o Fator R no acumulador do Simples Nacional?",
    "certa": "Criar vigência, reticências do Simples, tabela “Sujeita Fator R” e marcar a troca automática de anexos",
    "erradas": [
      "Criar vigência, reticências do Simples, Anexo III fixo e desmarcar a troca automática de anexos",
      "Alterar a vigência antiga, marcar “Fator R” em Parâmetros e reapurar todo o período do ano",
      "Criar um acumulador novo de serviços e marcar “Fator R” na aba Contabilidade do acumulador"
    ],
    "explicacao": "No imposto 44, em Anexo/Seção/Tabela, a tabela passa de “Não Sujeita” para “Sujeita Fator R”, e se marca “Efetuar troca automática entre anexos”.",
    "caminho": "Arquivos > Acumuladores > aba Impostos > reticências do Simples (44)",
    "fonte": "Cadastro e manutenção de acumuladores · visto em 1380 treinamentos"
  },
  {
    "id": "fiscal-027",
    "modulo": "fiscal",
    "nivel": 3,
    "pergunta": "Como configurar a venda de produto monofásico no acumulador de uma empresa do Simples?",
    "certa": "Nova vigência no acumulador de venda, aba SPED: CST 04, natureza 202 e alíquota de PIS/COFINS 0%",
    "erradas": [
      "Nova vigência no acumulador de venda, aba SPED: CST 01, natureza 100 e alíquota de PIS/COFINS 3%",
      "Alterar a vigência antiga do acumulador de venda: CST 04 e alíquota de PIS/COFINS 0%",
      "Nova vigência no acumulador de compra, aba SPED: CST 04, natureza 202 e crédito de 9,25%"
    ],
    "explicacao": "Localize os acumuladores de venda (como 5102, 6102 e 6108), crie nova vigência e ajuste a aba SPED para monofásico.",
    "caminho": "Arquivos > Acumuladores > aba SPED",
    "fonte": "Cadastro e manutenção de acumuladores · visto em 1380 treinamentos"
  },
  {
    "id": "fiscal-028",
    "modulo": "fiscal",
    "nivel": 1,
    "pergunta": "O campo Período Atual nos Parâmetros fiscais pode ser alterado manualmente?",
    "certa": "Não: ele é atualizado sozinho na apuração, então não se mexe",
    "erradas": [
      "Sim, ele deve ser ajustado a cada mês antes de apurar",
      "Sim, mas só depois do fechamento do período da empresa",
      "Não, mas ele precisa ser reiniciado depois de cada importação"
    ],
    "explicacao": "O sistema muda o Período Atual conforme as apurações. Mexer à mão pode bagunçar a sequência de meses.",
    "caminho": "Controle > Parâmetros",
    "fonte": "Configuração de parâmetros fiscais empresa · visto em 794 treinamentos"
  },
  {
    "id": "fiscal-029",
    "modulo": "fiscal",
    "nivel": 2,
    "pergunta": "Os parâmetros fiscais precisam mudar para o futuro, mas já existem apurações feitas. O que fazer?",
    "certa": "Criar nova vigência com a data de corte, sem mexer na vigência já apurada",
    "erradas": [
      "Alterar a vigência atual e reapurar todos os meses a partir de janeiro",
      "Excluir as apurações e recriar o parâmetro com a data inicial desejada",
      "Alterar o parâmetro e deixar o sistema recalcular os meses anteriores"
    ],
    "explicacao": "Alterar parâmetros com apurações feitas distorce o histórico. A Nova Vigência na aba Vigência preserva o que já foi apurado.",
    "caminho": "Controle > Parâmetros > aba Vigência",
    "fonte": "Configuração de parâmetros fiscais empresa · visto em 794 treinamentos"
  },
  {
    "id": "fiscal-030",
    "modulo": "fiscal",
    "nivel": 3,
    "pergunta": "Qual é a data mínima da vigência do Simples Nacional nos Parâmetros fiscais da empresa?",
    "certa": "07/2007; se a empresa for anterior, crie uma nova vigência",
    "erradas": [
      "01/2018; se a empresa for anterior, o regime é refeito",
      "01/2012; se a empresa for anterior, o sistema recusa o cadastro",
      "01/2020; se a empresa for anterior, o Fator R é desativado"
    ],
    "explicacao": "Nos Parâmetros o limite do Simples é 07/2007. No acumulador, a vigência do imposto Simples precisa ser de 01/01/2018 em diante.",
    "caminho": "Controle > Parâmetros > aba Vigência",
    "fonte": "Configuração de parâmetros fiscais empresa · visto em 794 treinamentos"
  },
  {
    "id": "fiscal-031",
    "modulo": "fiscal",
    "nivel": 3,
    "pergunta": "O que define o Período Inicial nos Parâmetros fiscais de uma empresa do Simples?",
    "certa": "De quando o sistema pedirá o RBT12 retroativo; o ideal é 3 meses antes",
    "erradas": [
      "A data de abertura da empresa, usada para calcular o anexo do Simples",
      "A data do primeiro lançamento contábil, usada para o saldo inicial",
      "O mês da primeira apuração, usado para fechar o período anterior"
    ],
    "explicacao": "O Período Inicial determina a partir de quando o sistema vai exigir o RBT12. Começar 3 meses antes permite comparar com o sistema anterior.",
    "caminho": "Controle > Parâmetros > aba Personaliza",
    "fonte": "Configuração de parâmetros fiscais empresa · visto em 794 treinamentos"
  },
  {
    "id": "fiscal-032",
    "modulo": "fiscal",
    "nivel": 2,
    "pergunta": "Em uma empresa com matriz e filiais, o que marcar na aba Opções dos Parâmetros fiscais?",
    "certa": "“Processa filiais”, na matriz e também nas filiais",
    "erradas": [
      "“Processa filiais”, só na matriz",
      "“Gera lançamentos na matriz”, só nas filiais",
      "“Centraliza apuração”, só na filial de maior movimento"
    ],
    "explicacao": "Para o sistema apurar as filiais junto com a matriz, a opção precisa estar marcada em ambas.",
    "caminho": "Controle > Parâmetros > aba Opções",
    "fonte": "Configuração de parâmetros fiscais empresa · visto em 794 treinamentos"
  },
  {
    "id": "fiscal-033",
    "modulo": "fiscal",
    "nivel": 3,
    "pergunta": "Na integração contábil do acumulador, qual a diferença entre deixar a conta de débito em branco e preenchê-la?",
    "certa": "Em branco cria uma conta por cliente ou fornecedor (analítico); preenchida usa uma conta genérica (sintético)",
    "erradas": [
      "Em branco usa uma conta genérica (sintético); preenchida cria uma conta por cliente ou fornecedor",
      "Em branco não contabiliza a nota; preenchida contabiliza só nos meses fechados",
      "Em branco usa a conta do banco; preenchida usa a conta de caixa da empresa"
    ],
    "explicacao": "Conta em branco faz o sistema criar a conta de cada cliente/fornecedor. Preenchida, como 10000 Clientes Diversos, usa uma conta genérica única.",
    "caminho": "Arquivos > Acumuladores > aba Contabilidade > Notas",
    "fonte": "Configuração de integração fiscal contábil · visto em 666 treinamentos"
  },
  {
    "id": "fiscal-034",
    "modulo": "fiscal",
    "nivel": 2,
    "pergunta": "Aparece a mensagem “Não foi feito o lançamento contábil por conta do histórico”. Qual é a causa?",
    "certa": "O histórico informado na configuração não existe; verifique em Arquivos > Histórico",
    "erradas": [
      "O histórico informado é maior que o limite de caracteres permitido no lançamento",
      "O histórico está cadastrado, mas sem a conta de débito do acumulador",
      "O histórico foi cadastrado em outra empresa e não foi replicado"
    ],
    "explicacao": "Histórico inexistente impede o lançamento contábil. Confira o código do histórico no acumulador e o cadastro em Arquivos > Histórico.",
    "caminho": "Arquivos > Histórico",
    "fonte": "Configuração de integração fiscal contábil · visto em 666 treinamentos"
  },
  {
    "id": "fiscal-035",
    "modulo": "fiscal",
    "nivel": 2,
    "pergunta": "Depois de alterar a configuração contábil, como reprocessar impostos e notas?",
    "certa": "Impostos em Movimentos > Apuração > Processar Período; notas com Regerar Lançamentos",
    "erradas": [
      "Impostos com Regerar Lançamentos; notas em Movimentos > Apuração > Processar Período",
      "Os dois em Movimentos > Apuração > Processar Período, de uma vez",
      "Os dois com Regerar Lançamentos, marcando impostos e notas juntos"
    ],
    "explicacao": "São caminhos diferentes: a apuração reprocessa os impostos, e Regerar Lançamentos reprocessa a contabilização das notas.",
    "caminho": "Movimentos > Apuração / Utilitários > Regerar Lançamentos",
    "fonte": "Configuração de integração fiscal contábil · visto em 666 treinamentos"
  },
  {
    "id": "fiscal-036",
    "modulo": "fiscal",
    "nivel": 2,
    "pergunta": "A vigência de um acumulador pode ser anterior à data de cadastro da empresa?",
    "certa": "Não: deve ser igual ou posterior ao cadastro; o sistema avisa e pede ajuste",
    "erradas": [
      "Sim, pois a vigência do acumulador é independente do cadastro da empresa no sistema",
      "Sim, mas só nas empresas migradas de outro sistema contábil para o Domínio",
      "Não, mas o sistema ajusta a data sozinho, sem avisar o usuário que gravou"
    ],
    "explicacao": "Se a vigência for anterior à data de cadastro da empresa, o sistema acusa e pede para corrigir.",
    "caminho": "Arquivos > Acumuladores > aba Contabilidade",
    "fonte": "Configuração de integração fiscal contábil · visto em 666 treinamentos"
  },
  {
    "id": "fiscal-037",
    "modulo": "fiscal",
    "nivel": 3,
    "pergunta": "Em uma empresa do Simples que revende produtos, qual é a base do diferencial de alíquota no Domínio?",
    "certa": "O valor do produto, e não a base reduzida do XML; ajuste manual se preciso",
    "erradas": [
      "A base reduzida do XML, que é sempre a que o fornecedor destacou na nota",
      "O valor da nota inteira, incluindo frete, seguro e outras despesas acessórias",
      "A base do ICMS próprio da nota, multiplicada pela alíquota interna do destino"
    ],
    "explicacao": "O Domínio usa o valor do produto. Quando a base do sistema anterior era diferente, a apuração pode divergir, e o ajuste é manual em Impostos Lançados.",
    "caminho": "Movimentos > Outros > Impostos Lançados > Estadual",
    "fonte": "Apuração de ICMS · visto em 619 treinamentos"
  },
  {
    "id": "fiscal-038",
    "modulo": "fiscal",
    "nivel": 3,
    "pergunta": "O crédito do Simples Nacional (CST 101 e 201) nas compras só é importado em qual situação?",
    "certa": "Quando o valor está no XML da nota; no PDF não vale, e o acumulador deve ser específico",
    "erradas": [
      "Quando o valor está no PDF da nota; no XML o sistema desconsidera o crédito",
      "Em qualquer situação, pois o Domínio calcula o crédito pela alíquota do Simples",
      "Quando o fornecedor é do Lucro Real e destaca o crédito no corpo da nota"
    ],
    "explicacao": "Se o crédito não foi destacado no XML, o Domínio não o considera. Configure um acumulador específico para essas entradas.",
    "caminho": "Arquivos > Acumuladores",
    "fonte": "Apuração de ICMS · visto em 619 treinamentos"
  },
  {
    "id": "fiscal-039",
    "modulo": "fiscal",
    "nivel": 2,
    "pergunta": "Qual CFOP de entrada vem como padrão na configuração de importação, e como ajustar para uma indústria?",
    "certa": "O 1102 (revenda); para indústria troca-se para o 1101",
    "erradas": [
      "O 1101 (industrialização); para comércio troca-se para o 1102",
      "O 1556 (uso e consumo); para indústria troca-se para o 1101",
      "O 1403 (substituição tributária); para indústria troca-se para o 1102"
    ],
    "explicacao": "O padrão é voltado ao comércio. Ajuste antes da primeira importação para evitar retrabalho; para serviço, 1556 ou 1128.",
    "caminho": "Arquivos > Configuração de Importação > NF-e Arquivo XML > Entradas > CFOPs",
    "fonte": "Cadastro e vinculação de CFOP · visto em 593 treinamentos"
  },
  {
    "id": "fiscal-040",
    "modulo": "fiscal",
    "nivel": 3,
    "pergunta": "O CFOP 5929 chega do fornecedor, mas não vem mapeado. Como tratar?",
    "certa": "Configurar à mão como 1556 (consumo) ou 1653 (combustível), conforme o cliente",
    "erradas": [
      "Mapear sempre como 1102, pois a nota é tratada como mercadoria para revenda",
      "Deixar sem mapeamento, que o sistema escolhe sozinho pela atividade da empresa",
      "Mapear sempre como 1411, que é o CFOP de entrada de devoluções com ST e outras"
    ],
    "explicacao": "O 5929 não tem equivalente automático. Combustível de consumo próprio vai para o 1653, e não para o 1556, com exceção para auto postos.",
    "caminho": "Arquivos > Configuração de Importação > NF-e Arquivo XML > Entradas > CFOPs",
    "fonte": "Cadastro e vinculação de CFOP · visto em 593 treinamentos"
  },
  {
    "id": "fiscal-041",
    "modulo": "fiscal",
    "nivel": 3,
    "pergunta": "Em uma devolução de mercadoria com substituição tributária, quais CFOPs de entrada usar?",
    "certa": "1411 ou 2411, e não 1202 ou 2202, para não abater a operação errada",
    "erradas": [
      "1202 ou 2202, porque o sistema trata a substituição pelo CST da nota",
      "1403 ou 2403, porque a devolução segue o mesmo CFOP da compra original",
      "1556 ou 2556, porque a devolução é tratada como uso e consumo"
    ],
    "explicacao": "As devoluções com ST têm CFOP próprio (1411/2411). Usar o das devoluções comuns abate a operação errada na apuração.",
    "caminho": "Arquivos > Configuração de Importação > NF-e Arquivo XML > Entradas > CFOPs",
    "fonte": "Cadastro e vinculação de CFOP · visto em 593 treinamentos"
  },
  {
    "id": "fiscal-042",
    "modulo": "fiscal",
    "nivel": 2,
    "pergunta": "Na apuração, qual é a diferença entre “Processar Período” e “Gera novo período”?",
    "certa": "Processar Período calcula a apuração; Gera novo período só muda a visualização",
    "erradas": [
      "Processar Período só muda a visualização; Gera novo período calcula a apuração",
      "As duas calculam a apuração, mas uma delas grava o período como fechado",
      "As duas só mudam a visualização, e o cálculo ocorre na importação das notas"
    ],
    "explicacao": "Para apurar de fato, use Movimentos > Apuração > Processar Período. O botão de gerar novo período não recalcula nada.",
    "caminho": "Movimentos > Apuração",
    "fonte": "Relatório de apuração de impostos · visto em 443 treinamentos"
  },
  {
    "id": "fiscal-043",
    "modulo": "fiscal",
    "nivel": 1,
    "pergunta": "Em quais meses o IRPJ e a CSLL trimestrais aparecem na apuração?",
    "certa": "Somente no último mês do trimestre: março, junho, setembro e dezembro",
    "erradas": [
      "Em todos os meses do trimestre, com o valor acumulado até aquele mês",
      "Somente no primeiro mês do trimestre: janeiro, abril, julho e outubro",
      "Somente em dezembro, com a soma dos quatro trimestres do ano"
    ],
    "explicacao": "Mesmo que a empresa esteja configurada para calcular mensalmente, IRPJ e CSLL só aparecem no fechamento do trimestre.",
    "caminho": "Movimentos > Apuração",
    "fonte": "Relatório de apuração de impostos · visto em 443 treinamentos"
  },
  {
    "id": "fiscal-044",
    "modulo": "fiscal",
    "nivel": 3,
    "pergunta": "Ao informar a alíquota efetiva do Simples na emissão da nota, quantas casas decimais considerar?",
    "certa": "Só as duas primeiras, como 4,38% e não 4,381%",
    "erradas": [
      "As quatro casas, como 4,3812%, para bater com o PGDAS",
      "Nenhuma, arredondando para o percentual inteiro mais próximo",
      "As três casas, como 4,381%, para não perder precisão"
    ],
    "explicacao": "A alíquota efetiva para a nota usa duas casas. A alíquota de repartição do ISS aparece mais abaixo no relatório.",
    "caminho": "Movimentos > Apuração",
    "fonte": "Relatório de apuração de impostos · visto em 443 treinamentos"
  },
  {
    "id": "fiscal-045",
    "modulo": "fiscal",
    "nivel": 2,
    "pergunta": "Como o regime de caixa tributa as notas na apuração?",
    "certa": "Tributa apenas as parcelas que foram baixadas no período",
    "erradas": [
      "Tributa a nota inteira na data de emissão, como no regime de competência",
      "Tributa a nota inteira na data de vencimento da primeira parcela",
      "Tributa apenas as parcelas vencidas, mesmo que ainda não tenham sido pagas"
    ],
    "explicacao": "No regime de caixa a tributação segue o recebimento. Por isso as baixas de parcelas precisam estar em dia antes de apurar.",
    "caminho": "Movimentos > Baixas",
    "fonte": "Relatório de apuração de impostos · visto em 443 treinamentos"
  },
  {
    "id": "fiscal-046",
    "modulo": "fiscal",
    "nivel": 2,
    "pergunta": "Por que não usar a ordenação por Documento no relatório de acompanhamento de entradas?",
    "certa": "Porque cada fornecedor tem numeração própria, e a lista perde o sentido",
    "erradas": [
      "Porque o Domínio não consegue ordenar o relatório por número de documento",
      "Porque o relatório só aceita ordem por data nas entradas do mês corrente",
      "Porque a ordem por Documento exclui do relatório as notas com ST e DIFAL"
    ],
    "explicacao": "Prefira ordenar por CFOP, fornecedor ou série/documento. A ordem só por número mistura notas de fornecedores diferentes.",
    "caminho": "Relatórios > Acompanhamentos > Entradas",
    "fonte": "Relatório de acompanhamento de entradas · visto em 349 treinamentos"
  },
  {
    "id": "fiscal-047",
    "modulo": "fiscal",
    "nivel": 2,
    "pergunta": "O Domínio mostra a quantidade de notas importadas no período?",
    "certa": "Não: a conferência é feita pelo valor total do faturamento",
    "erradas": [
      "Sim, no rodapé do relatório de acompanhamento de entradas",
      "Sim, na calculadora amarela da apuração, por imposto",
      "Não, mas o Painel de Importação lista a quantidade por empresa"
    ],
    "explicacao": "Não há contagem de notas. A conferência é feita comparando o total de faturamento com o do sistema anterior ou com o cliente.",
    "caminho": "Relatórios > Acompanhamentos > Entradas",
    "fonte": "Relatório de acompanhamento de entradas · visto em 349 treinamentos"
  },
  {
    "id": "fiscal-048",
    "modulo": "fiscal",
    "nivel": 3,
    "pergunta": "Como o diferencial de alíquota aparece no relatório de entradas, e por quê?",
    "certa": "Como ICMS-SA (revenda) ou Diferencial de Alíquota (uso e consumo), pela DeSTDA",
    "erradas": [
      "Como DIFAL único para todas as notas de entrada, por causa do SPED Fiscal",
      "Como ICMS-ST (revenda) ou ICMS próprio (uso e consumo), por causa do PGDAS",
      "Não aparece no relatório de entradas, pois só entra direto na apuração do ICMS"
    ],
    "explicacao": "A separação é exigida pela DeSTDA: revenda aparece como ICMS-SA e uso e consumo como Diferencial de Alíquota.",
    "caminho": "Relatórios > Acompanhamentos > Entradas",
    "fonte": "Relatório de acompanhamento de entradas · visto em 349 treinamentos"
  },
  {
    "id": "fiscal-049",
    "modulo": "fiscal",
    "nivel": 3,
    "pergunta": "Uma empresa tem receitas com alíquotas diferentes de IRPJ e CSLL, como hospitalar e serviços. Como configurar?",
    "certa": "Acumuladores separados (6104, 6105) e IRPJ/CSLL fora do geral 6101, em nova vigência",
    "erradas": [
      "Criar uma empresa para cada alíquota e consolidar tudo na apuração da empresa matriz",
      "Manter só o acumulador geral 6101 e informar a presunção à mão em cada nota lançada",
      "Criar acumuladores separados e manter IRPJ e CSLL também no geral 6101, em nova vigência"
    ],
    "explicacao": "Cada alíquota de presunção precisa de acumulador próprio. O geral deixa de ter IRPJ/CSLL em uma nova vigência para não somar em duplicidade.",
    "caminho": "Arquivos > Acumuladores",
    "fonte": "Emissão de DARF tributos federais · visto em 337 treinamentos"
  },
  {
    "id": "fiscal-050",
    "modulo": "fiscal",
    "nivel": 2,
    "pergunta": "O que a replicação da configuração de importação sobrescreve nas empresas de destino?",
    "certa": "CFOP e contas da aba Contabilidade; os ajustes específicos precisam ser refeitos",
    "erradas": [
      "Apenas os produtos cadastrados em cada empresa, mantendo os acumuladores iguais",
      "Apenas os acumuladores de cada empresa, mantendo os CFOPs e as contas contábeis",
      "Nada, pois a replicação só preenche os campos que estiverem vazios na empresa"
    ],
    "explicacao": "A replicação sobrescreve CFOP e contas da aba Contabilidade. Replique só entre empresas do mesmo regime e refaça depois os ajustes de cada cliente.",
    "caminho": "Arquivos > Configuração de Importação > Replicar",
    "fonte": "Replicação de configuração entre empresas · visto em 298 treinamentos"
  },
  {
    "id": "fiscal-051",
    "modulo": "fiscal",
    "nivel": 2,
    "pergunta": "As configurações Paulistana e Padrão Nacional vêm na importação de perfil da empresa?",
    "certa": "Não: precisam ser replicadas manualmente a partir da empresa padrão",
    "erradas": [
      "Sim, vêm junto com os acumuladores no perfil da empresa",
      "Sim, mas só para empresas do Simples Nacional",
      "Não, e só podem ser configuradas empresa por empresa, à mão"
    ],
    "explicacao": "Essas configurações ficam fora do perfil. Replique da empresa modelo do regime correto.",
    "caminho": "Arquivos > Configuração de Importação > Replicar",
    "fonte": "Replicação de configuração entre empresas · visto em 298 treinamentos"
  },
  {
    "id": "fiscal-052",
    "modulo": "fiscal",
    "nivel": 2,
    "pergunta": "Ao gerar parcelas com vencimento na “mesma data da nota”, o que acontece?",
    "certa": "A baixa é automática (à vista), sem provisão; use “Informar” mais os dias",
    "erradas": [
      "A parcela fica provisionada normalmente até o dia do vencimento da nota",
      "O sistema gera a parcela, mas só baixa quando o cliente confirmar o pagamento",
      "O sistema recusa a geração, pois exige uma data posterior à data da nota fiscal"
    ],
    "explicacao": "Com a mesma data da nota, a parcela já nasce baixada. Para controlar o recebimento real, informe a quantidade de dias de vencimento.",
    "caminho": "Utilitários > Parcelas > Gerar Parcelas",
    "fonte": "Baixa de parcelas de notas · visto em 286 treinamentos"
  },
  {
    "id": "fiscal-053",
    "modulo": "fiscal",
    "nivel": 2,
    "pergunta": "Qual tipo de título usar ao gerar parcelas, para não dar erro na EFD Contribuições?",
    "certa": "Duplicata",
    "erradas": [
      "Boleto",
      "Promissória",
      "Cheque"
    ],
    "explicacao": "O tipo de título precisa ser Duplicata. Outro tipo gera erro na EFD Contribuições.",
    "caminho": "Utilitários > Parcelas > Gerar Parcelas",
    "fonte": "Baixa de parcelas de notas · visto em 286 treinamentos"
  },
  {
    "id": "fiscal-054",
    "modulo": "fiscal",
    "nivel": 2,
    "pergunta": "O escritório importa o extrato bancário para a contabilidade. O que fazer na baixa das parcelas?",
    "certa": "Não gerar lançamento contábil na baixa, deixando só o controle financeiro",
    "erradas": [
      "Gerar o lançamento na baixa, para a contabilidade refletir o pagamento",
      "Gerar o lançamento só nas baixas de entradas e não nas de saídas",
      "Gerar o lançamento na baixa e excluir depois o do extrato bancário"
    ],
    "explicacao": "Se a baixa também gerar lançamento, o mesmo pagamento é contabilizado duas vezes: pelo extrato e pela baixa.",
    "caminho": "Movimentos > Baixas",
    "fonte": "Baixa de parcelas de notas · visto em 286 treinamentos"
  },
  {
    "id": "fiscal-055",
    "modulo": "fiscal",
    "nivel": 1,
    "pergunta": "O que o SPED Fiscal exige antes de ser gerado?",
    "certa": "Que a apuração do período esteja processada e a classificação correta",
    "erradas": [
      "Que o período anterior do SPED já tenha sido transmitido",
      "Que todas as notas tenham sido contabilizadas e conciliadas",
      "Que o inventário do ano tenha sido lançado no módulo Patrimônio"
    ],
    "explicacao": "Faça a apuração (Movimentos > Apuração) antes. O sistema salva o arquivo com nome genérico; renomeie para não sobrescrever o do mês anterior.",
    "caminho": "Relatórios > Informativos > Federais > SPED Fiscal",
    "fonte": "Geração de SPED Fiscal EFD ICMS IPI · visto em 278 treinamentos"
  },
  {
    "id": "fiscal-056",
    "modulo": "fiscal",
    "nivel": 2,
    "pergunta": "O validador do SPED apontou avisos e erros. O que impede o envio?",
    "certa": "Apenas os erros; os avisos não impedem o envio",
    "erradas": [
      "Apenas os avisos; os erros são só informativos",
      "Os dois impedem o envio até a correção",
      "Nenhum dos dois, pois o validador só confere o layout"
    ],
    "explicacao": "Avisos não bloqueiam a transmissão. Os erros precisam ser corrigidos antes do envio.",
    "caminho": "Relatórios > Informativos > Federais > SPED Fiscal",
    "fonte": "Geração de SPED Fiscal EFD ICMS IPI · visto em 278 treinamentos"
  },
  {
    "id": "fiscal-057",
    "modulo": "fiscal",
    "nivel": 2,
    "pergunta": "Depois de reimportar notas com “Sobrescrever registros existentes” em Movimentos, o que fazer?",
    "certa": "Desmarcar o “Sobrescrever” em Configurações, senão ele reprocessa notas repetidas depois",
    "erradas": [
      "Manter a opção marcada para sempre, assim as próximas importações já virem corrigidas",
      "Desmarcar apenas no fechamento do mês, antes da geração do SPED Fiscal e da EFD",
      "Marcar também em Cadastros, para os produtos acompanharem as notas importadas"
    ],
    "explicacao": "O “Sobrescrever” em Movimentos é temporário. Em Cadastros nunca se marca, pois apaga a configuração de produto e tributação.",
    "caminho": "Utilitários > Importação > Importação Padrão > Configurações",
    "fonte": "Reimportação de notas · visto em 224 treinamentos"
  },
  {
    "id": "fiscal-058",
    "modulo": "fiscal",
    "nivel": 2,
    "pergunta": "Alterou-se o acumulador de várias notas por utilitário. Os impostos e a contabilização se atualizam?",
    "certa": "Não: é preciso regerar a contabilidade e reprocessar a apuração",
    "erradas": [
      "Sim, os impostos e a contabilização se atualizam sozinhos",
      "Sim, mas só os impostos; a contabilização exige exclusão manual",
      "Não, e o único jeito é excluir e importar as notas outra vez"
    ],
    "explicacao": "A alteração em lote muda o acumulador, mas não recalcula impostos nem contabilização. Rode Regerar Lançamentos e reapure.",
    "caminho": "Utilitários > Alterar Notas",
    "fonte": "Reimportação de notas · visto em 224 treinamentos"
  },
  {
    "id": "fiscal-059",
    "modulo": "fiscal",
    "nivel": 2,
    "pergunta": "Onde habilitar a tributação por NCM nas empresas?",
    "certa": "Em Controle > Parâmetros > Personaliza, marcando impostos no cadastro conforme o NCM",
    "erradas": [
      "Em Arquivos > Produtos, marcando a tributação por NCM em cada produto cadastrado",
      "Em Controle > Parâmetros > Federal, marcando a opção de regime monofásico da NCM",
      "Em Arquivos > Acumuladores, marcando a tributação por NCM em cada um deles"
    ],
    "explicacao": "Depois de habilitar, as regras são criadas em Arquivos > Dados de Impostos por NCM. Se a mesma NCM tem regras diferentes, configure produto a produto.",
    "caminho": "Controle > Parâmetros > Personaliza",
    "fonte": "Configuração de tributação por NCM · visto em 218 treinamentos"
  },
  {
    "id": "fiscal-060",
    "modulo": "fiscal",
    "nivel": 3,
    "pergunta": "Como importar notas de importação com CFOP 3102?",
    "certa": "Por chave de acesso (espécie 36), e não por XML direto",
    "erradas": [
      "Por XML direto, como as demais entradas, e a base de PIS/COFINS vem pronta",
      "Por planilha, em Utilitários > Importação, com a espécie de nota fiscal comum",
      "Manualmente, nota a nota, pois o Domínio não importa notas de importação"
    ],
    "explicacao": "As notas de importação entram por chave de acesso, na espécie 36. A base de PIS/COFINS pode ser corrigida em Utilitários > Alterar Notas.",
    "caminho": "Utilitários > Importação",
    "fonte": "Configuração de tributação por NCM · visto em 218 treinamentos"
  },
  {
    "id": "fiscal-061",
    "modulo": "fiscal",
    "nivel": 2,
    "pergunta": "Onde precisam estar marcados os impostos retidos para a importação considerá-los?",
    "certa": "Nos dois lugares: nos Parâmetros da empresa e no acumulador",
    "erradas": [
      "Só no acumulador, pois os Parâmetros não influenciam a retenção",
      "Só nos Parâmetros, pois o acumulador herda a configuração da empresa",
      "Na configuração de importação e no cadastro de cada fornecedor"
    ],
    "explicacao": "Para a retenção funcionar, o imposto precisa estar em Controle > Parâmetros e no acumulador. Na importação, marque “considerar definições retidas do acumulador”.",
    "caminho": "Controle > Parâmetros / Arquivos > Acumuladores > aba Impostos",
    "fonte": "Retenções federais IR PIS COFINS CSLL · visto em 228 treinamentos"
  },
  {
    "id": "fiscal-062",
    "modulo": "fiscal",
    "nivel": 3,
    "pergunta": "O que acontece se a natureza de rendimento da retenção do IRRF estiver errada?",
    "certa": "Dá erro no REINF, pois a nota fica sem vínculo com a natureza",
    "erradas": [
      "Dá erro só na ECF, que recusa a natureza informada na retenção",
      "Nada, pois a natureza só vale para o relatório de acompanhamento",
      "A retenção é cancelada e o IRRF é recolhido pelo Simples Nacional"
    ],
    "explicacao": "Natureza de rendimento é vinculada à nota para o REINF (por exemplo, 15004 para serviços e 12001 para aluguéis). Natureza errada deixa a nota sem vínculo.",
    "caminho": "Arquivos > Acumuladores > aba Impostos",
    "fonte": "Retenções federais IR PIS COFINS CSLL · visto em 228 treinamentos"
  },
  {
    "id": "fiscal-063",
    "modulo": "fiscal",
    "nivel": 1,
    "pergunta": "Onde se cria a regra de uma rotina automática e onde ela é agendada na Escrita Fiscal?",
    "certa": "Regra em Arquivos > Rotinas Automáticas; agendamento em Movimentos > Rotinas Automáticas",
    "erradas": [
      "Os dois passos em Movimentos > Rotinas Automáticas, juntos na mesma tela de cadastro da rotina",
      "Regra em Controle > Parâmetros > Federal; agendamento em Utilitários > Importação > NFe XML",
      "Regra em Movimentos > Apuração; agendamento em Relatórios > Informativos > Federais"
    ],
    "explicacao": "Primeiro se cria a regra (tipo de importação, categoria, pasta). Depois, em Movimentos, define-se o nome da execução, a frequência, o horário e a competência.",
    "caminho": "Arquivos > Rotinas Automáticas | Movimentos > Rotinas Automáticas",
    "fonte": "Cadastro de rotina automática · visto em 666 treinamentos"
  },
  {
    "id": "fiscal-064",
    "modulo": "fiscal",
    "nivel": 2,
    "pergunta": "Na rotina automática de importação de notas, qual opção evita que um registro com advertência trave a importação?",
    "certa": "Marcar “Importar registro com advertência” na aba Importação",
    "erradas": [
      "Desmarcar “Somente não importadas” na tela da rotina",
      "Marcar “Efetuar transmissão imediata” no cadastro da rotina",
      "Escolher a categoria Padrão Nacional em vez de Entradas"
    ],
    "explicacao": "Com essa opção marcada, notas que geram apenas advertência são importadas, e a rotina não para por causa delas.",
    "caminho": "Arquivos > Rotinas Automáticas > aba Importação",
    "fonte": "Cadastro de rotina automática · visto em 666 treinamentos"
  },
  {
    "id": "fiscal-065",
    "modulo": "fiscal",
    "nivel": 2,
    "pergunta": "Como montar as rotinas de importação de saídas, entradas e canceladas com a API da SIEG sem recriar tudo?",
    "certa": "Criar a primeira, copiar o registro, colar e alterar só a categoria (Entradas, Canceladas)",
    "erradas": [
      "Criar uma rotina única e marcar as três categorias na mesma regra de importação",
      "Criar cada uma do zero, pois o sistema não permite copiar registros de rotina",
      "Criar só a de saídas; entradas e canceladas são importadas junto automaticamente"
    ],
    "explicacao": "Uma rotina por tipo é o padrão. Para ganhar tempo, copie e cole a rotina pronta e troque a categoria; depois agende a execução em Movimentos.",
    "caminho": "Arquivos > Rotinas Automáticas > Novo",
    "fonte": "Outros assuntos — Escrita Fiscal · visto em 316 treinamentos"
  },
  {
    "id": "fiscal-066",
    "modulo": "fiscal",
    "nivel": 1,
    "pergunta": "Por que renomear o arquivo a cada mês ao gerar a EFD Contribuições?",
    "certa": "Para não sobrescrever o arquivo gerado no mês anterior",
    "erradas": [
      "Porque o programa validador da Receita só aceita nomes com o mês",
      "Porque o sistema bloqueia a geração enquanto o nome não for alterado",
      "Porque o arquivo antigo é apagado quando o período muda no cadastro"
    ],
    "explicacao": "Se o nome for o mesmo, o novo arquivo substitui o anterior. Uma boa prática é nomear com o mês, como janeiro_2025.txt.",
    "caminho": "Relatórios > Informativos Federais > EFD Contribuições",
    "fonte": "Geração de EFD Contribuições SPED PIS COFINS · visto em 258 treinamentos"
  },
  {
    "id": "fiscal-067",
    "modulo": "fiscal",
    "nivel": 2,
    "pergunta": "Na EFD Contribuições entregue em atraso, o que marcar na aba Opções?",
    "certa": "Gerar registro 0900 - Composição das receitas",
    "erradas": [
      "Possui períodos dispensados, mesmo com movimento na competência",
      "Retificadora, informando o recibo da entrega anterior",
      "Atividade preponderante 9, que cobre as entregas em atraso"
    ],
    "explicacao": "Para entrega em atraso marca-se o registro 0900. A opção de períodos dispensados é para empresa sem movimento, e a Retificadora exige o número do recibo.",
    "caminho": "Relatórios > Informativos Federais > EFD Contribuições > aba Opções",
    "fonte": "Geração de EFD Contribuições SPED PIS COFINS · visto em 258 treinamentos"
  },
  {
    "id": "fiscal-069",
    "modulo": "fiscal",
    "nivel": 1,
    "pergunta": "Ao puxar o cadastro da empresa pelo CNPJ, a data de abertura vem correta da Receita?",
    "certa": "Não; vem 01/01/1900 e precisa ser corrigida manualmente",
    "erradas": [
      "Sim, vem completa da Receita junto com o quadro societário",
      "Sim, mas só quando o captcha é digitado corretamente",
      "Não; o campo fica vazio, e o sistema grava a data do dia"
    ],
    "explicacao": "A data de abertura não é puxada automaticamente. Corrija-a no cadastro, pois ela alimenta o início das atividades nos parâmetros.",
    "caminho": "Escrita Fiscal > Novo (empresa) | Controle > Empresas",
    "fonte": "Implantação de empresa no fiscal · visto em 213 treinamentos"
  },
  {
    "id": "fiscal-070",
    "modulo": "fiscal",
    "nivel": 1,
    "pergunta": "Por que preencher o responsável legal (nome e CPF do sócio) no cadastro da empresa?",
    "certa": "É obrigatório para o DAS e para outras obrigações, como eSocial e REINF",
    "erradas": [
      "É exigido somente para empresas do Lucro Presumido e do Lucro Real",
      "É opcional, e serve apenas para constar no cabeçalho dos relatórios",
      "É preenchido automaticamente pela Receita e não deve ser alterado"
    ],
    "explicacao": "Sem nome e CPF do responsável legal, obrigações como o DAS ficam pendentes. Preencha logo no cadastro da empresa.",
    "caminho": "Controle > Empresas",
    "fonte": "Implantação de empresa no fiscal · visto em 213 treinamentos"
  },
  {
    "id": "fiscal-071",
    "modulo": "fiscal",
    "nivel": 2,
    "pergunta": "Qual a forma recomendada de dar ao escritório acesso aos serviços da empresa no e-CAC?",
    "certa": "Procuração eletrônica no e-CAC, aceita pelo contador no próprio perfil",
    "erradas": [
      "Certificado A1 de cada empresa cadastrado no computador do contador",
      "Compartilhar a senha do e-CAC do responsável legal com o escritório",
      "Certificado A3 em token, deixado conectado na máquina do servidor"
    ],
    "explicacao": "A procuração é a forma recomendada: o contador usa o certificado do escritório, sem depender do certificado de cada cliente. Sem ela, vincule o A1 da empresa em Autenticação.",
    "caminho": "e-CAC > Meus Serviços > Procuração | Controle > Certificado Digital",
    "fonte": "Configuração de certificado A1 A3 · visto em 213 treinamentos"
  },
  {
    "id": "fiscal-072",
    "modulo": "fiscal",
    "nivel": 2,
    "pergunta": "Na aba Impostos do Lucro Presumido de uma empresa de serviços, o que fazer com os impostos?",
    "certa": "Remover os que não se aplicam, como ICMS e IPI, mantendo PIS, Cofins, CSLL e IRPJ",
    "erradas": [
      "Manter todos marcados, pois remover algum impede a importação do perfil",
      "Remover PIS e Cofins, que no Presumido são apurados só pelo contador",
      "Remover IRPJ e CSLL, porque são calculados na Contabilidade, e não na Escrita"
    ],
    "explicacao": "Impostos que a atividade não usa devem sair da aba. Para o Presumido, ficam PIS, Cofins, CSLL e IRPJ (e CRF, quando houver).",
    "caminho": "Controle > Parâmetros > aba Impostos",
    "fonte": "Parametrização Lucro Presumido · visto em 201 treinamentos"
  },
  {
    "id": "fiscal-073",
    "modulo": "fiscal",
    "nivel": 2,
    "pergunta": "Com que frequência se informa a Receita Bruta Acumulada do Simples Nacional?",
    "certa": "Uma só vez; depois de gravada, o sistema a atualiza sozinho",
    "erradas": [
      "Todo mês, digitando o valor do extrato do PGDAS-D da empresa",
      "A cada trimestre, na mesma data da apuração de IRPJ e de CSLL",
      "Só quando houver mudança de anexo da atividade no Simples Nacional"
    ],
    "explicacao": "A receita acumulada é informada uma vez, importando do PGDAS ou digitando do extrato. Daí em diante o sistema atualiza automaticamente.",
    "caminho": "Movimentos > Outros > Simples Nacional > Receita Bruta Acumulada",
    "fonte": "Demonstrativo de faturamento · visto em 201 treinamentos"
  },
  {
    "id": "fiscal-074",
    "modulo": "fiscal",
    "nivel": 3,
    "pergunta": "Qual a ordem correta entre o parâmetro Personaliza e a Receita Bruta Acumulada?",
    "certa": "Primeiro o Personaliza; se a receita for feita antes, perde-se tudo",
    "erradas": [
      "Primeiro a receita acumulada; o Personaliza é ajustado depois, sem perda",
      "A ordem não importa, pois os dois são independentes",
      "Primeiro o Personaliza, mas só depois de fechar a primeira apuração"
    ],
    "explicacao": "A competência do primeiro cálculo deve ser a do parâmetro Personaliza (Inicial). Fazer a receita antes dele faz o sistema perder o que foi informado.",
    "caminho": "Controle > Parâmetros > Personaliza | Movimentos > Outros > Simples Nacional",
    "fonte": "Demonstrativo de faturamento · visto em 201 treinamentos"
  },
  {
    "id": "fiscal-075",
    "modulo": "fiscal",
    "nivel": 2,
    "pergunta": "Como interpretar o relatório Notas Não Lançadas?",
    "certa": "Inicial = Final: falta só aquela nota; diferentes: faltam todas as do intervalo",
    "erradas": [
      "Inicial = Final: nota duplicada; diferentes: notas já canceladas no período",
      "Inicial = Final: faltam todas as notas; diferentes: falta só a primeira",
      "As colunas mostram apenas o valor das notas, e não a numeração faltante"
    ],
    "explicacao": "O relatório mostra os saltos na numeração. Faixa de um único número significa uma nota faltante; faixa maior, todas as notas do intervalo.",
    "caminho": "Relatórios > Acompanhamentos > Notas Não Lançadas",
    "fonte": "Relatório de notas não lançadas · visto em 193 treinamentos"
  },
  {
    "id": "fiscal-076",
    "modulo": "fiscal",
    "nivel": 1,
    "pergunta": "O relatório Notas Não Lançadas mostra “Sem dados para emitir”. O que significa?",
    "certa": "Que a sequência de numeração está completa",
    "erradas": [
      "Que o período escolhido não tem nenhuma nota lançada",
      "Que o relatório precisa do certificado digital cadastrado",
      "Que as notas faltantes estão em outra série da empresa"
    ],
    "explicacao": "Sem dados significa que não há saltos. Vale rodar desde janeiro para pegar saltos entre meses e não apurar enquanto houver notas faltantes sem justificativa.",
    "caminho": "Relatórios > Acompanhamentos > Notas Não Lançadas",
    "fonte": "Relatório de notas não lançadas · visto em 193 treinamentos"
  },
  {
    "id": "fiscal-077",
    "modulo": "fiscal",
    "nivel": 2,
    "pergunta": "No Resumo por Acumulador de uma empresa do Simples, há valor nas colunas de ICMS, PIS e Cofins. O que isso indica?",
    "certa": "Que um acumulador está com alíquota configurada incorretamente",
    "erradas": [
      "Que a empresa deve migrar do Simples para o Lucro Presumido",
      "Que as notas foram importadas duas vezes no mesmo período",
      "Que o relatório está somando também o período do mês anterior"
    ],
    "explicacao": "No Simples Nacional, essas colunas devem ficar zeradas. Valor nelas aponta acumulador com alíquota indevida.",
    "caminho": "Relatórios > Acompanhamentos > Resumo por Acumulador",
    "fonte": "Relatório resumo por acumulador · visto em 192 treinamentos"
  },
  {
    "id": "fiscal-078",
    "modulo": "fiscal",
    "nivel": 1,
    "pergunta": "O Resumo por Acumulador separa os valores por mês quando o período abrange vários meses?",
    "certa": "Não; ele totaliza o período inteiro (set 105 + out 105 = 210)",
    "erradas": [
      "Sim, com uma coluna para cada mês do período informado",
      "Sim, mas só quando a opção Séries é desmarcada",
      "Não; ele traz apenas o último mês do período escolhido"
    ],
    "explicacao": "O relatório soma o período todo. Para comparar mês a mês, emita um mês por vez.",
    "caminho": "Relatórios > Acompanhamentos > Resumo por Acumulador",
    "fonte": "Relatório resumo por acumulador · visto em 192 treinamentos"
  },
  {
    "id": "fiscal-079",
    "modulo": "fiscal",
    "nivel": 2,
    "pergunta": "Na baixa de impostos via e-CAC, qual data informar no período para um imposto do mês 8 pago em setembro?",
    "certa": "A data do pagamento (por exemplo, 01/09)",
    "erradas": [
      "A data de vencimento original do imposto, em agosto",
      "O último dia da competência 08, ou seja, 31/08",
      "Qualquer data, pois o sistema usa a competência do imposto"
    ],
    "explicacao": "O período da consulta no e-CAC corresponde à data em que o pagamento foi feito. Confira valores e contas, trocando caixa por banco se necessário, antes de gravar.",
    "caminho": "Movimentos > Pagamento de Impostos via e-CAC",
    "fonte": "Baixa manual de impostos · visto em 189 treinamentos"
  },
  {
    "id": "fiscal-080",
    "modulo": "fiscal",
    "nivel": 2,
    "pergunta": "Qual o primeiro passo antes de enviar a EFD-Reinf?",
    "certa": "Processar a apuração e emitir o Relatório de Conferência para validar",
    "erradas": [
      "Gerar o arquivo da DCTF Web e importar os eventos dele para a Reinf",
      "Enviar o R1000 sem conferir e só depois fazer a apuração dos eventos",
      "Fechar a folha de pagamento do mês e marcar a Reinf como dispensada"
    ],
    "explicacao": "A apuração gera os eventos; o Relatório de Conferência permite validá-los antes do envio. No primeiro envio, ainda é preciso preencher Outros Dados.",
    "caminho": "Movimentos > Apuração | Relatórios > Informativos Federais > EFD-REINF",
    "fonte": "Geração e envio de EFD-Reinf · visto em 178 treinamentos"
  },
  {
    "id": "fiscal-081",
    "modulo": "fiscal",
    "nivel": 3,
    "pergunta": "O R1000 volta “invalidado” no envio da EFD-Reinf porque já existe no e-CAC. O que fazer?",
    "certa": "Colar o recibo já existente manualmente em Editar Recibo",
    "erradas": [
      "Excluir o R1000 no e-CAC e reenviar o evento pelo sistema",
      "Reenviar até o e-CAC aceitar, pois a validação é aleatória",
      "Gerar a Reinf como retificadora, com o R1000 em branco"
    ],
    "explicacao": "O sistema sempre tenta enviar o R1000. Se ele já está no e-CAC, o retorno é de invalidado; basta informar o recibo existente manualmente.",
    "caminho": "Relatórios > Informativos Federais > EFD-REINF > Enviar Arquivos",
    "fonte": "Geração e envio de EFD-Reinf · visto em 178 treinamentos"
  },
  {
    "id": "fiscal-082",
    "modulo": "fiscal",
    "nivel": 3,
    "pergunta": "O que configurar no acumulador antes de usar Movimentos > Outros > Impostos Calculados?",
    "certa": "Na aba Lançamentos do acumulador, marcar “Outros” e gravar",
    "erradas": [
      "Na aba Contabilidade do acumulador, marcar “Gerar lançamento”",
      "Em Controle > Parâmetros, marcar “Permitir ajuste fiscal manual”",
      "No cadastro da empresa, habilitar o módulo de Apuração Especial"
    ],
    "explicacao": "Sem a marcação “Outros” no acumulador, ele não aparece para ajuste manual. A competência do lançamento é a data final do mês (por exemplo, 31/01/2026).",
    "caminho": "Arquivos > Acumuladores > aba Lançamentos",
    "fonte": "Lançamento manual de ajuste fiscal · visto em 177 treinamentos"
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
    "id": "folha-022",
    "modulo": "folha",
    "nivel": 2,
    "pergunta": "O código interno de uma rubrica no Domínio é sempre igual ao código dela no eSocial?",
    "certa": "Não: o código interno pode diferir, como Domínio 15 e eSocial 56",
    "erradas": [
      "Sim: o Domínio usa o mesmo código da tabela de rubricas do eSocial",
      "Sim, desde que a rubrica tenha sido copiada de uma rubrica padrão",
      "Não, e o eSocial recusa rubricas com código diferente do cadastro"
    ],
    "explicacao": "O código interno é do Domínio; o eSocial tem o seu. Por isso, na primeira folha o sistema envia as rubricas do Domínio ao eSocial automaticamente.",
    "caminho": "Arquivo > Rubricas",
    "fonte": "Criação e configuração de rubrica · visto em 1162 treinamentos"
  },
  {
    "id": "folha-023",
    "modulo": "folha",
    "nivel": 2,
    "pergunta": "As rubricas são compartilhadas entre as empresas. Onde criar uma rubrica nova para todos usarem?",
    "certa": "Na empresa 9995, importando-a depois para as demais empresas",
    "erradas": [
      "Em cada empresa, separadamente, para manter as bases individuais",
      "Na empresa matriz do escritório, que replica sozinha para as outras",
      "Na empresa 9994, que é a padrão da Contabilidade e do Fiscal"
    ],
    "explicacao": "A tabela de rubricas é única. Cria-se na empresa padrão 9995 e importa-se para as demais, em vez de refazer empresa por empresa.",
    "caminho": "Arquivo > Rubricas",
    "fonte": "Criação e configuração de rubrica · visto em 1162 treinamentos"
  },
  {
    "id": "folha-024",
    "modulo": "folha",
    "nivel": 3,
    "pergunta": "Como calcular o adicional noturno com redução da hora noturna no Domínio?",
    "certa": "Copiar a rubrica padrão, usar fórmula na base de cálculo e inserir o redutor 1,14",
    "erradas": [
      "Usar a rubrica padrão sem alterar nada, pois o redutor já vem aplicado nela",
      "Criar uma rubrica nova do zero e informar o redutor de 1,50 na base de cálculo",
      "Lançar as horas já reduzidas manualmente, em lançamento variável da competência"
    ],
    "explicacao": "A hora noturna reduzida é de 52,8 minutos, o que dá o redutor 1,14. Faça sobre uma cópia da rubrica padrão, com a base de cálculo em fórmula.",
    "caminho": "Arquivo > Rubricas",
    "fonte": "Criação e configuração de rubrica · visto em 1162 treinamentos"
  },
  {
    "id": "folha-025",
    "modulo": "folha",
    "nivel": 2,
    "pergunta": "Como o Domínio trata a folha complementar?",
    "certa": "Gera um recibo separado, ao contrário do SCI, que traz a complementar na mensal",
    "erradas": [
      "Soma a complementar dentro do recibo da folha mensal, assim como faz o SCI",
      "Não gera recibo para a complementar, apenas o extrato da competência do mês",
      "Gera a complementar em cima do recibo do adiantamento, dentro do mesmo mês"
    ],
    "explicacao": "Para a complementar, marque o tipo Complementar no cálculo. O recibo sai separado do da mensal.",
    "caminho": "Processos > Cálculo",
    "fonte": "Cálculo de folha mensal · visto em 1039 treinamentos"
  },
  {
    "id": "folha-026",
    "modulo": "folha",
    "nivel": 2,
    "pergunta": "Os tributos federais da folha são calculados junto com o cálculo da folha?",
    "certa": "Sim, no mesmo cálculo, o que difere do IOB",
    "erradas": [
      "Não, é preciso um cálculo à parte, em Processos > Tributos",
      "Sim, mas só para empresas do Lucro Real e do Presumido",
      "Não, eles vêm do Fiscal depois da integração da competência"
    ],
    "explicacao": "No Domínio os tributos federais calculam junto com a folha. Depois do cálculo, o sistema pergunta se quer ver a apuração dos tributos.",
    "caminho": "Processos > Cálculo",
    "fonte": "Cálculo de folha mensal · visto em 1039 treinamentos"
  },
  {
    "id": "folha-027",
    "modulo": "folha",
    "nivel": 3,
    "pergunta": "No primeiro mês de uma empresa em regime de caixa (paga no 5º dia útil), a que mês se refere o S-1210?",
    "certa": "Ao mês anterior; use o identificador validado em outro banco ou envie o S-1210 pelo sistema anterior",
    "erradas": [
      "Ao mesmo mês da folha; envie o S-1210 normalmente, junto com o S-1200 da competência, sem ajustes",
      "Ao mês seguinte; envie o S-1210 somente depois do fechamento total da folha do mês anterior",
      "Ao mês anterior; envie o S-1210 pelo Domínio e exclua o evento já enviado pelo outro sistema"
    ],
    "explicacao": "Como o pagamento do mês acontece no mês seguinte, o primeiro S-1210 é do mês anterior. Há duas saídas: o identificador validado em outro banco ou o envio pelo sistema anterior (marcando no S-1299 que as informações foram enviadas em outro banco).",
    "caminho": "Relatórios > eSocial > Eventos Periódicos",
    "fonte": "Envio de eventos periódicos · visto em 660 treinamentos"
  },
  {
    "id": "folha-028",
    "modulo": "folha",
    "nivel": 3,
    "pergunta": "O eSocial aceita um evento por CPF por mês. A folha já foi enviada pelo sistema anterior. O que fazer antes de enviar pelo Domínio?",
    "certa": "Excluir os eventos já enviados antes de reenviar pelo Domínio",
    "erradas": [
      "Enviar pelo Domínio e esperar o eSocial substituir o anterior",
      "Desmarcar o S-1200 e enviar só o S-1210 e o S-1299",
      "Enviar como retificação, mantendo os eventos do outro sistema"
    ],
    "explicacao": "Para não duplicar, os eventos do outro sistema precisam ser excluídos. Se a ideia é manter o que já está no portal, valide manualmente com o recibo.",
    "caminho": "Relatórios > eSocial > Eventos Periódicos",
    "fonte": "Envio de eventos periódicos · visto em 660 treinamentos"
  },
  {
    "id": "folha-029",
    "modulo": "folha",
    "nivel": 2,
    "pergunta": "O envio do eSocial está lento. Onde verificar se o portal está instável?",
    "certa": "No botão Agente do Painel de Pendências, que mostra “Portal eSocial Instável”",
    "erradas": [
      "No ícone ONV (play) do rodapé, que mostra o status do portal",
      "Em Controle > Autenticação, onde o certificado indica a instabilidade",
      "No relatório de Eventos Periódicos, na aba de eventos invalidados"
    ],
    "explicacao": "O servidor do eSocial costuma ficar instável até o dia 15, e o envio demora. O botão Agente do Painel informa quando o portal está instável.",
    "caminho": "Painel de Pendências > Agente",
    "fonte": "Envio de eventos periódicos · visto em 660 treinamentos"
  },
  {
    "id": "folha-030",
    "modulo": "folha",
    "nivel": 2,
    "pergunta": "Em qual grupo do faseamento do eSocial estão as empresas do Simples Nacional?",
    "certa": "No Grupo 3, junto com empregador pessoa física",
    "erradas": [
      "No Grupo 1, junto com as empresas do Lucro Real",
      "No Grupo 2, junto com as empresas do Lucro Presumido",
      "No Grupo 4, junto com os órgãos públicos e entidades"
    ],
    "explicacao": "Grupos 1 e 2 são de Lucro Real e Presumido; o Grupo 3 reúne o Simples Nacional, empregador PF e as demais empresas.",
    "caminho": "Controle > Parâmetros > aba Faseamento",
    "fonte": "Configuração inicial de parâmetros da empresa · visto em 490 treinamentos"
  },
  {
    "id": "folha-031",
    "modulo": "folha",
    "nivel": 3,
    "pergunta": "O regime tributário da empresa mudou. O faseamento do eSocial também muda?",
    "certa": "Não: o faseamento permanece o do primeiro envio ao eSocial",
    "erradas": [
      "Sim, o faseamento acompanha o regime e muda na nova vigência",
      "Sim, mas só na troca do Simples Nacional para o Lucro Real",
      "Não, mas o eSocial exige reenviar o S-1000 com o novo grupo"
    ],
    "explicacao": "O faseamento não muda com o regime. Consulte o portal do eSocial para saber o grupo correto, e não o sistema anterior.",
    "caminho": "Controle > Parâmetros > aba Faseamento",
    "fonte": "Configuração inicial de parâmetros da empresa · visto em 490 treinamentos"
  },
  {
    "id": "folha-032",
    "modulo": "folha",
    "nivel": 2,
    "pergunta": "Onde deve estar o certificado digital para o envio do eSocial?",
    "certa": "Em Controle > Autenticação",
    "erradas": [
      "Em Controle > Parâmetros > aba Geral",
      "Em Arquivo > Serviços > INSS",
      "Em Utilitários > Importação de Dados"
    ],
    "explicacao": "O certificado fica em Controle > Autenticação. Na aba eSocial dos Parâmetros escolhe-se se o certificado é do contador (procuração) ou da empresa.",
    "caminho": "Controle > Autenticação",
    "fonte": "Configuração inicial de parâmetros da empresa · visto em 490 treinamentos"
  },
  {
    "id": "folha-033",
    "modulo": "folha",
    "nivel": 2,
    "pergunta": "Qual o prazo do backup do sistema anterior para a conversão e quando ele deve ser feito?",
    "certa": "Com até 5 dias de antecedência, depois do fechamento da folha",
    "erradas": [
      "Com até 30 dias de antecedência, antes do fechamento da folha",
      "No mesmo dia da conversão, antes de calcular a primeira folha",
      "Com até 15 dias de antecedência, em qualquer fase da folha"
    ],
    "explicacao": "O backup deve ser feito depois do fechamento da folha. Quanto mais recente, mais atualizada a conversão.",
    "caminho": "Planilha de conversão e backup do sistema anterior",
    "fonte": "Conversão de dados de sistema anterior · visto em 427 treinamentos"
  },
  {
    "id": "folha-034",
    "modulo": "folha",
    "nivel": 2,
    "pergunta": "Uma empresa já cadastrada manualmente no Domínio pode constar na planilha de conversão?",
    "certa": "Não: a conversão não junta dados, ela sobrescreve o que existe",
    "erradas": [
      "Sim, a conversão soma os dados novos aos que já existem",
      "Sim, desde que o código da empresa seja o mesmo",
      "Não, mas a conversão preserva os cadastros manuais"
    ],
    "explicacao": "Empresas cadastradas na mão devem ficar de fora da planilha. O código da empresa é único (folha, fiscal e contábil) e não pode mudar sem excluir a empresa.",
    "caminho": "Planilha de conversão",
    "fonte": "Conversão de dados de sistema anterior · visto em 427 treinamentos"
  },
  {
    "id": "folha-035",
    "modulo": "folha",
    "nivel": 3,
    "pergunta": "As médias importadas na conversão exigem qual cuidado?",
    "certa": "Definir uma data de corte, para não duplicar com as folhas já calculadas no Domínio",
    "erradas": [
      "Recalcular todas as médias manualmente antes de calcular a primeira folha",
      "Importar as médias somente depois do primeiro fechamento da folha",
      "Excluir as médias antigas sempre que a empresa tiver rescisão no mês"
    ],
    "explicacao": "As médias importadas servem só para compor cálculos futuros (férias, rescisão, 13º). Sem data de corte, elas se somam às folhas já calculadas no Domínio.",
    "caminho": "Planilha de conversão",
    "fonte": "Conversão de dados de sistema anterior · visto em 427 treinamentos"
  },
  {
    "id": "folha-036",
    "modulo": "folha",
    "nivel": 2,
    "pergunta": "Qual a diferença entre o botão Recibo e o menu Relatórios > Recibos > Folha?",
    "certa": "O botão gera só o recibo do registro ativo; o menu, o de todos os selecionados",
    "erradas": [
      "O botão gera o recibo de todos os empregados; o menu gera apenas o do registro ativo",
      "O botão gera o recibo em PDF; o menu gera apenas a visualização na tela do sistema",
      "Os dois geram o recibo de todos, mas o botão só funciona na folha mensal"
    ],
    "explicacao": "O atalho no cálculo emite o recibo do colaborador em tela. Para a empresa toda, use o menu de relatórios.",
    "caminho": "Relatórios > Recibos > Folha",
    "fonte": "Emissão de holerite e contracheque · visto em 421 treinamentos"
  },
  {
    "id": "folha-037",
    "modulo": "folha",
    "nivel": 1,
    "pergunta": "Por que marcar “Não emitir demitido” ao gerar os recibos da folha?",
    "certa": "Porque o demitido recebe o termo de rescisão, e não o recibo da folha",
    "erradas": [
      "Porque o demitido não pode mais receber recibo de pagamento",
      "Porque o recibo do demitido só é emitido depois do fechamento",
      "Porque o demitido sai em um relatório separado, em outro menu"
    ],
    "explicacao": "Na rescisão, os valores saem no termo de rescisão. Marcar a opção evita recibo duplicado do mesmo colaborador.",
    "caminho": "Relatórios > Recibos > Folha",
    "fonte": "Emissão de holerite e contracheque · visto em 421 treinamentos"
  },
  {
    "id": "folha-038",
    "modulo": "folha",
    "nivel": 3,
    "pergunta": "Uma alteração salarial tem data anterior a outra já cadastrada para o colaborador. O que acontece?",
    "certa": "Não aceita; exclua as posteriores, inclua a desejada e reinclua as posteriores",
    "erradas": [
      "Aceita e reordena as alterações automaticamente pela data de cada uma delas",
      "Aceita, mas marca a alteração como retroativa e recalcula o histórico inteiro",
      "Não aceita, e a única saída é excluir todo o histórico salarial do colaborador"
    ],
    "explicacao": "A ordem cronológica é obrigatória. Se existir rescisão calculada, ela também precisa ser excluída antes de lançar a alteração.",
    "caminho": "Processos > Alteração Salarial > Individual",
    "fonte": "Alteração salarial individual · visto em 394 treinamentos"
  },
  {
    "id": "folha-039",
    "modulo": "folha",
    "nivel": 2,
    "pergunta": "A alteração salarial em grupo envia algo ao eSocial?",
    "certa": "Sim, envia para todos automaticamente; teste antes com 2 ou 3 colaboradores",
    "erradas": [
      "Não, o envio só acontece quando o cálculo da folha é fechado na competência",
      "Sim, mas envia só para os colaboradores com salário acima do piso da categoria",
      "Não, o envio de alteração salarial é sempre manual, pelo Painel de Pendências"
    ],
    "explicacao": "Como o envio é automático para todos os alterados, vale testar com poucos colaboradores antes de fazer em massa.",
    "caminho": "Processos > Alteração Salarial > Em Grupo",
    "fonte": "Alteração salarial individual · visto em 394 treinamentos"
  },
  {
    "id": "folha-040",
    "modulo": "folha",
    "nivel": 3,
    "pergunta": "O pró-labore usa múltiplos do salário mínimo no Domínio?",
    "certa": "Não: o valor é fixo no Domínio, então o reajuste é manual por faixa",
    "erradas": [
      "Sim, o valor acompanha o salário mínimo e é reajustado sozinho todo ano",
      "Sim, mas só quando a empresa é optante do Simples Nacional na competência",
      "Não, mas o sistema reajusta sozinho pelo índice da convenção coletiva"
    ],
    "explicacao": "Como o pró-labore é valor fixo, o reajuste do mínimo é feito na alteração salarial em grupo, por faixa de valor.",
    "caminho": "Processos > Alteração Salarial > Em Grupo",
    "fonte": "Alteração salarial individual · visto em 394 treinamentos"
  },
  {
    "id": "folha-041",
    "modulo": "folha",
    "nivel": 1,
    "pergunta": "Qual a diferença entre lançamento Mensal e lançamento Fixo?",
    "certa": "O mensal não se repete; o fixo se repete automaticamente nos meses seguintes",
    "erradas": [
      "O mensal se repete todo mês; o fixo vale uma única competência",
      "O mensal vale só para empregados; o fixo vale só para contribuintes",
      "O mensal é lançado na folha; o fixo é lançado na rescisão"
    ],
    "explicacao": "Para valores recorrentes (como uma mensalidade), use Fixo, informando a data de início. Para o que acontece uma vez, use Mensal.",
    "caminho": "Processos > Lançamentos > Por Empregado",
    "fonte": "Lançamento variável por empregado · visto em 341 treinamentos"
  },
  {
    "id": "folha-042",
    "modulo": "folha",
    "nivel": 2,
    "pergunta": "Um lançamento fixo é excluído no cadastro do empregado. O que acontece com o lançamento feito em Processos > Lançamentos?",
    "certa": "Também é excluído, pois os lançamentos fixos são compartilhados",
    "erradas": [
      "Continua existindo, pois os dois são cadastros totalmente independentes",
      "É desativado, mas continua visível no histórico do empregado",
      "É convertido em lançamento mensal da competência atual do empregado"
    ],
    "explicacao": "Os lançamentos fixos ficam na aba Lançamentos Fixos do cadastro e também em Processos > Lançamentos. Excluir em um lugar exclui do outro.",
    "caminho": "Processos > Lançamentos > Por Empregado",
    "fonte": "Lançamento variável por empregado · visto em 341 treinamentos"
  },
  {
    "id": "folha-043",
    "modulo": "folha",
    "nivel": 3,
    "pergunta": "O que a reconversão faz com os lançamentos da competência?",
    "certa": "Apaga todos os lançamentos da competência, até os feitos antes da reconversão",
    "erradas": [
      "Mantém todos os lançamentos e atualiza só os cadastros dos empregados",
      "Apaga somente os lançamentos feitos depois de a reconversão ser iniciada",
      "Mantém os lançamentos fixos e apaga apenas os lançamentos mensais variáveis"
    ],
    "explicacao": "Antes de reconverter, anote ou exporte os lançamentos da competência: eles não são preservados.",
    "caminho": "Processos > Lançamentos",
    "fonte": "Lançamento variável por empregado · visto em 341 treinamentos"
  },
  {
    "id": "folha-044",
    "modulo": "folha",
    "nivel": 2,
    "pergunta": "O cálculo travou numa competência. Qual é a situação em que o sistema trava o cálculo?",
    "certa": "Quando a folha já foi enviada ao eSocial; se só foi calculada, dá para recalcular",
    "erradas": [
      "Quando a folha da competência foi calculada duas vezes no mesmo dia útil",
      "Quando a competência anterior ainda tem recibo sem publicar no portal do cliente",
      "Quando existe funcionário em período de férias dentro da competência calculada"
    ],
    "explicacao": "Depois de enviada ao eSocial, a competência fica fechada. Antes disso, é possível recalcular normalmente.",
    "caminho": "Processos > Cálculo",
    "fonte": "Lançamento variável por empregado · visto em 341 treinamentos"
  },
  {
    "id": "folha-045",
    "modulo": "folha",
    "nivel": 1,
    "pergunta": "Em férias de 20 dias com abono pecuniário, quantos dias de abono o sistema aplica automaticamente?",
    "certa": "10 dias",
    "erradas": [
      "5 dias",
      "15 dias",
      "30 dias"
    ],
    "explicacao": "Se as férias forem de 20 dias, o abono de 10 dias é automático. As opções de gozo são 30, 20 ou 15 dias.",
    "caminho": "Processos > Férias > Individual",
    "fonte": "Cálculo de férias · visto em 323 treinamentos"
  },
  {
    "id": "folha-046",
    "modulo": "folha",
    "nivel": 2,
    "pergunta": "O recibo de férias do Domínio mostra duas linhas, “Férias” e “Média”. Como comparar com o Contmatic?",
    "certa": "Somando as duas linhas, pois o Domínio desmembra o salário e as médias",
    "erradas": [
      "Comparando só a linha “Férias”, pois a média é informativa",
      "Comparando só a linha “Média”, pois ela traz o valor total",
      "Subtraindo a média da linha “Férias” para igualar ao Contmatic"
    ],
    "explicacao": "O Domínio separa salário e médias no recibo, enquanto o Contmatic traz tudo junto. A soma é que se compara.",
    "caminho": "Processos > Férias > Individual",
    "fonte": "Cálculo de férias · visto em 323 treinamentos"
  },
  {
    "id": "folha-047",
    "modulo": "folha",
    "nivel": 3,
    "pergunta": "O Contmatic calculava as férias por 31 dias e o Domínio por 30. Onde ajustar o divisor?",
    "certa": "Em Controle > Parâmetros > Cálculo, ou na Convenção Coletiva, na proporcionalidade",
    "erradas": [
      "Em Arquivo > Rubricas, alterando o divisor dentro da rubrica de férias do empregado",
      "No cadastro do empregado, aba Profissionais, no campo de divisor das férias",
      "Em Processos > Férias, a cada novo cálculo, informando o divisor desejado à mão"
    ],
    "explicacao": "O padrão do Domínio é 30 dias. Quando o sistema anterior usava 31, ajuste em Parâmetros > Cálculo ou na Convenção Coletiva para a diferença deixar de aparecer.",
    "caminho": "Controle > Parâmetros > Cálculo",
    "fonte": "Cálculo de férias · visto em 323 treinamentos"
  },
  {
    "id": "folha-048",
    "modulo": "folha",
    "nivel": 3,
    "pergunta": "Por que a folhinha do eSocial nunca fica verde numa base compartilhada?",
    "certa": "Porque outros usuários da base têm pendências, e a folhinha reflete a base toda",
    "erradas": [
      "Porque o certificado digital da base compartilhada não é aceito pelo eSocial",
      "Porque a folhinha só fica verde depois que o S-1299 é validado na competência",
      "Porque o Painel só atualiza a cor da folhinha depois de reiniciar o sistema"
    ],
    "explicacao": "A folhinha é verde quando está tudo certo, amarela quando outra empresa tem erro e vermelha quando a empresa ativa tem erro. Em base compartilhada, sempre há pendência de alguém.",
    "caminho": "Folhinha no canto inferior direito / Painel de Pendências",
    "fonte": "Painel de pendências eSocial · visto em 285 treinamentos"
  },
  {
    "id": "folha-049",
    "modulo": "folha",
    "nivel": 3,
    "pergunta": "Em que situação é permitido validar manualmente um evento com recibo fictício?",
    "certa": "Em alteração contratual, salarial ou cadastral duplicada; nunca em admissão ou rescisão",
    "erradas": [
      "Em qualquer evento duplicado, inclusive admissão e rescisão, se houver justificativa",
      "Apenas em admissão e rescisão, que são os eventos mais frequentes na folha",
      "Somente em eventos periódicos, como o S-1200 e o S-1210, nunca nos de tabela"
    ],
    "explicacao": "O recibo fictício (padrão 1.1.0000000000000000001, alterando só o último dígito) não envia nada ao governo. Serve só para destravar eventos de alteração.",
    "caminho": "Painel de Pendências > Validar Manualmente",
    "fonte": "Painel de pendências eSocial · visto em 285 treinamentos"
  },
  {
    "id": "folha-050",
    "modulo": "folha",
    "nivel": 3,
    "pergunta": "Um afastamento ou uma férias aparece duplicado no Painel de Pendências. Como tratar?",
    "certa": "Não excluir: validar manualmente, pois excluir trava eventos futuros como a rescisão",
    "erradas": [
      "Excluir o evento e reenviar, pois o sistema gera uma retificação de forma automática",
      "Ignorar o evento, pois a duplicidade se resolve sozinha na virada do mês seguinte",
      "Excluir o evento e validar manualmente somente o retorno do afastamento depois"
    ],
    "explicacao": "Afastamentos e férias devem ser validados com o recibo do portal. Alterações contratuais, ao contrário, podem ser excluídas.",
    "caminho": "Painel de Pendências > Validar Manualmente",
    "fonte": "Validação manual de eventos eSocial · visto em 271 treinamentos"
  },
  {
    "id": "folha-051",
    "modulo": "folha",
    "nivel": 1,
    "pergunta": "Em que unidade se informa a duração dos horários e jornadas?",
    "certa": "Em minutos (480 minutos = 8 horas)",
    "erradas": [
      "Em horas inteiras (8 = 8 horas)",
      "Em horas e minutos (08:00)",
      "Em dias de trabalho (1 = 1 dia)"
    ],
    "explicacao": "A duração é sempre em minutos, e o sistema calcula o restante. Horários são por empresa, não compartilhados.",
    "caminho": "Arquivo > Horários / Arquivo > Jornadas",
    "fonte": "Cadastro de jornada e horário de trabalho · visto em 265 treinamentos"
  },
  {
    "id": "folha-052",
    "modulo": "folha",
    "nivel": 3,
    "pergunta": "Como cadastrar o horário de um trabalhador intermitente?",
    "certa": "Criar o horário sem entrada e saída, só com a duração em minutos, e testar o envio",
    "erradas": [
      "Criar o horário normal de 8 às 18 e ajustar na folha a cada mês trabalhado",
      "Não cadastrar horário, pois o trabalhador intermitente não precisa de jornada definida",
      "Criar a jornada 12x36 e marcar a opção de trabalhador intermitente no cadastro"
    ],
    "explicacao": "No intermitente a duração varia, então o horário carrega só os minutos. Vale testar o envio ao eSocial depois de cadastrar.",
    "caminho": "Arquivo > Horários",
    "fonte": "Cadastro de jornada e horário de trabalho · visto em 265 treinamentos"
  },
  {
    "id": "folha-053",
    "modulo": "folha",
    "nivel": 3,
    "pergunta": "Ao copiar a configuração da integração contábil da folha de uma empresa padrão, qual cuidado vale?",
    "certa": "Copiar um flag por vez, sem copiar Layout de Arquivo nem Pagamento de Folha",
    "erradas": [
      "Copiar todos os flags de uma vez, para manter tudo igual ao modelo",
      "Copiar apenas o flag de Provisões, pois os demais são individuais",
      "Copiar Layout de Arquivo e Pagamento de Folha junto com a Folha"
    ],
    "explicacao": "Os flags (Folha, Empresa, Provisões) são copiados separadamente. Layout de Arquivo e Pagamento de Folha não devem ser copiados.",
    "caminho": "Arquivo > Contabilidade > Configurar Integração",
    "fonte": "Integração contábil da folha · visto em 264 treinamentos"
  },
  {
    "id": "folha-054",
    "modulo": "folha",
    "nivel": 3,
    "pergunta": "Quando a folha integra com um financeiro externo, qual evento de adiantamento deve ser mantido na integração?",
    "certa": "Só o “Desconto de adiantamento”; o “Adiantamento de salário” sai, pois duplica",
    "erradas": [
      "Os dois eventos, para a contabilidade refletir tanto o pagamento quanto o desconto",
      "Só o “Adiantamento de salário”; o desconto é lançado depois pelo financeiro",
      "Nenhum dos dois, pois o financeiro externo já faz todos os lançamentos sozinho"
    ],
    "explicacao": "Se o adiantamento já vem do financeiro externo, manter o evento “Adiantamento de salário” duplica o lançamento.",
    "caminho": "Arquivo > Contabilidade > Configurar Integração",
    "fonte": "Integração contábil da folha · visto em 264 treinamentos"
  },
  {
    "id": "folha-055",
    "modulo": "folha",
    "nivel": 2,
    "pergunta": "Um colaborador foi cadastrado sem endereço completo. Qual a consequência?",
    "certa": "O cadastro fica preliminar e não envia remuneração nem pagamento ao eSocial",
    "erradas": [
      "O cadastro é recusado e o colaborador não pode ser gravado no sistema",
      "O cadastro grava normalmente, mas o recibo de pagamento sai sem endereço",
      "O cadastro fica ativo, mas o eSocial passa a exigir apenas a admissão"
    ],
    "explicacao": "O endereço completo é obrigatório. Sem ele, o evento fica preliminar e o colaborador não entra nos eventos periódicos.",
    "caminho": "Cadastro do funcionário",
    "fonte": "Envio de eventos não periódicos · visto em 261 treinamentos"
  },
  {
    "id": "folha-056",
    "modulo": "folha",
    "nivel": 2,
    "pergunta": "Quando o envio automático da admissão ao eSocial ocorre?",
    "certa": "Em admissão com 2 dias ou menos de antecedência; o ideal é enviar com 3 ou mais dias",
    "erradas": [
      "Sempre, no momento em que o cadastro do colaborador é gravado no sistema",
      "Apenas no fechamento da folha do mês em que ocorreu a admissão do colaborador",
      "Somente quando o cliente confirma o envio pelo portal, depois de conferir o cadastro"
    ],
    "explicacao": "O prazo para enviar a admissão é curto. O sistema pergunta se quer enviar quando a data é próxima; o recomendado é cadastrar com antecedência.",
    "caminho": "Cadastro do funcionário",
    "fonte": "Envio de eventos não periódicos · visto em 261 treinamentos"
  },
  {
    "id": "folha-057",
    "modulo": "folha",
    "nivel": 2,
    "pergunta": "Qual é a ordem obrigatória de envio no cadastramento inicial do eSocial?",
    "certa": "S-1000, depois S-1005 e depois S-1020, aguardando cada um processar",
    "erradas": [
      "S-1005, depois S-1000 e depois S-1020, aguardando cada um processar",
      "S-1020, depois S-1005 e depois S-1000, de uma única vez",
      "S-1000, S-1005 e S-1020 de uma vez só, sem esperar"
    ],
    "explicacao": "Sem o S-1000 validado (com recibo), o sistema não envia admissões nem folha. Convertidas de outro sistema normalmente voltam como Duplicado, o que é esperado.",
    "caminho": "Relatórios > eSocial > Cadastramento Inicial",
    "fonte": "Cadastramento inicial eSocial · visto em 243 treinamentos"
  },
  {
    "id": "folha-058",
    "modulo": "folha",
    "nivel": 2,
    "pergunta": "Como configurar a data de pagamento no regime caixa e no regime competência?",
    "certa": "Competência: no mesmo mês, último dia útil; caixa: primeiro mês subsequente, 5º dia útil",
    "erradas": [
      "Competência: primeiro mês subsequente, 5º dia útil; caixa: mesmo mês, último dia útil",
      "Os dois no mesmo mês, mudando só o dia útil informado",
      "Competência: 5º dia útil; caixa: dia 20 do mês seguinte"
    ],
    "explicacao": "Configure em Parâmetros > Personaliza > Data de Pagamento e repita nas abas Empregados, Estagiários e Contribuintes. Depois, feche e reabra a tela de cálculo.",
    "caminho": "Controle > Parâmetros > aba Personaliza > Data de Pagamento",
    "fonte": "Configuração de data de pagamento · visto em 234 treinamentos"
  },
  {
    "id": "folha-059",
    "modulo": "folha",
    "nivel": 3,
    "pergunta": "Em qual mês vence o IR da folha no pagamento no 5º dia útil e no último dia útil?",
    "certa": "No 5º dia útil o IR vence 2 meses depois; no último dia útil, no mês seguinte",
    "erradas": [
      "No 5º dia útil o IR vence no mês seguinte; no último dia útil, 2 meses depois",
      "Nos dois casos o IR vence no mês seguinte à competência",
      "Nos dois casos o IR vence 2 meses depois da competência"
    ],
    "explicacao": "A data de pagamento define o vencimento do IR. Por isso o regime precisa ser igual ao do eSocial; trocá-lo no meio do ano gera IR duplicado ou inconsistente.",
    "caminho": "Controle > Parâmetros > aba Personaliza",
    "fonte": "Configuração de data de pagamento · visto em 234 treinamentos"
  },
  {
    "id": "folha-060",
    "modulo": "folha",
    "nivel": 2,
    "pergunta": "Como deve ser cadastrada a data base no sindicato?",
    "certa": "Sempre o 1º dia do mês do dissídio, como 01/04",
    "erradas": [
      "O último dia do mês do dissídio, como 30/04",
      "O dia do acordo coletivo, como 12/04",
      "O 1º dia do ano, como 01/01"
    ],
    "explicacao": "Na aba Outros Dados do sindicato, a data base é 1º dia + mês do dissídio. O cadastro de sindicatos é o maior da folha, com cerca de 30 abas.",
    "caminho": "Arquivo > Sindicatos > aba Outros Dados",
    "fonte": "Cadastro de sindicato e convenção coletiva · visto em 233 treinamentos"
  },
  {
    "id": "folha-061",
    "modulo": "folha",
    "nivel": 3,
    "pergunta": "Qual o risco de desmarcar o cálculo de DSR em uma rubrica da tabela compartilhada?",
    "certa": "Afeta todas as empresas, exceto se a tabela for individualizada, o que não é recomendado",
    "erradas": [
      "Afeta apenas a empresa em que a rubrica foi alterada, sem refletir nas demais",
      "Afeta apenas os empregados horistas da empresa, e só a partir da competência seguinte",
      "Não afeta nada, pois o DSR é calculado pelo sindicato e não pela rubrica da tabela"
    ],
    "explicacao": "As rubricas são compartilhadas, então uma alteração vale para todas as empresas que usam a tabela. Prefira criar uma cópia a mexer na padrão.",
    "caminho": "Arquivo > Rubricas",
    "fonte": "Cadastro de sindicato e convenção coletiva · visto em 233 treinamentos"
  },
  {
    "id": "folha-062",
    "modulo": "folha",
    "nivel": 1,
    "pergunta": "Na memória de cálculo, o que indicam o asterisco (*) e o quadradinho amarelo (#)?",
    "certa": "O * é verba informativa, que não entra no líquido; o # é valor alterado manualmente",
    "erradas": [
      "O * é valor alterado manualmente; o # é verba informativa, que não entra no líquido",
      "O * é rubrica nova; o # é rubrica padrão do sistema",
      "O * é verba com média; o # é verba proporcional"
    ],
    "explicacao": "O asterisco marca verbas informativas, como o FGTS. O # aparece quando o valor foi forçado em Utilitários > Alteração de Cálculos.",
    "caminho": "Processos > Cálculo > lupa",
    "fonte": "Memória de cálculo · visto em 231 treinamentos"
  },
  {
    "id": "folha-063",
    "modulo": "folha",
    "nivel": 3,
    "pergunta": "Ao excluir eventos do eSocial para corrigir, em que ordem fazer?",
    "certa": "Pagamento antes de remuneração, e eventos posteriores antes dos anteriores",
    "erradas": [
      "Remuneração antes de pagamento, e eventos anteriores antes dos posteriores",
      "Em qualquer ordem, pois o sistema reorganiza as dependências",
      "Pagamento antes de remuneração, e eventos anteriores antes dos posteriores"
    ],
    "explicacao": "Os eventos dependem uns dos outros: exclui-se o S-1210 antes do S-1200, e, por exemplo, a admissão só depois da lotação.",
    "caminho": "Painel de Pendências / Relatórios > eSocial > Eventos Periódicos",
    "fonte": "Retificação de eventos eSocial · visto em 228 treinamentos"
  },
  {
    "id": "folha-064",
    "modulo": "folha",
    "nivel": 2,
    "pergunta": "Quando é aceitável alterar manualmente um valor de INSS, FGTS ou IR na folha?",
    "certa": "Quase nunca: só para espelhar folha paga em outro sistema, em meses que não vão ao eSocial",
    "erradas": [
      "Sempre que houver diferença de centavos em relação ao cálculo do sistema anterior",
      "Sempre que o cliente pedir, desde que o cálculo seja refeito depois da alteração",
      "Apenas nos meses em que o eSocial já foi enviado, para espelhar o valor do portal"
    ],
    "explicacao": "O eSocial recalcula INSS, FGTS e IR e diverge do valor forçado. No dia a dia corrija a configuração, não o valor.",
    "caminho": "Utilitários > Alteração de Cálculos > Cálculos",
    "fonte": "Ajuste manual de cálculo · visto em 217 treinamentos"
  },
  {
    "id": "folha-065",
    "modulo": "folha",
    "nivel": 2,
    "pergunta": "Numa rotina automática da folha, quando usar a competência “Anterior à Execução” e quando “Competência da Execução”?",
    "certa": "Anterior se a rotina roda no início do mês seguinte; da Execução se roda no fim do mês",
    "erradas": [
      "Anterior se a rotina roda no fim do mês; da Execução se roda no início do mês seguinte",
      "Anterior apenas para o adiantamento; da Execução apenas para a folha mensal",
      "Anterior para a folha de empresas do Simples; da Execução para as do Lucro Real"
    ],
    "explicacao": "A escolha depende de quando a rotina dispara: rodando no começo do mês seguinte, ela precisa calcular a competência que acabou de fechar.",
    "caminho": "Processos > Rotinas Automáticas",
    "fonte": "Agendamento de rotinas automáticas · visto em 646 treinamentos"
  },
  {
    "id": "folha-066",
    "modulo": "folha",
    "nivel": 1,
    "pergunta": "Qual a diferença entre o relatório Extrato e o Resumo da folha?",
    "certa": "O Extrato traz o detalhe por funcionário; o Resumo não detalha por funcionário",
    "erradas": [
      "O Extrato traz só os totais da empresa; o Resumo detalha cada funcionário",
      "O Extrato é exclusivo do adiantamento; o Resumo é exclusivo da folha mensal",
      "Os dois são iguais, mudando apenas o nome conforme o módulo que os emite"
    ],
    "explicacao": "Para conferir funcionário a funcionário, use o Extrato. O Resumo é indicado quando só interessam os totais e as bases da empresa.",
    "caminho": "Relatórios > Folha > Extrato | Resumo",
    "fonte": "Emissão de extrato de folha · visto em 225 treinamentos"
  },
  {
    "id": "folha-067",
    "modulo": "folha",
    "nivel": 2,
    "pergunta": "Como o cliente deve preencher a planilha de importação de lançamentos da folha?",
    "certa": "Valores com 2 casas e vírgula, horas em decimal (1h30 = 1,50) e sem mexer na estrutura",
    "erradas": [
      "Valores com ponto como separador, horas em formato 1:30 e colunas livres para o cliente",
      "Valores sem casas decimais, horas em minutos corridos e uma aba nova por rubrica",
      "Valores com 3 casas decimais, horas em texto (1h30) e cabeçalho renomeado"
    ],
    "explicacao": "A planilha é gerada pelo próprio Domínio (Importação de Eventos). Alterar a estrutura ou o formato dos números faz a conversão para TXT falhar.",
    "caminho": "Relatórios > Gerenciador de Relatórios > Importação de Eventos",
    "fonte": "Importação de lançamentos via planilha · visto em 216 treinamentos"
  },
  {
    "id": "folha-068",
    "modulo": "folha",
    "nivel": 2,
    "pergunta": "Quais eventos são marcados no Faseamento para não subir automaticamente ao eSocial?",
    "certa": "Não periódicos: admissão (2200), alteração contratual (2205) e alteração cadastral (2206)",
    "erradas": [
      "Periódicos: remuneração (S-1200) e pagamento (S-1210) de todas as competências",
      "De tabela: empregador (S-1000), estabelecimentos (S-1005) e rubricas (S-1010)",
      "Todos os eventos, pois o Faseamento bloqueia qualquer envio automático do módulo"
    ],
    "explicacao": "O Faseamento controla os eventos não periódicos. Ao marcá-los, o usuário assume o envio manual, e os pendentes ficam em Relatórios > eSocial > Eventos Não Periódicos.",
    "caminho": "Controle > Parâmetros > aba Faseamento",
    "fonte": "Envio automático de eventos eSocial · visto em 202 treinamentos"
  },
  {
    "id": "folha-069",
    "modulo": "folha",
    "nivel": 2,
    "pergunta": "Na aba eSocial dos parâmetros, o que significa escolher “Contador” em Certificado digital?",
    "certa": "Usar o e-CNPJ do contador, por procuração; “Empresa” usa o da própria empresa",
    "erradas": [
      "Usar o certificado do responsável legal, e “Empresa” usa o certificado do contador",
      "Usar o certificado do usuário logado, e “Empresa” usa o certificado do servidor",
      "Enviar os eventos pelo portal do contador, e “Empresa” envia pelo Busca NF-e"
    ],
    "explicacao": "Com “Contador”, escolha o cadastro do contador que tem o e-CNPJ (e a procuração). Com “Empresa”, informe o CNPJ transmissor e use o certificado da empresa.",
    "caminho": "Controle > Parâmetros > aba eSocial",
    "fonte": "Certificado digital para eSocial · visto em 196 treinamentos"
  },
  {
    "id": "folha-070",
    "modulo": "folha",
    "nivel": 3,
    "pergunta": "Quando marcar “Empresa enviada anteriormente: Sim” na aba eSocial?",
    "certa": "Quando o S-1000 da empresa já foi enviado antes, por outro sistema ou pelo Domínio",
    "erradas": [
      "Quando a empresa já tem folha calculada no Domínio em competências anteriores",
      "Quando o certificado digital da empresa já foi cadastrado no Gerenciador de Certificados",
      "Sempre que a empresa estiver no ambiente oficial, e nunca no de homologação"
    ],
    "explicacao": "A opção avisa o sistema de que o cadastro do empregador (S-1000) já existe no eSocial, evitando o reenvio. Informe também a data de início da utilização do banco.",
    "caminho": "Controle > Parâmetros > aba eSocial",
    "fonte": "Certificado digital para eSocial · visto em 196 treinamentos"
  },
  {
    "id": "folha-071",
    "modulo": "folha",
    "nivel": 2,
    "pergunta": "Como alimentar manualmente as médias de férias e rescisão de uma empresa nova ou convertida?",
    "certa": "Em Utilitários > Lançamento de Rubricas para Médias, por empregado, com rubrica, mês e valor",
    "erradas": [
      "Em Arquivo > Rubricas, preenchendo a média direto na rubrica de férias do empregado",
      "Em Processos > Férias, a cada cálculo, digitando a média final no campo de abono pecuniário",
      "Em Controle > Parâmetros > Cálculo, informando uma média única para toda a empresa"
    ],
    "explicacao": "As médias vêm do histórico da folha. Quando não há histórico no Domínio, lança-se manualmente, mês a mês, e confere-se pela consulta de médias, que mostra a memória de cálculo.",
    "caminho": "Utilitários > Lançamento de Rubricas para Médias",
    "fonte": "Cálculo de médias de férias e rescisão · visto em 195 treinamentos"
  },
  {
    "id": "folha-072",
    "modulo": "folha",
    "nivel": 3,
    "pergunta": "De onde o Domínio importa os empréstimos consignados do Crédito do Trabalhador?",
    "certa": "Do Emprega Brasil, por API, usando certificado digital ou procuração",
    "erradas": [
      "Da planilha enviada pelos bancos, que o cliente anexa na Central de Soluções",
      "Do portal do eSocial, no evento S-1200 de cada competência da folha",
      "Do arquivo da DCTF Web, importado pelo menu de Utilitários da folha"
    ],
    "explicacao": "A consulta e importação via API busca os contratos no Emprega Brasil. Com procuração, informe o CNPJ do contador; com certificado da empresa, deixe desmarcado.",
    "caminho": "Processos > Empréstimo Consignado > Crédito do Trabalhador",
    "fonte": "Lançamento de empréstimo consignado · visto em 191 treinamentos"
  },
  {
    "id": "folha-073",
    "modulo": "folha",
    "nivel": 2,
    "pergunta": "Na aba Regime, quando gravar como Alteração e quando como Retificação?",
    "certa": "Alteração para mudança real de regime; Retificação para corrigir erro desde o início",
    "erradas": [
      "Alteração para empresas do Simples; Retificação para empresas do Lucro Real",
      "Alteração quando muda o mês; Retificação quando muda o endereço da empresa",
      "Alteração para reabrir a folha; Retificação para excluir a vigência anterior"
    ],
    "explicacao": "Para uma mudança real, crie Nova Vigência com o mês da mudança. Se o regime estava errado desde o começo, grave como Retificação.",
    "caminho": "Controle > Parâmetros > aba Regime",
    "fonte": "Configuração de regime tributário · visto em 182 treinamentos"
  },
  {
    "id": "folha-074",
    "modulo": "folha",
    "nivel": 1,
    "pergunta": "O que indica o erro 106 no Painel de Pendências do eSocial?",
    "certa": "Duplicidade: o evento já existe no eSocial",
    "erradas": [
      "Certificado digital vencido ou sem permissão de envio",
      "Erro de layout, com campo obrigatório vazio no evento",
      "Competência fechada, impedindo novos envios de eventos"
    ],
    "explicacao": "O erro 106 é de duplicidade. O tratamento é localizar o evento no portal do eSocial, copiar o número do recibo e validá-lo manualmente no Domínio.",
    "caminho": "Painel de Pendências > Invalidados ou Duplicados",
    "fonte": "Tratamento de eventos duplicados eSocial · visto em 178 treinamentos"
  },
  {
    "id": "folha-075",
    "modulo": "folha",
    "nivel": 2,
    "pergunta": "A guia do FGTS Digital depende de qual envio ao eSocial?",
    "certa": "Só emite após a remuneração (S-1200); não depende do fechamento S-1299",
    "erradas": [
      "Só emite após o fechamento da folha (S-1299) de todas as empresas",
      "Só emite após o envio do pagamento (S-1210) de cada empregado",
      "Pode ser emitida a qualquer momento, antes de qualquer evento enviado"
    ],
    "explicacao": "Sem a remuneração enviada, o FGTS Digital não traz os valores. O fechamento do período não é pré-requisito para emitir a guia.",
    "caminho": "Relatórios > Guias > FGTS Digital",
    "fonte": "Geração de guia FGTS Digital · visto em 175 treinamentos"
  },
  {
    "id": "folha-076",
    "modulo": "folha",
    "nivel": 1,
    "pergunta": "Qual a diferença entre a guia Rápida e a Parametrizada do FGTS Digital?",
    "certa": "A Rápida junta tudo; a Parametrizada separa mensal, rescisão, consignado e 13º",
    "erradas": [
      "A Rápida emite só a rescisão; a Parametrizada emite só a folha mensal",
      "A Rápida vai direto ao banco; a Parametrizada exige impressão da guia",
      "A Rápida é para o Simples Nacional; a Parametrizada, para o Lucro Real"
    ],
    "explicacao": "Use a Rápida para uma guia única. Escolha a Parametrizada quando precisar pagar os valores separados por tipo.",
    "caminho": "Relatórios > Guias > FGTS Digital",
    "fonte": "Geração de guia FGTS Digital · visto em 175 treinamentos"
  },
  {
    "id": "folha-077",
    "modulo": "folha",
    "nivel": 2,
    "pergunta": "Qual a diferença entre configurar o lançamento de horas em “Minutos” ou “Centesimal”?",
    "certa": "Minutos: lança 1:30 e mostra 1:30 no holerite; Centesimal: lança 1,50 e mostra 1,50",
    "erradas": [
      "Minutos: lança 1,50 e mostra 1:30 no holerite; Centesimal: lança 1:30 e mostra 1,50",
      "Minutos vale só para horas extras; Centesimal vale só para faltas e atrasos",
      "Minutos é por empresa; Centesimal é por empregado, escolhido no cadastro"
    ],
    "explicacao": "Nos dois casos o cálculo usa o valor decimal (1h30 = 1,50). A diferença está em como a hora é digitada e exibida no holerite.",
    "caminho": "Controle > Parâmetros > aba Cálculo > Lançamento de horas",
    "fonte": "Lançamento de horas extras e adicionais · visto em 166 treinamentos"
  },
  {
    "id": "folha-078",
    "modulo": "folha",
    "nivel": 2,
    "pergunta": "Como lançar a continuidade de um afastamento anterior?",
    "certa": "Marcar “Somar dias ao afastamento anterior” e selecionar o afastamento anterior",
    "erradas": [
      "Excluir o afastamento anterior e lançar um novo com a soma dos dias",
      "Lançar um novo afastamento com o mesmo motivo e deixar a data de retorno",
      "Alterar a data de retorno do afastamento anterior, sem criar outro lançamento"
    ],
    "explicacao": "A opção de somar dias liga os dois afastamentos e mantém o histórico correto, o que é importante para o eSocial e para as regras de afastamento superior a 15 dias.",
    "caminho": "Processos > Afastamentos > Novo",
    "fonte": "Lançamento de afastamento · visto em 164 treinamentos"
  },
  {
    "id": "folha-079",
    "modulo": "folha",
    "nivel": 2,
    "pergunta": "Qual data de início informar no cadastro de cargo?",
    "certa": "A data de abertura da empresa, nunca a data de admissão do empregado",
    "erradas": [
      "A data de admissão do primeiro empregado que ocupar o cargo",
      "A data em que o cargo foi cadastrado no Domínio pelo usuário",
      "O primeiro dia do mês da competência de implantação da folha"
    ],
    "explicacao": "Use Controle > Empresas > Início Atividades como referência. O cargo só vai ao eSocial quando for vinculado a um empregado.",
    "caminho": "Arquivo > Cargos",
    "fonte": "Cadastro de cargo e função · visto em 163 treinamentos"
  },
  {
    "id": "folha-080",
    "modulo": "folha",
    "nivel": 1,
    "pergunta": "Os cargos do Domínio são gerais para todas as empresas, como no Contmatic e no SCI?",
    "certa": "Não; cada empresa tem os seus próprios cargos",
    "erradas": [
      "Sim; o cargo cadastrado vale para todas as empresas da base",
      "Sim, mas só para os cargos de confiança e de comissão",
      "Não; os cargos são por departamento e não por empresa"
    ],
    "explicacao": "Diferente de outros sistemas, no Domínio o cargo é por empresa. Ao implantar uma empresa nova, cadastre ou copie os cargos dela.",
    "caminho": "Arquivo > Cargos",
    "fonte": "Cadastro de cargo e função · visto em 163 treinamentos"
  },
  {
    "id": "folha-081",
    "modulo": "folha",
    "nivel": 1,
    "pergunta": "Qual percentual o adiantamento salarial usa quando o empregado não tem percentual individual?",
    "certa": "40%, o padrão do sistema",
    "erradas": [
      "30%, o mínimo previsto na convenção coletiva",
      "50%, metade do salário-base do empregado",
      "20%, o valor de um vale quinzenal"
    ],
    "explicacao": "Sem percentual individual, o sistema aplica 40%. Para usar outro percentual, cadastre-o nos lançamentos fixos do empregado e marque a opção correspondente no cálculo.",
    "caminho": "Processos > Cálculo > Adiantamento",
    "fonte": "Cálculo de adiantamento quinzenal · visto em 159 treinamentos"
  },
  {
    "id": "folha-082",
    "modulo": "folha",
    "nivel": 2,
    "pergunta": "Quando o pagamento do adiantamento sobe ao eSocial?",
    "certa": "Somente no fechamento mensal, junto com os demais pagamentos",
    "erradas": [
      "Imediatamente após calcular o adiantamento na folha",
      "No dia do pagamento, quando o usuário confirma no banco",
      "Apenas na emissão do recibo do adiantamento ao empregado"
    ],
    "explicacao": "O sistema avisa ao calcular o adiantamento que o pagamento só vai ao eSocial no fechamento mensal.",
    "caminho": "Processos > Cálculo",
    "fonte": "Cálculo de adiantamento quinzenal · visto em 159 treinamentos"
  },
  {
    "id": "folha-083",
    "modulo": "folha",
    "nivel": 3,
    "pergunta": "Como configurar o reflexo de DSR sobre a hora extra no Domínio?",
    "certa": "Na rubrica de hora extra, em Opções, escolher a rubrica de DSR em “Reflete DSR”",
    "erradas": [
      "No cadastro do empregado, marcando na aba Profissionais que ele é horista",
      "Em Controle > Parâmetros > Cálculo, ativando o “DSR automático” da empresa",
      "No lançamento da hora extra, digitando o valor do DSR em um campo separado"
    ],
    "explicacao": "A rubrica de hora extra aponta para a rubrica de DSR. Ela deve estar como fórmula, vinculada à base da hora extra. Replique para os demais percentuais (50%, 60%, 70%).",
    "caminho": "Arquivo > Rubricas > Editar > Configuração > Opções",
    "fonte": "Cálculo de DSR sobre hora extra · visto em 158 treinamentos"
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
    "id": "contabilidade-018",
    "modulo": "contabilidade",
    "nivel": 2,
    "pergunta": "No histórico de um lançamento contábil, o que a variável #D representa?",
    "certa": "A conta de débito",
    "erradas": [
      "O dia do lançamento",
      "O valor de débito",
      "A data de digitação"
    ],
    "explicacao": "As variáveis do histórico são #D (conta débito), #N (mês/ano) e #MÊS/#ANO (competência). Elas preenchem o texto automaticamente.",
    "caminho": "Movimentos > Lançamentos > campo Histórico",
    "fonte": "Lançamento contábil manual · visto em 1010 treinamentos"
  },
  {
    "id": "contabilidade-019",
    "modulo": "contabilidade",
    "nivel": 1,
    "pergunta": "O que acontece ao digitar um lançamento com data em dia não útil?",
    "certa": "O sistema sinaliza em vermelho, mas permite gravar",
    "erradas": [
      "O sistema bloqueia a gravação até a data ser trocada",
      "O sistema muda a data para o próximo dia útil sozinho",
      "O sistema pede a senha do gerente para liberar a gravação"
    ],
    "explicacao": "A data em vermelho é apenas um aviso. O lançamento é gravado normalmente.",
    "caminho": "Movimentos > Lançamentos",
    "fonte": "Lançamento contábil manual · visto em 1010 treinamentos"
  },
  {
    "id": "contabilidade-020",
    "modulo": "contabilidade",
    "nivel": 2,
    "pergunta": "Como permitir a alteração, na Contabilidade, de um lançamento que veio do Fiscal ou da Folha?",
    "certa": "Marcar “Permitir alterar lançamento quando vem de outro sistema” em Parâmetros",
    "erradas": [
      "Pedir ao gerente a liberação em Controle > Permissões, só para aquele lançamento",
      "Excluir a integração do módulo de origem e lançar tudo manualmente na Contabilidade",
      "Criar uma nova vigência da empresa, com a liberação marcada no cadastro dela"
    ],
    "explicacao": "A opção existe nos Parâmetros, mas altera só o lançamento contábil: ele deixa de bater com a origem. O ideal é corrigir no módulo de origem.",
    "caminho": "Controle > Parâmetros > Lançamentos",
    "fonte": "Lançamento contábil manual · visto em 1010 treinamentos"
  },
  {
    "id": "contabilidade-021",
    "modulo": "contabilidade",
    "nivel": 2,
    "pergunta": "Onde se cadastram e onde se usam os lançamentos padrões?",
    "certa": "Cadastro em Arquivos > Lançamentos Padrões; uso em Movimentos > Lançamentos Padrões",
    "erradas": [
      "Cadastro em Movimentos > Lançamentos Padrões; uso em Arquivos > Lançamentos Padrões",
      "Cadastro e uso, os dois, em Utilitários > Lançamentos Padrões",
      "Cadastro em Controle > Parâmetros; uso em Movimentos > Lançamentos"
    ],
    "explicacao": "Os lançamentos repetitivos são criados em Arquivos e aplicados em Movimentos, o que poupa digitação.",
    "caminho": "Arquivos / Movimentos > Lançamentos Padrões",
    "fonte": "Lançamento contábil manual · visto em 1010 treinamentos"
  },
  {
    "id": "contabilidade-022",
    "modulo": "contabilidade",
    "nivel": 3,
    "pergunta": "De qual empresa padrão se copia a configuração da integração contábil?",
    "certa": "Na Folha, a 9994 (analítica) ou a 9995 (sintética); no Fiscal, a 100000",
    "erradas": [
      "Na Folha, a 100000; no Fiscal, a 9994 (analítica) ou a 9995 (sintética)",
      "Nos dois módulos, a empresa 1, que é a matriz do escritório",
      "Na Folha, a 9995 (analítica); no Fiscal, a 9994 (sintética)"
    ],
    "explicacao": "Em Arquivo > Contabilidade > Configurar Integração usa-se Copiar Todas as Contas a partir da empresa padrão e seleciona-se as empresas de destino.",
    "caminho": "Arquivo > Contabilidade > Configurar Integração",
    "fonte": "Integração contábil automática · visto em 943 treinamentos"
  },
  {
    "id": "contabilidade-023",
    "modulo": "contabilidade",
    "nivel": 2,
    "pergunta": "Na configuração da integração da Folha, em qual lançamento ficam os proventos e em qual ficam os descontos?",
    "certa": "Proventos no lançamento 1 e descontos no lançamento 2",
    "erradas": [
      "Proventos no lançamento 2 e descontos no lançamento 1",
      "Proventos e descontos juntos, no lançamento 1",
      "Proventos no lançamento 1 e descontos no 3"
    ],
    "explicacao": "Nas abas Folha, Férias e Rescisão, as rubricas são arrastadas de Disponíveis para Selecionadas no lançamento correto: proventos no 1 e descontos no 2.",
    "caminho": "Arquivo > Contabilidade > Configurar Integração",
    "fonte": "Integração contábil automática · visto em 943 treinamentos"
  },
  {
    "id": "contabilidade-024",
    "modulo": "contabilidade",
    "nivel": 3,
    "pergunta": "Uma empresa mudou o plano de contas de analítico para sintético depois de já ter importado notas. O que fazer?",
    "certa": "Excluir todos os lançamentos contábeis antes de mudar",
    "erradas": [
      "Mudar o plano e regerar a integração do período, para recompor os lançamentos",
      "Mudar o plano e importar as notas de novo por cima, sobrescrevendo",
      "Criar uma nova vigência do acumulador e deixar os lançamentos antigos"
    ],
    "explicacao": "A mudança de tipo do plano depois da importação exige a exclusão dos lançamentos contábeis já gerados.",
    "caminho": "Arquivo > Contabilidade > Configurar Integração",
    "fonte": "Integração contábil automática · visto em 943 treinamentos"
  },
  {
    "id": "contabilidade-025",
    "modulo": "contabilidade",
    "nivel": 1,
    "pergunta": "O que marcar no Razão para poder clicar no lote e abrir o lançamento direto?",
    "certa": "A opção “Imprimir número”",
    "erradas": [
      "A opção “Destacar linhas”",
      "A opção “Emitir resumo”",
      "A opção “Imprimir classificação”"
    ],
    "explicacao": "Antes de emitir o Razão, marque “Imprimir número”. Assim o número do lote vira um atalho para o lançamento.",
    "caminho": "Relatórios > Razão",
    "fonte": "Emissão de demonstrativos contábeis · visto em 574 treinamentos"
  },
  {
    "id": "contabilidade-026",
    "modulo": "contabilidade",
    "nivel": 2,
    "pergunta": "O que o resumo no final do balancete mostra?",
    "certa": "O lucro ou prejuízo antes do zeramento, como prévia do resultado",
    "erradas": [
      "O saldo final das contas sintéticas do ativo e do passivo",
      "A diferença entre débito e crédito de cada lote do período",
      "O resultado já zerado, depois de calculados os impostos"
    ],
    "explicacao": "Marcando “Emitir resumo no final”, o balancete traz uma prévia do resultado antes do zeramento.",
    "caminho": "Relatórios > Balancete",
    "fonte": "Emissão de demonstrativos contábeis · visto em 574 treinamentos"
  },
  {
    "id": "contabilidade-027",
    "modulo": "contabilidade",
    "nivel": 2,
    "pergunta": "A DRE sai com valores errados ou incompletos. Qual é a verificação principal?",
    "certa": "Se contas de receita e despesa estão vinculadas à estrutura dos demonstrativos",
    "erradas": [
      "Se o balanço do período anterior foi emitido e assinado pelo contador responsável",
      "Se o centro de custo foi informado em todos os lançamentos do período",
      "Se o modelo 3 da DRE foi marcado com a opção de contas sintéticas"
    ],
    "explicacao": "A DRE depende do vínculo das contas com a estrutura (Estrutura > Relação). Para vincular em lote, use Utilitários > Vincular Estrutura dos Demonstrativos às Contas.",
    "caminho": "Utilitários > Vincular Estrutura dos Demonstrativos às Contas Contábeis",
    "fonte": "Emissão de demonstrativos contábeis · visto em 574 treinamentos"
  },
  {
    "id": "contabilidade-028",
    "modulo": "contabilidade",
    "nivel": 2,
    "pergunta": "O saldo final do balancete só confere se qual saldo estiver correto?",
    "certa": "O saldo inicial",
    "erradas": [
      "O saldo das contas de resultado do ano anterior",
      "O saldo do último balanço assinado e arquivado",
      "O saldo de abertura do plano de contas padrão"
    ],
    "explicacao": "Débito e crédito podem fechar mesmo com saldo inicial errado, mas o saldo final só confere se o inicial estiver certo.",
    "caminho": "Relatórios > Balancete",
    "fonte": "Emissão de demonstrativos contábeis · visto em 574 treinamentos"
  },
  {
    "id": "contabilidade-029",
    "modulo": "contabilidade",
    "nivel": 1,
    "pergunta": "Na consulta de lançamentos contábeis, como se edita um lançamento?",
    "certa": "Listando o período e clicando no lançamento, que abre na janela inferior",
    "erradas": [
      "Digitando o número do lote na linha da tela, como em outros sistemas",
      "Dando duplo clique na conta, que abre o lançamento em outra tela",
      "Exportando a lista para planilha e reimportando com as correções"
    ],
    "explicacao": "Na tela do Domínio os lançamentos não aparecem em linha editável. É preciso Listar e clicar no lançamento selecionado para editar na parte de baixo.",
    "caminho": "Movimentos > Consulta > Lançamentos",
    "fonte": "Consulta de lançamentos contábeis · visto em 446 treinamentos"
  },
  {
    "id": "contabilidade-030",
    "modulo": "contabilidade",
    "nivel": 2,
    "pergunta": "O que a coluna Origem informa na consulta de lançamentos?",
    "certa": "De qual módulo veio: manual, EF, Folha, Zeramento, Patrimônio ou Extrato",
    "erradas": [
      "Quem digitou o lançamento: usuário, gerente ou administrador do escritório",
      "Em qual lote o lançamento foi gravado e em qual dia útil do mês corrente",
      "Em qual banco o lançamento foi conciliado pela Contabilidade Digital no mês"
    ],
    "explicacao": "A origem substitui o antigo “slip” e permite filtrar lançamentos manuais, do fiscal, da folha, do zeramento, do patrimônio ou do extrato.",
    "caminho": "Movimentos > Consulta > Lançamentos > Busca Avançada",
    "fonte": "Consulta de lançamentos contábeis · visto em 446 treinamentos"
  },
  {
    "id": "contabilidade-031",
    "modulo": "contabilidade",
    "nivel": 2,
    "pergunta": "Ao filtrar por código de conta sem especificar débito ou crédito, o que a consulta traz?",
    "certa": "Os dois lados; para um lado só, use a Busca Avançada",
    "erradas": [
      "Só os lançamentos em que a conta aparece a débito",
      "Só os lançamentos em que a conta aparece a crédito",
      "Nada, pois o filtro exige que o lado seja informado"
    ],
    "explicacao": "O filtro por conta traz débito e crédito juntos. Na Busca Avançada é possível escolher a conta débito ou crédito específica.",
    "caminho": "Movimentos > Consulta > Lançamentos",
    "fonte": "Consulta de lançamentos contábeis · visto em 446 treinamentos"
  },
  {
    "id": "contabilidade-032",
    "modulo": "contabilidade",
    "nivel": 1,
    "pergunta": "Para começar a contabilidade em janeiro de 2026, qual data usar no lançamento de saldo inicial?",
    "certa": "31/12/2025",
    "erradas": [
      "01/01/2026",
      "31/01/2026",
      "01/01/2025"
    ],
    "explicacao": "O saldo inicial é lançado em 31/12 do ano anterior ao início, com tipo “Vários Débitos para Vários Créditos” e o histórico 157 (Saldo Inicial).",
    "caminho": "Movimentos > Lançamentos",
    "fonte": "Lançamento de saldo inicial · visto em 399 treinamentos"
  },
  {
    "id": "contabilidade-033",
    "modulo": "contabilidade",
    "nivel": 2,
    "pergunta": "Qual histórico se usa nos lançamentos de saldo inicial?",
    "certa": "O 157 (Saldo Inicial)",
    "erradas": [
      "O 1 (Lançamento Inicial)",
      "O 100 (Abertura de Balanço)",
      "O 999 (Saldo Anterior)"
    ],
    "explicacao": "Os lançamentos do Ativo (débito) e do Passivo/PL (crédito) usam o histórico 157.",
    "caminho": "Movimentos > Lançamentos",
    "fonte": "Lançamento de saldo inicial · visto em 399 treinamentos"
  },
  {
    "id": "contabilidade-034",
    "modulo": "contabilidade",
    "nivel": 1,
    "pergunta": "O saldo inicial pode ser gravado com diferença entre débito e crédito?",
    "certa": "Não: o sistema só grava quando a diferença no rodapé é zero",
    "erradas": [
      "Sim, e a diferença vai para uma conta transitória do plano",
      "Sim, desde que a diferença seja menor que R$ 1,00",
      "Não, mas o sistema avisa e grava no dia seguinte"
    ],
    "explicacao": "Se não fechar, revise linha por linha. Se o balancete do sistema anterior já não fechava, crie contas transitórias ou refaça a contabilidade.",
    "caminho": "Movimentos > Lançamentos",
    "fonte": "Lançamento de saldo inicial · visto em 399 treinamentos"
  },
  {
    "id": "contabilidade-035",
    "modulo": "contabilidade",
    "nivel": 2,
    "pergunta": "Quais contas se lançam no saldo inicial de uma empresa do Simples Nacional?",
    "certa": "Só Ativo e Passivo; receita e despesa só entram em Presumido e Real",
    "erradas": [
      "As de Ativo, Passivo, Receita e Despesa, igual às empresas do Lucro Real",
      "Apenas as de Receita e Despesa, já que o Ativo vem da integração",
      "Apenas as de Ativo, porque o Passivo e o PL são gerados pelo Fiscal"
    ],
    "explicacao": "As contas de resultado são opcionais, usadas só se for preciso uma DRE comparativa. Para Simples basta Ativo e Passivo.",
    "caminho": "Movimentos > Lançamentos",
    "fonte": "Lançamento de saldo inicial · visto em 399 treinamentos"
  },
  {
    "id": "contabilidade-036",
    "modulo": "contabilidade",
    "nivel": 3,
    "pergunta": "Contas de cliente e fornecedor criadas pelo Fiscal ficam com a data do primeiro lançamento. Como corrigir antes do saldo inicial?",
    "certa": "Usar Utilitários > Alterar Data de Cadastro para 31/12 ou anterior",
    "erradas": [
      "Excluir a conta e recriá-la em Arquivos > Contas Contábeis com a data certa",
      "Alterar a data direto na conta, em Arquivos > Contas Contábeis, e gravar",
      "Regerar a integração contábil das notas para o sistema atualizar a data"
    ],
    "explicacao": "Se a conta ainda não existir, cadastre antes no Fiscal para não duplicar. Depois ajuste a data de cadastro da conta para 31/12 ou antes.",
    "caminho": "Utilitários > Alterar Data de Cadastro",
    "fonte": "Lançamento de saldo inicial · visto em 399 treinamentos"
  },
  {
    "id": "contabilidade-037",
    "modulo": "contabilidade",
    "nivel": 2,
    "pergunta": "Qual código de conta se informa na planilha de importação de lançamentos?",
    "certa": "O reduzido do Domínio, e não a máscara completa nem o código antigo",
    "erradas": [
      "A classificação completa com pontos, como a do plano do Domínio",
      "O código do sistema antigo, que o Domínio converte sozinho ao importar",
      "O código da empresa seguido do código da conta no sistema de origem"
    ],
    "explicacao": "Use o reduzido (por exemplo, 187, e não 2.1.1.1.1.87). Para isso, faça o depara dos códigos do sistema antigo antes de importar.",
    "caminho": "Utilitários > Importação > Importador",
    "fonte": "Importação de lançamentos Excel · visto em 382 treinamentos"
  },
  {
    "id": "contabilidade-038",
    "modulo": "contabilidade",
    "nivel": 2,
    "pergunta": "Os lançamentos foram importados duas vezes. O que acontece e como corrigir?",
    "certa": "Duplica: apague os importados em Utilitários > Exclusão, tipo “Importado”",
    "erradas": [
      "O sistema sobrescreve o lote anterior, então basta conferir os totais",
      "O sistema ignora a segunda importação e mostra apenas uma advertência",
      "Duplica: exclua a empresa inteira e recomece com a planilha corrigida"
    ],
    "explicacao": "A importação não sobrescreve. Para reimportar, apague antes os lançamentos do tipo Importado pelo utilitário de exclusão.",
    "caminho": "Utilitários > Exclusão > De Lançamentos",
    "fonte": "Importação de lançamentos Excel · visto em 382 treinamentos"
  },
  {
    "id": "contabilidade-039",
    "modulo": "contabilidade",
    "nivel": 2,
    "pergunta": "A importação da planilha desloca as colunas por causa de um histórico. Qual é a causa mais provável?",
    "certa": "Ponto e vírgula no texto do histórico, pois é o delimitador do arquivo CSV",
    "erradas": [
      "Aspas duplas no texto do histórico, que o arquivo CSV usa para separar",
      "Texto muito longo no histórico, acima do limite de colunas da planilha",
      "Histórico com acentos, que o arquivo CSV não consegue gravar direito"
    ],
    "explicacao": "O ponto e vírgula separa colunas no CSV. Remova esse caractere dos históricos antes de gerar o arquivo.",
    "caminho": "Utilitários > Importação > Importador",
    "fonte": "Importação de lançamentos Excel · visto em 382 treinamentos"
  },
  {
    "id": "contabilidade-040",
    "modulo": "contabilidade",
    "nivel": 2,
    "pergunta": "Quanto tempo leva a primeira importação do extrato bancário integrado, e com que frequência ele atualiza depois?",
    "certa": "Cerca de 1 hora na primeira vez; depois atualiza de 4 a 5 vezes por dia",
    "erradas": [
      "Cerca de 5 minutos na primeira vez; depois atualiza uma vez por dia",
      "Cerca de 24 horas na primeira vez; depois atualiza apenas por pedido",
      "Cerca de 1 hora na primeira vez; depois só atualiza no fechamento do mês"
    ],
    "explicacao": "A carga retroativa inicial é demorada. Depois, as atualizações são automáticas durante o dia.",
    "caminho": "Movimentos > Extrato Bancário > Domínio Contabilidade Digital",
    "fonte": "Acesso a extrato bancário integrado · visto em 343 treinamentos"
  },
  {
    "id": "contabilidade-041",
    "modulo": "contabilidade",
    "nivel": 2,
    "pergunta": "Quais bancos têm o Extrato Mensal (PDF do banco) disponível, e para quais competências?",
    "certa": "BB, Bradesco, Santander, Banrisul, Caixa, Inter e Itaú; só competências fechadas",
    "erradas": [
      "Todos os bancos do Open Finance; qualquer competência, inclusive a corrente",
      "Nubank, C6, Stone, Mercado Pago, Unicred e Sicredi; só a competência atual",
      "BB, Bradesco, Santander, Caixa e Itaú; só meses com mais de 90 dias"
    ],
    "explicacao": "O PDF mensal é de sete bancos e só de meses fechados. Nos bancos do Open Finance e no mês corrente, use o botão Imprimir.",
    "caminho": "Movimentos > Extrato Bancário > Domínio Contabilidade Digital",
    "fonte": "Acesso a extrato bancário integrado · visto em 343 treinamentos"
  },
  {
    "id": "contabilidade-042",
    "modulo": "contabilidade",
    "nivel": 2,
    "pergunta": "Como obter o extrato do mês corrente, ou de banco do Open Finance, sem PDF do banco?",
    "certa": "Pelo botão Imprimir, relatório no layout Domínio sem trava de período",
    "erradas": [
      "Pelo botão Extrato Mensal, desde que a competência esteja aberta",
      "Pedindo o PDF ao cliente e anexando em Documentos do Portal do Cliente",
      "Aguardando o fechamento do mês para o PDF do banco ficar disponível"
    ],
    "explicacao": "O Imprimir gera um relatório próprio do Domínio e não tem trava de período, então serve para o mês corrente e para bancos Open Finance.",
    "caminho": "Movimentos > Extrato Bancário > Domínio Contabilidade Digital",
    "fonte": "Acesso a extrato bancário integrado · visto em 343 treinamentos"
  },
  {
    "id": "contabilidade-043",
    "modulo": "contabilidade",
    "nivel": 2,
    "pergunta": "Os impostos já foram apurados no Fiscal. Eles sobem sozinhos para a Contabilidade?",
    "certa": "Não: apurar não é integrar; falta o comando de Integração Contábil",
    "erradas": [
      "Sim, a apuração já gera os lançamentos contábeis de todos os impostos",
      "Sim, mas só para os impostos do Simples Nacional da empresa cliente",
      "Não, e é preciso lançar à mão cada imposto do período apurado"
    ],
    "explicacao": "As notas contabilizam ao importar o XML (pelo acumulador). Os impostos apurados precisam de Movimentos > Integração Contábil depois da apuração.",
    "caminho": "Escrita Fiscal > Movimentos > Integração Contábil",
    "fonte": "Integração fiscal-contábil · visto em 323 treinamentos"
  },
  {
    "id": "contabilidade-044",
    "modulo": "contabilidade",
    "nivel": 3,
    "pergunta": "Ao criar uma vigência nova de acumulador, o que evita que as notas daquele período não subam para a Contabilidade?",
    "certa": "Copiar a configuração contábil da vigência anterior para a nova",
    "erradas": [
      "Marcar a opção de regerar tudo na Integração Contábil do período",
      "Informar a conta de pagamento no acumulador da vigência antiga",
      "Excluir a vigência antiga para o sistema usar apenas a nova"
    ],
    "explicacao": "A vigência nova nasce sem a aba Contabilidade preenchida. Se não copiar a configuração anterior, as notas não geram lançamento.",
    "caminho": "Escrita Fiscal > Arquivos > Acumuladores > aba Contabilidade",
    "fonte": "Integração fiscal-contábil · visto em 323 treinamentos"
  },
  {
    "id": "contabilidade-045",
    "modulo": "contabilidade",
    "nivel": 2,
    "pergunta": "No plano de contas do Domínio, quais contas precisam de código reduzido?",
    "certa": "Todas, inclusive as sintéticas, pois o Domínio cadastra por código reduzido",
    "erradas": [
      "Só as analíticas, pois as sintéticas são identificadas pela classificação",
      "Só as sintéticas, pois as analíticas usam a classificação como código",
      "Nenhuma, porque o Domínio cadastra por classificação, como o Contmatic"
    ],
    "explicacao": "Diferente do Contmatic, o Domínio trabalha com código reduzido. Para sintéticas sem código, crie sequenciais (por exemplo, de 100 a 999). O máximo é 7 dígitos.",
    "caminho": "Utilitários > Importação > Importador",
    "fonte": "Importação de plano de contas · visto em 303 treinamentos"
  },
  {
    "id": "contabilidade-046",
    "modulo": "contabilidade",
    "nivel": 3,
    "pergunta": "Por que é essencial preservar os códigos originais ao importar o plano de contas de outro sistema?",
    "certa": "Para importar a ECD depois; se mudar, os lançamentos vão para contas erradas",
    "erradas": [
      "Para o balancete bater com o do sistema anterior até o último centavo do mês",
      "Para a integração fiscal usar os mesmos acumuladores da contabilidade antiga",
      "Para o sistema aceitar a importação do plano sem pedir o depara de contas"
    ],
    "explicacao": "Se os códigos mudarem, a importação posterior da ECD joga os lançamentos nas contas erradas. Teste com poucas contas antes de importar o plano completo.",
    "caminho": "Utilitários > Importação > Importador",
    "fonte": "Importação de plano de contas · visto em 303 treinamentos"
  },
  {
    "id": "contabilidade-047",
    "modulo": "contabilidade",
    "nivel": 1,
    "pergunta": "Qual deve ser a data de início nos Parâmetros da Contabilidade?",
    "certa": "31/12 do ano anterior ao primeiro lançamento",
    "erradas": [
      "01/01 do ano do primeiro lançamento",
      "O último dia do mês do primeiro lançamento",
      "A data de abertura do CNPJ da empresa"
    ],
    "explicacao": "Na aba Geral, a data de início fica em 31/12 do ano anterior, o que permite lançar o saldo inicial.",
    "caminho": "Controle > Parâmetros > aba Geral",
    "fonte": "Configuração de parâmetros contábeis · visto em 294 treinamentos"
  },
  {
    "id": "contabilidade-048",
    "modulo": "contabilidade",
    "nivel": 3,
    "pergunta": "Por que marcar “Não alterar número do lote” nos Parâmetros da Contabilidade?",
    "certa": "Porque alterar o lote faz perder a abertura de razão e lançamento pelo balancete",
    "erradas": [
      "Porque o lote alterado é recusado na importação da ECD pelo validador oficial",
      "Porque o sistema renumera o lote sozinho e acusa diferença no rodapé da tela",
      "Porque o lote alterado deixa de entrar nos relatórios do período fechado"
    ],
    "explicacao": "Os atalhos do balancete (conta para razão e lote para lançamento) dependem do número do lote. Alterá-lo quebra essa navegação.",
    "caminho": "Controle > Parâmetros > aba Lançamentos",
    "fonte": "Configuração de parâmetros contábeis · visto em 294 treinamentos"
  },
  {
    "id": "contabilidade-049",
    "modulo": "contabilidade",
    "nivel": 2,
    "pergunta": "Quando alterar a regra de contabilização do extrato, onde fazer a mudança definitiva?",
    "certa": "Em Configurações; a alteração direto na linha volta ao padrão ao listar de novo",
    "erradas": [
      "Direto na linha do extrato, que grava a regra para as próximas competências",
      "Em Controle > Parâmetros, na aba Contabilidade Digital, mês a mês",
      "Na conta contábil da contrapartida, que redefine todas as regras"
    ],
    "explicacao": "Se for mudar de vez, use o botão Configurações. A edição na linha vale só para aquela transação e some na próxima listagem.",
    "caminho": "Contabilidade Digital > Configurações",
    "fonte": "Configuração de regras de contabilização · visto em 282 treinamentos"
  },
  {
    "id": "contabilidade-050",
    "modulo": "contabilidade",
    "nivel": 2,
    "pergunta": "Depois de ajustar uma regra em Configurações, o que acontece com os lançamentos já gravados?",
    "certa": "Não mudam: é preciso excluí-los em lote, listar e gravar novamente",
    "erradas": [
      "Mudam todos na hora, com a nova contrapartida da regra",
      "Mudam só os do mês corrente, e os anteriores ficam como estavam",
      "Mudam todos, mas apenas depois do fechamento do período"
    ],
    "explicacao": "A regra vale para o que for contabilizado dali em diante. Para refazer o que já foi gravado, use Utilitários > Exclusão de Lançamentos e contabilize de novo.",
    "caminho": "Utilitários > Exclusão de Lançamentos",
    "fonte": "Configuração de regras de contabilização · visto em 282 treinamentos"
  },
  {
    "id": "contabilidade-051",
    "modulo": "contabilidade",
    "nivel": 3,
    "pergunta": "Ao cadastrar a palavra-chave do histórico na configuração do extrato, qual cuidado é essencial?",
    "certa": "Idêntico ao extrato: dois espaços exigem dois, e acentos corrompidos impedem o reconhecimento",
    "erradas": [
      "Em letras maiúsculas, sem acentos e sem espaços, para o sistema reconhecer qualquer banco",
      "Completo, com a data e o valor da transação inclusos para evitar lançamentos duplicados",
      "Apenas parecido, pois o sistema ignora diferenças de espaços e de acentuação do banco"
    ],
    "explicacao": "Copie a parte do histórico direto do arquivo (OFX/OFC, tag MEMO) para garantir espaços, acentos e maiúsculas. Palavra genérica leva tudo para a mesma conta: prefira CNPJ ou nome específico.",
    "caminho": "Arquivos > Configuração para Contabilizar Extrato Bancário",
    "fonte": "Configuração de extrato bancário · visto em 249 treinamentos"
  },
  {
    "id": "contabilidade-052",
    "modulo": "contabilidade",
    "nivel": 2,
    "pergunta": "Como reabrir o mês de setembro no Fechamento do período?",
    "certa": "Informar a competência anterior, 08/2026, no campo Próximo Fechamento",
    "erradas": [
      "Informar a própria competência de setembro, 09/2026, e gravar",
      "Informar 10/2026, o mês seguinte ao que se quer reabrir",
      "Excluir o fechamento de setembro em Utilitários > Exclusão"
    ],
    "explicacao": "O fechamento bloqueia até a data informada. Para abrir setembro, coloque agosto (08/2026). Após as alterações, feche novamente.",
    "caminho": "Controle > Fechamento",
    "fonte": "Fechamento de período contábil · visto em 281 treinamentos"
  },
  {
    "id": "contabilidade-053",
    "modulo": "contabilidade",
    "nivel": 3,
    "pergunta": "Com o período contábil fechado, a Folha ainda consegue alterar lançamentos?",
    "certa": "Sim, pois a integração da Folha não é automática (o Fiscal é bloqueado)",
    "erradas": [
      "Não, o fechamento bloqueia todos os módulos da empresa igualmente",
      "Sim, mas somente a Folha das empresas do Simples Nacional cadastradas",
      "Não, mas a Folha pode pedir a liberação do período por até 24 horas"
    ],
    "explicacao": "O Fiscal é bloqueado e avisa ao tentar incluir ou excluir nota. Para impedir também a integração dos módulos, use Controle > Período de Trabalho e marque “Bloquear integração dos módulos”.",
    "caminho": "Controle > Fechamento / Controle > Período de Trabalho",
    "fonte": "Fechamento de período contábil · visto em 281 treinamentos"
  },
  {
    "id": "contabilidade-054",
    "modulo": "contabilidade",
    "nivel": 3,
    "pergunta": "Alterar a conta de um acumulador, sem criar nova vigência, afeta o período contábil fechado?",
    "certa": "Sim: o período é reaberto automaticamente",
    "erradas": [
      "Não, o fechamento sempre prevalece sobre o acumulador",
      "Sim, mas só se a alteração for feita por um usuário gerente",
      "Não, mas o Fiscal passa a bloquear as notas do mês seguinte"
    ],
    "explicacao": "Para não reabrir um período fechado, crie uma nova vigência no acumulador, copiando a configuração contábil da anterior.",
    "caminho": "Escrita Fiscal > Arquivos > Acumuladores",
    "fonte": "Fechamento de período contábil · visto em 281 treinamentos"
  },
  {
    "id": "contabilidade-055",
    "modulo": "contabilidade",
    "nivel": 2,
    "pergunta": "Quais dados de uma conta contábil já existente podem ser alterados?",
    "certa": "Descrição, classificação e natureza; o código da conta não pode ser alterado",
    "erradas": [
      "Somente a descrição, pois classificação e natureza ficam travadas depois de gravar",
      "Todos, inclusive o código, desde que a conta ainda não tenha lançamentos",
      "Nenhum dado, pois toda alteração exige excluir e recriar a conta no plano"
    ],
    "explicacao": "O código fica travado porque as integrações já estão configuradas por ele. Também não se muda de Analítica para Sintética uma conta que já tem lançamentos.",
    "caminho": "Arquivos > Contas Contábeis > Editar",
    "fonte": "Alteração de conta contábil · visto em 242 treinamentos"
  },
  {
    "id": "contabilidade-056",
    "modulo": "contabilidade",
    "nivel": 1,
    "pergunta": "Ao mudar uma conta de Sintética para Analítica, qual aba precisa ser preenchida?",
    "certa": "Planos Referenciais, vinculando a conta referencial do SPED",
    "erradas": [
      "Contabilidade Digital, vinculando o banco e a agência da conta",
      "Histórico, vinculando o texto padrão dos lançamentos da conta",
      "Centro de Custo, vinculando o departamento responsável pela conta"
    ],
    "explicacao": "Conta analítica precisa de vínculo com o plano referencial, que alimenta o SPED Contábil (ECD).",
    "caminho": "Arquivos > Contas Contábeis > aba Planos Referenciais",
    "fonte": "Alteração de conta contábil · visto em 242 treinamentos"
  },
  {
    "id": "contabilidade-057",
    "modulo": "contabilidade",
    "nivel": 2,
    "pergunta": "Como abrir e editar um lançamento a partir do relatório Razão?",
    "certa": "Marcar “Imprimir número”, escolher “Lote” e clicar no número do lote no relatório",
    "erradas": [
      "Marcar “Destacar linhas” e dar duplo clique sobre a linha do lançamento no relatório",
      "Emitir o Razão em Excel e abrir o lote correspondente pela planilha que foi gerada",
      "Marcar “Totalizar por conta” e clicar no total da conta desejada dentro do relatório"
    ],
    "explicacao": "Com o número do lote impresso, o clique abre o lançamento direto na tela, onde ele pode ser editado.",
    "caminho": "Relatórios > Razão",
    "fonte": "Emissão de livros contábeis · visto em 216 treinamentos"
  },
  {
    "id": "contabilidade-058",
    "modulo": "contabilidade",
    "nivel": 1,
    "pergunta": "É preciso validar a ECD no sistema anterior antes de importá-la no conversor?",
    "certa": "Não; basta gerar a ECD do período desejado",
    "erradas": [
      "Sim; o conversor só aceita arquivos já validados pelo programa da Receita",
      "Sim, mas só quando a ECD é do ano-calendário anterior",
      "Não; mas é preciso transmitir a ECD antes de gerar o arquivo"
    ],
    "explicacao": "A ECD serve só como fonte de dados. Gere o TXT no sistema anterior, faça o upload no conversor web e monte o de-para das contas.",
    "caminho": "Conversor web > Utilitários > Importação > Importador",
    "fonte": "Importação de ECD · visto em 213 treinamentos"
  },
  {
    "id": "contabilidade-059",
    "modulo": "contabilidade",
    "nivel": 2,
    "pergunta": "O que é o de-para feito no conversor de ECD?",
    "certa": "Vincular cada conta do sistema anterior (esquerda) à conta Domínio (direita)",
    "erradas": [
      "Escolher quais lançamentos do sistema anterior serão excluídos na importação",
      "Associar cada empresa do sistema anterior ao código de empresa do Domínio",
      "Trocar o layout do arquivo SPED do sistema anterior para o layout do Domínio"
    ],
    "explicacao": "O de-para diz ao conversor para qual conta do plano Domínio cada conta antiga vai. Salve backup periodicamente e gere o XML do conjunto de dados para importar.",
    "caminho": "Conversor web de ECD",
    "fonte": "Importação de ECD · visto em 213 treinamentos"
  },
  {
    "id": "contabilidade-060",
    "modulo": "contabilidade",
    "nivel": 3,
    "pergunta": "Que critérios o sistema usa para localizar a nota na baixa automática de recebimentos?",
    "certa": "Mesmo valor, CNPJ ou CPF, data (±15 dias) e parcela",
    "erradas": [
      "Apenas o número da nota fiscal e a data de emissão",
      "Valor aproximado, nome do cliente e centro de custo",
      "Número do documento, banco e agência da conta financeira"
    ],
    "explicacao": "Na baixa automática, o sistema cruza valor, inscrição, data e parcela. Por isso a nota precisa ter parcelas e o valor precisa bater exatamente.",
    "caminho": "Controle > Parâmetros > Contabilidade Digital > Opções",
    "fonte": "Baixa automática de recebimentos · visto em 167 treinamentos"
  },
  {
    "id": "contabilidade-061",
    "modulo": "contabilidade",
    "nivel": 2,
    "pergunta": "O plano de contas padrão da empresa 9995 serve para quais regimes?",
    "certa": "Simples, Presumido e Real; o terceiro setor tem plano específico",
    "erradas": [
      "Apenas Simples Nacional; Presumido e Real têm planos próprios",
      "Apenas Lucro Real; os demais regimes usam plano sintético",
      "Todos os regimes, inclusive o terceiro setor, sem exceção"
    ],
    "explicacao": "A 9995 é a empresa de cadastro do plano padrão. Para o terceiro setor existe um plano específico.",
    "caminho": "Relatórios > Cadastrais > Contas | F4",
    "fonte": "Visualização de plano de contas · visto em 162 treinamentos"
  },
  {
    "id": "contabilidade-062",
    "modulo": "contabilidade",
    "nivel": 2,
    "pergunta": "Como buscar uma conta pelo meio da descrição no cadastro de contas?",
    "certa": "Em Listagem, no campo Descrição, usando %palavra%",
    "erradas": [
      "No campo Descrição, digitando a palavra com asterisco no fim",
      "No F4, digitando o código reduzido da conta com zeros à esquerda",
      "No campo Classificação, digitando a palavra entre aspas"
    ],
    "explicacao": "O símbolo % antes e depois da palavra faz a busca por trecho em qualquer posição do texto.",
    "caminho": "Arquivos > Contas > Listagem",
    "fonte": "Visualização de plano de contas · visto em 162 treinamentos"
  },
  {
    "id": "contabilidade-063",
    "modulo": "contabilidade",
    "nivel": 2,
    "pergunta": "Qual o prazo padrão que o sistema aguarda a nota fiscal na automação de lançamentos?",
    "certa": "25 dias, ajustável conforme o fechamento",
    "erradas": [
      "10 dias, fixo para todos os clientes",
      "30 dias, contados do vencimento do extrato",
      "45 dias, contados da data do pagamento"
    ],
    "explicacao": "O prazo de aguardo vale para o extrato esperar a nota antes de contabilizar. Ajuste conforme o calendário de fechamento do escritório.",
    "caminho": "Controle > Parâmetros > Contabilidade Digital > Opções",
    "fonte": "Configuração de automação de lançamentos · visto em 158 treinamentos"
  },
  {
    "id": "contabilidade-064",
    "modulo": "contabilidade",
    "nivel": 2,
    "pergunta": "Qual opção da automação de lançamentos é sempre recomendada marcar?",
    "certa": "Baixa de impostos na escrita e folha",
    "erradas": [
      "Baixa de pagamentos e recebimentos na escrita, para todo cliente",
      "Não gravar automaticamente, para o usuário revisar tudo",
      "Aguardar nota fiscal por tempo indeterminado, sem prazo"
    ],
    "explicacao": "A baixa de pagamentos e recebimentos só vale se o escritório controla Contas a Pagar e a Receber. Já a baixa de impostos na escrita e na folha é sempre recomendada.",
    "caminho": "Controle > Parâmetros > Contabilidade Digital > Opções",
    "fonte": "Configuração de automação de lançamentos · visto em 158 treinamentos"
  },
  {
    "id": "contabilidade-065",
    "modulo": "contabilidade",
    "nivel": 2,
    "pergunta": "Como digitar o trecho do histórico ao configurar a contabilização do extrato bancário?",
    "certa": "Exatamente como está no extrato, pois maiúsculas e minúsculas importam",
    "erradas": [
      "Em maiúsculas, pois o sistema converte o extrato antes de comparar",
      "De forma resumida, porque o sistema aceita sinônimos da palavra",
      "Com curingas nas pontas, pois o sistema exige o símbolo % em tudo"
    ],
    "explicacao": "A palavra-chave precisa casar com o texto do extrato (por exemplo, TARIFA ou Pix - recebido). O tipo pode ser Soma (entrada), Subtrai (saída) ou Ambos.",
    "caminho": "Arquivos > Configuração para Contabilizar Extrato Bancário",
    "fonte": "Configuração de históricos de extrato bancário · visto em 152 treinamentos"
  },
  {
    "id": "contabilidade-066",
    "modulo": "contabilidade",
    "nivel": 2,
    "pergunta": "Qual instituição escolher na vinculação do plano referencial de uma empresa do Lucro Presumido?",
    "certa": "SPED Contábil PJ em geral",
    "erradas": [
      "Imunes e isentas, usada por entidades sem fins lucrativos",
      "Cooperativas, usada por empresas do setor agrícola",
      "Financeiras, usada por bancos e seguradoras"
    ],
    "explicacao": "Lucro Real e Presumido usam o plano referencial PJ em geral. Imunes e isentas seguem o regime informado em Parâmetros > Informativos > Dados SPED.",
    "caminho": "Utilitários > Vincular Plano Referencial às Contas Contábeis",
    "fonte": "Vinculação de plano referencial · visto em 148 treinamentos"
  },
  {
    "id": "contabilidade-067",
    "modulo": "contabilidade",
    "nivel": 2,
    "pergunta": "No cadastro de agência, o que informar no código da agência?",
    "certa": "Um número sequencial interno (1, 2, 3...), e não o número real da agência",
    "erradas": [
      "O número real da agência bancária, junto com o dígito verificador dela",
      "O código Bacen do banco, repetido igualmente para cada agência cadastrada",
      "O número da conta corrente da empresa, sem o dígito verificador da conta"
    ],
    "explicacao": "O código é só uma sequência interna do sistema. O número real e o dígito da agência vão nos campos próprios. Bancos e agências devem ser cadastrados antes da conta financeira.",
    "caminho": "Arquivos > Bancos | Arquivos > Agências | Arquivos > Contas Financeiras",
    "fonte": "Cadastro de conta financeira · visto em 148 treinamentos"
  },
  {
    "id": "contabilidade-068",
    "modulo": "contabilidade",
    "nivel": 3,
    "pergunta": "Ao replicar uma conta contábil criada na 9995, quais empresas desmarcar?",
    "certa": "9990, 9995, Partido Político e Escritório Contábil; manter 9992, 9993 e 9994",
    "erradas": [
      "Nenhuma: a conta deve ir para todas as empresas, inclusive as de modelo e as especiais",
      "Apenas as empresas inativas, mantendo as empresas modelo e a de terceiro setor",
      "As empresas 9992, 9993 e 9994, que são modelo, mantendo marcadas todas as demais"
    ],
    "explicacao": "A conta é criada na 9995 (padrão geral) e replicada às empresas modelo adequadas. As exceções têm planos próprios.",
    "caminho": "Arquivos > Contas Contábeis > Replicar",
    "fonte": "Replicação de conta contábil · visto em 140 treinamentos"
  },
  {
    "id": "contabilidade-069",
    "modulo": "contabilidade",
    "nivel": 2,
    "pergunta": "Qual o melhor caminho para corrigir um único lançamento errado vindo do extrato?",
    "certa": "Utilitários > Exclusão em Lote, em vez de reprocessar o extrato",
    "erradas": [
      "Reprocessar o extrato da competência inteira em Utilitários",
      "Excluir a empresa e importar o extrato do banco novamente",
      "Editar o lote direto na tela de Razão, sem excluir nada"
    ],
    "explicacao": "Reprocessar mexe em todo o período (e não vale para competências fechadas nem com agente vermelho). Para correção pontual, a exclusão em lote é mais segura.",
    "caminho": "Utilitários > Exclusão em Lote",
    "fonte": "Reprocessamento de extrato bancário · visto em 140 treinamentos"
  },
  {
    "id": "contabilidade-070",
    "modulo": "contabilidade",
    "nivel": 2,
    "pergunta": "Como o parâmetro de contas deve ficar para um perfil Analítico?",
    "certa": "Marcar “Cada fornecedor gera uma conta” e “Cada cliente gera uma conta”",
    "erradas": [
      "Desmarcar as duas, usando só “Clientes Diversos” e “Fornecedores Diversos”",
      "Marcar só “Cada cliente gera uma conta”, deixando fornecedor sintético",
      "Marcar só “Cada fornecedor gera uma conta”, deixando cliente sintético"
    ],
    "explicacao": "No Analítico, o sistema cria uma conta para cada CNPJ ao importar as notas. No Sintético usam-se as contas “Diversos”, e o Misto marca apenas uma das opções.",
    "caminho": "Controle > Parâmetros > Contabilidade",
    "fonte": "Conta analítica e sintética · visto em 138 treinamentos"
  },
  {
    "id": "contabilidade-071",
    "modulo": "contabilidade",
    "nivel": 3,
    "pergunta": "Qual data usar ao processar o Balão de saldos iniciais a partir da ECD do sistema anterior?",
    "certa": "Um dia após o SPED (31/12/25, se o SPED é de jan/26)",
    "erradas": [
      "A mesma data final do SPED do sistema anterior, sem ajustes de dia",
      "O primeiro dia do ano seguinte ao do exercício da ECD importada",
      "A data em que a empresa foi cadastrada pela primeira vez no Domínio"
    ],
    "explicacao": "O saldo inicial entra no dia anterior ao primeiro movimento. Depois, importe o Balão I-155 gerado pelo conversor pelo menu de importação.",
    "caminho": "Utilitários > Importação > Importação Padrão",
    "fonte": "Importação de saldos iniciais · visto em 137 treinamentos"
  },
  {
    "id": "contabilidade-072",
    "modulo": "contabilidade",
    "nivel": 2,
    "pergunta": "Quais demonstrativos são obrigatórios na geração da ECD?",
    "certa": "Balanço e DRE; mais DLPA ou DMPL, mas não os dois",
    "erradas": [
      "Somente o Balanço Patrimonial",
      "Balanço, DRE, DLPA e DMPL, sempre os quatro",
      "DRE e DMPL, pois o Balanço é opcional"
    ],
    "explicacao": "Na guia Demonstrativos, Balanço e DRE são obrigatórios, e a empresa escolhe entre DLPA e DMPL. Antes, o SPED Contábil precisa estar habilitado em Parâmetros.",
    "caminho": "Relatórios > Informativos > SPED Contábil > guia Demonstrativos",
    "fonte": "Geração de ECD · visto em 133 treinamentos"
  },
  {
    "id": "contabilidade-073",
    "modulo": "contabilidade",
    "nivel": 2,
    "pergunta": "Qual a configuração recomendada de “Repetir após gravar” e “Repetir a cada partida” nos lançamentos?",
    "certa": "Repetir após gravar só a Data; repetir a cada partida só o Histórico",
    "erradas": [
      "Repetir após gravar a Data e o Histórico; a cada partida, a Conta",
      "Repetir após gravar só o Valor; a cada partida só a Data",
      "Marcar todas as opções de repetição, para ganhar velocidade"
    ],
    "explicacao": "Assim cada novo lançamento mantém a data e cada partida repete o histórico, sem arrastar valores ou contas por engano.",
    "caminho": "Controle > Parâmetros > Lançamentos",
    "fonte": "Outros assuntos — Contabilidade · visto em 484 treinamentos"
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
    "certa": "Gerar, assinar e transmitir a ECF de novo, pois o nome do arquivo muda",
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
    "certa": "Porque o sistema trava os cálculos futuros; deve ser feito manualmente com a data correta",
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
    "certa": "“Efetuar cálculos de tributos federais conforme DCTF Web”",
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
    "certa": "Copiar o acumulador 301, criar um novo com outra alíquota e vincular ao código de serviço",
    "erradas": [
      "Criar uma vigência por atividade e usar uma empresa separada para cada uma das atividades",
      "Alterar a presunção do acumulador 301 a cada mês, conforme a nota que for lançada no período",
      "Lançar as notas de menor presunção como receita financeira, em outro imposto da apuração"
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
    "certa": "Isenta em REINF > Rendimentos Isentos; acima em Movimentos > Lucros e Dividendos Tributáveis",
    "erradas": [
      "As duas em Movimentos > Lucros e Dividendos Tributáveis, separadas por sócio e por competência",
      "A isenta na Folha, no cadastro do sócio; a acima na Contabilidade, pelo razão da conta",
      "As duas em REINF > Rendimentos Isentos, informando a alíquota do IR retido em cada uma"
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
    "certa": "Vigência do quadro societário posterior ao período: ajustar o período para igual ou maior",
    "erradas": [
      "O certificado digital do escritório não tem permissão para ler o quadro societário",
      "Os sócios foram cadastrados sem CPF no quadro societário da empresa do cliente",
      "A empresa padrão ainda não foi atualizada com os sócios do cliente no sistema"
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
    "certa": "Procuração só no CPF: ajuste para o CNPJ do escritório ou use o método convencional",
    "erradas": [
      "O certificado digital venceu; renove o certificado e refaça a procuração do escritório",
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
    "id": "honorarios-012",
    "modulo": "honorarios",
    "nivel": 2,
    "pergunta": "Como se faz o login no Onvio Express?",
    "certa": "Por um código de acesso gerado nas iniciais do usuário, e nunca por senha",
    "erradas": [
      "Pela mesma senha do Onvio Portal, cadastrada pelo usuário principal",
      "Por certificado digital instalado no computador do escritório inteiro",
      "Pelo usuário e senha do Domínio, definidos em Controle > Usuários"
    ],
    "explicacao": "No Onvio Express o acesso é sempre por código (gerado em iniciais do usuário > Código de Acesso). A pasta Express é transitória: os documentos sobem e são excluídos dela.",
    "caminho": "Menu Express > instalador 64 bits > iniciais do usuário > Código de Acesso",
    "fonte": "Outros assuntos — Honorários e Gestão do Escritório · visto em 273 treinamentos"
  },
  {
    "id": "honorarios-013",
    "modulo": "honorarios",
    "nivel": 2,
    "pergunta": "Um cliente avisa numa reunião que pretende cancelar. O que o técnico deve fazer?",
    "certa": "Abrir na hora o SPV, na categoria Prevenção de Cancelamento, mesmo que seja só sinalização",
    "erradas": [
      "Esperar o pedido formal por e-mail para só então abrir o chamado no SPV do cliente",
      "Avisar o gerente da carteira e abrir o SPV somente depois que o cliente confirmar o cancelamento",
      "Registrar a sinalização na ata da reunião e acompanhar o caso até o fim do mês corrente"
    ],
    "explicacao": "A solicitação de cancelamento deve ser aberta na hora, anexando print ou e-mail. Se o SPV não for aberto e o cliente cancelar, o escritório perde o histórico de reversão.",
    "caminho": "SPV > categoria Prevenção de Cancelamento",
    "fonte": "Outros assuntos — Honorários e Gestão do Escritório · visto em 273 treinamentos"
  },
  {
    "id": "honorarios-014",
    "modulo": "honorarios",
    "nivel": 2,
    "pergunta": "Quando a cobrança automática de documentos é disparada?",
    "certa": "Só enquanto o documento não foi anexado; não é obrigatória, e a cobrança manual é possível",
    "erradas": [
      "Em todo vencimento de tarefa, mesmo que o cliente já tenha enviado o documento solicitado",
      "Apenas quando o cliente está inadimplente com os honorários do escritório no Contas a Receber",
      "Uma única vez, na data legal da tarefa, sem repetir nos dias seguintes ao primeiro aviso"
    ],
    "explicacao": "A cobrança só dispara quando o documento ainda não foi anexado e não é obrigatória: o escritório pode cobrar manualmente.",
    "caminho": "Configure > Tarefas Recorrentes > [tarefa] > Cobranças de documentos",
    "fonte": "Outros assuntos — Honorários e Gestão do Escritório · visto em 273 treinamentos"
  },
  {
    "id": "honorarios-015",
    "modulo": "honorarios",
    "nivel": 2,
    "pergunta": "Qual modelo de documento de cobrança traz o CNPJ do cliente para robôs de integração, como o Acessórios?",
    "certa": "O modelo 11 (detalhado); o modelo 10 é o padrão",
    "erradas": [
      "O modelo 10 (padrão); o modelo 11 é o resumido",
      "O modelo 12 (integração); o modelo 10 é o antigo",
      "Qualquer modelo, desde que se marque o CNPJ nas observações"
    ],
    "explicacao": "Para integração com robôs que leem o CNPJ, o modelo 11 é necessário. O 10 é o padrão.",
    "caminho": "Honorários > Processos > Documento de Cobrança > Emissão",
    "fonte": "Emissão de documento de cobrança · visto em 207 treinamentos"
  },
  {
    "id": "honorarios-016",
    "modulo": "honorarios",
    "nivel": 1,
    "pergunta": "O documento de cobrança (sem ser o boleto Domínio) dá baixa automática no recebimento?",
    "certa": "Não: exige baixa manual, ao contrário do boleto Domínio",
    "erradas": [
      "Sim, a baixa vem sozinha quando o cliente paga em qualquer banco",
      "Sim, mas só depois de importar o arquivo de retorno do banco",
      "Não, mas o sistema dispara um aviso e baixa no dia seguinte"
    ],
    "explicacao": "O documento de cobrança é um comprovante para o cliente, sem integração bancária. A baixa é manual.",
    "caminho": "Processos > Documento de Cobrança > Emissão",
    "fonte": "Emissão de documento de cobrança · visto em 207 treinamentos"
  },
  {
    "id": "honorarios-017",
    "modulo": "honorarios",
    "nivel": 2,
    "pergunta": "Para o envio do documento de cobrança por e-mail funcionar, o que precisa estar configurado?",
    "certa": "O servidor de e-mail em Utilitários > Configurar Envio de E-mail",
    "erradas": [
      "A conta do Gmail do escritório em Controle > Parâmetros > Geral",
      "O portal do cliente ativo em Controle > Empresas > Módulos",
      "O certificado digital do contador em Controle > Contadores"
    ],
    "explicacao": "Sem o servidor configurado (normalmente com apoio da TI), o envio não sai. O e-mail de cobrança do cliente fica em Arquivos > Clientes > aba Cobrança.",
    "caminho": "Utilitários > Configurar Envio de E-mail",
    "fonte": "Envio de cobrança por e-mail · visto em 107 treinamentos"
  },
  {
    "id": "honorarios-018",
    "modulo": "honorarios",
    "nivel": 2,
    "pergunta": "Como ver as retenções de IR, CRF e INSS dos clientes faturados?",
    "certa": "Em Relatórios > Faturamento > Relação, filtrando “Com Retenção” e marcando o detalhamento",
    "erradas": [
      "Em Relatórios > Faturamento > Por Extrato, marcando a opção de resumo por evento",
      "Em Utilitários > Central de Cobranças, filtrando as parcelas em aberto do mês",
      "Em Arquivos > Eventos, abrindo cada evento e conferindo a soma na base"
    ],
    "explicacao": "No relatório Relação, o filtro “Com Retenção” com o detalhamento mostra as retenções, calculadas automaticamente pelo sistema.",
    "caminho": "Relatórios > Faturamento > Relação",
    "fonte": "Relatório de faturamento · visto em 197 treinamentos"
  },
  {
    "id": "honorarios-019",
    "modulo": "honorarios",
    "nivel": 3,
    "pergunta": "Onde aparecem os lançamentos feitos em “Outros Impostos Calculados”?",
    "certa": "Não aparecem em Saídas, mas aparecem nos relatórios de Faturamento",
    "erradas": [
      "Aparecem em Saídas e também somam no Demonstrativo de Faturamento",
      "Aparecem apenas na Central de Cobranças, junto das parcelas em aberto",
      "Não aparecem em lugar nenhum até o fechamento da competência"
    ],
    "explicacao": "Esses lançamentos ficam fora de Saídas, mas entram no Faturamento. Lembre também que o Demonstrativo só soma acumuladores marcados como receita bruta.",
    "caminho": "Relatórios > Faturamento",
    "fonte": "Relatório de faturamento · visto em 197 treinamentos"
  },
  {
    "id": "honorarios-020",
    "modulo": "honorarios",
    "nivel": 2,
    "pergunta": "Numa tarefa recorrente, a data legal é dia 5 e a data meta é -10. Qual é o prazo interno de entrega?",
    "certa": "Em torno do dia 25 do mês anterior, pois o valor negativo conta dias antes da legal",
    "erradas": [
      "Dia 15 do mesmo mês, pois o valor negativo soma dias úteis após a data legal",
      "Dia 5 do mês seguinte, porque a data meta só vale para tarefas de frequência mensal",
      "Dia 10 do mês anterior, já que a data meta é sempre um dia fixo dentro do mês"
    ],
    "explicacao": "A data meta negativa é contada para trás a partir da data legal. Legal dia 5 e meta -10 resulta em entrega no dia 25 ou 26 do mês anterior.",
    "caminho": "Configure > Tarefas Recorrentes > Nova Tarefa",
    "fonte": "Criação de tarefa recorrente · visto em 190 treinamentos"
  },
  {
    "id": "honorarios-021",
    "modulo": "honorarios",
    "nivel": 2,
    "pergunta": "Alterou-se a configuração de uma tarefa recorrente. O que acontece com as tarefas que já foram geradas?",
    "certa": "Nada: vale só para as próximas; as já geradas devem ser removidas e geradas de novo",
    "erradas": [
      "Todas as tarefas já geradas são atualizadas na hora, com as novas datas e responsáveis",
      "Só as tarefas ainda não concluídas do mês são atualizadas automaticamente pelo sistema",
      "As tarefas geradas são excluídas e recriadas sozinhas na virada de cada competência"
    ],
    "explicacao": "A mudança afeta só as próximas gerações. Para corrigir as já criadas, remova-as e gere novamente pela aba Geração.",
    "caminho": "Configure > Tarefas Recorrentes > Gerenciar > aba Geração",
    "fonte": "Criação de tarefa recorrente · visto em 190 treinamentos"
  },
  {
    "id": "honorarios-022",
    "modulo": "honorarios",
    "nivel": 2,
    "pergunta": "Uma obrigação tem vencimentos em dias diferentes (5, 10, 15 e 20) conforme o cliente. Como configurar?",
    "certa": "Criar uma tarefa por vencimento e vincular a cada uma os clientes específicos",
    "erradas": [
      "Criar uma única tarefa e informar os quatro dias no campo de data legal",
      "Criar uma tarefa só e ajustar a data de cada cliente depois de gerada",
      "Usar a frequência diária e desmarcar os dias que não se aplicam ao cliente"
    ],
    "explicacao": "Para múltiplos vencimentos, cria-se uma tarefa por vencimento e vinculam-se, na aba Clientes, as empresas de cada data.",
    "caminho": "Configure > Tarefas Recorrentes > Nova Tarefa > aba Clientes",
    "fonte": "Criação de tarefa recorrente · visto em 190 treinamentos"
  },
  {
    "id": "honorarios-023",
    "modulo": "honorarios",
    "nivel": 2,
    "pergunta": "Quantas vezes a importação de clientes em lote pode ser usada no Honorários?",
    "certa": "Só uma vez: os clientes novos depois entram manualmente",
    "erradas": [
      "Quantas vezes forem necessárias, desde que o TXT seja novo",
      "Uma vez por mês, na competência do primeiro faturamento",
      "Uma vez por contrato, depois de gravar o tipo de contrato"
    ],
    "explicacao": "A importação em lote funciona uma única vez. Exige usuário Gerente e o município preenchido em Controle > Empresas.",
    "caminho": "Tabelas > Importação de Arquivo de Texto de Tabelas",
    "fonte": "Importação de dados · visto em 189 treinamentos"
  },
  {
    "id": "honorarios-024",
    "modulo": "honorarios",
    "nivel": 1,
    "pergunta": "Contratos importados em lote chegam com qual valor?",
    "certa": "R$ 1,00 e data padrão: é preciso ajustar cada um manualmente",
    "erradas": [
      "O valor médio dos contratos já existentes no escritório",
      "R$ 0,00, sem data, e o faturamento fica bloqueado",
      "O valor que estava no sistema anterior, já reajustado"
    ],
    "explicacao": "Os contratos vêm com R$ 1,00 e data padrão. Use o relatório Contratos > Relação para identificar os que ainda estão com R$ 1,00.",
    "caminho": "Relatórios > Contratos > Relação",
    "fonte": "Importação de dados · visto em 189 treinamentos"
  },
  {
    "id": "honorarios-025",
    "modulo": "honorarios",
    "nivel": 2,
    "pergunta": "No contrato, qual é a diferença entre data de emissão e início do faturamento?",
    "certa": "Emissão é a data histórica de quando começou; o início do faturamento é quando passa a cobrar",
    "erradas": [
      "A emissão é a data do primeiro vencimento; o início do faturamento é a data de assinatura",
      "As duas são a mesma data e só mudam se o contrato for reajustado depois",
      "A emissão vale só para o modelo impresso do contrato; o início é a data do cadastro"
    ],
    "explicacao": "Data de emissão não é início de faturamento. As datas devem coincidir com as de Arquivos > Clientes, para não gerar erro de data de emissão.",
    "caminho": "Arquivos > Contratos > aba Contrato",
    "fonte": "Emissão de contrato · visto em 172 treinamentos"
  },
  {
    "id": "honorarios-026",
    "modulo": "honorarios",
    "nivel": 1,
    "pergunta": "Qual formato de modelo de contrato é obrigatório quando o Domínio roda na nuvem?",
    "certa": ".odt (OpenOffice); o Word .doc não funciona",
    "erradas": [
      ".docx do Word, salvo em compatibilidade",
      ".pdf com campos de formulário editáveis",
      ".rtf gerado pelo bloco de notas"
    ],
    "explicacao": "Na nuvem, o modelo precisa estar em .odt. Para personalizar, use Documento Vinculado > Novo Documento e as variáveis do Domínio.",
    "caminho": "Arquivos > Contratos > aba Contrato > Emitir",
    "fonte": "Emissão de contrato · visto em 172 treinamentos"
  },
  {
    "id": "honorarios-027",
    "modulo": "honorarios",
    "nivel": 2,
    "pergunta": "Depois de reajustes, o que acontece com o “Valor Original” do contrato?",
    "certa": "Permanece fixo; os reajustes aparecem em “Valor do Contrato”",
    "erradas": [
      "É atualizado a cada reajuste e perde o histórico",
      "Passa a mostrar o valor médio de todos os reajustes",
      "É zerado para que o novo valor seja lançado em seguida"
    ],
    "explicacao": "O Valor Original é o valor de partida e não muda. O valor vigente, com reajustes, está em Valor do Contrato.",
    "caminho": "Arquivos > Contratos",
    "fonte": "Emissão de contrato · visto em 172 treinamentos"
  },
  {
    "id": "honorarios-028",
    "modulo": "honorarios",
    "nivel": 1,
    "pergunta": "No cadastro de evento, qual unidade cobra um percentual sobre a mensalidade do contrato?",
    "certa": "Percentual de Contrato (% sobre a mensalidade)",
    "erradas": [
      "Valor (digitado a cada lançamento)",
      "Quantidade (valor unitário multiplicado)",
      "Fórmula (faixas progressivas, com suporte)"
    ],
    "explicacao": "Valor deixa o campo livre no lançamento; Quantidade multiplica um valor fixo; Percentual de Contrato aplica % sobre a mensalidade; Fórmula serve para faixas progressivas.",
    "caminho": "Arquivos > Eventos",
    "fonte": "Cadastro de eventos e serviços · visto em 165 treinamentos"
  },
  {
    "id": "honorarios-029",
    "modulo": "honorarios",
    "nivel": 2,
    "pergunta": "O cliente paga conforme faixas progressivas de funcionários ou horas. Como configurar o evento?",
    "certa": "Usar a unidade Fórmula, que exige configuração feita junto com o suporte",
    "erradas": [
      "Usar a unidade Quantidade e alterar o valor a cada mês manualmente",
      "Usar a unidade Valor e criar um evento diferente para cada faixa",
      "Usar a unidade Percentual de Contrato com o reajuste anual ligado"
    ],
    "explicacao": "Escalas por faixa só são possíveis com Fórmula, que precisa de configuração com o suporte; não há tela padrão.",
    "caminho": "Arquivos > Eventos",
    "fonte": "Cadastro de eventos e serviços · visto em 165 treinamentos"
  },
  {
    "id": "honorarios-030",
    "modulo": "honorarios",
    "nivel": 2,
    "pergunta": "Qual é o prazo de expiração do boleto emitido pela Domínio Conta PJ?",
    "certa": "Até 59 dias, com 30 dias como padrão",
    "erradas": [
      "Até 30 dias, com 15 dias como padrão",
      "Até 90 dias, com 60 dias como padrão",
      "Fixo em 10 dias, sem possibilidade de alterar"
    ],
    "explicacao": "Em Outros Dados, a expiração vai até 59 dias (padrão 30). Ali também se definem multa e juros, como 2% e 1%.",
    "caminho": "Processos > Domínio Conta PJ > Boletos > Emissão",
    "fonte": "Domínio Conta PJ · visto em 155 treinamentos"
  },
  {
    "id": "honorarios-031",
    "modulo": "honorarios",
    "nivel": 2,
    "pergunta": "Em quanto tempo o pagamento do boleto da Domínio Conta PJ compensa, e como fica a baixa?",
    "certa": "Pix em 3 a 5 minutos e código de barras em 24 horas úteis, com baixa automática",
    "erradas": [
      "Pix em 24 horas úteis e código de barras em 3 a 5 minutos, com baixa manual",
      "Os dois em 24 horas úteis, e a baixa depende da importação do retorno",
      "Os dois na hora, mas a baixa só ocorre no fechamento da competência"
    ],
    "explicacao": "Pix compensa em minutos e código de barras em até 24 horas úteis. A baixa no Contas a Receber é automática.",
    "caminho": "Processos > Domínio Conta PJ",
    "fonte": "Domínio Conta PJ · visto em 155 treinamentos"
  },
  {
    "id": "honorarios-032",
    "modulo": "honorarios",
    "nivel": 2,
    "pergunta": "O que fazer antes de emitir boletos para que o QR Code do Pix saia impresso?",
    "certa": "Cadastrar a chave Pix no aplicativo Domínio Escritório",
    "erradas": [
      "Marcar “Imprimir juros e multa” em Outros Dados",
      "Registrar o boleto no banco e aguardar a remessa",
      "Informar a chave Pix em cada cadastro de cliente"
    ],
    "explicacao": "A chave Pix é cadastrada no aplicativo da Domínio Conta PJ. Sem ela, o QR Code não sai no boleto.",
    "caminho": "Aplicativo Domínio Escritório / Processos > Domínio Conta PJ > Boletos",
    "fonte": "Domínio Conta PJ · visto em 155 treinamentos"
  },
  {
    "id": "honorarios-033",
    "modulo": "honorarios",
    "nivel": 3,
    "pergunta": "O que o botão “Enviar Contas a Pagar” da Domínio Conta PJ envia?",
    "certa": "Só tributos e folha, de forma automática; despesas manuais não vão",
    "erradas": [
      "Todas as despesas lançadas no mês, inclusive as feitas manualmente",
      "Apenas as despesas manuais, já que tributos são pagos pelo e-CAC",
      "Somente os honorários a receber dos clientes faturados na competência"
    ],
    "explicacao": "Em Processos > Enviar Contas a Pagar, escolhe-se “Não Enviada” e a competência. Só tributos e folha são automáticos; as demais despesas ficam manuais.",
    "caminho": "Processos > Enviar Contas a Pagar",
    "fonte": "Domínio Conta PJ · visto em 155 treinamentos"
  },
  {
    "id": "honorarios-034",
    "modulo": "honorarios",
    "nivel": 1,
    "pergunta": "Qual é o caminho principal para reajustar contratos?",
    "certa": "Utilitários > Reajuste de Contratos",
    "erradas": [
      "Arquivos > Contratos, alterando o valor direto no cadastro",
      "Processos > Contas a Receber > Lançamento Mensal",
      "Controle > Parâmetros > aba Faturamento"
    ],
    "explicacao": "O reajuste é feito em Utilitários > Reajuste de Contratos, em grupo ou individual. Alterar direto em Arquivos > Contratos só vale antes do primeiro faturamento.",
    "caminho": "Utilitários > Reajuste de Contratos",
    "fonte": "Reajuste de contrato · visto em 131 treinamentos"
  },
  {
    "id": "honorarios-035",
    "modulo": "honorarios",
    "nivel": 2,
    "pergunta": "Depois do primeiro faturamento, o cliente quer mudar o valor do contrato. O que fazer?",
    "certa": "Usar o Reajuste de Contratos, pois o contrato fica travado para alteração direta",
    "erradas": [
      "Alterar direto em Arquivos > Contratos e faturar de novo a competência",
      "Excluir o contrato e cadastrar outro com um evento fixo no lugar",
      "Lançar a diferença em Lançamento Mensal e deixar o contrato como está"
    ],
    "explicacao": "Depois do primeiro faturamento o contrato trava. Qualquer mudança de valor deve passar pelo Reajuste de Contratos, que registra histórico.",
    "caminho": "Utilitários > Reajuste de Contratos",
    "fonte": "Reajuste de contrato · visto em 131 treinamentos"
  },
  {
    "id": "honorarios-036",
    "modulo": "honorarios",
    "nivel": 3,
    "pergunta": "O cliente recebeu um desconto permanente. Como aplicar no reajuste para que os próximos partam do valor reduzido?",
    "certa": "Usar “Novo valor”, pois a base do reajuste futuro passa a ser o valor reduzido",
    "erradas": [
      "Usar percentual negativo, mantendo o valor original como base dos próximos reajustes",
      "Criar um evento fixo de desconto com o mesmo valor, todo mês no contrato",
      "Excluir o histórico de reajustes e lançar o desconto como evento avulso"
    ],
    "explicacao": "Com “Novo valor”, o desconto vira o novo valor do contrato e as próximas correções incidem sobre ele.",
    "caminho": "Utilitários > Reajuste de Contratos",
    "fonte": "Reajuste de contrato · visto em 131 treinamentos"
  },
  {
    "id": "honorarios-037",
    "modulo": "honorarios",
    "nivel": 2,
    "pergunta": "No cadastro de excedentes, qual a diferença entre avisar e calcular?",
    "certa": "Avisar só avisa; calcular (aba Cálculo) é que cobra, então marque os dois",
    "erradas": [
      "Avisar já cobra o excedente; calcular apenas mostra o valor em relatório",
      "Avisar vale para funcionários; calcular vale apenas para notas fiscais",
      "Avisar aparece no faturamento; calcular aparece só na Central de Cobranças"
    ],
    "explicacao": "Só a aba Cálculo, com “Calcular excedente no faturamento” e o evento definido, gera cobrança. Por isso é recomendável marcar ambos.",
    "caminho": "Arquivos > Contratos > aba Excedentes de Contrato",
    "fonte": "Configuração de excedentes · visto em 130 treinamentos"
  },
  {
    "id": "honorarios-038",
    "modulo": "honorarios",
    "nivel": 2,
    "pergunta": "Qual tipo de evento deve ser usado na cobrança de excedente?",
    "certa": "Tipo Quantidade, com o valor por unidade informado",
    "erradas": [
      "Tipo Valor, com o valor total digitado a cada lançamento",
      "Tipo Percentual de Contrato, sobre a mensalidade vigente",
      "Tipo Fórmula, sempre configurada junto com o suporte"
    ],
    "explicacao": "O excedente multiplica a quantidade excedida pelo valor unitário (por exemplo, R$ 50 por funcionário), então o evento precisa ser do tipo Quantidade.",
    "caminho": "Arquivos > Contratos > aba Excedentes de Contrato > Cálculo",
    "fonte": "Configuração de excedentes · visto em 130 treinamentos"
  },
  {
    "id": "honorarios-039",
    "modulo": "honorarios",
    "nivel": 3,
    "pergunta": "A folha da empresa fecha dia 3. Quando rodar o faturamento com excedente de funcionários?",
    "certa": "Depois do fechamento da folha (por exemplo, dia 3 ou 4), pois ele lê os funcionários dela",
    "erradas": [
      "Antes de fechar a folha, para conferir o número de funcionários de cada empresa cliente",
      "No último dia do mês, quando a quantidade de funcionários já está consolidada no sistema",
      "Em qualquer data, pois o sistema lê o cadastro de empregados em tempo real, sem a folha"
    ],
    "explicacao": "O excedente de funcionários usa os dados após o fechamento da folha. Sem a folha rodando 100%, o lançamento é manual em Lançamento Mensal.",
    "caminho": "Arquivos > Contratos > aba Excedentes de Contrato",
    "fonte": "Configuração de excedentes · visto em 130 treinamentos"
  },
  {
    "id": "honorarios-040",
    "modulo": "honorarios",
    "nivel": 2,
    "pergunta": "Qual é o percentual recomendado no adicional anual, e por quê?",
    "certa": "100% sobre o valor do contrato, porque ele acompanha os reajustes automaticamente",
    "erradas": [
      "50% sobre o valor do contrato, porque divide o pagamento em dois boletos",
      "Um valor fixo, porque o percentual não aceita reajuste do contrato",
      "100% sobre o valor da folha, porque é cobrado junto do 13º salário"
    ],
    "explicacao": "Com 100% sobre o valor do contrato, o adicional anual reajusta sozinho. Também é possível usar valor fixo.",
    "caminho": "Arquivos > Contratos > aba Adicional Anual",
    "fonte": "Configuração de adicional anual · visto em 127 treinamentos"
  },
  {
    "id": "honorarios-041",
    "modulo": "honorarios",
    "nivel": 3,
    "pergunta": "Para o adicional anual vencer em novembro e dezembro, usando a opção “Após o”, em que mês deve ser configurado o início?",
    "certa": "Em outubro, pois com “Após o” o vencimento cai nos meses seguintes",
    "erradas": [
      "Em novembro, no mesmo mês em que o adicional deve ser cobrado",
      "Em dezembro, porque o adicional anual sempre vence no fim do ano",
      "Em setembro, dois meses antes, para o boleto sair com antecedência"
    ],
    "explicacao": "Com “Após o”, a cobrança acontece depois da competência inicial. Para vencer em nov/dez, inicia-se em outubro, e o mês de início precisa estar marcado nos meses para faturar.",
    "caminho": "Arquivos > Contratos > aba Adicional Anual",
    "fonte": "Configuração de adicional anual · visto em 127 treinamentos"
  },
  {
    "id": "honorarios-042",
    "modulo": "honorarios",
    "nivel": 3,
    "pergunta": "O adicional anual do contrato já foi faturado. Como editar a configuração?",
    "certa": "Só depois de excluir os faturamentos já gerados, em Utilitários > Excluir > Faturamento",
    "erradas": [
      "Direto na aba Adicional Anual, pois a edição vale para as próximas competências",
      "Alterando o evento do adicional em Arquivos > Eventos, que reflete nos contratos",
      "Criando um novo contrato com adicional e encerrando o anterior na mesma data"
    ],
    "explicacao": "A configuração fica travada depois de faturada. Exclua os faturamentos gerados antes de editar e depois fature de novo.",
    "caminho": "Utilitários > Excluir > Faturamento",
    "fonte": "Configuração de adicional anual · visto em 127 treinamentos"
  },
  {
    "id": "honorarios-043",
    "modulo": "honorarios",
    "nivel": 1,
    "pergunta": "É preciso parametrizar cada empresa cliente no módulo Honorários?",
    "certa": "Não: só o escritório, pois é o único módulo com parâmetro centralizado",
    "erradas": [
      "Sim, cada cliente precisa de um parâmetro próprio de faturamento",
      "Sim, mas só os clientes que têm contrato com reajuste anual",
      "Não, mas o parâmetro do escritório precisa ser copiado para cada cliente"
    ],
    "explicacao": "O Honorários usa um parâmetro único do escritório, ao contrário de outros módulos em que cada empresa é parametrizada.",
    "caminho": "Controle > Parâmetros",
    "fonte": "Configuração de parâmetros gerais · visto em 108 treinamentos"
  },
  {
    "id": "honorarios-044",
    "modulo": "honorarios",
    "nivel": 3,
    "pergunta": "Ao abrir os Parâmetros do Honorários aparece “Não existe parâmetro” ou “você não possui acesso”. Qual a causa provável?",
    "certa": "Há mais de uma empresa marcada como escritório; deixe só a do escritório em Controle > Empresas > Módulo",
    "erradas": [
      "O usuário não é gerente; peça a ele que seja incluído no grupo de administradores",
      "O módulo Honorários está desativado; ative-o em Controle > Empresas > Módulo de cada cliente",
      "A empresa do escritório está sem certificado digital em Controle > Contadores"
    ],
    "explicacao": "Com várias empresas marcadas como escritório, o sistema se perde. Deixe apenas uma marcada como escritório.",
    "caminho": "Controle > Empresas > Módulo",
    "fonte": "Configuração de parâmetros gerais · visto em 108 treinamentos"
  },
  {
    "id": "honorarios-045",
    "modulo": "honorarios",
    "nivel": 1,
    "pergunta": "Na Central de Cobranças, o que significa a cor amarela na parcela?",
    "certa": "Que há uma ocorrência registrada",
    "erradas": [
      "Que a parcela está a vencer",
      "Que a parcela foi paga e conciliada",
      "Que a parcela venceu e não foi paga"
    ],
    "explicacao": "Cinza é a vencer; verde é paga/conciliada; azul escuro é vencida; amarelo é ocorrência registrada; vermelho é prazo de retorno vencido.",
    "caminho": "Utilitários > Central de Cobranças",
    "fonte": "Central de Cobranças · visto em 105 treinamentos"
  },
  {
    "id": "honorarios-046",
    "modulo": "honorarios",
    "nivel": 3,
    "pergunta": "Hoje é dia 23. Para ver o atraso real na Central de Cobranças, até que data filtrar o vencimento?",
    "certa": "Até o dia 22, o dia anterior ao atual",
    "erradas": [
      "Até o dia 23, incluindo o vencimento de hoje",
      "Até o dia 30, para pegar todas as parcelas do mês",
      "Até o dia 1º, que é o início da competência"
    ],
    "explicacao": "Parcelas que vencem hoje ainda não estão atrasadas. Filtrar até o dia anterior mostra só o atraso real.",
    "caminho": "Utilitários > Central de Cobranças",
    "fonte": "Central de Cobranças · visto em 105 treinamentos"
  },
  {
    "id": "honorarios-047",
    "modulo": "honorarios",
    "nivel": 2,
    "pergunta": "Na Central de Cobranças, quando a conciliação das parcelas é automática?",
    "certa": "Com o boleto da Domínio Conta PJ; nos outros bancos, só importando o retorno",
    "erradas": [
      "Com qualquer boleto registrado, em qualquer banco, assim que for pago",
      "Só com o documento de cobrança, depois de gerar o número do documento",
      "Nunca, pois toda conciliação é feita manualmente no Contas a Receber"
    ],
    "explicacao": "A conciliação automática é do Domínio Conta PJ. Em outros bancos, é preciso importar o arquivo de retorno.",
    "caminho": "Utilitários > Central de Cobranças",
    "fonte": "Central de Cobranças · visto em 105 treinamentos"
  },
  {
    "id": "honorarios-048",
    "modulo": "honorarios",
    "nivel": 2,
    "pergunta": "Qual é a diferença entre os reajustes “Data Base” e “Anual” no tipo de contrato?",
    "certa": "Data Base usa um mês fixo para todos; Anual segue o aniversário de cada contrato",
    "erradas": [
      "Data Base usa o aniversário de cada contrato; Anual usa um mês fixo para todos",
      "Data Base vale para contratos mensais; Anual vale só para trimestrais",
      "Data Base aplica o índice automático; Anual exige o valor digitado"
    ],
    "explicacao": "No tipo de contrato, “1-Data Base” habilita o Mês Base fixo; “2-Anual” reajusta no aniversário de cada contrato. Em nenhum dos dois o reajuste é automático: o sistema só alerta.",
    "caminho": "Arquivos > Tipos de Contrato",
    "fonte": "Configuração de tipo de contrato · visto em 105 treinamentos"
  },
  {
    "id": "honorarios-049",
    "modulo": "honorarios",
    "nivel": 3,
    "pergunta": "Qual cuidado vale para o indexador por Índice (IGP-M, INPC) no tipo de contrato?",
    "certa": "Alimentar a tabela em Arquivos > Tabelas > Índices antes de cada reajuste",
    "erradas": [
      "Nenhum: o sistema busca o índice sozinho na internet a cada competência",
      "Marcar o índice no cadastro do cliente, e não no tipo de contrato",
      "Cadastrar o índice só uma vez, no início da implantação do módulo"
    ],
    "explicacao": "O indexador por Índice depende da tabela de índices atualizada manualmente antes de cada reajuste. O mais usado é Moeda Corrente, com percentual ou valor manual.",
    "caminho": "Arquivos > Tipos de Contrato / Arquivos > Tabelas > Índices",
    "fonte": "Configuração de tipo de contrato · visto em 105 treinamentos"
  },
  {
    "id": "honorarios-050",
    "modulo": "honorarios",
    "nivel": 1,
    "pergunta": "O tipo de contrato indica o tipo de serviço prestado, como honorários contábeis ou DP?",
    "certa": "Não: é uma configuração de cobrança, com periodicidade e reajuste",
    "erradas": [
      "Sim, cada serviço do escritório precisa de um tipo de contrato próprio",
      "Sim, mas só para serviços com cobrança mensal recorrente",
      "Não, é o tipo da empresa cliente, como comércio ou indústria"
    ],
    "explicacao": "O tipo de contrato define periodicidade (mensal, trimestral, semestral, anual) e regra de reajuste. O serviço em si é definido pelos eventos.",
    "caminho": "Arquivos > Tipos de Contrato",
    "fonte": "Configuração de tipo de contrato · visto em 105 treinamentos"
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
    "id": "onvio-015",
    "modulo": "onvio",
    "nivel": 2,
    "pergunta": "Em que ordem habilitar o Box-e para uma empresa?",
    "certa": "Primeiro no Box (Portal do Cliente), depois no Domínio e por último no Busca",
    "erradas": [
      "Primeiro no Busca, depois no Box do Portal e por último no Domínio",
      "Primeiro no Domínio, depois no Busca NF-e e por último no Portal do Cliente",
      "Em qualquer ordem, desde que a chave seja colada no Busca no final"
    ],
    "explicacao": "A ordem é Box, Domínio e Busca. Depois da habilitação, as notas podem levar 24 horas para aparecer, e o Box-e só armazena a partir da data da habilitação.",
    "caminho": "Portal do Cliente > Box > Configuração",
    "fonte": "Outros assuntos — Onvio — Portais, Messenger e Processos · visto em 824 treinamentos"
  },
  {
    "id": "onvio-016",
    "modulo": "onvio",
    "nivel": 2,
    "pergunta": "Qual regra vale para a senha do Onvio no usuário gerente do Domínio?",
    "certa": "Alfanumérica, com maiúscula, minúscula, número e especial; trocou no Onvio, atualize no Domínio",
    "erradas": [
      "Apenas números e letras, sem caracteres especiais, e que vale por 30 dias antes de expirar",
      "Igual à senha do Windows do servidor, sem exigência de complexidade para o agente",
      "A senha do Domínio, que só deve ser alterada no Onvio quando o usuário pedir o reset"
    ],
    "explicacao": "Se a senha for trocada no Onvio e não atualizada no Domínio, o agente de comunicação fica vermelho e o Portal para de funcionar.",
    "caminho": "Controle > Permissões > Usuários",
    "fonte": "Habilitação do Portal do Cliente · visto em 443 treinamentos"
  },
  {
    "id": "onvio-017",
    "modulo": "onvio",
    "nivel": 1,
    "pergunta": "Por quanto tempo vale o convite enviado ao cliente para o Portal do Cliente?",
    "certa": "24 horas; se o cliente não criar a senha, é preciso reenviar",
    "erradas": [
      "7 dias, com reenvio automático no quarto dia sem acesso",
      "30 dias, até que o cliente aceite os termos de uso",
      "72 horas, com bloqueio do CPF após a primeira expiração"
    ],
    "explicacao": "O convite expira em 24 horas. Se o cliente deixar passar o prazo, reenvie.",
    "caminho": "Controle > Empresas > Módulos > Portal do Cliente",
    "fonte": "Habilitação do Portal do Cliente · visto em 443 treinamentos"
  },
  {
    "id": "onvio-018",
    "modulo": "onvio",
    "nivel": 2,
    "pergunta": "O que acontece se alguém clicar no stop do ícone ONV (play) no Domínio?",
    "certa": "O portal é desativado; o ícone deve ficar sempre ativo",
    "erradas": [
      "Só a fila de publicação pausa e retoma sozinha em seguida",
      "O usuário gerente é desconectado e o convite precisa ser reenviado",
      "O sistema encerra a sessão do Onvio, mas o portal segue funcionando"
    ],
    "explicacao": "O play deve estar ativo o tempo todo. Parar o ícone desativa o portal.",
    "caminho": "Ícone ONV (play) no rodapé do Domínio",
    "fonte": "Habilitação do Portal do Cliente · visto em 443 treinamentos"
  },
  {
    "id": "onvio-019",
    "modulo": "onvio",
    "nivel": 2,
    "pergunta": "Qual é a expiração máxima recomendada para o link de acesso sem login do Portal?",
    "certa": "7 dias, pois links antigos podem levar a pagar guia duplicada",
    "erradas": [
      "30 dias, para o cliente ter tempo de abrir o link com calma",
      "24 horas, porque o link some depois do primeiro uso do cliente",
      "90 dias, que é o prazo padrão de vencimento das guias do mês"
    ],
    "explicacao": "Link muito longo permite que o cliente clique num link antigo e pague guia em duplicidade, além de expor documentos. O máximo recomendado é 7 dias.",
    "caminho": "Portal do Cliente > Configurações > Parâmetros",
    "fonte": "Configuração de parâmetros gerais do Portal · visto em 199 treinamentos"
  },
  {
    "id": "onvio-020",
    "modulo": "onvio",
    "nivel": 2,
    "pergunta": "O cliente recebe notificações demais do escritório. Qual a causa mais comum?",
    "certa": "3 avisos do mesmo fato (Processos, WhatsApp e Portal); desabilite o do Portal",
    "erradas": [
      "O sistema reenvia o aviso todo dia até o cliente baixar o documento do Portal",
      "A notificação está marcada para todos os usuários e não só para o responsável",
      "O remetente do sistema é bloqueado e o e-mail volta para o escritório"
    ],
    "explicacao": "Com tudo habilitado, o cliente pode ser avisado três vezes. Desabilitar a notificação do Portal evita o excesso.",
    "caminho": "Portal do Cliente > Configurações > Notificações do Escritório",
    "fonte": "Configuração de notificações do escritório · visto em 282 treinamentos"
  },
  {
    "id": "onvio-021",
    "modulo": "onvio",
    "nivel": 2,
    "pergunta": "Qual notificação costuma gerar volume excessivo e qual é mais útil?",
    "certa": "“Documento visualizado” gera muito volume; “documento não visualizado” é mais útil",
    "erradas": [
      "“Documento não visualizado” gera muito volume; “visualizado” é mais útil",
      "“Nova solicitação” gera muito volume; “resposta do cliente” é mais útil",
      "“Responsável atribuído” gera muito volume; “nova solicitação” é mais útil"
    ],
    "explicacao": "Avisar de cada documento visto enche a caixa de e-mail. O aviso de não visualizado ajuda a cobrar o cliente.",
    "caminho": "Portal do Cliente > Configurações > Notificações do Escritório",
    "fonte": "Configuração de notificações do escritório · visto em 282 treinamentos"
  },
  {
    "id": "onvio-022",
    "modulo": "onvio",
    "nivel": 3,
    "pergunta": "Ao postar uma notícia para um grupo de empresas do mesmo contato, qual cuidado evita e-mails repetidos?",
    "certa": "Selecionar só a empresa principal, senão cada empresa gera um e-mail separado",
    "erradas": [
      "Selecionar todas as empresas do grupo, para o sistema unificar os envios",
      "Publicar como circular, que sempre envia um único e-mail por contato",
      "Desmarcar o resumo da notícia, que é o que dispara o e-mail repetido"
    ],
    "explicacao": "Para um grupo de empresas com o mesmo contato, selecione somente a principal. Se marcar todas, o mesmo contato recebe um e-mail por empresa.",
    "caminho": "Portal do Cliente > Notícias > Gerenciamento de Notícias",
    "fonte": "Configuração de notificações do escritório · visto em 282 treinamentos"
  },
  {
    "id": "onvio-023",
    "modulo": "onvio",
    "nivel": 1,
    "pergunta": "Em que formato a competência deve ser digitada no relatório de documentos do Portal?",
    "certa": "MM/AAAA, com a barra obrigatória",
    "erradas": [
      "MMAAAA, sem barra, para evitar erro de pesquisa no relatório",
      "AAAA-MM, no padrão da importação de planilhas do sistema",
      "DD/MM/AAAA, com o dia do envio do documento ao cliente"
    ],
    "explicacao": "A competência é obrigatória e deve ter barra, como 08/2026. Sem a barra o relatório não retorna resultado.",
    "caminho": "Onvio > Relatórios > Documentos do Portal do Cliente",
    "fonte": "Visualização e download pelo cliente · visto em 275 treinamentos"
  },
  {
    "id": "onvio-024",
    "modulo": "onvio",
    "nivel": 2,
    "pergunta": "Uma folha do mês 8 foi enviada em outubro. Que competência se informa no relatório do Portal?",
    "certa": "08/2026, porque vale a competência do cálculo e não a do envio",
    "erradas": [
      "10/2026, porque vale o mês em que o documento foi publicado",
      "09/2026, porque o relatório usa o mês seguinte ao do cálculo",
      "08/2026 a 10/2026, pois o relatório exige o intervalo completo"
    ],
    "explicacao": "A competência é sempre a do cálculo. A data de publicação e a de visualização aparecem em colunas à parte.",
    "caminho": "Onvio > Relatórios > Documentos do Portal do Cliente",
    "fonte": "Visualização e download pelo cliente · visto em 275 treinamentos"
  },
  {
    "id": "onvio-025",
    "modulo": "onvio",
    "nivel": 2,
    "pergunta": "O que a lixeirinha em Ações faz no relatório de documentos do Portal?",
    "certa": "Exclui o envio; mesmo visualizado, o cliente perde o acesso até novo envio",
    "erradas": [
      "Arquiva o envio na Lixeira do Portal, e o cliente continua com acesso",
      "Exclui só o histórico de visualização, mantendo o documento no portal",
      "Exclui o documento apenas se ele ainda não tiver sido visualizado"
    ],
    "explicacao": "Excluir remove o documento do Portal para o cliente, mesmo que ele já tenha visualizado. Só um novo envio devolve o acesso.",
    "caminho": "Onvio > Relatórios > Documentos do Portal do Cliente",
    "fonte": "Visualização e download pelo cliente · visto em 275 treinamentos"
  },
  {
    "id": "onvio-026",
    "modulo": "onvio",
    "nivel": 2,
    "pergunta": "Se um holerite for publicado três vezes, o que o funcionário vê?",
    "certa": "Três documentos: a nova publicação não substitui a anterior",
    "erradas": [
      "Um só documento: a última publicação substitui as anteriores",
      "Dois documentos: o sistema mantém o original e a última versão",
      "Nenhum: a duplicidade bloqueia a visualização no aplicativo"
    ],
    "explicacao": "Republicar acumula documentos. Se for necessário corrigir, exclua o antigo manualmente no relatório de documentos do Portal.",
    "caminho": "Onvio > Relatórios > Documentos do Portal do Empregado",
    "fonte": "Publicação de holerites · visto em 205 treinamentos"
  },
  {
    "id": "onvio-027",
    "modulo": "onvio",
    "nivel": 2,
    "pergunta": "Para que serve o código de recuperação gerado no primeiro acesso ao Portal?",
    "certa": "Para entrar na conta se o cliente perder o celular ou trocar de aparelho",
    "erradas": [
      "Para recuperar a senha do Domínio quando o gerente trocar de cargo",
      "Para liberar o convite depois que ele expira, sem reenvio do escritório",
      "Para confirmar o CPF do responsável legal na primeira vez que usar o app"
    ],
    "explicacao": "Sem o código de recuperação, quem perde o celular ou troca de aparelho fica sem acesso ao Portal. Oriente o cliente a guardá-lo.",
    "caminho": "Portal do Cliente > primeiro acesso",
    "fonte": "Acesso ao Portal do Cliente · visto em 269 treinamentos"
  },
  {
    "id": "onvio-028",
    "modulo": "onvio",
    "nivel": 3,
    "pergunta": "Um usuário do escritório está no grupo Administradores e foi incluído num grupo restrito. O que vale?",
    "certa": "O Administradores anula as permissões dos outros grupos; remova-o de lá antes",
    "erradas": [
      "Vale a permissão do último grupo em que ele foi incluído no cadastro",
      "Vale a soma das duas, limitada ao que o grupo restrito permite",
      "Vale a do grupo restrito, que sempre se sobrepõe ao Administradores"
    ],
    "explicacao": "Administradores têm acesso total e anulam os demais. Para restringir, retire o usuário do grupo antes de incluí-lo no restrito.",
    "caminho": "Configuração > Grupos de Permissões",
    "fonte": "Grupos de permissões e perfis de acesso · visto em 257 treinamentos"
  },
  {
    "id": "onvio-029",
    "modulo": "onvio",
    "nivel": 2,
    "pergunta": "Se um usuário estiver em vários grupos de permissões, qual perfil prevalece?",
    "certa": "O mais forte, ou seja, o que dá mais permissões",
    "erradas": [
      "O mais restritivo, para proteger os dados do cliente",
      "O do primeiro grupo da lista em ordem alfabética",
      "O do grupo com menos usuários, que é o mais específico"
    ],
    "explicacao": "Com múltiplos grupos, vale o perfil mais forte. Por isso é importante revisar a que grupos cada pessoa pertence.",
    "caminho": "Configuração > Grupos de Permissões",
    "fonte": "Grupos de permissões e perfis de acesso · visto em 257 treinamentos"
  },
  {
    "id": "onvio-030",
    "modulo": "onvio",
    "nivel": 2,
    "pergunta": "O que o usuário precisa para enxergar as solicitações dos clientes no Onvio?",
    "certa": "Estar vinculado a um departamento, em Configurações > Funcionários",
    "erradas": [
      "Estar no grupo Administradores, que vê todas as solicitações",
      "Ter o perfil Proprietário no cadastro dos clientes do Portal",
      "Ter o Messenger habilitado e o Box-e ativo para as empresas"
    ],
    "explicacao": "Sem vínculo com departamento, o usuário não vê as solicitações. Administradores precisam de todos os departamentos para ver todas as conversas.",
    "caminho": "Configurações > Funcionários > vincular departamentos",
    "fonte": "Grupos de permissões e perfis de acesso · visto em 257 treinamentos"
  },
  {
    "id": "onvio-031",
    "modulo": "onvio",
    "nivel": 2,
    "pergunta": "Quais bancos devem ser conectados sempre pelo computador, e não pelo celular, na conexão bancária da Contabilidade Digital?",
    "certa": "BB, Banrisul, Bradesco, Caixa e Inter",
    "erradas": [
      "Santander, Itaú, Nubank, C6 e Sicredi",
      "Todos os bancos, sem exceção, pelo computador",
      "Apenas os bancos públicos: BB e Caixa"
    ],
    "explicacao": "Para esses cinco bancos a autorização é sempre pelo computador. Nos demais, o celular costuma funcionar.",
    "caminho": "Domínio Empresa > Conecte outros bancos",
    "fonte": "Consentimento e conexão bancária · visto em 229 treinamentos"
  },
  {
    "id": "onvio-032",
    "modulo": "onvio",
    "nivel": 3,
    "pergunta": "Qual acesso bancário é exigido para o consentimento funcionar?",
    "certa": "Usuário master ou administrador; só extrato não serve (exceção: operador no Bradesco)",
    "erradas": [
      "Usuário comum com acesso só de extrato, para limitar o risco do cliente no banco",
      "Usuário master, mas apenas se a conta for de pessoa física e não de pessoa jurídica",
      "Qualquer usuário com token, desde que seja o sócio administrador da empresa cliente"
    ],
    "explicacao": "O acesso apenas para extrato não basta. No Bradesco, cria-se um perfil operador que só consulta saldo e extrato.",
    "caminho": "Domínio Empresa > Conecte outros bancos",
    "fonte": "Consentimento e conexão bancária · visto em 229 treinamentos"
  },
  {
    "id": "onvio-033",
    "modulo": "onvio",
    "nivel": 3,
    "pergunta": "Como conectar várias contas de um mesmo cliente no Santander, no Itaú e no Bradesco?",
    "certa": "Santander e Itaú: uma conexão por conta; Bradesco: todas as contas de uma vez",
    "erradas": [
      "Santander e Itaú: todas de uma vez; Bradesco: uma conexão por conta",
      "Os três bancos: uma conexão por conta, cada uma com seu consentimento",
      "Os três bancos: todas as contas de uma vez, pelo CNPJ da empresa"
    ],
    "explicacao": "Santander e Itaú exigem conexão separada para cada conta do mesmo banco. O Bradesco conecta todas de uma só vez.",
    "caminho": "Domínio Empresa > Conecte outros bancos",
    "fonte": "Consentimento e conexão bancária · visto em 229 treinamentos"
  },
  {
    "id": "onvio-034",
    "modulo": "onvio",
    "nivel": 3,
    "pergunta": "O status do cliente está “Ativo” no Onvio. Isso garante que o consentimento bancário foi feito?",
    "certa": "Não; confira em Controle > Parâmetros se aparece a aba “Contabilidade Digital”",
    "erradas": [
      "Sim, o status Ativo só aparece depois que o banco confirma a conexão",
      "Sim, mas só para os bancos que conectam pelo celular do cliente",
      "Não; confira no extrato do cliente se houve um lançamento de teste"
    ],
    "explicacao": "Status Ativo no Onvio não é sinônimo de consentimento. A aba Contabilidade Digital nos Parâmetros é a confirmação.",
    "caminho": "Controle > Parâmetros",
    "fonte": "Consentimento e conexão bancária · visto em 229 treinamentos"
  },
  {
    "id": "onvio-035",
    "modulo": "onvio",
    "nivel": 3,
    "pergunta": "Na conexão com o Banco Inter, qual cuidado vale para as chaves geradas no site?",
    "certa": "Copiar o Client ID e o Secret imediatamente, pois eles não aparecem de novo depois",
    "erradas": [
      "Anotar só o Client ID, porque o Secret pode ser consultado a qualquer momento",
      "Gerar a chave pelo aplicativo do celular, com o QR Code lido de olhos fechados",
      "Salvar o arquivo .zip sem descompactar, que o Domínio lê direto"
    ],
    "explicacao": "As chaves são exibidas uma única vez. É preciso copiar na hora e anexar os arquivos conforme o roteiro do banco.",
    "caminho": "Site do Inter > Gestão > Integrações",
    "fonte": "Consentimento e conexão bancária · visto em 229 treinamentos"
  },
  {
    "id": "onvio-036",
    "modulo": "onvio",
    "nivel": 2,
    "pergunta": "Onde habilitar o cadastro de empregado pelo cliente no Portal?",
    "certa": "Em Folha > Arquivo > Filiais > aba ONVIO, marcando “Permitir cadastrar colaborador”",
    "erradas": [
      "Em Controle > Empresas > Módulos, marcando a opção de cadastro de empregados",
      "No Portal do Cliente > Notícias, ativando o formulário de admissão do empregado",
      "Em Controle > Permissões > Usuários, no perfil do gerente do escritório cadastrado"
    ],
    "explicacao": "A flag fica na filial. Os campos obrigatórios são definidos em Portal do Cliente > Configurações > Parâmetros, na seção de cadastro de empregados.",
    "caminho": "Folha > Arquivo > Filiais > aba ONVIO",
    "fonte": "Cadastro de empregado pelo cliente · visto em 216 treinamentos"
  },
  {
    "id": "onvio-037",
    "modulo": "onvio",
    "nivel": 2,
    "pergunta": "Que cuidado vale ao definir os campos obrigatórios do cadastro de empregado pelo cliente?",
    "certa": "Marcar como obrigatório só o que é comum a todas as empresas, para o cliente conseguir enviar",
    "erradas": [
      "Marcar todos os campos como obrigatórios, para o cadastro chegar completo ao escritório",
      "Marcar só os campos do eSocial que o escritório já tenha preenchido antes na filial",
      "Marcar “Manter desabilitados os campos não obrigatórios” para simplificar o formulário"
    ],
    "explicacao": "Campos que nem toda empresa tem (como CNH ou nome do cônjuge) travam o envio quando obrigatórios. Não marque o “manter desabilitados os campos não obrigatórios” para permitir o preenchimento opcional.",
    "caminho": "Portal do Cliente > Configurações > Parâmetros",
    "fonte": "Cadastro de empregado pelo cliente · visto em 216 treinamentos"
  },
  {
    "id": "onvio-038",
    "modulo": "onvio",
    "nivel": 2,
    "pergunta": "O cliente precisa de um cargo que ainda não existe no cadastro. O que ele faz no Portal?",
    "certa": "Não cria o cargo; usa a aba Observações para pedir ao escritório que o crie",
    "erradas": [
      "Cria o cargo novo na própria tela, e o sistema o sincroniza com a Folha",
      "Escolhe o cargo mais parecido, e o escritório corrige depois do envio",
      "Aguarda a sincronização de 24 horas, que cadastra o cargo automaticamente"
    ],
    "explicacao": "O cliente só vincula cargos, horários e departamentos já existentes. Para um item novo, a solicitação vai na aba Observações.",
    "caminho": "Portal do Cliente > Cadastro de Empregado > Adicionar",
    "fonte": "Cadastro de empregado pelo cliente · visto em 216 treinamentos"
  },
  {
    "id": "onvio-039",
    "modulo": "onvio",
    "nivel": 1,
    "pergunta": "Ao publicar uma notícia no Portal, como se busca o cliente na seleção?",
    "certa": "Pelo nome; a busca por código não funciona",
    "erradas": [
      "Pelo código do cliente no Domínio",
      "Pelo CNPJ, com ou sem pontuação",
      "Pelo código ou pelo nome, indiferentemente"
    ],
    "explicacao": "A seleção é por nome. Também são obrigatórios o título, o conteúdo e a fonte da notícia.",
    "caminho": "Portal do Cliente > Notícias > Gerenciamento de Notícias > Adicionar",
    "fonte": "Publicação de notícias e comunicados · visto em 213 treinamentos"
  },
  {
    "id": "onvio-040",
    "modulo": "onvio",
    "nivel": 2,
    "pergunta": "Quando usar circular e quando usar notícia no Portal?",
    "certa": "Circular para e-mail rastreável; notícia para o portal e comunicados formais",
    "erradas": [
      "Circular para o portal e comunicados formais; notícia para e-mail rastreável",
      "Circular apenas para funcionários; notícia apenas para clientes",
      "Circular para vencimentos; notícia para documentos fiscais"
    ],
    "explicacao": "A circular rastreia quem abriu (clicando no título e em Aberto). A notícia vai ao portal; o resumo dela vai por e-mail e o conteúdo completo fica só no portal.",
    "caminho": "Portal do Cliente > Notícias / Circular",
    "fonte": "Publicação de notícias e comunicados · visto em 213 treinamentos"
  },
  {
    "id": "onvio-041",
    "modulo": "onvio",
    "nivel": 2,
    "pergunta": "O botão de enviar a circular não aparece. Qual é a causa mais comum?",
    "certa": "Conteúdo com menos de 15 caracteres ou uma linha só; acrescente 2 ou mais linhas",
    "erradas": [
      "O assunto está em branco e é obrigatório para habilitar o envio da circular",
      "A lista de contatos tem mais de 100 clientes selecionados de uma vez só",
      "O navegador está traduzindo a página, e o botão some com a tradução automática"
    ],
    "explicacao": "A circular exige 15 caracteres ou mudança de linha para liberar o botão. A página também não deve ser traduzida pelo navegador.",
    "caminho": "Portal do Cliente > Circular > Nova Circular",
    "fonte": "Publicação de notícias e comunicados · visto em 213 treinamentos"
  },
  {
    "id": "onvio-042",
    "modulo": "onvio",
    "nivel": 2,
    "pergunta": "Ao publicar holerites, qual opção é obrigatória no relatório de recibos?",
    "certa": "“Gerar relatório com quebra por empregado”; sem ela a publicação é bloqueada",
    "erradas": [
      "“Emitir relatório com assinatura digital”; sem ela o sistema bloqueia a publicação",
      "“Gravar em PDF único”; sem ela o portal rejeita a publicação do recibo",
      "“Emitir somente empregados ativos”; sem ela o sistema bloqueia a publicação"
    ],
    "explicacao": "A quebra por empregado permite entregar cada recibo ao funcionário certo. Sem marcar, a publicação não segue.",
    "caminho": "Relatórios > Recibos > Folha (ou Férias, Rescisão)",
    "fonte": "Publicação de holerites · visto em 205 treinamentos"
  },
  {
    "id": "onvio-043",
    "modulo": "onvio",
    "nivel": 3,
    "pergunta": "Onde acompanhar o processamento de uma publicação de holerites?",
    "certa": "Na maletinha amarela, em Envio de Dados > Publicações > Detalhes",
    "erradas": [
      "No Painel de Importação da tela inicial, em Docs Fiscais",
      "No Messenger, na aba de atendimentos do departamento pessoal",
      "No ícone ONV (play), que mostra o histórico de cada envio"
    ],
    "explicacao": "A maletinha amarela mostra o andamento. Se ela estiver vermelha ou cinza, há falha na comunicação com o Onvio.",
    "caminho": "Maletinha > Envio de Dados > Publicações > Detalhes",
    "fonte": "Publicação de holerites · visto em 205 treinamentos"
  },
  {
    "id": "onvio-044",
    "modulo": "onvio",
    "nivel": 2,
    "pergunta": "Onde configurar a publicação automática dos holerites?",
    "certa": "Em Controle > Parâmetros, aba Portal do Empregado, escolhendo quando publicar",
    "erradas": [
      "Em Relatórios > Recibos, marcando a publicação em cada emissão do relatório",
      "No Portal do Cliente > Configurações, na seção de notificações do escritório",
      "Em Folha > Arquivo > Filiais, na aba ONVIO de cada uma das filiais da empresa"
    ],
    "explicacao": "A publicação automática pode acontecer ao imprimir, salvar em PDF ou enviar por e-mail. Empresas com prévia ou alterações frequentes podem preferir manter manual.",
    "caminho": "Controle > Parâmetros > aba Portal do Empregado",
    "fonte": "Publicação de holerites · visto em 205 treinamentos"
  },
  {
    "id": "onvio-045",
    "modulo": "onvio",
    "nivel": 2,
    "pergunta": "Qual a tolerância de atraso do cliente no treinamento, e o que ocorre depois?",
    "certa": "15 minutos; depois disso o técnico cancela, e a remarcação leva cerca de 15 dias",
    "erradas": [
      "30 minutos; depois disso o técnico remarca para o mesmo dia à tarde",
      "5 minutos; depois disso o técnico inicia sem o cliente e grava a sessão",
      "15 minutos; depois disso o treinamento segue e as horas são descontadas em dobro"
    ],
    "explicacao": "Se o cliente não entrar em 15 minutos, o técnico cancela. Remarcar leva cerca de 15 dias, então vale reforçar a pontualidade.",
    "caminho": "Menu > Suporte > Acompanhar Implantação > Treinamentos",
    "fonte": "Acesso a treinamentos e gravações · visto em 205 treinamentos"
  },
  {
    "id": "onvio-046",
    "modulo": "onvio",
    "nivel": 2,
    "pergunta": "Quantos avisos de vencimento o Portal envia ao cliente?",
    "certa": "Quatro: 3, 2 e 1 dia antes do vencimento e no próprio dia",
    "erradas": [
      "Dois: 5 dias antes do vencimento e no próprio dia",
      "Três: 7, 3 e 1 dia antes, sem aviso no dia do vencimento",
      "Um só: no dia útil anterior ao vencimento do documento"
    ],
    "explicacao": "O sistema avisa 3, 2 e 1 dia antes e no dia, totalizando 4 avisos. O aviso para quem não visualizou pode ser reenviado até 3 vezes.",
    "caminho": "Portal do Cliente > Configurações > Parâmetros",
    "fonte": "Configuração de parâmetros gerais do Portal · visto em 199 treinamentos"
  },
  {
    "id": "onvio-047",
    "modulo": "onvio",
    "nivel": 2,
    "pergunta": "Qual nível de acesso do usuário do cliente permite receber documentos e também fazer solicitações?",
    "certa": "Contribuinte",
    "erradas": [
      "Revisor",
      "Proprietário",
      "Administrador"
    ],
    "explicacao": "Revisor só recebe; Contribuinte recebe e solicita; Proprietário também pode excluir. Se o botão Adicionar não aparece, o usuário pode estar como Revisor.",
    "caminho": "Configurações > Funcionários > Departamento",
    "fonte": "Configuração de parâmetros gerais do Portal · visto em 199 treinamentos"
  },
  {
    "id": "onvio-048",
    "modulo": "onvio",
    "nivel": 3,
    "pergunta": "Sobre aprovação de tarefas, quem pode aprovar o trabalho de quem?",
    "certa": "Gerente ou admin aprova o usuário; admin não aprova admin, nem gerente aprova gerente",
    "erradas": [
      "Qualquer usuário aprova o trabalho de outro, desde que seja de um departamento diferente",
      "Só o administrador aprova, inclusive o trabalho de outro administrador do escritório",
      "O gerente aprova o administrador, e o administrador aprova o usuário comum do escritório"
    ],
    "explicacao": "Na aprovação, o usuário executa e o gerente ou administrador aprova. Aprovador do mesmo perfil não é permitido.",
    "caminho": "Configure > Tarefas Recorrentes > [tarefa] > Clientes",
    "fonte": "Configuração de responsáveis e departamentos · visto em 185 treinamentos"
  },
  {
    "id": "onvio-049",
    "modulo": "onvio",
    "nivel": 2,
    "pergunta": "O cliente tem vários CNPJs sob o mesmo CPF no Domínio Empresa. Quantos cadastros ele precisa?",
    "certa": "Um por CPF; ao logar, ele escolhe qual empresa quer acessar",
    "erradas": [
      "Um por CNPJ, cada um com e-mail e telefone diferentes",
      "Um por celular, e o app aceita vários CPFs no mesmo aparelho",
      "Um por CPF, mas só consegue acessar a empresa matriz no login"
    ],
    "explicacao": "O cadastro é por CPF. No caso de vários CNPJs com CPFs diferentes, use a versão web, pois o app reconhece um cadastro por celular.",
    "caminho": "App Domínio Empresa / Portal Domínio Empresa",
    "fonte": "Cadastro do cliente no Domínio Empresa · visto em 168 treinamentos"
  },
  {
    "id": "onvio-050",
    "modulo": "onvio",
    "nivel": 3,
    "pergunta": "Um gerente vai operar o Domínio Empresa em nome do dono. Quais dados usar no cadastro?",
    "certa": "CPF do dono, com e-mail e telefone do gerente, que precisa de acesso master no banco",
    "erradas": [
      "O CPF do gerente, com e-mail e telefone do dono, que é o responsável legal da empresa",
      "CPF e e-mail do dono, com telefone do gerente apenas para receber o SMS do cadastro",
      "CPF do gerente, com acesso de operador no banco para consultar apenas o extrato"
    ],
    "explicacao": "O cadastro usa o CPF do dono (responsável legal). Para receber os códigos, o e-mail e o telefone podem ser do gerente, que precisa de acesso master ao banco.",
    "caminho": "App Domínio Empresa > Criar cadastro",
    "fonte": "Cadastro do cliente no Domínio Empresa · visto em 168 treinamentos"
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
  },
  {
    "id": "busca-015",
    "modulo": "busca",
    "nivel": 2,
    "pergunta": "Como ativar o agente de comunicação para o Busca NF-e e a SIEG trabalharem com o Domínio?",
    "certa": "Em Controle > Permissões, no usuário gerente, informando o e-mail e a senha do Onvio",
    "erradas": [
      "Em Utilitários > Importação, marcando a opção de ativar o agente para a empresa",
      "No aplicativo Busca NF-e, informando o CNPJ e o certificado digital do escritório",
      "Em Controle > Parâmetros, na aba Informativos, com o ambiente oficial selecionado"
    ],
    "explicacao": "O agente depende do usuário gerente com e-mail e senha do Onvio gravados. A bolinha verde indica a comunicação ativa; vermelha, problema (muitas vezes senha alterada).",
    "caminho": "Controle > Permissões > Usuários",
    "fonte": "Outros assuntos — Busca NF-e e Box-e · visto em 680 treinamentos"
  },
  {
    "id": "busca-016",
    "modulo": "busca",
    "nivel": 1,
    "pergunta": "Terminada a configuração das empresas no aplicativo Busca NF-e, o que fazer com ele?",
    "certa": "Minimizar o aplicativo, sem encerrar, para ele continuar baixando as notas",
    "erradas": [
      "Encerrar o aplicativo para gravar, abrindo de novo só na hora de importar",
      "Reiniciar o computador para que o serviço carregue as empresas incluídas",
      "Fechar a janela e abrir o aplicativo uma vez por semana para atualizar"
    ],
    "explicacao": "O Busca precisa ficar rodando para consultar e baixar as notas. Depois de incluir empresa, certificado e tipos de documento, apenas minimize.",
    "caminho": "Aplicativo Busca NF-e > Configurações",
    "fonte": "Outros assuntos — Busca NF-e e Box-e · visto em 680 treinamentos"
  },
  {
    "id": "busca-017",
    "modulo": "busca",
    "nivel": 2,
    "pergunta": "Quando as notas saem do Painel de Importação?",
    "certa": "Só quando importadas ou excluídas à mão; vale limpar o painel depois de importar",
    "erradas": [
      "Sozinhas, depois de 30 dias, quando o sistema limpa as notas mais antigas do painel",
      "Quando o mês é fechado, pois o painel acompanha a competência vigente da empresa",
      "Quando o Busca NF-e é reiniciado, que zera a lista de notas pendentes de importação"
    ],
    "explicacao": "As notas ficam no painel até serem importadas ou excluídas manualmente. Limpar o painel após importar (meses fechados) mantém o controle do que falta.",
    "caminho": "Tela inicial > Painel de Importação",
    "fonte": "Outros assuntos — Busca NF-e e Box-e · visto em 680 treinamentos"
  },
  {
    "id": "busca-018",
    "modulo": "busca",
    "nivel": 2,
    "pergunta": "Quanto tempo esperar pela captura completa do retroativo logo depois de ativar o Busca NF-e?",
    "certa": "Cerca de 24 horas; se o computador for desligado à noite, até 2 dias",
    "erradas": [
      "Cerca de 15 minutos, desde que o agente de comunicação esteja verde",
      "Cerca de 7 dias, que é o prazo de resposta da Sefaz para novas empresas",
      "Cerca de 48 horas, mesmo que o computador fique ligado o tempo todo"
    ],
    "explicacao": "A captura completa dos até 90 dias leva cerca de 24 horas. Se a máquina for desligada à noite, conte até 2 dias.",
    "caminho": "Aplicativo Busca NF-e > Histórico",
    "fonte": "Verificação de status do Busca · visto em 172 treinamentos"
  },
  {
    "id": "busca-019",
    "modulo": "busca",
    "nivel": 1,
    "pergunta": "Na importação pelo Busca NF-e, o que diferencia uma advertência de um erro?",
    "certa": "Advertência ainda permite gravar a nota; erro bloqueia a importação",
    "erradas": [
      "Advertência bloqueia a importação; erro permite gravar a nota",
      "As duas bloqueiam a nota até que o contador autorize a gravação",
      "As duas permitem gravar, mas o erro marca a nota como pendente"
    ],
    "explicacao": "Notas com advertência podem ser gravadas. Notas com erro não importam até a correção. Importe tipo por tipo, sem marcar todos juntos.",
    "caminho": "Utilitários > Importação > Importação Padrão > Busca NF-e",
    "fonte": "Busca de notas de entrada · visto em 423 treinamentos"
  },
  {
    "id": "busca-020",
    "modulo": "busca",
    "nivel": 2,
    "pergunta": "Ao importar pelo Busca NF-e, como marcar os tipos de documento?",
    "certa": "Importar tipo por tipo, sem marcar todos os tipos de uma vez",
    "erradas": [
      "Marcar todos os tipos juntos, para o sistema ordenar por data",
      "Importar só as notas de saída, pois as de entrada vêm pela SIEG",
      "Marcar apenas NF-e e CT-e, deixando os serviços para a prefeitura"
    ],
    "explicacao": "A importação por tipo facilita achar advertências e erros de cada grupo. Notas canceladas também devem ser importadas à parte, depois das ativas.",
    "caminho": "Utilitários > Importação > Importação Padrão > Busca NF-e",
    "fonte": "Busca de notas de entrada · visto em 423 treinamentos"
  },
  {
    "id": "busca-021",
    "modulo": "busca",
    "nivel": 3,
    "pergunta": "Uma nota já importada precisa ser reimportada. Qual opção permite isso?",
    "certa": "Marcar “sobrescrever”; com “somente inexistentes” marcado, não reimporta",
    "erradas": [
      "Marcar “somente inexistentes”, que força a gravação por cima da nota existente",
      "Excluir o certificado da empresa e importar de novo pelo painel de importação",
      "Alterar a data de entrada da nota para depois do fechamento do mês corrente"
    ],
    "explicacao": "Para reimportar, marque a opção de sobrescrever. Se “somente inexistentes” estiver marcada, o sistema ignora o que já existe.",
    "caminho": "Utilitários > Importação > Importação Padrão > Busca NF-e",
    "fonte": "Busca de notas de entrada · visto em 423 treinamentos"
  },
  {
    "id": "busca-022",
    "modulo": "busca",
    "nivel": 2,
    "pergunta": "Onde o certificado digital A1 deve estar instalado para o Busca NF-e funcionar?",
    "certa": "No servidor onde o Busca roda, pois ele não acessa certificados que estão em rede",
    "erradas": [
      "Na máquina de cada usuário, pois o Busca lê o certificado do computador local",
      "Em uma pasta compartilhada da rede, apontada na aba Certificados do aplicativo",
      "No site do Onvio, em Configurações, junto do cadastro do usuário gerente"
    ],
    "explicacao": "O certificado precisa estar no servidor, e a configuração deve ser feita pelo Domínio acessado do servidor, não da máquina local.",
    "caminho": "Aplicativo Busca NF-e > Configurações > aba Certificados",
    "fonte": "Configuração de certificado digital · visto em 244 treinamentos"
  },
  {
    "id": "busca-023",
    "modulo": "busca",
    "nivel": 2,
    "pergunta": "Para baixar NFS-e (serviços), o Busca NF-e usa qual certificado?",
    "certa": "Só o certificado da empresa, sem certificado de terceiro",
    "erradas": [
      "O certificado do escritório, como terceiro autorizado no emissor",
      "Os dois certificados juntos, o da empresa e o do escritório",
      "Nenhum: a NFS-e vem pelo agente, sem exigir certificado"
    ],
    "explicacao": "Para NF-e e CT-e de saída usa-se também o certificado terceiro (e a tag AutXML). Na NFS-e, vale apenas o certificado da empresa.",
    "caminho": "Aplicativo Busca NF-e > Configurações > aba Certificados",
    "fonte": "Configuração de certificado digital · visto em 244 treinamentos"
  },
  {
    "id": "busca-024",
    "modulo": "busca",
    "nivel": 2,
    "pergunta": "O cliente deu procuração eletrônica ao escritório. Isso basta para o Busca baixar as notas de saída?",
    "certa": "Não: é preciso o certificado da empresa e a tag autXML do escritório no emissor",
    "erradas": [
      "Sim, a procuração substitui o certificado digital da empresa no Busca",
      "Sim, desde que a procuração seja de nível total e esteja no e-CAC",
      "Não, mas a procuração permite baixar as notas de entrada sem certificado"
    ],
    "explicacao": "A norma técnica exige o certificado da empresa (CNPJ base do destinatário). Procuração eletrônica não serve, nem para a autorização do terceiro.",
    "caminho": "Aplicativo Busca NF-e > Configurações",
    "fonte": "Configuração de certificado digital · visto em 244 treinamentos"
  },
  {
    "id": "busca-025",
    "modulo": "busca",
    "nivel": 2,
    "pergunta": "O Busca NF-e avisa quando o certificado de uma empresa está para vencer?",
    "certa": "Não: só a bolinha vermelha indica certificado expirado; renova-se empresa a empresa",
    "erradas": [
      "Sim, o aplicativo envia e-mail ao gerente 30 dias antes de o certificado vencer",
      "Sim, o aviso aparece no Painel de Importação com a data de vencimento de cada um",
      "Não, mas o Windows bloqueia o serviço antes do vencimento do certificado instalado"
    ],
    "explicacao": "Não há aviso prévio (existe pedido de melhoria). Quando o certificado expira, a bolinha fica vermelha e é preciso atualizá-lo na configuração de cada cliente.",
    "caminho": "Aplicativo Busca NF-e > Configurações",
    "fonte": "Configuração de certificado digital · visto em 244 treinamentos"
  },
  {
    "id": "busca-026",
    "modulo": "busca",
    "nivel": 2,
    "pergunta": "O que fazer com um cliente que não tem certificado digital para usar no Busca?",
    "certa": "Configurar a importação por pasta ou usar o Box-e, com o e-mail no emissor",
    "erradas": [
      "Pedir ao cliente uma procuração eletrônica e usar o certificado do escritório",
      "Usar a SIEG com o certificado do escritório cadastrado como se fosse da empresa",
      "Aguardar a emissão do certificado, pois não há alternativa para baixar as notas"
    ],
    "explicacao": "Sem certificado, as alternativas são a importação por pasta ou o Box-e, que recebe as notas por e-mail configurado no sistema emissor do cliente.",
    "caminho": "Portal do Cliente > Box-e",
    "fonte": "Configuração de certificado digital · visto em 244 treinamentos"
  },
  {
    "id": "busca-027",
    "modulo": "busca",
    "nivel": 2,
    "pergunta": "O e-mail criado na configuração do Box-e (algo@dominioboxe.com.br) é uma caixa de e-mail real?",
    "certa": "Não: é só uma ponte de armazenamento, e é único por licença do escritório",
    "erradas": [
      "Sim, é uma caixa real em que o escritório lê as notas dos clientes",
      "Sim, e cada carteira de clientes recebe um endereço próprio dele",
      "Não, mas é diferente para cada cliente habilitado no Portal do Cliente"
    ],
    "explicacao": "O e-mail é só o caminho de entrada das notas. É único por licença e não separa carteiras: copie-o exatamente como aparece na Habilitação.",
    "caminho": "Portal do Cliente > Box-e > Configuração",
    "fonte": "Habilitação de empresas no Box-e · visto em 174 treinamentos"
  },
  {
    "id": "busca-028",
    "modulo": "busca",
    "nivel": 2,
    "pergunta": "Ao habilitar uma empresa no Box-e, qual cuidado vale para o e-mail exibido?",
    "certa": "Trocar o e-mail do cliente pelo do escritório, para não notificá-lo antes da hora",
    "erradas": [
      "Manter o e-mail do cliente, que recebe a primeira cópia de todas as notas baixadas",
      "Trocar pelo e-mail pessoal do contador responsável pela empresa no cadastro dela",
      "Deixar o e-mail em branco, pois o sistema preenche depois do envio da habilitação"
    ],
    "explicacao": "Se o e-mail do cliente ficar, ele é notificado antes de a configuração estar pronta, o que gera suporte desnecessário.",
    "caminho": "Portal do Cliente > Box-e > Habilitação de Clientes",
    "fonte": "Habilitação de empresas no Box-e · visto em 174 treinamentos"
  },
  {
    "id": "busca-029",
    "modulo": "busca",
    "nivel": 2,
    "pergunta": "No histórico do Busca NF-e o status está verde. Isso significa que as notas já estão no Domínio?",
    "certa": "Não: o Busca baixa e envia à API, e só depois as notas ficam disponíveis",
    "erradas": [
      "Sim, o verde indica que as notas já foram gravadas no Fiscal da empresa",
      "Sim, mas só as notas de entrada; as de saída precisam de nova importação",
      "Não, o verde só indica que o certificado está dentro da validade"
    ],
    "explicacao": "Verde significa que o Busca está funcionando. O fluxo é baixar, enviar à API e só então liberar para importação no Domínio.",
    "caminho": "Aplicativo Busca NF-e > Histórico",
    "fonte": "Verificação de status do Busca · visto em 172 treinamentos"
  },
  {
    "id": "busca-030",
    "modulo": "busca",
    "nivel": 2,
    "pergunta": "O histórico do aplicativo Busca NF-e é guardado onde?",
    "certa": "Localmente na máquina do Busca; ao trocar de máquina, o histórico se perde",
    "erradas": [
      "Na nuvem do Onvio, vinculado ao usuário gerente da empresa cadastrada no agente",
      "Dentro do banco de dados do Domínio, junto das notas que já foram importadas",
      "No site da Sefaz, que guarda 90 dias de consultas feitas por cada certificado"
    ],
    "explicacao": "O histórico é local e limitado a 90 dias de consulta. Para ver o que foi importado, também dá para consultar em Docs Fiscais, no rodapé do Domínio.",
    "caminho": "Rodapé > Docs Fiscais / Aplicativo Busca NF-e > Histórico",
    "fonte": "Verificação de notas importadas · visto em 150 treinamentos"
  },
  {
    "id": "busca-031",
    "modulo": "busca",
    "nivel": 2,
    "pergunta": "O Busca NF-e mostra o erro “processamento duplicado”. Qual é a causa e a correção?",
    "certa": "Outro buscador ativo no mesmo CNPJ, como Gtax ou SIEG: desative o anterior",
    "erradas": [
      "Duas máquinas com o Busca, uma delas sem certificado: remova a máquina extra",
      "A mesma nota foi importada manualmente: exclua a nota do Painel de Importação",
      "O certificado está vencido e foi reinstalado: apague o antigo do Windows"
    ],
    "explicacao": "Dois buscadores no mesmo CNPJ conflitam, e a Sefaz pode bloquear por excesso de consultas. Deixe só um ativo.",
    "caminho": "Aplicativo Busca NF-e > Histórico > Erros de Comunicação",
    "fonte": "Verificação de status do Busca · visto em 172 treinamentos"
  },
  {
    "id": "busca-032",
    "modulo": "busca",
    "nivel": 2,
    "pergunta": "Quais séries de notas a SIEG puxa na integração com o Domínio?",
    "certa": "Somente as séries cadastradas; se faltar série, as notas dela não vêm",
    "erradas": [
      "Todas as séries da empresa, sem necessidade de cadastro prévio",
      "Apenas a série 1, que é a padrão do emissor de cada cliente",
      "As séries cadastradas, mais as que o Domínio descobrir sozinho"
    ],
    "explicacao": "No cadastro da SIEG, em Nota Fiscal Comércio, adiciona-se cada série existente (usando o XML de cada uma). Séries esquecidas não são baixadas.",
    "caminho": "Site SIEG > Editar Cadastro > Nota Fiscal Comércio",
    "fonte": "Integração com SIEG · visto em 147 treinamentos"
  },
  {
    "id": "busca-033",
    "modulo": "busca",
    "nivel": 2,
    "pergunta": "As notas da SIEG entram no Domínio automaticamente?",
    "certa": "Não: ficam em Docs Fiscais e no Painel; para automatizar, cria-se uma rotina",
    "erradas": [
      "Sim, a SIEG grava as notas direto no Fiscal assim que baixa do banco de dados",
      "Sim, mas apenas as notas de entrada; as de saída exigem importação manual",
      "Não, e não existe como automatizar: a importação é sempre feita à mão pelo usuário"
    ],
    "explicacao": "A SIEG deixa as notas disponíveis em Docs Fiscais/Painel de Importação. Para importar sem intervenção, é preciso criar uma rotina automática.",
    "caminho": "Rodapé > Docs Fiscais / Arquivos > Rotinas Automáticas",
    "fonte": "Verificação de notas importadas · visto em 150 treinamentos"
  },
  {
    "id": "busca-034",
    "modulo": "busca",
    "nivel": 1,
    "pergunta": "Qual ferramenta se usa no navegador para baixar as NFS-e do Portal Nacional com o certificado da empresa?",
    "certa": "A extensão “Baixar Nota Fiscal de Serviço”, instalada no Chrome",
    "erradas": [
      "A extensão “Importar XML Fiscal”, instalada no Microsoft Edge",
      "O aplicativo Busca NF-e, no menu Utilitários do Domínio",
      "O Portal do Cliente do Onvio, na área do Box-e do escritório"
    ],
    "explicacao": "A extensão funciona só no Chrome, conecta com o certificado digital da empresa e organiza os XML por empresa, ano e mês.",
    "caminho": "Chrome Web Store > Extensões > Baixar Nota Fiscal de Serviço",
    "fonte": "Download pelo Portal Nacional · visto em 165 treinamentos"
  },
  {
    "id": "busca-035",
    "modulo": "busca",
    "nivel": 2,
    "pergunta": "O que acontece na primeira vez que se usa a extensão de download do Portal Nacional?",
    "certa": "Baixa tudo o que está disponível, de vários anos, e o excesso é apagado depois",
    "erradas": [
      "Baixa só o mês corrente, e os meses anteriores precisam ser pedidos um a um",
      "Baixa os últimos 90 dias, igual ao Busca NF-e, e para sozinha ao terminar",
      "Pede o período antes e baixa apenas o que foi escolhido na tela do navegador"
    ],
    "explicacao": "Na primeira execução o download traz tudo o que o portal tem. Exclua manualmente os períodos que não interessam.",
    "caminho": "Chrome > extensão Baixar Nota Fiscal de Serviço",
    "fonte": "Download pelo Portal Nacional · visto em 165 treinamentos"
  },
  {
    "id": "busca-036",
    "modulo": "busca",
    "nivel": 1,
    "pergunta": "Para baixar do Portal Nacional é necessária procuração do cliente?",
    "certa": "Não: basta o certificado digital da própria empresa, A1 ou A3",
    "erradas": [
      "Sim, a procuração eletrônica é obrigatória para o escritório acessar",
      "Sim, mas só para empresas do Simples Nacional e do Lucro Presumido",
      "Não, mas é obrigatório usar o certificado do escritório no lugar"
    ],
    "explicacao": "O acesso é pelo certificado da empresa. O A3 está sendo descontinuado, então o A1 é o recomendado.",
    "caminho": "Chrome > extensão Baixar Nota Fiscal de Serviço",
    "fonte": "Download pelo Portal Nacional · visto em 165 treinamentos"
  },
  {
    "id": "busca-037",
    "modulo": "busca",
    "nivel": 2,
    "pergunta": "A autorização do CNPJ do escritório como terceiro no emissor vale para quais notas?",
    "certa": "Só as emitidas depois da configuração, e apenas para NF-e e CT-e de saída",
    "erradas": [
      "Todas as notas já emitidas pelo cliente, inclusive as dos últimos 5 anos",
      "Apenas as notas de entrada, pois as de saída vêm pelo certificado",
      "As emitidas depois da configuração, mas só para NFC-e e NFS-e"
    ],
    "explicacao": "A tag autXML vale a partir da configuração e é obrigatória só para NF-e e CT-e de saída (modelos 55 e 57). Entradas não precisam dela.",
    "caminho": "Sistema emissor do cliente > Configuração NF-e > Terceiro Autorizado",
    "fonte": "Autorização de terceiro para saída · visto em 134 treinamentos"
  },
  {
    "id": "busca-038",
    "modulo": "busca",
    "nivel": 3,
    "pergunta": "O fornecedor do emissor de notas quer cobrar uma “customização” para incluir o CNPJ do escritório como terceiro. Isso procede?",
    "certa": "Não: o campo existe em todo emissor desde a Nota Técnica 2015/001",
    "erradas": [
      "Sim, a inclusão de terceiro é recurso opcional e pago em qualquer emissor",
      "Sim, mas só nos emissores gratuitos, que precisam de módulo adicional",
      "Não, mas só enquanto o escritório tiver o certificado do cliente cadastrado"
    ],
    "explicacao": "A tag de terceiro autorizado existe desde 2015 e todo emissor deve oferecê-la. Alguns emissores gratuitos de versão limitada podem não ter o campo: nesse caso, fale com o suporte do emissor.",
    "caminho": "Sistema emissor do cliente > Configuração NF-e",
    "fonte": "Autorização de terceiro para saída · visto em 134 treinamentos"
  },
  {
    "id": "busca-039",
    "modulo": "busca",
    "nivel": 3,
    "pergunta": "O mesmo XML de NFS-e foi importado pela prefeitura e pelo Busca. O que pode acontecer?",
    "certa": "A nota duplica se a série for diferente entre os dois caminhos",
    "erradas": [
      "A segunda importação sempre é bloqueada, qualquer que seja a série",
      "A primeira nota importada é sobrescrita pela segunda sem aviso",
      "As duas ficam gravadas, mas só a mais antiga entra na apuração"
    ],
    "explicacao": "Se a série divergir entre as duas origens, o sistema não reconhece como a mesma nota e duplica. Escolha um caminho só para cada período.",
    "caminho": "Utilitários > Importação > Importação Padrão",
    "fonte": "Importação de NFS-e · visto em 175 treinamentos"
  },
  {
    "id": "busca-040",
    "modulo": "busca",
    "nivel": 2,
    "pergunta": "Como importar as notas canceladas?",
    "certa": "Separadamente, depois das ativas, para sobrepor o XML e mudar o status",
    "erradas": [
      "Junto das ativas, marcando todos os tipos na mesma importação do período",
      "Antes das ativas, para que depois sejam apenas confirmadas pelo usuário",
      "Não se importam: o sistema cancela sozinho ao receber o evento de cancelamento"
    ],
    "explicacao": "As canceladas entram depois das notas normais para sobrescrever o XML anterior e trocar o status. Por isso, em rotinas, a de canceladas roda por último.",
    "caminho": "Utilitários > Importação > Importação Padrão",
    "fonte": "Importação de NFS-e · visto em 175 treinamentos"
  },
  {
    "id": "busca-041",
    "modulo": "busca",
    "nivel": 2,
    "pergunta": "Uma nota já lançada manualmente é importada pelo Busca. O que acontece?",
    "certa": "O sistema detecta que ela já existe e bloqueia a importação",
    "erradas": [
      "A nota é importada e fica duplicada, para o contador excluir depois",
      "A nota manual é apagada e substituída pela importada, sem aviso",
      "A nota é importada com advertência, e a manual é marcada como cancelada"
    ],
    "explicacao": "O Domínio reconhece a nota já lançada e impede a duplicação na importação.",
    "caminho": "Utilitários > Importação > Importação Padrão",
    "fonte": "Importação de NFS-e · visto em 175 treinamentos"
  }
];
