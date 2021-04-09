import "./index.css";
import React, { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import ReactModal from "react-modal";
import { useModal } from "react-modal-hook";
import Upload from "../Upload";
import {BsFillBellFill, BsCaretDownFill} from "react-icons/bs";
import {SiMessenger} from "react-icons/si";
import {FaPlus, FaCog, FaChevronRight, FaUserCircle, FaArrowLeft} from "react-icons/fa";
import DropdownNotif from "./DropNotif";
import DropdownMsg from "./DropMsg";
import NavItem from "./NavItem";
import NavBar from "./NavBar";
import NavLoad from "./NavLoad";

function DropDown() {
  const [showModal, hideModal] = useModal(() => (
    <ReactModal
      style={{ overlay: { zIndex: 1000 } }}
      className="modalBox"
      isOpen
      shouldCloseOnOverlayClick={true}
      onRequestClose={hideModal}
    >
      <p>
        <Upload hideModal={hideModal} />
      </p>
      <button className="cornerBtn" onClick={hideModal}>
        X
      </button>
    </ReactModal>
  ));

  return (
    <NavBar>
      <NavLoad icon={<FaPlus />} popupClick={showModal} />
      <NavItem icon={<BsFillBellFill/>}>
        <DropdownNotif />
      </NavItem>
      <NavItem icon={<SiMessenger />}>
        <DropdownMsg />
      </NavItem>
      <NavItem icon={<BsCaretDownFill />}>
        <DropdownMenu></DropdownMenu>
      </NavItem>
    </NavBar>
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

  function DropdownItem({ goToMenu, leftIcon, rightIcon, children }) {
    return (
      <a
        href="#"
        className="menu-item"
        onClick={() => goToMenu && setActiveMenu(goToMenu)}
      >
        <span className="icon-button">{leftIcon}</span>
        {children}
        <span className="icon-right">{rightIcon}</span>
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
            leftIcon={<FaUserCircle />}
            rightIcon={<FaChevronRight />}
            goToMenu="profile"
          >
            My Profile
          </DropdownItem>

          <DropdownItem
            leftIcon={<FaCog />}
            rightIcon={<FaChevronRight />}
            goToMenu="settings"
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
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<FaArrowLeft />}>
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
          <DropdownItem goToMenu="main" leftIcon={<FaArrowLeft />}>
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

export default DropDown;
