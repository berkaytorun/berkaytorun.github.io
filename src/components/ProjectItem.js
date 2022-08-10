import React from 'react';
import Button from '@material-ui/core/Button';

function ProjectItem({ image, name, id, skills, url }) {
	return (
		<div
			className='projectItem'
			onClick={() => {
				window.open(url, '_blank');
			}}>
			<div style={{ backgroundImage: `url(${image})` }} className='bgImage' />
			<h1> {name} </h1>
			<div className='button-container'>
				{skills.map((element) => {
					return (
						<Button size='small' className='techstack'>
							{element}
						</Button>
					);
				})}
			</div>
		</div>
	);
}

export default ProjectItem;
