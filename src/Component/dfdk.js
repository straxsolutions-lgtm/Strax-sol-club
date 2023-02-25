import React from 'react'
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Ser.css';
export const Navbar =() => {
  return (
<>
    <div className="navbar-area bg-white is-sticky">
    <div className="strax-responsive-nav">
      <div className="container">
        <div className="strax-responsive-menu mean-container">
          <div className="mean-bar">
        
          <HashLink
  to="#nav"
  className="meanmenu-reveal"
  style={{
    right: 0,
    left: "auto",
    textAlign: "center",
    textIndent: 0,
    fontSize: 18,
   
  }}
>
  <span>
    <span>
      <span />
    </span>
  </span>
</HashLink>

            <nav className="mean-nav" style={{display: 'block'}}>
              <ul className="navbar-nav" >
                <li className="nav-item">
                  <Link to="/" className="nav-link active">
                    Home 
                  </Link>
              
                
                </li>
                <li className="nav-item">
                  <Link to="About" className="nav-link">
                    About Us
                  </Link>
                </li>
               
            
                <li className="nav-item">
                  <Link to="Blog" className="nav-link">
                    Blog <i className="bx bx-chevron-down" />
                  </Link>
                
                
                </li>
                <li className="nav-item mean-last">
                  <Link to="Contact" className="nav-link">
                    Contact
                  </Link>
                </li>
                <li className="nav-item mean-last">
                  <Link to="Service" className="nav-link">
                    service
                  </Link>
                </li>
                  <li className="nav-item mean-last">
                  <Link to="Work" className="nav-link">
                    Our Works
                  </Link>
                </li>
              </ul>
              <div className="others-options">
                <HashLink to="Contact" className="default-btn">
                  <i className="bx bxs-hot" />
                  Get Started
                  <span />
                </HashLink>
                <a href="log-in.html" className="default-btn black-btn">
                  <i className="bx bx-log-in" />
                  Log In
                  <span />
                </a>
              </div>
            </nav>
          </div>
          <div className="logo black-logo">
            <Link to='/'>
              <img src="assets/img/logo.png" alt="logo" />
            </Link>
          </div>
          <div className="logo white-logo">
            <Link to="/">
              <img src="assets/img/white-logo.png" alt="logo" />
            </Link>
          </div>
        </div>
      </div>
    </div>
    <div className="strax-nav">
      <div className="container">
        <nav className="navbar navbar-expand-md navbar-light">
          <a className="navbar-brand black-logo" href="index.html">
            <img src="assets/img/logo.png" alt="logo" />
          </a>
          <a className="navbar-brand white-logo" href="index.html">
            <img src="assets/img/white-logo.png" alt="logo" />
          </a>
          <div className="mean-push" />
          <div
            className="collapse navbar-collapse mean-menu"
            id="navbarSupportedContent"
        
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link active">
                  Home 
                </Link>
               
              </li>
              <li className="nav-item">
                <Link to="About" className="nav-link">
                  About Us
                </Link>
              </li>
             
            
              <li className="nav-item">
                <Link to="Blog" className="nav-link">
                  Blog 
                </Link>
              
              </li>
              <li className="nav-item">
                <Link to="Contact" className="nav-link">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link to="Service" className="nav-link">
                  Service
                </Link>
                
              </li>
              <li className="nav-item">
                <Link to="Work" className="nav-link">
                  Our Works
                </Link>
                
              </li>
          
            </ul>
            <div className="others-options">
              <HashLink to="contact#cnt" className="default-btn">
                <i className="bx bxs-hot" />
                Get Started
                <span />
              </HashLink>
              <Link href="#" className="default-btn black-btn">
                <i className="bx bx-log-in" />
                Log In
                <span />
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
    <div className="others-option-for-responsive">
      <div className="container">
        <div className="dot-menu">
          <div className="inner">
            <div className="circle circle-one" />
            <div className="circle circle-two" />
            <div className="circle circle-three" />
          </div>
        </div>
        <div className="container">
          <div className="option-inner">
            <div className="others-options">
              <Link to="contact#cnt" className="default-btn">
                <i className="bx bxs-hot" />
                Get Started
                <span />
              </Link>
              <Link to="#" className="optional-btn">
                <i className="bx bx-log-in" />
                Log In
                <span />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>  
  
  )
}

export default  Navbar;