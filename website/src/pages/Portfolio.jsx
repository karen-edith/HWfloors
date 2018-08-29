import React, {Component} from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import {Grid, Row, Col, Image, Glyphicon} from 'react-bootstrap';
import './Portfolio.css';
import photo1 from '../images/galleryPhoto1.jpg';
import photo2 from '../images/galleryPhoto2.jpg';
import photo3 from '../images/galleryPhoto3.jpg';
import photo4 from '../images/galleryPhoto4.jpg';
import photo5 from '../images/galleryPhoto5.jpg';
import photo6 from '../images/galleryPhoto6.jpg';
import photo7 from '../images/galleryPhoto7.jpg';
import photo8 from '../images/galleryPhoto8.jpg';
import photo9 from '../images/galleryPhoto9.jpg';
import photo10 from '../images/galleryPhoto10.jpg';
import photo11 from '../images/galleryPhoto11.jpg';
import photo12 from '../images/galleryPhoto12.jpg';
import photo13 from '../images/galleryPhoto13.jpg';
import photo14 from '../images/galleryPhoto14.jpg';
import photo15 from '../images/galleryPhoto15.jpg';

class Portfolio extends Component {
  constructor(props){
    super(props);
    this.state = {
      singlePicture: photo1,
      opacityArray: ['yes', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no'],
      pictureRowArray: [0, 3, 6, 9, 12],
      pictureArray:[photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9, photo10, photo11, photo12, photo13, photo14, photo15],
      windowWidth: window.innerWidth,
      rows:1
    }
  }

  setSinglePicture(picture, index){
    console.log(index)
    console.log('hey')
    let opacityArray = this.state.opacityArray.slice()
    opacityArray.map((item, i) => {
      console.log(i)
      if(i === index) {
        opacityArray[i] = 'yes'
      } else {
        opacityArray[i] = 'no'
      }
      return null
    })
    this.setState({opacityArray: opacityArray, singlePicture: picture, opacity:'0.3'})
  }

  opacity(index){
    switch(this.state.opacityArray[index]) {
      case 'yes':
          return {opacity:'0.3'}
      case 'no':
          return {opacity:'1'}
      default:
          console.log(index)
    }
  }

  handleResize() {
    this.setState({windowWidth: window.innerWidth})
  }

  componentDidMount() {
    this.handleResize()
    window.addEventListener('resize', this.handleResize.bind(this))
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize.bind(this))
  }

  rightRowSelection(currentRow) {
    let row
    let totalNumberOfRows = this.state.pictureRowArray.length
    if(currentRow < totalNumberOfRows) {row = 'middle'}
    else if(currentRow === totalNumberOfRows) {row='last'}

    switch(row){
      case 'middle':
          this.setState({rows:currentRow+1})
          break
      case 'last':
          this.setState({rows:totalNumberOfRows})
          break
      default:
          console.log(row)
          break
    }
  }

  leftRowSelection(currentRow){
    let row
    let totalNumberOfRows = this.state.pictureRowArray.length
    if(currentRow === 1){row = 'first'}
    else if((currentRow >1) && (currentRow < totalNumberOfRows)) {row = 'middle'}
    else if(currentRow === totalNumberOfRows) {row='last'}

    switch(row){
      case 'first':
          this.setState({rows:1})
          break
      case 'middle':
      case 'last':
          this.setState({rows:currentRow-1})
          break
      default:
          console.log(row)
          break
    }
  }

  rightArrowColor(){
    if(this.state.rows === this.state.pictureRowArray.length){return {color:'#F0EDED'}}
    else{return {color:'black'}}
  }

  leftArrowColor(){
    if(this.state.rows === 1){return {color:'#F0EDED'}}
    else{return {color:'black'}}
  }

