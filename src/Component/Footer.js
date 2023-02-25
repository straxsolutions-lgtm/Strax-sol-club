import React from 'react'
import {Link} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { ExternalLink } from 'react-external-link';
export const Footer = () => {

  return (

    <>   
    <footer className="footer-area">
  <div className="divider" />
  <div className="container">
    <div className="row">
      <div className="col-lg-4 col-md-6 col-sm-6">
        <div className="single-footer-widget">
          <div className="logo">
            <a href="#">
              <img src="assets/img/white-logo.png" alt="image" />
            </a>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      <div className="col-lg-2 col-md-6 col-sm-6">
        <div className="single-footer-widget">
          <h3>Company</h3>
          <ul className="services-list">
            <li>
              <Link to="About">About Us</Link>
            </li>
            <li>
              <Link to="Service">Services</Link>
            </li>
            <li>
              <Link to="Contact">Contact</Link>
            </li>
            <li>
              <Link to="Work">Our Pricing</Link>
            </li>
            <li>
              <Link to="Blog">Latest News</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-lg-2 col-md-6 col-sm-6">
        <div className="single-footer-widget">
          <h3>Support</h3>
          <ul className="support-list">
            <li>
              <a href="faq.html">FAQ's</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms &amp; Conditions</a>
            </li>
            <li>
              <a href="about.html">Community</a>
            </li>
            <li>
              <a href="contact.html">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-6">
        <div className="single-footer-widget">
          <h3>Contact Info</h3>
          <ul className="footer-contact-info">
            <li>
            
              <HashLink smooth to="Contact#map"   scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'start' })}>
              Location: 6th Floor,Eleganta Tower,Lahore
              </HashLink>
            </li>
            <li>
            
           Email:   <ExternalLink href="mailto:strax@cybersolclub.com">strax@cybersolclub.com
               
               
               
              </ExternalLink>
            </li>
            <li>
              Phone: <a href="tel:+92 320 851 2825">+92 320 851 2825</a>
            </li>
          </ul>
          <ul className="social">
            <li>
            <ExternalLink href= "http://www.facebook.com/"  target="_blank" >
                <i className="bx bxl-facebook" />
              </ExternalLink>
            </li>
            <li>
            <Link to='//google.com'> 
                <i className="bx bxl-twitter" />
                </Link>
            </li>
            <li>
            <ExternalLink href= "#"  target="_blank" >
                <i className="bx bxl-linkedin" />
              </ExternalLink>
            </li>
            <li>
            <ExternalLink href= "#"  target="_blank" >
                <i className="bx bxl-instagram" />
              </ExternalLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
   
  </div>
</footer>
<div className="go-top">
  <i className="bx bx-chevron-up" />
</div>

</>

  
  )
}

export default Footer;