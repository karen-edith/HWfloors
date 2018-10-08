import React, {Component} from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import {Grid, Row, Image, Glyphicon} from 'react-bootstrap';
import './Services.css';
import installing from '../images/Installation.png';
import finishing from '../images/repair.jpg';
import repairing from '../images/finishing.jpg';
import ServiceSelection from '../functions/ServiceSelection';
//import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Services extends Component {

  constructor(props){
    super(props)
    this.state = {
      photoArray:[installing, finishing, repairing],
      currentPhoto: installing,
      backgroundPhoto: repairing,
      switch:false
    }
  }

  backgroundStyles(){
    return{
        background: `url(${this.state.backgroundPhoto})`,
        backgroundRepeat:'no-repeat',
        backgroundSize:'contain',
        backgroundPosition:'center'
    }
  }

  translationFunction(){
    return{
        transform: 'translateX(-1500px)',
        transition: 'transform 3000ms ease-in',
    }

  }

  nonTranslationFunction(){
    return{
        transform: 'none'
    }
  }

  render(){
    return(
      <div>
        <NavBar />
        {ServiceSelection().selectType(this.state.currentPhoto, installing, finishing, repairing)}
        <Grid className='pictureGrid' fluid>
          <Row style={this.backgroundStyles()} className='pictureRowCenter'>
            <Image style={this.state.switch ? this.translationFunction() : this.nonTranslationFunction()} className='ImageWidth' src={this.state.currentPhoto} responsive />
            <div className='leftArrow' onClick={()=>{
              this.state.photoArray.map((item, index)=>{
                this.setState({switch:false})
                if(item === this.state.backgroundPhoto) {
                  if(index !== 0) {
                    let test = this.state.photoArray.slice()
                    this.setState({backgroundPhoto:test[index-1], currentPhoto:test[index], switch:true})
                  } else if (index === 0) {
                    let test = this.state.photoArray.slice()
                    this.setState({backgroundPhoto: test[2], currentPhoto:test[0], switch:true})
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
