import css from "./App.module.css";
//import "./App.css";
import Landing from "../Landing";
import AppContent from "../AppContent";
import { useAuth0 } from "@auth0/auth0-react";
import AuthButton from "../AuthButton";
import TopBar from "../TopBar";
import DropDown from "../DropDown";
import AppTest from "../AppTest";
/*
initial idea: Top level app has 4 states ( or routes)
(- Landing pagedrills down to)
- NewsFeed page drills down to:
- MyClassroom page ( can go back )
drills down to:
- Homework viewer page ( can go back )
*/
import { reducer } from "../../libs/reducer";
import { initialState } from "../../libs/initialState";
import React, { useReducer } from "react";
import * as actions from "../../libs/actions";
import { dummyAdd } from "../../libs/dummyAdd";

// import { ChakraProvider } from "@chakra-ui/react";
import logo from "./homelearnhut Logo.gif"


function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { isAuthenticated } = useAuth0();

  function upload(payload) {
    dispatch({ type: actions.UPLOAD, payload: payload });
  }



  if (isAuthenticated) {
    return (
      <>
        <div className={css.AppStyle}>
          <div className={css.header}>
            <div className={css.logo}>
              <img src={logo} alt="logo" />
            </div>
            <div className={css.title}>
              <h1>HomeLearn Hut</h1>
            </div>
            <div className={css.login}>
              <AuthButton />
            </div>
          </div>
          <div className={css.dropdown}>
          </div>
          <div className={css.content}>
            <DropDown
              uploadClick={upload
              } />
            <AppContent state={state} dispatch={dispatch} />
            {/* <AppTest upload={upload} /> */}
          </div>

        </div>
      </>
    );
  }

  return (
    // <>
    //   <HomeworkViewer />
    // </>
    <div className={css.AppStyle}>
      <Landing />
    </div>
  );
}

export default App;
