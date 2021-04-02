import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import css from "../LoginButton/LoginButton.module.css";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div>
      <button className={css.Button1} onClick={() => loginWithRedirect()}>
        Log In
      </button>
      <p className={css.Text1}>No account yet? Click the Sign up button!</p>
      <button className={css.button2} onClick={() => loginWithRedirect()}>
        Sign Up
      </button>
    </div>
  );
};

export default LoginButton;
