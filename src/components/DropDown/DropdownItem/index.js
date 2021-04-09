import css from "./DropItem.module.css";

function DropdownItem({
  goToMenu,
  leftIcon,
  rightIcon,
  children,
  setActiveMenu,
}) {
  return (
    <a
      href="#"
      className={css.menuItem}
      onClick={() => goToMenu && setActiveMenu(goToMenu)}
    >
      <span className={css.iconButton}>{leftIcon}</span>
      {children}
      <span className={css.iconRight}>{rightIcon}</span>
    </a>
  );
}

export default DropdownItem;
