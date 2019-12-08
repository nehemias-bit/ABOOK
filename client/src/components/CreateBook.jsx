import React from 'react'
import LoggedInHeader from './LoggedInHeader';

export default function CreateBook(props) {
  return (
    <div id="create-book-page">
      <LoggedInHeader handleLogout={props.handleLogout} currentUser={props.currentUser}/> 
      {
        props.bookForm && props.currentUser &&

        <form onSubmit={props.bookCreateSubmit} id="create-book-form">
          <input type="text" placeholder="Cover image" name="book_cover" value={props.bookForm.book_cover} onChange={props.handleBookCreateChange} />
          <input type="text" placeholder="Author's name" name="author_name" value={props.bookForm.author_name} onChange={props.handleBookCreateChange} />
          <input type="text" placeholder="Book title" name="book_title" value={props.bookForm.book_title} onChange={props.handleBookCreateChange} />
          <button>Add it</button>
        </form>
      }
    </div>
  )
}
