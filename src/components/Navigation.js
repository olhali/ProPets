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
                .then(response => response.text())
                .then(data => setUsername(data))
    };

    let history = useHistory();
    const logout = () => {
        localStorage.removeItem('accessToken');
        history.push('/start_page');
    };

    useEffect(() => {
        console.log('useEffect called');
        nameProfile();
        console.log('nameProfile = '+username)
    });

    return (
        <div id='navDivId' className='flex-container'>
            <div className={style.divHeight}><img className={`col-12 ${style.topImg}`} src={require(`../Images/0.png`)} alt='ProPets'/></div>
            <Nav tabs vertical className={style.mainPage}>
               {/* <NavItem className={style.home}>*/}
                <NavItem onClick={(e) => {
                    setCollapseOpen(false);
                }}>
                    {/*<NavLink href="#" active>*/}
                       {/* <NavLink exact activeClassName="active" tag={Link} to='/main_page/home' className="normal">*/}
                    <NavLink tag={RRNavLink} to='/main_page/home' className={style.link}>
                        <img className={style.homeImg} src={require(`../Images/Home-Free-PNG-Image.png`)} alt='Home'/>Home
                    </NavLink>
                </NavItem>
                <NavItem onClick={(e) => {
                    setCollapseOpen(false);
                }}>
                    <NavLink tag={RRNavLink} to='/main_page/lost' className={style.link}>
                        <img className={style.homeImg} src={require(`../Images/pngwing.com.png`)} alt='Lost'/>Lost
                    </NavLink>
                </NavItem>
                <NavItem onClick={(e) => {
                    setCollapseOpen(false);
                }}>
                    <NavLink tag={RRNavLink} to='/main_page/found' className={style.link}>
                        <img className={style.homeImg} src={require(`../Images/pngwing.com (5).png`)} alt='Found'/>Found
                    </NavLink>
                </NavItem>
            {/*    <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
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
                </Dropdown>*/}

               {/* <Navbar color="faded" light>
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
                </Navbar>*/}

                <Button color='link' className={style.linkService}
                        onClick={(e) => {
                            e.preventDefault();
                            setCollapseOpen(!collapseOpen);
                        }}
                        role="button"
                        id="collapse"
                >
                        <img className={style.serviceOptionsImg} src={require(`../Images/18.png`)} alt='Services'/><p className={style.serviceOptionsTxt}>Services</p>
                </Button>
                <Collapse isOpen={collapseOpen}>
                    <Card>
                        <NavItem>
                            <NavLink tag={RRNavLink} to='/main_page/services/hotels' className={style.serviceLink}>
                                <img className={style.homeImg} src={require(`../Images/1161605.png`)} alt='Hotel'/>Hotels
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={RRNavLink} to='/main_page/services/walking' className={style.serviceLink}>
                                <img className={style.homeImg} src={require(`../Images/walking.png`)} alt='Walking'/>Walking
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={RRNavLink} to='/main_page/services/fostering' className={style.serviceLink}>
                                <img className={style.homeImg} src={require(`../Images/love.png`)} alt='Fostering'/>Fostering
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={RRNavLink} to='/main_page/services/vet_help' className={style.serviceLink}>
                                <img className={style.homeImg} src={require(`../Images/PinClipart.com_clip-art-vet_1990539.png`)} alt='VetHelp'/>VetHelp
                            </NavLink>
                        </NavItem>
                    </Card>
                </Collapse>

                <NavItem onClick={(e) => {
                    setCollapseOpen(false);
                }}>
                    <NavLink tag={RRNavLink} to='/main_page/favorites' className={style.link}>
                        <img className={style.homeImg} src={require(`../Images/PinClipart.com_paw-print-heart-clipart_5562238.png`)} alt='Favorites'/>Favorites
                    </NavLink>
                </NavItem>
                <DropdownItem divider/>
                <NavItem onClick={(e) => {
                    setCollapseOpen(false);
                }}>
                    <NavLink tag={RRNavLink} to='/main_page/profile' className={style.link}>{avatar}{username}</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink onClick={logout}><RiLogoutBoxLine className={style.outImg}/><span className={style.outTxt}>L o g o u t</span></NavLink>
                </NavItem>
                <DropdownItem divider/>
            </Nav>
        </div>
    );
};

export default Navigation;