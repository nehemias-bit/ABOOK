import React from 'react';
import { withRouter } from 'react-router';
import { Route } from 'react-router-dom';
import './App.css';
import { registerUser } from './services/api-helper';
import Register from './components/Register';
import Login from './components/Login';
import HomePage from './components/HomePage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authFormData: {
        username: "",
        user_img: "",
        password:""
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

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (<Login />)}/>
        <Route path="/register" render={() => (<Register authFormData={this.state.authFormdata} handleChange={this.handleChange} handleRegister={this.handleRegister} />)} />
        <Route path="/home-page" render={() => (<HomePage />)}/>
      </div>
    );
  }
}

export default withRouter(App);
