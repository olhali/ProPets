import React from "react";
import style from "../css_modules/login.module.css";
import {FaPaw, MdClose, VscDebugBreakpointUnsupported} from "react-icons/all";
import {Link} from "react-router-dom";
import PhotoUpload from "./PhotoUpload";
/*import style from "../css_modules/header.module.css";*/

class CardFound extends React.Component {

    render() {
        return (
            <form name='found'>
                <fieldset>
                    <legend className={style.legendFound}><strong>Found a pet? Fill in all the data and publish!</strong></legend>
                    <label htmlFor='pets' className={style.label}><strong>F O U N D : </strong><span className={style.requiredFields}>*</span></label>
                    <input id='pets' type='text' name='pets' list="petsList" title="Choose a pet that is lost" placeholder='Choose a pet that is lost' autoComplete='off' className={style.no_frame}/>
                    <datalist id="petsList">
                        <option value="Another pet..."/>
                        <option value="Bird"/>
                        <option value="Cat"/>
                        <option value="Cavy"/>
                        <option value="Chinchilla"/>
                        <option value="Dog"/>
                        <option value="Farm animal (Livestock)"/>
                        <option value="Ferret"/>
                        <option value="Hamster"/>
                        <option value="Mini Pig"/>
                        <option value="Mouse"/>
                        <option value="Parrot"/>
                        <option value="Rabbit"/>
                        <option value="Rat"/>
                        <option value="Snake"/>
                        <option value="Spider"/>
                        <option value="Turtle"/>
                    </datalist>
                    <br/>

                    <label htmlFor='color' className={style.label}>Color: <span className={style.requiredFields}>*</span></label>
                    <input id='color' type='text' name='color' list="colorList" title="Select the color of the pet" placeholder='Select the color of the pet' autoComplete='off' className={style.no_frame}/>
                    <datalist id="colorList">
                        <option value="Multicolored"/>
                        <option value="Ash"/>
                        <option value="Beige"/>
                        <option value="Black"/>
                        <option value="Blue"/>
                        <option value="Brown"/>
                        <option value="Dark Blue"/>
                        <option value="Dark Brown"/>
                        <option value="Dark Green"/>
                        <option value="Dark Grey"/>
                        <option value="Ginger"/>
                        <option value="Golden"/>
                        <option value="Grey"/>
                        <option value="Green"/>
                        <option value="Motley"/>
                        <option value="Pink"/>
                        <option value="Red"/>
                        <option value="White"/>
                        <option value="Yellow"/>
                    </datalist>
                    <br/>

                    <label htmlFor='sex' className={style.label}>Sex: <span className={style.requiredFields}>*</span></label><br/>
                    <input type="radio" id="male" name="sex" value="male"/>
                    <label htmlFor="male">Male</label><br/>
                    <input type="radio" id="female" name="sex" value="female"/>
                    <label htmlFor="female">Female</label><br/>
                    <input type="radio" id="unknown" name="sex" value="unknown"/>
                    <label htmlFor="unknown">Unknown</label><br/>

                    <label htmlFor='height' className={style.label}>Height/ cm:</label>
                    <input id='height' type='number' name='height' min="1" title="Enter the approximate height/size of the pet" placeholder='Enter the approximate height/size of the pet' autoComplete='off' className={style.no_frame}/><br/><br/>

                    <label htmlFor='distinction' className={style.label}>Distinctive features:</label>
                    <textarea id='distinction' rows="2" cols="40" name='distinction' title='Enter the distinctive features of the pet' placeholder='Enter the distinctive features of the pet' autoComplete='off' className={style.no_frame}/><br/><br/>

                    <label htmlFor='description' className={style.label}>Description:</label>
                    <textarea id='description' rows="3" cols="40" name='description' title='Describe of the pet' placeholder='Describe of the pet' autoComplete='off' className={style.no_frame}/><br/>

                    <label htmlFor='location' className={style.label}>Location: <span className={style.requiredFields}>*</span></label>
                    <input id='location' type='location' name='location' title='Location of the pet' placeholder='Location of the pet' autoComplete='off' className={style.no_frame}/><br/>

                    <div>
                        <label htmlFor='photo' className={style.label}>Pet photo:</label>
                        <PhotoUpload/>
                    </div>
                    <br/>

                    <label htmlFor='date' className={style.label}>Date: <span className={style.requiredFields}>*</span></label>
                    <input id='date' type='date' name='date' title='Date' placeholder='Date' autoComplete='off' className={style.no_frame}/><br/>

                    <label htmlFor='tel' className={style.label}>Phone number:</label>
                    <input id='tel' type='tel' name='tel' title='Enter your phone number for communication' placeholder='Enter your phone number' pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" className={style.no_frame}/><br/>
                    <br/>

                    <br/>
                    <p><VscDebugBreakpointUnsupported className={style.footnote}/> Fields with <strong className={style.requiredFields}>*</strong> are required !</p>

                    <button type='submit' className={style.publish}><FaPaw/> Publish</button>

                    <Link to='/main_page/lost'>
                        <button color="secondary" className={style.cancel}><MdClose/>Cancel</button>
                    </Link>
                </fieldset>
            </form>
        );
    }
}
export default CardFound;