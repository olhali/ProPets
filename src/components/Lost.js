import React from "react";
import style from "../css_modules/header.module.css";
import {FaPlus} from "react-icons/all";
import {Link} from "react-router-dom";
import MiniCard from "./MiniCard";
import CardLost from "./CardLost";
import {urlCardLostPets} from "../utils/Constants";
import AddPostLostFound from "./AddPostLostFound";
import ScrollToTop from "./ScrollToTop";
import LostPetCardId from "./LostPetCardId";
import {BeatLoader} from "react-spinners";

class Lost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           /* nameProfile: this.props.nameProfile,*/
            btnPostsToggle: false,
            petsInfo: [],
            error: '',
            type: '',
            breed: '',
            distinctive: '',
            location: '',
            loading: true
        }
    };

    addNew = () => {
        this.setState({
            btnPostsToggle: true
        })
    };

    searchType = (e) => {
        this.setState({
            type: e.target.value
        })
    };
    searchBreed = (e) => {
        this.setState({
            breed: e.target.value
        })
    };
    searchDistinctive = (e) => {
        this.setState({
            distinctive: e.target.value
        })
    };
    searchLocation = (e) => {
        this.setState({
            location: e.target.value
        })
    };

    componentWillMount () {
        let token = localStorage.getItem('accessToken');
        //alert(token);
        fetch(`${urlCardLostPets}`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Authorization': token
            }
        })
            .then((response) => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw new Error(response.statusText);
                }
            })
            .then(data => {this.setState({
                loading: false,
                petsInfo: data
            })})

            .catch(error => alert('Failed to load lost pets!'));
    }

    render() {
        return (
            <div>
                {this.state.btnPostsToggle ? (
                    <div>
                        <CardLost/>
                    </div>
                ) : (
                    <div>
                        <AddPostLostFound addNew={this.addNew} searchType={this.searchType} searchBreed={this.searchBreed} searchDistinctive={this.searchDistinctive} searchLocation={this.searchLocation}/>
                        <div>
                            <ScrollToTop/>
                            {this.state.loading ? (
                                <div>
                                    <p className={style.loading}><strong>Loading</strong></p>
                                    <div className={style.loader}>
                                        <BeatLoader loading size={28} color='rgb(67, 185, 124)'/>
                                    </div>
                                </div>
                                ) : (
                                <div className={style.divPadding}>
                                {this.state.petsInfo.filter((cardPet) => {
                                        if (cardPet.type.toLowerCase().includes(this.state.type.toLowerCase()) && cardPet.location.toLowerCase().includes(this.state.location.toLowerCase()) && cardPet.breed.toLowerCase().includes(this.state.breed.toLowerCase()) && cardPet.distinction.toLowerCase().includes(this.state.distinctive.toLowerCase())) {
                                            return true
                                        } else {
                                            return false
                                        }
                                        /*if (this.state.type === '') {
                                            return true*/
                                    }).map ((cardPet) => (
                                        <MiniCard key={cardPet.id} petInfo={cardPet}/>
                                    ))
                                }
                                </div>
                            )}
                        </div>
                    </div>
                )
                }
            </div>
        )
    }
}
export default Lost;


/*  if (this.state.breed.length>0 && cardPet.breed === null) {
                               return false
                           }
                           else if (this.state.breed.length===0) {
                               if (cardPet.type.toLowerCase().includes(this.state.type.toLowerCase()) && cardPet.location.toLowerCase().includes(this.state.location.toLowerCase())) {
                                   return true
                               } else {
                                   return false
                               }
                           }
                           else if (this.state.breed.length > 0) {
                           if (cardPet.type.toLowerCase().includes(this.state.type.toLowerCase()) && cardPet.location.toLowerCase().includes(this.state.location.toLowerCase()) && cardPet.breed.toLowerCase().includes(this.state.breed.toLowerCase()) && cardPet.distinctive.toLowerCase().includes(this.state.distinctive.toLowerCase())) {
                                   return true
                               } else {
                                   return false
                               }}
                        */
/*   if (cardPet.type.toLowerCase().includes(this.state.type.toLowerCase()) && cardPet.location.toLowerCase().includes(this.state.location.toLowerCase()) && cardPet.breed.toLowerCase().includes(this.state.breed.toLowerCase()) ) {*/


/*selectActiveComponent = (activeComponent) => {
        this.setState({
            activeComponent
        });
    };

    btnPostsToggle = () => {
        if (this.state.activeComponent === miniCard) {
            return <MiniCard/>;
        } else if (this.state.activeComponent === cardLost) {
            return <CardLost/>
        }
    };
*/

/*
<div>
                        <button className={`btn_animation col-3 col-sm-3 offset-9 ${style.btn}`} onClick={() => this.selectActiveComponent(cardLost)}><FaPlus/> Add new</button>
                    <Link to='/main_page/lost/card_lost'>
                        <button className={`btn_animation col-3 col-sm-3 offset-9 ${style.btn}`} onClick={() => this.selectActiveComponent(cardLost)}><FaPlus/> Add new</button>
                    </Link>
                </div>
                <div>
                    {this.btnPostsToggle()}
                </div>

{/!* <div className='flex-container'>
                        <LostPetRoute/>
                </div>*!/}

  this.state.petInfos.map(petInfo => {
<MiniCard petInfo={petInfo}></MiniCard>
})*!/

/!*<Switch>
<Route path='/main_page/lost/card_lost' component={PhotoUpload}/>
<Route path='/main_page/lost/card_found' component={CardFound}/>
</Switch>
*!/
/!*<div>

        <Link to='/main_page/lost/card_lost' className={`btn_animation col-3 col-sm-3 offset-9 ${style.btn}`}><FaPlus/> Add new</Link>
        {/!*<button onClick={() => this.clickCardLostHandler()} className={`btn_animation col-3 col-sm-3 offset-9 ${style.btn}`}><FaPlus/> Add new</button>*!/}

</div>*/
