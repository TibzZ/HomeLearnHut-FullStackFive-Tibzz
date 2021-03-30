/*
If you are not logged in you will go here first
It is a landing page where you can sign up or login to the service
Once you are logged in you are taken to the NewsFeed
*/

import AuthButton from "../AuthButton";
import css from "../Landing/Landing.module.css";

const Landing = () => {
    return (
    <div className={css.container}>

        {/* <div className="item">1
        
        </div>
        
        <div className="item">2</div>
           
        <div className="item">3</div>
           
        <div className="item">4</div>
         
        <div className="item">5</div> */}


    <div className={css.BackgroundLanding}>
        <h1 className={css.Title1}>Welcome</h1>
        <p className={css.AppLogo}/>
        <AuthButton />
        <p className={css.Text1}>No account yet? Click the Sign up button! </p>
        <button>Sign Up</button>
    </div>

    </div>
    );
}

export default Landing;