import React, { useState, useRef, useEffect } from "react";
// import PropTypes from "prop-types";
// import { LazyBrush } from "lazy-brush";
// import Catenary from "catenary-curve";
// import drawImage from "./drawImg";
// import ResizeObserver from "resize-observer-polyfill";
import "./App.css";

// ...draw function
const HOOK_SVG =
  "m129.03125 63.3125c0-34.914062-28.941406-63.3125-64.519531-63.3125-35.574219 0-64.511719 28.398438-64.511719 63.3125 0 29.488281 20.671875 54.246094 48.511719 61.261719v162.898437c0 53.222656 44.222656 96.527344 98.585937 96.527344h10.316406c54.363282 0 98.585938-43.304688 98.585938-96.527344v-95.640625c0-7.070312-4.640625-13.304687-11.414062-15.328125-6.769532-2.015625-14.082032.625-17.960938 6.535156l-42.328125 64.425782c-4.847656 7.390625-2.800781 17.3125 4.582031 22.167968 7.386719 4.832032 17.304688 2.792969 22.160156-4.585937l12.960938-19.71875v42.144531c0 35.582032-29.863281 64.527344-66.585938 64.527344h-10.316406c-36.714844 0-66.585937-28.945312-66.585937-64.527344v-162.898437c27.847656-7.015625 48.519531-31.773438 48.519531-61.261719zm-97.03125 0c0-17.265625 14.585938-31.3125 32.511719-31.3125 17.929687 0 32.511719 14.046875 32.511719 31.3125 0 17.261719-14.582032 31.3125-32.511719 31.3125-17.925781 0-32.511719-14.050781-32.511719-31.3125zm0 0";
const HOOK_PATH = new Path2D(HOOK_SVG);
const SCALE = 0.3;
const OFFSET = 80;
function draw(ctx, location) {
  ctx.fillStyle = "deepskyblue";
  ctx.shadowColor = "dodgerblue";
  ctx.shadowBlur = 20;
  ctx.save();
  ctx.scale(SCALE, SCALE);
  ctx.translate(location.x / SCALE - OFFSET, location.y / SCALE - OFFSET);
  ctx.fill(HOOK_PATH);
  ctx.restore();
}

// drawImage = () => {
//   if (imgSrc) return;

//   // Load the image
//   let image = new Image();

//   // Prevent SecurityError "Tainted canvases may not be exported." #70
//   image.crossOrigin = "anonymous";

//   // Draw the image once loaded
//   image.onload = () =>
//     drawImage({ ctx: ctx.grid, img: image });
//   image.src = imgSrc;
// };
// let lazy = new LazyBrush({
//   radius: lazyRadius * window.devicePixelRatio,
//   enabled: true,
//   initialPoint: {
//     x: window.innerWidth / 2,
//     y: window.innerHeight / 2
//   }
// });

// our first custom hook
function usePersistentState(init) {
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem("draw-app")) || init
  );

  useEffect(() => {
    localStorage.setItem("draw-app", JSON.stringify(value));
  });

  return [value, setValue];
}

// our second custom hook: a composition of the first custom hook and React's useEffect + useRef
function usePersistentCanvas() {
  const [locations, setLocations] = usePersistentState([]);
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    locations.forEach((location) => draw(ctx, location));
  });
  return [locations, setLocations, canvasRef];
}

function CanvasTool() {
  const [locations, setLocations, canvasRef] = usePersistentCanvas();
  const [customColor, setCustomColor] = useState("blue");
  console.log(customColor);

  function handleCanvasClick(e) {
    const newLocation = { x: e.clientX, y: e.clientY };
    setLocations([...locations, newLocation]);
  }

  function handleClear() {
    setLocations([]);
  }

  function handleUndo() {
    setLocations(locations.slice(0, -1));
  }

  return (
    <>
      <div className="tools">
        <button type="button" className="button" onClick={handleClear}>
          Clear
        </button>
        <button type="button" className="button" onClick={handleUndo}>
          Undo
        </button>

        <input
          onChange={(e) => setCustomColor(e.target.value)}
          type="color"
          className="color-picker"
        />

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
        <canvas
          className="App"
          ref={canvasRef}
          width={window.innerWidth}
          height={window.innerHeight}
          onClick={handleCanvasClick}
        />
      </div>
    </>
  );
}

export default CanvasTool;