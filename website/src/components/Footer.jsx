import React, {Component} from 'react';
import {Grid, Row, Col, Image} from 'react-bootstrap'
import './Footer.css';

class Footer extends Component{
  render(){
    return (
      <div>
        <div className='top-border'></div>
        <Grid className='footer-grid'>
          <Row className='footer-grid-row'>
            <Col className='footer-grid-col' xs={3} sm={3} md={3} lg={3} xl={3}>
              <div className='footer-item'> GET A QUOTE </div>
              <div className='footer-item'> hwfloors@gmail.com </div>
            </Col>
            <Col className='footer-grid-col' xs={3} sm={3} md={3} lg={3} xl={3}>
              <div className='footer-item'> SAY HELLO </div>
              <div className='footer-item'> (323) 123-4567 </div>
            </Col>
            <Col className='footer-grid-col' xs={3} sm={3} md={3} lg={3} xl={3}>
              <div className='footer-item'> JOBS </div>
              <div className='footer-item'> jobshwfloors@gmail.com </div>
            </Col>
            <Col className='footer-grid-col' xs={3} sm={3} md={3} lg={3} xl={3}>
              <div className='footer-icon'> <Image className='footer-icon-img' responsive src={require('../icons/instagram.png')}/></div>
              <div className='footer-icon'> <Image className='footer-icon-img' responsive src={require('../icons/twitter.png')}/></div>
              <div className='footer-icon'> <Image className='footer-icon-img' responsive src={require('../icons/facebook.png')}/></div>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default Footer;
