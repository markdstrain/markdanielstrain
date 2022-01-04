import React from 'react';
import Typewriter from 'typewriter-effect';
import { scroller } from 'react-scroll';
import "./Home.css";



function Home(){
          const scrollTarget = (target) => scroller.scrollTo(target, {linear: true, duration: 400});

          const scrollToPage = async (target) => {
                    scrollTarget(target);
          };
          return(                 
                    <div name="section1" className='landing-page-container' autoPlay loop muted>
                              <video className='landing-page-video'
                                           autoPlay
                                           loop 
                                           muted
                                           style={{
                                                     position: "absolute",
                                                     width: "100%",
                                                     left: "50%",
                                                     top: "50%",
                                                     height: "100vh",
                                                     objectFit: "cover",
                                                     overflow:'hidden',
                                                     transform: "translate(-50%, -50%)",
                                                     zIndex: "-1"
                                           }}>
                                        <source src='./static/video.mp4' />
                              </video>
                              <div className="welcome-container display-1">
                                           <div >
                                                     <h1>
                                                               Hi! I'm Mark Strain
                                                     </h1>
                                           </div>
                                           <div className='typed-words'>
                                                     <h1>
                                                            <Typewriter
                                                                             options={{
                                                                                       autoStart: true,
                                                                                       loop: true,
                                                                             }}
                                                                             onInit={(typewriter) => {
                                                                                       typewriter.typeString("I'm a Software Engineer")
                                                                                                           .pauseFor(2000)
                                                                                                           .deleteChars(22)
                                                                                                           .typeString('n the Little Rock Metro')
                                                                                                           .pauseFor(2000)
                                                                                                           .deleteAll()
                                                                                                           .start()
                                                                             }}
                                                            />
                                                            </h1>
                                        </div>
                                        <div>
                                                  <nav className='home-button'
                                                                 onClick={()=> scrollToPage('section2')}                                                           
                                                  >
                                                            <ul>
                                                                      <li>
                                                                                About Me
                                                                                <span></span><span></span><span></span><span></span>
                                                                      </li>
                                                            </ul>
                                                  </nav>
                                        </div>
                              </div>
                    </div>
          )
}

export default Home;