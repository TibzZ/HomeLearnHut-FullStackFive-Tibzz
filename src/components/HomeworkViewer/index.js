import React, { useState, useRef } from "react";
import CanvasDraw from "react-canvas-draw";
//import logo from "./logo.png";

import { uploadFile } from "react-s3";

// import { children } from "../../libs/children";
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
  clickToClassroom,
  homework,
  childHomework,
  name,
  avatar,
}) {
  const [selectedFile, setSelectedFile] = useState();

  const [customColor, setCustomColor] = useState("blue");
  console.log(customColor);

  const storageName = `canvasFile`;
  const refName = `canvasRef`

  const saveableCanvas = useRef(refName);

  // load homework
  useEffect(() => {
    // loadSaveData(string reference of scribbles, false);
  }, []);



  function handleClear() {
    saveableCanvas.current.clear();
  }

  function handleUndo() {
    saveableCanvas.current.undo();
  }

  function handleSave() {
    localStorage.setItem(
      refName,
      saveableCanvas.current.getSaveData()
    );

    // a series of lines and strokes in a file...
    console.log(localStorage.getItem(`${homework.name}-${childHomework.name}`));

    let mylines = localStorage.getItem("dummy");
    console.log("dummy");
    console.log(mylines);

    let mylines2 = localStorage.getItem(`${homework.name}-${name}`);
    console.log("actual");
    console.log(mylines2);

    setSelectedFile(localStorage.getItem(`${homework.name}-${name}`));
    // "savedDrawing"
    uploadClick();

    // ???
    // setSelectedFile();
  }

  const uploadClick = () => {
    console.log("get back string of canvas scribbles");
    console.log(saveableCanvas.current.getSaveData())

    //     mark({
    //       name: name,
    //       avatar: avatar,
    //       individualHomeworkImage: `https://${config.bucketName}.s3.${config.region}.amazonaws.com/${config.dirName}/${selectedFile.name}`,
    //       homeworkMarked: true,
    //       comment: "",
    //     });


  };

  return (
    <body>
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
        <button onClick={handleSave} type="button" className={css.button}>
          Save
        </button>

        <br />
      </div>
      <div className={css.containCanvas}>
        <CanvasDraw
          className={css.myCanvas}
          ref={saveableCanvas}
          //ref2={loadableCanvas}
          brushColor={customColor}
          brushRadius={2}
          imgSrc={homework.image}
          //img from database will need to be passed at this level
          canvasWidth={400}
          canvasHeight={500}
          saveData={localStorage.getItem(storageName)}
        />
        <div>
          <button className={css.backButton} onClick={clickToClassroom}>
            Back
          </button>
          <div className={css.contain}>
            <p className={css.childName}>{childHomework.name}</p>
            <p>Homework: {homework.name}</p>
            Set: {homework.dateSet}
            <br />
            Due: {homework.dateSet}
            <br />

            <span>Comment:</span>
            <input></input>
          </div>
          <button className={css.myButton} onClick={uploadClick}>
            Mark
          </button>
          {/* // reject just goes back for now */}
          <button className={css.myButton} onClick={clickToClassroom}>
            Reject
          </button>
        </div>
      </div>
    </body>
  );
}

export default HomeworkViewer;
