import React from "react";
import "./App.css";
import Landing from "../Landing";
import AppContent from "../AppContent";
import { useAuth0 } from "@auth0/auth0-react";
/*
initial idea: Top level app has 4 states ( or routes)
(- Landing pagedrills down to)
- NewsFeed page drills down to:
- MyClassroom page ( can go back )
drills down to:
- Homework viewer page ( can go back )
*/

function App() {
  const { isAuthenticated } = useAuth0();
  if (isAuthenticated) {
    return (
      <div className="App">
        <AppContent />
      </div>
    );
  }

  return (
    <div className="App">
          <Landing />
    </div>
  );
}

export default App;
