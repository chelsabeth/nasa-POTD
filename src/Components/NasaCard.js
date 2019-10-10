// Parent === NasaGrid.js
import React from "react";

const NasaCard = props => {
  console.log("This is the card", props.data);
  return (
    <div key={props.data.key}>
      <h2>Title: {props.data.title}</h2>
      <img alt="space photo" src={props.data.url} />
      <h3>Photographer: {props.data.copyright}</h3>
      <p>Date Taken: {props.data.date}</p>
      <p>Description: {props.data.explanation}</p>
    </div>
  );
};

export default NasaCard;
