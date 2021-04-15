import css from "./NavLoad.module.css";

function NavLoad({ icon, popupClick }) {
  return (
    <li className={css.navItem}>
      <a href="#" className={css.iconButton} onClick={popupClick}>
        {icon}
      </a>
    </li>
  );
}

export default NavLoad;
