import css from "./Backbtn.module.css";

function BackButton({ navigateBack }) {
  return (
    <button className={css.goBack} onClick={navigateBack}>
      Back
    </button>
  );
}

export default BackButton;
