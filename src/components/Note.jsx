import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'

function Note(props) {
  function handleClick(){
    props.onDel(props.id);
  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}><FontAwesomeIcon icon={solid('trash-can')} /></button>
    </div>
  );
}

export default Note;