  render() {
    let width = this.state.windowWidth
    let block
    if(width <= 767) { block = 'below'}
    else if (width > 767) { block ='next to'}

    switch(block) {
      case 'next to':
          return(
        <div>
          <NavBar/>
          <div className='galleryContainer'>
             <Grid className='singlePictureGrid' fluid>
               <Row className='singlePictureRow'>
                 <Col className='singlePictureCol'>
                   <Image className='singlePhoto' src={this.state.singlePicture} responsive />
                 </Col>
               </Row>
             </Grid>
            <Grid className='galleryPictureGrid' fluid>
              {
                this.state.pictureRowArray.map((item, index) => {
                  let number1 = item+1, number2 = item+2, number3 = item+3
                  return(
                    <Row className='pictureRow' key={index}>
                      <Col xs={4} sm={4} md={4} lg={4} xl={4} className='photoCol' onClick={()=>{this.setSinglePicture(this.state.pictureArray[item], item)}}>
                        <Image src={require('../images/galleryPhoto' + number1 + '.jpg')} style={this.opacity(item)} responsive/>
                      </Col>
                      <Col xs={4} sm={4} md={4} lg={4} xl={4} className='photoCol' onClick={()=>{this.setSinglePicture(this.state.pictureArray[item+1], item+1)}}>
                        <Image src={require('../images/galleryPhoto' + number2 + '.jpg')} style={this.opacity(item+1)} responsive/>
                      </Col>
                      <Col xs={4} sm={4} md={4} lg={4} xl={4} className='photoCol' onClick={()=>{this.setSinglePicture(this.state.pictureArray[item+2], item+2)}}>
                        <Image src={require('../images/galleryPhoto' + number3 + '.jpg')} style={this.opacity(item+2)} responsive/>
                      </Col>
                    </Row>
                  )
                })
              }
            </Grid>
          </div>

          <Footer/>
        </div>
      )
      case 'below':
          return(
          <div>
          <NavBar/>
          <div className='galleryContainer'>
             <Grid className='singlePictureGrid' fluid>
               <Row className='singlePictureRow'>
                 <Col className='singlePictureCol'>
                   <Image className='singlePhoto' src={this.state.singlePicture} responsive />
                 </Col>
               </Row>
             </Grid>
            <Grid className='galleryPictureGrid' fluid>
              {
                this.state.pictureRowArray.map((item, index) => {
                  let firstImage = index+1, secondImage = index+2, thirdImage = index+3
                  let rowImage1 = this.state.rows, rowImage2 = this.state.rows+1, rowImage3 = this.state.rows+2
                  if ((firstImage === rowImage1) && (secondImage === rowImage2) && (thirdImage === rowImage3)){
                    return(
                      <Row className='pictureRow' key={index}>
                        <Col xs={2} className='photoCol'></Col>
                        <Col xs={1} className='photoCol menuRight'
                          onClick={()=>{
                          this.leftRowSelection(index+1);
                          if((index+1>1) && (index+1<=this.state.pictureRowArray.length)){
                            this.setSinglePicture(this.state.pictureArray[item-3], item-3)
                          } else if(index+1 === 1){
                            this.setSinglePicture(this.state.pictureArray[item], item)
                          }
                        }}><Glyphicon glyph = 'menu-left' style={this.leftArrowColor()}/></Col>
                        <Col xs={2} sm={4} md={4} lg={4} xl={4} className='photoCol' onClick={()=>{this.setSinglePicture(this.state.pictureArray[item], item)}}>
                          <Image src={require('../images/galleryPhoto' + firstImage + '.jpg')} style={this.opacity(item)} responsive/>
                        </Col>
                        <Col xs={2} sm={4} md={4} lg={4} xl={4} className='photoCol' onClick={()=>{this.setSinglePicture(this.state.pictureArray[item+1], item+1)}}>
                          <Image src={require('../images/galleryPhoto' + secondImage + '.jpg')} style={this.opacity(item+1)} responsive/>
                        </Col>
                        <Col xs={2} sm={4} md={4} lg={4} xl={4} className='photoCol' onClick={()=>{this.setSinglePicture(this.state.pictureArray[item+2], item+2)}}>
                          <Image src={require('../images/galleryPhoto' + thirdImage + '.jpg')} style={this.opacity(item+2)} responsive/>
                        </Col>
                        <Col xs={1} className='photoCol menuLeft'
                          onClick={()=>{this.rightRowSelection(index+1);
                            if(index+1 < this.state.pictureRowArray.length){
                              this.setSinglePicture(this.state.pictureArray[item+3], item+3)
                            } else if(index+1 === this.state.pictureRowArray.length){
                              this.setSinglePicture(this.state.pictureArray[item], item)
                            }
                            }}>
                            <Glyphicon glyph = 'menu-right' style={this.rightArrowColor()}/>
                        </Col>
                        <Col xs={2} className='photoCol'></Col>
                      </Row>
                    )
                  } else return null

                })
              }
            </Grid>
          </div>

          <Footer/>
          </div>
        )
      default:
          return null
    }

  }
}

export default Portfolio;
