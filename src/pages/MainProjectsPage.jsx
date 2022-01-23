import React from 'react';
import { Link } from 'react-router-dom';

// components
import ProjectsSlider from '../components/ProjectsSlider';




const MainProjectsPage = () => {
 
	return (
		<>		
			<div className="navigation-links">
				<Link to="/"><span className="navigation-links-color">The Main Projects List</span></Link>
				<Link to="/all-projects"><span className="navigation-links-color">The Whole Project Section</span></Link>
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


