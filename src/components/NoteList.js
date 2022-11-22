import React from 'react';
import Notes from './Notes.js'
import AddNote from './AddNote.js';

function NoteList({notes, handleAddNote, handleDeleteNote, darkMode}) {
 
  return (
    <div className='notelist'>
      {
        notes.map((note) => {
          return <Notes 
            key={note.id}
            id = {note.id}
            text = {note.text}
            date = {note.date}
            handleDeleteNote = {handleDeleteNote}
            darkMode = {darkMode}
          />
        })
      }
      <AddNote 
        handleAddNote = {handleAddNote}
        darkMode = {darkMode}
      />

    </div>
  )
}

export default NoteList