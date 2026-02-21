import React from 'react';
import './Home.css';
import Footer from './Footer';

const Home = () => {
  return (
    <div className="home">
      <section className="slider-section">
        <div className="slider-container">
          <div className="slide active" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1200)` }}>
            <div className="slide-content">
              <h2>Tirupati Balaji Temple</h2>
              <p>Sacred abode of Lord Venkateswara</p>
            </div>
          </div>
        </div>
      </section>

      <section className="product-cards-section">
        <div className="product-cards-container">
          <div className="product-card-item">
            <a href="#" className="product-link" aria-label="Hyderabad Tourism">
              <picture>
                <source media="(max-width: 600px)" srcSet="https://images.unsplash.com/photo-1609920658906-8223bd289001?w=360" />
                <img 
                  src="https://images.unsplash.com/photo-1609920658906-8223bd289001?w=600" 
                  alt="Hyderabad Charminar" 
                  srcSet="https://images.unsplash.com/photo-1609920658906-8223bd289001?w=352 352w, https://images.unsplash.com/photo-1609920658906-8223bd289001?w=600 600w"
                  width="600"
                  height="448"
                  loading="lazy"
                  className="product-img"
                />
              </picture>
              <div className="product-info">
                <h3>Hyderabad</h3>
                <p>City of Pearls</p>
              </div>
            </a>
          </div>

          <div className="product-card-item">
            <a href="#" className="product-link" aria-label="Kerala Tourism">
              <picture>
                <source media="(max-width: 600px)" srcSet="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=360" />
                <img 
                  src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600" 
                  alt="Kerala Backwaters" 
                  srcSet="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=352 352w, https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600 600w"
                  width="600"
                  height="448"
                  loading="lazy"
                  className="product-img"
                />
              </picture>
              <div className="product-info">
                <h3>Kerala</h3>
                <p>God's Own Country</p>
              </div>
            </a>
          </div>

          <div className="product-card-item">
            <a href="#" className="product-link" aria-label="Tamil Nadu Tourism">
              <picture>
                <source media="(max-width: 600px)" srcSet="https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=360" />
                <img 
                  src="https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=600" 
                  alt="Tamil Nadu Temple" 
                  srcSet="https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=352 352w, https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=600 600w"
                  width="600"
                  height="448"
                  loading="lazy"
                  className="product-img"
                />
              </picture>
              <div className="product-info">
                <h3>Tamil Nadu</h3>
                <p>Land of Temples</p>
              </div>
            </a>
          </div>

          <div className="product-card-item">
            <a href="#" className="product-link" aria-label="Karnataka Tourism">
              <picture>
                <source media="(max-width: 600px)" srcSet="https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=360" />
                <img 
                  src="https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=600" 
                  alt="Karnataka Mysore Palace" 
                  srcSet="https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=352 352w, https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=600 600w"
                  width="600"
                  height="448"
                  loading="lazy"
                  className="product-img"
                />
              </picture>
              <div className="product-info">
                <h3>Karnataka</h3>
                <p>Silicon Valley of India</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section className="video-section">
        <div className="temple-showcase">
          <div className="temple-grid">
            <div className="temple-item">
              <img 
                src="https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800" 
                alt="Tirupati Temple"
                className="temple-img"
              />
              <div className="temple-caption">
                <h3>Tirupati Balaji</h3>
                <p>Andhra Pradesh</p>
              </div>
            </div>
            <div className="temple-item">
              <img 
                src="https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800" 
                alt="Meenakshi Temple"
                className="temple-img"
              />
              <div className="temple-caption">
                <h3>Meenakshi Temple</h3>
                <p>Tamil Nadu</p>
              </div>
            </div>
            <div className="temple-item">
              <img 
                src="https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800" 
                alt="Golden Temple"
                className="temple-img"
              />
              <div className="temple-caption">
                <h3>Golden Temple</h3>
                <p>Amritsar</p>
              </div>
            </div>
            <div className="temple-item">
              <img 
                src="https://images.unsplash.com/photo-1609920658906-8223bd289001?w=800" 
                alt="Charminar"
                className="temple-img"
              />
              <div className="temple-caption">
                <h3>Charminar</h3>
                <p>Hyderabad</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="destinations">
        <h2>Popular Destinations</h2>
        <div className="destination-grid">
          <div className="destination-card">
            <h3>Telangana</h3>
            <p>Home to the historic city of Hyderabad</p>
          </div>
          <div className="destination-card">
            <h3>Andhra Pradesh</h3>
            <p>Beautiful beaches and ancient temples</p>
          </div>
          <div className="destination-card">
            <h3>Tamil Nadu</h3>
            <p>Land of temples and rich culture</p>
          </div>
          <div className="destination-card">
            <h3>Karnataka</h3>
            <p>Tech hub with natural wonders</p>
          </div>
          <div className="destination-card">
            <h3>Arunachal Pradesh</h3>
            <p>Pristine mountains and monasteries</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
