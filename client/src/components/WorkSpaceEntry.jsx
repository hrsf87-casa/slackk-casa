import React, { Component } from 'react';
import { getMessage } from '../socketHelpers/index.js';

export default class WorkSpaceEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick(event) {
    this.props.handleFail();
    getMessage(event.target.id);
  }

  render() {
    let { workSpace } = this.props;
    return (
      <div className="workSpace-entry-container">
        <button
          className="workspace-link"
          name={workSpace.name}
          id={workSpace.id}
          href="#"
          onClick={event => this.handleClick(event)}
        >
          {workSpace.name}
        </button>
      </div>
    );
  }
}
