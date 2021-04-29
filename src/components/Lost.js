import React from "react";
import style from "../css_modules/header.module.css";
import {FaPlus} from "react-icons/all";
import {Link} from "react-router-dom";
import LostPetRoute from "./LostPetRoute";
import MiniCard from "./MiniCard";



class Lost extends React.Component {

    render() {
        return (
            <div>
                <div>
                    <Link to='/main_page/lost/card_lost'>
                        <button className={`btn_animation col-3 col-sm-3 offset-9 ${style.btn}`}><FaPlus/> Add new</button>
                    </Link>
                </div>
            {/*    <div>
                    <MiniCard/>
                </div>*/}

                <div className='flex-container'>
                        <LostPetRoute/>
                </div>
            </div>

            /*<Switch>
            <Route path='/main_page/lost/card_lost' component={PhotoUpload}/>
            <Route path='/main_page/lost/card_found' component={CardFound}/>
            </Switch>
*/
            /*<div>

                    <Link to='/main_page/lost/card_lost' className={`btn_animation col-3 col-sm-3 offset-9 ${style.btn}`}><FaPlus/> Add new</Link>
                    {/!*<button onClick={() => this.clickCardLostHandler()} className={`btn_animation col-3 col-sm-3 offset-9 ${style.btn}`}><FaPlus/> Add new</button>*!/}

            </div>*/
        )
    }
}
export default Lost;