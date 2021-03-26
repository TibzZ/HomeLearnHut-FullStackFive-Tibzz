import React, { useState, useRef } from "react";
import CanvasDraw from "react-canvas-draw";
import "./index.css";

function HomeworkViewer() {
  const [customColor, setCustomColor] = useState("blue");
  console.log(customColor);
  //const [locations, setLocations] = useState([]);
  const saveableCanvas = useRef(null);
  const loadableCanvas = useRef(null);

  function handleClear() {
    saveableCanvas.current.clear();
  }

  function handleUndo() {
    saveableCanvas.current.undo();
  }

  //   function handleSave() {
  //       saveableCanvas.current
  //   }

  return (
    <div className="tools">
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
      <button
        type="button"
        className="button"
        onClick={() => {
          localStorage.setItem(
            "savedDrawing",
            saveableCanvas.current.getSaveData()
          );
        }}
      >
        Save
      </button>
      <button
        type="button"
        className="button"
        onClick={() => {
          loadableCanvas.current.loadSaveData(
            localStorage.getItem("savedDrawing")
          );
        }}
      >
        Load Saved
      </button>

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

      <CanvasDraw
        className="App"
        ref={saveableCanvas}
        brushColor={customColor}
        brushRadius={3}
        imgSrc="https://upload.wikimedia.org/wikipedia/commons/a/a1/Nepalese_Mhapuja_Mandala.jpg"
      />
       <CanvasDraw
        className="App"
        ref={loadableCanvas}
        brushColor={customColor}
        brushRadius={3}
        imgSrc="https://upload.wikimedia.org/wikipedia/commons/a/a1/Nepalese_Mhapuja_Mandala.jpg"
        saveData={localStorage.getItem("savedDrawing")}
      />
    </div>
  );
}

export default HomeworkViewer;

// Useful functions that you can call, e.g. when having a reference to this component:

// getSaveData() returns the drawing's save-data as a stringified object
// loadSaveData(saveData: String, immediate: Boolean) loads a previously saved drawing using the saveData string, as well as an optional boolean flag to load it immediately, instead of live-drawing it.
// clear() clears the canvas completely
// undo() removes the latest change to the drawing. This includes everything drawn since the last MouseDown event.
