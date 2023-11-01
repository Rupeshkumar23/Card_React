import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <section className="top_1">
        <div className="container-xxl py-5">
          <div className="container">
            <div className="text-center">
              <h1 className="mb-5 text-white">Contact For Any Query</h1>
            </div>
            <div className="row g-4">
              <div className="col-12 text-white">
                <div className="row gy-4 text-center">
                  <div className="col-md-4">
                    <h5 className="text-center ">
                      Booking
                    </h5>
                    <p>
                      <i className="fa fa-envelope-open org me-2"></i>
                      book@example.com
                    </p>
                  </div>
                  <div className="col-md-4">
                    <h5 className="text-center">
                      General
                    </h5>
                    <p>
                      <i className="fa fa-envelope-open org me-2"></i>
                      info@example.com
                    </p>
                  </div>
                  <div className="col-md-4">
                    <h5 className="text-center">
                      Technical
                    </h5>
                    <p>
                      <i className="fa fa-envelope-open org me-2"></i>
                      tech@example.com
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 wow fadeIn" data-wow-delay="0.1s">
                <iframe
                  title="Google Map 1"
                  className="position-relative rounded w-100 h-100"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                  frameborder="0"
                  style={{
                    minHeight: "350px",
                    border: "0",
                  }}
                  allowFullScreen
                  aria-hidden="false"
                  tabIndex="0"
                ></iframe>
              </div>
              <div className="col-md-6">
                <div className="wow fadeInUp" data-wow-delay="0.2s">
                  <form>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Your Name"
                          />
                          <label htmlFor="name">Your Name</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Your Email"
                          />
                          <label htmlFor="email">Your Email</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating">
                          <input
                            type="text"
                            className="form-control"
                            id="subject"
                            placeholder="Subject"
                          />
                          <label htmlFor="subject">Subject</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating">
                          <textarea
                            className="form-control"
                            placeholder="Leave a message here"
                            id="message"
                            style={{ height: "150px" }}
                          ></textarea>
                          <label htmlFor="message">Message</label>
                        </div>
                      </div>
                      <div className="col-12">
                        
                      <Link to="/"><Button className=" border-0 Sign_in w-100 fw-semibold py-3">Send Message</Button></Link>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
