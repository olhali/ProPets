import React, {useEffect, useState} from "react";
import {Button, Col, Container, Modal, ModalBody, ModalFooter, ModalHeader, Row} from "reactstrap";
import style from "../css_modules/login.module.css";
import {urlResetPassword} from "../utils/Constants";
import validator from "validator";

const ForgotPassword = (props) => {
    const [modal, setModal] = useState(false);
    const cancel = () => {
        setModal(!modal);
        props.hideModalForEmail();
        setResponseAfterEmail(false);
        setValidationLabel("");
        setValidEmail(false)
    };

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [validationLabel, setValidationLabel] = useState("");
    const [responseAfterEmail, setResponseAfterEmail] = useState(false);

    const handleEmail = (e) => {
        setEmail(
           e.target.value
    );
        if (validator.isEmail(email)) {
            setValidationLabel(<span style={{color : "green"}}>Valid Email</span>);
            setValidEmail(true)
        } else {
            setValidationLabel(<span style={{color : "red"}}>Invalid Email!</span>);
            setValidEmail(false)
        }
    };

    const handleSend = () => {
            fetch(`${urlResetPassword}`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: email
            })
                .then(response =>  {setResponseAfterEmail (true); return response.text()})
                /* .then(response => cancel())*/

                .catch(error => alert("You entered incorrect data. Try again"));
            /* .catch(error => console.log(error));*/
    };


    useEffect( () => {
        if (props.showModalForEmailEntry) {
            setModal(true);
        }
    }, [props.showModalForEmailEntry]);

    return (
        <div>
            <Modal isOpen={modal} className='start-modal'>
                <ModalHeader className='modal-header'>
                    <div>
                        <img className='col-12' src={require(`../Images/15.png`)} alt='ProPets'/>
                        <h3>Welcome!<br/>Please enter your email address</h3>
                    </div>
                </ModalHeader>
                <ModalBody className='modal-authorization'>
                    <Container>
                        <Row>
                            <Col>
                                {responseAfterEmail ? (
                                    <div>
                                        <p>An email have been sent to your Email address that includes a password reset link. Click the link in your email, and you'll be able to enter a new password</p>
                                    </div>
                                ) : (
                                    <div>
                                        <label htmlFor='user_email' className={style.label}>Email:</label>
                                        <input id='user_email' type='email' name='email' title="Enter your email" placeholder='Enter your email' autoComplete='off' required className={style.no_frame} onChange={(event) => {handleEmail(event)}}/>
                                        {validationLabel}
                                    </div>
                                )}
                            </Col>
                        </Row>
                    </Container>
                </ModalBody>
                <ModalFooter className='modal-footer'>
                    {responseAfterEmail ? (
                        <div>
                            <Button color='success' onClick={cancel}>OK</Button>
                        </div>
                    ) : (
                        <div>
                            <p className={style.p_modal}>By clicking “Send”, an email will be sent to your Email address that includes a password reset link. Click the link in your email, and you'll be able to enter a new password.</p>
                            <Button color="secondary" onClick={cancel}>Cancel</Button>
                            <Button color='success' id='send' onClick={handleSend} disabled={!validEmail}>Send</Button>
                        </div>
                    )}
                </ModalFooter>
            </Modal>
        </div>
    );

};
export default ForgotPassword;