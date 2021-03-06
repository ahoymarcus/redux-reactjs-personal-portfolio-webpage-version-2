import { useState } from 'react';
import { useSelector} from 'react-redux';

// styles
import './ProjectsSlider.css';

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
//import { webdesignProjects } from '../data/webdesignProjects';



const ProjectsSlider = ({ type }) => {
	// redux
	const vanillaJSProjects = useSelector((state) => state.allProjects.vanillaJs);
	const webdesignProjects = useSelector((state) => state.allProjects.webDesign);
	const mainProjects = useSelector((state) => state.allProjects.mainProjects);
	const otherProjects = [...webdesignProjects, ...vanillaJSProjects];
	
	// states
	const [ index, setIndex ] = useState(0);
	const [ projects, setProjects ] = useState(type === 'mainProjects' ? mainProjects : otherProjects);
	const [ h2Heading, setH2Heading ] = useState(type === 'mainProjects' ? 'My Self Made Projects' : 'Other Projects');
	const [ h3Heading, setH3Heading ] = useState(type === 'mainProjects' ? 'My Own Frontend and Backend Projects' : 'Vanilla JavaScript and Web Design Projects');
	
	console.log(type);
	console.log(projects);
	console.log(index);
	
	
	let { title, image, urlApp, urlRepository, description, tags } = projects[index];	
	//console.log(tags);
	
	
	const checkNumber = (number, arr) => {
    console.log(arr.length);
    console.log(arr);
		
		if (number > arr.length - 1) {
      return 0;
    }
    if (number < 0) {
      return arr.length - 1;
    }
    return number;
  };
	
	
	const nextProject = (arrProj) => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex, arrProj);
    });
  };
  const prevProject = (arrProj) => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex, arrProj);
    });
  };
	
	
	return (
		<div >
			<h2 id="projects-section-title">{h2Heading}</h2>
		
			<div className="btn-container">
				<button className="prev-btn" onClick={() => prevProject(type === 'mainProjects' ? mainProjects : otherProjects)}>
					<FaChevronLeft />
				</button>
				<button className="next-btn" onClick={() => nextProject(type === 'mainProjects' ? mainProjects : otherProjects)}>
					<FaChevronRight />
				</button>
			</div>
			
			<div className="projects-slider">	
				<article className="projects-slider-img-container">
					<img src={image} alt={`projeto ${title}`} className="projects-slider-img" />
				</article>
				<article className="projects-slider-info">
					<h4>{title}</h4>
					<p>
						{description}
					</p>
					<div className="tags">
						<ul>
							{tags.map((tag, index) => {
								return <p key={index} style={{color: 'rgb(36 151 36)'}}>#{tag.toUpperCase()}</p>;
							})}
						</ul>
					</div>
					<div className="repositories">
						<h6><a target="_blank" href={urlApp}>The On-line App</a></h6>
						<h6><a target="_blank" href={urlRepository}>Github repository</a></h6>
					</div>
					
				</article>
			</div>
			
			<h3>{h3Heading}</h3>
		</div>
	);
};



export default ProjectsSlider


