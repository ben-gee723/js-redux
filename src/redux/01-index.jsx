import React from "react";

// Import Redux
import { Provider } from "react-redux";

// import Store
import store from './00-store'

// Create AppProvider
export function AppProvider({ children }) {
    // Provide the store to children
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}
