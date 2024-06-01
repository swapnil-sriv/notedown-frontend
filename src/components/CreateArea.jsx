import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom'; 


function CreateArea(props) {
  const [estate,changeEstate] = useState(false);
  const [note, setNote] = useState({title:"",content:""});
  
  function handleChange(event){
    const {name, value} = event.target;
    setNote (prevNote => {return {...prevNote, [name]:value}});
  }

 async function handleSubmit(event){
  event.preventDefault();
  //console.log(note);
  props.onAdd(note);
  //setNote({title:"",content:""});
 }

  function expand(){
    changeEstate(true);
  }

  return (  
    <div>
    <form className="create-note" >
        
      {estate&& <input
          name="title"
          onChange={handleChange}
          
          value={note.title}
          placeholder="Title"
          
        />}
        <textarea name="content" onChange={handleChange} onClick={expand} placeholder="Take a note..." rows={estate?3:1} value={note.content} />
          <Zoom in={estate}>
        <Fab onClick={handleSubmit}> <AddIcon/> </Fab></Zoom> 
      </form> 
    </div>
  );
}

export default CreateArea;
