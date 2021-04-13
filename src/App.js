import React from 'react';
import './App.css';
import StartPage from "./components/StartPage";
import MainPage from "./components/MainPage";
import {Route, Switch} from "react-router-dom";
import ResetPassword from "./components/ResetPassword";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'start_page'
        }
    }

    /*changePage = (page) => {
        this.setState({
            page: page
        })
    };*/

    render() {
        return (
            <Switch>
                <Route path={['/', '/start_page']} exact component={StartPage}/>
                <Route path={['/main_page', '/main_page/:id', '/main_page/services/:id']} exact render={() => <MainPage changePage={this.changePage}/>}/>
               {/* <Route path='/main_page' render={(props) => (<MainPage {...props} changePage={this.changePage}/>)}/>*/}
                <Route path='/reset_password' component={ResetPassword}/>
                <Route component={StartPage}/>
            </Switch>
        )
    }
}

export default App;


/*import React from 'react';
import './App.css';
import StartPage from "./components/StartPage";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Authorization from "./components/Authorization";
import MainPage from "./components/MainPage";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'StartPage'
        }
    }

    changePage = (page) => {
        this.setState({
            page: page
        })
    };

    switchPage = () => {
        switch (this.state.page) {
            case 'StartPage':
                return (<StartPage changePage={this.changePage}/>);
            /!*case 'Authorization':
                return (<Authorization changePage={this.changePage}/>);
            case 'Login':
                return (<Login changePage={this.changePage}/>);
            case 'Registration':
                return (<Registration changePage={this.changePage}/>);*!/
            case 'MainPage':
                return (<MainPage changePage={this.changePage}/>);
            default:
                return (<StartPage/>);
        }
    };

    render() {
        return this.switchPage();
    }
}

export default App;*/
