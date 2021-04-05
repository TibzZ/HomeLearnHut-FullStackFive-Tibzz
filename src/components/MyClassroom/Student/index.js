//import css from "../Student/Student.module.css";
import React from "react";
import css from "./Student.module.css";
import { TiInputChecked } from "react-icons/ti";

function Student({ handleClick, name, avatar, isHomeworkSubmitted }) {

  return (
    <>
      <button data-testid="clickavatar" className={css.profilebtn} style={{ backgroundImage: `url(${avatar})` }} onClick={handleClick}>

      </button>
      <p className={css.name}>{name}</p>
      <TiInputChecked style={ (isHomeworkSubmitted === null) ? {color: "lightgray"} : {color: "green" } } className={css.tickBox} />   
    
      
    
    </>
  );
}

export default Student;
