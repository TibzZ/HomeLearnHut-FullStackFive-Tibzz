/*
If you are not logged in you will go here first
It is a landing page where you can sign up or login to the service
Once you are logged in you are taken to the NewsFeed
*/

import AuthButton from "../AuthButton";
import css from "./Landing.module.css";

const Landing = () => {
  return (
    <div className={css.container}>
      <div className={css.backgroundImg}>
        <div className={css.containLogo}>
          <p className={css.appLogo} />
          <h1 className={css.title1}>Welcome</h1>
          <AuthButton />
        </div>
      </div>
    </div>
  );
};

export default Landing;
