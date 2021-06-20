import React, {useEffect, useState} from "react";
import {
    Button, Card,
    Collapse,
    DropdownItem,
    Nav,
    NavItem,
    NavLink
} from "reactstrap";
import style from "../css_modules/navigation.module.css";
import {RiLogoutBoxLine} from "react-icons/all";
import {NavLink as RRNavLink, useHistory} from "react-router-dom";
import {profileName} from "../utils/Constants";

const Navigation = (props) => {

    const [collapseOpen, setCollapseOpen] = useState(false);

    const [avatar, setAvatar] = useState(<img src='https://icons.veryicon.com/png/o/business/wms-purchase-sale-and-storage-background/customer-5.png' className={style.avatar} alt='Avatar'/>);
    const [username, setUsername] = useState('');

    const nameProfile = () => {
        console.log('nameProfile called');
        let token = localStorage.getItem('accessToken');
            fetch(`${profileName}`, {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': token
            }})
                .then(response => {
                    if (response.ok) {
                       return response.text();
                    } else {
                        window.location.replace('/');
                        throw new Error ();
                    }})
                .then(data => {setUsername(data); return data})
                .then(data => localStorage.setItem('userName', data))
    };


    let history = useHistory();
    const logout = () => {
        localStorage.removeItem('accessToken');
        history.push('/');
    };

    useEffect(() => {
        console.log('useEffect called');
        nameProfile();
        console.log('nameProfile = '+username)
    });

    return (
            <div id='navDivId' className={`flex-container ${style.fixation}`}>
                <div className={`ml-sm-3 ${style.divHeight}`}><img className={`col-2 col-sm-5 col-md-6 col-lg-7 col-xl-10 pl-2 pr-1 pt-4 pl-sm-1 pr-sm-4 pl-md-3 pr-md-2 pt-md-4 pl-lg-3 pt-lg-3 pt-xl-2 pl-xl-2 pr-xl-4 ${style.topImg}`} src={require(`../Images/0.png`)} alt='ProPets'/></div>
            <div className={`col-6 col-sm-8 col-md-10 col-xl pl-0 pr-0 pl-sm-3`}>
                <Nav tabs vertical className={style.mainPage}>
                <NavItem onClick={(e) => {
                    setCollapseOpen(false);
                }}>
                    <NavLink tag={RRNavLink} to='/main_page/home' className={`pl-0 pl-sm-3 ${style.link}`}>
                        <img className={`mr-5 mr-sm-4 ${style.homeImg}`} src={require(`../Images/Home-Free-PNG-Image.png`)} alt='Home'/>Home
                    </NavLink>
                </NavItem>
                <NavItem onClick={(e) => {
                    setCollapseOpen(false);
                }}>
                    <NavLink tag={RRNavLink} to='/main_page/lost' className={`pl-3 pl-sm-3 ${style.link}`}>
                        <img className={`mr-5 mr-sm-4 ${style.homeImg}`} src={require(`../Images/pngwing.com.png`)} alt='Lost'/>Lost
                    </NavLink>
                </NavItem>
                <NavItem onClick={(e) => {
                    setCollapseOpen(false);
                }}>
                    <NavLink tag={RRNavLink} to='/main_page/found' className={`pl-0 pl-sm-3 ${style.link}`}>
                        <img className={`mr-5 mr-sm-4 ${style.homeImg}`} src={require(`../Images/pngwing.com (5).png`)} alt='Found'/>Found
                    </NavLink>
                </NavItem>

                <Button color='link' className={`pl-0 pl-sm-3 ${style.linkService}`}
                        onClick={(e) => {
                            e.preventDefault();
                            setCollapseOpen(!collapseOpen);
                        }}
                        role="button"
                        id="collapse"
                >
                        <img className={`mr-5 mr-sm-4 ${style.serviceOptionsImg}`} src={require(`../Images/18.png`)} alt='Services'/><p className={style.serviceOptionsTxt}>Services</p>
                </Button>
                <Collapse isOpen={collapseOpen}>
                    <Card>
                        <NavItem>
                            <NavLink tag={RRNavLink} to='/main_page/services/hotels' className={`pl-0 pl-sm-3 ${style.serviceLink}`}>
                                <img className={`mr-5 mr-sm-4 ${style.homeImg}`} src={require(`../Images/1161605.png`)} alt='Hotel'/>Hotels
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={RRNavLink} to='/main_page/services/walking' className={`pl-0 pl-sm-3 ${style.serviceLink}`}>
                                <img className={`mr-5 mr-sm-4 ${style.homeImg}`} src={require(`../Images/walking.png`)} alt='Walking'/>Walking
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={RRNavLink} to='/main_page/services/fostering' className={`pl-0 pl-sm-3 ${style.serviceLink}`}>
                                <img className={`mr-5 mr-sm-4 ${style.homeImg}`} src={require(`../Images/love.png`)} alt='Fostering'/>Fostering
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={RRNavLink} to='/main_page/services/vet_help' className={`pl-0 pl-sm-3 ${style.serviceLink}`}>
                                <img className={`mr-5 mr-sm-4 ${style.homeImg}`} src={require(`../Images/PinClipart.com_clip-art-vet_1990539.png`)} alt='VetHelp'/>VetHelp
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={RRNavLink} to='/main_page/services/care' className={`pl-2 pl-sm-3 ${style.serviceLink}`}>
                                <img className={`mr-5 mr-sm-4 ${style.homeImg}`} src={require(`../Images/care.png`)} alt='Care'/>Care
                            </NavLink>
                        </NavItem>
                    </Card>
                </Collapse>

                <NavItem onClick={(e) => {
                    setCollapseOpen(false);
                }}>
                    <NavLink tag={RRNavLink} to='/main_page/favorites' className={`pl-0 pl-sm-3 ${style.link}`}>
                        <img className={`mr-5 mr-sm-4 ${style.homeImg}`} src={require(`../Images/PinClipart.com_paw-print-heart-clipart_5562238.png`)} alt='Favorites'/>Favorites
                    </NavLink>
                </NavItem>
                <DropdownItem divider/>
                <NavItem onClick={(e) => {
                    setCollapseOpen(false);
                }}>
                    <NavLink className={`pl-0 pl-sm-3 pr-5 mr-sm-0 ${style.link1}`}>{avatar}{username}</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink onClick={logout} className={`pl-0 pl-sm-3 ${style.cursor}`}><RiLogoutBoxLine className={`mr-5 mr-sm-4 ${style.outImg}`}/><span className={style.outTxt}>Logout</span></NavLink>
                </NavItem>
                <DropdownItem divider/>
            </Nav>
            </div>
        </div>
    );
};

export default Navigation;