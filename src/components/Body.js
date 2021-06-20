import React from "react";
import {Route, Switch} from "react-router-dom";
import Home from "./Home";
import Lost from "./Lost";
import Found from "./Found";
import Favorites from "./Favorites";
import Profile from "./Profile";
import Hotels from "./Hotels";
import Walking from "./Walking";
import Fostering from "./Fostering";
import VetHelp from "./VetHelp";
import LostPetCardId from "./LostPetCardId";
import FoundPetCardId from "./FoundPetCardId";
import Care from "./Care";

class Body extends React.Component {

    render() {
        return (
            <Switch>
                <Route path='/main_page/home' component={Home}/>
               <Route path="/main_page/lost/card/:petId" component={LostPetCardId}/>
               <Route path='/main_page/lost' component={Lost}/>
                <Route path="/main_page/found/card/:petId" component={FoundPetCardId}/>
                <Route path='/main_page/found' component={Found}/>
                <Route path='/main_page/services/hotels' component={Hotels}/>
                <Route path='/main_page/services/walking' component={Walking}/>
                <Route path='/main_page/services/fostering' component={Fostering}/>
                <Route path='/main_page/services/vet_help' component={VetHelp}/>
                <Route path='/main_page/services/care' component={Care}/>
                <Route path='/main_page/favorites' component={Favorites}/>
                <Route path='/main_page/profile' component={Profile}/>
                <Route component={Home}/>
            </Switch>
        )
    }
}
export default Body;