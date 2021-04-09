import css from "../AppContent/AppContent.module.css";
import HomeworkViewer from "../HomeworkViewer";
import MyClassroom from "../MyClassroom";
import HomeWorkFeed from "../HomeWorkFeed";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { UseAppContext } from "../../appContext";
import Header from "../Header";

function AppContent() {
  const {state} = UseAppContext();

  return (
    <div className={css.wrapper}>
      <div className={css.box1}>
      </div>
      <Router>
        <div>
          <Switch>
            <Route path="/homeworkViewer">
            <Header/>
              <div className={css.Test}>
                <HomeworkViewer homework={state.homework[state.homeworkIndex]} childHomework={
                  state.homework[state.homeworkIndex].children[state.childIndex]
                } homeworkTitle={state.homework[0].name}/>
              </div >
            </Route>
            <Route path="/myClassroom">
              <Header/>
              <div className={css.Test}>
                <MyClassroom children={state.homework[state.homeworkIndex].children} homeworkTitle={state.homework[state.homeworkIndex].name} />
              </div >
            </Route>
            <Route path="/">
              <Header/>
              <div className={css.Test}>
                <HomeWorkFeed homeworkList={state.homework} />
              </div >
            </Route>
          </Switch>
        </div>
      </Router>
    </div >
  );
}

export default AppContent;
