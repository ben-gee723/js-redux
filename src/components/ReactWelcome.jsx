import React, { useState } from 'react';
import logo from '../media/logo.svg';

import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, countState } from '../redux/02-counterReducer'


function ReactWelcome() {
    const count = useSelector(countState);
    const dispatch = useDispatch()

    return (
        <>
            <img src={logo} className="App-logo" alt="logo" />
            <p>Hello Vite + React!</p>
            <div>
                <h3>count is: {count} </h3>
                <button type="button" onClick={() => dispatch(increment())} >
                    Increase
                </button>
                <button type="button" onClick={() => dispatch(decrement())} >
                    Decrease
                </button>
            </div>
            <p>
                Edit <code>App.jsx</code> and save to test HMR updates.
            </p>
            <p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                {' | '}
                <a
                    className="App-link"
                    href="https://vitejs.dev/guide/features.html"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Vite Docs
                </a>
            </p></>
    )

}

export default ReactWelcome;