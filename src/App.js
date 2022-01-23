import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { 
	setFrontendProjects,
	setBackendProjects,
	setVanillaJsProjects,
	setWebDesignProjects,
	setMainProjects,
	setMainTags,
	setAllProjects
} from './redux/actions/projectsActions';

// styles
import './App.css'; 

// pages
import MainProjectsPage from './pages/MainProjectsPage';
import AllProjectsPage from './pages/AllProjectsPage';
import ErrorPage from './pages/ErrorPage';

// components
import Navbar from './components/Navbar';
import SelectComponent from './components/SelectComponent';
import { MemoizedAggregationTab } from './components/AggregationTab';
import Footer from './components/Footer';

// dados
import { frontendProjects } from './data/frontendProjects';
import { backendProjects } from './data/backendProjects';
import { vanillaJSProjects } from './data/vanillaJSProjects';
import { webdesignProjects } from './data/webdesignProjects';
import { mainProjects } from './data/mainProjects';
import { mainTags } from './common/main-tags';


 
function App() {
	const dispatch = useDispatch();


	dispatch(setFrontendProjects(frontendProjects));
	dispatch(setBackendProjects(backendProjects));
	dispatch(setVanillaJsProjects(vanillaJSProjects));
	dispatch(setWebDesignProjects(webdesignProjects));
	dispatch(setAllProjects([...frontendProjects, ...backendProjects, ...vanillaJSProjects, ...webdesignProjects]));
	dispatch(setMainProjects(mainProjects));
	
	dispatch(setMainTags(mainTags));
	
	
	
	
	
  return (
    <>
      <header>
				<Navbar />
			</header>
      <main>
				<section 
					id="welcome-section" 
					className="welcome-section" 
					aria-label="Welcome"
				>
					<h1>Ahoooy, there! My name is Marcus Richa</h1>
					<p>Welcome to my Portfolio Webpage.</p>
				</section>
				
				<section 
					id="select-projects-section"
					className="select-section"
					aria-label="select projects section"
				>
					<SelectComponent />
				</section>
				
				<section 
					id="aggregation"
					className="aggregation"
					aria-label="Aggregation Information"
				>
					<MemoizedAggregationTab />
				</section>
				
				<Router>
					<Routes>
						<Route path="/" element={<MainProjectsPage />} />
						<Route path="/all-projects" element={<AllProjectsPage />} />
							{/*<Route path="*" element={<ErrorPage />} />*/}
					</Routes>
				</Router>
						
				
				<section 
					id="contact" 
					className="contact" 
					aria-label="Contacts"
				>
					<div className="contact-header">
						<h2>Jump on board skipper...</h2>
						<p>How do you take your coffee?</p>
					</div> 
					<div className="contact-links-container">
						<div className="contact-links">
							<a id="profile-link" target="_blank" href="https://www.linkedin.com/in/marcus-vinicius-richa-183104199/"><i className="fa fa-github" aria-hidden="true"></i> @Linkedin</a>
							<a id="profile-link" target="_blank" href="https://www.freecodecamp.org/ahoymarcus"><i className="fa fa-free-code-camp" aria-hidden="true"></i> @FreeCodeCamp</a>
							
						</div>
						<div className="contact-links">
							<a id="profile-link" target="_blank" href="https://github.com/ahoymarcus"><i className="fa fa-github" aria-hidden="true"></i> @GitHub</a>
							<a id="profile-link" target="_blank" href="https://web.digitalinnovation.one/home"><i className=""></i> @Digital-Innovation-One</a>
						</div>
					</div>
			
				</section>
				
			</main>
			
			<Footer />
    </>
  );
}



export default App;



