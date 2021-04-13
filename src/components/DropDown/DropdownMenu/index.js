import { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import {
  FaCog,
  FaChevronRight,
  FaUserCircle,
  FaArrowLeft,
} from "react-icons/fa";
import DropdownItem from "../DropdownItem";
import css from "./DropMenu.module.css";

function DropdownMenu() {
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
      className={css.dropdown}
      style={{ height: menuHeight }}
      ref={dropdownRef}
    >
      <CSSTransition
        in={activeMenu === "main"}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className={css.menu}>
          <DropdownItem
            leftIcon={<FaUserCircle />}
            rightIcon={<FaChevronRight />}
            goToMenu="profile"
            setActiveMenu={setActiveMenu}
          >
            My Profile
          </DropdownItem>

          <DropdownItem
            leftIcon={<FaCog />}
            rightIcon={<FaChevronRight />}
            goToMenu="settings"
            setActiveMenu={setActiveMenu}
          >
            Settings
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "profile"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className={css.menu}>
          <DropdownItem
            goToMenu="main"
            leftIcon={<FaArrowLeft />}
            setActiveMenu={setActiveMenu}
          >
            <h2>More Info</h2>
          </DropdownItem>
          <DropdownItem leftIcon="😎">Class Teacher</DropdownItem>
          <DropdownItem leftIcon="🌈">Class Assigned</DropdownItem>
          <DropdownItem leftIcon="✍">Pupil Profiles</DropdownItem>
          <DropdownItem leftIcon="🎉">Pupil Progress</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "settings"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className={css.menu}>
          <DropdownItem
            goToMenu="main"
            leftIcon={<FaArrowLeft />}
            setActiveMenu={setActiveMenu}
          >
            <h2>More Info</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<FaCog />}>Account Details</DropdownItem>
          <DropdownItem leftIcon={<FaCog />}>Privacy Details</DropdownItem>
          <DropdownItem leftIcon={<FaCog />}>Helpdesk</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

export default DropdownMenu;
