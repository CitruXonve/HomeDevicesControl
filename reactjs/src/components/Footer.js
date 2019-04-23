import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, Row, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import $ from 'jquery';

// const Footer = () => {
class Footer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

        if (props.config) {
            this.state.config = props.config;
        }
        console.log('footer state:', props)
    }

    render() {    
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
                {/* <script>
                    $(document).ready(()=>{
                        $('.mobile-nav .nav-item .nav-link.active').addClass
                    })
                </script> */}
                <Navbar light expand="xs" className="mobile-nav d-block d-md-none" fixed="bottom">
                    <div className="container">
                        <Collapse navbar>
                                <Nav navbar className="mobile-nav">
                                    <NavItem>
                                        <NavLink className="nav-link" to="/home" id="nav-link-activity">
                                            { this.state.config && Array.isArray(this.state.config.device) ?<span className="badge badge-pill badge-danger notify-badge">{this.state.config.device.length}</span>:null}
                                            <span className="fa fa-bar-chart mobile-nav-icon"></span>
                                            <span className="mobile-nav-label">Activities</span>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/devices" id="nav-link-device">
                                            { this.state.config && Array.isArray(this.state.config.device) ?<span className="badge badge-pill badge-warning notify-badge">{this.state.config.device.length}</span>:null}
                                            {/* <span className="badge badge-pill badge-warning notify-badge">6</span> */}
                                            <span className="fa fa-cubes mobile-nav-icon"></span>
                                            <span className="mobile-nav-label">Devices</span>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/settings" id="nav-link-setting">
                                            <span className="badge badge-pill badge-primary notify-badge">2</span>
                                            <span className="fa fa-cogs mobile-nav-icon"></span>
                                            <span className="mobile-nav-label">Settings</span>
                                        </NavLink>
                                    </NavItem>
                                    {/* <NavItem class="hidden-xs">
                                        <NavLink className="nav-link" to="#">
                                            <span className="mobile-nav-icon fa fa-bell-o"></span>
                                            <span className="mobile-nav-label">Notifications</span>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem class="visible-xs">
                                        <NavLink className="nav-link" to="#navbar-more-show">
                                            <span className="mobile-nav-icon fa fa-bars"></span>
                                            <span className="mobile-nav-label">More</span>
                                        </NavLink>
                                    </NavItem> */}
                                </Nav>
                        </Collapse>
                        
                        
                    </div>
                </Navbar>
            </React.Fragment>

        );}
}
export default Footer;