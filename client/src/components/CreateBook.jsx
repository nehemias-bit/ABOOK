import React from 'react'

export default function CreateBook() {
  return (
    <div>
      <form>
        <input type="text" placeholder="Cover image" name="book_cover" value={props.bookForm}/>
        <input type="text" placeholder="Author's name" name="author_name" value={props.bookForm}/>
        <input type="text" placeholder="Book title" name="book_title" value={props.bookForm}/>
      </form>
    </div>
  )
}
