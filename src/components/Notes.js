import React from 'react';
import {MdDeleteForever} from 'react-icons/md'

function Notes({id, text, date, handleDeleteNote,darkMode}) {
  return (
    <div className={`note ${darkMode ? 'dark' : ''}`}>
      <div>{text}</div>
      <div className='note-footer'>
        <small>{date}</small>
        <MdDeleteForever className='delete' size='1.3em' onClick={()=>handleDeleteNote(id)}/>
      </div>
    </div>
  )
}

export default Notes