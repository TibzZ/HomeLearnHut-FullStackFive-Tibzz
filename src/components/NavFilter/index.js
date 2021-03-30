/* An optional component that would be implemented most likely solely within the
NewsFeed page (state/route) to filter the "posts" according to date, more specifically
for a teacher the term (semester), the week and so forth
*/
import { ReactComponent as ChevronIcon } from "./icons/chevron.svg";
import { ReactComponent as ArrowIcon } from "./icons/arrow.svg";
import React, { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import "./index.css";

function DropDownTerm() {
  return <DropdownWork></DropdownWork>;
}

function DropdownWork() {
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

  function DropdownItem({ goToMenu, leftIcon, rightIcon, children }) {
    return (
      <a
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
            Filter HomeWork
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
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2> School Term</h2>
          </DropdownItem>
          <DropdownItem leftIcon="🍂">Autumn Pt I</DropdownItem>
          <DropdownItem leftIcon="🦔">Autumn Pt II</DropdownItem>
          <DropdownItem leftIcon="🌷">Spring Pt I</DropdownItem>
          <DropdownItem leftIcon="🐇">Spring Pt II</DropdownItem>
          <DropdownItem leftIcon="🌞">Summer Pt I</DropdownItem>
          <DropdownItem leftIcon="👙">Summer Pt II</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

export default DropDownTerm;
