import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
      isNavOpen: false
    };
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }

  render() {
    return(
    <React.Fragment>
      <Navbar dark className="web-header d-none" expand="md" fixed="top">{/*  d-none d-md-block */}
          <div className="container">
              <NavbarToggler onClick={this.toggleNav} />
              <NavbarBrand className="mr-auto" href="#">Smart Devices</NavbarBrand>
              <Collapse isOpen={this.state.isNavOpen} navbar>
                  <Nav navbar className="mr-auto">
                    <NavItem>
                      <NavLink className="nav-link" to="/home" id="header-link-activity">
                          <span className="fa fa-bar-chart menu-icon"></span>
                          <span>Activities</span>
                          {/* <span className="badge badge-pill badge-danger notify-badge">5</span> */}
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className="nav-link" to="/devices" id="header-link-device">
                        <span className="fa fa-cubes menu-icon"></span>
                        <span>Devices</span>
                        {/* <span className="badge badge-pill badge-warning notify-badge">6</span> */}
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className="nav-link" to="/settings" id="header-link-setting">
                        <i className="fa fa-cogs menu-icon" aria-hidden="true"></i>
                        <span>Settings</span>
                        {/* <span className="badge badge-pill badge-primary notify-badge">8</span> */}
                      </NavLink>
                    </NavItem>
                    {/* <NavItem>
                        <NavLink className="nav-link" to='/contactus'>
                          <span className="fa fa-address-card fa-lg"></span>
                          Contact Us
                        </NavLink>
                    </NavItem> */}
                  </Nav>
              </Collapse>
          </div>
      </Navbar>
      <Navbar light className="mobile-header d-block" expand="xs" fixed="top">
          <div className="container">
              <Collapse navbar>
                <Nav navbar>
                    <NavItem>
                        <NavLink className="nav-link" to="#">
                            <span className="fa fa-user-circle-o mobile-header-icon"></span>
                        </NavLink>
                    </NavItem>
                </Nav>
                <NavbarBrand className="mr-auto" href="#">Inspiration</NavbarBrand>
                <Nav navbar>
                    <NavItem>
                        <NavLink className="nav-link" to="#">
                            <span className="fa fa-plus mobile-header-icon"></span>
                        </NavLink>
                    </NavItem>
                </Nav>
              </Collapse>
            </div>

      </Navbar>
     */}
    </React.Fragment>
    );
  }
}

export default Header;