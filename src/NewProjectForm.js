import React from 'react';
import { Input, Card, Button } from './Styled'

// 1. Make the text input a controlled component by adding an onChange listener
//    and storing the current value in local state. 
class NewProjectForm extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
				name: "", 
				description: "",
				warning: false
			}
	}

	// In part 1, implement the handleChange function and define it as the change handler
	// for the controlled input
	handleNameChange = (event) => {
		this.setState({name: event.target.value})
	}


	// In part 2, you can either add another change handler function, 
	// or use this one for both name and description inputs
	handleDescriptionChange = (event) => {
		this.setState({description: event.target.value})
	}

	// After you implement part 1 of this challenge, you should no longer need to
	// refer to the DOM element (event.target) in handleSubmit.
	// Change the handleSubmit implementation to get the value from local state
	// rather than from the DOM:
	handleSubmit = (event) => {
		// handleSubmit gets the value currently in the text field from the dom
		// and updates the list of projects using setState passed in from App
		event.preventDefault()
		// const textField = event.target.children[0]
		const newProjectName = this.state.name
		if (!newProjectName) {
			this.setState({ warning: true })
			return
		}
		const newProjectDescription = this.state.description
		let updatedProjects = [{ name: newProjectName, description: newProjectDescription },...this.props.projects]
		this.props.setProjects(updatedProjects)
		this.setState({ name: "", description: "" })
	}

	// 2. Add another Input of type text for a description after the name field. 
	//    Give it the attribute name="description".
	//    Make it a controlled component with a change handler like the first input.
	//    When 'Add project' is clicked, include the description in the project saved to state.
	//    
	//    See ProjectList for the update you should include there to show the description.
	//
	// 3. If Add Project is clicked and no name is given, display a warning message 
	//    above the form that says "You must enter a project name".
	//    Make sure you consult the value in state (not in the DOM) to determine when to display a warning.
	render() {
		return (
			<div>
				{this.state.warning && <p>You must enter a project name</p>}
				<Card data-testid="name-state" bgcolor="pink">
					name: {this.state.name}
				</Card>
				<Card >
					<form onSubmit={this.handleSubmit} data-testid="project-form">
						<label>Project Name</label>
						<Input data-testid="project-name" type="text" value={this.state.name} onChange={this.handleNameChange}></Input>	
						<label>Description</label>
						<Input data-testid="project-name" type="text" value={this.state.description} onChange={this.handleDescriptionChange}></Input>
						<Button data-testid="project-add">Add Project</Button>
					</form>
				</Card>
			</div>
		);
	}
}

export default NewProjectForm;