import React from "react";
import style from '../css_modules/login.module.css'

class SignUp extends React.Component {

    render() {
        return (
            <div>
                 <form name='registration' action='#' method='POST' >
                        <label htmlFor='user_name' className={style.label}>Name:</label>
                        <input id='user_name' type='text' name='name' title="Enter your name" placeholder='Enter your name' autoComplete='off' required className={style.no_frame} onChange={(event) => {this.props.handleName(event)}}/><br/>

                        <label htmlFor='user_email' className={style.label}>Email:</label>
                        <input id='user_email' type='email' name='email' title="Enter your email" placeholder='Enter your email' autoComplete='off' required className={style.no_frame} onChange={(event) => {this.props.handleEmail(event)}}/><br/>

                        <label htmlFor='user_password' className={style.label}>Password:</label>
                        <input id='user_password' type='password' name='password' title='Password must have at least 8 characters, including letters and numbers or a special character' placeholder='Enter your password' autoComplete='off' required className={style.no_frame} onChange={(event) => {this.props.handlePassword(event)}}/><br/>

                        <label htmlFor='repeat_password' className={style.label}>Repeat password:</label>
                        <input id='repeat_password' type='password' name='repeatPassword' title='Please re-enter your password' placeholder='Re-enter your password' autoComplete='off' required className={style.no_frame}/><br/>
                 </form>
            </div>
        );
    }
}

export default SignUp;




/*import React from "react";
import style from '../css_modules/login.module.css'

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showHideRegistration: false
        };
        this.hideComponent = this.hideComponent.bind(this);
    }

    hideComponent = (showHideRegistration) => {
        this.setState({
            showHideRegistration: !this.state.showHideRegistration
        })
    };

    render() {
        const {showHideRegistration} = this.state;
        return (
            <div>
                <button className='modal-authorization' onClick={() => this.hideComponent("showHideRegistration")}>Sign up</button>
                {showHideRegistration && (
                    <form name='login' action='#' method='POST' >
                        <label htmlFor='user_name' className={style.label}>Name:</label>
                        <input id='user_name' type='text' name='name' title="Enter your name" placeholder='Enter your name' autoComplete='off' required className={style.no_frame}/><br/>

                        <label htmlFor='user_email' className={style.label}>Email:</label>
                        <input id='user_email' type='email' name='email' title="Enter your email" placeholder='Enter your email' autoComplete='off' required className={style.no_frame}/><br/>

                        <label htmlFor='user_password' className={style.label}>Password:</label>
                        <input id='user_password' type='password' name='password' title='Password must have at least 8 characters, including letters and numbers or a special character' placeholder='Enter your password' autoComplete='off' required className={style.no_frame}/><br/>

                        <label htmlFor='repeat_password' className={style.label}>Repeat password:</label>
                        <input id='repeat_password' type='password' name='repeatPassword' title='Please re-enter your password' placeholder='Re-enter your password' autoComplete='off' required className={style.no_frame}/><br/>
                    </form>
                )}
            </div>
        );
    }
}

export default SignUp;*/




/*
import React from "react";
import style from '../css_modules/login.module.css'

class SignUp extends React.Component {
    render() {
        return (
            <form name='login' action='#' method='POST' >
                {/!* <div className={style.formOfModal}>*!/}
                <label htmlFor='user_name' className={style.label}>Name:</label>
                <input id='user_name' type='text' name='name' title="Enter your name" placeholder='Enter your name' autoComplete='off' required className={style.no_frame}/><br/>

                <label htmlFor='user_email' className={style.label}>Email:</label>
                <input id='user_email' type='email' name='email' title="Enter your email" placeholder='Enter your email' autoComplete='off' required className={style.no_frame}/><br/>

                <label htmlFor='user_password' className={style.label}>Password:</label>
                <input id='user_password' type='password' name='password' title='Password must have at least 8 characters, including letters and numbers or a special character' placeholder='Enter your password' autoComplete='off' required className={style.no_frame}/><br/>

                <label htmlFor='repeat_password' className={style.label}>Repeat password:</label>
                <input id='repeat_password' type='password' name='repeatPassword' title='Please re-enter your password' placeholder='Re-enter your password' autoComplete='off' required className={style.no_frame}/><br/>
                {/!* </div>*!/}</form>
        );
    }
}

export default SignUp;*/
