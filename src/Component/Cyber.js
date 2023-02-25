import React from 'react'
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

function Cyber() {
  return (
    <>
    <section className="digital-agency-banner">
      <div className="container">
        <div className="digital-agency-banner-content">
          <h1 className="wow animate__animated animate__fadeInUp">
            Future Ready <span>Cyber Attack</span> Protection
          </h1>
          <p className="wow animate__animated animate__fadeInUp">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor dolore magna aliqua. Quis ipsum suspendisse ultrices
            gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
          </p>
          <a
            href="contact.html"
            className="default-btn wow animate__animated animate__fadeInUp"
          >
            <i className="bx bxs-hot" />
            Get Started Now
            <span />
          </a>
        </div>
      </div>
    </section>
    {/* End Digital Agency Banner */}
    {/* Start Featured Area */}
    <section className="featured-area pt-100 pb-70">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-4 col-md-6 col-sm-6 wow animate__animated animate__fadeInUp"
            data-wow-delay=".2s"
          >
            <div className="single-featured-box">
              <img
                src="https://templates.envytheme.com/strax/default/assets/img/marketing-agency/featured-img1.jpg"
                alt="image"
              />
              <h3>Marketing Campaigns &amp; Content Creation</h3>
              <a href="#" className="read-more-btn">
                Read More <i className="bx bx-right-arrow-alt" />
              </a>
              <a href="#" className="link-btn" />
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 col-sm-6 wow animate__animated animate__fadeInUp"
            data-wow-delay=".3s"
          >
            <div className="single-featured-box">
              <img
                src="https://templates.envytheme.com/strax/default/assets/img/marketing-agency/featured-img2.jpg"
                alt="image"
              />
              <h3>LInk Building &amp; Local Search Strategy</h3>
              <a href="#" className="read-more-btn">
                Read More <i className="bx bx-right-arrow-alt" />
              </a>
              <a href="#" className="link-btn" />
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3 wow animate__animated animate__fadeInUp"
            data-wow-delay=".4s"
          >
            <div className="single-featured-box">
              <img
                src="https://templates.envytheme.com/strax/default/assets/img/marketing-agency/featured-img3.jpg"
                alt="image"
              />
              <h3>Search Optimization &amp; Paid Advertising</h3>
              <a href="#" className="read-more-btn">
                Read More <i className="bx bx-right-arrow-alt" />
              </a>
              <a href="#" className="link-btn" />
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* End Featured Area */}
    {/* Start About Area */}
    <div className="about-area">
      <div className="container">
        <div className="section-title text-left">
          <span className="sub-title">About Us</span>
          <h2>Better Security And Services Start Here</h2>
        </div>
      </div>
      <div className="container-fluid">
        <div className="about-inner-area">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="about-inner-image">
                <img
                  src="https://templatekit.puriwp.com/cybershield/wp-content/uploads/sites/14/2022/04/Image-R8EBM8Y-1024x683.jpg"
                  alt="image"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="about-inner-content">
                <div className="content">
                  <h2>We provide you Experienced Staff of Engineers  with  optimal It Experience</h2>
                  <ul className="features-list">
                    <li>
                      <i className="bx bx-check" /> Providing Expansion or Consolidation
                    </li>
                    <li>
                      <i className="bx bx-check" /> Best Network Security Solution
                    </li>
                    <li>
                      <i className="bx bx-check" /> Affordable Security Packages & Detail Result
                    </li>
                    <li>
                      <i className="bx bx-check" /> It is a long established fact that a reader will
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* End About Area */}
    {/* Start Services Area */}
    <section className="services-area ptb-100">
      <div className="container">
        <div className="section-title text-left">
          <span className="sub-title">Services</span>
          <h2>Let's Check Our Services</h2>
        </div>
        <div className="row">
          <div
            className="col-lg-6 col-md-6 col-sm-6 wow animate__animated animate__fadeInUp"
            data-wow-delay=".2s"
          >
            <div className="single-services-box">
              <div className="row m-0">
                <div className="col-lg-6 col-md-12 p-0">
                  <div className="content">
                    <h3>
                      <a href="single-service.html">Diployment and Migration</a>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                      do eiusmod tempor.
                    </p>
                    <a href="single-service.html" className="read-more-btn">
                      Read More <i className="bx bx-right-arrow-alt" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 p-0">
                  <div className="image bg-1">
                    <img
                      src="https://templatekit.puriwp.com/cybershield/wp-content/uploads/sites/14/2022/04/Image-R8EBM8Y-1024x683.jpg"
                      alt="image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-6 col-md-6 col-sm-6 wow animate__animated animate__fadeInUp"
            data-wow-delay=".3s"
          >
            <div className="single-services-box">
              <div className="row m-0">
                <div className="col-lg-6 col-md-12 p-0">
                  <div className="content">
                    <h3>
                      <a href="single-service.html">Manage Web Application</a>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                      do eiusmod tempor.
                    </p>
                    <a href="single-service.html" className="read-more-btn">
                      Read More <i className="bx bx-right-arrow-alt" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 p-0">
                  <div className="image bg-2">
                    <img
                      src="https://templatekit.puriwp.com/cybershield/wp-content/uploads/sites/14/2022/04/Image-TDWT58F-1024x684.jpg"
                      alt="image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-6 col-md-6 col-sm-6 wow animate__animated animate__fadeInUp"
            data-wow-delay=".4s"
          >
            <div className="single-services-box">
              <div className="row m-0">
                <div className="col-lg-6 col-md-12 p-0">
                  <div className="content">
                    <h3>
                      <a href="single-service.html">Cyber Security Solutions</a>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                      do eiusmod tempor.
                    </p>
                    <a href="single-service.html" className="read-more-btn">
                      Read More <i className="bx bx-right-arrow-alt" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 p-0">
                  <div className="image bg-3">
                    <img
                      src="assets/img/marketing-agency/services-img3.jpg"
                      alt="image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-6 col-md-6 col-sm-6 wow animate__animated animate__fadeInUp"
            data-wow-delay=".5s"
          >
            <div className="single-services-box">
              <div className="row m-0">
                <div className="col-lg-6 col-md-12 p-0">
                  <div className="content">
                    <h3>
                      <a href="single-service.html">Network and Solutions</a>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                      do eiusmod tempor.
                    </p>
                    <a href="single-service.html" className="read-more-btn">
                      Read More <i className="bx bx-right-arrow-alt" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 p-0">
                  <div className="image bg-4">
                    <img
                      src="assets/img/marketing-agency/services-img4.jpg"
                      alt="image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-12 col-md-12 wow animate__animated animate__fadeInUp"
            data-wow-delay=".6s"
          >
            <div className="services-btn-box">
              <a href="services-3.html" className="default-btn">
                <i className="bx bx-bullseye" />
                View All
                <span />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section className="partner-area-two ptb-70 bg-f9f9f9">
      <div className="container">
        <div className="row align-items-center">
          <div
            className="col-lg-2 col-6 col-sm-3 col-md-4 wow animate__animated animate__fadeInUp"
            data-wow-delay=".2s"
          >
            <div className="single-partner-box">
              <img src="https://templates.envytheme.com/strax/default/assets/img/partner-image/img1.png" alt="image" />
            </div>
          </div>
          <div
            className="col-lg-2 col-6 col-sm-3 col-md-4 wow animate__animated animate__fadeInUp"
            data-wow-delay=".3s"
          >
            <div className="single-partner-box">
              <img src="https://templates.envytheme.com/strax/default/assets/img/partner-image/img2.png" alt="image" />
            </div>
          </div>
          <div
            className="col-lg-2 col-6 col-sm-3 col-md-4 wow animate__animated animate__fadeInUp"
            data-wow-delay=".4s"
          >
            <div className="single-partner-box">
              <img src="https://templates.envytheme.com/strax/default/assets/img/partner-image/img3.png" alt="image" />
            </div>
          </div>
          <div
            className="col-lg-2 col-6 col-sm-3 col-md-4 wow animate__animated animate__fadeInUp"
            data-wow-delay=".5s"
          >
            <div className="single-partner-box">
              <img src="https://templates.envytheme.com/strax/default/assets/img/partner-image/img4.png" alt="image" />
            </div>
          </div>
          <div
            className="col-lg-2 col-6 col-sm-3 col-md-4 wow animate__animated animate__fadeInUp"
            data-wow-delay=".6s"
          >
            <div className="single-partner-box">
              <img src="https://templates.envytheme.com/strax/default/assets/img/partner-image/img5.png" alt="image" />
            </div>
          </div>
          <div
            className="col-lg-2 col-6 col-sm-3 col-md-4 wow animate__animated animate__fadeInUp"
            data-wow-delay=".7s"
          >
            <div className="single-partner-box">
              <img src="https://templates.envytheme.com/strax/default/assets/img/partner-image/img6.png" alt="image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  

    <div className="company-preview-area">
      <div className="container">
        <div className="company-preview-video">
          <a
            href="https://www.youtube.com/watch?v=0gv7OC9L2s8"
            className="video-btn popup-youtube"
          >
            <i className="bx bx-play" />
          </a>
        </div>
      </div>
    </div>
    {/* End Company Preview Area */}
    {/* Start Let's Talk Area */}
    <section className="lets-talk-area ptb-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8 col-md-12">
            <div className="lets-talk-content">
              <span className="sub-title wow animate__animated animate__fadeInUp">
                Let’s Talk
              </span>
              <h2 className="wow animate__animated animate__fadeInUp">
                Get Started A Project?
              </h2>
              <p className="wow animate__animated animate__fadeInUp">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
                accumsan lacus vel facilisis.
              </p>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-12 wow animate__animated animate__fadeInRight"
            data-wow-delay=".2s"
          >
            <div className="lets-talk-btn">
              <HashLink smooth to="/Contact#cnt" className="default-btn">
                <i className="bx bxs-hot" />
                Contact Us
                <span />
              </HashLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
  
  )
}

export default Cyber;