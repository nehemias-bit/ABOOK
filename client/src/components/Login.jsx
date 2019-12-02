import React from 'react';
import { Link } from 'react-router-dom';
import { loginUser } from '../services/api-helper';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginForm: {
        username: "",
        password: ""
      },
      currentUser: null
    }
  }

  handleLoginChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState(prevState =>({
      loginForm: {
        ...prevState.loginForm,
        [name]: value
      }
    }))
  }

  loginSubmit = async (e) => {
    e.preventDefault();
    const currentUser = await loginUser(this.state.loginForm);
    this.setState({
      currentUser
    })
  }

  render() {
    return (
      <div>
        <form>
          <input type="text" name="username" placeholder="username..." value={this.state.loginForm.username} onChange={this.handleLoginChange}/>
          <input type="password" name="password" placeholder="password..." value={this.state.loginForm.password}  onChange={this.handleLoginChange}/>
          <Link to="/home-page"><button>Login</button></Link>
          <Link to="/register">Register</Link>
        </form>
      </div>
    )
  }
}

export default Login;