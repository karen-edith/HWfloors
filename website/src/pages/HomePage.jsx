import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import './HomePage.css';
import {Grid, Row, Image} from 'react-bootstrap';

class HomePage extends Component {
  render() {
    return(
      <div className='overall-container'>
        <NavBar/>
        <Grid className='center-img-grid' fluid>
          <Row>
            <Image responsive src={require('../images/bedroom.jpg')}/>
          </Row>
        </Grid>
        <div className='title-container'>
          <div className='title'>ETERNITY HARDWOOD FLOORS</div>
          <div className='msg-below-title'> We've been in the Hardwood Flooring business since 2004</div>
        </div>
        <Footer/>
      </div>
    )
  }
}

export default HomePage;
