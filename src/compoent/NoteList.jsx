import React from 'react';
import Note from './Note';
import { useNoteContext } from '../customHook/useNoteContext';

const NoteList = ()=>{
    const { notes } = useNoteContext();
    return (
        <div className='note-list'>
            {
                notes.map((note)=>(
                    <Note key={note.id} note={note} />
                ))
            }
        </div>
    )
}
export default NoteList;