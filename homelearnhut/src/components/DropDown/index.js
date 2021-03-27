import { ReactComponent as BellIcon } from "./icons/bell.svg";
import { ReactComponent as MessengerIcon } from "./icons/messenger.svg";
import { ReactComponent as CaretIcon } from "./icons/caret.svg";
import { ReactComponent as PlusIcon } from "./icons/plus.svg";
import { ReactComponent as CogIcon } from "./icons/cog.svg";
import { ReactComponent as ChevronIcon } from "./icons/chevron.svg";
import { ReactComponent as ArrowIcon } from "./icons/arrow.svg";
import { ReactComponent as UserIcon } from "./icons/users.svg";
import "./index.css";
import React, { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
//import useComponentVisible from "./hook/index";

function DropDown() {
  return (
    <Navbar>
      <NavItem icon={<PlusIcon />} />
      <NavItem icon={<BellIcon />}>
        <DropdownNotif />
      </NavItem>
      <NavItem icon={<MessengerIcon />} >
      <DropdownMsg />
      </NavItem>
      <NavItem icon={<CaretIcon />}>
        <DropdownMenu></DropdownMenu>
      </NavItem>
    </Navbar>
  );
}

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
    </li>
  );
}

function DropdownNotif() {
  const [activeMenu, setActiveMenu] = useState("main");
  const dropdownRef = useRef(null);

  function DropdownItem({ goToMenu, children }) {
    return (
      <div onClick={() => goToMenu && setActiveMenu(goToMenu)}> {children}</div>
    );
  }

  return (
    <div className="dropdownNotif" ref={dropdownRef}>
      <DropdownItem>
        <p style={{ color: "white" }}>No recent notifications</p>
      </DropdownItem>
    </div>
  );
}

function DropdownMsg() {
  const [activeMenu, setActiveMenu] = useState("main");
  const dropdownRef = useRef(null);

  function DropdownItem({ goToMenu, children }) {
    return (
      <div onClick={() => goToMenu && setActiveMenu(goToMenu)}> {children}</div>
    );
  }

  return (
    <div className="dropdownMsg" ref={dropdownRef}>
      <DropdownItem>
        <p style={{ color: "white" }}>You have no messages</p>
      </DropdownItem>
    </div>
  );
}

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

  function DropdownItem(props) {
    return (
      <a
        href="#"
        className="menu-item"
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
      <CSSTransition
        in={activeMenu === "main"}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem
            leftIcon={<UserIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu="profile"
          >
            My Profile
          </DropdownItem>

          <DropdownItem
            leftIcon={<CogIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu="settings"
          >
            Settings
          </DropdownItem>

          <DropdownItem
            leftIcon="📙"
            rightIcon={<ChevronIcon />}
            goToMenu="work set"
          >
            Work Set
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
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
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
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>More Info</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<CogIcon />}>Account Details</DropdownItem>
          <DropdownItem leftIcon={<CogIcon />}>Privacy Details</DropdownItem>
          <DropdownItem leftIcon={<CogIcon />}>Helpdesk</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "work set"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
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

export default DropDown;
