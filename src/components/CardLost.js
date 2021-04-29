import React from "react";
import style from "../css_modules/login.module.css";
import {
    FaPaw,
    MdClose,
    VscDebugBreakpointUnsupported
} from "react-icons/all";
import {profileName, urlSaveLostPet} from "../utils/Constants";
import PhotoUpload from "./PhotoUpload";
import {Link} from "react-router-dom";
import {Button} from "reactstrap";

class CardLost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: '',
            color: '',
            sex: '',
            height: '',
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
        }
    };

     componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.type !== prevState.type) {
            this.validation();
         }
         if (this.state.color !== prevState.color) {
             this.validation();
         }
         if (this.state.sex !== prevState.sex) {
             this.validation();
         }
         if (this.state.height !== prevState.height) {
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
         if (this.state.nameProfile !== prevState.nameProfile) {
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
    handleHeight = (e) => {
        this.setState({
                height: e.target.value
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
    handleNameProfile = (e) => {
        this.setState({
                nameProfile: e.target.value
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
                validationLabel: <span className={style.labelLostFound}><strong className={style.requiredFields}>*</strong> Enter the lost pet!</span>
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
        petInfo.color = this.state.color;
        petInfo.sex = this.state.sex;
        petInfo.height = this.state.height;
        petInfo.distinction = this.state.distinction;
        petInfo.description = this.state.description;
        petInfo.location = this.state.location;
        petInfo.imageUrls = this.state.imageUrls;
        petInfo.date = this.state.date;
        petInfo.phone = this.state.phone;
        console.log(petInfo);
        let token = localStorage.getItem('accessToken');
        //alert(token);
        fetch(`${urlSaveLostPet}`, {
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
                // console.log(response);
                if (response.ok) {
                   // alert('1');
                    return response.text()
                } else {
                  //  alert('2');
                    throw new Error(response.statusText);
                }
            })
            /*.then(data => this.props.history.push('/main_page/lost'))*/

            .catch(error => alert('Please, fill in required fields!'));
    };


    render() {
        return (
                <form name='lost'>
                    {this.state.responseAfterCard ? (
                    <div>
                        <p className={style.published}>Published</p>
                        <Button color='success' className={style.publishedOk} onClick={event => window.location.href='/main_page/lost'}>OK</Button>
                    </div>
                ) : (
                    <div>
                    <fieldset>
                        <legend className={style.legendLost}><strong>Lost your pet? Fill in all the data and publish!</strong></legend>
                    <label htmlFor='pets' className={style.label}><strong>L O S T : </strong><span className={style.requiredFields}>*</span></label>
                    <input id='pets' type='text' name='pets' list="petsList" title="Choose a pet that is lost" placeholder='Choose a pet that is lost' autoComplete='off' className={style.no_frame} onChange={(event) => {this.handleType(event)}}/>
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
                    <input id='color' type='text' name='color' list="colorList" title="Select the color of the pet" placeholder='Select the color of the pet' autoComplete='off' className={style.no_frame} onChange={(event) => {this.handleColor(event)}}/>
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
                        <input type="radio" id="male" name="sex" value="male" onChange={(event) => {this.handleSex(event)}}/>
                        <label htmlFor="male">Male</label><br/>
                            <input type="radio" id="female" name="sex" value="female" onChange={(event) => {this.handleSex(event)}}/>
                            <label htmlFor="female">Female</label><br/>
                                <input type="radio" id="unknown" name="sex" value="unknown" onChange={(event) => {this.handleSex(event)}}/>
                                <label htmlFor="unknown">Unknown</label><br/>

                    <label htmlFor='height' className={style.label}>Height/ cm:</label>
                    <input id='height' type='number' name='height' min="1" title="Enter the approximate height/size of the pet" placeholder='Enter the approximate height/size of the pet' autoComplete='off' className={style.no_frame} onChange={(event) => {this.handleHeight(event)}}/><br/><br/>

                    <label htmlFor='distinction' className={style.label}>Distinctive features:</label>
                    <textarea id='distinction' rows="2" cols="40" name='distinction' title='Enter the distinctive features of the pet' placeholder='Enter the distinctive features of the pet' autoComplete='off' className={style.no_frame} onChange={(event) => {this.handleDistinction(event)}}/><br/><br/>

                    <label htmlFor='description' className={style.label}>Description:</label>
                    <textarea id='description' rows="3" cols="40" name='description' title='Describe of the pet' placeholder='Describe of the pet' autoComplete='off' className={style.no_frame} onChange={(event) => {this.handleDescription(event)}}/><br/>

                    <label htmlFor='location' className={style.label}>Location: <span className={style.requiredFields}>*</span></label>
                    <input id='location' type='location' name='location' title='Location of the pet' placeholder='Location of the pet' autoComplete='off' className={style.no_frame} onChange={(event) => {this.handleLocation(event)}}/><br/>

                    <div>
                        <label htmlFor='photo' className={style.label}>Pet photo:</label>
                            <PhotoUpload addImageUrl={this.addImageUrl}/>
                    </div><br/>

                    <label htmlFor='date' className={style.label}>Date of lost: <span className={style.requiredFields}>*</span></label>
                    <input id='date' type='date' name='date' title='Date' placeholder='Date' autoComplete='off' className={style.no_frame} onChange={(event) => {this.handleDate(event)}}/><br/>

                    <label htmlFor='tel' className={style.label}>Phone number:</label>
                    <input id='tel' type='tel' name='tel' title='Enter your phone number for communication' placeholder='Enter your phone number' className={style.no_frame} onChange={(event) => {this.handlePhone(event)}}/><br/>
                    <br/>

                    <br/>
                    <h5><VscDebugBreakpointUnsupported className={style.footnote}/> Fields with <strong className={style.requiredFields}>*</strong> are required !</h5>

                        {this.state.validationLabel}

                        <button className={style.publish} onClick={this.handlePublish}><FaPaw/> Publish</button>

                        <Link to='/main_page/lost'>
                            <button color="secondary" className={style.cancel}><MdClose/>Cancel</button>
                        </Link>
                    </fieldset>
                    </div>
                    )}
                </form>
        );
    }
}
export default CardLost;






/* getlostAnimals(){
         return [{color: 'red', sex: 'male', height: '45cm',description : 'sadsada'},
             {color: 'blue', sex: 'male', height: '45cm',description : 'sadsada'},
             {color: 'gray', sex: 'male', height: '45cm',description : 'sadsada'}]
     }*/

/* const handleSend = () => {
     fetch(`${urlUploadingPhoto}`, {
         method: 'POST',
         headers: {
             'Content-type': 'application/json',
         },
         body: email
     })
         .then(response =>  {setResponseAfterEmail (true); return response.text()})
         /!* .then(response => cancel())*!/

         .catch(error => alert("You entered incorrect data. Try again"));
     /!* .catch(error => console.log(error));*!/


 };*/

/*    let data = {userEmail: email, password: password};
    //console.log(JSON.stringify(data));                                          //{"username":"linetskI","password":"222222"}
    fetch(`${urlLogin}`, {
method: 'POST',
headers: {
'Content-type': 'application/json',
},
body: JSON.stringify(data)
})
.then((response) => {
    // console.log(response);
if (response.ok) {
return response.json()
} else {
throw new Error(response.statusText);
}})
    /!*.then(data => {console.log(data); return data})*!/
.then(data =>  {console.log(data.accessToken); return data})
.then(data => localStorage.setItem('accessToken', data.tokenType+' '+data.accessToken))
.then(data => history.push('/main_page'))

.catch(error => alert("You entered incorrect data. Try again"));*/

/*handleGetPet = (e) => {
    e.preventDefault();
    let pet = e.currentTarget.petInfo.value;
    this.getPetInfo(this.state.petInfo);
};*/


/*
<label htmlFor='photo' className={style.label}>Pet photo:</label>
                        <Link to='/main_page/lost/card_lost/photoUpload'>

                            <button><FaPlus/> Add new</button>
                        </Link>

<input id='photo' type='file' multiple onClick={PhotoUpload}/><br/>*!/}
<input id='photo' type='file' multiple title='Attach a photo of the pet' placeholder='Please, attach a photo of the pet' className={style.no_frame}/><br/>

<label htmlFor='photo' className={style.label}>Pet photo:</label>
                    <input id='photo' type='file' name='photo' title='Attach a photo of the pet' placeholder='Please, attach a photo of the pet' autoComplete='off' className={style.no_frame}/><br/>
                    <input id='photo' type='file' name='files[]' multiple title='Attach a photo of the pet' placeholder='Please, attach a photo of the pet' className={style.no_frame}/><br/>*/
