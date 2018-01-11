import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'Guest',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  onClick() {
    console.log('test');
  }

  handleChange(event) {
    this.setState({
      username: event.target.value,
    });
    console.log(this.state.username);
  }


  render() {
    return (
      <div className="nav">
        User:
        <input type="text" className="username-input" onChange={this.handleChange} />
        Password:
        <input type="text" />
        <Link to={`/messages/${this.state.username}`}><button onClick={() => this.onClick()}>Log in!</button></Link>
      </div>
    );
  }
};

//maybe you need a switch case here so you can pass down the username?
//Login directs you to either sign up or to app.jsx
