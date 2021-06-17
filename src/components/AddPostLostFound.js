import React from "react";
import style from "../css_modules/header.module.css";
import {Link} from "react-router-dom";
import {FaPlus} from "react-icons/all";
import MiniCard from "./MiniCard";

class AddPostLostFound extends React.Component {
    /*constructor(props) {
        super(props);
        this.state = {
            openSearch: false,
            type: ''
        }
    };*/

    /*searchType = (event) => {
        event.preventDefault();
        this.setState({
            type: event.target.value
        })
    };*/

    render() {
        return (
            <div className={`flex-container ${style.divInfo}`}>
                <div className='row'>
                    <div className='search col-2 offset-2 offset-sm-2 offset-md-1 pl-3 pl-lg-0'>
                        <input type='text' placeholder='   Type' className={style.btnInput1} onChange={(event) => {this.props.searchType(event)}}/>
                        {/*{this.props.search.filter((cardPet) => {
                            if (this.state.type === '') {
                                return cardPet
                            } else if (cardPet.type.toLowerCase().includes(this.state.type.toLowerCase())) {
                                return cardPet
                            }
                        }).map ((cardPet, index) => {
                            return (
                                <div key={index}>
                                <p> {cardPet.type} </p>
                            </div>
                            );
                        })}
                        {this.state.petsInfo.map ((cardPet,index) => (
                            <MiniCard key={index} petInfo={cardPet}/>
                        ))
                        }*/}
                    </div>
                    <div className='mrgInp col-2 pl-0 pl-lg-2'>
                        <input type='text' placeholder='  Breed' className={style.btnInput} onChange={(event) => {this.props.searchBreed(event)}}/>
                    </div>
                    <div className='mrgInp col-2 pl-0 pl-lg-2'>
                        <input type='text' placeholder='  Distinctive features' className={style.btnInput} onChange={(event) => {this.props.searchDistinctive(event)}}/>
                    </div>
                    <div className='mrgInp col-2 pl-0 pl-lg-2'>
                        <input type='text' placeholder='  Location' className={style.btnInput} onChange={(event) => {this.props.searchLocation(event)}}/>
                    </div>
                </div>
                    <div className='row'>
                            <button className={`btn_animation col-5 col-sm-4 col-md-3 col-xl-3 offset-7 offset-sm-8 offset-md-9 ${style.btnAdd}`} onClick={this.props.addNew}><FaPlus/> Add new</button>
                    </div>

            </div>

        )
    }
}
export default AddPostLostFound;