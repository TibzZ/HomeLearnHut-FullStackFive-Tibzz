import css from "./App.module.css";
//import "./App.css";
import Landing from "../Landing";
import AppContent from "../AppContent";
import { useAuth0 } from "@auth0/auth0-react";
import AuthButton from "../AuthButton";
import TopBar from "../TopBar";
import DropDown from "../DropDown";
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
import { ChakraProvider } from "@chakra-ui/react"


function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  const { isAuthenticated } = useAuth0();


  if (isAuthenticated) {
    return (
     
      <div className={css.AppStyle}>
        <AuthButton />
        <DropDown/>
        <TopBar uploadClick={() => dispatch({ type: actions.UPLOAD, payload: dummyAdd })} />
        <AppContent state={state} dispatch={dispatch} />
      </div>
      
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
