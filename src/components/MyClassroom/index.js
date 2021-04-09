import React from "react";
import Student from "./Student";
import css from "../MyClassroom/MyClassroom.module.css";
import { useHistory } from "react-router-dom";

function MyClassroom({ homeworkTitle, children }) {
  const history = useHistory();
  console.log(`My classroom history is ${history}`);
  const navigateTo = () => history.push('/homeworkViewer');
  const navigateBack = () => history.push('/');

  return (
    <>
      <h1 className={css.pageTitle}>My Classroom - {homeworkTitle}</h1>
      <div className={css.childContain}>
        <ul className={css.myClassroom}>
          {children.map((child, index) => [
            <li
              className={
                child.individualHomeworkImage !== null
                  ? css.listElement
                  : css.listElementDisabled
              }
              title={
                child.individualHomeworkImage !== null
                  ? ""
                  : "No work submitted"
              }
            >
              <Student
                key={index}
                handleClick={navigateTo}
                name={child.name}
                avatar={child.avatar}
                hasSubmitted={child.individualHomeworkImage !== null} // added prop for tickbox functionality
                isMarked={child.annotation !== null}
              />
            </li>,
          ])}
        </ul>
        <br />
      </div>
      <button className={css.goBack} onClick={navigateBack}>
        Back
      </button>
    </>
  );
}

export default MyClassroom;
