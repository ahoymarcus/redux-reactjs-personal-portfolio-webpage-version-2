export let mainProjects = [
	{
		title: 'Rocket Launches App',
		urlRepository: 'https://github.com/ahoymarcus/reactjs-rocket-launches-app',
		urlApp: 'https://reactjs-rocket-launches-app.netlify.app/',
		image: '/images/frontend/reactjs-rocket-launches-app.png',
		description: 'Este React app foi escrito para ser cliente de uma API que por sua vez consome seua dados de outra API externa, limitando o serviço final a apenas 04 rotas.',
		tags: ['react-js', 'use-context', 'react-router-dom', 'react-icons', 'styled-components', 'api rest'],
	},
	{
		title: 'Rocket Launches API',
		urlRepository: 'https://github.com/ahoymarcus/expressjs-rocket-launches-api',
		urlApp: '',
		image: '/images/backend/nodejs-rocket-launches-api.png',
		description: 'A API consome dados de uma API externa, a API da SpaceX REST API para criar um pequeno serviço de dados, na forma de uma api rest local com só 04 rotas.',
		tags: ['node-js', 'jwt'],
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
		title: 'Jobs Search API',
		urlRepository: 'https://github.com/ahoymarcus/nodejs-jobs-api',
		urlApp: 'Uma API completa com dados de empregabilidade e que usa de autenticação jwt.',
		image: '/images/backend/job-api-big-icon.png',
		description: 'API completa que utiliza autenticaçãoJWT nas rotas restritas, além de usar Bcryptjs como forma de hashear dados de senhas armazenados no banco de dados.',
		tags: ['node-js', 'jwt', 'bcryptjs'],
	},
	{
		title: 'Products Store API',
		urlRepository: 'https://github.com/ahoymarcus/nodejs-store-api',
		urlApp: '',
		image: '/images/backend/store-api-icon-big.png',
		description: 'A API permite consultas de maneira dinâmica através da passagem de parâmetros ou operadores de comparação, por exemplo, a partir dos seus campos, como nome, preço ou companhia, etc...',
		tags: ['express-js', 'dotenv', 'mongodb'],
	},
	{
		title: 'jwt Exercise Studyapp',
		urlRepository: 'https://github.com/ahoymarcus/nodejs-jwt-basics-studyapp',
		urlApp: '',
		image: '/images/backend/jwt-basics-studyapp-freecodecamp.org.png',
		description: 'Uma aplicação de estudo para treinar o padrão de autenticação JSON Web Token (jwt), uma importante parte dentro do desenvolvimento de aplicações web quanto ao quesito de segurança.',
		tags: ['node-js', 'jwt', 'express-async-errors', 'dotenv', 'mongodb'],
	}
];


