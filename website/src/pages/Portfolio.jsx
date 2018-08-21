import React, {Component} from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import {Grid, Row, Col, Image} from 'react-bootstrap';
import './Portfolio.css';

class Portfolio extends Component {
  render() {
    return(
      <div>
        <NavBar/>
        <div className='galleryContainer'>
          <Grid className='singlePictureGrid' fluid>
            <Row className='singlePictureRow'>
              <Col className='singlePictureCol'>
                <Image className='singlePhoto' src={require('../images/galleryPhoto1.jpg')} responsive />
              </Col>
            </Row>
          </Grid>
          <Grid className='galleryPictureGrid' fluid>
            <Row className='pictureRow'>
              <Col xs={4} sm={4} md={4} lg={4} xl={4} className='photoCol'><Image className='photo' src={require('../images/galleryPhoto1.jpg')} responsive/></Col>
              <Col xs={4} sm={4} md={4} lg={4} xl={4} className='photoCol'><Image className='photo' src={require('../images/galleryPhoto2.jpg')} responsive/></Col>
              <Col xs={4} sm={4} md={4} lg={4} xl={4} className='photoCol'><Image className='photo' src={require('../images/galleryPhoto3.jpg')} responsive/></Col>
            </Row>
            <Row className='pictureRow'>
              <Col xs={4} sm={4} md={4} lg={4} xl={4} className='photoCol'><Image className='photo' src={require('../images/galleryPhoto4.jpg')} responsive/></Col>
              <Col xs={4} sm={4} md={4} lg={4} xl={4} className='photoCol'><Image className='photo' src={require('../images/galleryPhoto5.jpg')} responsive/></Col>
              <Col xs={4} sm={4} md={4} lg={4} xl={4} className='photoCol'><Image className='photo' src={require('../images/galleryPhoto6.jpg')} responsive/></Col>
            </Row>
            <Row className='pictureRow'>
              <Col xs={4} sm={4} md={4} lg={4} xl={4} className='photoCol'><Image className='photo' src={require('../images/galleryPhoto5.jpg')} responsive/></Col>
              <Col xs={4} sm={4} md={4} lg={4} xl={4} className='photoCol'><Image className='photo' src={require('../images/galleryPhoto1.jpg')} responsive/></Col>
              <Col xs={4} sm={4} md={4} lg={4} xl={4} className='photoCol'><Image className='photo' src={require('../images/galleryPhoto4.jpg')} responsive/></Col>
            </Row>
            <Row className='pictureRow'>
              <Col xs={4} sm={4} md={4} lg={4} xl={4} className='photoCol'><Image className='photo' src={require('../images/galleryPhoto2.jpg')} responsive/></Col>
              <Col xs={4} sm={4} md={4} lg={4} xl={4} className='photoCol'><Image className='photo' src={require('../images/galleryPhoto4.jpg')} responsive/></Col>
              <Col xs={4} sm={4} md={4} lg={4} xl={4} className='photoCol'><Image className='photo' src={require('../images/galleryPhoto3.jpg')} responsive/></Col>
            </Row>
            <Row className='pictureRow'>
              <Col xs={4} sm={4} md={4} lg={4} xl={4} className='photoCol'><Image className='photo' src={require('../images/galleryPhoto4.jpg')} responsive/></Col>
              <Col xs={4} sm={4} md={4} lg={4} xl={4} className='photoCol'><Image className='photo' src={require('../images/galleryPhoto1.jpg')} responsive/></Col>
              <Col xs={4} sm={4} md={4} lg={4} xl={4} className='photoCol'><Image className='photo' src={require('../images/galleryPhoto6.jpg')} responsive/></Col>
            </Row>
          </Grid>
        </div>

        <Footer/>
      </div>
    )
  }
}

export default Portfolio;
