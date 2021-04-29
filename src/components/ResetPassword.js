import React, {useEffect, useState} from "react";
import {Button, Col, Container, Modal, ModalBody, ModalFooter, ModalHeader, Row} from "reactstrap";
import style from "../css_modules/login.module.css";
import validator from "validator";
import {localChangePassword, urlChangePassword, urlResetPassword} from "../utils/Constants";
import {useHistory} from "react-router-dom";

const ResetPassword = (props) => {
    const [modal, setModal] = useState(true);
    let history = useHistory();

     const ok = () => {
         setModal(!modal);
         setResponseAfterPassword(false);
         setValidationLabel("");
         setValidPassword(false);
         history.push('/start_page')
     };

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [validPassword, setValidPassword] = useState(false);
    const [validationLabel, setValidationLabel] = useState("");
    const [responseAfterPassword, setResponseAfterPassword] = useState(false);

    const handlePassword = (e) => {
        setPassword(
            e.target.value
        );
    };

    const handleConfirmPassword = (e) => {
        setConfirmPassword(
            e.target.value
        );
    };

    const checkPasswords = () => {
        if (password === confirmPassword && password != '') {
            setValidationLabel(<span style={{color : "green"}}>Passwords match</span>);
            setValidPassword(true)
        } else {
            setValidationLabel(<span style={{color : "red"}}>The passwords do not match!</span>);
            setValidPassword(false)
        }
    };

    const handleSend = () => {
        let searchLocation = window.location.search;
        const urlParams = new URLSearchParams(searchLocation);
        const token = urlParams.get('token');
        let data = {newPassword: password, token: token};
        fetch(`${urlChangePassword}`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(response =>  {setResponseAfterPassword (true); return response.text()})
            /* .then(response => cancel())*/

            .catch(error => alert("You entered incorrect data. Try again"));
        /* .catch(error => console.log(error));*/
    };

 /*   const checkPassword = () => {
        if (document.getElementById('user_password').value === document.getElementById('repeat_password').value) {
            document.getElementById('message').style.color = 'green';
            document.getElementById('message').innerHTML = '* Passwords match *';
            document.getElementById('submit').disabled = false;
        } else {
            document.getElementById('message').style.color = 'red';
            document.getElementById('message').innerHTML = '* Passwords do not match *';
            document.getElementById('submit').disabled = true;
        }
    };*/

    return (
        <div>
            <Modal isOpen={modal} className='start-modal'>
                <ModalHeader className='modal-header'>
                    <div>
                        <img className='col-12' src={require(`../Images/15.png`)} alt='ProPets'/>
                        <h3>Input the new password<br/> and confirm it</h3>
                    </div>
                </ModalHeader>
                <ModalBody className='modal-authorization'>
                    <Container>
                        <Row>
                            <Col>
                                {responseAfterPassword ? (
                                    <div>
                                        <p>You have successfully changed your password</p>
                                    </div>
                                ) : (
                                    <div>
                                        <label htmlFor='user_password' className={style.label}>Password:</label>
                                        <input id='user_password' type='password' name='password' title='Password must have at least 8 characters, including letters and numbers or a special character' placeholder='Enter your password' autoComplete='off' required className={style.no_frame} onChange={(event) => {handlePassword(event)}} onKeyUp={checkPasswords}/><br/>

                                        <label htmlFor='repeat_password' className={style.label}>Repeat password:</label>
                                        <input id='repeat_password' type='password' name='repeatPassword' title='Please re-enter your password' placeholder='Re-enter your password' autoComplete='off' required className={style.no_frame} onChange={(event) => {handleConfirmPassword(event)}} onKeyUp={checkPasswords}/><br/>
                                        {validationLabel}
                                    </div>
                                )}
                            </Col>
                        </Row>
                    </Container>
                </ModalBody>
                <ModalFooter className='modal-footer'>
                    {responseAfterPassword ? (
                        <div>
                            <Button color='success' onClick={ok}>Ok, thank you!</Button>
                        </div>
                    ) : (
                        <div>
                            <p className={style.p_modal}>By clicking “Send”, you agree to us processing your information.</p>
                            {/*<Button color="secondary" onClick={cancel}>Cancel</Button>*/}
                            <Button color='success' id='send' onClick={handleSend} disabled={!validPassword}>Send</Button>
                        </div>
                    )}
                </ModalFooter>
            </Modal>
        </div>
    );

};
export default ResetPassword;