import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import NasaGrid from "./Components/NasaGrid";
import '../node_modules/pikaday/css/pikaday.css';
// import styled from "styled-components";

// const StyledApp=styled.div`
//   width: 100%;
//   h1 {
//     font-size: 20px;
//   }
// `;

function App() {
  const [picture, setPicture] = useState({});
  const [date, setDate] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`
      )
      .then(response => {
        console.log("Response from nasa data", response.data);
        setPicture(response.data);
      })
      .catch(error => {
        console.log("Sorry, an error has occured", error);
      });
  }, [date]);



const pickDate = () => {
  setDate(document.getElementById("datepicker").value)
}


  return (
    <div className="App">
      <input type="date" id="datepicker"></input>
      <button onClick={() => {pickDate()}}>Submit</button>
     <h1>Welcome Space Lovers! <span>🚀 👽 👾</span></h1>
     <NasaGrid data={picture}/> 
    </div>
  );
}

export default App;
