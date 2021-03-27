import css from "../AppContent/AppContent.module.css";
import HomeworkViewer from "../HomeworkViewer";
import MyClassroom from "../MyClassroom";
import HomeWorkFeed from "../HomeWorkFeed";

import * as pages from "../../libs/pages";
import * as actions from "../../libs/actions";


function AppContent({ state, dispatch }) {
  function backToFeed() {
    dispatch({ type: actions.BACKTOFEED });
  }

  function clickToClassroom(classroomIndex) {
    dispatch({ type: actions.GOTOCLASSROOM, payload: classroomIndex });
  }

  function clickToHomeworkViewer(homeworkIndex){
    dispatch({type: actions.GOTOHOMEWORK, payload: homeworkIndex});
  }

  if (state.page === pages.FEED) {
    return (
      <div className={css.Test}>
        <HomeWorkFeed homeworkList={state.homework} clickToClassroom={clickToClassroom} />
      </div >
    );
  }
  else if (state.page === pages.CLASSROOM) {
    return (



      <div className={css.Test}>
        <MyClassroom studentClick={clickToHomeworkViewer} children={state.homework[0].children} backClick={backToFeed} />
      </div >
    );
  }
  else // Viewer
  {
    return (



      <div className={css.Test}>
        <HomeworkViewer clickToClassroom={clickToClassroom}/>
      </div >
    );
  }
}

export default AppContent;
