import { configureStore } from "@reduxjs/toolkit";

// Import Reducers
import counterSlice from './02-counterReducer';

// getItem
const persistedStore = JSON.parse(localStorage.getItem("persistedRedux"))
// console.log(persistedStore)
let counter = persistedStore ? persistedStore : initialReducers;

console.log("counterSlice.initialState", counterSlice.initialState)

// Import reducers
export default configureStore({
    reducer: {
        counter: counterSlice.reducer
    }
})
