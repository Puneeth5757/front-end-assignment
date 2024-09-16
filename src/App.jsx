import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HomeSection from "./components/Home";
import EventsSection from "./components/EventsSection";
import GallerySection from "./components/GallerySection";
import RsvpSection from "./components/RsvpSection";
import loadingImage from './assets/loading-image.png';
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);  //state variable   

  useEffect(() => { //handle effects
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const text = "love the date";

  const animatedText = text.split('').map((char, index) => (
    <span key={index} className={char === ' ' ? 'space' : ''}>
      {char}
    </span>
  ));

  if (isLoading) {
    return (
      <div className="fade-in loading-screen">
        <div className="loading-text">
          <h1>{animatedText}</h1>
        </div>
        <img src={loadingImage} alt="Loading..." className="loading-image" />
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <HomeSection />
      <EventsSection />
      <GallerySection />
      <RsvpSection />
    </>
  );
}

export default App;
