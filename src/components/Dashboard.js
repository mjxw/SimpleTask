import React, { Component } from 'react'
import Statusbar from './Statusbar';
import TaskAdder from './TaskAdder';
import Task from './Task';
import { connect } from 'react-redux';
import { addTask, handleChange, editTask, completeTask, undoTask } from '../actions/taskActions'; 

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.onTaskAdded = this.onTaskAdded.bind(this);
    this.onCompleteTask = this.onCompleteTask.bind(this);
    this.onEditTask = this.onEditTask.bind(this);
    this.onUndoTask = this.onUndoTask.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      tasks: [],
      editValue: '',
		}
  }

  onTaskAdded(name) {
    this.props.addTask(name);
  }

  onCompleteTask(index) {
    // let updatedTasks = this.state.tasks.slice();
    // updatedTasks[index].active = false;
    // updatedTasks[index].completed = true;
    // this.setState({
    //   tasks: updatedTasks
    // });
    this.props.completeTask(index);
  }

  onUndoTask(index) {
    // let updatedTasks = this.state.tasks.slice();
    // updatedTasks[index].active = true;
    // updatedTasks[index].completed = false;
    // this.setState({
    //   tasks: updatedTasks
    // });
    this.props.undoTask(index);
  }

  onEditTask(index) {
    // let updatedTasks = this.state.tasks.slice();
    // updatedTasks[index].taskName = this.state.editValue;
    // this.setState({
    //   tasks: updatedTasks
    // });
    // this.setState({editValue: ''});
    this.props.editTask(index);
  }

  handleChange(e) {
    // this.setState({editValue: e.target.value});    
    this.props.handleChange(e.target.value);
  }

  render() {
    const tasks = this.props.tasks; 
    let count = 0;
    for (var i = 0; i < tasks.length; i ++) {
      if (!tasks[i].completed) {
        count++;
      }
    }

    return (
      <div>
        <h1 className="Body-title">Your tasks</h1>
       <Statusbar count={count}/>

        <div className="Task-section">
    
          {this.props.tasks.map((task, index) => 
            <Task task= {task} key={index} onComplete={() => this.onCompleteTask(index)} onUndo={() => this.onUndoTask(index)} onEdit={() => this.onEditTask(index)} handleChange={this.handleChange} editValue={this.state.editValue}/>
          )}

          <TaskAdder onTaskAdded={this.onTaskAdded} />
        </div>
        
      </div>
    )
  }
}

const mapStateToProps = state => ({
  tasks: state.tasks.items
}); 

export default connect(mapStateToProps, { addTask, editTask, handleChange, completeTask, undoTask })(Dashboard);
