import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Home">
        <Link to="/Signup"><button>Signup</button></Link>
      </div>
    );
  }
};


//about has two buttons:
//Login and Signup
