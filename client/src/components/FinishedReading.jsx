import React from 'react';
import LoggedInHeader from './LoggedInHeader';
import { Link } from 'react-router-dom';

export default function FinishedReading(props) {
  return (
    <div>
      {
        props.currentUser &&
      <>
        <LoggedInHeader handleLogout={props.handleLogout} currentUser={props.currentUser} />
        <div className="finished-page-books">
          {
            props.newBook.map(each => (
              each.finished === true ?
                <div id="finished-cover-author-title-div">
                  <Link to={`/books/${each.id}`}><img src={each.book_cover} /></Link>
                  <div id="finished-book-author-title-main-page">
                    <p>{each.author_name}:</p>
                    <p>{each.book_title}</p>  
                  </div>
                </div> : null
            ))
          }
        </div>
      </>
      }
    </div>
  )
}
