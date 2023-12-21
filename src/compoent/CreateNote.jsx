import React, { useState } from 'react';

import { useNoteContext } from '../customHook/useNoteContext';


const CreateNote = () => {
  const { addNote } = useNoteContext();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [selectedColor, setSelectedColor] = useState('#ffffff');
  

  const handleAddNote = () => {
    if (title.trim() !== '' || content.trim() !== '') {
      addNote({
        id: Date.now(),
        title,
        content,
        color: selectedColor,
      });
      setTitle('');
      setContent('')
    }

  };

 

  return (
    <div className="take-note">
      <div className="create-note" style={{ backgroundColor: selectedColor }}>
        <h2>Create Note</h2>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Take a note..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <div>
          <button onClick={handleAddNote} className="btn">addnote</button>
         
        </div>

        
      </div>
    </div>
  );
};

export default CreateNote;
