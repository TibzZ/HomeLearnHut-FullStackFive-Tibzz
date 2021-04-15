import React, { useState } from "react";
import CanvasDraw from "react-canvas-draw";
import css from "./CanvasTools.module.css";

function CanvasTools({ childHomework, saveableCanvas }) {
  const [customColor, setCustomColor] = useState("blue");

  function handleClear() {
    saveableCanvas.current.clear();
  }

  function handleUndo() {
    saveableCanvas.current.undo();
  }

  return (
    <>
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
        <br />
      </div>
      <CanvasDraw
        className={css.myCanvas}
        ref={saveableCanvas}
        brushColor={customColor}
        imgSrc={childHomework.image}
        brushRadius={2}
        lazyRadius={1}
        canvasWidth={530}
        canvasHeight={700}
      />
    </>
  );
}

export default CanvasTools;
