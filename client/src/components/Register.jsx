import React from 'react';
import { Link } from 'react-router-dom';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    }
  }

  render() {
    const username = this.props.authFormdata;
    const user_img = this.props.authFormdata;
    const password = this.props.authFormdata;
    return (
      <div>
        <form onSubmit={this.props.handleRegister}>
          <input type="text" name="username" placeholder="User name..." value={username} onChange={this.props.handleChange}/>
          <input type="text" name="user_img" placeholder="Profile picture..." value={user_img} onChange={this.props.handleChange}/>
          <input type="password" name="password" placeholder="Password(atleast 6 characters)..." value={password} onChange={this.props.handleChange}/>
          <Link to="/home-page"><button>Register</button></Link>
        </form>
      </div>
    )
    } 
}

export default Register;