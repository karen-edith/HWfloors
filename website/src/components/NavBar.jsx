import React, {Component} from 'react';
import './NavBar.css';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

class NavBar extends Component{
  render(){
    return (
      <div>
        <div className='navbarContainer'>
          <Navbar fluid className='navigationbar'>
            <Navbar.Header className='header-brand'>
              <Navbar.Brand className='logo'> Hardwood Floors </Navbar.Brand>
            </Navbar.Header>
            <Nav pullRight>
              <NavItem className='nbitem nbitemtop'> HOME </NavItem>
              <NavItem className='nbitem'> ABOUT US </NavItem>
              <NavItem className='nbitem'> SERVICES </NavItem>
              <NavItem className='nbitem'> PORTFOLIO </NavItem>
              <NavItem className='nbitem'> CONTACT US </NavItem>
              <NavItem className='nbitem'> <div className='licnbitem'> <div className='lcinner'> LIC # 345678 </div> </div> </NavItem>
            </Nav>
          </Navbar>
        </div>
      </div>
    )
  }
}

export default NavBar;
