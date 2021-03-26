import React from "react";
import css from "../AuthButton/AuthButton.module.css";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import UserProfile from "./UserProfile";
import { useAuth0 } from "@auth0/auth0-react";

function AuthButton() {
  const { isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    return (
      <div>
        {/* Line to test CSS working */}
        {/* <p className={css.Test}> Hello </p> */}
        <LogoutButton/>
        <UserProfile />
      </div>
    );
  }
  return (
    <div>
      <LoginButton />
    </div>
  );
}

export default AuthButton;
