import React, {useState} from 'react';
import './App.css';
import Player from './componenets/Player';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <h1>{darkMode ? "Dark Mode" : "Light Mode"}</h1>
      <button className ='drk-btn' onClick={()=> setDarkMode(!darkMode)}>Dark Mode!</button>
      <Player/>
    </div>
  );
}

export default App;
