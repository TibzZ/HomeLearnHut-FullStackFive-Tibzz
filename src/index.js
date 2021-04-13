import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import reportWebVitals from "./reportWebVitals";
import { Auth0Provider } from "@auth0/auth0-react";
import { ModalProvider } from "react-modal-hook";
import { AppProvider } from "./appContext";

ReactDOM.render(
  <Auth0Provider
    domain={process.env.REACT_APP_domainId}
    clientId={process.env.REACT_APP_clientCode}
    redirectUri={window.location.origin}
  >
    <AppProvider>
      <ModalProvider>
        <App />
      </ModalProvider>
    </AppProvider>
  </Auth0Provider>,
  document.getElementById("root")
);
reportWebVitals();
