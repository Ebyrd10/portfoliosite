import React from 'react';
import './App.css';
import Home from './components/Home'
import About from './components/About'
import NavMenu from './components/NavMenu'

function App() {
  return (
    <div className="App">
      < NavMenu/>
      < Home/>
      < About/>
    </div>
  );
}

export default App;
