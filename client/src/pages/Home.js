import React from "react";
import Carousel from "../components/Carousel";
import { ListGroup } from "react-bootstrap";
import "../components/css/home_style.css";
function Home() {
  return (
    <div>
      <Carousel />
      <h1>Are you ready to take a trip?</h1>
      <h4>Check out the Places You'll go!</h4>
      <p>With this app, you and your traveling friends can :</p>

      <ListGroup>
        <ListGroup.Item>
          Login to check out <strong> vacation spots,</strong>{" "}
          <strong> destinations </strong>, and <strong> attractions</strong> you
          all would like to explore.
        </ListGroup.Item>
        <ListGroup.Item>View your saved destinations.</ListGroup.Item>
        <ListGroup.Item> Scroll through recommend destinations.</ListGroup.Item>
        <ListGroup.Item>
          Save your favorite destinations to a Bucket List!
        </ListGroup.Item>
      </ListGroup>

      <h6>
        If you are just visiting or new to the site, Click "Register" at the top
        of this page. If you have visited before and having already started
        planning your next vaycay, just "Log In" to continuing planning your
        trip.
      </h6>
    </div>
  );
}
export default Home;
