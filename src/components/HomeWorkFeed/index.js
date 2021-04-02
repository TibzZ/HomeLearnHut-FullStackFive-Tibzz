/*
NewsFeed contains a list of "Posts" which are essentially.

A piece of homework.

A piece of homework in this list can be clicked to lead to the "MyClassroom" page (state/route)
*/

import Post from "./Post";
import css from "./NewsFeed.module.css";
import DropDownTerm from "../NavFilter";
import React, { useState } from "react";

const HomeWorkFeed = ({ homeworkList, clickToClassroom }) => {

  // show all


  const [filter1, setFilter1] = useState("");
  const [filter2, setFilter2] = useState("");


  function changeFilter(f1, f2) {
    setFilter1(f1);
    setFilter2(f2);
  }


  function showAllHwks() {
    setFilter1("");
    setFilter1("");
  }

  return (
    <div>
      <DropDownTerm handleClick={changeFilter} />
      <button className={css.resetBtn} onClick={showAllHwks}>Show all</button>
      <ul className={css.post}>

        {/* For CSS test purpose only: */}
        {/* <h2 className={css.Test}>Css Test ||</h2> */}
        {homeworkList.map((homework, index) => [
          <li>


            {(homework.dateSet.includes(filter1) || homework.dateSet.includes(filter2)) ?
              <Post
                key={index}
                homework={homework}
                index={index}
                clickToClassroom={() => clickToClassroom(index)}
              />
              :
              null
            }


          </li>,
        ]).reverse()}
      </ul>
    </div>
  );
};

export default HomeWorkFeed;
