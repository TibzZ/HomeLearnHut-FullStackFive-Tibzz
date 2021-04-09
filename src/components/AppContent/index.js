import HomeworkViewer from "../HomeworkViewer";
import MyClassroom from "../MyClassroom";
import HomeWorkFeed from "../HomeWorkFeed";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { UseAppContext, AppProvider } from "../../appContext";
import Header from "../Header";
import DropDown from "../DropDown";

function AppContent() {
  const { state } = UseAppContext();
  console.log(state);

  return (
    <AppProvider>
      <Router>
        <Switch>
          <Route path="/homeworkViewer">
            <Header />
            <DropDown />
            <HomeworkViewer
              homework={state.homework[state.homeworkIndex]}
              childHomework={
                state.homework[state.homeworkIndex].children[state.childIndex]
              }
              homeworkTitle={state.homework[0].name}
            />
          </Route>
          <Route path="/myClassroom">
            <Header />
            <DropDown />
            <MyClassroom
              children={state.homework[state.homeworkIndex].children}
              homeworkTitle={state.homework[state.homeworkIndex].name}
            />
          </Route>
          <Route path="/">
            <Header />
            <DropDown />
            <HomeWorkFeed homeworkList={state.homework} />
          </Route>
        </Switch>
      </Router>
    </AppProvider>
  );
}

export default AppContent;
