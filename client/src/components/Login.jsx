import React from 'react';
import { Link } from 'react-router-dom';
import { randomQuote } from '../services/api-helper';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      quote: ""
    }
  }

  componentDidMount = async() => {
    const quote = await randomQuote();
    this.setState({
      quote
    })
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
        <h2 id="quote">{this.state.quote.quoteText}</h2>
        <h4 id="quote-author">-{this.state.quote.quoteAuthor}</h4>
      </div>
    )
  }
}

export default Login;