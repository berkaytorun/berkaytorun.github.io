import React from 'react';
import ProjectItem from '../components/ProjectItem.js';
import { ProjectList } from '../helpers/ProjectList';

import '../styles/Project.css';

function Projects() {
	return (
		<div className='projects'>
			<h1> My Personal Projects</h1>
			<div className='projectList'>
				{ProjectList.map((project, id) => {
					return (
						<ProjectItem
							url={project.url}
							id={id}
							name={project.name}
							image={project.image}
							skills={project.skills}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default Projects;
