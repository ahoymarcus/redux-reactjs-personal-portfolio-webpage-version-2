import React from 'react';
import { Link } from 'react-router-dom';

// components
import MainProjectsSlider from '../components/MainProjectsSlider';



const MainProjectsPage = () => {

	return (
		<div>		
			<div className="navigation-links">
				<Link to="/"><span className="navigation-links-color">The Main Projects List</span></Link>
				<Link to="/all-projects"><span className="navigation-links-color">The Whole Project Section</span></Link>
			</div>
			
			<h1 id="projects-section-title">MainProjectsPage</h1>
	
		</div>
	);
};



export default MainProjectsPage;


