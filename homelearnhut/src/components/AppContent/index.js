import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../App/App.css";
import HomeworkViewer from "../HomeworkViewer";
import MyClassroom from "../MyClassroom";
import NewsFeed from "../NewsFeed";
import AuthButton from "../AuthButton";

function AppContent() {
    return (
      <div className="App">
        <h1 data-testid="heading">HomeLearn Hut</h1>
        <p>LOGO</p>
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
                <MyClassroom />
              </Route>
              <Route path="/pupilPage">
                <HomeworkViewer />
              </Route>
              <Route path="/">
                <NewsFeed />
              </Route>
            </Switch>
          </div>
        </Router>
        {/* </AuthProvider> */}
      </div>
    );
  }
  
  export default AppContent;
  