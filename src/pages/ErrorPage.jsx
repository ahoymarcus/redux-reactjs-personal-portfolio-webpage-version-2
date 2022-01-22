import React from 'react';
import { Link } from 'react-router-dom';



const ErrorPage = () => {

	return (
		<div>
			<h1>404 - Página não encontrada</h1>
			<p>Hora de retornar para Home Page</p>
			<Link to="/">Back to Main Page</Link>
		</div>
	);
};



export default ErrorPage;


