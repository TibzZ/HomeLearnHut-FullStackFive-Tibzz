import { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { FaChevronRight, FaArrowLeft } from "react-icons/fa";
import DropdownItem from "./DropdownItem";
import css from "./SideFilter.module.css";

function DropdownTerm({ handleClick }) {
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
    <div
      className={css.dropdown2}
      style={{ height: menuHeight }}
      ref={dropdownRef}
    >
      <CSSTransition
        in={activeMenu === "main"}
        timeout={500}
        classNames="menu-primary2"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className={css.menu2}>
          <DropdownItem
            handleClick={() => "work set" && setActiveMenu("work set")}
            leftIcon="📙"
            rightIcon={<FaChevronRight />}
          >
            <span className={css.filter}>Filter Work</span>
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
        <div className={css.menu2}>
          <DropdownItem
            handleClick={() => "main" && setActiveMenu("main")}
            leftIcon={<FaArrowLeft />}
          >
            <h2>
              <span className={css.filter}>Term</span>
            </h2>
          </DropdownItem>
          <DropdownItem
            handleClick={() => handleClick("09", "10")}
            leftIcon="🍂"
          >
            <span className={css.filter}>Autumn Pt I</span>
          </DropdownItem>
          <DropdownItem
            handleClick={() => handleClick("11", "12")}
            leftIcon="🦔"
          >
            <span className={css.filter}>Autumn Pt II</span>
          </DropdownItem>
          <DropdownItem
            handleClick={() => handleClick("01", "02")}
            leftIcon="🌷"
          >
            <span className={css.filter}>Spring Pt I</span>
          </DropdownItem>
          <DropdownItem
            handleClick={() => handleClick("03", "04")}
            leftIcon="🐇"
          >
            <span className={css.filter}>Spring Pt II</span>
          </DropdownItem>
          <DropdownItem
            handleClick={() => handleClick("04", "05")}
            leftIcon="🌞"
          >
            <span className={css.filter}>Summer Pt I</span>
          </DropdownItem>
          <DropdownItem
            handleClick={() => handleClick("06", "07")}
            leftIcon="👙"
          >
            <span className={css.filter}>Summer Pt II</span>
          </DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

export default DropdownTerm;
