import React from "react";
import style from '../css_modules/login.module.css'
import {Button} from "reactstrap";

class ProfileData extends React.Component {

    render() {
        return (
            <div>
                <form name='profile' action='#' method='POST'>
                    <label htmlFor='user_email' className={style.label}>Email:</label>
                    <input id='user_email' type='email' name='email' className={style.no_frame}/><br/>

                    <label htmlFor="phone">Phone:</label>
                    <input type="tel" id="phone" name="phone"/><br/>

                    <label htmlFor="fb">Facebook link:</label>
                    <input type="url" id="fb" name="facebook"/><br/><br/>

                    <button color="secondary" onClick=''>Cancel</button>
                    <button color='success' className='submit' onClick=''>Save changes</button>
                   {/* <button color='success' className='submit' onClick={handleSave}>Save changes</button>*/}

                    {/*<input type="submit"/>*/}

                </form>
            </div>
        );
    }
}

export default ProfileData;