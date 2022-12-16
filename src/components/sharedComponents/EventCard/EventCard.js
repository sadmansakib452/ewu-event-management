import React from "react";
import "./EventCard.css";
import logo1 from "../../../images/FLASH 1.svg";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const EventCard = () => {
  return (
    <div>
      <div className="card-container mt-4">
        <Card style={{ width: "19rem" }}>
          <Card.Body>
            <Card.Img variant="top" src={logo1} />
            <Card.Title className="text-center">Flash MOM</Card.Title>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default EventCard;
