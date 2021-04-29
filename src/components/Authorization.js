import React, {useEffect, useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Container, Row, Col} from 'reactstrap';
import Registration from "./Registration";
import Login from "./Login";
import {login, registration, urlLogin, urlRegistration} from "../utils/Constants";
import {Link, useHistory} from "react-router-dom";
import MainPage from "./MainPage";
import AuthorizationSubmit from "./Home";
import style from '../css_modules/login.module.css'
import validator from "validator";

const Authorization = (props) => {
    const [modal, setModal] = useState(false);
    const toggle = () => {
        setModal(!modal);
        props.hideAuthorization1();
    };

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [validPassword, setValidPassword] = useState(false);
    const [validationLabel, setValidationLabel] = useState("");
    const [error, setError] = useState(null);

    const handleName = (e) => {
        console.log(e.target.value);
        setUsername(
            e.target.value
        )
    };

    const handleEmail = (e) => {
        console.log(e.target.value);
        setEmail(
            e.target.value
        );
    };

    const handlePassword = (event) => {
        setPassword(
            event.target.value
        )
    };

    const handleConfirmPassword = (e) => {
        setConfirmPassword(
            e.target.value
        );
    };

    const checkName = () => {
        if (username === '') {
            setValidationLabel(<span style={{color : "red"}}>Enter your name!</span>);
            return false;
        } else {
            setValidationLabel('');
            return true;
        }
    };

    const checkEmail = () => {
        if (email === '') {
            /*setValidationLabel('');*/
            setValidationLabel(<span style={{color : "red"}}>Enter your email!</span>);
            return false;
        }
        if (validator.isEmail(email)) {
            setValidationLabel(<span style={{color : "green"}}>Valid Email</span>);
            return true;
        } else {
            setValidationLabel(<span style={{color : "red"}}>Invalid Email!</span>);
            return false;
        }
    };

    const checkPasswords = () => {
        console.log('checkPasswords');
        if (password === '' && confirmPassword ==='') {
            setValidationLabel(<span style={{color : "red"}}>Enter your password!</span>);
            return false;
        }
        if (password === confirmPassword) {
            setValidationLabel(<span style={{color : "green"}}>Passwords match</span>);
            setValidPassword(true);
            return true;
        } else {
            setValidationLabel(<span style={{color : "red"}}>The passwords do not match!</span>);
            setValidPassword(false);
            return false;
        }
    };

    const checkAllFieldsOnTrue = () => {
        if (checkName() === true && checkEmail() === true && checkPasswords() === true) {
            setValidationLabel(<span style={{color : "green"}}>Your data has been filled in successfully, press the "Submit"</span>);
        }
    };

    useEffect(() => {
        checkName();
    }, [username]);

    useEffect(() => {
        checkEmail();
    },[email]);

    useEffect(() => {
        checkPasswords();
    },[password,confirmPassword]);

    useEffect(() => {
        checkAllFieldsOnTrue();
    },[username, email, password,confirmPassword]);


    /*const [loginRegistrationToggle, setLoginRegistrationToggle] = useState(<Login handleEmail={handleEmail} handlePassword={handlePassword}/>);*/
    const [activeComponent, setActiveComponent] = useState(login);

    /* const mainPage = () => {
        props.changePage('MainPage');
    };*/

  /*  const checkPasswords = () => {
        if (document.getElementById('user_password').value === document.getElementById('repeat_password').value) {
            document.getElementById('message').style.color = 'green';
            document.getElementById('message').innerHTML = '* Passwords match *';
            document.getElementById('submit').disabled = false;
          /!*  document.getElementById('submit').attributes({disabled: false});*!/
        } else {
            document.getElementById('message').style.color = 'red';
            document.getElementById('message').innerHTML = '* Passwords do not match *';
            document.getElementById('submit').disabled = true;
        }
    };*/

     let history = useHistory();
     const handleSubmit = () => {
        console.log(activeComponent);
        if (activeComponent === login) {
            /* console.log(username);
               console.log(password);*/
            let data = {userEmail: email, password: password};
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
                /*.then(data => {console.log(data); return data})*/
                .then(data =>  {console.log(data.accessToken); return data})
                .then(data => localStorage.setItem('accessToken', data.tokenType+' '+data.accessToken))
                .then(data => history.push('/main_page'))

               .catch(error => alert("You entered incorrect data. Try again"));
        } else {
            if (checkName() === false) {
                return;
            }
            if (checkEmail() === false) {
                return;
            }
            if (checkPasswords() === false) {
                return;
            }
            if (checkAllFieldsOnTrue() === true) {
                return;
            }
            let data = {username: username, userEmail: email, password: password};
            //console.log(JSON.stringify(data));                                          //{"username": "olya", "userEmail": "olya@gmail.com", "password":"222222"}
            fetch(`${urlRegistration}`, {
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
               // .then(data => console.log(data))                                          //{message: "User registered successfully!"}
                .then(data =>  data)
                .then(data => localStorage.setItem('accessToken', data.tokenType+' '+data.accessToken))
                .then(data => history.push('/main_page'))

                .catch(error => alert("You entered incorrect data. Try again"));
        }
     };


  /*  let history = useHistory();
    const handleSubmit = () => {
            /!* console.log(username);
               console.log(password);*!/
            let data = {username: username.username, password: password.password};
            console.log(JSON.stringify(data));                                          //{"username":"linetskI","password":"222222", email: "linetskI@gmail.com"}
            fetch(`${urlLogin}`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(data)
            })
                .then(results => results.json())
                .then(data => console.log(data))
                .then(data => localStorage.setItem('accessToken', data.tokenType+' '+data.accessToken))
              /!* .then(data => console.log(data.accessToken))*!/

    };*/


/*.then(response => response.json())
            .catch(err => console.log(err))
       /!*history.push('/main_page');*!/
     };*/

    /*const [login, setLogin] = useState(true);
    const [registration, setRegistration] = useState(true);
    const registration1 = () => {
        setLogin(!login);
        props.changePage('Registration');
    };*/

    useEffect( () => {
       if (props.showAuthorization1) {
            setModal(true);
        }
    }, [props.showAuthorization1]);

    const selectActiveComponent = (activeComponent) => {
            setActiveComponent(activeComponent);
    };

    const loginRegistrationToggle = () => {
        if (activeComponent === login) {
            return <Login handleEmail={handleEmail} handlePassword={handlePassword}/>;
        } else if (activeComponent === registration) {
            return <Registration checkPasswords={checkPasswords} handleName={handleName} handleEmail={handleEmail} handlePassword={handlePassword} handleConfirmPassword={handleConfirmPassword} validationLabel={validationLabel}/>
        }
    };

   /* const selectActiveComponent = (activeComponent) => {
        setActiveComponent(activeComponent);
        if (activeComponent === login) {
            setLoginRegistrationToggle(<Login handleEmail={handleEmail} handlePassword={handlePassword}/>);
        }
        if (activeComponent === registration) {
            setLoginRegistrationToggle(<Registration checkPasswords={checkPasswords} handleName={handleName} handleEmail={handleEmail} handlePassword={handlePassword} handleConfirmPassword={handleConfirmPassword} validationLabel={validationLabel}/>);
        }
    };*/

     return (
        <div>
            <Modal isOpen={modal} className='start-modal'>
                <ModalHeader className='modal-header'>
                    <div>
                        <img className='col-12' src={require(`../Images/aa.png`)} alt='ProPets'/>
                        <h3>Welcome!<br/>Please sign in / sign up to continue</h3>
                    </div>
                </ModalHeader>
                <ModalBody className='modal-authorization'>
                    <Container>
                    <Row>
                        <Col xs={6} md={6}>
                            <Button className='btn-movement btn-authorization' onClick={() => selectActiveComponent(login)}>Sign in</Button>
                        </Col>
                        <Col xs={6} md={6}>
                            <Button className='btn-movement btn-authorization' onClick={() => selectActiveComponent(registration)}>Sign up</Button>
                        </Col>
                    </Row>
                        <Row className='row-authorization'>
                            {loginRegistrationToggle()}
                        </Row>
                    </Container>
                </ModalBody>
                <ModalFooter className='modal-footer'>
                    <p className={style.p_modal}>By clicking “Submit”, you agree to us processing your information.</p>
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                    <Button color='success' id='submit' className='submit' onClick={handleSubmit}>Submit</Button>
               {/*<Link to={`/main_page/${props.changePage}`} className='submit'>Submit</Link>*/}
            {/*   <AuthorizationSubmit/>*/}
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default Authorization;

/*import React from "react";
/!*import ReactModalLogin from "react-modal-login/dist/react-modal-login";*!/
import {facebookConfig} from "../utils/FacebookConfig";
import Login from "./Login";
import Registration from "./Registration";
import style from '../css_modules/login.module.css';
/!*import {modalConfig} from "../utils/Modal";*!/

/!*const modal = {
    content : {
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)'
        /!*width: 1000,
        height: 1000*!/
    }
};*!/

class Authorization extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            loading: false,
            error: null
        };
    }

    openModal() {
        this.setState({
            showModal: true
        });
    }

    closeModal() {
        this.setState({
            showModal: false,
            error: null
        });
    }

    onLoginSuccess(method, response) {
        console.log("logged successfully with " + method);
    }

    onLoginFail(method, response) {
        console.log("logging failed with " + method);
        this.setState({
            error: response
        });
    }

    startLoading() {
        this.setState({
            loading: true
        });
    }

    finishLoading() {
        this.setState({
            loading: false
        });
    }

    afterTabsChange() {
        this.setState({
            error: null
        });
    }


    componentDidUpdate(prevProps) {
        console.log(prevProps.showAuthorization1);
        console.log(this.props.showAuthorization1);
        if (prevProps.showAuthorization1 !== this.props.showAuthorization1) {
            this.openModal();
        }
    }


    render() {
        return (
            <div>
                <ReactModalLogin
                    visible={this.state.showModal}
                    onCloseModal={this.closeModal.bind(this)}
                    loading={this.state.loading}
                    error={this.state.error}
                   /!* style={modal}*!/
                    /!*styles={{overlay: {background: 'green'}}}*!/

                    tabs={{
                        afterChange: this.afterTabsChange.bind(this)
                    }}
                    loginError={{
                        label: "Couldn't sign in, please try again."
                    }}
                    registerError={{
                        label: "Couldn't sign up, please try again."
                    }}
                    startLoading={this.startLoading.bind(this)}
                    finishLoading={this.finishLoading.bind(this)}
                    providers={{
                        facebook: {
                            config: facebookConfig,
                            onLoginSuccess: this.onLoginSuccess.bind(this),
                            onLoginFail: this.onLoginFail.bind(this),
                            label: "Continue with Facebook"
                        }
                    }}
                  /!*  styles={{modal: {width: '100px'}}}*!/
                    /!*containerClass='RML-login-modal-box'*!/
                    aboveSocialsLoginContainer={<Login/>}
                    aboveSocialsRegisterContainer={<Registration/>}
                />
            </div>
        );
    }
}

export default Authorization;*/

/*
class Authorization extends React.Component {
    render() {
        return (
            <div>
                <img className='col-3 col-sm-3 offset-1' src={require(`../Images/0.png`)} alt='ProPets'/>
                <h3>Welcome! Please sign in / sign up to continue</h3>

            </div>
        );
    }
}

export default Authorization;*/
