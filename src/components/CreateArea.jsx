import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
function CreateArea(props) {
  const [block,setBlock]=React.useState({
    title:"",
    content:""
  })
  function handleChange(event){
    const {name,value}=event.target;
    setBlock(prevValue=>
      {return {
        ...prevValue,[name]:value
      };});
  }
  function onSubmit(event){
    event.preventDefault();
    props.onAdd(block);
    setBlock({title:"",content:""})
  }
  return (
    <div>
      <form className="create-note">
        <input onChange={handleChange} name="title" value={block.title} placeholder="Title" />
        <textarea onChange={handleChange} name="content" value={block.content} placeholder="Take a note..." rows="3" />
        <button onClick={onSubmit}><FontAwesomeIcon icon={solid('plus')} /></button>
      </form>
    </div>
  );
}

export default CreateArea;