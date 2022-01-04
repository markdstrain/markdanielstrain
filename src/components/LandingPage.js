import React from 'react';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';


function LandingPage() {
          return(
                    <>
                              <Home />
                              <About/>
                              <Projects/>
                              <Contact/>
                    </>
          )
}

export default LandingPage;