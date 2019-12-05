import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import  LoggedInHeader from "./LoggedInHeader"

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }




  render() {
    return (
      <>
        <div>
        <LoggedInHeader handleLogout={this.props.handleLogout} /> 
         <h1>Next Books</h1>
         <Link to={`/add-book/${this.props.currentUser.id}`}><button>Add Book</button></Link>
       </div>
        <div>
          {
            this.props.newBook.map(each => (
              <div key={each.id}>
                <Link to={`/books/${each.id}`}><img src={each.book_cover} alt="book cover" /></Link>
                <h3>{each.author_name}</h3>
              </div>  
            ))
          }
          
       </div>
      </>
    )
  }
}
