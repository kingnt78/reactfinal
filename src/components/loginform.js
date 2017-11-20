import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions';

class LoginForm extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      username : "",
      password : ""
    };
  }

  render() {
    return (
      <div className="LoginForm">
         <form onSubmit={this.handleSubmit}>
            <input className="username" type="text" placeholder="Email" value={this.state.username} onChange={this.handleUsername} />
            <input className="password" type="password" placeholder="Password" value={this.state.password} onChange={this.handlePassword}/>
            <button className="login-btn" type="submit">Sign In</button>
        </form>
      </div>
    );
  }

  handleUsername = (event) => {
    this.setState({
      username: event.target.value
    });
  };

  handlePassword = (event) => {
    this.setState({
      password: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.login(
      this.state.username, 
      this.state.password
    )
  };

} //end component

const mapActionsToProps = {
  login
};

export default connect(null, mapActionsToProps)(LoginForm);
        