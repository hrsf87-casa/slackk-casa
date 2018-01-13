import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { getWorkSpaceMessagesFromServer } from '../socketHelpers/index.js';

export default class WorkSpaceEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick(event) {
    let { handleFail, changeCurrentWorkSpace, workSpace } = this.props;
    handleFail();
    getWorkSpaceMessagesFromServer(workSpace.id);
    changeCurrentWorkSpace(workSpace.id, workSpace.name);
  }

  render() {
    let { workSpace } = this.props;
    return (
      <div className="workSpace-entry-container">
        <h5 className="workSpace-name" onClick={event => this.handleClick(event)}>
          {' '}
          # {workSpace.name}{' '}
        </h5>
      </div>
    );
  }
}
