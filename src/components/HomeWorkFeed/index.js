import Post from "./Post";
import css from "./NewsFeed.module.css";
import DropDownTerm from "../NavFilter";
import React, {useState} from "react";
import {IoIosArrowDropup} from "react-icons/io";

const HomeWorkFeed = ({ homeworkList, clickToClassroom }) => {
  const [hwkState, setHwkState] = useState(homeworkList)

  function handleClick(selection){
    setHwkState(selection);
  }
  function showAllHwks(){
    setHwkState(homeworkList);
  }

  return (
    <div>
      <DropDownTerm hwkState={hwkState} handleClick={handleClick}/>
      <button className={css.resetBtn} onClick={showAllHwks}>Show all</button>
      <ul className={css.post}>

        {console.log(homeworkList)}
        {console.log(hwkState)}

        {/* For CSS test purpose only: */}
        {/* <h2 className={css.Test}>Css Test ||</h2> */}
        {hwkState.map((homework, index) => [
          <li>
            <Post 
              key={index}
              homework={homework}
              index={index}
              clickToClassroom={() => clickToClassroom(index)}
            />
          </li>,
        ]).reverse()}
      </ul>
      <br></br>
      <a className={css.goToTop} href="#topOfPage">
        <IoIosArrowDropup/>
      </a>
    </div>
  );
};

export default HomeWorkFeed;
