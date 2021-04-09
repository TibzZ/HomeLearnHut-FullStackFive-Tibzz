import css from "./App.module.css";
import Landing from "../Landing";
import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import AppContent from "../AppContent";
import DropDown from "../DropDown";
import { BiCopyright } from "react-icons/bi";
import Header from "../Header";

function App() {
  const { isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    return (
      <>
        <div className={css.wrapper}>
          <a name="1"></a>
          <div className={css.dropdown}>
            <DropDown />
          </div>
          <div className={css.content}>
            <AppContent/>
          </div>
        </div>
        <div className={css.push}></div>
        <div className={css.footer}>
          <footer
            className={css.copyright}
            style={{ overlay: { zIndex: 1000 } }}
          >
            <span>
              <BiCopyright />
              FullStackFive
            </span>
          </footer>
        </div>
      </>
    );
  }

  return (
    <div className={css.AppStyle}>
      <Landing />
    </div>
  );
}

export default App;
