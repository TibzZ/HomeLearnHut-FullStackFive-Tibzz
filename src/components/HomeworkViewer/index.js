import React, { useState, useRef, useEffect } from "react";
import CanvasDraw from "react-canvas-draw";

import { uploadFile } from "react-s3";

import css from "./HomeworkViewer.module.css";

const {
  REACT_APP_BUCKETNAME,
  REACT_APP_REGION,
  REACT_APP_ACCESS_KEY_ID,
  REACT_APP_SECRET_ACCESS_KEY,
} = process.env;

const config = {
  bucketName: REACT_APP_BUCKETNAME,
  dirName: "placeholder",
  region: REACT_APP_REGION,
  accessKeyId: REACT_APP_ACCESS_KEY_ID,
  secretAccessKey: REACT_APP_SECRET_ACCESS_KEY,
};

function HomeworkViewer({
  mark,
  reject,
  clickToClassroom,
  homework,
  childHomework,
}) {
  const [customColor, setCustomColor] = useState("blue");

  // controlled component
  const [comment, setComment] = useState("");

  const refName = `canvasRef`;

  const saveableCanvas = useRef(refName);

  // load homework annotation if it is there
  useEffect(() => {
    if (childHomework.annotation != null) {
      saveableCanvas.current.loadSaveData(childHomework.annotation, false);
    }
  }, []);

  function handleClear() {
    saveableCanvas.current.clear();
  }

  function handleUndo() {
    saveableCanvas.current.undo();
  }

  const submitMarking = () => {
    mark({
      annotation: saveableCanvas.current.getSaveData(),
      comment: comment,
    });

    clickToClassroom();
  };

  const rejectHomework = () => {
    reject({ comment: comment });

    clickToClassroom();
  };

  // Use a PNG for images!

  return (
    <>
      <div className={css.resizePic}>
      <p className={css.childName}><img src={childHomework.avatar}/> </p>
      <p className={css.childName}>{childHomework.name}</p>
      <p>Homework: {homework.name}</p>
      
      </div>
   

      <div className={css.tools}>
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
        {/* <button onClick={handleSave} type="button" className={css.button}>
          Save
        </button> */}

        <br />
      </div>
      <div className={css.containCanvas}>
        <CanvasDraw
          className={css.myCanvas}
          ref={saveableCanvas}
          //ref2={loadableCanvas}
          brushColor={customColor}
          imgSrc={childHomework.individualHomeworkImage}
          brushRadius={1}
          lazyRadius={1}
          //img from database will need to be passed at this level
          canvasWidth={420}
          canvasHeight={594}
        />

        {/* saveData={localStorage.getItem(storageName)} */}
        <div>
          <button className={css.backButton} onClick={clickToClassroom}>
            Back
          </button>
          <div className={css.contain}>
            {/* <p className={css.childName}>{childHomework.name}</p> */}
            {/* <p className={css.childName}><img src={childHomework.avatar}/> </p> */}

            {/* <p>Homework: {homework.name}</p> */}
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
      </>
  );
}

export default HomeworkViewer;
