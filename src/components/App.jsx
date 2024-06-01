import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import DeleteIcon from '@mui/icons-material/Delete';


function App() {
  const [data,setData] = React.useState(null);
  const [notes, setNotes] = useState([]); 

  function addNote(note){
    fetch('http://localhost:3000/Notedown/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(note)
    })
    .then(response => response.json())
    .then(data => {
      setNotes(prevNotes => [...prevNotes, data]);
    })
    .catch(error => console.error('Error:', error));
  }

  async function deleteNote(id){
    await fetch(`http://localhost:3000/Notedown/delete/${id}`, {
      method:'DELETE'
    });
    //setNotes(notes.filter(note=>note.id!==id));

  } 
  
  React.useEffect(() => {
    const intervalId = setInterval(()=>{
      fetch('http://localhost:3000/Notedown/notes')
       .then(res => res.json())
       .then(data => setNotes(data));
    },500);
    return () => clearInterval(intervalId);
  }, []);
  

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote}/>
      {notes.map((note,index)=>

      <Note title={note.title}  
      key={index} 
      id={index} 
      content={note.ncontent} 
      onDelete={()=>deleteNote(note.id)} />
      
      )}
      <Footer />
    </div>
  );
}

export default App;
