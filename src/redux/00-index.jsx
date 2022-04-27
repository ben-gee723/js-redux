// REDUX INITIALISATION

// 1. Imports
import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

// 2. Reducers
import counterSlice from './02-counterReducer';

// 3. Set the Store
const store = configureStore({
    reducer: {
        counter: counterSlice.reducer
    }
})

// 4. Create AppProvider
function AppContextProvider({ children }) {

    // 5. Provide the store to children
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

// 6. Export Context as default
export default AppContextProvider;