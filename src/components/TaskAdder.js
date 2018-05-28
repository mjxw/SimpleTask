import React, { Component } from 'react';
import { Input, Button } from 'reactstrap';

class TaskAdder extends Component {
	constructor(props) {
		super(props);

		this.state = {
			clicked: false,
			value: ''
		};

		this.handleClick = this.handleClick.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleClick(e) {
    this.setState(prevState => ({
      clicked: !prevState.clicked
		}));
	}

	handleSubmit(e) {
		e.preventDefault();
		this.handleClick(e);
		this.props.onTaskAdded(this.state.value);
		this.setState({value: ''});
	}

	handleChange(e) {
		this.setState({value: e.target.value});
	}
	
	
  	render() {
		const clicked = this.state.clicked;
		return (
			clicked ? (
				<div className="Add-box">
					<div className="Add-area">
							<form onSubmit={this.handleSubmit}>
								<Input id="Task-name" value={this.state.value} placeholder="Enter task name..." onChange={this.handleChange} /> 
								<Button id="Save-btn" type="submit"outline color="primary">Save</Button>
							</form>
					</div>
				</div>
			) : (
				<div className="Add-box" onClick={this.handleClick}> 
					<p>+ Add Task</p>
				</div>
				)
		);
  	}
}

export default TaskAdder;
