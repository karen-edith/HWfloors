import React, {Component} from 'react';
import './NavBar.css';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

class NavBar extends Component{

  aboutus(){
    window.location.href = 'http://localhost:3000/about'
  }

  home(){
    window.location.href = 'http://localhost:3000/'
  }

  contact(){
    window.location.href = 'http://localhost:3000/contact'
  }

  portfolio(){
    window.location.href = 'http://localhost:3000/portfolio'
  }

  services(){
    window.location.href = 'http://localhost:3000/services'
  }

  render(){
    return (
      <div>
        <div className='navbarContainer'>
          <Navbar fluid className='navigationbar'>
            <Navbar.Header className='header-brand'>
              <Navbar.Brand className='logo'> Eternity Hardwood Floors </Navbar.Brand>
            </Navbar.Header>
            <Nav pullRight>
              <NavItem className='nbitem textwidth nbitemtop' onClick={()=>{this.home()}}> HOME </NavItem>
              <NavItem className='nbitem textwidth' onClick={()=>{this.aboutus()}}>  ABOUT US </NavItem>
              <NavItem className='nbitem textwidth' onClick={()=>{this.services()}}> SERVICES </NavItem>
              <NavItem className='nbitem textwidth' onClick={()=>{this.portfolio()}}> PORTFOLIO </NavItem>
              <NavItem className='nbitem textwidth' onClick={()=>{this.contact()}}> CONTACT US </NavItem>
              <NavItem className='nbitem'> <div className='licnbitem'> <div className='lcinner'> LIC # 345678 </div> </div> </NavItem>
            </Nav>
          </Navbar>
        </div>
      </div>
    )
  }
}

export default NavBar;
