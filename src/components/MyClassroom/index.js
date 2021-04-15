import * as actions from "../../libs/actions";
import React from "react";
import Student from "./Student";
import css from "../MyClassroom/MyClassroom.module.css";
import { useHistory } from "react-router-dom";
import { UseAppContext } from "../../appContext";
import BackButton from "../BackButton";

function MyClassroom() {
  const history = useHistory();

  function goToHomework(index) {
    dispatch({ type: actions.CHILD_CHANGE, payload: index });
    history.push(`/homeworkViewer`);
  }

  const navigateBack = () => history.push("/");
  const { state, dispatch } = UseAppContext();

  let children = state.homework[state.homeworkIndex].children;
  let homeworkTitle = state.homework[state.homeworkIndex].name;

  return (
    <>
      <h1 className={css.pageTitle}>My Classroom - {homeworkTitle}</h1>
      <div>
        <ul className={css.myClassroom}>
          {children.map((child, index) => [
            <li key={index}
              className={
                child.image !== null ? css.listElement : css.listElementDisabled
              }
              title={child.image !== null ? "" : "No work submitted"}
            >
              <Student
                index={index}
                handleClick={goToHomework}
                name={child.name}
                avatar={child.avatar}
                hasSubmitted={child.image !== null} // added prop for tickbox functionality
                isMarked={child.annotation !== null}
              />
            </li>,
          ])}
        </ul>
        <br />
      </div>
      <BackButton navigateBack={navigateBack} />
    </>
  );
}

export default MyClassroom;
