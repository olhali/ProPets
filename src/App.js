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

    render() {
        return (
            <Switch>
                <Route path={['/', '/start_page']} exact component={StartPage}/>
                <Route path={['/main_page', '/main_page/:id', '/main_page/services/:id', '/main_page/lost/:id', '/main_page/found/:id', '/main_page/lost/card/:petId', '/main_page/found/card/:petId']} exact render={() => <MainPage changePage={this.changePage}/>}/>
                <Route path='/reset_password' component={ResetPassword}/>
                <Route component={StartPage}/>
            </Switch>
        )
    }
}

export default App;