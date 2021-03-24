import React from "react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import UserProfile from "./UserProfile";
import { useAuth0 } from "@auth0/auth0-react";

function AuthButton() {
  const { isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    return (
      <div>
        <LogoutButton />
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
