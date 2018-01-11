import React from 'react';
import { Redirect } from 'react-router-dom';

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      signupSuccess: false,
    };
  }

  signUp() {
    let { username, password } = this.state;
    fetch('/signup', {
      method: 'POST',
      body: { username, password },
      headers: { 'content-type': 'application/json' },
    })
      .then(resp => (resp.status === 200 ? this.setState({ signupSuccess: true }) : console.log('nah')))
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
        {this.state.signupSuccess ? (
          <Redirect
            to={{
              pathname: '/login',
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
            <button onClick={() => this.signUp()}>Sign Up</button>
          </div>
        )}
      </div>
    );
  }
}
