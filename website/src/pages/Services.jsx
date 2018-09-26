import React, {Component} from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import {Grid, Col, Row} from 'react-bootstrap';
import './Services.css';

class Services extends Component {

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
        <Footer />
      </div>
    )
  }

}

export default Services
