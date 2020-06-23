import React from 'react';
import './App.css';
import Home from './components/Home'
import About from './components/About'
// import NavMenu from './components/NavMenu'
// import Contact from './components/Contact'
// import Portfolio from './components/Portfolio'

function App() {
  return (
    <div className="App">
      {/* < NavMenu/> */}
      < Home/>
      < About/>
      {/* < Portfolio /> */}
      {/* < Contact /> */}
    </div>
  );
}

export default App;
