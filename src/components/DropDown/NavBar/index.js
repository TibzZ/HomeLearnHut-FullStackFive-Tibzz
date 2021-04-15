import css from "./NavBar.module.css";

function NavBar({ children }) {
  return (
    <nav className={css.navbar}>
      <ul className={css.navbarNav}>{children}</ul>
    </nav>
  );
}
export default NavBar;
