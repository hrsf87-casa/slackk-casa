import React from 'react';
import { Redirect } from 'react-router-dom';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      loginSuccess: false,
    };
  }

  signUp() {
    let { username, password } = this.state;
    fetch('/signup', {
      method: 'POST',
      body: { username, password },
      headers: { 'content-type': 'application/json' },
    })
      .then(resp => (resp.status === 200 ? this.setState({ loginSuccess: true }) : console.log('nah')))
      .catch(console.error);
  }

  handleOnChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleKeyPress(event) {
    return event.key === 'Enter' ? this.signUp() : undefined;
  }

  render() {
    return (
      <div>
        {this.state.loginSuccess ? (
          <Redirect
            to={{
              pathname: '/messages',
              state: { username: this.state.username, password: this.state.password },
            }}
          />
        ) : (
          <div className="nav">
            User:
            <input
              type="text"
              name="username"
              className="username-input"
              onChange={e => this.handleOnChange(e)}
              onKeyPress={e => this.handleKeyPress(e)}
            />
            Password:
            <input
              type="text"
              name="password"
              className="password-input"
              onChange={e => this.handleOnChange(e)}
              onKeyPress={e => this.handleKeyPress(e)}
            />
            <button onClick={() => this.onClick()}>Log in!</button>
          </div>
        )}
      </div>
    );
  }
}
