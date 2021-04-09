import React from "react";
import Student from "./Student";
import css from "../MyClassroom/MyClassroom.module.css";
import { useHistory, useParams } from "react-router-dom";

function MyClassroom({ homeworkTitle, children }) {
  const history = useHistory();
  const homeworkIndex = useParams();
  const navigateTo = (index) =>
    history.push(`/homeworkViewer/${homeworkIndex}/${index}`);
  const navigateBack = () => history.push("/");

  return (
    <>
      <h1 className={css.pageTitle}>My Classroom - {homeworkTitle}</h1>
      <div>
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
                index={index}
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
