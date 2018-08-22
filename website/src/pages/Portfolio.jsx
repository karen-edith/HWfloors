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
      singlePicture: photo1,
      opacityArray: ['yes', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no'],
      pictureArray: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    }
  }

  setSinglePicture(picture, index){
    let opacityArray = this.state.opacityArray.slice()
    opacityArray.map((item, i) => {
      if(i === index) {
        opacityArray[i] = 'yes'
      } else {
        opacityArray[i] = 'no'
      }
      return null
    })
    this.setState({opacityArray: opacityArray, singlePicture: picture, opacity:'0.4'})
  }

  opacity(index){
    switch(this.state.opacityArray[index]) {
      case 'yes':
          return {opacity:'0.3'}
      case 'no':
          return {opacity:'1'}
      default:
          console.log(index)
    }
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
              <Col xs={4} sm={4} md={4} lg={4} xl={4} className='photoCol' onClick={()=>{this.setSinglePicture(photo1, 0)}}><Image ref='photo1' src={require('../images/galleryPhoto1.jpg')} style={this.opacity(0)} responsive/></Col>
              <Col xs={4} sm={4} md={4} lg={4} xl={4} className='photoCol' onClick={()=>{this.setSinglePicture(photo2, 1)}}><Image ref='photo2' src={require('../images/galleryPhoto2.jpg')} style={this.opacity(1)} responsive/></Col>
              <Col xs={4} sm={4} md={4} lg={4} xl={4} className='photoCol' onClick={()=>{this.setSinglePicture(photo3, 2)}}><Image ref='photo3' src={require('../images/galleryPhoto3.jpg')} style={this.opacity(2)} responsive/></Col>
            </Row>
            <Row className='pictureRow'>
              <Col xs={4} sm={4} md={4} lg={4} xl={4} className='photoCol' onClick={()=>{this.setSinglePicture(photo4, 3)}}><Image ref='photo4' src={require('../images/galleryPhoto4.jpg')} style={this.opacity(3)} responsive/></Col>
              <Col xs={4} sm={4} md={4} lg={4} xl={4} className='photoCol' onClick={()=>{this.setSinglePicture(photo5, 4)}}><Image ref='photo5' src={require('../images/galleryPhoto5.jpg')} style={this.opacity(4)} responsive/></Col>
              <Col xs={4} sm={4} md={4} lg={4} xl={4} className='photoCol' onClick={()=>{this.setSinglePicture(photo6, 5)}}><Image ref='photo6' src={require('../images/galleryPhoto6.jpg')} style={this.opacity(5)} responsive/></Col>
            </Row>
            <Row className='pictureRow'>
              <Col xs={4} sm={4} md={4} lg={4} xl={4} className='photoCol' onClick={()=>{this.setSinglePicture(photo5, 6)}}><Image ref='photo7' src={require('../images/galleryPhoto5.jpg')} style={this.opacity(6)} responsive/></Col>
              <Col xs={4} sm={4} md={4} lg={4} xl={4} className='photoCol' onClick={()=>{this.setSinglePicture(photo1, 7)}}><Image ref='photo8' src={require('../images/galleryPhoto1.jpg')} style={this.opacity(7)} responsive/></Col>
              <Col xs={4} sm={4} md={4} lg={4} xl={4} className='photoCol' onClick={()=>{this.setSinglePicture(photo4, 8)}}><Image ref='photo9' src={require('../images/galleryPhoto4.jpg')} style={this.opacity(8)} responsive/></Col>
            </Row>
            <Row className='pictureRow'>
              <Col xs={4} sm={4} md={4} lg={4} xl={4} className='photoCol' onClick={()=>{this.setSinglePicture(photo2, 9)}}><Image ref='photo10' src={require('../images/galleryPhoto2.jpg')} style={this.opacity(9)} responsive/></Col>
              <Col xs={4} sm={4} md={4} lg={4} xl={4} className='photoCol' onClick={()=>{this.setSinglePicture(photo4, 10)}}><Image ref='photo11' src={require('../images/galleryPhoto4.jpg')} style={this.opacity(10)} responsive/></Col>
              <Col xs={4} sm={4} md={4} lg={4} xl={4} className='photoCol' onClick={()=>{this.setSinglePicture(photo3, 11)}}><Image ref='photo12' src={require('../images/galleryPhoto3.jpg')} style={this.opacity(11)} responsive/></Col>
            </Row>
            <Row className='pictureRow5'>
              <Col xs={4} sm={4} md={4} lg={4} xl={4} className='photoCol' onClick={()=>{this.setSinglePicture(photo4, 12)}}><Image ref='photo13' src={require('../images/galleryPhoto4.jpg')} style={this.opacity(12)} responsive/></Col>
              <Col xs={4} sm={4} md={4} lg={4} xl={4} className='photoCol' onClick={()=>{this.setSinglePicture(photo1, 13)}}><Image ref='photo14' src={require('../images/galleryPhoto1.jpg')} style={this.opacity(13)} responsive/></Col>
              <Col xs={4} sm={4} md={4} lg={4} xl={4} className='photoCol' onClick={()=>{this.setSinglePicture(photo6, 14)}}><Image ref='photo15' src={require('../images/galleryPhoto6.jpg')} style={this.opacity(14)} responsive/></Col>
            </Row>
          </Grid>
        </div>

        <Footer/>
      </div>
    )
  }
}

export default Portfolio;
