import React from "react";
import style from '../css_modules/login.module.css'

class ProfileData extends React.Component {

    render() {
        return (
            <div>
                <form name='profile' action='#' method='POST'>
                    <label for='user_email' className={style.label}>Email:</label>
                    <input id='user_email' type='email' name='email' className={style.no_frame}/><br/>

                    <label for="phone">Phone:</label>
                    <input type="tel" id="phone" name="phone"/><br/>

                    <label for="fb">Facebook link:</label>
                    <input type="url" id="fb" name="facebook"/><br/><br/>

                    <input type="submit"/>

                </form>
            </div>
        );
    }
}

export default ProfileData;