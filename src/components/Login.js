import React from "react";
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
                        <div className={style.heightForgot}>
                     <p className={style.btn_forgot} onClick={() => this.clickShowModalForEmailEntryHandler()}><ins>Forgot password?</ins></p><br/><br/>
                        </div>
                     <ForgotPassword showModalForEmailEntry={this.state.showModalForEmailEntry} hideModalForEmail={this.hideModalForEmail}/>
                 </form>
            </div>
        );
    }
}

export default SignIn;