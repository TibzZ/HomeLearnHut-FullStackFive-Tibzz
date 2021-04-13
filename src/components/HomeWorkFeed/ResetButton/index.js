import css from "./ResetButton.module.css";

function ResetButton({ setFilter1, setFilter2 }) {
  function showAllHwks() {
    setFilter1("");
  }

  return (
    <button
      className={
        setFilter1 || setFilter2 !== null ? css.resetBtn : css.resetBtnHidden
      }
      onClick={showAllHwks}
    >
      Reset
    </button>
  );
}

export default ResetButton;
