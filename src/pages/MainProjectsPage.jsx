import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// components
import ProjectsSlider from '../components/ProjectsSlider';




const MainProjectsPage = () => {
	
	
	return (
		<>		
			<div 
				className="navigation-links"
			>
				<Link to="/"><span className="navigation-links-color-main">My Self Made Projects</span></Link>
				<Link to="/all-projects"><span className="navigation-links-color-aux">See Also All My Learning Projects</span></Link>
			</div>
			 
			<section 
				id="projects-slider" 
				className="projects-slider" 
				aria-label="Web Development Projects"
			>
				<ProjectsSlider type={'mainProjects'} />
			</section>
			
		</>
	);
};



export default MainProjectsPage;


