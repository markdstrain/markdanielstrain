import React from 'react';
import { library  } from '@fortawesome/fontawesome-svg-core';
import { scroller } from 'react-scroll';
import { faLinkedinIn,  } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons'
import { Row, Col, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./Contact.css";

library.add(faLinkedinIn, faGithub, faEnvelope, faAngleDoubleUp);

function Contact(){

          const scrollTarget = (target) => scroller.scrollTo(target, {linear: true, duration: 400});

          const scrollToPage = async (target) => {
                    scrollTarget(target);
          };
          
          return( 

                    <div name="section5" className='contact-container' autoPlay loop muted>
                              <video className='contact-page-video'
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
                                        <source src='./static/art.mp4' />
                              </video>
                              <Container className='title pt-5'>
                                        <h2 className='mt-4 mb-5 text-center responsive'>Contact</h2>
                              </Container>
                              <Container className='contact-content-container mb-5' >
                                       <h3 className='contact-words responsive'>
                                                 Please feel free to contact me at 
                                        </h3>
                              </Container>
                              <Container className='contact-content-container mt-5'>
                                        <a
                                                  className='email-anchor'
                                                  href="mailto:markdstrain@gmail.com"
                                                  target="_blank"
                                                  rel='noreferrer'
                                        >
                                        <nav className='contact-button'
                                                                                                
                                        >
                                                  <ul>
                                                            <li>
                                                                      My Email
                                                                      <span></span><span></span><span></span><span></span>
                                                            </li>
                                                  </ul>
                                        </nav>
                                        </a>
                              </Container>
                              <Container className='footer'>
                                       
                                                  
                                       
                                        <Row className='icons-container'>
                                                  <Col className="arrow mb-5" xs={12} sm={12} md={12} lg={12} xl={12} style={{display:'flex', justifyContent: 'center'}}>
                                                            <div className='link link-footer'
                                                                      onClick={()=> scrollToPage('section1')} 
                                                            >
                                                                      <FontAwesomeIcon className="link link-footer" icon={['fa','angle-double-up']} />
                                                            </div>
                                                            
                                                  </Col>
                                                  <Col  className="column1" xs={4} sm={4} md={4} lg={4} style={{display: 'flex', justifyContent: 'right'}}>
                                                            <a className='link link-footer' 
                                                                      href="https://www.linkedin.com/in/markdstrain/" 
                                                                      target="_blank"
                                                                      rel='noreferrer'
                                                            >
                                                                      <FontAwesomeIcon className='link link-footer ' icon={['fab', 'linkedin-in']}/>
                                                            </a>
                                                  </Col>
                                                  <Col className='column2' xs={4} sm={4} md={4} lg={4} style={{display: 'flex', justifyContent: 'center'}}>
                                                            <a className='link link-footer'
                                                                      href="https://github.com/markdstrain" 
                                                                      target="_blank"
                                                                      rel='noreferrer'
                                                            >
                                                                      <FontAwesomeIcon className='link link-footer' icon={['fab','github']}/>
                                                            </a>
                                                  </Col>
                                                  <Col className='column3' xs={4} sm={4} md={4} lg={4} style={{display: 'flex', justifyContent: 'left'}}>
                                                            <a className='link link-footer'
                                                                      href="mailto:markdstrain@gmail.com"
                                                                      target="_blank"
                                                                      rel='noreferrer'
                                                  >
                                                                      <FontAwesomeIcon className='link link-footer ' icon={['far', 'envelope']} href="mailto:markdstrain@gmail.com"/>
                                                            </a>
                                                  </Col>   
                                        </Row>
                              </Container>                
                    </div>
                   

          )
}

export default Contact;
