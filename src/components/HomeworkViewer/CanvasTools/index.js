function CanvasTools() {

return (
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
)
}

export default CanvasTools;