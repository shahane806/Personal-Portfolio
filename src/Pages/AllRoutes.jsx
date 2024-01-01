import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home/Home';
import About from './About/About';
import Work from './Work/Work';
import Contact from './Contact/Contact';
import Error from './Error/Error';

const AllRoutes = () => {
 
  
  return (

    <div>
       <Router>
        <Routes>
          <Route
            path="/"
            element={
                <div className="Portfolio">
                   
                  <Home />
                  
                </div>
            }
          ></Route>
          <Route
            path="*"
            element={
                <div className="Portfolio">
                   
                  <Error />
                  
                </div>
            }
          ></Route>
          <Route
            path="/Home"
            element={
                <div className="Portfolio">
                  
                  <Home />
                </div>
            }
          ></Route>
          <Route
            path="/About"
            element={
              
              <div className="Portfolio">
               
                <About/>
              </div>
            }
          ></Route>
          <Route
            path="/Work"
            element={
              <div className="Portfolio">
               
                <Work/>
              </div>
            }
          ></Route>
          <Route
            path="/Contact"
            element={
              <div className="Portfolio">
               
                <Contact/>
              </div>
            }
          ></Route>
          
        </Routes>
      </Router>
    </div>
  )
}

export default AllRoutes
