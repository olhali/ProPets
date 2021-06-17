import React from "react";
import Navigation from "./Navigation";
import Body from "./Body";
import {Col, Row} from "reactstrap";
import {authenticate} from "../utils/Constants";

class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            token: localStorage.getItem('accessToken'),
            show: false
        }
    }

    checkValidToken = () => {
        try {
       // alert('checkValidation');
            /*let token = localStorage.getItem('accessToken');*/
           fetch(`${authenticate}`, {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': this.state.token
                }})
             .then(response => {
         //   alert('before1');
            if(!response.ok){
                window.location.replace('/');
            } else {
                this.setState({
                    show: true
                })
            }
        })
    } catch (e) {
          //  alert('catch1');
        this.setState({
            //error: alert("Invalid token")
            showAuthorization: true
        })
    }
   // alert('after1');



    };

    componentWillMount() {
     //   alert('WillMount');
        this.checkValidToken();
    }

        render() {
        if (this.state.show === false) {
            return <div></div>;
        } else {
            return (
                <div className='container-fluid content'>
                    <Row>
                        <Col xs={2} sm={3} md={3} lg={3}>
                            <Navigation/>
                        </Col>
                        <Col xs={10} sm={9} md={9} lg={9}>
                            <Body/>
                        </Col>
                    </Row>
                </div>
            )
        }

        //alert('render');

        }
    }

export default MainPage;