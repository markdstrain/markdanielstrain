import React from 'react';
import { Row, Col, Container, Image } from 'react-bootstrap';
import "./Projects.css"

function Projects() {
          return(
          
                    <div name="section3" className='project-container' autoPlay loop muted>
                              <video className='project-page-video'
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
                                        <source src='./static/ink.mp4' />
                              </video>
                              <Container className='title pt-5'>
                                        <h2 className='mt-4 mb-5 text-center responsive'>Projects</h2>
                              </Container>  
                              <Container className='project-content-container mt-5' >
                                       <Row className='project-content-row mt-5 mb-5'>
                                                  <Col className='project-text' xs={12} sm={12} xl={5} md={12} lg={12} >
                                                            <p className='responsive' style={{textDecoration: 'underline'}}>Basketball Tracker</p>
                                                            <p className='responsive'>
                                                                      Full-Stack Basketball Stat Tracker. Using NBA stats that were scraped from &nbsp;
                                                                      <a className='basketball-anchor' href='https://www.basketball-reference.com/'>basketball-reference.com</a>, &nbsp;
                                                                      one can follow all their favorite basketball players' stats.  With sign up and log in capabilites, a user 
                                                                      is able to add players to a fantasy league team so that they can keep up with their players' fantasy league 
                                                                      points. 
                                                                      <br/>
                                                                      <span style={{textDecoration:'underline'}}>Technologies Used:</span> JavaScript, Bootstrap, Beautiful Soup, Python, Flask, PostgreSQL, Bcrypt, SQLAlchemy, 
                                                                      and Jinja.
                                                            </p>
                                                            <Row  style={{display: 'flex', justifyContent: 'left' }}>
                                                                      <Col xs={6} sm={6} md={6} lg={6} xl={6} style={{display: 'flex', justifyContent: 'center' }}>
                                                                                <a
                                                                                          className='email-anchor'
                                                                                          href="https://github.com/markdstrain/NBAstats"
                                                                                          target="_blank"
                                                                                          rel='noreferrer'
                                                                                >
                                                                                          <nav className='contact-button' style={{display: 'flex', justifyContent: 'center' }}>
                                                                                                    <ul>
                                                                                                              <li>
                                                                                                                        Source 
                                                                                                                        <span></span><span></span><span></span><span></span>
                                                                                                              </li>
                                                                                                    </ul>
                                                                                          </nav>
                                                                                </a>
                                                                      </Col>
                                                                      <Col xs={6} sm={6} md={6} lg={6} xl={6} style={{display: 'flex', justifyContent: 'center' }}>
                                                                                <a
                                                                                          className='email-anchor'
                                                                                          href="https://basketball-tracker.herokuapp.com/"
                                                                                          target="_blank"
                                                                                          rel='noreferrer'
                                                                                >
                                                                                          <nav className='contact-button' style={{display: 'flex', justifyContent: 'center' }}>
                                                                                                    <ul style={{display: 'flex', justifyContent: 'left' }}>
                                                                                                              <li>
                                                                                                                        See Live
                                                                                                                        <span></span><span></span><span></span><span></span>
                                                                                                              </li>
                                                                                                    </ul>
                                                                                          </nav>
                                                                                </a>
                                                                      </Col>
                                                            </Row>
                                                  </Col>
                                                  <Col className='project-image mb-5' xs ={12}sm={12} md={12} xl={7} lg={12}>
                                                            <Image className='basketball' src="./static/Home.png"   />
                                                  </Col>
                                       </Row>
                              </Container>
                              <Container className='project-content-container mt-5' >
                                       <Row className='project-content-row mt-5 mb-5'>
                                                  <Col className='project-text' xs={12} sm={12}  md={12} lg={12} xl={5}>
                                                            <p className='responsive' style={{textDecoration: 'underline'}}>Skate Spots</p>
                                                            <p className='responsive'>
                                                                      This app is uses Uber's Mapbox to lay out a global map that is pin pointed with places that 
                                                                      are suitable for skateboarding. Anyone can use the site to see the locations. However using
                                                                      JWT Tokens and Bcrypt passwords users can sign up and log in to the site to add new locations 
                                                                      and add comments to existing ones. <br/>
                                                                      <span style={{textDecoration:'underline'}}>Technologies Used:</span> React.js,
                                                                      Express.js,  Bcrypt, JWT, and Bootstrap.
                                                            </p>
                                                            <Row  style={{display: 'flex', justifyContent: 'left' }}>
                                                                      <Col xs={6} sm={6} md={6} lg={6} xl={6} style={{display: 'flex', justifyContent: 'center' }}>
                                                                                <a
                                                                                          className='email-anchor'
                                                                                          href="https://github.com/markdstrain/skatespots-frontend"
                                                                                          target="_blank"
                                                                                          rel='noreferrer'
                                                                                >
                                                                                          <nav className='contact-button' style={{display: 'flex', justifyContent: 'center' }}>
                                                                                                    <ul>
                                                                                                              <li>
                                                                                                                        Source 
                                                                                                                        <span></span><span></span><span></span><span></span>
                                                                                                              </li>
                                                                                                    </ul>
                                                                                          </nav>
                                                                                </a>
                                                                      </Col>
                                                                      {/* <Col xs={6} sm={6} md={6} lg={6} xl={6} style={{display: 'flex', justifyContent: 'center' }}>
                                                                                <a
                                                                                          className='email-anchor'
                                                                                          href="https://basketball-tracker.herokuapp.com/"
                                                                                          target="_blank"
                                                                                          rel='noreferrer'
                                                                                >
                                                                                          <nav className='contact-button' style={{display: 'flex', justifyContent: 'center' }}>
                                                                                                    <ul style={{display: 'flex', justifyContent: 'left' }}>
                                                                                                              <li>
                                                                                                                        See Live
                                                                                                                        <span></span><span></span><span></span><span></span>
                                                                                                              </li>
                                                                                                    </ul>
                                                                                          </nav>
                                                                                </a>
                                                                      </Col> */}
                                                            </Row>
                                                  </Col>
                                                  <Col className='project-image mb-5' xs ={12}sm={12} md={12} xl={7} lg={12}>
                                                            <Image className='basketball' src="./static/SpotLocator.png"   />
                                                  </Col>
                                       </Row>
                              </Container>
                              <Container className='project-content-container mt-5' >
                                       <Row className='project-content-row'>
                                                  <Col className='project-text' xs={12} sm={12}  md={12} lg={12} xl={5}>
                                                            <p className='responsive' style={{textDecoration: 'underline'}}>Connect Four</p>
                                                            <p className='responsive'>
                                                            Connect Four was written in vanilla Javascript. This app was designed to learn the basics of coding 
                                                            in a fun way. 
                                                            <span style={{textDecoration:'underline'}}>Technologies Used:</span> JavaScript, CSS, HTML.
                                                            </p>
                                                            <Row  style={{display: 'flex', justifyContent: 'left' }}>
                                                                      <Col xs={6} sm={6} md={6} lg={6} xl={6} style={{display: 'flex', justifyContent: 'center' }}>
                                                                                <a
                                                                                          className='email-anchor'
                                                                                          href="https://github.com/markdstrain/connectFour"
                                                                                          target="_blank"
                                                                                          rel='noreferrer'
                                                                                >
                                                                                          <nav className='contact-button' style={{display: 'flex', justifyContent: 'center' }}>
                                                                                                    <ul>
                                                                                                              <li>
                                                                                                                        Source 
                                                                                                                        <span></span><span></span><span></span><span></span>
                                                                                                              </li>
                                                                                                    </ul>
                                                                                          </nav>
                                                                                </a>
                                                                      </Col>
                                                                      <Col xs={6} sm={6} md={6} lg={6} xl={6} style={{display: 'flex', justifyContent: 'center' }}>
                                                                                <a
                                                                                          className='email-anchor'
                                                                                          href="https://markdstrain.github.io/connectFour/"
                                                                                          target="_blank"
                                                                                          rel='noreferrer'
                                                                                >
                                                                                          <nav className='contact-button' style={{display: 'flex', justifyContent: 'center' }}>
                                                                                                    <ul style={{display: 'flex', justifyContent: 'left' }}>
                                                                                                              <li>
                                                                                                                        See Live
                                                                                                                        <span></span><span></span><span></span><span></span>
                                                                                                              </li>
                                                                                                    </ul>
                                                                                          </nav>
                                                                                </a>
                                                                      </Col>
                                                            </Row>          
                                                  </Col>
                                                  <Col className='project-image mb-5' xs ={12}sm={12} md={12} xl={7} lg={12}>
                                                            <Image className='basketball' src="./static/ConnectFour.png"   />
                                                  </Col>
                                       </Row>
                              </Container>
                    </div>
          )
}

export default Projects;