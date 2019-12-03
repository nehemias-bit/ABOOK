import React from 'react';
import { withRouter } from 'react-router';
import { Route } from 'react-router-dom';
import './App.css';
import { registerUser } from './services/api-helper';
import { loginUser } from './services/api-helper';
import Register from './components/Register';
import Login from './components/Login';
import HomePage from './components/HomePage';
import LoggedInHeader from './components/LoggedInHeader';
import LoggedOutHeader from './components/LoggedOutHeader';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authFormData: {
        username: "",
        user_img: "",
        password:""
      },
      loginForm: {
        username: "",
        password: ""
      },
      currentUser: null
    }
  }

  handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState(prevState => ({
      authFormData: {
        ...prevState.authFormData,
        [name]: value
      }
    }))
  }

  handleRegister = async (e) => {
    e.preventDefault();
    const currentUser = await registerUser(this.state.authFormData)
    this.setState({
      currentUser
    })
  }

  loginSubmit = async (e) => {
    e.preventDefault();
    const currentUser = await loginUser(this.state.loginForm);
    this.setState({
      currentUser
    })
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

  handleLogout = () => {
    localStorage.removeItem("authToken");
    this.setState({
      currentUser: null
    })
  }

  render() {
    return (
      <div className="app">
        {
        this.state.currentUser ? <LoggedInHeader handleLogout={this.handleLogout}/> : <LoggedOutHeader/>
        }
        {
          this.state.currentUser ? <HomePage /> :
          <Route exact path="/" render={() => (<Login handleLoginChange={this.handleLoginChange} loginSubmit={this.loginSubmit}/>)}/>
        }
        <Route path="/register" render={() => (<Register authFormData={this.state.authFormdata} handleChange={this.handleChange} handleRegister={this.handleRegister} />)} />
      </div>
    );
  }
}

export default withRouter(App);
