export type SeedCard = {
  title: string;
  description: string;
  date: string;
};

export type SeedColumn = {
  title: string;
  color: string;
  cards: SeedCard[];
};

export const boardSeed: SeedColumn[] = [
  {
    title: "Backlog",
    color: "#7C8DA6",
    cards: [
      {
        title: "Mapear fluxo de login",
        description:
          "Desenhar os passos de autenticação, estados de erro e transições principais.",
        date: "14/04/2026",
      },
      {
        title: "Definir estrutura do dashboard",
        description:
          "Organizar blocos de navegação, cards principais e pontos de destaque da home.",
        date: "15/04/2026",
      },
      {
        title: "Ajustar paleta do produto",
        description:
          "Fechar cores de fundo, contraste dos textos e hierarquia visual dos botões.",
        date: "16/04/2026",
      },
      {
        title: "Escrever microcopy inicial",
        description:
          "Criar textos curtos para estados vazios, botões e feedbacks de ação.",
        date: "16/04/2026",
      },
      {
        title: "Organizar imagens de referência",
        description:
          "Separar inspirações visuais para manter consistência no dashboard.",
        date: "17/04/2026",
      },
    ],
  },
  {
    title: "To do",
    color: "#CC985E",
    cards: [
      {
        title: "Criar componente de card",
        description:
          "Padronizar layout do card com título, data, descrição e ação principal.",
        date: "17/04/2026",
      },
      {
        title: "Conectar seed ao board",
        description:
          "Trocar os mocks manuais por uma lista única renderizada por map.",
        date: "17/04/2026",
      },
      {
        title: "Revisar scroll horizontal",
        description:
          "Garantir que colunas fora da tela aparecam apenas ao rolar a board.",
        date: "18/04/2026",
      },
      {
        title: "Separar cards por prioridade",
        description:
          "Criar uma ordem visual clara para tarefas urgentes, médias e baixas.",
        date: "18/04/2026",
      },
      {
        title: "Simular estado de carregamento",
        description:
          "Adicionar uma base para skeleton ou loading nos cards do board.",
        date: "19/04/2026",
      },
    ],
  },
  {
    title: "In progress",
    color: "#5B7FFF",
    cards: [
      {
        title: "Montar header fixo",
        description:
          "Manter as acoes visiveis enquanto o board rola abaixo da barra superior.",
        date: "14/04/2026",
      },
      {
        title: "Refinar largura das colunas",
        description:
          "Evitar que os containers encolham quando a viewport ficar menor.",
        date: "14/04/2026",
      },
      {
        title: "Ajustar espacos internos",
        description:
          "Fechar paddings, gaps e alinhamento entre o header e o board.",
        date: "15/04/2026",
      },
      {
        title: "Aplicar largura minima nas colunas",
        description:
          "Impedir que o flex reduza os containers quando faltar espaço.",
        date: "15/04/2026",
      },
      {
        title: "Validar comportamento mobile",
        description:
          "Confirmar rolagem e legibilidade em telas menores que 768px.",
        date: "16/04/2026",
      },
      {
        title: "Ajustar sombra dos cards",
        description:
          "Suavizar a elevação para combinar com o visual geral do board.",
        date: "16/04/2026",
      },
    ],
  },
  {
    title: "Review",
    color: "#8F63D3",
    cards: [
      {
        title: "Validar acessibilidade",
        description:
          "Checar contraste, foco visual e comportamento de teclado nos botoes.",
        date: "18/04/2026",
      },
      {
        title: "Testar responsividade",
        description:
          "Confirmar comportamento do board em telas pequenas e medias.",
        date: "18/04/2026",
      },
      {
        title: "Revisar copy dos botoes",
        description:
          "Ajustar rótulos de acao para ficar mais claro o que cada botao faz.",
        date: "19/04/2026",
      },
      {
        title: "Checar consistencia das datas",
        description:
          "Padronizar o formato das datas exibidas nos cards do seed.",
        date: "19/04/2026",
      },
    ],
  },
  {
    title: "Done",
    color: "#2F9E5E",
    cards: [
      {
        title: "Estruturar layout base",
        description:
          "Criar a pagina inicial com header, board e area de conteudo principal.",
        date: "12/04/2026",
      },
      {
        title: "Centralizar tokens de estilo",
        description:
          "Reaproveitar fontes, bordas e cores globais no arquivo de tema.",
        date: "12/04/2026",
      },
      {
        title: "Habilitar overflow oculto",
        description:
          "Mover o scroll para dentro da board e esconder a barra do navegador.",
        date: "13/04/2026",
      },
      {
        title: "Estabilizar o layout principal",
        description:
          "Garantir que a pagina ocupe a altura total sem empurrar o browser.",
        date: "13/04/2026",
      },
      {
        title: "Fechar o seed inicial",
        description:
          "Deixar o board populado com exemplos reais para desenvolvimento.",
        date: "14/04/2026",
      },
    ],
  },
];