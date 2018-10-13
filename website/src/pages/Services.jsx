import React, {Component} from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import {Grid, Row, Image, Glyphicon} from 'react-bootstrap';
import './Services.css';
import installing from '../images/Installation.png';
import repairing from '../images/repair.jpg';
import finishing from '../images/finishing.jpg';
import ServiceSelection from '../functions/ServiceSelection';
//import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Services extends Component {

  constructor(props){
    super(props)
    this.state = {
      photoArray:[installing, finishing, repairing],
      currentPhoto: installing,
      backgroundPhoto: installing,
      switch:false,
      something: false,
      forwards: false
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
              this.state.photoArray.map((item, index)=>{
                let test = this.state.photoArray.slice()
                if(item === this.state.currentPhoto) {
                  if ((index === 0) && (this.state.backgroundPhoto === installing)){
                    console.log('k1')
                    this.setState({backgroundPhoto:test[index+2], currentPhoto:test[index], switch:true, something: false})
                  } else if ((index === 0) && (this.state.backgroundPhoto !== installing)) {
                      if (!this.state.something) {
                        console.log('a1')
                        this.setState({backgroundPhoto: test[index+1], currentPhoto:test[index+2], something: true})
                      } else if (this.state.something){
                        console.log('a1')
                        this.setState({backgroundPhoto: test[index+1], currentPhoto:test[index+2], something: false})
                      }
                  }

                  else if ((index !== 0) && (index!==1)) {
                      if(index%2 !==0) {
                        if(!this.state.something) {
                          console.log('r1')
                          this.setState({backgroundPhoto: test[index-2], currentPhoto:test[index-1], something: true})
                        } else if (this.state.something) {
                          console.log('r1')
                          this.setState({backgroundPhoto: test[index-2], currentPhoto:test[index-1], something: false})
                        }
                      } else if (index%2 === 0) {
                        if(!this.state.something) {
                          console.log('e1')
                          this.setState({backgroundPhoto: test[index-2], currentPhoto:test[index-1], something: true})
                        } else if (this.state.something) {
                          console.log('e1')
                          this.setState({backgroundPhoto: test[index-2], currentPhoto:test[index-1], something: false})
                        }
                      }
                  }

                  else if ((index === 1)) {
                      if(test.length%2 !== 0) {
                        if(!this.state.something) {
                          console.log('n1')
                          this.setState({backgroundPhoto: test[index+1], currentPhoto:test[index-1], something: true})
                        } else if(this.state.something) {
                          console.log('n1')
                          this.setState({backgroundPhoto: test[index+1], currentPhoto:test[index-1], something: false})
                        }
                      }  else if(test.length%2 === 0) {
                        if(!this.state.something) {
                          console.log('g1')
                          this.setState({backgroundPhoto: test[index+1], currentPhoto:test[index-1], something: true})
                        } else if (this.state.something) {
                          console.log('g1')
                          this.setState({backgroundPhoto: test[index+1], currentPhoto:test[index-1], something: false})
                        }

                      }
                  }
                }
                return null
              })
            }}> <Glyphicon glyph='chevron-left'/></div>
            <div className='rightArrow' onClick={()=>{
              this.setState({forwards:true})
              this.state.photoArray.map((item, index)=>{
                let test = this.state.photoArray.slice()
                if(item === this.state.currentPhoto) {
                  if ((index === 0) && (this.state.backgroundPhoto === installing)){
                    console.log('k1')
                    this.setState({backgroundPhoto:test[index+1], currentPhoto:test[index], switch:true, something: false})
                  } else if ((index === 0) && (this.state.backgroundPhoto !== installing)) {
                      if (!this.state.something) {
                        console.log('a1')
                        this.setState({backgroundPhoto: test[index+2], currentPhoto:test[index+1], something: true})
                      } else if (this.state.something){
                        console.log('a1')
                        this.setState({backgroundPhoto: test[index+2], currentPhoto:test[index+1], something: false})
                      }
                  }

                  else if ((index !== 0) && (index!==2)) {
                      if(index%2 !==0) {
                        if(!this.state.something) {
                          console.log('r1')
                          this.setState({backgroundPhoto: test[index-1], currentPhoto:test[index+1], something: true})
                        } else if (this.state.something) {
                          console.log('r1')
                          this.setState({backgroundPhoto: test[index-1], currentPhoto:test[index+1], something: false})
                        }
                      } else if (index%2 === 0) {
                        if(!this.state.something) {
                          console.log('e1')
                          this.setState({backgroundPhoto: test[index+2], currentPhoto:test[index+1], something: true})
                        } else if (this.state.something) {
                          console.log('e1')
                          this.setState({backgroundPhoto: test[index+2], currentPhoto:test[index+1], something: false})
                        }
                      }
                  }

                  else if ((index === 2)) {
                      if(test.length%2 !== 0) {
                        if(!this.state.something) {
                          console.log('n1')
                          this.setState({backgroundPhoto: test[index-1], currentPhoto:test[index-2], something: true})
                        } else if(this.state.something) {
                          console.log('n1')
                          this.setState({backgroundPhoto: test[index-1], currentPhoto:test[index-2], something: false})
                        }
                      }  else if(test.length%2 === 0) {
                        if(!this.state.something) {
                          console.log('g1')
                          this.setState({backgroundPhoto: test[index-1], currentPhoto:test[index-2], something: true})
                        } else if (this.state.something) {
                          console.log('g1')
                          this.setState({backgroundPhoto: test[index-1], currentPhoto:test[index-2], something: false})
                        }

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
