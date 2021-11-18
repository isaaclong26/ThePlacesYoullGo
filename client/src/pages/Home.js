import React from "react";
// import Carousel from "../components/Carousel/index.js";
import { Card, ListGroup } from "react-bootstrap";
import "../components/css/home_style.css";

function Home() {
  return (
    <div>
      {/* <Carousel /> */}
      <Card className="my-5">
        <Card.Body className="title-card">
          <Card.Title>Are you ready to take a trip?</Card.Title>
          <Card.Subtitle>Check out the Places You'll go!</Card.Subtitle>
        </Card.Body>
        <Card.Body>
          <Card.Text>
            With this app, you and your traveling friends can :
            <ListGroup variant="flush">
              <ListGroup.Item>
                Login to check out <strong> vacation spots,</strong>{" "}
                destinations, <strong> and attractions</strong> you all would
                like to explore.
              </ListGroup.Item>
              <ListGroup.Item>View your saved destinations.</ListGroup.Item>
              <ListGroup.Item>
                {" "}
                Scroll through recommend destinations.
              </ListGroup.Item>
              <ListGroup.Item>
                Save your favorite destinations to a Bucket List!
              </ListGroup.Item>
            </ListGroup>
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <h6>
            If you are just visiting or new to the site, Click “Register” at the
            top of this page. If you have visited before and having already
            started planning your next vaycay, just “Log In” to continuing
            planning your trip.
          </h6>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Home;
