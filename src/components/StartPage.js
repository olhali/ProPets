import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Authorization from "./Authorization";

class StartPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showAuthorization: false
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


