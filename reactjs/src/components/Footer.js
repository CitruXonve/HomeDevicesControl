import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, Row, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = () => {

    return (
        <React.Fragment>
            {/* <Navbar light expand="xs" className="mobile-nav">
                <ul className="mobile-nav" id="toggleul">
                <li className="active" id="home">
                            <NavLink className="nav-link" to="#">
                                <span className="badge badge-pill badge-danger notify-badge">5</span>
                                <span className="fa fa-bar-chart mobile-nav-icon"></span>
                                <span>Activities</span>
                            </NavLink>
                </li>
                <li id="about"><a href="#"><div>About</div></a></li>
                <li id="contact"><a href="#"><div>Contact</div></a></li>
                </ul>
            </Navbar> */}
            <Navbar light expand="xs" className="mobile-nav" fixed="bottom">
                <div className="container">
                            <Nav navbar className="mobile-nav">
                                <NavItem>
                                    <NavLink className="nav-link" to="#">
                                        <span className="badge badge-pill badge-danger notify-badge">5</span>
                                        <span className="fa fa-bar-chart mobile-nav-icon"></span>
                                        <span className="mobile-nav-label">Activities</span>
                                    </NavLink>
                                </NavItem>
                                <NavItem class="hidden-xs">
                                    <NavLink className="nav-link" to="#">
                                        <span className="badge badge-pill badge-warning notify-badge">6</span>
                                        <span className="fa fa-cubes mobile-nav-icon"></span>
                                        <span className="mobile-nav-label">Categories</span>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="#">
                                        <span className="badge badge-pill badge-primary notify-badge">8</span>
                                        <i className="fa fa-cogs mobile-nav-icon" aria-hidden="true"></i>
                                        <span className="mobile-nav-label">Settings</span>
                                    </NavLink>
                                </NavItem>
                                <NavItem class="hidden-xs">
                                    <NavLink className="nav-link" to="#">
                                        <span className="mobile-nav-icon fa fa-bell-o"></span>
                                        <span className="mobile-nav-label">Reservations</span>
                                    </NavLink>
                                </NavItem>
                                <NavItem class="visible-xs">
                                    <NavLink className="nav-link" to="#navbar-more-show">
                                        <span className="mobile-nav-icon fa fa-bars"></span>
                                        <span className="mobile-nav-label">More</span>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                    
                    
                </div>
            </Navbar>
        </React.Fragment>

    );
}
export default Footer;