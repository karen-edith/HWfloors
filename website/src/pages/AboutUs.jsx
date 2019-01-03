import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import {Grid, Row, Col, Image} from 'react-bootstrap';
import './AboutUs.css'

class AboutUs extends Component {
  render(){
    return(
      <div>
        <NavBar/>
        <div className = 'griddiv'>
          <Grid className='aboutusgrid' fluid>
          <Row className = 'aboutusrow'>
            <Col className='aboutuscol1 vcenter' xs={12} sm={12} md={7} lg={7} xl={7}> <Image className= "losAngeles" src={require('../images/city.png')} responsive/></Col>
            <Col className='aboutuscol2 vcenter' xs={12} sm={12} md={5} lg={5} xl={5}>
              <div className='aboutustitle'> Who We Are </div>
              <div className='aboutuspar'>
                <p>
                  Eternity Hardwood floors is a family owned business that was
                  established by Gil Garcia in 2004. Growing from a one-man company
                  to what it is now, Eternity has, for the past 15 years, provided
                  the highest quality in hardwood flooring to clients in the greater
                  Los Angeles area. Our flooring services are rooted in our mission
                  to create and innovate; we provide flooring services to fit apartments,
                  small and large homes, offices, commercial settings, and we accommodate
                  to any flooring design. We work closely with clients to ensure
                  that we bring their vision to life, using the finest materials
                  to fit all client needs and specifications in the process.
                </p>
                <p>
                  Our notable work includes two of Sylvester Stallone’s ex wife
                  anaheim homes where we had the opportunity to collaborate with
                  Ms. Stallone in designing and installing hard wood flooring. The
                  homes were featured in such and such Magazine. We also had the
                  opportunity to work with several mansion owners in the Santa Monica
                  and Beverly Hills area, repairing and installing hardwood flooring,
                  and bringing their vision to life. These homes were also featured
                  in such and such magazine.
                </p>
                <p>
                  Eternity Hardwood Flooring has been serving the community for
                  over a decade from the smallest repair of damage on hardwood floors
                  to installing the simplest or the most delicate pattern and style.
                </p>
              </div>
            </Col>
          </Row>
          </Grid>
        </div>

        <Footer/>
      </div>

    )
  }
}

export default AboutUs
