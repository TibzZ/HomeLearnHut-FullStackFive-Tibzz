import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import css from "../AppContent/AppContent.module.css";
import HomeworkViewer from "../HomeworkViewer";
import MyClassroom from "../MyClassroom";
import NewsFeed from "../NewsFeed";
import AuthButton from "../AuthButton";
import React, { useReducer } from "react";
import TopBar from "../TopBar";
import { reducer } from "../../libs/reducer";
import { initialState } from "../../libs/initialState";
import * as actions from "../../libs/actions";
import Button from "../Button";
import InputField from "../InputField";
import Upload from "../Upload";
import { LinkContainer } from "react-router-bootstrap";
import DropDown from "../DropDown";

function AppContent() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className={css.Test}>
      <TopBar uploadClick={() => dispatch({ type: actions.UPLOAD })} />
      <br/>
      <br/>
      <DropDown />
      <br/>
      <br/>
      {/* CSS Button component test only: */}
      {/* <Button/> */}
      {/* CSS Input component test only: */}
      {/* <InputField/> */}
      {/* CSS TopBar and Upload (needs TopBar) tests : */}
      {/* <TopBar/>
      <Upload/> */}
      {/* <AuthProvider> */}
      <Router>
        <div>
          <AuthButton />
          <nav>
            <ul>
              <li>
                <Link to="/feed">HomeWork Feed</Link>
              </li>
              <li>
                <Link to="/myClass">MyClassroom</Link>
              </li>
              <li>
                <Link to="/homeworkViewer">Homework Viewer</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}

          <Switch>
            <Route path="/myClass">
              <TopBar uploadClick={() => console.log("test")} />
              <MyClassroom children={state[0].children} />
            </Route>
            <Route path="/homeworkViewer">
              <HomeworkViewer />
            </Route>
            <Route path="/">
              <NewsFeed homeworkList={state} />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default AppContent;
