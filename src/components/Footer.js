import React from "react";
import style from "../css_modules/footer.module.css"

class Footer extends React.Component {
    render() {
        return (
            <footer className='flex-container'>
                <div className='row align-items-center'>
                    <h4 className='col-5 offset-1'>Here is collected everything that your pet needs:</h4>
                    <ul className='col-6'>
                        <li> professional veterinarian tips</li>
                        <li> fostering home search</li>
                        <li> information about pet-sitting and walking service</li>
                        <li> useful information about education and care</li>
                        <li> great communication with new friends in your social network</li>
                    </ul>
                </div>
                <div className='row align-items-center'>
                    <h5 className='btn_animation col-2 offset-1' onClick={() => this.props.showAuthorization()}><img src={require(`../Images/vet.png`)} alt='VetHelp'/> VetHelp</h5>
                    <h5 className='btn_animation col-2' onClick={() => this.props.showAuthorization()}><img src={require(`../Images/love.png`)} alt='Fostering'/> Fostering</h5>
                    <h5 className='btn_animation col-2' onClick={() => this.props.showAuthorization()}><img src={require(`../Images/walking.png`)} alt='Walking'/> Walking</h5>
                    <h5 className='btn_animation col-2' onClick={() => this.props.showAuthorization()}><img src={require(`../Images/hotel.png`)} alt='Hotels'/> Hotels</h5>
                    <h5 className='btn_animation col-2' onClick={() => this.props.showAuthorization()}><img src={require(`../Images/58.png`)} alt='Posts'/> Posts</h5>
                </div>
                <div className={style.coming}>
                    <h2 className='col-3 offset-1'>Coming soon</h2>
                    <h6 className='col-6'>We are planing to open a new service, where your cats and dogs can find their love!</h6>
                    <img src={require(`../Images/heart.png`)} alt='Heart'/>
                </div>
            </footer>
        );
    }
}

export default Footer;