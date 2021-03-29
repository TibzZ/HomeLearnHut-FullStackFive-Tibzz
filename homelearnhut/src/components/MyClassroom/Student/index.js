//import css from "../Student/Student.module.css";
import React from "react";
import css from "../MyClassroom.module.css";
import homework from "../../HomeworkViewer/CanvasTool/homework.png";
import { TiInputChecked } from "react-icons/ti";

function Student({ handleClick, name, avatar }) {
  return (
    <div className={css.flipcard}>
     <div className={css.flipcardinner}>
        <div className={css.flipcardfront}>
        <>
          <button className={css.profilebtn} onClick={handleClick}>
            {/* <img style={{height:"100px"}} src={avatar} alt="avatar"></img> */}
          </button>
          <p>Name:{name} </p>
          <TiInputChecked
            color="lightgrey"
            size="40px"
            style={{ marginTop: "-10px" }}
          />
          </>
        </div>
        <div className={css.flipcardback}>
          <button onClick={handleClick}>
            <img src={homework} alt="homeworkimg"></img>
     </button>
        </div>
          </div>
     </div> 
  );
}

export default Student;
