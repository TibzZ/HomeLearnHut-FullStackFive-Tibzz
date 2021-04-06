import Post from "./Post";
import css from "./NewsFeed.module.css";
import DropDownTerm from "../NavFilter";
import React, { useState, useEffect } from "react";
import { IoIosArrowDropup } from "react-icons/io";

const HomeWorkFeed = ({ homeworkList, clickToClassroom }) => {
  const [filter1, setFilter1] = useState("");
  const [filter2, setFilter2] = useState("");
  const [scrollPosition, setScrollPosition] = useState(0);

  function handleScroll() {
    const position = window.pageYOffset;
    setScrollPosition(position);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // return () => {
    //   window.removeEventListener('scroll', handleScroll)
    // }
  }, []);

  function changeFilter(f1, f2) {
    setFilter1(f1);
    setFilter2(f2);
  }

  function showAllHwks() {
    setFilter1("");
  }

  return (
    <div>
      <h1 className={css.feedTitle}>
        <span>Good Morning Teacher, <br/>
          upload new work using the + icon or browse previous work below
        </span>
      </h1>
      <hr
        style={{
          color: "rgb(66, 66, 66)",
          backgroundColor: "rgb(66, 66, 66)",
          height: 2,
          width: "20%",
          marginTop: "70px",
          marginBottom: "-50px",
        }}
      />
      <DropDownTerm handleClick={changeFilter} />
      <div>
        <button
          className={
            setFilter1 || setFilter2 !== null
              ? css.resetBtn
              : css.resetBtnHidden
          }
          onClick={showAllHwks}
        >
          Reset
        </button>

        {/* className={
                homeworkList !== changeFilter
                  ? css.resetBtnHidden
                  : css.resetBtn
              } */}
      </div>
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
                  clickToClassroom={() => clickToClassroom(index)}
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
