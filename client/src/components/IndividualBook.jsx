import React, { Component } from 'react';
import LoggedInHeader from './LoggedInHeader';
import { Link } from 'react-router-dom';



export default class IndividualBook extends Component {
  debugger
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  async componentDidMount() {
   await this.props.getCurrentBook(this.props.id);
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
          <Link to={`/books/${this.props.id}/add-note`}><button>Add</button></Link>
      </div>
         </>
        }
      </>  
    )
  }
}
