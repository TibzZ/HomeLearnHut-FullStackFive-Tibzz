import { BiCopyright } from "react-icons/bi";
import css from "./Footer.module.css";

function Footer() {
  return (
    <>
      <div className={css.push}></div>
      <div className={css.footer}>
        <footer className={css.copyright} style={{ overlay: { zIndex: 1000 } }}>
          <span>
            <BiCopyright />
            FullStackFive
          </span>
        </footer>
      </div>
    </>
  );
}

export default Footer;
