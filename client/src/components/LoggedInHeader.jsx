import React, {Component} from 'react'
import { Link } from 'react-router-dom';

export default class LoggedInHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMe: false
    }
  }

  showLogOutAndEdit = () => {
    this.setState({
      showMe: true
    })
  }

  hideLogOutAndEdit = () => {
    this.setState(prevState => ({
      showMe: prevState.showMe = false
    }))
  }

  render() {
    return (
      <div id="looged-in-header">  
        <div id="user-img-name-div">
          <div id="img-div">
          <img src={this.props.currentUser.user_img} alt="users profile image" id="user-img" onClick={() => this.hideLogOutAndEdit()}/>
          </div>
          <div>
          <p onClick={() => this.showLogOutAndEdit()}>{this.props.currentUser.username}</p>
          </div>
        </div> 
        {
          this.state.showMe ?
        <div id="logout-edit-user">
          <Link to="/login"><button onClick={this.props.handleLogout}>Logout</button></Link>
          <Link to={`users/${this.props.currentUser.id}`}>Edit Profile</Link>    
        </div> : null
        }
      </div>
    )
  }
}
