import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const states = {
    telangana: ['Hyderabad', 'Warangal', 'Nizamabad', 'Karimnagar', 'Alampur'],
    ap: ['Visakhapatnam', 'Vijayawada', 'Tirupati', 'Guntur'],
    tamilnadu: ['Chennai', 'Coimbatore', 'Madurai', 'Ooty'],
    karnataka: ['Bangalore', 'Mysore', 'Hampi', 'Coorg'],
    kerala: ['Kochi', 'Munnar', 'Alleppey', 'Kovalam'],
    arunachalpradesh: ['Tawang', 'Ziro', 'Bomdila', 'Itanagar']
  };

  const allCities = Object.values(states).flat();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const cityMatch = allCities.find(
        city => city.toLowerCase() === searchQuery.toLowerCase().trim()
      );
      
      if (cityMatch) {
        navigate(`/city/${cityMatch.toLowerCase().replace(/\s+/g, '')}`);
        setSearchQuery('');
      } else {
        alert(`City "${searchQuery}" not found. Try: ${allCities.slice(0, 5).join(', ')}, etc.`);
      }
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch(e);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="navbar-brand">
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
            <h2>VBA TOURISM</h2>
          </Link>
        </div>
        
        <div className="navbar-search">
          <input 
            type="text" 
            placeholder="Search destinations..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            className="search-input"
          />
          <button className="search-btn" onClick={handleSearch}>🔍</button>
        </div>
      </div>

      <ul className="navbar-menu">
        {Object.keys(states).map((state) => (
          <li 
            key={state}
            className="navbar-item"
            onMouseEnter={() => setActiveDropdown(state)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <a href={`#${state}`} className="navbar-link">
              {state === 'ap' ? 'Andhra Pradesh' : 
               state === 'tamilnadu' ? 'Tamil Nadu' : 
               state === 'arunachalpradesh' ? 'Arunachal Pradesh' :
               state.charAt(0).toUpperCase() + state.slice(1)}
            </a>
            {activeDropdown === state && (
              <ul className="dropdown-menu">
                {states[state].map((city) => (
                  <li key={city} className="dropdown-item">
                    <Link to={`/city/${city.toLowerCase().replace(/\s+/g, '')}`}>
                      {city}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
