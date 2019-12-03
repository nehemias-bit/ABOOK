import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    }
  }

  render() {
    return (
      <div id="login-page">
        <form onSubmit={this.props.loginSubmit} id="login-form">
          <input type="text" name="username" placeholder="username..." value={this.props.loginForm} onChange={this.props.handleLoginChange}/>
          <input type="password" name="password" placeholder="password..." value={this.props.loginForm}  onChange={this.props.handleLoginChange}/>
            <button>Login</button>
          <Link to="/register">Register</Link>
        </form>
      </div>
    )
  }
}

export default Login;