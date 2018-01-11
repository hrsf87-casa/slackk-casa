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
      messages: [],
      // users: [],
      query: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    let server = 'wss://slackk-casa.herokuapp.com';
    // let server = location.origin.replace(/^http/, 'ws');
    // connect to the websocket server
    connect(server, this);
  }

  handleChange(event) {
    this.setState({
      query: event.target.value,
    });
  }

  handleKeyPress(event) {
    // on key press enter send message and reset text box
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      sendMessage(this.state.query);
      // resets text box to blank string
      this.setState({
        query: '',
      });
    }
  }

  render() {
    let { messages, query } = this.state;
    return (
      <div>
        <NavBar />
        <Body messages={messages} />
        <div className="input-container">
          <FormGroup className="text-area">
            <Label for="exampleText">Text Area</Label>
            <Input
              value={query}
              type="textarea"
              name="text"
              id="exampleText"
              onChange={this.handleChange}
              onKeyPress={this.handleKeyPress}
            />
          </FormGroup>
        </div>
      </div>
    );
  }
}
