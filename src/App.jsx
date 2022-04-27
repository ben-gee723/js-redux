import React, { useEffect } from 'react';
import './styles/App.css';
import ReactWelcome from './components/ReactWelcome';

import { useSelector } from "react-redux";
import { selectCount } from './redux/02-counterReducer';

function App() {
  const counter = { counter: useSelector(selectCount) };

  const persistedStore = { counter: counter };
  useEffect(() => {
    localStorage.setItem("persistedRedux", JSON.stringify(persistedStore))
  }, [counter])

  return (
    <div className="App">
      <header className="App-header">
        <ReactWelcome />
      </header>
    </div>
  )
}

export default App
