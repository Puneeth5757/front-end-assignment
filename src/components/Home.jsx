// import React from "react";
import "./Home.css";

const HeroSection = () => {
  return (
    <>
      <section
        id="home"
        className="home-section mt-4"
      >
        <img
          src="./banner1.jpg"
          alt="Wedding Banner"
          className="full-viewport-img "
        />
      </section>
     <div className="love-story-title mt-3">
     <h1 className="display-3">Joseph & Sophia</h1>
     <p className="lead mt-4">Save the date of our wedding</p>
     </div>

      <section>
        <div className="love-story-section">
          <img
            src="./flower-image.png"
            alt="Flowers"
            className="img-fluid mb-3"
          />
          <h2 className=" love-story-title">Love story</h2>
          <p className=" container px-5 mb-5 love-story-text">
            Once upon a time, in a small village nestled in the rolling hills of
            the countryside, there lived a young woman named Sophia. Sophia was
            a kind and gentle soul, with a heart full of love and a fierce
            determination to make the world a better place. One day, Sophia met
            a handsome young man named Joseph. Joseph was tall and strong, with
            piercing blue eyes and a kind smile. Sophia was immediately drawn to
            him, and before long, they had fallen deeply in love.
          </p>
        </div>
      </section>

      <section className="events-section1 text-center">
        <div className="container">
          {/* Top Center Image */}
          <div className="center-flower">
            <img
              src="./flower-center.png"
              alt="center decoration"
              className="img-fluid"
            />
          </div>

          {/* Date and Location */}
          <div className="date-header">
            <img
              src="./flower-left.png"
              alt="left decoration"
              className="img-left"
            />
            <div className="event-details">
              <h2>June 11th, 2024</h2>
              <h3>
                The Riverside Church
                <br />
                New York, USA
              </h3>
            </div>
            <img
              src="./flower-right.png"
              alt="right decoration"
              className="img-right"
            />
          </div>
          <div className="countdown-timer">
            <div>
              <p>-92</p>
              <span>Days</span>
            </div>
            <div>
              <p>-2</p>
              <span>Hours</span>
            </div>
            <div>
              <p>17</p>
              <span>Minutes</span>
            </div>
            <div>
              <p>-2</p>
              <span>Seconds</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
