import React from 'react';
import { Row, Col, Container, Image } from 'react-bootstrap';
import "./About.css";



function Resume(){
          
          return(                 
                    <div className='about-container' autoPlay loop muted>
                              <video className='about-page-video'
                                           autoPlay
                                           loop 
                                           muted
                                           style={{
                                                     position: "absolute",
                                                     width: "100%",
                                                     left: "50%",
                                                     top: "50%",
                                                     height: "100%",
                                                     objectFit: "cover",
                                                     transform: "translate(-50%, -50%)",
                                                     zIndex: "-1",
                                                     overflow:'hidden'
                                           }}>
                                        <source src='./static/skate.mp4' />
                              </video>
                              <Container className='title pt-5'>
                                        <h2 className='mt-4 mb-5 text-center'>Resume</h2>
                              </Container>
                              <Container className='about-content-container' >
                                       <Row className='about-content-row'>
                                                  <Col className='about-image mb-5' xs ={12}sm={12} md={12} xl={12} lg={12}>
                                                            <Image className='resume-img' src="./static/resume.jpg"    />
                                                  </Col>
                                       </Row>
                              </Container>                
                    </div>

          )
}

export default Resume;