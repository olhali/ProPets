import React, {useEffect, useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Container, Row, Col} from 'reactstrap';
import Registration from "./Registration";
import Login from "./Login";
import {login, registration} from "../utils/Constants";
import {Link, useHistory} from "react-router-dom";
import MainPage from "./MainPage";
import AuthorizationSubmit from "./Home";
import style from '../css_modules/login.module.css'

const Authorization = (props) => {
    const [modal, setModal] = useState(false);
    const toggle = () => {
        setModal(!modal);
        props.hideAuthorization1();
    };
    const [loginRegistrationToggle, setLoginRegistrationToggle] = useState(<Login/>);
    const [activeComponent, setActiveComponent] = useState(true);

    /* const mainPage = () => {
        props.changePage('MainPage');
    };*/

     let history = useHistory();
     const handleSubmit = () => {
       history.push('/main_page');
     };

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
            if (activeComponent === login) {
                setLoginRegistrationToggle(<Login/>);
            }
       if (activeComponent === registration) {
           setLoginRegistrationToggle(<Registration/>);
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
                            {loginRegistrationToggle}
                        </Row>
                    </Container>
                </ModalBody>
                <ModalFooter className='modal-footer'>
                    <p className={style.p_modal}>By clicking “Submit”, you agree to us processing your information.</p>
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                    <Button color='success' className='submit' onClick={handleSubmit}>Submit</Button>
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
