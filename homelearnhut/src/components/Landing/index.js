/*
If you are not logged in you will go here first
It is a landing page where you can sign up or login to the service
Once you are logged in you are taken to the NewsFeed
*/

import AuthButton from "../AuthButton";
import css from "../Landing/Landing.module.css";

const Landing = () => {
    return (
    <div className={css.Box1}>
    <div className={css.BackgroundLanding}>
        <h1 className={css.title1}>Welcome</h1>
        {/* For CSS test purpose only: */}
        {/* <h2 className={css.Test}>Css Test</h2> */}
        <p className={css.AppLogo}/>
        <AuthButton />
        <p>If you haven't got an account, click the Sign up button below</p>
        <button>Sign Up</button>
    </div>
    </div>
    );
}

export default Landing;