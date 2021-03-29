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
        <h1 className={css.Title1}>Welcome</h1>
        {/* For CSS test purpose only: */}
        {/* <h2 className={css.Test}>Css Test</h2> */}
        <p className={css.AppLogo}/>
        <AuthButton />
        <p className={css.Text1}>No account yet? Click the Sign up button! </p>
        <button>Sign Up</button>
    </div>
    </div>
    );
}

export default Landing;