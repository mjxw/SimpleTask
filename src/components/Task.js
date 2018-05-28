import React, { Component } from 'react';
import { Card, CardTitle, CardText, Input, Button } from 'reactstrap';

class Task extends Component{
	constructor(props) {
		super(props);

		this.state = {
			isHovering: false,
			isEditing: false,
		}
		this.handleHover = this.handleHover.bind(this);		
		this.handleEdit = this.handleEdit.bind(this);
	}

	handleHover() {
		this.setState({
			isHovering: !this.state.isHovering
		});
	}

	handleEdit(e) {
		e.preventDefault();		
		this.setState({
			isEditing: !this.state.isEditing
		});
	}


	render() {
		return (
			this.state.isEditing ? 

			// Show edit mode if user clicked 'edit' 
			(<div className="Add-box">
				<div className="Add-area">
					<form onSubmit={this.handleEdit}>
						<Input id="Task-name" value={this.props.editValue} placeholder="Enter task name..." onChange={this.props.handleChange}/> 
						<Button id="Save-btn" type="submit"outline color="primary" onClick={this.props.onEdit}>Save</Button>
					</form>
				</div>
			</div>) 
			
			: 
			
			// Else show the regular options
			(<Card key={this.props.index} className={this.state.isHovering ? "Task-box" : "Edit-box"}body inverse onMouseEnter={this.handleHover}onMouseLeave={this.handleHover} >
			
				<CardTitle className={this.state.isHovering? "Task-name" : "Edit-complete"}>
				{this.state.isHovering ? this.props.task.taskName : 

					// If task is 'completed' show 'undo | edit' 
					(this.props.task.completed ?  (<div className="Edit-area"> <p className="Undo-task" onClick={this.props.onUndo}>Undo</p><p className="Edit-task" onClick={this.handleEdit}>Edit</p></div>):
					
					// If task is NOT 'completed' show 'complete | edit'
					(<div className="Edit-area"> <p className="Complete-task" onClick={this.props.onComplete}>Complete</p> 
					<p className="Edit-task" onClick={this.handleEdit}>Edit</p></div>))}
				
				</CardTitle>
					
				{this.state.isHovering ? <CardText className={this.props.task.completed ? "Completed-task" : "Active-task"}>{this.props.task.completed ? "Completed" : "Active"}</CardText> : ""}
			</Card>)

		);
	}


}

export default Task;

