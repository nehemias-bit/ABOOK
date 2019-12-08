import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LoggedInHeader from "./LoggedInHeader";
import ReactDOM from 'react-dom';


export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  componentDidMount = () => {
    let mainPageBooks = this.refs.mainPageBooks;
    let childrenCount = this.refs.mainPageBooks.children.length;
    let countByClass = ReactDOM.findDOMNode(mainPageBooks).getElementsByClassName('main-page-books').length;
    // console.log(countByClass)
    console.log(childrenCount)
  }




  render() {
    return (
      <>
        <div>
          <LoggedInHeader handleLogout={this.props.handleLogout} currentUser={this.props.currentUser} /> 
          <div id="add-book-div">
            <h1 id="next-books">Next Books<span>...</span></h1>
            <Link to={`/add-book/${this.props.currentUser.id}`}><button>Add Book</button></Link>
          </div>  
       </div>
        <div ref="mainPageBooks" className="main-page-books">
          { this.props.newBook &&
            this.props.newBook.map(each => (
              <div key={each.id} id="cover-author-title-div">
                <Link to={`/books/${each.id}`}><img src={each.book_cover} alt="book cover" id="main-page-book-cover" /></Link>
                <div id="book-author-title-main-page">
                <p id="main-authors-name">{each.author_name}:</p>
                <p>{each.book_title}</p>
                </div>
              </div>  
            ))
          }

          {
            this.childrenCount <= 10 ?
            this.props.newBook.map(each => (
              <div key={each.id} id="cover-author-title-div">
                <Link to={`/books/${each.id}`}><img src={each.book_cover} alt="book cover" id="main-page-book-cover" /></Link>
                <div id="book-author-title-main-page">
                <p id="main-authors-name">{each.author_name}:</p>
                <p>{each.book_title}</p>
                </div>
              </div>  
            )) : null
          }
          
       </div>
      </>
    )
  }
}
