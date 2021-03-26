import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import css from "../AppContent/AppContent.module.css";
import HomeworkViewer from "../HomeworkViewer";
import MyClassroom from "../MyClassroom";
import NewsFeed from "../NewsFeed";
import AuthButton from "../AuthButton";
import React, { useReducer } from "react";
//import TopBar from "../TopBar";
import Database from "../Database";
import Button from "../Button";
import InputField from "../InputField";
import TopBar from "../TopBar";
import Upload from "../Upload";

function AppContent() {
  const [state, dispatch] = Database();

  return (
    <div className={css.Test}>
      <h1 data-testid="heading">HomeLearn Hut</h1>
      {/* CSS Button component test only: */}
      {/* <Button/> */}
       {/* CSS Input component test only: */}
      {/* <InputField/> */}
      {/* CSS TopBar and Upload (needs TopBar) tests : */}
      {/* <TopBar/>
      <Upload/> */}
      <div className="App-logo">LOGO</div>
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
                <Link to="/pupilPage">Pupil Page</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/myClass">
              <MyClassroom children={state[0].children} />
            </Route>
            <Route path="/pupilPage">
              {/* <TopBar uploadClick={() => console.log("click")} /> */}
              <HomeworkViewer />
            </Route>
            <Route path="/">
              <NewsFeed homeworkList={state} />
            </Route>
          </Switch>
        </div>
      </Router>
      {/* </AuthProvider> */}
    </div>
  );
}

export default AppContent;
