import React, {Component} from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import {Grid, Row, Image, Glyphicon} from 'react-bootstrap';
import './Services.css';
import installing from '../images/Installation.png';
import repairing from '../images/repair.jpg';
import finishing from '../images/finishing.jpg';
import ServiceSelection from '../functions/ServiceSelection';
import LeftArrow from '../functions/LeftArrow';
import RightArrow from '../functions/RightArrow';
//import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Services extends Component {

  constructor(props){
    super(props)
    this.state = {
      photoArray:[installing, finishing, repairing],
      currentPhoto: installing,
      backgroundPhoto: installing,
      switch:false,
      forwards: false,
      something: false,
      leftCounter:0,
      rightCounter:0
    }
  }

  backgroundStyles(){
    return{
        background: `url(${this.state.backgroundPhoto}) no-repeat center center/cover`,
        /*backgroundSize:'contain',*/
        /*backgroundSize:'cover',*/
        /*backgroundPosition:'center',*/

    }
  }

  leftCounter(){
    let leftCounter
    if(this.state.leftCounter === 0) {leftCounter = 1}
    else if(this.state.leftCounter === 1) {leftCounter = 2}
    else if(this.state.leftCounter === 2) {leftCounter = 2}
    return leftCounter
  }

  rightCounter(){
    let rightCounter
    if(this.state.rightCounter === 0) {rightCounter = 1}
    else if(this.state.rightCounter === 1) {rightCounter = 2}
    else if(this.state.rightCounter === 2) {rightCounter = 2}
    return rightCounter
  }

  boundThis(){
    return this
  }

  render(){
    return(
      <div>
        <NavBar />
        {
          this.state.forwards ?
          (
            <div>
              <div className={this.state.something ? 'hide' : 'servicesDescriptionContainer'}>
                <div className='backgroundDescription'>{ServiceSelection().selectType(this.state.backgroundPhoto, installing, finishing, repairing)}</div>
                <div className ={!this.state.switch ?  'frontDescription' : (this.state.something ? 'frontDescription righttransx' : 'frontDescription righttransition')}>
                  <div className='backgroundDescription'> {ServiceSelection().selectType(this.state.currentPhoto, installing, finishing, repairing)}</div>
                </div>
              </div>

              <div className={this.state.something ? 'servicesDescriptionContainer': 'hide'}>
                <div className='backgroundDescription'>{ServiceSelection().selectType(this.state.backgroundPhoto, installing, finishing, repairing)}</div>
                <div className ={!this.state.switch ?  'frontDescription' : (this.state.something ? 'frontDescription righttransx' : 'frontDescription righttransition')}>
                  <div className='backgroundDescription'> {ServiceSelection().selectType(this.state.currentPhoto, installing, finishing, repairing)}</div>
                </div>
              </div>
            </div>

          )
          :
          (
            <div>
              <div className={this.state.something ? 'hide' : 'servicesDescriptionContainer'}>
                <div className='backgroundDescription'>{ServiceSelection().selectType(this.state.backgroundPhoto, installing, finishing, repairing)}</div>
                <div className ={!this.state.switch ?  'frontDescription' : (this.state.something ? 'frontDescription lefttransx' : 'frontDescription lefttransition')}>
                  <div className='backgroundDescription'> {ServiceSelection().selectType(this.state.currentPhoto, installing, finishing, repairing)}</div>
                </div>
              </div>
              <div className={this.state.something ? 'servicesDescriptionContainer' : 'hide'}>
                <div className='backgroundDescription'>{ServiceSelection().selectType(this.state.backgroundPhoto, installing, finishing, repairing)}</div>
                <div className ={!this.state.switch ?  'frontDescription' : (this.state.something ? 'frontDescription lefttransx' : 'frontDescription lefttransition')}>
                  <div className='backgroundDescription'> {ServiceSelection().selectType(this.state.currentPhoto, installing, finishing, repairing)}</div>
                </div>
              </div>
            </div>
        )
        }

        <Grid className='pictureGrid' fluid>
          <Row style={this.backgroundStyles()} className='pictureRowCenter'>
            {
              !this.state.forwards ?
              (
                  <div>
                    <div className='imgsize'><Image className={!this.state.switch ? 'ImageWidth none' : 'hide'} src={this.state.currentPhoto} responsive /></div>
                    <div className='imgsize'><Image className={(this.state.something)? 'ImageWidth hide' : (!this.state.switch ? 'ImageWidth hide' : 'ImageWdith lefttransx test')} src={this.state.currentPhoto} responsive /></div>
                    <div className='imgsize'><Image className={(this.state.something )? 'ImageWidth lefttransition test' : 'ImageWdith hide' } src={this.state.currentPhoto} responsive /></div>
                  </div>
              ):
              (
                  <div>
                    <div className='imgsize'><Image className={(this.state.something)? 'ImageWidth hide' : (!this.state.switch ? 'ImageWidth hide' : 'ImageWdith righttransx test')} src={this.state.currentPhoto} responsive /></div>
                    <div className='imgsize'><Image className={(this.state.something )? 'ImageWidth righttransition test' : 'ImageWdith hide' } src={this.state.currentPhoto} responsive /></div>
                  </div>
              )
            }

            <div className='leftArrow' onClick={()=>{
              this.setState({forwards:false})
              LeftArrow().leftClick(this.boundThis.bind(this), installing)
            }}>
              <Glyphicon glyph='chevron-left'/>
            </div>

            <div className='rightArrow' onClick={()=>{
              this.setState({forwards:true})
              RightArrow().rightClick(this.boundThis.bind(this), installing)
            }}>
              <Glyphicon glyph='chevron-right'/>
            </div>
          </Row>
        </Grid>
        <Footer/>
      </div>
    )
  }

}

export default Services
