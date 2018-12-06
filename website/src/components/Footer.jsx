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
              <div className='footer-item'> <div className="underline"> GET A QUOTE </div></div>
              <div className='footer-item bottom'>  hwfloors@gmail.com </div>
            </Col>
            <Col className='footer-grid-col' xs={3} sm={3} md={3} lg={3} xl={3}>
              <div className='footer-item'> <div className="underline"> SAY HELLO </div></div>
              <div className='footer-item bottom'> (323) 123-4567 </div>
            </Col>
            <Col className='footer-grid-col' xs={3} sm={3} md={3} lg={3} xl={3}>
              <div className='footer-item'> <div className="underline"> JOBS </div></div>
              <div className='footer-item bottom'> jobshwfloors@gmail.com </div>
            </Col>
            <Col className='footer-grid-col' xs={3} sm={3} md={3} lg={3} xl={3}>
              <div className='footer-icon'> <Image className='footer-icon-img' responsive src={require('../icons/instagram.png')}/></div>
              <div className='footer-icon'> <Image className='footer-icon-img' responsive src={require('../icons/twitter.png')}/></div>
              <div className='footer-icon'> <Image className='footer-icon-img' responsive src={require('../icons/facebook.png')}/></div>
            </Col>
          </Row>
        </Grid>
        <div className='bottom-border'></div>
      </div>
    )
  }
}

export default Footer;
