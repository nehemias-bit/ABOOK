import React from 'react'
import LoggedInHeader from './LoggedInHeader';

export default function CreateBook(props) {
  return (
    <div>
      <LoggedInHeader handleLogout={props.handleLogout} currentUser={props.currentUser}/> 
      {
        props.bookForm && props.currentUser &&

        <form onSubmit={props.bookCreateSubmit}>
          <input type="text" placeholder="Cover image" name="book_cover" value={props.bookForm.book_cover} onChange={props.handleBookCreateChange} />
          <input type="text" placeholder="Author's name" name="author_name" value={props.bookForm.author_name} onChange={props.handleBookCreateChange} />
          <input type="text" placeholder="Book title" name="book_title" value={props.bookForm.book_title} onChange={props.handleBookCreateChange} />
          {/* <input type="text" placeholder="user id" name="user_id" value={props.bookForm.user_id} onLoad={props.bookFormUserId} /> */}
          <button>Add it</button>
        </form>
      }
    </div>
  )
}
