import React, {Component} from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import {Grid, Row, Col, FormGroup, InputGroup, FormControl, Glyphicon} from 'react-bootstrap';
import './Contact.css';

class Contact extends Component {

  constructor(props){
    super(props)
    this.state={
      email:'',
      phone:'',
      name:'',
      message:''
    }
  }

  render() {
    return(
      <div>
        <NavBar/>
        <Grid className='contactgrid' fluid>
          <Row className='contactrow'>
            <Col xs={12} sm={8} md={8} lg={8} xl={8}>
              <div className='contact-title'>We want to Hear from you! Email or Call us for a free estimate today.</div>

              <form className='formcontainer'>
                <FormGroup>
                  <InputGroup className='finput'>
                    <InputGroup.Addon> <Glyphicon glyph='user'/> </InputGroup.Addon>
                    <FormControl
                      type='text'
                      value = {this.state.name}
                      placeholder = 'Full Name'
                      onChange={(event)=>this.setState({name: event.target.value})}
                    />
                  </InputGroup>
                  <InputGroup className='finput'>
                    <InputGroup.Addon> <Glyphicon glyph='envelope'/> </InputGroup.Addon>
                    <FormControl
                      type='text'
                      value = {this.state.email}
                      placeholder = 'Email Address'
                      onChange={(event)=>this.setState({email:event.target.value})}
                    />
                  </InputGroup>
                  <InputGroup className='finput'>
                    <InputGroup.Addon> <Glyphicon glyph='earphone'/> </InputGroup.Addon>
                    <FormControl
                      type='text'
                      value = {this.state.phone}
                      placeholder = 'Phone Number'
                      onChange={(event)=>this.setState({phone:event.target.value})}
                    />
                  </InputGroup>
                </FormGroup>
                <FormControl
                  componentClass='textarea'
                  placeholder='Your Messsage'
                  value = {this.state.message}
                  className='finput'
                  onChange={(event)=>this.setState({message:event.target.value})}
                />
              </form>
            </Col>
            <Col xs={12} sm={4} md={4} lg={4} xl={4}>
              <div className='circlecontainer'>
                <div className='circle1container'>
                  <div className='circle1'> <div className='circle1-overlay'><Glyphicon className='glyphenvelope' glyph='envelope'/></div></div>
                  <div className='circle-email'> HWfloors@gmail.com </div>
                </div>
                <div className='circle2container'>
                  <div className='circle2'> <div className='circle2-overlay'> <Glyphicon className='glyphphone' glyph='earphone'/> </div></div>
                  <div className='circle-phone'> (123) 456-7890 </div>
                </div>

              </div>
            </Col>
          </Row>
        </Grid>

        <Footer/>
      </div>
    )
  }
}

export default Contact
