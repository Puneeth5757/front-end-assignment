// import React from "react";
import "./RsvpSection.css";


const RsvpSection = () => {
  return (
    <>
      <section id="rsvp" className="rsvp-section mt-5">
        <div className="container position-relative">
          <div className="row">
            <div className="col-12 col-md-4 d-flex justify-content-center">
              <img src="/bouquet.jpg" alt="bouquet" className="bouquet rounded-circle border border-dark" />
            </div>

            <div className="col-12 col-md-8 mt-5 mt-md-0">
              <div className="rsvp-form-container p-4 bg-white shadow">
                <h2 className="rsvp-title">RSVP</h2>
                <p className="rsvp-subtitle">WILL YOU ATTEND?</p>
                <form>
                  <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Your name" />
                  </div>
                  <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Who is coming with you" />
                  </div>
                  <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Your phone or email" />
                  </div>
                  <button type="submit" className="btn btn-outline-dark">Send</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="overlay-section mt-5">
        <img src='./gallery2.png' alt="Background" className="background-image" />
        <div className="overlay-content">
          <div className="info">
            <h1>Save the Date</h1>
            <h2>Joseph and Sophia</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div className="contact-table">
            <table className="table table-bordered table-dark">
              <thead>
                <tr>
                  <th colSpan="2">Contact Information</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Events</td>
                  <td>Gallery</td>
                </tr>
                <tr>
                  <td>Testimonials</td>
                  <td>Contacts</td>
                </tr>
                <tr>
                  <td>Phone:</td>
                  <td>+38090-111-2233</td>
                </tr>
              </tbody>
            </table>
          </div>
          <footer className="text-center py-3">
            <p>© Copyright 2023. All rights Reserved.</p>
          </footer>
        </div>
      </section>
    </>
  );
};

export default RsvpSection;
