import React from "react";
import css from "../MyClassroom.module.css";
import homework from "../../HomeworkViewer/CanvasTool/homework.png";

function Student({ handleClick, name, avatar, age = 5 }) {
  return (
    <div className={css.flipcard}>
      <div className={css.flipcardinner}>
        <div className={css.flipcardfront}>
          <p>Name:{name} </p>
          <p>Age: {age}</p>
          <button onClick={handleClick}>
            <img src={avatar} alt="avatar"></img>
          </button>
          <input type="checkbox"></input>
        </div>
        <div className={css.flipcardback}>
        <button onClick={handleClick}><img src={homework} alt="homeworkimg"></img></button>
        </div>
      </div>
    </div>
  );
}

export default Student;
