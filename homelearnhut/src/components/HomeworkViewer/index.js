/*
Views a piece of homework for an individual student.
This is accessed through clicking on a student within the "MyClassroom" component
*/

import CanvasTool from "./CanvasTool";
import css from "../HomeworkViewer/HomeworkViewer.module.css";
import logo from "./CanvasTool/logo.png";

function HomeworkViewer({ clickToClassroom }) {
  const name = "Lucas";
  const setDate = "Yesterday";
  const dueDate = "Tommorow";
  const submissionDate = "Next week";
  const homeworkTitle = "Maths - basic number games";

  return (
    <>
      <CanvasTool />
      {name}
      <br />
      Homework: {homeworkTitle}
      <br />
      set: {setDate}
      <br />
      due: {dueDate}
      <br />
      submitted: = {submissionDate}
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
      <button>Accept</button>
      <button>Reject</button>
      <br />
      <button onClick={clickToClassroom}>Back</button>
    </>
  );
}

export default HomeworkViewer;
