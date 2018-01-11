import React from 'react';
import { connect, sendMessage } from '../socketHelpers';
import MessageList from './MessageList.jsx';
import { Button } from 'reactstrap';
import NavBar from './NavBar.jsx';
import Body from './Body.jsx';
import { Container, FormGroup, Label, Input } from 'reactstrap';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        {
          id: 1230,
          text: 'helllsoadfoasdfoaskdfkoasdhelllsoadfoasdfoaskdfkoashelllsoadfoasdfoaskdfkoas',
        },
        { id: 99912341, text: 'this is a message style me' },
        {
          id: 81230,
          text: 'helllsoadfoasdfoaskdfkoasdhelllsoadfoasdfoaskdfkoashelllsoadfoasdfoaskdfkoas',
        },
        { id: 712341555, text: 'this is a message style me' },
        {
          id: 61230,
          text: 'helllsoadfoasdfoaskdfkoasdhelllsoadfoasdfoaskdfkoashelllsoadfoasdfoaskdfkoas',
        },
        { id: 512341, text: 'this is a message style me' },
        {
          id: 14230,
          text: 'helllsoadfoasdfoaskdfkoasdhelllsoadfoasdfoaskdfkoashelllsoadfoasdfoaskdfkoas',
        },
        { id: 12375341, text: 'this is a message style me' },
        {
          id: 17542230,
          text: 'helllsoadfoasdfoaskdfkoasdhelllsoadfoasdfoaskdfkoashelllsoadfoasdfoaskdfkoas',
        },
        { id: 1277341, text: 'this is a message style me' },
        {
          id: 177777230,
          text: 'helllsoadfoasdfoaskdfkoasdhelllsoadfoasdfoaskdfkoashelllsoadfoasdfoaskdfkoas',
        },
        { id: 1999992341, text: 'this is a message style me' },
        {
          id: 1999230,
          text: 'helllsoadfoasdfoaskdfkoasdhelllsoadfoasdfoaskdfkoashelllsoadfoasdfoaskdfkoas',
        },
        { id: 1239941, text: 'this is a message style me' },
        {
          id: 123099,
          text: 'helllsoadfoasdfoaskdfkoasdhelllsoadfoasdfoaskdfkoashelllsoadfoasdfoaskdfkoas',
        },
        { id: 12999341, text: 'this is a message style me' },
        {
          id: 126630,
          text: 'helllsoadfoasdfoaskdfkoasdhelllsoadfoasdfoaskdfkoashelllsoadfoasdfoaskdfkoas',
        },
        { id: 12322241, text: 'this is a message style me' },
        {
          id: 1231344240,
          text: 'helllsoadfoasdfoaskdfkoasdhelllsoadfoasdfoaskdfkoashelllsoadfoasdfoaskdfkoas',
        },
        { id: 1236432141, text: 'this is a message style me' },
        {
          id: 1467230,
          text: 'helllsoadfoasdfoaskdfkoasdhelllsoadfoasdfoaskdfkoashelllsoadfoasdfoaskdfkoas',
        },
        { id: 1222341, text: 'this is a message style me' },
        {
          id: 123110,
          text: 'helllsoadfoasdfoaskdfkoasdhelllsoadfoasdfoaskdfkoashelllsoadfoasdfoaskdfkoas',
        },
        { id: 15422341, text: 'this is a message style me' },
        {
          id: 1321,
          text: 'helllsoadfoasdfoaskdfkoasdhelllsoadfoasdfoaskdfkoashelllsoadfoasdfoaskdfkoas',
        },
        { id: 123414124111, text: 'this is a message style me' },
        {
          id: 1230555124,
          text: 'helllsoadfoasdfoaskdfkoasdhelllsoadfoasdfoaskdfkoashelllsoadfoasdfoaskdfkoas',
        },
        { id: 123123441, text: 'this is a message style me' },
        {
          id: 1236210,
          text: 'helllsoadfoasdfoaskdfkoasdhelllsoadfoasdfoaskdfkoashelllsoadfoasdfoaskdfkoas',
        },
        { id: 1234199, text: 'this is a message style me' },
        {
          id: 123077,
          text: 'helllsoadfoasdfoaskdfkoasdhelllsoadfoasdfoaskdfkoashelllsoadfoasdfoaskdfkoas',
        },
        { id: 12341666, text: 'this is a message style me' },
        {
          id: 1230555,
          text: 'helllsoadfoasdfoaskdfkoasdhelllsoadfoasdfoaskdfkoashelllsoadfoasdfoaskdfkoas',
        },
        { id: 12341444, text: 'this is a message style me' },
        {
          id: 1230333,
          text: 'helllsoadfoasdfoaskdfkoasdhelllsoadfoasdfoaskdfkoashelllsoadfoasdfoaskdfkoas',
        },
        { id: 12341222, text: 'this is a message style me' },
        {
          id: 1230111,
          text: 'helllsoadfoasdfoaskdfkoasdhelllsoadfoasdfoaskdfkoashelllsoadfoasdfoaskdfkoas',
        },
        { id: 1231412412441, text: 'this is a message style me' },
        {
          id: 124575430,
          text: 'helllsoadfoasdfoaskdfkoasdhelllsoadfoasdfoaskdfkoashelllsoadfoasdfoaskdfkoas',
        },
        { id: 1234412341, text: 'this is a message style me' },
        {
          id: 1237540,
          text: 'helllsoadfoasdfoaskdfkoasdhelllsoadfoasdfoaskdfkoashelllsoadfoasdfoaskdfkoas',
        },
        { id: 12432341, text: 'this is a message style me' },
        {
          id: 1421230,
          text: 'helllsoadfoasdfoaskdfkoasdhelllsoadfoasdfoaskdfkoashelllsoadfoasdfoaskdfkoas',
        },
        { id: 412341, text: 'this is a message style me' },
        {
          id: 16230,
          text: 'helllsoadfoasdfoaskdfkoasdhelllsoadfoasdfoaskdfkoashelllsoadfoasdfoaskdfkoas',
        },
        { id: 712341, text: 'this is a message style me' },
        {
          id: 17230,
          text: 'helllsoadfoasdfoaskdfkoasdhelllsoadfoasdfoaskdfkoashelllsoadfoasdfoaskdfkoas',
        },
        { id: 182341, text: 'this is a message style me' },
        {
          id: 123990,
          text: 'helllsoadfoasdfoaskdfkoasdhelllsoadfoasdfoaskdfkoashelllsoadfoasdfoaskdfkoas',
        },
        { id: 12341, text: 'this is a message style me' },
        {
          id: 123011111,
          text: 'helllsoadfoasdfoaskdfkoasdhelllsoadfoasdfoaskdfkoashelllsoadfoasdfoaskdfkoas',
        },
        { id: 1234173411, text: 'this is a message style me' },
        {
          id: 1234112430,
          text: 'hellls131221331',
        },
        { id: 12341311123, text: 'this is a message style me' },
        { id: 1235441, text: 'this is a message style me2' },
        { id: 125461, text: 'this is a message style me3' },
        { id: 123941, text: 'this is a message style me4' },
        { id: 123141, text: 'this is a message style me5' },
        { id: 123431, text: 'this is a message style me6' },
        { id: 1234, text: 'this is a message style me7' },
        { id: 12, text: 'this is a message style me8' },
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
    console.log('username: ', this.props.location.state.username);
    console.log('password: ', this.props.location.state.password);
    // console.log('queryId param', this.props.match.params.username);
    //remove :username from url if you wish.
    sendMessage(this.state.query);
  }

  handleChange(event) {
    this.setState({
      query: event.target.value,
    });
    console.log(this.state.query);
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
