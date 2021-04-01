import css from "./App.module.css";
//import "./App.css";
import Landing from "../Landing";
import AppContent from "../AppContent";
import { useAuth0 } from "@auth0/auth0-react";
import AuthButton from "../AuthButton";
import DropDown from "../DropDown";
import AppTest from "../AppTest";
import {IoIosArrowDropup} from "react-icons/io";

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
import logo from "../../assets/LogoApp.gif";

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
            <div className={css.leftHeader}>
              <div className={css.logo}>
                <img src={logo} alt="logo" />
              </div>
                <button 
                  className={css.titleBtn} 
                  onClick={()=>dispatch({ type: actions.GO_TO_FEED})}>
                    <div className={css.title}>
                        <h1>HomeLearn Hut</h1>
                    </div>
                </button>
            </div>
            <div>
              <AuthButton />
            </div>
          </div>
          <button className={css.homeBtn}>Homework List</button>
          <button className={css.classroomBtn}>Classroom</button>
          <div className={css.dropdown}>
            <a name="topOfPage"></a>
            <DropDown className={css.topOfPageLabel} upload={upload} />
          </div>
          <div className={css.content}>
            <AppContent state={state} dispatch={dispatch} />
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
