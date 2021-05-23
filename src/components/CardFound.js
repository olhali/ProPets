import React from "react";
import style from "../css_modules/login.module.css";
import {
    FaPaw,
    MdClose,
    VscDebugBreakpointUnsupported
} from "react-icons/all";
import {urlSaveFoundPet} from "../utils/Constants";
import PhotoUpload from "./PhotoUpload";
import {Link} from "react-router-dom";
import {Button} from "reactstrap";

class CardFound extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: '',
            breed: '',
            color: '',
            sex: '',
            distinction: '',
            description: '',
            location: '',
            imageUrls: [],
            date: '',
            phone: '',
            nameProfile: '',
            error: '',
            validationLabel: '',
            responseAfterCard: false
        };
        window.history.pushState("", "", '/main_page/found/card_found');
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.type !== prevState.type) {
            this.validation();
        }
        if (this.state.breed !== prevState.breed) {
            this.validation();
        }
        if (this.state.color !== prevState.color) {
            this.validation();
        }
        if (this.state.sex !== prevState.sex) {
            this.validation();
        }
        if (this.state.distinction !== prevState.distinction) {
            this.validation();
        }
        if (this.state.description !== prevState.description) {
            this.validation();
        }
        if (this.state.location !== prevState.location) {
            this.validation();
        }
        if (this.state.date !== prevState.date) {
            this.validation();
        }
        if (this.state.phone !== prevState.phone) {
            this.validation();
        }
    }

    handleType = (e) => {
        this.setState({
            type: e.target.value
        })
    };
    handleBreed = (e) => {
        this.setState({
            breed: e.target.value
        })
    };
    handleColor = (e) => {
        this.setState({
            color: e.target.value
        })
    };
    handleSex = (e) => {
        this.setState({
            sex: e.target.value
        })
    };
    handleDistinction = (e) => {
        this.setState({
            distinction: e.target.value
        })
    };
    handleDescription = (e) => {
        this.setState({
            description: e.target.value
        })
    };
    handleLocation = (e) => {
        this.setState({
            location: e.target.value
        })
    };
    handleDate = (e) => {
        this.setState({
            date: e.target.value
        })
    };
    handlePhone = (e) => {
        this.setState({
            phone: e.target.value
        })
    };

    addImageUrl = (url) => {
        this.state.imageUrls.push(url);
        this.setState({
            imageUrls: this.state.imageUrls
        });
    };

    checkType = () => {
        if (this.state.type === '') {
            this.setState({
                validationLabel: <span className={style.labelLostFound}><strong className={style.requiredFields}>*</strong> Enter the found pet!</span>
            });
            return false;
        } else {
            this.setState({
                validationLabel: ''
            });
            return true;
        }
    };

    checkColor = () => {
        if (this.state.color === '') {
            this.setState({
                validationLabel: <span className={style.labelLostFound}><strong className={style.requiredFields}>*</strong> Enter the color of the pet!</span>
            });
            return false;
        } else {
            this.setState({
                validationLabel: ''
            });
            return true;
        }
    };

    checkSex = () => {
        if (this.state.sex === '') {
            this.setState({
                validationLabel: <span className={style.labelLostFound}><strong className={style.requiredFields}>*</strong> Enter the sex of the pet!</span>
            });
            return false;
        } else {
            this.setState({
                validationLabel: ''
            });
            return true;
        }
    };

    checkLocation = () => {
        if (this.state.location === '') {
            this.setState({
                validationLabel: <span className={style.labelLostFound}><strong className={style.requiredFields}>*</strong> Enter the location of the lost pet!</span>
            });
            return false;
        } else {
            this.setState({
                validationLabel: ''
            });
            return true;
        }
    };

    checkDate = () => {
        if (this.state.date === '') {
            this.setState({
                validationLabel: <span className={style.labelLostFound}><strong className={style.requiredFields}>*</strong> Enter the date of lost of the pet!</span>
            });
            return false;
        } else {
            this.setState({
                validationLabel: ''
            });
            return true;
        }
    };

    validation = () => {
        if (this.checkType() === false) {
            return false;
        }
        if (this.checkColor() === false) {
            return false;
        }
        if (this.checkSex() === false) {
            return false;
        }
        if (this.checkLocation() === false) {
            return false;
        }
        if (this.checkDate() === false) {
            return false;
        }
        return true;
    };

    handlePublish = (event) => {
        event.preventDefault();
        if (this.validation() === false) {
            return;
        }
        let petInfo = {};
        petInfo.type = this.state.type;
        petInfo.breed = this.state.breed;
        petInfo.color = this.state.color;
        petInfo.sex = this.state.sex;
        petInfo.distinction = this.state.distinction;
        petInfo.description = this.state.description;
        petInfo.location = this.state.location;
        petInfo.nameProfile = localStorage.getItem('userName');
        petInfo.imageUrls = this.state.imageUrls;
        petInfo.date = this.state.date;
        petInfo.phone = this.state.phone;
        console.log(petInfo);
        let token = localStorage.getItem('accessToken');
        fetch(`${urlSaveFoundPet}`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Authorization': token
            },
            body: JSON.stringify(petInfo)
        })
            .then((response) => {
                this.setState({
                    responseAfterCard: true
                });
                if (response.ok) {
                    return response.text()
                } else {
                    throw new Error(response.statusText);
                }
            })

            .catch(error => alert('Please, fill in required fields!'));
    };


    render() {
        return (
            <form name='found'>
                {this.state.responseAfterCard ? (
                    <div>
                        <p className={style.published}>Published</p>
                        <Button color='success' className={style.publishedOk} onClick={event => window.location.href='/main_page/found'}>OK</Button>
                    </div>
                ) : (
                    <div>
                        <fieldset>
                            <legend className={style.legendLost}><strong>Found your pet? Fill in all the data and publish!</strong></legend>
                            <label htmlFor='pets' className={style.label}><strong>F O U N D : </strong><span className={style.requiredFields}>*</span></label>
                            <input id='pets' type='text' maxlength="23" name='pets' list="petsList" title="Choose a pet that is found" placeholder='Choose a pet that is found' autoComplete='off' className={style.no_frame} onChange={(event) => {this.handleType(event)}}/>
                            <datalist id="petsList">
                                <option value="Another pet..."/>
                                <option value="Bird"/>
                                <option value="Cat"/>
                                <option value="Chinchilla"/>
                                <option value="Dog"/>
                                <option value="Farm animal (Livestock)"/>
                                <option value="Ferret"/>
                                <option value="Guinea pig"/>
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

                            <label htmlFor='breed' className={style.label}>Breed: </label>
                            <input id='breed' type='text' maxlength="23" name='breed' title="Select the breed of the pet" placeholder='Select the breed of the pet' autoComplete='off' className={style.no_frame} onChange={(event) => {this.handleBreed(event)}}/>
                            <br/>

                            <label htmlFor='color' className={style.label}>Color: <span className={style.requiredFields}>*</span></label>
                            <input id='color' type='text' maxlength="23" name='color' list="colorList" title="Select the color of the pet" placeholder='Select the color of the pet' autoComplete='off' className={style.no_frame} onChange={(event) => {this.handleColor(event)}}/>
                            <datalist id="colorList">
                                <option value="Multicolor"/>
                                <option value="Ash"/>
                                <option value="Beige"/>
                                <option value="Black"/>
                                <option value="Black and white"/>
                                <option value="Blue"/>
                                <option value="Brown"/>
                                <option value="Brown and black"/>
                                <option value="Brown and white"/>
                                <option value="Dark Blue"/>
                                <option value="Dark Brown"/>
                                <option value="Dark Green"/>
                                <option value="Dark Grey"/>
                                <option value="Ginger"/>
                                <option value="Ginger and white"/>
                                <option value="Golden"/>
                                <option value="Grey"/>
                                <option value="Grey and white"/>
                                <option value="Green"/>
                                <option value="Motley"/>
                                <option value="Orange"/>
                                <option value="Pink"/>
                                <option value="Red"/>
                                <option value="Tricolor"/>
                                <option value="White"/>
                                <option value="White and black"/>
                                <option value="White and brown"/>
                                <option value="White and ginger"/>
                                <option value="White and grey"/>
                                <option value="Yellow"/>
                            </datalist>
                            <br/>

                            <label htmlFor='sex' className={style.label}>Sex: <span className={style.requiredFields}>*</span></label><br/>
                            <input type="radio" id="male" name="sex" value="male" onChange={(event) => {this.handleSex(event)}}/>
                            <label htmlFor="male">Male</label><br/>
                            <input type="radio" id="female" name="sex" value="female" onChange={(event) => {this.handleSex(event)}}/>
                            <label htmlFor="female">Female</label><br/>
                            <input type="radio" id="unknown" name="sex" value="unknown" onChange={(event) => {this.handleSex(event)}}/>
                            <label htmlFor="unknown">Unknown</label><br/><br/>

                            <label htmlFor='distinction' className={style.label}>Distinctive features:</label>
                            <textarea id='distinction' rows="1" maxlength="400" name='distinction' title='Enter the distinctive features of the pet' placeholder='Enter the distinctive features of the pet' autoComplete='off' className={style.no_frame} onChange={(event) => {this.handleDistinction(event)}}/><br/><br/>

                            <label htmlFor='description' className={style.label}>Description:</label>
                            <textarea id='description' rows="1" maxlength="400" name='description' title='Describe of the pet' placeholder='Describe of the pet' autoComplete='off' className={style.no_frame} onChange={(event) => {this.handleDescription(event)}}/><br/>

                            <label htmlFor='location' className={style.label}>Location: <span className={style.requiredFields}>*</span></label>
                            <input id='location' type='location' name='location' title='Location of the pet' placeholder='Location of the pet' autoComplete='off' className={style.no_frame} onChange={(event) => {this.handleLocation(event)}}/><br/>

                            <div>
                                <label htmlFor='photo' className={style.label}>Pet photo:</label>
                                <PhotoUpload addImageUrl={this.addImageUrl}/>
                            </div><br/>

                            <label htmlFor='date' className={style.label}>Date of found: <span className={style.requiredFields}>*</span></label>
                            <input id='date' type='date' name='date' title='Date' placeholder='Date' autoComplete='off' className={style.no_frame} onChange={(event) => {this.handleDate(event)}}/><br/>

                            <label htmlFor='tel' className={style.label}>Phone number:</label>
                            <input id='tel' type='tel' maxlength="12" onInput={(e) => e.target.value = e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')} name='tel' title='Enter your phone number for communication' placeholder='Enter your phone number' className={style.no_frame} onChange={(event) => {this.handlePhone(event)}}/><br/>
                            <br/>

                            <br/>
                            <h5><VscDebugBreakpointUnsupported className={style.footnote}/> Fields with <strong className={style.requiredFields}>*</strong> are required !</h5>

                            {this.state.validationLabel}

                            <button className={style.publish} onClick={this.handlePublish}><FaPaw/> Publish</button>

                            <Link to='/main_page/found'>
                                <button color="secondary" className={style.cancel} onClick={event => window.location.href='/main_page/found'}><MdClose/>Cancel</button>
                            </Link>
                        </fieldset>
                    </div>
                )}
            </form>
        );
    }
}
export default CardFound;