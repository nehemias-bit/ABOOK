import React, { Component } from 'react';
import LoggedInHeader from './LoggedInHeader';
import { getOneBook } from '../services/api-helper';
import { Link } from 'react-router-dom';



export default class IndividualBook extends Component {
  debugger
  constructor(props) {
    super(props);
    this.state = {
      currentBook: {}
    }
  }

  async componentDidMount() {
   const a = await this.props.getCurrentBook(this.props.id);
    console.log(this.props.currentBook)
    console.log(a)
  }



  render() {
    return (
      <>
        { this.props.currentBook &&
          <>
      <LoggedInHeader handleLogout={this.props.handleLogout} /> 
      <div>
      <img src={this.props.currentBook.book_cover} alt="book cover" />
          <button onClick={() => (this.props.deleteTheBook(this.props.id))}>Delete </button>
          <Link to={`/add-notes/${this.props.currentBook.id}`}><button>Add</button></Link>
      </div>
         </>
        }
      </>  
    )
  }
}
