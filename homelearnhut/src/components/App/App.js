import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import HomeworkViewer from "../HomeworkViewer";
import MyClassroom from "../MyClassroom";
import NewsFeed from "../NewsFeed";

/*
initial idea: Top level app has 4 states ( or routes)

(
- Landing page

drills down to

)

- NewsFeed page

drills down to:

- MyClassroom page ( can go back )

drills down to:

- Homework viewer page ( can go back )

*/

function App() {
  return (
    <div className="App">
      {/* <AuthProvider> */}
      <Router>
        <div>
          <h1 data-testid="heading">HomeLearn Hut</h1>
          {/* <AuthButton /> */}
          <nav>
            <ul>
              <li>
                <Link to="/">HomeWork Feed</Link>
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

export default App;
