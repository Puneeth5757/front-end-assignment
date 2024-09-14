import { useEffect } from 'react';
import './GallerySection.css';

const GallerySection = () => {
  useEffect(() => {
    // Function to handle intersection
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    };

    // Create an intersection observer instance
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1, // Trigger when 10% of the target is visible
    });

    // Observe all .img-container elements
    const imgContainers = document.querySelectorAll('.img-container');
    imgContainers.forEach((imgContainer) => observer.observe(imgContainer));

    // Cleanup observer on unmount
    return () => {
      imgContainers.forEach((imgContainer) => observer.unobserve(imgContainer));
    };
  }, []);

  return (
    <div>
      {/* Gallery Section */}
      <section id="gallery" className="gallery-section py-5">
        <div className="container mt-5">
          <h2 className="text-center mb-4">Gallery</h2>
          <div className="row">
            <div className="col-md-12 mb-4">
              <div className="img-container p-4"> {/* Add padding */}
                <img src="./gallery3.png" alt="Gallery 1" className="img-fluid transition-img" />
              </div>
            </div>
            <div className="col-md-12 mb-4">
              <div className="img-container p-4"> {/* Add padding */}
                <img src="./gallery2.png" alt="Gallery 2" className="img-fluid transition-img" />
              </div>
            </div>
            <div className="col-md-12 mb-4">
              <div className="img-container p-4"> {/* Add padding */}
                <img src="./gallery1.png" alt="Gallery 3" className="img-fluid transition-img" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wishes Section */}
      <section id="wishes" className="wishes-section mt-5">
        <div className="container text-center">
          <h2 className="mb-3">Wishes</h2>
          <p >Your wishes are the source of inspiration and motivation for us. Thank you all for these warm words</p>

          <div className="row mt-5">
            <div className="col-md-12 mb-4 text-center">
              <img
                src="./image1.png"
                alt="Alex Cooper"
                className="rounded-circle img-fluid"
                width="150"
                height="150"
              />
              <h4 className="mt-3">Alex Cooper</h4>
              <p>With warm congratulations to a very special pair. May you always find in each other the love and happiness that only partners in life share!</p>
            </div>
            <div className="col-md-12 mb-4 text-center">
              <img
                src="./image2.png"
                alt="Sophia Alen"
                className="rounded-circle img-fluid"
                width="150"
                height="150"
              />
              <h4 className="mt-3">Sophia Alen</h4>
              <p>True love stories never end! Happy wedding day and may there be many more chapters in the wonderful story of your love for one another.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GallerySection;
