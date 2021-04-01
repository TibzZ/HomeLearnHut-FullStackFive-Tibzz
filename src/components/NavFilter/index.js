/* An optional component that would be implemented most likely solely within the
NewsFeed page (state/route) to filter the "posts" according to date, more specifically
for a teacher the term (semester), the week and so forth
*/
import { ReactComponent as ChevronIcon } from "./icons/chevron.svg";
import { ReactComponent as ArrowIcon } from "./icons/arrow.svg";
import React, { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import "./index.css";
//import homework from libs?

function DropDownTerm({ hwkState }) {
  console.log(hwkState);
  return <DropdownWork hwkState={hwkState}></DropdownWork>;
}

function DropdownWork({ hwkState }) {
  console.log(hwkState);
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

  function DropdownItem({ goToMenu, leftIcon, rightIcon, children, hwkState }) {
    console.log(hwkState);
    return (
      <a
        style={{ color: "rgb(66, 66, 66)" }}
        href="#"
        className="menu-item2"
        onClick={() => goToMenu && setActiveMenu(goToMenu)}
      >
        <span className="icon-button2">{leftIcon}</span>
        {children}
        <span className="icon-right2">{rightIcon}</span>
      </a>
    );
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
            leftIcon="📙"
            rightIcon={<ChevronIcon />}
            goToMenu="work set"
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
          <DropdownItem hwkState={hwkState} goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>
              {" "}
              <span className="filter">Term</span>
            </h2>
          </DropdownItem>
          <DropdownItem leftIcon="🍂">
            <span className="filter">Autumn Pt I</span>
          </DropdownItem>
          <DropdownItem leftIcon="🦔">
            <span className="filter">Autumn Pt II</span>
          </DropdownItem>
          <DropdownItem leftIcon="🌷">
            <span className="filter">Spring Pt I</span>
          </DropdownItem>
          <DropdownItem leftIcon="🐇">
            <span className="filter">Spring Pt II</span>
          </DropdownItem>
          <DropdownItem leftIcon="🌞">
            <span className="filter">Summer Pt I</span>
          </DropdownItem>
          <DropdownItem leftIcon="👙">
            <span className="filter">Summer Pt II</span>
          </DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

export default DropDownTerm;
