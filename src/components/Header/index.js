
import AuthButton from "../AuthButton";
import css from "./Header.module.css";
import logo from "../../assets/LogoApp.gif";
import { useHistory } from "react-router-dom";

function Header(){
    const history = useHistory();
    console.log(`My history is ${history}`);
    const navigateHome = () => history.push('/');

    return(
        <div className={css.header}>
          <div className={css.leftHeader}>
            <div className={css.logo}>
              <button onClick={navigateHome} className={css.logo}>
                <img src={logo} alt="logo" />
              </button>
            </div>
            <div>
              <button className={css.logoBtn} onClick={navigateHome}>
                <h1 className={css.title}>HomeLearn Hut</h1>
              </button>
            </div>
          </div>
          <div>
            <AuthButton />
          </div>
        </div>
    )
}

export default Header;