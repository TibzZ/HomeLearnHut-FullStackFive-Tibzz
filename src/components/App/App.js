import css from "./App.module.css";
import Landing from "../Landing";
import { useAuth0 } from "@auth0/auth0-react";
import AppContent from "../AppContent";

function App() {
  const { isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    return (
      <div className={css.wrapper}>
        <a name="1"></a>
        <AppContent />
      </div>
    );
  }

  return (
    <div className={css.AppStyle}>
      <Landing />
    </div>
  );
}

export default App;
