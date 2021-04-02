import css from "./App.module.css";
//import "./App.css";
import Landing from "../Landing";
import AppContent from "../AppContent";
import { useAuth0 } from "@auth0/auth0-react";
import AuthButton from "../AuthButton";
import DropDown from "../DropDown";

import { reducer } from "../../libs/reducer";
import { initialState } from "../../libs/initialState";
import React, { useReducer } from "react";
import * as actions from "../../libs/actions";

import logo from "../../assets/LogoApp.gif";
import { BiCopyright } from "react-icons/bi";

function App({ goToFeed }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { isAuthenticated } = useAuth0();

  function upload(payload) {
    dispatch({ type: actions.UPLOAD, payload: payload });
  }

  function toFeed(payload) {
    dispatch({ type: actions.GO_TO_FEED, payload: payload });
  }

  if (isAuthenticated) {
    return (
      <>
        <div className={css.AppStyle}>
          <a name="1"></a>
          <div className={css.header}>
            <div className={css.leftHeader}>
              <div className={css.logo}>
                <img src={logo} alt="logo" />
              </div>
              <div>
                <button className={css.logoBtn} onClick={toFeed}>
                  <h1 className={css.title}>HomeLearn Hut</h1>
                </button>
              </div>
            </div>
            <div>
              <AuthButton />
            </div>
          </div>
          <div className={css.dropdown}>
            <DropDown upload={upload} />
          </div>
          <div className={css.content}>
            <AppContent state={state} dispatch={dispatch} />
          </div>
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
