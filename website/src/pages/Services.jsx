import React, {Component} from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import {Grid, Row, Image, Glyphicon} from 'react-bootstrap';
import './Services.css';
import installing from '../images/Installation.png';
import repairing from '../images/repair.jpg';
import finishing from '../images/finishing.jpg';
import ServiceSelection from '../functions/ServiceSelection';
import LeftArrow from '../functions/LeftArrow'
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
        background: `url(${this.state.backgroundPhoto})`,
        backgroundRepeat:'no-repeat',
        backgroundSize:'contain',
        backgroundPosition:'center'
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
        {ServiceSelection().selectType(this.state.currentPhoto, installing, finishing, repairing)}
        <Grid className='pictureGrid' fluid>
          <Row style={this.backgroundStyles()} className='pictureRowCenter'>
            {
              !this.state.forwards ?
              (
                <div>
                  <Image className={!this.state.switch ? 'ImageWidth none' : 'hide'} src={this.state.currentPhoto} responsive />
                  <Image className={(this.state.something)? 'ImageWidth hide' : (!this.state.switch ? 'ImageWidth hide' : 'ImageWdith lefttransx')} src={this.state.currentPhoto} responsive />
                  <Image className={(this.state.something )? 'ImageWidth lefttransition' : 'ImageWdith hide' } src={this.state.currentPhoto} responsive />
                </div>
              ):
              (
                <div>
                  <Image className={(this.state.something)? 'ImageWidth hide' : (!this.state.switch ? 'ImageWidth hide' : 'ImageWdith righttransx')} src={this.state.currentPhoto} responsive />
                  <Image className={(this.state.something )? 'ImageWidth righttransition' : 'ImageWdith hide' } src={this.state.currentPhoto} responsive />
                </div>
              )


            }

            <div className='leftArrow' onClick={()=>{
              this.setState({forwards:false})
              console.log(this.state.leftCounter)
              console.log(this.state.rightCounter)
              LeftArrow().leftClick(this.boundThis.bind(this), installing)
            }}> <Glyphicon glyph='chevron-left'/></div>
            <div className='rightArrow' onClick={()=>{
              this.setState({forwards:true})
              console.log(this.state.leftCounter)
              console.log(this.state.rightCounter)
              this.state.photoArray.map((item, index)=>{
                let test = this.state.photoArray.slice()
                if(item === this.state.currentPhoto) {
                  if ((index === 0) && (this.state.backgroundPhoto === installing) && (!this.state.switch)){
                    console.log('k1')
                    this.setState({backgroundPhoto:test[index+1], currentPhoto:test[index], switch:true, something: false, rightCounter: this.rightCounter()})
                  } else if ((index === 0) && (this.state.backgroundPhoto !== installing)) {
                      switch(this.state.leftCounter) {
                        case 0:
                            if (!this.state.something) {
                              console.log('a1')
                              this.setState({backgroundPhoto: test[index+2], currentPhoto:test[index+1], something: true, rightCounter: this.rightCounter()})
                            } else if (this.state.something){
                              console.log('a1')
                              this.setState({backgroundPhoto: test[index+2], currentPhoto:test[index+1], something: false, rightCounter: this.rightCounter()})
                            }
                            break
                        case 1:
                        case 2:
                            if (!this.state.something) {
                              console.log('a1')
                              this.setState({backgroundPhoto: test[index], currentPhoto:test[index+2], something: true, rightCounter: this.rightCounter(), leftCounter:0})
                            } else if (this.state.something){
                              console.log('a1')
                              this.setState({backgroundPhoto: test[index], currentPhoto:test[index+2], something: false, rightCounter: this.rightCounter(), leftCounter:0})
                            }
                            break
                        default:
                            console.log(this.state.leftCounter)
                      }
                  } else if (index === 1) {
                    switch(this.state.leftCounter) {
                      case 0:
                          if(!this.state.something) {
                            console.log('r1')
                            this.setState({backgroundPhoto: test[index-1], currentPhoto:test[index+1], something: true, rightCounter: this.rightCounter()})
                          } else if (this.state.something) {
                            console.log('r1')
                            this.setState({backgroundPhoto: test[index-1], currentPhoto:test[index+1], something: false, rightCounter: this.rightCounter()})
                          }
                          break
                      case 1:
                      case 2:
                          if(!this.state.something) {
                            console.log('r1')
                            this.setState({backgroundPhoto: test[index], currentPhoto:test[index-1], something: true, rightCounter:this.rightCounter(), leftCounter:0})
                          } else if (this.state.something) {
                            console.log('r1')
                            this.setState({backgroundPhoto: test[index], currentPhoto:test[index-1], something: false, rightCounter:this.rightCounter(), leftCounter:0})
                          }
                          break
                      default:
                          console.log(this.state.leftCounter)
                    }
                  } else if (index === 2) {
                    switch(this.state.leftCounter) {
                      case 0:
                          if(!this.state.something) {
                            console.log('n1')
                            this.setState({backgroundPhoto: test[index-1], currentPhoto:test[index-2], something: true, rightCounter:this.rightCounter()})
                          } else if(this.state.something) {
                            console.log('n1')
                            this.setState({backgroundPhoto: test[index-1], currentPhoto:test[index-2], something: false, rightCounter:this.rightCounter()})
                          }
                          break
                      case 1:
                          if(!this.state.something) {
                            console.log('n1')
                            this.setState({backgroundPhoto: test[index], currentPhoto:test[index-1], something: true, rightCounter:this.rightCounter(), leftCounter:0})
                          } else if(this.state.something) {
                            console.log('n1')
                            this.setState({backgroundPhoto: test[index], currentPhoto:test[index-1], something: false, rightCounter:this.rightCounter(), leftCounter:0})
                          }
                          break
                      case 2:
                          if(!this.state.something) {
                            console.log('n1')
                            this.setState({backgroundPhoto: test[index], currentPhoto:test[index-1], something: true, rightCounter:this.rightCounter(), leftCounter:0})
                          } else if(this.state.something) {
                            console.log('n1')
                            this.setState({backgroundPhoto: test[index], currentPhoto:test[index-1], something: false, rightCounter:this.rightCounter(), leftCounter:0})
                          }
                          break
                      default:
                          console.log(this.state.leftCounter)
                    }
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
