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
        <Grid className='aboutusgrid' fluid>
          <Row className = 'aboutusrow'>
            <Col className='aboutuscol1' xs={7} sm={7} md={7} lg={7} xl={7}> <Image src={require('../images/city.png')} responsive/></Col>
            <Col className='aboutuscol2' xs={5} sm={5} md={5} lg={5} xl={5}>
              <div className='aboutustitle'> Who We Are </div>
              <div className='aboutuspar'>
                <p>
                  Pacific Hardwood Flooring was established in 1990, from a
                  two man company to what it is now. Our objectives are quality
                  and creativity explored by our company, which enables us to
                  work with many homeowners anywhere from a small home to an
                  $70 million home. Our precision and  quality of work connects
                  us to large developers such as Hopkin’s Construction, joining
                  us and them with their projects from large homes to high end
                  condos. In addition to this, Penta Resources brings Pacific
                  Hardwood Flooring to many of Penta’s big projects like
                  Bloomingdale’s, many branches of Abercrombie Fitch, Glendale
                  and Burbank school districts, stage auditorium and civic center.
                </p>
                <p>
                  Our creativity landed our work in many magazines like the
                  Metropolitan and La Magazine. Under famous designers such as
                  Kelly Wearstler, who exposed her vivid imagination and opened
                  the door to Pacific Hardwood Flooring, we were able to do the
                  most amazing layout and incredible color on hardwood floors.
                  Tim Morrison trusted us to perform in many of his large projects,
                  as well. This includes Barbara Streisand’s mansion in Malibu
                  which put our skills to the ultimate level of high quality
                  and craftsmanship. This was shown in her book “my passion for design”.
                </p>
                <p>
                  Pacific Hardwood Flooring have been serving the community for
                  21 years from the smallest repair of damage on hardwood floors
                  to installing the simplest or the most delicate pattern and style.
                </p>
              </div>
            </Col>
          </Row>
        </Grid>
        <Footer/>
      </div>

    )
  }
}

export default AboutUs
