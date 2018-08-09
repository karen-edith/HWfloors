import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer'

class HomePage extends Component {
  render() {
    return(
      <div>
        <NavBar/>
        <Footer/>
      </div>
    )
  }
}

export default HomePage;
