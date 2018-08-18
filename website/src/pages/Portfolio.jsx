import React, {Component} from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import {Grid, Row, Col} from 'react-bootstrap';
import './Portfolio.css';

class Portfolio extends Component {
  render() {
    return(
      <div>
        <NavBar/>
        <Footer/>
      </div>
    )
  }
}

export default Portfolio;
