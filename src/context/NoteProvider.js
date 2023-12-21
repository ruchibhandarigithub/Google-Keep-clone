import { useEffect, useState } from "react";
import NoteContext from "./NoteContext";

export const NoteProvider = ({ children }) => {
  // Load data from localStorage synchronously using a function
  const loadNotesFromLocalStorage = () => {
    const storedNotes = JSON.parse(localStorage.getItem("notes"));
    return storedNotes || [];
  };

  const [notes, setNotes] = useState(loadNotesFromLocalStorage);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (newNote) => {
    setNotes((prevNotes) => [newNote, ...prevNotes]);
  };

  const editNote = (editedNote) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) => (note.id === editedNote.id ? editedNote : note))
    );
  };

  const deleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <NoteContext.Provider
      value={{
        notes: filteredNotes,
        addNote,
        editNote,
        deleteNote,
        searchTerm,
        setSearchTerm,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};
