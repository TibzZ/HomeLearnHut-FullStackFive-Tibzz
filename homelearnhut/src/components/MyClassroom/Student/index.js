//import css from "../Student/Student.module.css";
import React from "react";
import css from "./Student.module.css";
import homework from "../../HomeworkViewer/CanvasTool/homework.png";
import { TiInputChecked } from "react-icons/ti";


function Student({ handleClick, name, avatar }) {
  return (

    
           <>       
          <button className={css.profilebtn} onClick={handleClick}>
          </button>
          <p>Name:{name} </p>
          <TiInputChecked
            color="lightgrey"
            size="40px"
            style={{ marginTop: "-10px" }}
          />          
      
</>
        
  );
}

export default Student;
