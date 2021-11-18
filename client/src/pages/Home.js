import React from "react";
// import Carousel from "../components/Carousel/index.js";
import { Container, Row, Col } from 'react-bootstrap';

function Home() {
    return (
        <>
            {/* <Carousel /> */}
            <Container className="my-5">
                <Row>
                    <Col data-aos="fade-up" className="m-4 default">
                        <h1>Are you ready to take a trip?</h1>
                        <p>
                            Check out the Places You'll go!</p>

                        With this app, you and your traveling friends can :
                            <ul><li>Login to check out  <strong> vacation spots,</strong> destinations, <strong> and attractions</strong>  you all would like to explore.</li>
                            <li>View your saved destinations.</li>
                            <li> Scroll through recommend destinations.</li>
                            <li>Save your favorite destinations to a Bucket List!</li>
                        </ul>
                        <p>Prepare for your next getaway with The Places Youll Go!</p>
                        <hr />
                        <h6>If you are just visiting or new to the site, Click “Register” at the top of this page. If you have visited before and having already started planning your next vaycay, just “Log In” to continuing planning your trip.</h6>
                    </Col >
                </Row>
            </Container>

        </>
    );
};

export default Home;