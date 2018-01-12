import React from 'react';
import { connect, sendMessage } from '../socketHelpers';
import { Input } from 'reactstrap';
import NavBar from './NavBar.jsx';
import MessageList from './MessageList.jsx';
import Body from './Body.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      users: [],
      workSpaces: [],
      query: '',
      currentWorkSpaceId: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.getWorkSpaces = this.getWorkSpaces.bind(this);
    this.changeCurrentWorkSpace = this.changeCurrentWorkSpace.bind(this);
  }

  componentDidMount() {
    // let server = 'wss://slackk-casa.herokuapp.com';
    let server = location.origin.replace(/^http/, 'ws');

    // connect to the websocket server
    connect(server, this);
  }

  // changes the query state based on user input in text field
  handleChange(event) {
    this.setState({
      query: event.target.value,
    });
  }

  // sends message on enter key pressed and clears form
  // only when shift+enter pressed breaks to new line
  handleKeyPress(event) {
    // on key press enter send message and reset text box
    if (event.charCode === 13 && !event.shiftKey) {
      event.preventDefault();
      sendMessage({ username: this.props.location.state.username, text: this.state.query });
      // resets text box to blank string
      this.setState({
        query: '',
      });
    }
  }

  getWorkSpaces() {
    fetch('/workspaces', {
      method: 'GET',
    })
      .then((resp) => {
        this.setState({ workSpaces: resp.data });
      })
      .catch(console.error);
  }

  changeCurrentWorkSpace(id) {
    this.setState({ currentWorkSpaceId: id });
  }

  render() {
    let {
      messages, query, workSpaces, currentWorkSpaceId,
    } = this.state;
    return (
      <div className="app-container">
        <NavBar />
        <Body
          messages={messages}
          workSpaces={workSpaces}
          getWorkSpaces={this.getWorkSpaces}
          changeCurrentWorkSpace={this.changeCurrentWorkSpace}
          currentWorkSpaceId={currentWorkSpaceId}
        />
        <div className="input-container">
          {/* TODO: substitue main for current channel or DM user */}
          <Input
            value={query}
            className="message-input-box"
            type="textarea"
            name="text"
            placeholder="Message #main"
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
          />
        </div>
      </div>
    );
  }
}
