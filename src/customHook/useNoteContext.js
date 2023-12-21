import { useContext} from "react";
import NoteContext from "../context/NoteContext";
export const useNoteContext = ()=>{
    const context = useContext(NoteContext);
    if(!context){
        throw new Error('something went wrong');
    }
    return context;
}