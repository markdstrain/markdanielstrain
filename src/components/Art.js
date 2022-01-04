 import React from 'react';
 import { Carousel, Image } from 'react-bootstrap';
 import './Art.css'

 
 function Art() {
          return(
                    <div className="art-container">
                              <Carousel  className="carousel">
                                        {/* <Carousel.Item interval={3000}>                                            
                                                  <video
                                                            controls
                                                            className='d-block w-100 art-video mt-5'
                                                            autoPlay
                                                            muted
                                                            loop
                                                  >
                                                            <source src='./static/JaneWay.mp4' type='video/mp4'/>
                                                  </video>                
                                        </Carousel.Item> */}
                                        <Carousel.Item interval={3000}>                                            
                                                  <video
                                                            controls
                                                            className='d-block w-100 art-video mt-5'
                                                            autoPlay
                                                            muted
                                                            loop
                                                  >
                                                            <source src='./static/awstin.mp4' type='video/mp4'/>
                                                  </video>                
                                        </Carousel.Item>
                                        <Carousel.Item interval={3000}>                                            
                                                  <video
                                                            className='d-block w-100 art-video mt-5'
                                                            controls
                                                            autoPlay
                                                            muted
                                                            
                                                  >
                                                            <source src='./static/brock.mp4' type='video/mp4'/>
                                                  </video>                
                                        </Carousel.Item>
                                        <Carousel.Item>
                                                  <Image
                                                                      src="./static/acuffFlyer.jpeg"
                                                                      className='art-img mt-5'
                                                  />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                                  <Image
                                                                      src="./static/allGirls1.png"
                                                                      className='art-img mt-5'
                                                  />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                                  <Image
                                                                      src="./static/allGirls3.jpeg"
                                                                      className='art-img mt-5'
                                                  />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                                  <Image
                                                                      src="./static/aries.jpg"
                                                                      className='art-img mt-5'
                                                  />
                                        </Carousel.Item>
                                        {/* <Carousel.Item interval={3000}>                                            
                                                  <video
                                                            className='d-block w-100 art-video mt-5'
                                                            controls
                                                            autoPlay
                                                            muted
                                                            
                                                  >
                                                            <source src='./static/bullfighter.mp4' type='video/mp4'/>
                                                  </video>                
                                        </Carousel.Item> */}
                            </Carousel> 
                    </div> 
          )         
 }

 export default Art;