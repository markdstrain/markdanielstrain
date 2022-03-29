import React from 'react';
import { Row, Col, Container, Image } from 'react-bootstrap';
import "./About.css";



function About(){
          
          
          return( 

                    <div name="section2" className='about-container' autoPlay loop muted>
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
                                        <h2 className='mt-4 mb-5 text-center responsive'>About Me!</h2>
                              </Container>
                              <Container className='about-content-container' >
                                       <Row className='about-content-row'>
                                                  <Col className='about-image mb-5' xs ={12}sm={12} md={12} xl={5} lg={12} style={{display: 'flex', justifyContent: 'left'}}>
                                                            <Image className='portrait' src="./static/Mark.jpeg"   roundedCircle thumbnail  />
                                                  </Col>
                                                  <Col className='about-text' xs={12} sm={12} xl={7} md={12} lg={12}>
                                                            <p className='responsive'>
                                                            Thanks so much for visiting my site!  I'm a Software Engineer with an ability 
                                                            for creative problem solving.  I have over 15 years of experience identifying and 
                                                            manufacturing solutions to customers residential carpentry needs. I've always been in love with tackling analytical 
                                                            problems with artistic and innovative solutions.  I believe this unique skill set will make 
                                                            me an excellent candidate for a junior position at any company.
                                                            </p>
                                                            <p className='responsive' style={{textDecoration:"underline"}}>
                                                                      Technical Skills & compentencies:
                                                            </p>
                                                            <p className='responsive' >
                                                            Mathematics, Client Relations, Software Development
                                                            </p>
                                                            <p className='responsive' >
                                                                      <span style={{textDecoration:"underline"}}>
                                                                                Front-End:
                                                                      </span>
                                                                      
                                                                      <span className='responsive' >
                                                                                Javascript, HTML, CSS, React, Redux, Bootstrap, JQuery
                                                                      </span>
                                                            </p>
                                                            
                                                            <p className='responsive' >
                                                                     <span style={{textDecoration:"underline"}}>Back-End:</span> 
                                                                     <span>
                                                                                Node.js, Express.js, Python, Flask, RESTful API Development, SQL, PostgreSQL, SQLAlchemy
                                                                     </span>
                                                            </p>
                                                  </Col>
                                       </Row>
                              </Container>                
                    </div>
                   

          )
}

export default About;

