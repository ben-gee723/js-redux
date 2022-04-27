import React, { useEffect } from 'react';
import './styles/App.css';
import ReactWelcome from './components/ReactWelcome';

// 1. Import redux and reducers
import { useSelector } from "react-redux";
import { countState } from './redux/02-counterReducer';

function App() {
  // 2. Declare all states to be saved
  const counter = { counter: useSelector(countState) };

  // 3. Combine states
  const persistedStore = { counter };

  // 4. Saved all states to localStorage
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
