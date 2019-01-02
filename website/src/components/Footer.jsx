import React, {Component} from 'react';
import {Grid, Row, Col, Image, Glyphicon} from 'react-bootstrap'
import './Footer.css';

class Footer extends Component{

  instagram(){
    window.location.href = 'http://www.instagram.com'
  }

  facebook(){
    window.location.href = 'http://www.facebook.com'
  }

  twitter(){
    window.location.href = 'http://www.twitter.com'
  }

  render(){
    return (
      <div>
        <div className='top-border'></div>
        <Grid className='footer-grid'>
          <Row className='footer-grid-row'>
            <Col className='footer-grid-col' xs={3} sm={3} md={3} lg={3} xl={3}>
              <div className='footer-item top'> <div className="underline"> GET A QUOTE </div></div>
              <div className='footer-item bottom'> <a className="email" href="mailto:ehardwoodfloors@gmail.com"> ehardwoodfloors@gmail.com </a> </div>
            </Col>
            <Col className='footer-grid-col' xs={3} sm={3} md={3} lg={3} xl={3}>
              <div className='footer-item'> <div className="underline"> SAY HELLO </div></div>
              <div className='footer-item bottom'> (323) 123-4567 </div>
            </Col>
            <Col className='footer-grid-col' xs={3} sm={3} md={3} lg={3} xl={3}>
              <div className='footer-item'> <div className="underline"> CAREER OPPORTUNITIES </div></div>
              <div className='footer-item bottom'> <a className="email" href="mailto:careersehwfloors@gmail.com"> careersehwfloors@gmail.com </a> </div>
            </Col>
            <Col className='footer-grid-col' xs={3} sm={3} md={3} lg={3} xl={3}>
              <div className='footer-icon'> <Image className='footer-icon-img' responsive src={require('../icons/instagram.png')} onClick = {() => {this.instagram()}}/></div>
              <div className='footer-icon'> <Image className='footer-icon-img' responsive src={require('../icons/twitter.png')} onClick = {() => {this.twitter()}}/></div>
              <div className='footer-icon'> <Image className='footer-icon-img' responsive src={require('../icons/facebook.png')} onClick ={() => {this.facebook()}}/></div>
            </Col>
            <Col className='footer-grid-col' xs={3} sm={3} md={3} lg={3} xl={3}>
              <div className='copyright'> <Glyphicon glyph='copyright-mark'/> 2019 Eternity Hardwood Floors All Rights Reserved</div>
            </Col>
          </Row>
        </Grid>
        <div className='bottom-border'></div>
      </div>
    )
  }
}

export default Footer;
