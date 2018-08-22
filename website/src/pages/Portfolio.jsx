import React, {Component} from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import {Grid, Row, Col, Image} from 'react-bootstrap';
import './Portfolio.css';
import photo1 from '../images/galleryPhoto1.jpg';
import photo2 from '../images/galleryPhoto2.jpg';
import photo3 from '../images/galleryPhoto3.jpg';
import photo4 from '../images/galleryPhoto4.jpg';
import photo5 from '../images/galleryPhoto5.jpg';
import photo6 from '../images/galleryPhoto6.jpg';

class Portfolio extends Component {
  constructor(props){
    super(props);
    this.state = {
      singlePicture: photo1
    }
  }

  setSinglePicture(picture){
    this.setState({
      singlePicture: picture
    })
  }

  render() {
    return(
      <div>
        <NavBar/>
        <div className='galleryContainer'>
          <Grid className='singlePictureGrid' fluid>
            <Row className='singlePictureRow'>
              <Col className='singlePictureCol'>
                <Image className='singlePhoto' src={this.state.singlePicture} responsive />
              </Col>
            </Row>
          </Grid>
          <Grid className='galleryPictureGrid' fluid>
            <Row className='pictureRow1'>
              <Col xs={4} sm={4} md={4} lg={4} xl={4} className='photoCol' onClick={()=>{this.setSinglePicture(photo1)}}><Image className='photo1' src={require('../images/galleryPhoto1.jpg')} responsive/></Col>
              <Col xs={4} sm={4} md={4} lg={4} xl={4} className='photoCol' onClick={()=>{this.setSinglePicture(photo2)}}><Image className='photo2' src={require('../images/galleryPhoto2.jpg')} responsive/></Col>
              <Col xs={4} sm={4} md={4} lg={4} xl={4} className='photoCol' onClick={()=>{this.setSinglePicture(photo3)}}><Image className='photo3' src={require('../images/galleryPhoto3.jpg')} responsive/></Col>
            </Row>
            <Row className='pictureRow'>
              <Col xs={4} sm={4} md={4} lg={4} xl={4} className='photoCol' onClick={()=>{this.setSinglePicture(photo4)}}><Image className='photo4' src={require('../images/galleryPhoto4.jpg')} responsive/></Col>
              <Col xs={4} sm={4} md={4} lg={4} xl={4} className='photoCol' onClick={()=>{this.setSinglePicture(photo5)}}><Image className='photo5' src={require('../images/galleryPhoto5.jpg')} responsive/></Col>
              <Col xs={4} sm={4} md={4} lg={4} xl={4} className='photoCol' onClick={()=>{this.setSinglePicture(photo6)}}><Image className='photo6' src={require('../images/galleryPhoto6.jpg')} responsive/></Col>
            </Row>
            <Row className='pictureRow'>
              <Col xs={4} sm={4} md={4} lg={4} xl={4} className='photoCol' onClick={()=>{this.setSinglePicture(photo5)}}><Image className='photo7' src={require('../images/galleryPhoto5.jpg')} responsive/></Col>
              <Col xs={4} sm={4} md={4} lg={4} xl={4} className='photoCol' onClick={()=>{this.setSinglePicture(photo1)}}><Image className='photo8' src={require('../images/galleryPhoto1.jpg')} responsive/></Col>
              <Col xs={4} sm={4} md={4} lg={4} xl={4} className='photoCol' onClick={()=>{this.setSinglePicture(photo4)}}><Image className='photo9' src={require('../images/galleryPhoto4.jpg')} responsive/></Col>
            </Row>
            <Row className='pictureRow'>
              <Col xs={4} sm={4} md={4} lg={4} xl={4} className='photoCol' onClick={()=>{this.setSinglePicture(photo2)}}><Image className='photo10' src={require('../images/galleryPhoto2.jpg')} responsive/></Col>
              <Col xs={4} sm={4} md={4} lg={4} xl={4} className='photoCol' onClick={()=>{this.setSinglePicture(photo4)}}><Image className='photo11' src={require('../images/galleryPhoto4.jpg')} responsive/></Col>
              <Col xs={4} sm={4} md={4} lg={4} xl={4} className='photoCol' onClick={()=>{this.setSinglePicture(photo3)}}><Image className='photo12' src={require('../images/galleryPhoto3.jpg')} responsive/></Col>
            </Row>
            <Row className='pictureRow5'>
              <Col xs={4} sm={4} md={4} lg={4} xl={4} className='photoCol' onClick={()=>{this.setSinglePicture(photo4)}}><Image className='photo13' src={require('../images/galleryPhoto4.jpg')} responsive/></Col>
              <Col xs={4} sm={4} md={4} lg={4} xl={4} className='photoCol' onClick={()=>{this.setSinglePicture(photo1)}}><Image className='photo14' src={require('../images/galleryPhoto1.jpg')} responsive/></Col>
              <Col xs={4} sm={4} md={4} lg={4} xl={4} className='photoCol' onClick={()=>{this.setSinglePicture(photo6)}}><Image className='photo15' src={require('../images/galleryPhoto6.jpg')} responsive/></Col>
            </Row>
          </Grid>
        </div>

        <Footer/>
      </div>
    )
  }
}

export default Portfolio;
