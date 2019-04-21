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
      <Navbar dark expand="md" fixed="top">
          <div className="container">
              <NavbarToggler onClick={this.toggleNav} />
              <NavbarBrand className="mr-auto" href="/">Smart Devices</NavbarBrand>
              <Collapse isOpen={this.state.isNavOpen} navbar>
                  <Nav navbar>
                    <NavItem>
                      <NavLink className="nav-link" to="#">
                          <span className="fa fa-bar-chart menu-icon"></span>
                          <span>Activities</span>
                          <span className="badge badge-pill badge-danger notify-badge">5</span>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className="nav-link" to="#">
                        <span className="fa fa-cubes menu-icon"></span>
                        <span>Categories</span>
                        <span className="badge badge-pill badge-warning notify-badge">6</span>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className="nav-link" to="#">
                        <i className="fa fa-cogs menu-icon" aria-hidden="true"></i>
                        <span>Settings</span>
                        <span className="badge badge-pill badge-primary notify-badge">8</span>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to='/contactus'>
                          <span className="fa fa-address-card fa-lg"></span>
                          Contact Us
                        </NavLink>
                    </NavItem>
                  </Nav>
              </Collapse>
          </div>
      </Navbar>
      {/* <Navbar dark expand="md" fixed="top">
          <div className="container">
              <NavbarToggler onClick={this.toggleNav} />
              <NavbarBrand className="mr-auto" href="/">Smart Devices</NavbarBrand>
              <Collapse isOpen={this.state.isNavOpen} navbar>
                  <Nav navbar>
                  <NavItem>
                      <NavLink className="nav-link" to='#'><span></span>About</NavLink>
                  </NavItem>
                  </Nav>
              </Collapse>
          </div>
      </Navbar> */}
      <Jumbotron className="d-none d-sm-none d-md-block">
           <div className="container">
               <div className="row row-header">
                   <div className="col-12">
                       <h1>Get inspired && Start up!</h1>
                       <p>A glance at all your Smart Devices</p>
                   </div>
               </div>
           </div>
       </Jumbotron>
    </React.Fragment>
    );
  }
}

export default Header;