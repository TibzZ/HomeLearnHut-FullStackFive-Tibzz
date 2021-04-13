import React, { useState, useRef, useEffect } from "react";
import css from "./HomeworkViewer.module.css";
import { UseAppContext } from "../../appContext";
import * as actions from "../../libs/actions";
import { useHistory } from "react-router-dom";
import CanvasTools from "./CanvasTools";
import BackButton from "../BackButton";

function HomeworkViewer() {
  const [comment, setComment] = useState("");
  const { state, dispatch } = UseAppContext();
  const saveableCanvas = useRef(`canvasRef`);
  const history = useHistory();
  const navigateBack = () => history.push("/myClassroom");

  let homework = state.homework[state.homeworkIndex];
  let childHomework =
    state.homework[state.homeworkIndex].children[state.childIndex];
  console.log(`what is this ${childHomework}`);

  //load homework annotation if it is there
  useEffect(() => {
    if (childHomework.annotation != null) {
      saveableCanvas.current.loadSaveData(childHomework.annotation, false);
      setComment(childHomework.comment);
    }
  }, []);

  function mark(payload) {
    dispatch({ type: actions.MARK, payload: payload });
  }

  function reject(payload) {
    dispatch({ type: actions.REJECT, payload: payload });
  }

  const submitMarking = () => {
    mark({
      annotation: saveableCanvas.current.getSaveData(),
      comment: comment,
    });
    navigateBack();
  };

  const rejectHomework = () => {
    reject({ comment: comment });
    navigateBack();
  };

  // Use a PNG for images!
  return (
    <div className={css.allOfViewer}>
      <div className={css.avatarContain}>
        <div className={css.resizePic}>
          <p className={css.childName}>{childHomework.name}</p>
          <p className={css.childName}>
            <img src={childHomework.avatar} alt="avatar" />{" "}
          </p>
          <p>Homework: {homework.name}</p>
        </div>
      </div>
      <div className={css.canvasAndColors}>
        <CanvasTools
          childHomework={childHomework}
          saveableCanvas={saveableCanvas}
        />
        <div>
          <BackButton navigateBack={navigateBack} />
          <div className={css.contain}>
            Set: {homework.dateSet}
            <br />
            Due: {homework.dateDue}
            <br />
            <span>Comment: </span>
            <input
              value={comment}
              onChange={(event) => setComment(event.target.value)}
            ></input>
          </div>
          <button className={css.myButton} onClick={submitMarking}>
            Mark
          </button>
          <button className={css.myButton} onClick={rejectHomework}>
            Reject
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomeworkViewer;
