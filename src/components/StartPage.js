import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Authorization from "./Authorization";
import {authenticate} from "../utils/Constants";

class StartPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showAuthorization: false,
            token: localStorage.getItem('accessToken')
        }
    }

    clickShowAuthorizationHandler = () => {
        this.setState({
            showAuthorization: true
        })
    };

    hideAuthorization = () => {
        this.setState ({
            showAuthorization: false
        })
    };


    checkValidToken = async (token) => {
        try {
            /*let token = localStorage.getItem('accessToken');*/
            const response = await fetch(`${authenticate}`, {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': token
                }})
                .then(response => {
                    console.log('before');
                    if(!response.ok){
                        /*this.setState({
                            showAuthorization: true
                        })*/
                    } else {
                        window.location.replace('/main_page');
                    }
                })
        } catch (e) {
            this.setState({
                //error: alert("Invalid token")
                showAuthorization: true
            })
        }
        console.log('after');
    };

    componentWillMount() {
        this.checkValidToken(this.state.token);
    }

    render() {
        return (
            <div className='container-fluid content'>
                <Header changePage={this.props.changePage} showAuthorization={this.clickShowAuthorizationHandler}/>
                <Main changePage={this.props.changePage} showAuthorization={this.clickShowAuthorizationHandler}/>
                <Footer changePage={this.props.changePage} showAuthorization={this.clickShowAuthorizationHandler}/>
                <Authorization changePage={this.props.changePage} showAuthorization1={this.state.showAuthorization} hideAuthorization1={this.hideAuthorization}/>
            </div>
        )
    }
}

export default StartPage;


