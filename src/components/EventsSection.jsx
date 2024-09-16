import { useState } from "react";
import "./EventsSection.css";

const EventsSection = () => {
  // State to manage active tab
  const [activeTab, setActiveTab] = useState("ceremony");

  return (
    <section id="events" className="events-section2 py-5 ">
      <div className="container mt-5">
        <div className="text-center">
          <div>
          <h2 className="events-title">Wedding events</h2>
          <p>Here you can find all the information about our wedding. The schedule of the event and the places</p>
          </div>
          <div className="events-tabs">
            <button 
              className={`tab-btn ${activeTab === "ceremony" ? "active" : ""}`}
              onClick={() => setActiveTab("ceremony")}
            >
              Ceremony
            </button>
            <button 
              className={`tab-btn ${activeTab === "dinner" ? "active" : ""}`}
              onClick={() => setActiveTab("dinner")}
            >
              Dinner
            </button>
            <button 
              className={`tab-btn ${activeTab === "party" ? "active" : ""}`}
              onClick={() => setActiveTab("party")}
            >
              Party
            </button>
          </div>
        </div>

        {activeTab === "ceremony" && (
          <div className="row event-details mt-5">
            <div className="col-md-6">
              <img 
                src="./gallery1.png" 
                alt="Ceremony" 
                className="img-fluid"
              />
            </div>
            <div className="col-md-6">
              <h4>When and Where</h4>
              <p><i className="fas fa-map-marker-alt"></i> W Hotel, 1423 Hobart St, Pittsburgh, PA, 15217</p>
              <p><i className="fas fa-clock"></i> 09:00 - 10:30, Sep 15, 2024</p>
              <p><b>Keep it classy</b></p>
              <button className="btn btn-outline-dark">View on map</button>
            </div>
          </div>
        )}

        {activeTab === "dinner" && (
          <div className="row event-details mt-5">
            <div className="col-md-6">
              <img 
                src="./gallery2.png" 
                alt="Dinner" 
                className="img-fluid"
              />
            </div>
            <div className="col-md-6">
              <h4>When and Where</h4>
              <p><i className="fas fa-map-marker-alt"></i> Grand Ballroom, 1234 Main St, Pittsburgh, PA</p>
              <p><i className="fas fa-clock"></i> 19:00 - 22:00, Sep 15, 2024</p>
              <button className="btn btn-outline-dark">View on map</button>
            </div>
          </div>
        )}

        {activeTab === "party" && (
          <div className="row event-details mt-5">
            <div className="col-md-6">
              <img 
                src="./gallery3.png" 
                alt="Party" 
                className="img-fluid"
              />
            </div>
            <div className="col-md-6">
              <h4>When and Where</h4>
              <p><i className="fas fa-map-marker-alt"></i> Party Venue, 5678 Liberty Ave, Pittsburgh, PA</p>
              <p><i className="fas fa-clock"></i> 22:30 - 02:00, Sep 15, 2024</p>
              <button className="btn btn-outline-dark">View on map</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default EventsSection;
