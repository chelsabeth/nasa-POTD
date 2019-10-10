// Parent === NasaGrid.js
import React from "react";
import { Col, Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

const NasaCard = props => {
  console.log("This is the card", props.data);
  return (
    <Col xs="6" sm="4" key={props.data.key}>
      <Card outline color="primary">
        <CardImg top width="100%" alt="space photo" src={props.data.url} />
        <CardBody>
          <CardTitle tag="h2">Title: {props.data.title}</CardTitle>
          <CardText>Description: {props.data.explanation}</CardText>
          <CardText>Photographer: {props.data.copyright}</CardText>
          <CardText>
            <small className="text-muted">Date Taken: {props.data.date}</small>
          </CardText>
        </CardBody>
      </Card>
    </Col>
  );
};

export default NasaCard;
