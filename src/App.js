import React from 'react';
import http from 'http';
import './App.css';
import StartPage from "./components/StartPage";
import MainPage from "./components/MainPage";
import {Route, Switch} from "react-router-dom";
import ResetPassword from "./components/ResetPassword";
import CardLost from "./components/CardLost";
import CardFound from "./components/CardFound";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'start_page'
        }
    }

   /* componentDidMount() {
        this.func1();
        this.func2();
        this.func3();
        this.func4();
        this.func5();

    }

    func1(){
        var options = {
            host: 'https://propets-eurekaservice.herokuapp.com/',
            port: 80,
            path: '/'
        };
        http.get(options, function(res) {
            res.on('data', function(chunk) {
                try {
                    // optional logging... disable after it's working
                    console.log("HEROKU RESPONSE: " + chunk);
                } catch (err) {
                    console.log(err.message);
                }
            });
        }).on('error', function(err) {
            console.log("Error: " + err.message);
        });
    }

    func2(){
        var options = {
            host: 'https://propets-auth-service.herokuapp.com/',
            port: 80,
            path: '/'
        };
        http.get(options, function(res) {
            res.on('data', function(chunk) {
                try {
                    // optional logging... disable after it's working
                    console.log("HEROKU RESPONSE: " + chunk);
                } catch (err) {
                    console.log(err.message);
                }
            });
        }).on('error', function(err) {
            console.log("Error: " + err.message);
        });
    }

    func3(){
        var options = {
            host: 'http://propets-lostandfoundservice.herokuapp.com/',
            port: 80,
            path: '/'
        };
        http.get(options, function(res) {
            res.on('data', function(chunk) {
                try {
                    // optional logging... disable after it's working
                    console.log("HEROKU RESPONSE: " + chunk);
                } catch (err) {
                    console.log(err.message);
                }
            });
        }).on('error', function(err) {
            console.log("Error: " + err.message);
        });
    }

    func4(){
        var options = {
            host: 'https://propets-gateway.herokuapp.com/',
            port: 80,
            path: '/'
        };
        http.get(options, function(res) {
            res.on('data', function(chunk) {
                try {
                    // optional logging... disable after it's working
                    console.log("HEROKU RESPONSE: " + chunk);
                } catch (err) {
                    console.log(err.message);
                }
            });
        }).on('error', function(err) {
            console.log("Error: " + err.message);
        });
    }

    func5(){
        var options = {
            host: 'https://propets-elastic-service.herokuapp.com/',
            port: 80,
            path: '/'
        };
        http.get(options, function(res) {
            res.on('data', function(chunk) {
                try {
                    // optional logging... disable after it's working
                    console.log("HEROKU RESPONSE: " + chunk);
                } catch (err) {
                    console.log(err.message);
                }
            });
        }).on('error', function(err) {
            console.log("Error: " + err.message);
        });
    }*/



    /*changePage = (page) => {
        this.setState({
            page: page
        })
    };*/

    render() {
        return (
            <Switch>
                <Route path={['/', '/start_page']} exact component={StartPage}/>
               {/* <Route path={['/main_page', '/main_page/:id', '/main_page/services/:id', '/main_page/lost/card/:petId', '/main_page/found/card/:petId']} exact render={() => <MainPage changePage={this.changePage}/>}/>*/}
                <Route path={['/main_page', '/main_page/:id', '/main_page/services/:id', '/main_page/lost/:id', '/main_page/found/:id', '/main_page/lost/card/:petId', '/main_page/found/card/:petId']} exact render={() => <MainPage changePage={this.changePage}/>}/>
            {/*<Route path={['/main_page', '/main_page/:id', '/main_page/services/:id', '/main_page/lost/:id', '/main_page/found/:id']} exact render={() => <MainPage changePage={this.changePage}/>}/>*/}
           {/*     <Route path='/main_page/lost/card_lost' exact component={CardLost}/>
                <Route path='/main_page/found/card_found' exact component={CardFound}/>*/}
               {/* <Route path='/main_page' render={(props) => (<MainPage {...props} changePage={this.changePage}/>)}/>*/}
             {/*   <Route path='/main_page/lost/:id' component={CardLost}/>*/}
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
