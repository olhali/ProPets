import React from "react";
import {Col, Row} from "reactstrap";
import Navigation from "./Navigation";

class Content extends React.Component {

    render() {
        return (
            <div>
                <Row>
                    <Col xs={6} md={6}>
                        <p>hjhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</p>
                    </Col>
                    <Col xs={3} md={3}>
                        <img src={require(`../Images/57.jpg`)} alt='ProPets'/>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default Content;