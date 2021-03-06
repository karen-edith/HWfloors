import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

var ServiceType = function() {
  return {
    installing: function() {
      return(
        <Grid className='servicesGrid' fluid>
          <Row className='servicesRow'>
          <Col className='servicesCol' xs={5} sm={5} md={5} lg={5} xl={5}>
            <div className='servicesColTitle'> Installing </div>
          </Col>
          <Col className='servicesCol' xs={7} sm={7} md={7} lg={7} xl={7}>
            <div className='servicesColDescription'>
              For dedication in providing you with the best service – from
              the initial call to the handshake at the end of the job – Eternity
              Hardwood Floors is #1! We have many years of experience and
              can install on just about all sub-flooring surfaces. Eternity
              can even build sub-flooring before we install your wood floors!
              Our installation services include: Removal of old floor (carpet, etc.),
              Glue down installations, Nail down installations, Sub-floor building,
              Installing over existing foundations and Installing over concrete slabs.
            </div>
            <div className='servicesColBottomDescription'>
              We have 15 years of experience and can install on just about all sub-flooring surfaces
            </div>
          </Col>
          </Row>
        </Grid>
      )
    },

    finishing: function() {
      return (
        <Grid className='servicesGrid' fluid>
          <Row className='servicesRow'>
            <Col className='servicesCol' xs={5} sm={5} md={5} lg={5} xl={5}>
              <div className='servicesColTitle'> Finishing</div>
            </Col>
            <Col className='servicesCol' xs={7} sm={7} md={7} lg={7} xl={7}>
              <div className='servicesColDescription'>
                A great floor finish will protect your floor from everyday wear
                and tear, dirt, moisture and instill color and luster. Surface
                Finishes may involve applying a stain to reach a particular color,
                followed by a top coat of polyurethane that will give a protective
                coat to the floor. Surface finishes are durable. They resist
                moisture and are easily maintained. Penetrating Stains and Finishes
                penetrate into the wood and form a seal. The stain soaks in and a
                Polyurethane coating
              </div>
              <div className='servicesColBottomDescription'>
                Eternity Hardwood Floors, Inc has Highly Skilled and Experienced
                Installers, Licensed and Bonded in the State of California. All
                City Hardwood Floors provides detailed and clear estimates and
                written contracts.
              </div>
            </Col>
          </Row>
        </Grid>
      )
    },

    repairing: function() {
      return(
        <Grid className='servicesGrid' fluid>
          <Row className='servicesRow'>
            <Col className='servicesCol' xs={5} sm={5} md={5} lg={5} xl={5}>
              <div className='servicesColTitle'> Repairing</div>
            </Col>
            <Col className='servicesCol' xs={7} sm={7} md={7} lg={7} xl={7}>
              <div className='servicesColDescription'>
                Eternity Hardwood Floors can restore your hardwood floors to look
                 like new! We use top quality finishes and restoration products
                 and techniques to ensure you a fabulous floor. Sanding provides
                 a method for smoothing an installed floor, compensating for
                 unevenness of the sub-floor. Additionally, sanding is used to
                 renew the appearance of older floors. Sanding using successively
                 finer grades of sandpaper is required to ensure even stain penetration
                 when stains are used.
              </div>
              <div className='servicesColBottomDescription'>
                Custom hardwood colors, finishes and tints, Eco friendly and water
                based products are some examples of what we work with.
              </div>
            </Col>
          </Row>
        </Grid>
      )
    }

  }
}

export default ServiceType;
