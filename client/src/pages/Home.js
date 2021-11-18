import React from "react";
import Carousel from "../components/Carousel";
import { Card, ListGroup } from "react-bootstrap";
import "../components/css/home_style.css";
function Home() {
    return (
        <div>
            <Carousel />
                    <h2>Are you ready to take a trip?</h2>
                    <h4>Check out the Places You'll go!</h4>
                    <p>With this app, you and your traveling friends can"</p>
                        <ListGroup variant="flush">
                            <ListGroup.Item>Login to check out  <strong> vacation spots,</strong> destinations, <strong> and attractions</strong>  you all would like to explore.</ListGroup.Item>
                            <ListGroup.Item>View your saved destinations.</ListGroup.Item>
                            <ListGroup.Item> Scroll through recommend destinations.</ListGroup.Item>
                            <ListGroup.Item>Save your favorite destinations to a Bucket List!</ListGroup.Item>
                        </ListGroup>
        </div>
    );
};
export default Home;
