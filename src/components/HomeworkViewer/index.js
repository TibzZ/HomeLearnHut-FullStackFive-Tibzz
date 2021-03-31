/*
Views a piece of homework for an individual student.
This is accessed through clicking on a student within the "MyClassroom" component
*/

import CanvasTool from "./CanvasTool";
import css from "../HomeworkViewer/HomeworkViewer.module.css";
//import logo from "./CanvasTool/logo.png";
import { ReactComponent as ChevronIcon } from "./chevron.svg";

function HomeworkViewer({ clickToClassroom, childHomework, homeworkTitle, homework }) {


  return (
    <>
      <CanvasTool homeworkImage={homework.image} />
      <button className={css.backButton} onClick={clickToClassroom}>
        {/* <ChevronIcon className={css.icon}/> */}
        Back
      </button>
      <br />
      {childHomework.name}
      <br />
       Homework: {homework.name}
      <br />
      set: {childHomework.dateSet}
      <br />
      due: {childHomework.dateSet}
      <br />
      {/* submitted: = {submissionDate} */}
      <br />
      <br />
      {/* CSS test HomeworkViewer module only: */}
      {/* <p className={css.Test}> test Css</p> */}
      {/* <img
        src={logo}
        alt=""
      /> */}
      <br />
      Homework annotation controls
      <br />
      Comment
      <input></input>
      <br />
      <button className={css.myButton}>Accept</button>
      <button className={css.myButton}>Reject</button>
      <br />
    </>
  );
}

export default HomeworkViewer;
