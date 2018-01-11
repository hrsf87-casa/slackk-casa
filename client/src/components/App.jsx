import React from 'react';
import { connect, sendMessage } from '../socketHelpers';
import MessageList from './MessageList.jsx';
import { Button } from 'reactstrap';
import NavBar from './NavBar.jsx';
import Body from './Body.jsx';
import { Container, FormGroup, Label, Input } from 'reactstrap';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: [
        {
          id: 1230,
          text: 'helllsoadfoasdfoaskdfkoasdhelllsoadfoasdfoaskdfkoashelllsoadfoasdfoaskdfkoas',
        },
        { id: 12341, text: 'this is a message style me' },
        {
          id: 1230,
          text: 'helllsoadfoasdfoaskdfkoasdhelllsoadfoasdfoaskdfkoashelllsoadfoasdfoaskdfkoas',
        },
        { id: 12341, text: 'this is a message style me' },
        {
          id: 1230,
          text: 'helllsoadfoasdfoaskdfkoasdhelllsoadfoasdfoaskdfkoashelllsoadfoasdfoaskdfkoas',
        },
        { id: 12341, text: 'this is a message style me' },
        {
          id: 1230,
          text: 'helllsoadfoasdfoaskdfkoasdhelllsoadfoasdfoaskdfkoashelllsoadfoasdfoaskdfkoas',
        },
        { id: 12341, text: 'this is a message style me' },
        {
          id: 1230,
          text: 'helllsoadfoasdfoaskdfkoasdhelllsoadfoasdfoaskdfkoashelllsoadfoasdfoaskdfkoas',
        },
        { id: 12341, text: 'this is a message style me' },
        {
          id: 1230,
          text: 'helllsoadfoasdfoaskdfkoasdhelllsoadfoasdfoaskdfkoashelllsoadfoasdfoaskdfkoas',
        },
        { id: 12341, text: 'this is a message style me' },
        {
          id: 1230,
          text: 'helllsoadfoasdfoaskdfkoasdhelllsoadfoasdfoaskdfkoashelllsoadfoasdfoaskdfkoas',
        },
        { id: 12341, text: 'this is a message style me' },
        {
          id: 1230,
          text: 'helllsoadfoasdfoaskdfkoasdhelllsoadfoasdfoaskdfkoashelllsoadfoasdfoaskdfkoas',
        },
        { id: 12341, text: 'this is a message style me' },
        {
          id: 1230,
          text: 'helllsoadfoasdfoaskdfkoasdhelllsoadfoasdfoaskdfkoashelllsoadfoasdfoaskdfkoas',
        },
        { id: 12341, text: 'this is a message style me' },
        {
          id: 1230,
          text: 'helllsoadfoasdfoaskdfkoasdhelllsoadfoasdfoaskdfkoashelllsoadfoasdfoaskdfkoas',
        },
        { id: 12341, text: 'this is a message style me' },
        {
          id: 1230,
          text: 'helllsoadfoasdfoaskdfkoasdhelllsoadfoasdfoaskdfkoashelllsoadfoasdfoaskdfkoas',
        },
        { id: 12341, text: 'this is a message style me' },
        {
          id: 1230,
          text: 'helllsoadfoasdfoaskdfkoasdhelllsoadfoasdfoaskdfkoashelllsoadfoasdfoaskdfkoas',
        },
        { id: 12341, text: 'this is a message style me' },
        {
          id: 1230,
          text: 'helllsoadfoasdfoaskdfkoasdhelllsoadfoasdfoaskdfkoashelllsoadfoasdfoaskdfkoas',
        },
        { id: 12341, text: 'this is a message style me' },
        {
          id: 1230,
          text: 'helllsoadfoasdfoaskdfkoasdhelllsoadfoasdfoaskdfkoashelllsoadfoasdfoaskdfkoas',
        },
        { id: 12341, text: 'this is a message style me' },
        {
          id: 1230,
          text: 'helllsoadfoasdfoaskdfkoasdhelllsoadfoasdfoaskdfkoashelllsoadfoasdfoaskdfkoas',
        },
        { id: 12341, text: 'this is a message style me' },
        {
          id: 1230,
          text: 'helllsoadfoasdfoaskdfkoasdhelllsoadfoasdfoaskdfkoashelllsoadfoasdfoaskdfkoas',
        },
        { id: 12341, text: 'this is a message style me' },
        {
          id: 1230,
          text: 'helllsoadfoasdfoaskdfkoasdhelllsoadfoasdfoaskdfkoashelllsoadfoasdfoaskdfkoas',
        },
        { id: 12341, text: 'this is a message style me' },
        {
          id: 1230,
          text: 'helllsoadfoasdfoaskdfkoasdhelllsoadfoasdfoaskdfkoashelllsoadfoasdfoaskdfkoas',
        },
        { id: 12341, text: 'this is a message style me' },
        {
          id: 1230,
          text: 'helllsoadfoasdfoaskdfkoasdhelllsoadfoasdfoaskdfkoashelllsoadfoasdfoaskdfkoas',
        },
        { id: 12341, text: 'this is a message style me' },
        {
          id: 1230,
          text: 'helllsoadfoasdfoaskdfkoasdhelllsoadfoasdfoaskdfkoashelllsoadfoasdfoaskdfkoas',
        },
        { id: 12341, text: 'this is a message style me' },
        {
          id: 1230,
          text: 'helllsoadfoasdfoaskdfkoasdhelllsoadfoasdfoaskdfkoashelllsoadfoasdfoaskdfkoas',
        },
        { id: 12341, text: 'this is a message style me' },
        {
          id: 1230,
          text: 'helllsoadfoasdfoaskdfkoasdhelllsoadfoasdfoaskdfkoashelllsoadfoasdfoaskdfkoas',
        },
        { id: 12341, text: 'this is a message style me' },
        {
          id: 1230,
          text: 'helllsoadfoasdfoaskdfkoasdhelllsoadfoasdfoaskdfkoashelllsoadfoasdfoaskdfkoas',
        },
        { id: 12341, text: 'this is a message style me' },
        {
          id: 1230,
          text: 'helllsoadfoasdfoaskdfkoasdhelllsoadfoasdfoaskdfkoashelllsoadfoasdfoaskdfkoas',
        },
        { id: 12341, text: 'this is a message style me' },
        {
          id: 1230,
          text: 'helllsoadfoasdfoaskdfkoasdhelllsoadfoasdfoaskdfkoashelllsoadfoasdfoaskdfkoas',
        },
        { id: 12341, text: 'this is a message style me' },
        {
          id: 1230,
          text: 'helllsoadfoasdfoaskdfkoasdhelllsoadfoasdfoaskdfkoashelllsoadfoasdfoaskdfkoas',
        },
        { id: 12341, text: 'this is a message style me' },
        {
          id: 1230,
          text: 'hellls131221331',
        },
        { id: 12341, text: 'this is a message style me' },
        { id: 12341, text: 'this is a message style me2' },
        { id: 12341, text: 'this is a message style me3' },
        { id: 12341, text: 'this is a message style me4' },
        { id: 12341, text: 'this is a message style me5' },
        { id: 12341, text: 'this is a message style me6' },
        { id: 12341, text: 'this is a message style me7' },
        { id: 12341, text: 'this is a message style me8' },
      ],
      // users: [],
      query: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    // let server = location.origin.replace(/^http/, 'ws');
    let server = 'ws://127.0.0.1:3000';

    // connect to the websocket server
    connect(server, this);
  }

  // sends the input field value as a json object to the server socket
  handleClick() {
    sendMessage(this.state.query);
  }

  handleChange(event) {
    this.setState({
      query: event.target.value,
    });
  }

  render() {
    let { messages } = this.state;
    return (
      <div>
        {/* <Container fluid className="nav-container"> */}
        <NavBar />

        {/* </Container> */}

        <Body messages={messages} />
        <div className="input-container">

          <FormGroup className="text-area">
            <Label for="exampleText">Text Area</Label>
            <Input type="textarea" name="text" id="exampleText" />
          </FormGroup>

          {/* <input type="text" className="chat-input" onChange={this.handleChange} /> */}
        </div>
        <button className="chat-send-button" onClick={() => this.handleClick()}>
          Send!
        </button>
      </div>
    );
  }
}
