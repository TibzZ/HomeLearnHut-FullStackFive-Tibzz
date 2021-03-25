import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../App/App.css";
import HomeworkViewer from "../HomeworkViewer";
import MyClassroom from "../MyClassroom";
import NewsFeed from "../NewsFeed";
import AuthButton from "../AuthButton";
import React, { useReducer } from "react";
import TopBar from "../TopBar";

import { reducer } from "../../libs/reducer"
import { initialState } from "../../libs/initialState"

import * as actions from "../../libs/actions";


function AppContent() {
  const [state, dispatch] = useReducer(reducer, initialState);

  // () => dispatch(state, { type: actions.UPLOAD })
  //() => console.log(actions.UPLOAD)

  return (
    <div className="App">
      <TopBar uploadClick={() => dispatch({ type: actions.UPLOAD })} />


      <h1 data-testid="heading">HomeLearn Hut</h1>
      <p>LOGO</p>
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
              <TopBar uploadClick={() => console.log("test")} />
              <MyClassroom children={state[0].children} />
            </Route>
            <Route path="/pupilPage">
              <HomeworkViewer />
            </Route>
            <Route path="/">
              <NewsFeed homeworkList={state} />
            </Route>
          </Switch>
        </div>
      </Router>

    </div >
  );
}

export default AppContent;
