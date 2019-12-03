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
        <div id="login-form-div">
          <form onSubmit={this.props.loginSubmit} id="login-form">
          <h1>abook</h1>  
          <input type="text" name="username" placeholder="username..." value={this.props.loginForm} onChange={this.props.handleLoginChange}/>
          <input type="password" name="password" placeholder="password..." value={this.props.loginForm}  onChange={this.props.handleLoginChange}/>
            <button>Login</button>
            <Link to="/register">Register</Link>
            <img src="https://i.imgur.com/ChiijlH.png" alt="drawing of books"/>
          </form>
        </div>
        <h2>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo error molestias id quaerat eius excepturi incidunt. Illo alias ipsum, at, corrupti architecto aspernatur quos tempora sit vero saepe dolorem repellat."</h2>
      </div>
    )
  }
}

export default Login;