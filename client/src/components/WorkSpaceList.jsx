import React, { Component } from 'react';
import { Alert } from 'reactstrap';
import WorkSpaceEntry from './WorkSpaceEntry.jsx';

export default class WorkSpaceList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workSpaceQuery: '',
      createFail: false,
      createStatus: 'Failed to create workspace',
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleFail = this.handleFail.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  createWorkSpace() {
    let { getWorkSpaces } = this.props;
    let { workSpaceQuery, createFail } = this.state;
    this.setState({ createFail: false });
    fetch('/workspaces', {
      method: 'POST',
      body: JSON.stringify({ name: workSpaceQuery }),
      headers: { 'content-type': 'application/json' },
    })
      .then(resp =>
        (resp.status === 201 ? getWorkSpaces() : this.setState({ createFail: true })))
      .catch(console.error);
  }

  handleClick() {
    this.createWorkSpace();
  }

  handleFail() {
    this.setState({ createFail: false });
  }

  handleChange(event) {
    this.setState({ workSpaceQuery: event.target.value });
  }

  render() {
    let { changeCurrentWorkSpace } = this.props;
    let { createFail, createStatus } = this.state;
    return (
      <div>
        <h3> WorkSpaces </h3>
        {this.props.workSpaces.map(workSpace => (
          <WorkSpaceEntry
            workSpace={workSpace}
            handleFail={this.handleFail}
            key={workSpace.id}
            changeCurrentWorkSpace={changeCurrentWorkSpace}
          />
        ))}
        <input type="text" placeholder="workspace name.." onChange={this.handleChange} />
        <button onClick={this.handleClick}> + </button>
        <br />
        <br />
        {createFail ? <Alert color="danger"> {createStatus} </Alert> : undefined}
      </div>
    );
  }
}
