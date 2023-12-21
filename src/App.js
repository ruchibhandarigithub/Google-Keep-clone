
import './App.css';
import ColorPicker from './compoent/ColorPicker';
import CreateNote from './compoent/CreateNote';

import Header from './compoent/Header';
import NoteList from './compoent/NoteList';
import { NoteProvider } from './context/NoteProvider';

function App() {
  return (
    <NoteProvider>
    <div>
       <Header />
       <CreateNote />
       <NoteList />
       {/* <ColorPicker /> */}
   </div>
    </NoteProvider>
   
  );
}

export default App;
