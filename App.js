import React from 'react';
import Home from './Home';
import './App.css';

import { createContext,useState } from 'react';

export const ThemeContext = createContext(null);

function App() {
  const[theme,setTheme]= useState("light");

  const buttonTheme =() =>{
    setTheme((curr)=>(curr === "light"?"dark":"light"))
  };

  return (
    <ThemeContext.Provider value={{theme,buttonTheme}}>
      <div className="App" id="light">  
        <Home />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
