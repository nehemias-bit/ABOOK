import React from 'react'

export default function CreateNotes(props) {
  return (
    <div>
      <form onSubmit={props.createNotesSubmit}>
        <textarea name="note" value={props.noteForm.note} onChange={props.handleNoteCreateChange}></textarea>
        <button>Add notes</button>
      </form>
    </div>
  )
}
