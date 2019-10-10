// This file is going to be my API request
// Parent === App.js
import React, { useState, useEffect } from "react";
import NasaCard from "./NasaCard";

export default function NasaGrid(props) {


  return (
    <NasaCard
      data={props.data}
    />
  );
}
