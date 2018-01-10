import React from 'react';
import { connect, sendMessage } from '../socket_helpers/websocket_helpers';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: [],
      // users: [],
      ws: {},
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    // TODO: CHANGE TO PRODUCTION SERVER location.origin.replace(/^http/, 'wss')
    let server = 'wss://slackk-casa.herokuapp.com/';

    // connect to the websocket server
    connect(server, this);
  }

  // sends the input field value as a json object to the server socket
  handleClick() {
    let msg = {
      code: 200,
      message: 'sending message to server',
      method: 'POSTMESSAGE',
      data: {
        text: this.textInput.value,
      },
    };
    sendMessage(this.state.ws, JSON.stringify(msg));
  }


  render() {
    return (
      <div>
        {this.state.testText}
        <input type="text" ref={(input) => { this.textInput = input; }} />
        <button onClick={this.handleClick}>
          Send!
        </button>
        {JSON.stringify(this.state.messages)}
      </div>
    );
  }
}
