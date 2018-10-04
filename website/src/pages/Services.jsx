import React, {Component} from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import {Grid, Row, Image, Glyphicon} from 'react-bootstrap';
import './Services.css';
import installing from '../images/Installation.png';
import repairing from '../images/repair.jpg';
import finishing from '../images/finishing.jpg';
import ServiceSelection from '../functions/ServiceSelection';

class Services extends Component {

  constructor(props){
    super(props)
    this.state = {
      photoArray:[installing, finishing, repairing],
      currentPhoto: installing
    }
  }

  render(){
    return(
      <div>
        <NavBar />
        {ServiceSelection().selectType(this.state.currentPhoto, installing, finishing, repairing)}
        <Grid className='pictureGrid' fluid>
          <Row>
            <Image src={this.state.currentPhoto} responsive/>
            <div className='leftArrow' onClick={()=>{
              this.state.photoArray.map((item, index)=>{
                if(item === this.state.currentPhoto) {
                  if(index !== 0) {
                    let test = this.state.photoArray.slice()
                    this.setState({currentPhoto: test[index-1]})
                  } else if (index === 0) {
                    let test = this.state.photoArray.slice()
                    this.setState({currentPhoto: test[2]})
                  }
                }
                return null
              })
            }}> <Glyphicon glyph='chevron-left'/></div>
            <div className='rightArrow' onClick={()=>{
              this.state.photoArray.map((item, index)=>{
                if(item === this.state.currentPhoto) {
                  if(index !== 2) {
                    let test = this.state.photoArray.slice()
                    this.setState({currentPhoto: test[index+1]})
                  } else if (index === 2) {
                    let test = this.state.photoArray.slice()
                    this.setState({currentPhoto: test[0]})
                  }
                }
                return null
              })
            }}> <Glyphicon glyph='chevron-right'/></div>
          </Row>
        </Grid>
        <Footer/>
      </div>
    )
  }

}

export default Services
