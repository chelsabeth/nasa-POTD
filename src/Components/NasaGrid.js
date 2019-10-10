// This file is going to be my API request
// Parent === App.js
import React from "react";
import NasaCard from "./NasaCard";
import { Container, Row } from "reactstrap";

export default function NasaGrid(props) {
  return (
    <Container>
      <Row>
        <NasaCard data={props.data} />
      </Row>
    </Container>
  );
}
