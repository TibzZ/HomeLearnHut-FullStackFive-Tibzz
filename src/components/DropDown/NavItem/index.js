import { ClickAwayListener } from "@material-ui/core";
import React, { useState } from "react";
import css from "./NavItem.module.css";

function NavItem({ icon, children }) {
  const [open, setOpen] = useState(false);

  const handleClickAway = () => {
    setOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <li className={css.navItem}>
        <a href="#" className={css.iconButton} onClick={() => setOpen(!open)}>
          {icon}
        </a>
        {open && children}
      </li>
    </ClickAwayListener>
  );
}

export default NavItem;
