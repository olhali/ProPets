import React, {useEffect, useState} from "react";
import {
    Button, Card,
    Collapse,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Nav,
    Navbar,
    NavbarBrand, NavbarToggler,
    NavItem,
    NavLink
} from "reactstrap";
import style from "../css_modules/navigation.module.css";
import {RiLogoutBoxLine} from "react-icons/all";
import {Link, NavLink as RRNavLink, useHistory} from "react-router-dom";
import {login, profileName, urlLogin, urlRegistration} from "../utils/Constants";

const Navigation = (props) => {
    /*const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(!dropdownOpen);

    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);*/

    /* const [selectedStyle, setSelectedStyle] = useState('');*/

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
                        //alert('To perform this action - you must login again');
                        window.location.replace('/');
                        throw new Error ();
                    }})
                .then(data => {setUsername(data); return data})
                .then(data => localStorage.setItem('userName', data))

               // .catch(error => alert('To perform this action - you must login again'));
    };


    let history = useHistory();
    const logout = () => {
        localStorage.removeItem('accessToken');
   /*     sessionStorage.removeItem('likes');*/
        history.push('/');
    };

    useEffect(() => {
        console.log('useEffect called');
        nameProfile();
        console.log('nameProfile = '+username)
    });

    return (
   /*     <div id='navDivId' className='flex-container'>*/
            <div id='navDivId' className={`flex-container ${style.fixation}`}>
            {/*<div className={`row ${style.divHeight}`}><img className={`col-5 col-sm-6 col-md-6 col-lg-9 col-xl-11 p-0 p-sm-2 pt-xl-0 ${style.topImg}`} src={require(`../Images/0.png`)} alt='ProPets'/></div>*/}
                <div className={`ml-sm-3 ${style.divHeight}`}><img className={`col-2 col-sm-5 col-md-6 col-lg-7 col-xl-10 pl-2 pr-1 pt-4 pl-sm-1 pr-sm-4 pl-md-3 pr-md-2 pt-md-4 pl-lg-3 pt-lg-3 pt-xl-2 pl-xl-2 pr-xl-4 ${style.topImg}`} src={require(`../Images/0.png`)} alt='ProPets'/></div>
            <div className={`col-6 col-sm-8 col-md-10 col-xl pl-0 pr-0 pl-sm-3`}>
                <Nav tabs vertical className={style.mainPage}>
               {/* <NavItem className={style.home}>*/}
                <NavItem onClick={(e) => {
                    setCollapseOpen(false);
                }}>
                    {/*<NavLink href="#" active>*/}
                       {/* <NavLink exact activeClassName="active" tag={Link} to='/main_page/home' className="normal">*/}
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
                   {/* <NavLink tag={RRNavLink} to='/main_page/profile' className={style.link}>{avatar}{username}</NavLink>*/}
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







/*    <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
                    <DropdownToggle nav caret>
                        <img className={style.homeImg} src={require(`../Images/18.png`)} alt='Services'/>
                        Services
                    </DropdownToggle>
                    <DropdownMenu>
                        <Link to='/main_page/services/hotels'><DropdownItem><img className={style.homeImg} src={require(`../Images/1161605.png`)} alt='Hotel'/>Hotels</DropdownItem></Link>
                        <Link to='/main_page/services/walking'><DropdownItem><img className={style.homeImg} src={require(`../Images/walking.png`)} alt='Walking'/>Walking</DropdownItem></Link>
                        <Link to='/main_page/services/fostering'><DropdownItem><img className={style.homeImg} src={require(`../Images/love.png`)} alt='Fostering'/>Fostering</DropdownItem></Link>
                        <Link to='/main_page/services/vet_help'><DropdownItem><img className={style.homeImg} src={require(`../Images/PinClipart.com_clip-art-vet_1990539.png`)} alt='VetHelp'/>VetHelp</DropdownItem></Link>
                    </DropdownMenu>
                </Dropdown>*/

/* <Navbar color="faded" light>
                    <NavbarBrand className="mr-auto"><img className={style.homeImg} src={require(`../Images/18.png`)} alt='Services'/>
                        Services</NavbarBrand>
                    <NavbarToggler onClick={toggleNavbar} className="mr-2" />
                    <Collapse isOpen={!collapsed} navbar>
                            <NavItem>
                                <NavLink activeClassName="active" tag={RRNavLink} to='/main_page/services/hotels'>
                                    <img className={style.homeImg} src={require(`../Images/1161605.png`)} alt='Hotel'/>Hotels
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink activeClassName="active" tag={RRNavLink} to='/main_page/services/walking'>
                                    <img className={style.homeImg} src={require(`../Images/walking.png`)} alt='Walking'/>Walking
                                </NavLink>
                            </NavItem>
                    </Collapse>
                </Navbar>*/