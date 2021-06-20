import React, {useEffect, useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Container, Row, Col} from 'reactstrap';
import Registration from "./Registration";
import Login from "./Login";
import {login, registration, urlLogin, urlRegistration} from "../utils/Constants";
import {useHistory} from "react-router-dom";
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


    const [activeComponent, setActiveComponent] = useState(login);

     let history = useHistory();
     const handleSubmit = () => {
        console.log(activeComponent);
        if (activeComponent === login) {
            /* console.log(username);
               console.log(password);*/
            let data = {userEmail: email, password: password};
            //console.log(JSON.stringify(data));
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
            //console.log(JSON.stringify(data));
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
               // .then(data => console.log(data))
                .then(data =>  data)
                .then(data => localStorage.setItem('accessToken', data.tokenType+' '+data.accessToken))
                .then(data => history.push('/main_page'))

                .catch(error => alert("You entered incorrect data. Try again"));
        }
     };

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
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default Authorization;

