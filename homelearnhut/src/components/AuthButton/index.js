import React from "react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import UserProfile from "./UserProfile";
import { useAuth0 } from "@auth0/auth0-react";
import AppContent from "../Landing";

function AuthButton() {
  const { isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    return (
      <div>
        <LogoutButton />
        <UserProfile />
        <AppContent />
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
