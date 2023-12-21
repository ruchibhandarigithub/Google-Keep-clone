import React,{ useState } from 'react';
import ColorPicker from './ColorPicker';
import { useNoteContext } from '../customHook/useNoteContext';
import { MdOutlineColorLens } from 'react-icons/md';

import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
const Note = ({ note })=>{
   const { editNote,deleteNote } = useNoteContext();
   const [editing,setEditing] = useState(false);
   const [editedTitle,setEditedTitle]=useState(note.title);
   const [editedContent,setEditedContent]=useState(note.content);
   const [selectedColor,setSelectedColor]=useState(note.color || '#ffffff');
   const [colorPickerVisible, setColorPickerVisible] = useState(false);
   const handleEdit = ()=>{
      setEditing(true);
   };
   const handleSave =()=>{
    editNote({
        ...note,
        title:editedTitle,
        content:editedContent,
        color:selectedColor,
    });
    setEditing(false);
   };
   const handleDelete = ()=>{
    deleteNote(note.id);
   };
   const handleColorIconClick = () => {
    setColorPickerVisible(!colorPickerVisible);
  };
   return(
     <div >
        {
            editing ? (
                <div className='note' style={{backgroundColor:selectedColor,margin:"15px"}}>
                    <input type="text" value={editedTitle} onChange={(e)=> setEditedTitle(e.target.value)} />
                    <textarea value={editedContent} onChange={(e)=>setEditedContent(e.target.value)}/>
                     
                    <button onClick={handleSave} className='btn'>Save</button> 
                </div>
            ):(
                <div className='note' style={{backgroundColor:selectedColor,margin:"15px"}}>
                    <h2>{note.title}</h2>
                    <p style={{wordWrap:"break-word"}}>
                      {note.content}
                    </p>
                   
                   
                     <div className='icons'>   
                          <FiEdit onClick={handleEdit} style={{fontSize:"20px"}} />
                          <MdDelete onClick={handleDelete} style={{fontSize:"20px"}} />
                          <MdOutlineColorLens onClick={handleColorIconClick} style={{fontSize:"20px"}} />
                    </div>
                    {colorPickerVisible && (
                    <ColorPicker selectedColor={selectedColor} onSelectColor={setSelectedColor} />
        )}
                   
                </div>

            )
        }

     </div>
   );
}
export default Note;