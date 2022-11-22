import React, {useState} from 'react'

function AddNote({handleAddNote,darkMode}) {
  const [noteText, setNoteText] = useState('')

  const handleChange = (event) => {
    setNoteText(event.target.value)
  }

  const handleSaveText = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText)
      setNoteText('')
    }
    
  }

  const maxLength = 200

  return (
    <div className={`note new--note ${darkMode ? "dark" : ""}`}>
      <textarea 
        rows='8'
        cols='10'
        value={noteText}
        onChange={handleChange}
        autoFocus
        maxLength = '200'
      />
      <div className='note-footer'>
        <small>{maxLength - noteText.length} Remaining</small>
        <button className='btn' onClick={handleSaveText}>Save</button>
      </div>
    </div>
  )
}

export default AddNote