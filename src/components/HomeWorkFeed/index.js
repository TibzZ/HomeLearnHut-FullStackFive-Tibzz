import Post from "./Post";
import css from "./NewsFeed.module.css";
import DropdownTerm from "../SideFilter";
import React, { useState } from "react";
import { IoIosArrowDropup } from "react-icons/io";
import { useHistory } from "react-router-dom";
import { UseAppContext } from "../../appContext";
import ResetButton from "./ResetButton";
import Greeting from "./Greeting";
import * as actions from "../../libs/actions";
import { useScrollPosition } from "../../hooks/useScroll";

const HomeWorkFeed = () => {
  const history = useHistory();
  const { state, dispatch } = UseAppContext();
  const [filter1, setFilter1] = useState("");
  const [filter2, setFilter2] = useState("");
  const [hideOnScroll, setHideOnScroll] = useState(true);

  function goToClassroom(index) {
    dispatch({ type: actions.HOMEWORK_CHANGE, payload: index });
    history.push("/myClassroom");
  }

  let homeworkList = state.homework;
  console.log(homeworkList);

  function changeFilter(f1, f2) {
    setFilter1(f1);
    setFilter2(f2);
  }

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y > prevPos.y;
      if (isShow === hideOnScroll) setHideOnScroll(isShow);
    },
    [hideOnScroll]
  );

  return (
    <div>
      <Greeting />
      <DropdownTerm handleClick={changeFilter} />
      <ResetButton setFilter1={setFilter1} setFilter2={setFilter2} />
      <ul className={css.post}>
        {homeworkList
          .map((homework, index) => [
            <li key={index}>
              {homework.dateset.includes(filter1) ||
              homework.dateset.includes(filter2) ? (
                <Post
                  homework={homework}
                  index={index}
                  clickToClassroom={goToClassroom}
                />
              ) : null}
            </li>,
          ])
          .reverse()}
      </ul>
      <a className={css.goToTop} href="#1">
        {hideOnScroll && <IoIosArrowDropup />}
      </a>
    </div>
  );
};

export default HomeWorkFeed;
