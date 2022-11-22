import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import "./index.css";
import NoteList from "./components/NoteList";
import Search from "./components/Search";
import Header from "./components/Header";

function App() {
  const [notes, setNotes] = useState(
    !localStorage.getItem("react-notes")
      ? [
          {
            id: nanoid(),
            text: "This is a template note",
            date: "20/04/1990",
          },
          {
            id: nanoid(),
            text: "This is a template note",
            date: "06/09/2020",
          },
          
        ]
      : JSON.parse(localStorage.getItem("react-notes"))
  );

  const [searchText, setSearchText] = useState("");
  const [darkMode, setDarkMode] = useState(
    !localStorage.getItem ? false : JSON.parse(localStorage.getItem('darkMode')));

  useEffect(() => {
    localStorage.setItem("react-notes", JSON.stringify(notes));
  }, [notes]);

  useEffect(()=> {
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
  }, [darkMode]);

  const addNote = (text) => {
    let date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className={`container ${darkMode ? "dark" : ""}`}>
      <Header setDarkMode={setDarkMode} darkMode={darkMode} />
      <Search setSearchText={setSearchText} />
      <NoteList
        notes={notes.filter((note) =>
          note.text.toLowerCase().includes(searchText.toLowerCase())
        )}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
        darkMode={darkMode}
      />
    </div>
  );
}

export default App;
