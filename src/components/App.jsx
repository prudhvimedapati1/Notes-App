import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes,addNotes]=React.useState([]);
  function addNote(note){
    addNotes((prevValue)=>{
      return [...prevValue,note]
    });
  }
 function onDelete(id){
    addNotes((prevNotes)=>{
      return (
        notes.filter((note,index)=>{
          return id!==index;
        })
      )
    })
  }
  
  
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem,index)=>
         <Note key={index} id={index} title={noteItem.title} content={noteItem.content} onDel={onDelete}/>)
         }
      <Footer />
    </div>
  );
}

export default App;
