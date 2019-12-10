import React from 'react'

export default function CreateNotes(props) {
  return (
    <div id="create-note-div">
      <form onSubmit={props.createNotesSubmit} id="create-note-form">
        <textarea name="note" value={props.noteForm.note} onChange={props.handleNoteCreateChange}></textarea>
        <button>add note</button>
      </form>
    </div>
  )
}
