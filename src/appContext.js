import React, { createContext, useContext, useReducer, useState } from "react";
import { reducer } from "./libs/reducer";
import { initialState } from "./libs/initialState";

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [refreshSwitch, setRefreshSwitch] = useState(true);

  return (
    <AppContext.Provider
      value={{ state, dispatch, refreshSwitch, setRefreshSwitch }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function UseAppContext() {
  return useContext(AppContext);
}
