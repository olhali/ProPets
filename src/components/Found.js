import React from "react";
import style from "../css_modules/header.module.css";
import MiniCard from "./MiniCard";
import {urlCardFoundPets} from "../utils/Constants";
import AddPostLostFound from "./AddPostLostFound";
import ScrollToTop from "./ScrollToTop";
import CardFound from "./CardFound";

class Found extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            btnPostsToggle: false,
            petsInfo: [],
            error: '',
            type: '',
            breed: '',
            distinctive: '',
            location: ''
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
        fetch(`${urlCardFoundPets}`, {
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
            .then(data => this.setState({petsInfo: data}))

            .catch(error => alert('Failed to load found pets!'));
    }

    render() {
        return (
            <div>
                {this.state.btnPostsToggle ? (
                    <div>
                        <CardFound/>
                    </div>
                ) : (
                    <div>
                        <AddPostLostFound addNew={this.addNew} searchType={this.searchType} searchBreed={this.searchBreed} searchDistinctive={this.searchDistinctive} searchLocation={this.searchLocation}/>
                        <div>
                            <ScrollToTop/>
                            <div className={style.divPadding}>
                                {this.state.petsInfo.filter((cardPet) => {
                                    if (cardPet.type.toLowerCase().includes(this.state.type.toLowerCase()) && cardPet.location.toLowerCase().includes(this.state.location.toLowerCase()) && cardPet.breed.toLowerCase().includes(this.state.breed.toLowerCase()) && cardPet.distinction.toLowerCase().includes(this.state.distinctive.toLowerCase())) {
                                        return true
                                    } else {
                                        return false
                                    }
                                }).map ((cardPet) => (
                                    <MiniCard key={cardPet.id} petInfo={cardPet}/>
                                ))
                                }
                            </div>
                        </div>
                    </div>
                )
                }
            </div>
        )
    }
}
export default Found;