import css from "./DropNotif.module.css";

function DropdownNotif() {
  return (
    <div className={css.dropdownNotif}>
      <p style={{ color: "white" }}>No recent notifications</p>
    </div>
  );
}

export default DropdownNotif;
