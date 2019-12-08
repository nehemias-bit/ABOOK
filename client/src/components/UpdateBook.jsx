import React from 'react';
import LoggedInHeader from './LoggedInHeader';

export default function UpdateBook(props) {
  return (
    <div>
      {
        props.bookForm && props.currentUser &&

        <form id="update-book-form" onSubmit={props.bookUpdateSubmit}>
          <input type="text" placeholder="Cover image" name="book_cover" value={props.bookForm.book_cover} onChange={props.handleBookUpdateChange} />
          <input type="text" placeholder="Author's name" name="author_name" value={props.bookForm.author_name} onChange={props.handleBookUpdateChange} />
          <input type="text" placeholder="Book title" name="book_title" value={props.bookForm.book_title} onChange={props.handleBookUpdateChange} />
          <button>Update</button>
        </form>
      }
    </div>
  )
}
