import Post from "./Post";
import css from "./NewsFeed.module.css";
import DropdownTerm from "../SideFilter";
import React, { useState, useEffect } from "react";
import { IoIosArrowDropup } from "react-icons/io";
import { useHistory } from "react-router-dom";
import { UseAppContext } from "../../appContext";
import ResetButton from "./ResetButton";
import Greeting from "./Greeting";
import * as actions from "../../libs/actions";

const HomeWorkFeed = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const history = useHistory();
  const { state, dispatch } = UseAppContext();
  const [filter1, setFilter1] = useState("");
  const [filter2, setFilter2] = useState("");

  function goToClassroom(index) {
    dispatch({ type: actions.HOMEWORKCHANGE, payload: index });
    history.push("/myClassroom");
  }

  let homeworkList = state.homework;

  function changeFilter(f1, f2) {
    setFilter1(f1);
    setFilter2(f2);
  }

  function handleScroll() {
    const position = window.pageYOffset;
    setScrollPosition(position);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <Greeting />
      <DropdownTerm handleClick={changeFilter} />
      <ResetButton setFilter1={setFilter1} setFilter2={setFilter2} />
      <ul className={css.post}>
        {homeworkList
          .map((homework, index) => [
            <li>
              {homework.dateSet.includes(filter1) ||
              homework.dateSet.includes(filter2) ? (
                <Post
                  key={index}
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
        {scrollPosition > 1000 && <IoIosArrowDropup />}
      </a>
    </div>
  );
};

export default HomeWorkFeed;
