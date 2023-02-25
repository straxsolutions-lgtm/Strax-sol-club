import React from 'react'
import { ExternalLink } from 'react-external-link';
export const About =() => {
  return (
<>
  <div className="page-title-area">
    <div className="container">
      <div className="page-title-content">
        <h2>About</h2>
        <p>The Strax Story</p>
      </div>
    </div>
  </div>
  {/* End Page Title Area */}
  {/* Start About Area */}
  <section className="about-area ptb-100">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-12">
          <div className="about-content">
            <span className="sub-title">How we are Founded</span>
            <h2>Take your business to the next level</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <p>
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <p>
              Every month they moved their money the old way – which wasted
              their time and money. So they invented a beautifully simple
              workaround that became a billion-dollar business.
            </p>
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
          <div className="about-image">
            <img src="assets/img/about-img.jpg" alt="image" />
          </div>
        </div>
      </div>
    </div>
  </section>
 
 

  <section className="team-area pb-70">
    <div className="container">
      <div className="section-title">
        <h2>Meet Our experts always ready to help you</h2>
      </div>
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="single-team-box">
            <div className="image">
              <img src="assets/img/team-image/2.jpeg" alt="image" />
              <ul className="social">
                <li>
                  <a href="#" target="_blank">
                    <i className="bx bxl-facebook" />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i className="bx bxl-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i className="bx bxl-linkedin" />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i className="bx bxl-instagram" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="content">
              <h3>Maroof Subhani</h3>
              <span>Network & <br/> Security Analyst</span>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="single-team-box">
            <div className="image">
              <img src="assets/img/team-image/14.jpeg" alt="image" />
              <ul className="social">
                <li>
                  <a href="#" target="_blank">
                    <i className="bx bxl-facebook" />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i className="bx bxl-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i className="bx bxl-linkedin" />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i className="bx bxl-instagram" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="content">
              <h3>Abdul Basit</h3>
              <span>IT Manager</span>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="single-team-box">
            <div className="image">
              <img src="assets/img/team-image/15.jpg" alt="image" />
              <ul className="social">
                <li>
                  <a href="#" target="_blank">
                    <i className="bx bxl-facebook" />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i className="bx bxl-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i className="bx bxl-linkedin" />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i className="bx bxl-instagram" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="content">
              <h3>Saim Mayo</h3>
              <span>Web Developer<br/>
              Ceo
              </span>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="single-team-box">
            <div className="image">
              <img src="assets/img/team-image/2.jpeg" alt="image" />
              <ul className="social">
                <li>
                  <a href="#" target="_blank">
                    <i className="bx bxl-facebook" />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i className="bx bxl-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i className="bx bxl-linkedin" />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i className="bx bxl-instagram" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="content">
              <h3>Maroof Subhani </h3>
              <span>Cloud  &<br/>
              Server Analysit</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
 
  <section className="app-download-area ptb-100">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-5 col-md-12">
          <div className="app-download-image">
            <img src="assets/img/mobile.png" alt="image" />
          </div>
        </div>
        <div className="col-lg-7 col-md-12">
          <div className="app-download-content">
            <span className="sub-title">Download App</span>
            <h2>Supporting your customers on the go with our mobile app</h2>
            <div className="btn-box">
              <a href="#" className="apple-store-btn">
                <img src="assets/img/applestore.png" alt="image" />
                Download on the
                <span>Apple Store</span>
              </a>
              <a href="#" className="play-store-btn">
                <img src="assets/img/playstore.png" alt="image" />
                Get it on
                <span>Google Play</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  
  {/* Start Feedback Area */}
  {/* Start Free Trial Area */}
  <section className="free-trial-area ptb-100 bg-f4f5fe">
    <div className="container">
      <div className="free-trial-content">
        <h2>Practice active listening and follow through</h2>
        <p>
          Qualify your leads &amp; recognize the value of word your customer
          will love you
        </p>
        <a href="#" className="default-btn">
          <i className="bx bxs-hot" /> Get Started Free <span />
        </a>
      </div>
    </div>
    <div className="shape10">
      <img src="assets/img/shape/10.png" alt="shp1" />
    </div>
    <div className="shape11">
      <img src="assets/img/shape/7.png" alt="shp2" />
    </div>
    <div className="shape12">
      <img src="assets/img/shape/11.png" alt="shp3" />
    </div>
    <div className="shape13">
      <img src="assets/img/shape/12.png" alt="shp4" />
    </div>
  </section>
</>

  )
}

export default About;