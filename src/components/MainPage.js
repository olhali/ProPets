import React from "react";
import Navigation from "./Navigation";
import Body from "./Body";
import {Col, Row} from "reactstrap";

class MainPage extends React.Component {

        render() {
            return (
                <div className='container-fluid content'>
                    <Row>
                        <Col xs={3} md={3}>
                            <Navigation/>
                        </Col>
                        <Col xs={9} md={9}>
                            <Body/>
                        </Col>
                    </Row>
                </div>
            )
        }
    }

export default MainPage;