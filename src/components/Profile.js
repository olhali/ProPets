/*
import React, { useState } from 'react';
import {
    TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink,
    Card,
    Button,
    CardTitle,
    CardText,
    Row,
    Col,
    Container, ModalFooter
} from 'reactstrap';
import ProfileData from "./ProfileData";
import {profileData, activities} from "../utils/Constants";
import Activities from "./Activities";
import {useHistory} from "react-router-dom";

const Profile = (props) => {
    const [profileActivitiesToggle, setProfileActivitiesToggle] = useState(<ProfileData/>);
    const [activeComponent, setActiveComponent] = useState(true);

    const selectActiveComponent = (activeComponent) => {
        setActiveComponent(activeComponent);
        if (activeComponent === profileData) {
            setProfileActivitiesToggle(<ProfileData/>);
        }
        if (activeComponent === activities) {
            setProfileActivitiesToggle(<Activities/>);
        }
    };

    /!*const toggle = () => {
        setModal(!modal);
        props.hideAuthorization1();
    };*!/

  /!*  let history = useHistory();
    const handleSave = () => {
        history.push('/main_page/home');
    };*!/

    return (
        <div>
            <h3>Your profile. Change, edit and manage your data.</h3>
            <Container>
                <Row>
                    <Col xs={6} md={6}>
                        <Button className='btn-movement btn-authorization'
                                onClick={() => selectActiveComponent(profileData)}>My profile</Button>
                    </Col>
                    <Col xs={6} md={6}>
                        <Button className='btn-movement btn-authorization'
                                onClick={() => selectActiveComponent(activities)}>Activities</Button>
                    </Col>
                </Row>
                <Row className='row-authorization'>
                    {profileActivitiesToggle}
                </Row>
            </Container>
          {/!*  <Button color="secondary" onClick=''>Cancel</Button>
            <Button color='success' className='submit' onClick={handleSave}>Save changes</Button>*!/}
        </div>
    );
};

export default Profile;





{/!*
import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import ProfileData from "./ProfileData";

const Profile = (props) => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
    };

    return (
        <div>
            <p>Your profile. Change, edit and manage your data.</p>
            <Nav tabs>
                <NavItem>
                    <NavLink className={({ active: activeTab === '1' })} onClick={() => { toggle('1'); }}>My profile
                        <ProfileData/>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={({ active: activeTab === '2' })} onClick={() => { toggle('2'); }}>
                        Activities
                    </NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    <Row>
                        <Col sm="12">
                            <img alt='Avatar'/>
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="2">
                    <Row>
                        <Col sm="6">
                            <Card body>
                                <CardTitle>Special Title Treatment</CardTitle>
                                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                <Button>Go somewhere</Button>
                            </Card>
                        </Col>
                        <Col sm="6">
                            <Card body>
                                <CardTitle>Special Title Treatment</CardTitle>
                                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                <Button>Go somewhere</Button>
                            </Card>
                        </Col>
                    </Row>
                </TabPane>
            </TabContent>
        </div>
    );
};

export default Profile;
        *!/}


*/
