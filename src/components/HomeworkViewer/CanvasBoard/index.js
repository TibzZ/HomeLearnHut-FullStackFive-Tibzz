import CanvasDraw from "react-canvas-draw";
import React, { useState, useRef, useEffect } from "react";

function CanvasBoard() {
  const [customColor, setCustomColor] = useState("blue");
  const refName = `canvasRef`;
  const saveableCanvas = useRef(refName);

  function handleClear() {
    saveableCanvas.current.clear();
  }

  function handleUndo() {
    saveableCanvas.current.undo();
  }

  return (
    <CanvasDraw
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
    />
  );
}

export default CanvasBoard;
