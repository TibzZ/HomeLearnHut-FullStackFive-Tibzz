import HomeworkViewer from "../HomeworkViewer";
import MyClassroom from "../MyClassroom";
import HomeWorkFeed from "../HomeWorkFeed";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../Header";
import DropDown from "../DropDown";
import Footer from "../Footer";

function AppContent() {
  return (
    <>
      <Header />
      <DropDown />
      <Router>
        <Switch>
          <Route path="/homeworkViewer">
            <HomeworkViewer />
          </Route>
          <Route path="/myClassroom">
            <MyClassroom />
          </Route>
          <Route path="/">
            <HomeWorkFeed />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default AppContent;
