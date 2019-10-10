// Parent === NasaGrid.js
import React from "react";

const NasaCard = props => {
  return (
    <div key={props.key}>
      <h2>Title: {props.title}</h2>
      <img alt="space photo" src={props.imgUrl} />
      <h3>Photographer: {props.photographer}</h3>
      <p>Date Taken: {props.date}</p>
      <p>Description: {props.description}</p>
    </div>
  );
};

export default NasaCard;
