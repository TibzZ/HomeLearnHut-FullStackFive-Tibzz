/* An optional component that would be implemented most likely solely within the
NewsFeed page (state/route) to filter the "posts" according to date, more specifically
for a teacher the term (semester), the week and so forth
*/
import { ReactComponent as ChevronIcon } from "./icons/chevron.svg";
import { ReactComponent as ArrowIcon } from "./icons/arrow.svg";
import React, { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import "./index.css";
import DropdownItem from ".//DropdownItem";

function DropDownTerm({ handleClick }) {
  return <DropdownWork handleClick={handleClick}></DropdownWork>;
}

function DropdownWork({ handleClick }) {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
  }, []);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  return (
    <div className="dropdown2" style={{ height: menuHeight }} ref={dropdownRef}>
      <CSSTransition
        in={activeMenu === "main"}
        timeout={500}
        classNames="menu-primary2"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu2">
          <DropdownItem
            handleClick={() => "work set" && setActiveMenu("work set")}
            leftIcon="📙"
            rightIcon={<ChevronIcon />}
          >
            <span className="filter">Filter Work</span>
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "work set"}
        timeout={500}
        classNames="menu-secondary2"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu2">
          <DropdownItem
            handleClick={() => "main" && setActiveMenu("main")}
            leftIcon={<ArrowIcon />}
          >
            <h2>
              {" "}
              <span className="filter">Term</span>
            </h2>
          </DropdownItem>
          <DropdownItem
            handleClick={() => handleClick("September", "October")}
            leftIcon="🍂"
          >
            <span className="filter">Autumn Pt I</span>
          </DropdownItem>
          <DropdownItem
            handleClick={() => handleClick("November", "December")}
            leftIcon="🦔"
          >
            <span className="filter">Autumn Pt II</span>
          </DropdownItem>
          <DropdownItem
            handleClick={() => handleClick("January", "February")}
            leftIcon="🌷"
          >
            <span className="filter">Spring Pt I</span>
          </DropdownItem>
          <DropdownItem
            handleClick={() => handleClick("March", "April")}
            leftIcon="🐇"
          >
            <span className="filter">Spring Pt II</span>
          </DropdownItem>
          <DropdownItem
            handleClick={() => handleClick("April", "May")}
            leftIcon="🌞"
          >
            <span className="filter">Summer Pt I</span>
          </DropdownItem>
          <DropdownItem
            handleClick={() => handleClick("June", "July")}
            leftIcon="👙"
          >
            <span className="filter">Summer Pt II</span>
          </DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

export default DropDownTerm;
