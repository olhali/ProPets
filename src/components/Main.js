import React from "react";
import style from '../css_modules/main.module.css';

class Main extends React.Component {
    render() {
        return (
            <main className='flex-container'>
                <div className='row align-items-center'>
                    <h1 className={`col-4 col-sm-4 col-md-4 col-xl-4 offset-1 ${style.welcome}`}>Welcome to the <p><span className={style.span1}>animal lover</span> community </p><span className={style.span1}>"ProPETS"</span></h1>
                    <img className='col-7 col-sm-7 col-md-7 col-xl-7 p-0' src={require(`../Images/1.png`)} alt='Pets'/>
                </div>
                <div>
                    <button className={`btn_animation col-6 col-sm-6 col-md-6 col-xl-6 ${style.btn1}`} onClick={() => this.props.showAuthorization()}>I lost my pet <img className={style.lost} src={require(`../Images/2.png`)} alt='Lost'/></button>
                    <h2 className='col-6 p-0 mt-4'>Our fluffy space for lovers, admirers, dads and <p>moms of our four-legged, winged, tailed guys</p></h2>
                </div>
                <div>
                    <button className={`btn_animation col-6 col-sm-6 col-md-6 col-xl-6 ${style.btn2}`} onClick={() => this.props.showAuthorization()}>I found a pet <img className={style.found} src={require(`../Images/3.png`)} alt='Found'/></button>
                </div>
                <div>
                    <h5 className={`col-11 offset-1 ${style.h5}`}>I want to <span className={style.span2} onClick={() => this.props.showAuthorization()}><ins>JOIN</ins></span> the friendly community!</h5>
                </div>
            </main>
        );
    }
}

export default Main;