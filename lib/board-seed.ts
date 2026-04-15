export type SeedCard = {
  id: string;
  idColumn: string;
  title: string;
  description: string;
  date: string;
};

export type SeedColumn = {
  id: string;
  title: string;
  color: string;
  cards: SeedCard[];
};

export const boardSeed: SeedColumn[] = [
  {
    id: "col-backlog",
    title: "Backlog",
    color: "#7C8DA6",
    cards: [
      {
        id: "card-1",
        idColumn: "col-backlog",
        title: "Mapear fluxo de login",
        description:
          "Desenhar os passos de autenticação, estados de erro e transições principais.",
        date: "14/04/2026",
      },
      {
        id: "card-2",
        idColumn: "col-backlog",
        title: "Definir estrutura do dashboard",
        description:
          "Organizar blocos de navegação, cards principais e pontos de destaque da home.",
        date: "15/04/2026",
      },
      {
        id: "card-3",
        idColumn: "col-backlog",
        title: "Ajustar paleta do produto",
        description:
          "Fechar cores de fundo, contraste dos textos e hierarquia visual dos botões.",
        date: "16/04/2026",
      },
      {
        id: "card-4",
        idColumn: "col-backlog",
        title: "Escrever microcopy inicial",
        description:
          "Criar textos curtos para estados vazios, botões e feedbacks de ação.",
        date: "16/04/2026",
      },
      {
        id: "card-5",
        idColumn: "col-backlog",
        title: "Organizar imagens de referência",
        description:
          "Separar inspirações visuais para manter consistência no dashboard.",
        date: "17/04/2026",
      },
    ],
  },
  {
    id: "col-todo",
    title: "To do",
    color: "#CC985E",
    cards: [
      {
        id: "card-6",
        idColumn: "col-todo",
        title: "Criar componente de card",
        description:
          "Padronizar layout do card com título, data, descrição e ação principal.",
        date: "17/04/2026",
      },
      {
        id: "card-7",
        idColumn: "col-todo",
        title: "Conectar seed ao board",
        description:
          "Trocar os mocks manuais por uma lista única renderizada por map.",
        date: "17/04/2026",
      },
      {
        id: "card-8",
        idColumn: "col-todo",
        title: "Revisar scroll horizontal",
        description:
          "Garantir que colunas fora da tela aparecam apenas ao rolar a board.",
        date: "18/04/2026",
      },
      {
        id: "card-9",
        idColumn: "col-todo",
        title: "Separar cards por prioridade",
        description:
          "Criar uma ordem visual clara para tarefas urgentes, médias e baixas.",
        date: "18/04/2026",
      },
      {
        id: "card-10",
        idColumn: "col-todo",
        title: "Simular estado de carregamento",
        description:
          "Adicionar uma base para skeleton ou loading nos cards do board.",
        date: "19/04/2026",
      },
    ],
  },
  {
    id: "col-in-progress",
    title: "In progress",
    color: "#5B7FFF",
    cards: [
      {
        id: "card-11",
        idColumn: "col-in-progress",
        title: "Montar header fixo",
        description:
          "Manter as acoes visiveis enquanto o board rola abaixo da barra superior.",
        date: "14/04/2026",
      },
      {
        id: "card-12",
        idColumn: "col-in-progress",
        title: "Refinar largura das colunas",
        description:
          "Evitar que os containers encolham quando a viewport ficar menor.",
        date: "14/04/2026",
      },
      {
        id: "card-13",
        idColumn: "col-in-progress",
        title: "Ajustar espacos internos",
        description:
          "Fechar paddings, gaps e alinhamento entre o header e o board.",
        date: "15/04/2026",
      },
      {
        id: "card-14",
        idColumn: "col-in-progress",
        title: "Aplicar largura minima nas colunas",
        description:
          "Impedir que o flex reduza os containers quando faltar espaço.",
        date: "15/04/2026",
      },
      {
        id: "card-15",
        idColumn: "col-in-progress",
        title: "Validar comportamento mobile",
        description:
          "Confirmar rolagem e legibilidade em telas menores que 768px.",
        date: "16/04/2026",
      },
      {
        id: "card-16",
        idColumn: "col-in-progress",
        title: "Ajustar sombra dos cards",
        description:
          "Suavizar a elevação para combinar com o visual geral do board.",
        date: "16/04/2026",
      },
    ],
  },
  {
    id: "col-review",
    title: "Review",
    color: "#8F63D3",
    cards: [
      {
        id: "card-17",
        idColumn: "col-review",
        title: "Validar acessibilidade",
        description:
          "Checar contraste, foco visual e comportamento de teclado nos botoes.",
        date: "18/04/2026",
      },
      {
        id: "card-18",
        idColumn: "col-review",
        title: "Testar responsividade",
        description:
          "Confirmar comportamento do board em telas pequenas e medias.",
        date: "18/04/2026",
      },
      {
        id: "card-19",
        idColumn: "col-review",
        title: "Revisar copy dos botoes",
        description:
          "Ajustar rótulos de acao para ficar mais claro o que cada botao faz.",
        date: "19/04/2026",
      },
      {
        id: "card-20",
        idColumn: "col-review",
        title: "Checar consistencia das datas",
        description:
          "Padronizar o formato das datas exibidas nos cards do seed.",
        date: "19/04/2026",
      },
    ],
  },
  {
    id: "col-done",
    title: "Done",
    color: "#2F9E5E",
    cards: [
      {
        id: "card-21",
        idColumn: "col-done",
        title: "Estruturar layout base",
        description:
          "Criar a pagina inicial com header, board e area de conteudo principal.",
        date: "12/04/2026",
      },
      {
        id: "card-22",
        idColumn: "col-done",
        title: "Centralizar tokens de estilo",
        description:
          "Reaproveitar fontes, bordas e cores globais no arquivo de tema.",
        date: "12/04/2026",
      },
      {
        id: "card-23",
        idColumn: "col-done",
        title: "Habilitar overflow oculto",
        description:
          "Mover o scroll para dentro da board e esconder a barra do navegador.",
        date: "13/04/2026",
      },
      {
        id: "card-24",
        idColumn: "col-done",
        title: "Estabilizar o layout principal",
        description:
          "Garantir que a pagina ocupe a altura total sem empurrar o browser.",
        date: "13/04/2026",
      },
      {
        id: "card-25",
        idColumn: "col-done",
        title: "Fechar o seed inicial",
        description:
          "Deixar o board populado com exemplos reais para desenvolvimento.",
        date: "14/04/2026",
      },
    ],
  },
];