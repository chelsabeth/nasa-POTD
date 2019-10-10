import React from "react";
import "./App.css";
import NasaGrid from "./Components/NasaGrid";
import '../node_modules/pikaday/css/pikaday.css';

function App() {
  return (
    <div className="App">
      <h3>Pick A Date:</h3><input type="date" id="datepicker"></input>
     <h1>Welcome Space Lovers! <span>🚀 👽 👾</span></h1>
     <NasaGrid /> 
    </div>
  );
}

export default App;
