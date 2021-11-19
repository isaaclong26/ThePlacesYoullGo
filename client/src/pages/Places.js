import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../components/css/Places_style.css";

function Places() {
    return (
        <div className="searchBar">
            <div>
                <h1>The Places You'll Go</h1>
                <h6>Search for a City</h6>
              <Form>
                  <Form.Control className="mb-2"/>
                  <Button type="submit" className="mb-2">Submit</Button>
              </Form>
            </div>
            <div>
                <h1>My Places</h1>
            </div>
        </div>
    );
}

export default Places;