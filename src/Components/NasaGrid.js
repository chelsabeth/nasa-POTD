// This file is going to be my API request 
// Parent === App.js
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function NasaGrid() { 
    const [data, setData] = useState([]);
    
    
    useEffect(() => {
        axios 
            .get(`https://api.nasa.gov/planetary/apod?api_key=7jlU6cDiCcGyWMIEdqTnf5eisNjkqEOSFsgXTUnO`)
            .then(response => {
                console.log("Response from nasa data", response.data);
                setData(response.data);
            })
            .catch(error => {
                console.log("Sorry, an error has occured", error);
            });
    }, []);
    return null;
}
