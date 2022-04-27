// REDUCER INSTANCE

import { createSlice } from "@reduxjs/toolkit";

// 1. initialState = getItem from localStorage || 0;
const defaultState = 0;
const persistedState = JSON.parse(localStorage.getItem("persistedRedux"));
let initialState = persistedState ? persistedState.counter.counter : defaultState;

// 2. Create Slice with reducer inside
const counterSlice = createSlice({
    name: 'counter',
    initialState: { value: initialState },
    reducers: {
        increment: state => {
            state.value += 1
        },
        decrement: state => {
            state.value -= 1
        }
    }
})

// 3. Export necessary functions and value
export const { increment, decrement } = counterSlice.actions;
export const countState = state => state.counter.value;

// 4. Export slice as default
export default counterSlice;