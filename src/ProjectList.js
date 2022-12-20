import React from 'react';
import {CenteredRow, Card} from './Styled'

const ProjectList = (props) => {
	const {projects} = props
	// 2. For part 2, update ProjectList to include the project description
	//    when one is provided. 
	//    Use conditional rendering to avoid an exception
	//    when no description is available.
	return (
		<div>
			{projects.map((project,index) => {
				return (
					<CenteredRow key={index}>
						<Card> 
							<b>{project.name}</b><br />
							{project.description}
						</Card>
					</CenteredRow>
				)
			})}	
		</div>
	);
}

export default ProjectList;
