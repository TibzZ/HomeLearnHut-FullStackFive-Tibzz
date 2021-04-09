import React, { createContext, useContext, useReducer} from "react";
//import { useAuth0 } from "@auth0/auth0-react";
import { reducer } from "./libs/reducer";
import { initialState } from "./libs/initialState";

const AppContext = createContext(null);

export function AppProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <AppContext.Provider value={{state,dispatch}}>
            {children}
        </AppContext.Provider>
    )
}

export function UseAppContext() {
    return useContext(AppContext);
}