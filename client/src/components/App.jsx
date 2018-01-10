import React from 'react';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      connected: false,
      socket: '',
    };
    // connect to websocket server
    // this.socket = new WebSocket(location.origin.replace(/^http/, 'ws'));
    // this.socket = new WebSocket('ws://127.0.0.1:3000');
    // this.socket.onopen = () => {
    //   this.setState({
    //     connected: true,
    //   });
    // };
    // this.socket = new WebSocket('ws://10.8.72.210:3000');

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.socket = new WebSocket('ws://10.8.72.210:3000');
    this.socket.addEventListener('open', () => {
      const msg = 'hello server';
      this.socket.send(JSON.stringify(msg));
      this.setState({
        connected: true,
      });
    });
  }

  handleClick() {
    let { connected } = this.state;
    let msg = { message: this.textInput.value };
    if (connected) {
      this.socket.send(JSON.stringify(msg));
    } else {
      console.log('failed to send message');
    }
  }

  render() {
    return (
      <div>
        <input type="text" ref={(input) => { this.textInput = input; }} />
        <button onClick={this.handleClick}>
          Send!
        </button>
      </div>
    );
  }
}


// // connect to websocket server
// let socket = new WebSocket(location.origin.replace(/^http/, 'ws'));

// // event handler when client recieves a message from server
// socket.onmessage = (event) => {
//   document.getElementById("response").innerText = event.data;
//   console.log(event.data)
// };

// document.getElementById("send").onclick = (event) => {
//   // using websocket to send data to server
//   socket.send(JSON.stringify(document.getElementById("inputBox").value));
// };