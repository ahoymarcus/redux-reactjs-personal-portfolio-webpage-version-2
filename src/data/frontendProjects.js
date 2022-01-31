export let frontendProjects = [
	{
		title: 'Next-JS JSnews Blog',
		urlRepository: 'https://github.com/ahoymarcus/nextjs-myjs-tech-blog',
		urlApp: 'https://nextjs-myjs-tech-blog.vercel.app/',
		image: '/images/frontend/nextjs-myjs-tech-blog-02.png',
		description: 'My personal blog with articles and informations about JavaScript and Web Development.',
		tags: ['react-js', 'next-js', 'gray-matter', 'remark', 'remark-html', 'date-fns'],
	},{
		title: 'Rocket Launches App',
		urlRepository: 'https://github.com/ahoymarcus/reactjs-rocket-launches-app',
		urlApp: 'https://reactjs-rocket-launches-app.netlify.app/',
		image: '/images/frontend/reactjs-rocket-launches-app.png',
		description: 'Este React app foi escrito para ser cliente de uma API que por sua vez consome seus dados de outra API externa que limita o serviço final a apenas 04 rotas.',
		tags: ['react-js', 'use-context', 'react-router-dom', 'react-icons', 'styled-components', 'api rest'],
	},
	{
		title: 'Next-JS Weather App',
		urlRepository: 'https://github.com/ahoymarcus/nextjs-weather-app',
		urlApp: 'https://nextjs-weather-app-dun.vercel.app/',
		image: '/images/frontend/nextjs-weather-app-01.png',
		description: 'Um app Next.JS que renderiza informações do tempo de cidades ao redor do mundo utilizando a API Open Weather (https://openweathermap.org/), passando alguns parâmetros definir o retorno dos dados.',
		tags: ['react-js', 'next-js', 'api rest', 'scss', 'moment-timezone'],
	},
	{
		title: 'Next-JS News Blog',
		urlRepository: 'https://github.com/ahoymarcus/nextjs-news-blog',
		urlApp: 'https://nextjs-reactjs-news-blog.vercel.app/',
		image: '/images/frontend/nextjs-news-blog.png',
		description: 'Um app Next.JS que renderiza um Blog de notícias utilizando a API pública News API (https://newsapi.org/), passando alguns parâmetros para a requição definindo número de artigos por página e a página propriamente dita que é passada de forma dinâmica na URL.',
		tags: ['react-js', 'next-js', 'api rest'],
	}, {
		title: 'redux Shopping App',
		urlRepository: 'https://github.com/ahoymarcus/redux-reactjs-shopping-cart',
		urlApp: 'https://redux-axios-reactjs-shopping-cart.netlify.app/',
		image: '/images/frontend/redux-reactjs-shopping-cart-01.png',
		description: 'O App busca em API pública e renderiza uma vitrine. Como funcionalidades especiais, usa redux para gerenciar o estado geral da aplicação e react-router-dom para criar um sistema de roteamento de páginas no frontend.',
		tags: ['react-js', 'redux', 'react-redux', 'react-router-dom', 'styled-components', 'api rest', 'axios'],
	},
	{
		title: 'Typescript Shopping App',
		urlRepository: 'https://github.com/ahoymarcus/typescript-reactjs-shopping-cart-app',
		urlApp: 'https://typescript-reactjs-shopping-cart-app.netlify.app/',
		image: '/images/frontend/typescript-reactjs-shopping-cart-app.png',
		description: 'Renderiza um mostruário de produtos a partir de dados requisitados de uma API externa. Apresenta os produtos, adiciona ao carrinho de compra, enquanto agrega os valores dos itens incluídos ou excluídos da seleção.',
		tags: ['react-js', 'react-query', 'styled-components', 'typescript', 'api rest'],
	},
	{
		title: 'React-JS Shopping App',
		urlRepository: 'https://github.com/ahoymarcus/reactjs-shopping-cart-with-reducer-app',
		urlApp: 'https://reactjs-shopping-cart-with-use-reducer-app.netlify.app/',
		image: '/images/frontend/reactjs-shopping-cart-with-usereducer-app.png',
		description: 'Como funcionalidade mais avançada este app usa os Hooks use-context e use-reducer para controlar a passagem de valores entre as funções de renderização para a agregação dos valores do carrinho',
		tags: ['react-js', 'use-context', 'use-reducer', 'api rest'],
	},
	{
		title: 'redux Cinema App',
		urlRepository: 'https://github.com/ahoymarcus/redux-toolkit-reactjs-cinema',
		urlApp: 'https://redux-toolkit-reactjs-cinema.netlify.app/',
		image: '/images/frontend/redux-toolkit-reactjs-cinema-01.png',
		description: 'App react-js de filmes-sériees. Como funcionalidades especiais usa o react-router-dom para roteamento no frontend e o reduxjs-toolkit para simplificar o uso do redux ao gerenciar o estado geral da aplicação.',
		tags: ['react-js', 'redux', 'reduxjs-toolkit', 'react-router-dom', 'api rest', 'axios', 'scss'],
	},
	{
		title: 'Higher Order Component App',
		urlRepository: 'https://github.com/ahoymarcus/reactjs-higher-order-component-study',
		urlApp: 'https://reactjs-higher-order-component-study.netlify.app/',
		image: '/images/frontend/reactjs-higher-order-component.png',
		description: 'Um app de estudo para usar a funcionalidade dos Higher Order Components do React-JS para refatorar lógicas duplicadas de dois componentes de listas sendo renderizados pela aplicação.',
		tags: ['react-js', 'api rest'],
	},
	{
		title: 'Cocktail Drinks App',
		urlRepository: 'https://github.com/ahoymarcus/reactjs-cocktails-page-with-router-app',
		urlApp: 'https://reactjs-cocktails-page-with-router-app.netlify.app/',
		image: '/images/frontend/reactjs-cocktails-with-router-app.png',
		description: 'O app consome dados de uma API pública e renderiza os dados na forma de um web site, com páginas diversas. Ademais, o site permite fazer pesquisas por formuláro para buscar os drinks por nome.',
		tags: ['react-js', 'use-context', 'react-router-dom', 'api rest'],
	},
	{
		title: 'Quiz Game App',
		urlRepository: 'https://github.com/ahoymarcus/typescript-reactjs-quiz-app',
		urlApp:  'https://typescript-reactjs-quiz-app.netlify.app/',
		image: '/images/frontend/typescript-reactjs-quiz-app.png',
		description: 'O app usa dados de uma a API externa de Trivia e apresenta perguntas aos usuários por meio de uma aplicação com react-js e typescript, enquanto controla todas as demais funcionalidades.',
		tags: ['react-js', 'styled-components', 'typescript', 'api rest'],
	},
	{
		title: 'Grocery Bud App',
		urlRepository: 'https://github.com/ahoymarcus/reactjs-grocery-bud-app',
		urlApp: 'https://reactjs-grocery-bud-app.netlify.app/',
		image: '/images/frontend/reactjs-grocery-bud-app.png',
		description: 'O projeto constrói um app que renderiza um formulário permitindo ao usuário a inserção, edição e remoção dos dados, incluse usando do local-storage do browser para persistir os dados guardados.',
		tags: ['react-js', 'local-storage'],
	},
	{
		title: 'Next.JS Blog App',
		urlRepository: 'https://github.com/ahoymarcus/nextjs-org-blog-tutorial',
		urlApp: 'https://nextjs-org-blog-tutorial.vercel.app/',
		image: '/images/frontend/nextjs-org-blog-tutorial-01.png',
		description: 'Um app feito com Next-JS, como parte do tutorial da Next.JS.org. Entre outros, é trabalhado o tratamento do conteúdo estático, Roteamento no frontend, estilização CSS, uso dinâmico de dados, etc...',
		tags: ['react-js', 'next-js', 'api rest'],
	},
	{
		title: 'Submenus Components App',
		urlRepository: 'https://github.com/ahoymarcus/reactjs-stripe-submenus-component-app',
		urlApp: 'https://reactjs-stripe-submenus-components-app.netlify.app/',
		image: '/images/frontend/reactjs-stripe-submenus-components-app.png',
		description: 'O app apresenta uma série de componentes de menu numa página de estudo, desde um componente de Hero até componentes de Navbar, Sidebar, Submenu, tudo de forma condicionada dependendo da interação com o usuário.',
		tags: ['react-js', 'use-ref', 'use-context'],
	},
	{
		title: 'Sidebar Study App',
		urlRepository: 'https://github.com/ahoymarcus/reactjs-sidebar-model-component-app',
		urlApp: 'https://reactjs-sidebar-component-with-use-context-hook.netlify.app/',
		image: '/images/frontend/reactjs-sidebar-component-with-usecontext.png',
		description: 'O app tem dois componentes, sendo o principal um Sidebar e o outro um Modal. De forma mais específica, o app se utiliza neste projeto do Hook use-context para criar um contexto de escopo global.',
		tags: ['react-js', 'use-context'],
	},
	{
		title: 'Navbar Study App',
		urlRepository: 'https://github.com/ahoymarcus/reactjs-with-use-ref-navbar-app',
		urlApp: 'https://reactjs-navbar-component-with-use-ref-hook.netlify.app/',
		image: '/images/frontend/reactjs-navbar-component-with-useref.png',
		description: 'O app tem um componente de Navbar responsivo que se utiliza do Hook use-ref para buscar referência do componente de lista e assim definir dinamicamente seu tamanho em relação à propriedade Height de CSS.',
		tags: ['react-js', 'use-ref Hook', 'react-icons'],
	},
	{
		title: 'Color Generator App',
		urlRepository: 'https://github.com/ahoymarcus/reactjs-color-generator-app',
		urlApp: 'https://react-js-color-generator-app.netlify.app/',
		image: '/images/frontend/reactjs-color-generator-app-02.png',
		description: 'O app usa a propriedade CSS de HSL para renderizar cores. Usa a biblioteca Values.js para validar os valores das cores. Finalmente,  usa a API Clipboard para a copia dos valores das cores com o clique do botão do mouse.',
		tags: ['react-js', 'values.js', 'api clipboard'],
	},
	{
		title: 'Tours Reviews App',
		urlRepository: 'https://github.com/ahoymarcus/reactjs-reviews-posts-app',
		urlApp: 'https://reactjs-tours-review-app.netlify.app/',
		image: '/images/frontend/reactjs-tours-review-app.png',
		description: 'O app consome dados de um arquivo e renderiza estes dados na forma de cartões. Permite também iterar pelas postagens com botões em ambas as direções, Next e Prev, etc...',
		tags: ['react-js'],
	},
	{
		title: 'Cinema Developer App',
		urlRepository: 'https://github.com/ahoymarcus/reactjs-dev-cinemapp',
		urlApp: 'https://github.com/ahoymarcus/reactjs-dev-cinemapp',
		image: '/images/frontend/reactjs-cinema-app.png',
		description: 'Um app que faz requisição GET numa API de filmes e retorna para o usuário. O usuário pode fazer pesquisas por texto. Contudo, as funcionalidades de frontend, contudo, ainda não estão todas finalizadas!',
		tags: ['react-js', 'api rest'],
	},
	{
		title: 'Slider Component App',
		urlRepository: 'https://github.com/ahoymarcus/reactjs-slider-component-app',
		urlApp: 'https://reactjs-slider-component-app.netlify.app/',
		image: '/images/frontend/reactjs-slider-component-app.png',
		description: 'O projeto consome dados de um arquivo e renderiza os dados num elemento do tipo Slider, apresentando dados de reviews postados.',
		tags: ['react-js'],
	},
	{
		title: 'Interactive Menu App',
		urlRepository: 'https://github.com/ahoymarcus/reactjs-interactive-menu-app',
		urlApp: 'https://reactjs-interactive-menu-app.netlify.app/',
		image: '/images/frontend/reactjs-interactive-menu-app.png',
		description: 'Um app que consome dados de um arquivo para renderizar um menu de restaurante. Tem botões que controlam a renderização do menu de acordo com uma coleção de categorias tipo: Breakfast, Lunch, Shakes, etc...',
		tags: ['react-js'],
	},
	{
		title: 'Courses List App',
		urlRepository: 'https://github.com/ahoymarcus/basic-angular8-dio',
		urlApp: 'https://github.com/ahoymarcus/basic-angular8-dio',
		image: '/images/frontend/angular-8-course-list-app-02.png',
		description: 'Curso de introdução ao framework Angular 8 - Digital Innovation One',
		tags: ['angular 8', 'typescript', 'node-js', 'bootstrap', 'font-awesome'],
	},
	{
		title: 'Birthday Reminder App',
		urlRepository: 'https://github.com/ahoymarcus/reactjs-birthday-reminder',
		urlApp: 'https://ahoymarcus-reactjs-birthday-reminder.netlify.app/',
		image: '/images/frontend/birthday-remainder-project-02.png',
		description: 'O app consome dados de um arquivo e os renderiza num cartão. Permite ainda a seleção dos dados de aniversariantes do dia.',
		tags: ['react-js'],
	},
	{
		title: '25 + 5 Clock App',
		urlRepository: 'https://github.com/ahoymarcus/pomodoro-clock-with-class-freecodecamp',
		urlApp: 'https://codepen.io/ahoymarcus/pen/xxqvVLw?editors=0010"',
		image: '/images/frontend/pomodoro-clock-icon.png',
		description: 'Trata-se de um dos 05 projetos definidos na certificação de formação para Frontend Libraries da plataforma FreeCodeCamp.org.',
		tags: ['react-js'],
	},
	{
		title: 'Pocket Calculator App',
		urlRepository: '',
		urlApp: 'https://codepen.io/ahoymarcus/pen/PopNrRB?editors=0010',
		image: '/images/frontend/calculator-icon-squared.png',
		description: 'Trata-se de mais um dos 05 projetos definidos na certificação de formação para Frontend Libraries da plataforma FreeCodeCamp.org.',
		tags: ['react-js'],
	},
	{
		title: 'Markdown Prviewer App',
		urlRepository: 'https://github.com/ahoymarcus/desafio-git-dio-estudo-de-markdown',
		urlApp: 'https://codepen.io/ahoymarcus/pen/OJpNWZr',
		image: '/images/frontend/markdown-previewer-icon.png',
		description: 'Ainda outro projeto dentro os 05 definidos na certificação de formação para Frontend Libraries da plataforma FreeCodeCamp.org.',
		tags: ['react-js'],
	},
	{
		title: 'Random Quote Machine App',
		urlRepository: '',
		urlApp: 'https://codepen.io/ahoymarcus/pen/XWMXqRE',
		image: '/images/frontend/quotes-machine-icon.png',
		description: 'Um dos 05 projetos definidos na certificação de formação para Frontend Libraries da plataforma FreeCodeCamp.org.',
		tags: ['react-js'],
	},
	{
		title: 'Covid-19 Cases App',
		urlRepository: 'https://github.com/ahoymarcus/covid19-reactapp',
		urlApp: 'https://github.com/ahoymarcus/covid19-reactapp',
		image: '/images/frontend/covid-app-icon.png',
		description: 'Um PWA completo que permite executar o app como uma aplicação nativa, tudo isoo sem precisar de plugins da Play Store ou da App Store. Projeto da plataforma de ensino Digital Innovation One.',
		tags: ['react-js', 'styled-components', 'material-ui'],
	},
	{
		title: 'CriptoCoins App',
		urlRepository: '',
		urlApp: 'https://api-criptomoedas-javascript.netlify.app/',
		image: '/images/frontend/cripocoins-icon.png',
		description: 'Buscando dados em API externa sobre criptomoedas. Projeto da plataforma de ensino Digital Innovation One.',
		tags: ['react-js'],
	},
];





