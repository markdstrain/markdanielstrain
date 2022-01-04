import React from 'react';
import { Container, Nav,  Navbar, Row, Col,  NavbarBrand } from 'react-bootstrap';
import { scroller } from 'react-scroll';
import { library  } from '@fortawesome/fontawesome-svg-core';
import { faLinkedinIn,  } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./Navbar.css";

library.add(faLinkedinIn, faGithub, faEnvelope);

function InfoBar(){
          const scrollTarget = (target) => scroller.scrollTo(target, {linear: true, duration: 400});

          const scrollToPage = async (target) => {
                    scrollTarget(target);
          };

          return(
                    <>
                              <Navbar  className="navbar" collapseOnSelect expand='lg' fixed='top'> 
                                        <NavbarBrand className='name'> 
                                                  <Nav.Link to='#'>
                                                                
                                                                      💻 🐇   <span className='link name pt-1'
                                                                                               onClick={()=> scrollToPage('section1')}
                                                                                >
                                                                                          Mark Strain
                                                                                </span> 
                                                            
                                                  </Nav.Link>
                                        </NavbarBrand>
                                        <Navbar.Toggle aria-controls='responsive-navbar-nav' />          
                                        <Navbar.Collapse id='responsive-navbar-nav' >
                                                  <Container className='row-container'>
                                                            <Row>
                                                                      <Col sm={0} lg={2} md={0} xl={1}/>
                                                                      <Col sm={12} lg={6} md={12} xl={8} className='center-col pt-1' style={{display: 'flex', justifyContent: 'center' }}>
                                                                                <Nav >
                                                                                          <Nav.Item  >
                                                                                                    <div/>
                                                                                                    <Nav.Link 
                                                                                                              to="#"
                                                                                                              eventKey="event1"
                                                                                                              onClick={()=> scrollToPage('section2')}
                                                                                                    >  
                                                                                                              <div className="link link-text">
                                                                                                                       About 
                                                                                                              </div>                                                        
                                                                                                              
                                                                                                    </Nav.Link>
                                                                                          </Nav.Item >
                                                                                          <Nav.Item >
                                                                                                    <Nav.Link 
                                                                                                              to='#'
                                                                                                              eventKey="event2"
                                                                                                             onClick={()=> scrollToPage('section3')}
                                                                                                    >
                                                                                                              <div className="link link-text">
                                                                                                                        Projects
                                                                                                              </div>
                                                                                                    </Nav.Link>
                                                                                          </Nav.Item >
                                                                                          <Nav.Link 
                                                                                                    to="#"
                                                                                                    href='https://drive.google.com/file/d/1Q5ZNwClBjUbNq4G45Z3pghd55siX9_sz/view?usp=sharing'
                                                                                                    target="_blank"
                                                                                                    eventKey='event3'>
                                                                                                    <div className="link link-text">
                                                                                                              Resume
                                                                                                    </div>
                                                                                          </Nav.Link>
                                                                                          <Nav.Item>
                                                                                                    <Nav.Link  
                                                                                                              to="#"
                                                                                                              eventKey='event4 '
                                                                                                              onClick={()=> scrollToPage('section5')}
                                                                                                    >
                                                                                                              <div className="link link-text">
                                                                                                                        Contact 
                                                                                                              </div>   
                                                                                                    </Nav.Link>
                                                                                          </Nav.Item>
                                                                                </Nav>
                                                                      </Col>
                                                                      <Col className='pl-0' sm={12} lg={4} md={12} xl={3} style={{display: 'flex', justifyContent: 'center' }}>
                                                                                <Nav >
                                                                                          <Nav.Item >
                                                                                                    <Row >
                                                                                                              <Col xs={4} sm={4} md={4} lg={4} style={{display: 'flex', justifyContent: 'center'}}>
                                                                                                                        <Nav.Link 
                                                                                                                                            to="#"
                                                                                                                                            className='link link-icon' 
                                                                                                                                            href="https://www.linkedin.com/in/markdstrain/" 
                                                                                                                                            target="_blank"
                                                                                                                        >
                                                                                                                                  <FontAwesomeIcon className='link link-icon' icon={['fab', 'linkedin-in']}/>
                                                                                                                        </Nav.Link>
                                                                                                              </Col>
                                                                                                              <Col xs={4} sm={4} md={4} lg={4} style={{display: 'flex', justifyContent: 'center'}}>
                                                                                                                        <Nav.Link 
                                                                                                                                  to="#"
                                                                                                                                  className='link link-icon'
                                                                                                                                  href="https://github.com/markdstrain" 
                                                                                                                                  target="_blank"
                                                                                                                        >
                                                                                                                                  <FontAwesomeIcon className='link link-icon' icon={['fab','github']}/>
                                                                                                                        </Nav.Link>
                                                                                                              </Col>
                                                                                                              <Col xs={4} sm={4} md={4} lg={4} style={{display: 'flex', justifyContent: 'center'}}>
                                                                                                                        <Nav.Link 
                                                                                                                                            to="#"
                                                                                                                                            className='link link-icon'
                                                                                                                                            href="mailto:markdstrain@gmail.com"
                                                                                                                                            target="_blank"
                                                                                                                        >
                                                                                                                                  <FontAwesomeIcon className='link link-icon ' icon={['far', 'envelope']} href="mailto:markdstrain@gmail.com"/>
                                                                                                                        </Nav.Link>
                                                                                                              </Col>
                                                                                                    </Row>
                                                                                          </Nav.Item>
                                                                                </Nav>
                                                                      </Col>
                                                            </Row>
                                                  </Container>
                                        </Navbar.Collapse>
                              </Navbar>
                    </>
          )
}

export default InfoBar;