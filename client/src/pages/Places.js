import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Places() {
    return (
        <div>
            <h1>The Places You'll Go</h1>
            <h6>Search for a City</h6>
            <Form>
                <Form.Control className="mb-2" placeholder="City"/>
                <Button type="submit" className="mb-2">Submit</Button>
            </Form>
        </div>
    );
}

export default Places;