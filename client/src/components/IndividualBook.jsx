import React, { Component } from 'react';
import LoggedInHeader from './LoggedInHeader';
import { getOneBook } from '../services/api-helper';



export default class IndividualBook extends Component {
  debugger
  constructor(props) {
    super(props);
    this.state = {
      currentBook: {}
    }
  }

  async componentDidMount() {
    const theBook = await getOneBook(this.props.id);
    this.setState({
      currentBook: theBook
    })
  }



  render() {
    const currentBook = this.state.currentBook;
    return (
      <>
        <LoggedInHeader handleLogout={this.props.handleLogout} />
        {
          this.props.bookForm &&
      <div>
          <img src={currentBook.book_cover} alt="book cover" />
          <form onSubmit={() => (this.props.updateBookContent(currentBook.id, this.props.bookForm))}>
          <textarea name="notes" value={this.props.bookForm.notes} onChange={this.props.handleBookCreateChange}></textarea>
          <button>Add notes</button>
          </form>
      <button onClick={() => (this.props.deleteTheBook(this.props.id))}>Delete </button>
      </div>
        }
      </>  
    )
  }
}
