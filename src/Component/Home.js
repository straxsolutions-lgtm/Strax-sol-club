import React from 'react'
import {Link} from 'react-router-dom';
import CountUp from 'react-countup';
import { HashLink } from 'react-router-hash-link';

import './Ser.css';

export const Home =() => {
  
  return (
    <>

    <div className="saas-banner">
   
      <div className="d-table">
        <div className="d-table-cell">
          <div className="container max-width-1290">
            <div className="row align-items-center pt-5">
              <div className="col-lg-6 col-md-12">
                <div className="saas-image mt-70">
                  <img
                    src="assets/img/saas-shape/arrow.png"
                    className="wow fadeInDown"
                    data-wow-delay="0.6s"
                    alt="arrow"
                  />
                  <img
                    src="assets/img/saas-shape/box1.png"
                    className="wow animate__animated animate__fadeInUp"
                    data-wow-delay="0.6s"
                    alt="box1"
                  />
                  <img
                    src="assets/img/saas-shape/boy1.png"
                    className="wow animate__animated animate__fadeInLeft"
                    data-wow-delay="0.6s"
                    alt="boy1"
                  />
                  <img
                    src="assets/img/saas-shape/boy2.png"
                    className="wow animate__animated animate__zoomIn"
                    data-wow-delay="0.6s"
                    alt="boy2"
                  />
                  <img
                    src="assets/img/saas-shape/boy3.png"
                    className="wow bounceIn"
                    data-wow-delay="0.6s"
                    alt="boy3"
                  />
                  <img
                    src="assets/img/saas-shape/digital-screen.png"
                    className="wow fadeInDown"
                    data-wow-delay="0.6s"
                    alt="digital-screen"
                  />
                  <img
                    src="assets/img/saas-shape/filter1.png"
                    className="wow animate__animated animate__zoomIn"
                    data-wow-delay="0.6s"
                    alt="filter1"
                  />
                  <img
                    src="assets/img/saas-shape/filter2.png"
                    className="wow animate__animated animate__fadeInUp"
                    data-wow-delay="0.6s"
                    alt="filter2"
                  />
                  <img
                    src="assets/img/saas-shape/filter3.png"
                    className="wow rotateIn"
                    data-wow-delay="0.6s"
                    alt="filter3"
                  />
                  <img
                    src="assets/img/saas-shape/girl1.png"
                    className="wow animate__animated animate__fadeInUp"
                    data-wow-delay="0.6s"
                    alt="girl1"
                  />
                  <img
                    src="assets/img/saas-shape/girl2.png"
                    className="wow animate__animated animate__zoomIn"
                    data-wow-delay="0.6s"
                    alt="girl2"
                  />
                  <img
                    src="assets/img/saas-shape/monitor.png"
                    className="wow animate__animated animate__zoomIn"
                    data-wow-delay="0.6s"
                    alt="monitor"
                  />
                  {/* Main image */}
                  <img
                    src="assets/img/saas-shape/main-image.png"
                    className="wow animate__animated animate__zoomIn"
                    data-wow-delay="0.6s"
                    alt="main-image.png"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="hero-content pl-4">
                  <h1>Manage your business strategy in one placeholder</h1>
                  <p>
                    Our passion to work hard and deliver excellent results. It
                    could solve the needs of your customers and develop
                    innovation. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod.
                  </p>
                  <div className="banner-btn">
                    <div className="d-flex">
                      <a href="#" className="default-btn">
                        <i className="bx bxs-hot" />
                        Get Started
                        <span />
                      </a>
                      <a
                        href="https://www.youtube.com/watch?v=bk7McNUjWgw"
                        className="video-btn popup-youtube"
                      >
                        <i className="bx bxs-right-arrow" /> Watch Video
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shape-rotate rotateme">
        <img src="assets/img/saas-shape/shape-rotate.png" alt="img" />
      </div>
   
    
   
    </div>
    {/* End SaaS Main Banner */}
    {/* Start Features Area */}
    <section className="features-area pt-100 pb-70 bg-f4f6fc">
      <div className="container max-width-1290">
        <div className="section-title">
          <h2>Our amazing features</h2>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div
              className="features-box-one wow animate__animated animate__fadeInLeft"
              data-wow-delay=".1s"
            >
              <i className="bx bx-cog bg-13c4a1" />
              <h3>Fast and Optimized</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor dolore magna.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="features-box-one wow animate__animated animate__fadeInLeft"
              data-wow-delay=".2s"
            >
              <i className="bx bxs-check-shield bg-6610f2" />
              <h3>Full Security</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor dolore magna.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="features-box-one wow animate__animated animate__fadeInLeft"
              data-wow-delay=".3s"
            >
              <i className="bx bx-timer bg-ffb700" />
              <h3>Time Saving</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor dolore magna.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="features-box-one wow animate__animated animate__fadeInLeft"
              data-wow-delay=".4s"
            >
              <i className="bx bx-badge-check bg-fc3549" />
              <h3>Easily Manage</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor dolore magna.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="features-box-one wow animate__animated animate__fadeInLeft"
              data-wow-delay=".5s"
            >
              <i className="bx bxs-lock-open bg-00d280" />
              <h3>Quick Access</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor dolore magna.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="features-box-one wow animate__animated animate__fadeInLeft"
              data-wow-delay=".6s"
            >
              <i className="bx bxs-droplet-half bg-ff612f" />
              <h3>Drag and Drop</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor dolore magna.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* End Features Area */}
    {/* Start Services Area */}
    <section className="services-area ptb-100">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div
            className="services-image wow animate__animated animate__fadeInLeft"
            data-wow-delay=".3s"
          >
            <div className="image">
              <img src="assets/img/home-saas/feature1.png" alt="image" />
            </div>
          </div>
          <div className="services-content it-service-content">
            <div className="content">
              <div className="features-inner-content">
                <div
                  className="features-item wow animate__animated animate__fadeInRight"
                  data-wow-delay=".1s"
                >
                  <i className="bx bx-phone-call bg-13c4a1 blt-radius-0" />
                  <h3>Free Caliing Service</h3>
                  <p>
                    Plan ahead by day, week, or month, and see project status at a
                    glance. Search and filter to focus in on anything form a
                    single project to an individual person's workload.
                  </p>
                </div>
                <div
                  className="features-item wow animate__animated animate__fadeInRight"
                  data-wow-delay=".2s"
                >
                  <i className="bx bx-gift bg-6610f2 blt-radius-0" />
                  <h3>Daily Free Gift</h3>
                  <p>
                    Plan ahead by day, week, or month, and see project status at a
                    glance. Search and filter to focus in on anything form a
                    single project to an individual person's workload.
                  </p>
                </div>
                <div
                  className="features-item wow animate__animated animate__fadeInRight"
                  data-wow-delay=".3s"
                >
                  <i className="bx bx-code-alt bg-ff612f blt-radius-0" />
                  <h3>QR Code Scaner</h3>
                  <p>
                    Plan ahead by day, week, or month, and see project status at a
                    glance. Search and filter to focus in on anything form a
                    single project to an individual person's workload.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shape9">
        <img src="assets/img/shape/9.png" alt="image" />
      </div>
    </section>
    {/* End Services Area */}
    {/* Start Overview Area */}
    <section className="ptb-100 bg-f4f6fc">
      <div className="container">
        <div className="section-title">
          <h2 className="mb-2">More to Discover</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div
        className="overview-item wow animate__animated animate__fadeInUp"
        data-wow-delay=".2s"
      >
        <div className="container max-width-1290">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <div className="overview-left-img">
                <img src="assets/img/home-saas/feature2.png" alt="image" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="overview-content pl-3">
                <span className="number">01</span>
                <h3>Getting Started Page</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo.
                </p>
                <ul>
                  <li>
                    <i className="bx bx-badge-check" />
                    Unique Design
                  </li>
                  <li>
                    <i className="bx bx-badge-check" />
                    Unimited Video Call
                  </li>
                  <li>
                    <i className="bx bx-badge-check" />
                    Add Favourite contact
                  </li>
                  <li>
                    <i className="bx bx-badge-check" />
                    Camera Filter
                  </li>
                </ul>
                <a href="#" className="default-btn black-btn">
                  <i className="bx bxs-arrow-to-right" />
                  Read More
                  <span />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="overview-item wow animate__animated animate__fadeInUp"
        data-wow-delay=".4s"
      >
        <div className="container max-width-1290">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <div className="overview-content pl-3">
                <span className="number">02</span>
                <h3>Outdated Comments Toggling</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo.
                </p>
                <ul>
                  <li>
                    <i className="bx bx-badge-check" />
                    Mordan Design
                  </li>
                  <li>
                    <i className="bx bx-badge-check" />
                    Unimited Video Call
                  </li>
                  <li>
                    <i className="bx bx-badge-check" />
                    Add Favourite contact
                  </li>
                  <li>
                    <i className="bx bx-badge-check" />
                    Camera Filter
                  </li>
                  <li>
                    <i className="bx bx-badge-check" />
                    Outdated Comments
                  </li>
                </ul>
                <a href="#" className="default-btn black-btn">
                  <i className="bx bxs-arrow-to-right" />
                  Read More
                  <span />
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="overview-right-img">
                <img src="assets/img/home-saas/feature3.png" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="overview-item wow animate__animated animate__fadeInUp"
        data-wow-delay=".6s"
      >
        <div className="container max-width-1290">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <div className="overview-left-img">
                <img src="assets/img/home-saas/feature4.png" alt="image" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="overview-content pl-3">
                <span className="number">03</span>
                <h3>Code Review Illustrations</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo.
                </p>
                <ul>
                  <li>
                    <i className="bx bx-badge-check" />
                    Professional Code
                  </li>
                  <li>
                    <i className="bx bx-badge-check" />
                    Unimited Video Call
                  </li>
                  <li>
                    <i className="bx bx-badge-check" />
                    Add Favourite contact
                  </li>
                  <li>
                    <i className="bx bx-badge-check" />
                    Camera Filter
                  </li>
                  <li>
                    <i className="bx bx-badge-check" />
                    Start Coding Format
                  </li>
                </ul>
                <a href="#" className="default-btn black-btn">
                  <i className="bx bxs-arrow-to-right" />
                  Read More
                  <span />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* End Overview Area */}
    {/* Start Video Presentation Area */}
    <section className="video-presentation-area ptb-100">
      <div className="container">
        <div className="section-title">
          <h2>Why choose us to watch this video know more</h2>
        </div>
        <div className="video-box">
          <img src="assets/img/video-bg.jpg" className="main-image" alt="image" />
          <a
            href="https://www.youtube.com/watch?v=0gv7OC9L2s8"
            className="video-btn popup-youtube"
          >
            <i className="bx bx-play" />
          </a>
          <div className="shape1">
            <img src="assets/img/shape/1.png" alt="image" />
          </div>
          <div className="shape2">
            <img src="assets/img/shape/2.png" alt="image" />
          </div>
          <div className="shape3">
            <img src="assets/img/shape/3.png" alt="image" />
          </div>
          <div className="shape4">
            <img src="assets/img/shape/4.png" alt="image" />
          </div>
          <div className="shape5">
            <img src="assets/img/shape/5.png" alt="image" />
          </div>
          <div className="shape6">
            <img src="assets/img/shape/6.png" alt="image" />
          </div>
        </div>
        <div className="funfacts-inner">
          <div className="row">
            <div className="col-lg-3 col-6 col-sm-6">
              <div
                className="single-funfacts funfact-style-two wow animate__animated animate__fadeInLeft"
                data-wow-delay=".3s"
              >
                <i className="bx bx-smile" />
                <h3>
                <CountUp end={850} start={0} duration={2.75}  />
                
                  <span className="sign-icon">+</span>
                </h3>
                <p>Satisfied Client</p>
              </div>
            </div>
            <div className="col-lg-3 col-6 col-sm-6">
              <div
                className="single-funfacts funfact-style-two wow animate__animated animate__fadeInLeft"
                data-wow-delay=".2s"
              >
                <i className="bx bxs-star" />
                <h3>
                <CountUp end={10000} start={0} duration={2.75} />
               
                  <span className="sign-icon">+</span>
                </h3>
                <p>Appreciation</p>
              </div>
            </div>
            <div className="col-lg-3 col-6 col-sm-6">
              <div
                className="single-funfacts funfact-style-two wow animate__animated animate__fadeInLeft"
                data-wow-delay=".4s"
              >
                <i className="bx bx-time-five" />
                <h3>
                <CountUp end={1000} start={0} duration={2.75}  />
               
                  <span className="sign-icon">K</span>
                </h3>
                <p>Response Time</p>
              </div>
            </div>
            <div
              className="col-lg-3 col-6 col-sm-6 wow animate__animated animate__fadeInLeft"
              data-wow-delay=".5s"
            >
              <div className="single-funfacts funfact-style-two">
                <i className="bx bx-data" />
                <h3>
                <CountUp end={1} start={0.2}  duration={2.75} />
                  <span className="sign-icon">M</span>
                </h3>
                <p>Data Entry</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="contact-cta-box mwidth-1000 wow animate__animated animate__fadeInUp"
          data-wow-delay=".8s"
        >
          <h3>Have any question about us?</h3>
          <p>Don't hesitate to contact us.</p>
          <HashLink smoth to="Contact#cnt" className="default-btn">
            <i className="bx bxs-edit-alt" />
            Contact Us
            <span />
          </HashLink>
        </div>
      </div>
      <div className="shape-map1">
        <img src="assets/img/map1.png" alt="image" />
      </div>
      <div className="shape7">
        <img src="assets/img/shape/7.png" alt="image" />
      </div>
      <div className="shape8">
        <img src="assets/img/shape/8.png" alt="image" />
      </div>
      <div className="shape9">
        <img src="assets/img/shape/9.png" alt="image" />
      </div>
    </section>
    {/* End Video Presentation Area */}
    {/* Start Services Area */}
    <section className="services-area ptb-100 bg-f4f6fc">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div
            className="services-image wow animate__animated animate__fadeInLeft"
            data-wow-delay=".3s"
          >
            <div className="image">
              <img src="assets/img/home-saas/feature5.png" alt="image" />
            </div>
          </div>
          <div className="services-content it-service-content">
            <div className="content">
              <div className="fun-facts-inner-content">
                <h2>Build Beautiful Interface Into Your Application</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip.
                </p>
                <ul>
                  <li>
                    <i className="bx bx-badge-check" />
                    Professional Code
                  </li>
                  <li>
                    <i className="bx bx-badge-check" />
                    Unimited Video Call
                  </li>
                  <li>
                    <i className="bx bx-badge-check" />
                    Add Favourite contact
                  </li>
                  <li>
                    <i className="bx bx-badge-check" />
                    Camera Filter
                  </li>
                  <li>
                    <i className="bx bx-badge-check" />
                    Start Coding Format
                  </li>
                </ul>
                <a href="#" className="default-btn black-btn">
                  <i className="bx bxs-arrow-to-right" />
                  Read More
                  <span />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shape9">
        <img src="assets/img/shape/9.png" alt="image" />
      </div>
    </section>
    {/* End Services Area */}
    {/* Start Feedback Area */}
    
  
    {/* Start FAQ Area */}
    <section className="faq-area ptb-100">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-7 col-md-12">
            <div className="faq-accordion">
              <h2>
                Get to know about <span>Strax</span>
              </h2>
              <ul className="accordion">
                <li className="accordion-item">
                  <a className="accordion-title active" href="javascript:void(0)">
                    <i className="bx bx-plus" />
                    What access do I have on the free plan?
                  </a>
                  <p className="accordion-content show">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a type
                    specimen book.
                  </p>
                </li>
                <li className="accordion-item">
                  <a className="accordion-title" href="javascript:void(0)">
                    <i className="bx bx-plus" />
                    What access do I have on a free trial?
                  </a>
                  <p className="accordion-content">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a type
                    specimen book.
                  </p>
                </li>
                <li className="accordion-item">
                  <a className="accordion-title" href="javascript:void(0)">
                    <i className="bx bx-plus" />
                    Does the price go up as my team gets larger?
                  </a>
                  <p className="accordion-content">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a type
                    specimen book.
                  </p>
                </li>
                <li className="accordion-item">
                  <a className="accordion-title" href="javascript:void(0)">
                    <i className="bx bx-plus" />
                    How can I cancel/pause my subscription?
                  </a>
                  <p className="accordion-content">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a type
                    specimen book.
                  </p>
                </li>
                <li className="accordion-item">
                  <a className="accordion-title" href="javascript:void(0)">
                    <i className="bx bx-plus" />
                    Can I pay via an invoice?
                  </a>
                  <p className="accordion-content">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a type
                    specimen book.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-5 col-md-12">
            <div className="faq-image">
              <img src="assets/img/faq-img1.png" alt="image" />
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* End FAQ Area */}
    {/* Start Our Loving Clients Area */}
    <section className="our-loving-clients ptb-100 bg-f4f5fe">
      <div className="container">
        <div className="section-title">
          <h2>Our Loving Clients</h2>
        </div>
        <div className="clients-logo-list align-items-center">
          <div className="single-clients-logo">
            <a href="#">
              <img src="assets/img/clients-image/1.png" alt="image" />
            </a>
          </div>
          <div className="single-clients-logo">
            <a href="#">
              <img src="assets/img/clients-image/2.png" alt="image" />
            </a>
          </div>
          <div className="single-clients-logo">
            <a href="#">
              <img src="assets/img/clients-image/3.png" alt="image" />
            </a>
          </div>
          <div className="single-clients-logo">
            <a href="#">
              <img src="assets/img/clients-image/4.png" alt="image" />
            </a>
          </div>
          <div className="single-clients-logo">
            <a href="#">
              <img src="assets/img/clients-image/5.png" alt="image" />
            </a>
          </div>
          <div className="single-clients-logo">
            <a href="#">
              <img src="assets/img/clients-image/6.png" alt="image" />
            </a>
          </div>
          <div className="single-clients-logo">
            <a href="#">
              <img src="assets/img/clients-image/7.png" alt="image" />
            </a>
          </div>
          <div className="single-clients-logo">
            <a href="#">
              <img src="assets/img/clients-image/8.png" alt="image" />
            </a>
          </div>
          <div className="single-clients-logo">
            <a href="#">
              <img src="assets/img/clients-image/9.png" alt="image" />
            </a>
          </div>
        </div>
      </div>
    </section>
    {/* End Our Loving Clients Area */}
    {/* Start Free Trial Area */}
    <section className="free-trial-area pb-100 bg-f4f5fe">
      <div className="container">
        <div className="free-trial-content">
          <h2>We always try to be the best support to you as possible</h2>
          <p>
            Qualify your leads &amp; recognize the value of word your customer
            will love you
          </p>
          <HashLink smoth to="Contact#cnt" className="default-btn">
            <i className="bx bxs-hot" />
            Get Started Free
            <span />
          </HashLink>
        </div>
      </div>
      <div className="shape10">
        <img src="assets/img/shape/10.png" alt="image" />
      </div>
      <div className="shape11">
        <img src="assets/img/shape/7.png" alt="image" />
      </div>
      <div className="shape12">
        <img src="assets/img/shape/11.png" alt="image" />
      </div>
      <div className="shape13">
        <img src="assets/img/shape/12.png" alt="image" />
      </div>
    </section>
    {/* End Free Trial Area */}
    {/* Start Footer Area */}
    
  </>
  
  )
}

export default  Home