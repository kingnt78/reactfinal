import React, { Component } from 'react';
import { connect } from 'react-redux';

class LoginPage extends Component {

  render() {
    return (
      <div className="LoginPage">
        <h1>Hello there, {this.props.user.name}!</h1>
        <p>username: {this.props.user.username}</p>
        <p>password: {this.props.user.password}</p>
        <p>name: {this.props.user.name}</p>
        <p>email: {this.props.user.email}</p>
        <p>img: {this.props.user.img}</p>
        <img src={this.props.user.img} />
        <p>location: {this.props.user.location}</p>
        <p>phone: {this.props.user.phone}</p>
      </div>
      );
  }

} //end component

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(LoginPage);
