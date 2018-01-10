import React from 'react';
import { connect, sendMessage } from '../socketHelpers';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: [],
      // users: [],
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    // TODO: CHANGE TO PRODUCTION SERVER location.origin.replace(/^http/, 'ws')
    let server = 'wss://slackk-casa.herokuapp.com/';

    // connect to the websocket server
    connect(server, this);
  }

  // sends the input field value as a json object to the server socket
  handleClick() {
    sendMessage(this.textInput.value);
  }

  render() {
    return (
      <div>
        {this.state.testText}
        <input
          type="text"
          ref={(input) => {
            this.textInput = input;
          }}
        />
        <button onClick={this.handleClick}>Send!</button>
        {JSON.stringify(this.state.messages)}
      </div>
    );
  }
}
