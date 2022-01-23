import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// components
import ProjectList from '../components/ProjectList';
import ProjectsSlider from '../components/ProjectsSlider';



const AllProjectsPage = () => {
	/* REFERENTE AO COMPONENTE SELECTEDSECTION */
	const selectedSection = useSelector((state) => state.selectedSection.selectedSection);
	console.log(selectedSection);
	
	
	
	return (
		<>
			<div className="navigation-links">
				<Link to="/"><span className="navigation-links-color">The Main Projects List</span></Link>
				<Link to="/all-projects"><span className="navigation-links-color">The Whole Project Section</span></Link>
			</div>
			
			{selectedSection === 'All' || selectedSection === 'Frontend' ? 
				<section 
					id="frontend-projects"
					className="projects" 
					aria-label="Web Development Projects"
				>
					<ProjectList type="frontend" />
				</section>
			 : null}

			{selectedSection === 'All' || selectedSection === 'Backend' ? 
				<section 
					id="backend-projects"
					className="projects" 
					aria-label="Web Development Projects"
				>	
					<ProjectList type="backend" />
				</section>
			 : null}

			{selectedSection === 'All' || selectedSection === 'VanillaJS' ? 
				<section 
					id="projects-slider" 
					className="projects-slider" 
					aria-label="Web Development Projects"
				>
					<ProjectsSlider type={'otherProjects'} />
				</section>
			 : null}
		</>
	);
};



export default AllProjectsPage;



