import HomeworkViewer from "../HomeworkViewer";
import MyClassroom from "../MyClassroom";
import HomeWorkFeed from "../HomeWorkFeed";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../Header";
import DropDown from "../DropDown";
import Footer from "../Footer";
import ScrollToTop from "../../scrollTop";

function AppContent() {
  return (
    <>
      <Router>
        <ScrollToTop>
          <Switch>
            <Route path="/homeworkViewer">
              <Header />
              <DropDown />
              <HomeworkViewer />
            </Route>
            <Route path="/myClassroom">
              <Header />
              <DropDown />
              <MyClassroom />
            </Route>
            <Route path="/">
              <Header />
              <DropDown />
              <HomeWorkFeed />
            </Route>
          </Switch>
        </ScrollToTop>
      </Router>
      <Footer />
    </>
  );
}

export default AppContent;
