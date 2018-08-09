import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import './HomePage.css';
import {Grid, Row, Image} from 'react-bootstrap';

class HomePage extends Component {
  render() {
    return(
      <div>
        <NavBar/>
        <Grid className='center-img-grid' fluid>
          <Row>
            <Image responsive src={require('../images/bedroom.jpg')}/>
          </Row>
        </Grid>
        <Footer/>
      </div>
    )
  }
}

export default HomePage;
