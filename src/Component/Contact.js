import React ,{ useRef } from 'react'

import emailjs from "@emailjs/browser";

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { ExternalLink } from 'react-external-link';

export const Contact = () => {
  const submit = () => {
    confirmAlert({
     
      message: 'Your message has been send succesfully.',
      buttons: [
       
      ]
    });
  };
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2ulzqzg",
        "template_z5jbmdl",
        form.current,
        "pnZ-1TlywqPk2wnkn"
      )
      .then(
        (result) => {
          console.log(result.text);
     submit();
          console.log("message sent");
        
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset();
  };

  return (
   
   
    <>
    
    <div className="page-title-area">
      <div className="container">
        <div className="page-title-content">
          <h2>Contact Us</h2>
          <p>Drop us Message for any Query</p>
        </div>
      </div>
    </div>
    {/* End Page Title Area */}
    {/* Start Contact Area */}
    <section className="contact-area ptb-100" id='cnt'>
      <div className="container">
        <div className="contact-inner">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="contact-features-list">
                <h3>Some other great reasons to choose us</h3>
                <p>
                  Take the first steps towards increased productivity and reduced
                  stress with Strax.
                </p>
                <p>
                  We are a highly trained, dedicated team, helping entrepreneurs,
                  professionals, and small teams streamline success - not just in
                  work, but in life too. We help spare your time to focus on the
                  bigger picture by taking care of the little details.
                </p>
                <ul>
                  <li>
                    <i className="bx bx-badge-check" /> Staff works from our
                    offices in USA
                  </li>
                  <li>
                    <i className="bx bx-badge-check" /> Scale up/ down on demand
                  </li>
                  <li>
                    <i className="bx bx-badge-check" /> One time or on going
                    projects
                  </li>
                  <li>
                    <i className="bx bx-badge-check" /> Hire based on skill set
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="contact-form">
                <h3>Let's Start Your Free Trial</h3>
                <form id="contactForm" ref={form} onSubmit={sendEmail}>
                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="from_name"
                          id="name"
                          className="form-control"
                          required=""
                          data-error="Please enter your name"
                          placeholder="Your Name"
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="form-control"
                          required=""
                          data-error="Please enter your email"
                          placeholder="Your Email"
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="phone"
                          id="phone_number"
                          required=""
                          data-error="Please enter your number"
                          className="form-control"
                          placeholder="Your Phone"
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="from_name"
                          id="msg_subject"
                          className="form-control"
                          required=""
                          data-error="Please enter your subject"
                          placeholder="Your Subject"
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <textarea
                          name="message"
                          className="form-control"
                          id="message"
                          cols={30}
                          rows={6}
                          required=""
                          data-error="Write your message"
                          placeholder="Your Message"
                          defaultValue={""}
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <button type="submit" className="default-btn" >
                        <i className="bx bxs-paper-plane" />
                        Send Message
                        <span />
                 </button>
                      <div id="msgSubmit" className="h3 text-center hidden" />
                      <div className="clearfix" />
                   
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="contact-info">
            <div className="contact-info-content">
              <h3>Contact us by Phone Number or Email Address</h3>
              <h2>
                <a href="tel:+0881306298615">+92 348 155 6197</a>
                <span>OR</span>
                <ExternalLink href="mailto:strax@cybersolclub.com" target="_blank">
                  <span
                    className="__cf_email__"
                    data-cfemail="432b262f2f2c03303731223b6d202c2e"
                  >
                    [email&nbsp;protected]
                  </span>
                </ExternalLink>
              </h2>
            
            </div>
          </div>
        </div>
      </div>
    </section>

    <div style={{display:'flex','justify-content':'center',marginBottom:'10px',marginTop:'-40px'}} id="map">
    <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.3918500257573!2d74.36090511514779!3d31.40332828140841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc1e7e54ccdc02c1b!2zMzHCsDI0JzEyLjAiTiA3NMKwMjEnNDcuMSJF!5e0!3m2!1sen!2s!4v1651933062423!5m2!1sen!2s"
  width="1110"
  
  title="Main content"
  height={350}
  style={{'borderRadius':'5px' }}
  allowFullScreen=""

  referrerPolicy="no-referrer-when-downgrade"
/>

    </div>
    
    {/* End Contact Area */}
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
  </>
  


  
   
  )
}
export default Contact;