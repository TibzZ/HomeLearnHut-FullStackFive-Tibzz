import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import css from "../UserProfile/UserProfile.module.css"

const UserProfile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  // can add user logo/avatar with email etc

  return (
    isAuthenticated && (
      <div>
        <p>{user.email}</p>
      </div>
    )
  );
};

export default UserProfile;
