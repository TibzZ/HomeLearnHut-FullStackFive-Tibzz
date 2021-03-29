import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
//import css from "../LogoutButton/LogoutButton.module.css";
import css from "../AuthButton.module.css";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <div>
      <button className={css.authbtn} onClick={() => logout({ returnTo: window.location.origin })}>
        Log Out
      </button>
    </div>
  );
};

export default LogoutButton;