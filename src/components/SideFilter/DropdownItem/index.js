import css from "./DropdownItem.module.css"

function DropdownItem({ leftIcon, rightIcon, children, handleClick }) {
    return (
      <a
        style={{ color: "rgb(66, 66, 66)" }}
        href="#1"
        className={css.menuItem2}
        onClick={handleClick}
      >
        <span className={css.iconButton2} >{leftIcon}</span>
        {children}
        <span className={css.iconRight2} >{rightIcon}</span>
      </a>
    );
  }

export default DropdownItem;
