import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>VBA TOURISM</h3>
          <p>Explore the beauty and heritage of India</p>
          <div className="social-links">
            <a href="#" aria-label="Facebook">📘</a>
            <a href="#" aria-label="Twitter">🐦</a>
            <a href="#" aria-label="Instagram">📷</a>
            <a href="#" aria-label="YouTube">📺</a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Telangana</h4>
          <ul>
            <li><Link to="/city/hyderabad">Hyderabad</Link></li>
            <li><Link to="/city/warangal">Warangal</Link></li>
            <li><Link to="/city/alampur">Alampur</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Andhra Pradesh</h4>
          <ul>
            <li><Link to="/city/visakhapatnam">Visakhapatnam</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Tamil Nadu</h4>
          <ul>
            <li><Link to="/city/chennai">Chennai</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Karnataka</h4>
          <ul>
            <li><Link to="/city/bangalore">Bangalore</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Arunachal Pradesh</h4>
          <ul>
            <li><Link to="/city/tawang">Tawang</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Kerala</h4>
          <ul>
            <li><Link to="/city/kochi">Kochi</Link></li>
            <li><Link to="/city/munnar">Munnar</Link></li>
            <li><Link to="/city/alleppey">Alleppey</Link></li>
            <li><Link to="/city/kovalam">Kovalam</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 VBA TOURISM. All rights reserved.</p>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <span>|</span>
          <a href="#">Terms of Service</a>
          <span>|</span>
          <a href="#">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
