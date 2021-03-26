import React, { useState, useRef } from "react";
import CanvasDraw from "react-canvas-draw";
import "./index.css";
import logo from "./logo.png";

function CanvasTool() {
  const [customColor, setCustomColor] = useState("blue");
  console.log(customColor);

  const saveableCanvas = useRef(null);
  //const loadableCanvas = useRef(null);

  function handleClear() {
    saveableCanvas.current.clear();
  }

  function handleUndo() {
    saveableCanvas.current.undo();
  }

  function handleSave() {
    localStorage.setItem("savedDrawing", saveableCanvas.current.getSaveData());
  }

  // function handleLoad() {
  //   loadableCanvas.current.loadSaveData(localStorage.getItem("savedDrawing"));
  // }

  return (
    <body>
      <div className="tools">
        <div
          onClick={(e) => setCustomColor("#FF00FF")}
          className="color-field"
          style={{ backgroundColor: "magenta" }}
        ></div>

        <div
          onClick={(e) => setCustomColor("#66ff00")}
          className="color-field"
          style={{ backgroundColor: "rgb(75, 235, 65)" }}
        ></div>

        <input
          onChange={(e) => setCustomColor(e.target.value)}
          type="color"
          className="color-picker"
        />
        <button onClick={handleUndo} type="button" className="button">
          Undo
        </button>
        <button onClick={handleClear} type="button" className="button">
          Clear
        </button>
        <button onClick={handleSave} type="button" className="button">
          Save
        </button>
        {/* <button
        type="button"
        className="button"
        onClick={() => {
            localStorage.getItem("savedDrawing");
        }}
      >
        Load Saved
      </button> */}

        <br />
      </div>
      <CanvasDraw
        className="myCanvas"
        ref={saveableCanvas}
        //ref2={loadableCanvas}
        brushColor={customColor}
        brushRadius={2}
        imgSrc={logo}
        //img from database will need to be passed at this level
        canvasWidth={300}
        canvasHeight={500}
        saveData={localStorage.getItem("savedDrawing")}
      />

      {/* <CanvasDraw
        className="App"
        //ref={saveableCanvas}
        ref={loadableCanvas}
        brushColor={customColor}
        brushRadius={2}
        imgSrc={logo}
        canvasWidth={300}
        canvasHeight={500}
        saveData={localStorage.getItem("savedDrawing")}
      /> */}
    </body>
  );
}

export default CanvasTool;

// Useful functions that you can call, e.g. when having a reference to this component:

// getSaveData() returns the drawing's save-data as a stringified object
// loadSaveData(saveData: String, immediate: Boolean) loads a previously saved drawing using the saveData string, as well as an optional boolean flag to load it immediately, instead of live-drawing it.
// clear() clears the canvas completely
// undo() removes the latest change to the drawing. This includes everything drawn since the last MouseDown event.

// static defaultProps = {
//     onChange: null
//     loadTimeOffset: 5,
//     lazyRadius: 30,
//     brushRadius: 12,
//     brushColor: "#444",
//     catenaryColor: "#0a0302",
//     gridColor: "rgba(150,150,150,0.17)",
//     hideGrid: false,
//     canvasWidth: 400,
//     canvasHeight: 400,
//     disabled: false,
//     imgSrc: "",
//     saveData: null,
//     immediateLoading: false,
//     hideInterface: false
//   };
