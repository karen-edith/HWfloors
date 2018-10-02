import React, {Component} from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import {Grid, Col, Row Image, Glyphicon} from 'react-bootstrap';
import './Services.css';
import installing from '../images/Installation.png';
import repair from '../images/repair.jpg';
import finishing from '../images/finishing.jpg'

class Services extends Component {

  constructor(props){
    super(props)
    this.state = {
      photoArray: [installing, finishing, repair]
    }
  }

  render(){
    return(
      <div>
        <NavBar />
        <Grid className='servicesGrid' fluid>
          <Row className='servicesRow'>
            <Col className='servicesCol' xs={5} sm={5} md={5} lg={5} xl={5}>
              <div className='servicesColTitle'> Hardwood Floor Installation</div>
              <div className='servicesColLine'> </div>
            </Col>
            <Col className='servicesCol' xs={7} sm={7} md={7} lg={7} xl={7}>
              <div className='servicesColDescription'>
                For dedication in providing you with the best service – from
                the initial call to the handshake at the end of the job – All
                City Hardwood Floors is #1! We have many years of experience and
                can install on just about all sub-flooring surfaces. All City
                Hardwood Floors can even build sub-flooring before we install
                your wood floors! Our installation services include: Removal of old floor (carpet, etc.),
                Glue down installations, Nail down installations, Sub-floor building,
                Installing over existing foundations and Installing over concrete slabs.
                We are detailed oriented, fast and friendly. We are clean and punctual and
                client satisfaction is of most importance to us!
              </div>
              <div className='servicesColBottomDescription'>
                We have many years of experience and can install on just about all sub-flooring surfaces
              </div>
            </Col>
          </Row>
        </Grid>
        <Grid className='pictureGrid' fluid>
          <Row>
            <Image src={this.state.photoArray[0]} responsive/>
            <div className='leftArrow'> <Glyphicon glyph='chevron-left'/></div>
            <div className='rightArrow'> <Glyphicon glyph='chevron-right'/></div>
          </Row>
        </Grid>
        <Footer/>
      </div>
    )
  }

}

export default Services
