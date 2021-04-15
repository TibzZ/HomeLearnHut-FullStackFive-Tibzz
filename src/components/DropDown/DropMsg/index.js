import css from "./DropMsg.module.css";

function DropdownMsg() {
  return (
    <div className={css.dropdownMsg}>
      <p style={{ color: "white" }}>You have no messages</p>
    </div>
  );
}

export default DropdownMsg;
