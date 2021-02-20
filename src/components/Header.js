import React from "react";
import style from '../css_modules/header.module.css';

class Header extends React.Component {
    render() {
        return (
            <header className='flex-container'>
                <div className='row align-items-center'>
                    <img className='col-3 col-sm-3 offset-1' src={require(`../Images/0.png`)} alt='ProPets'/>
                    <div className='col-8 col-sm-8 row'>
                        <button id='SignIn' className={`btn_animation col-4 col-sm-4 offset-8 ${style.btn}`} onClick={() => this.props.showAuthorization()}>Sign in</button>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;