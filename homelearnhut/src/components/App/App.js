import React, { useReducer } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import HomeworkViewer from "../HomeworkViewer";
import MyClassroom from "../MyClassroom";
import NewsFeed from "../NewsFeed";
import AuthButton from "../AuthButton";
import TopBar from "../TopBar";


import Database from "../Database";



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


  // const [state, reducer] = useReducer(homeworkReducer, 1);

  const [state, dispatch] = Database();


  // function uploadClick() {
  //   dispatch({ type: 'uploadHomework', payload: "test homework" });
  // }




  return (

    // <>
    //   <HomeworkViewer />
    // </>
    <div className="App">
      {/* <AuthProvider> */}
      <Router>
        <div>
          <h1 data-testid="heading">HomeLearn Hut</h1>
          <AuthButton />
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
              <TopBar />
              <MyClassroom children={state[0].children} />
            </Route>
            <Route path="/pupilPage">
              <TopBar uploadClick={() => console.log("click")} />
              <HomeworkViewer />
            </Route>
            <Route path="/">
              <TopBar />
              <NewsFeed homeworkList={state} />
            </Route>
          </Switch>
        </div>
      </Router>
      {/* </AuthProvider> */}
    </div >
  );
}

export default App;
