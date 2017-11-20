import React, { Component } from 'react';
import { connect } from 'react-redux';
import loginForm from "./loginForm";
import loginPage from "./loginPage";
import index from "./index.css";

class App extends Component {
  
  render() {
    return (
      <div className="App">
        {this.props.loggedIn}
            <LoginPage /> :
            <LoginForm />
        }        
      </div>
    );
  }

}

  function mapStateToProps(state) {
      return {
        loggedIn: state.loggedIn
      };
    }

export default connect(mapStateToProps)(App);