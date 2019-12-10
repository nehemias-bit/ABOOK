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
      <div id="logged-in-header">  
        <div id="user-img-name-div">
          {
            this.props.currentUser &&
          <>
          <Link to="/"><h1>abook</h1></Link>    
          <div id="img-div">
          <a href="#" id="img-a"><img src={this.props.currentUser.user_img} alt="users profile image" id="user-img"  onClick={() => this.hideLogOutAndEdit()}/></a>
          <a href="#" onClick={() => this.showLogOutAndEdit()} id="username"><p>{this.props.currentUser.username}</p></a>
          </div>
          </>
          }
        </div> 
        {
          this.state.showMe ?
        <div id="logout-edit-user">
          <Link to="/login"><button id="logout-button"onClick={this.props.handleLogout}>Logout</button></Link>
          <Link to={`users/${this.props.currentUser.id}`} onClick={() => this.showLogOutAndEdit()}>Profile Picture</Link>    
        </div> : null
        }
      </div>
    )
  }
}
