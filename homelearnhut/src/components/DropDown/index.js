//import React from 'react';
// import {
//   ProSidebar,
//   Menu,
//   MenuItem,
//   SubMenu,
//   SidebarHeader,
//   SidebarFooter,
//   SidebarContent,
// } from 'react-pro-sidebar';
// import { FaTachometerAlt, FaGem, FaList, FaGithub, FaRegLaughWink, FaHeart } from 'react-icons/fa';
// import sidebarBg from './bg1.jpg';
// import { Dropdown, Menu } from 'semantic-ui-react';

// function DropDown() {

//   return (
//   <Menu vertical>
//     <Menu.Item>Home</Menu.Item>
//     <Dropdown text='Messages' pointing='left' className='link item'>
//       <Dropdown.Menu>
//         <Dropdown.Item>Inbox</Dropdown.Item>
//         <Dropdown.Item>Starred</Dropdown.Item>
//         <Dropdown.Item>Sent Mail</Dropdown.Item>
//         <Dropdown.Item>Drafts (143)</Dropdown.Item>
//         <Dropdown.Divider />
//         <Dropdown.Item>Spam (1009)</Dropdown.Item>
//         <Dropdown.Item>Trash</Dropdown.Item>
//       </Dropdown.Menu>
//     </Dropdown>
//     <Menu.Item>Browse</Menu.Item>
//     <Menu.Item>Help</Menu.Item>
//   </Menu>
// )
//   }

// export default DropDown;

import React, { useRef } from "react";
import "./index.css";
import { useDetectOutsideClick } from "./useDetectOutsideClick";
/*
 * Read the blog post here:
 * https://letsbuildui.dev/articles/building-a-dropdown-menu-component-with-react-hooks
 */
export default function DropDown() {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);

  return (
    <div className="container">
      <div className="menu-container">
        <button onClick={onClick} className="menu-trigger">
          <span>Autumn</span>
          <img
            src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/df/df7789f313571604c0e4fb82154f7ee93d9989c6.jpg"
            alt="User avatar"
          />
        </button>
        <nav
          ref={dropdownRef} id="autumn"
          className={`menu ${isActive ? "active" : "inactive"}`}
        >
          <ul>
            <li>
              <a href="#">Week 1</a>
            </li>
            <li>
              <a href="#">Week 2</a>
            </li>
            <li>
              <a href="#">Week 3</a>
            </li>
          </ul>
        </nav>
        <br/>
        <button onClick={onClick} className="menu-trigger">
          <span>Spring</span>
          <img
            src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/df/df7789f313571604c0e4fb82154f7ee93d9989c6.jpg"
            alt="User avatar"
          />
        </button>
        <nav
          ref={dropdownRef}
          className={`menu ${isActive ? "active" : "inactive"}`}
        >
          <ul>
            <li>
              <a href="#">Week 1</a>
            </li>
            <li>
              <a href="#">Week 2</a>
            </li>
            <li>
              <a href="#">Week 3</a>
            </li>
          </ul>
        </nav>
        <br/>
        <button onClick={onClick} className="menu-trigger">
          <span>Summer</span>
          <img
            src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/df/df7789f313571604c0e4fb82154f7ee93d9989c6.jpg"
            alt="User avatar"
          />
        </button>
        <nav
          ref={dropdownRef}
          className={`menu ${isActive ? "active" : "inactive"}`}
        >
          <ul className="list">
            <li>
              <a href="#">Week 1</a>
            </li>
            <li>
              <a href="#">Week 2</a>
            </li>
            <li>
              <a href="#">Week 3</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
