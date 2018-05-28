import React, { Component } from 'react'
import { Card, CardTitle, CardText } from 'reactstrap';

class Statusbar extends Component {
  render() {
    return (
      <div className="Status-bar">
        <div id={this.props.count === 0 ? "complete" : "incomplete"}>
            <Card body inverse>
                <CardTitle> {this.props.count === 0 ? "All tasks completed" : "Complete all tasks"}</CardTitle>
                <CardText>{this.props.count === 0 ? "Well done!" : "You have " +  this.props.count + " active tasks"}</CardText>
            </Card>
        </div>
      </div>
    )
  }
}

export default Statusbar;
