import React from "react";
import style from "../css_modules/header.module.css";
import Posts from "./Posts";
import {FaPlus, RiHeartsLine} from "react-icons/all";
import style1 from "../css_modules/favorites.module.css";

class Favorites extends React.Component {

    render() {
        return (
            <div>
                <div>
                    <button className={`btn_animation col-3 col-sm-3 offset-9 ${style.btn}`}><FaPlus/> Add new</button>
                </div>

                <RiHeartsLine className={style1.heart}/>

                <div className='flex-container'>
                    <div className='row align-items-center'>
                        <Posts className='col-9 col-sm-9'/>
                        <div className='col-3 col-sm-3'>
                            <img src={require(`../Images/love-clipart-pets.png`)} alt=''/>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
export default Favorites;