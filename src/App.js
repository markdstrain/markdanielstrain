import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/LandingPage";


function App() {
          return(
                    <div>
                              <Navbar/>
                              
                              <Routes>
                                        <Route path="/" element={<LandingPage/>}/>
                                        {/* <Route exact path='/art' element={<Art />}/> */}
                              </Routes>
                    </div>
          )
}

export default App;
