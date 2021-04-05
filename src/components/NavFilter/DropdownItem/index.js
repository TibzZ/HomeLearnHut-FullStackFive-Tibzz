import React from "react";

function DropdownItem({ leftIcon, rightIcon, children, handleClick }) {
    return (
      <a
        style={{ color: "rgb(66, 66, 66)" }}
        href="#1"
        className="menu-item2"
        onClick={handleClick}
      >
        <span className="icon-button2">{leftIcon}</span>
        {children}
        <span className="icon-right2">{rightIcon}</span>
      </a>
    );
  }

export default DropdownItem;
