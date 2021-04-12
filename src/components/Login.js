import React, {useState} from "react";
import style from '../css_modules/login.module.css'
import ForgotPassword from "./ForgotPassword";

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModalForEmailEntry: false
        }
    }

    clickShowModalForEmailEntryHandler = () => {
        this.setState({
            showModalForEmailEntry: true
        })
    };

    hideModalForEmail = () => {
        this.setState ({
            showModalForEmailEntry: false
        })
    };


    render() {
        return (
            <div>
                 <form name='login'>
                        <label htmlFor='user_email' className={style.label}>Email:</label>
                        <input id='user_email' type='email' name='email' title="Enter your email" placeholder='Enter your email' autoComplete='off' required className={style.no_frame} onChange={(event) => {this.props.handleEmail(event)}}/><br/>

                        <label htmlFor='user_password' className={style.label}>Password:</label>
                        <input id='user_password' type='password' name='password' title='Enter your password' placeholder='Enter your password' autoComplete='off' required className={style.no_frame} onChange={(event) => {this.props.handlePassword(event)}}/><br/>

                        <br/>
                     <p className={`position-fixed ${style.btn_forgot}`} onClick={() => this.clickShowModalForEmailEntryHandler()}><ins>Forgot password?</ins></p><br/><br/>
                     <ForgotPassword showModalForEmailEntry={this.state.showModalForEmailEntry} hideModalForEmail={this.hideModalForEmail}/>
                        {/* <a href='#'>Forgot password?</a>*/}
                 </form>
            </div>
        );
    }
}

export default SignIn;



/*import React from "react";
import style from '../css_modules/login.module.css'

class SignIn extends React.Component {

    render() {
        return (
            <div>
                <form name='login' action='#' method='POST'>
                    <label htmlFor='user_email' className={style.label}>Email:</label>
                    <input id='user_email' type='email' name='email' title="Enter your email" placeholder='Enter your email' autoComplete='off' required className={style.no_frame}/><br/>

                    <label htmlFor='user_password' className={style.label}>Password:</label>
                    <input id='user_password' type='password' name='password' title='Enter your password' placeholder='Enter your password' autoComplete='off' required className={style.no_frame}/><br/>

                    <br/>
                    <p className={`position-fixed ${style.btn_forgot}`}><ins>Forgot password?</ins></p><br/><br/>
                    {/!* <a href='#'>Forgot password?</a>*!/}
                </form>
            </div>
        );
    }
}

export default SignIn;*/



/*import React from "react";
import style from '../css_modules/login.module.css'

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showHideLogin: true
        };
        this.hideComponent = this.hideComponent.bind(this);
    }

    hideComponent = (showHideLogin) => {
        this.setState({
            showHideLogin: !this.state.showHideLogin
        })
    };

    render() {
        const {showHideLogin} = this.state;
        return (
            <div>
                <button className='modal-authorization' onClick={() => this.hideComponent("showHideLogin")}>Sign in</button>
                {showHideLogin && (
                    <form name='login' action='#' method='POST'>
                        <label htmlFor='user_email' className={style.label}>Email:</label>
                        <input id='user_email' type='email' name='email' title="Enter your email" placeholder='Enter your email' autoComplete='off' required className={style.no_frame}/><br/>

                        <label htmlFor='user_password' className={style.label}>Password:</label>
                        <input id='user_password' type='password' name='password' title='Enter your password' placeholder='Enter your password' autoComplete='off' required className={style.no_frame}/><br/>

                        <br/>
                        <p><ins>Forgot password?</ins></p>
                        {/!* <a href='#'>Forgot password?</a>*!/}
                    </form>
                )}
            </div>
        );
    }
}

export default SignIn;*/



/*import React from "react";
import style from '../css_modules/login.module.css'

class SignUp extends React.Component {
    render() {
        return (
            <div>
                 <form name='login' action='#' method='POST'>
                <label htmlFor='user_email' className={style.label}>Email:</label>
                <input id='user_email' type='email' name='email' title="Enter your email" placeholder='Enter your email' autoComplete='off' required className={style.no_frame}/><br/>

                <label htmlFor='user_password' className={style.label}>Password:</label>
                <input id='user_password' type='password' name='password' title='Enter your password' placeholder='Enter your password' autoComplete='off' required className={style.no_frame}/><br/>

                <p><ins>Forgot password?</ins></p>
                </form>
            </div>
        );
    }
}

export default SignUp;*/


