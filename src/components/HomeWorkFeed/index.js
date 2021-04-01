/*
NewsFeed contains a list of "Posts" which are essentially.

A piece of homework.

A piece of homework in this list can be clicked to lead to the "MyClassroom" page (state/route)
*/

import Post from "./Post";
import css from "./NewsFeed.module.css";
import DropDownTerm from "../NavFilter";
import React, {useState} from "react";

const HomeWorkFeed = ({ homeworkList, clickToClassroom }) => {
  const [hwkState, setHwkState] = useState([])

  return (
    <div>
      <DropDownTerm hwkState={hwkState}/>
      <ul className={css.post}>
        {console.log(homeworkList)}

        {/* For CSS test purpose only: */}
        {/* <h2 className={css.Test}>Css Test ||</h2> */}
        {homeworkList.map((homework, index) => [
          <li>
            <Post
              homework={homework}
              index={index}
              clickToClassroom={() => clickToClassroom(index)}
            />
          </li>,
        ])}
      </ul>
    </div>
  );
};

export default HomeWorkFeed;
