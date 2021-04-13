import React, { useState, useRef, useEffect } from "react";

import css from "./HomeworkViewer.module.css";
import { UseAppContext } from "../../appContext";
import * as actions from "../../libs/actions";
import { useHistory } from "react-router-dom";

function HomeworkViewer() {
  //const [customColor, setCustomColor] = useState("blue");
  const [comment, setComment] = useState("");
  //const refName = `canvasRef`;
  //const saveableCanvas = useRef(refName);
  const { state, dispatch } = UseAppContext();
  const history = useHistory();
  const navigateBack = () => history.push("/myClassroom");

  let homework = state.homework[state.homeworkIndex];
  let childHomework = state.homework[state.homeworkIndex].children[state.childIndex];
  console.log(`what is this ${childHomework}`);

  
  // load homework annotation if it is there
  useEffect(() => {
    if (childHomework.annotation != null) {
      saveableCanvas.current.loadSaveData(childHomework.annotation, false);
      setComment(childHomework.comment);
    }
  }, []);

  // function handleClear() {
  //   saveableCanvas.current.clear();
  // }

  // function handleUndo() {
  //   saveableCanvas.current.undo();
  // }

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
        {/* <div className={css.tools}>
          <div
            onClick={(e) => setCustomColor("#FF00FF")}
            className={css.colorField}
            style={{ backgroundColor: "magenta" }}
          ></div>
          <div
            onClick={(e) => setCustomColor("#66ff00")}
            className={css.colorField}
            style={{ backgroundColor: "rgb(75, 235, 65)" }}
          ></div>
          <input
            onChange={(e) => setCustomColor(e.target.value)}
            type="color"
            className={css.colorPicker}
          />
          <button onClick={handleUndo} type="button" className={css.button}>
            Undo
          </button>
          <button onClick={handleClear} type="button" className={css.button}>
            Clear
          </button>
          <br />
        </div> */}
        <div className={css.containCanvas}>
          {/* <CanvasDraw
            className={css.myCanvas}
            ref={saveableCanvas}
            //ref2={loadableCanvas}
            brushColor={customColor}
            imgSrc={childHomework.individualHomeworkImage}
            brushRadius={2}
            lazyRadius={1}
            //img from database will need to be passed at this level
            canvasWidth={530}
            canvasHeight={700}
          /> */}
          {console.log(childHomework.individualHomeworkImage)}

          {/* saveData={localStorage.getItem(storageName)} */}
          <div>
            <button className={css.backButton} onClick={navigateBack}>
              Back
            </button>
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
    </div>
  );
}

export default HomeworkViewer;
