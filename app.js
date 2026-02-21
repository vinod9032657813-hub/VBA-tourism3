const { useState } = React;

const statesData = {
  'Andhra Pradesh': ['Tirupati Temple', 'Araku Valley', 'Borra Caves', 'Vijayawada'],
  'Kerala': ['Backwaters', 'Munnar Tea Gardens', 'Kovalam Beach', 'Periyar Wildlife'],
  'Telangana': ['Charminar', 'Golconda Fort', 'Ramoji Film City', 'Hussain Sagar Lake'],
  'Karnataka': ['Mysore Palace', 'Hampi', 'Coorg', 'Bangalore Gardens'],
  'Tamil Nadu': ['Meenakshi Temple', 'Marina Beach', 'Ooty', 'Mahabalipuram'],
  'Arunachal Pradesh': ['Tawang Monastery', 'Ziro Valley', 'Namdapha National Park', 'Sela Pass'],
  'Jammu Kashmir': ['Dal Lake', 'Gulmarg', 'Vaishno Devi', 'Pahalgam'],
  'Uttar Pradesh': ['Taj Mahal', 'Varanasi Ghats', 'Agra Fort', 'Lucknow Imambara'],
  'Maharashtra': ['Gateway of India', 'Ajanta Caves', 'Lonavala', 'Shirdi'],
  'Rajasthan': ['Jaipur City Palace', 'Jaisalmer Fort', 'Udaipur Lakes', 'Mehrangarh Fort']
};

function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <nav className="navbar">
      <div className="nav-brand">Explore India</div>
      <ul className="nav-menu">
        {Object.keys(statesData).map((state) => (
          <li 
            key={state}
            className="nav-item"
            onMouseEnter={() => setActiveDropdown(state)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <a href={`#${state}`} className="nav-link">{state}</a>
            {activeDropdown === state && (
              <ul className="dropdown">
                {statesData[state].map((place) => (
                  <li key={place}>
                    <a href={`#${place}`}>{place}</a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

function HomePage() {
  return (
    <div className="container">
      <Navbar />
      <main className="main-content">
        <h1>Welcome to Explore India</h1>
        <p>Discover the beauty and diversity of Indian states</p>
        <div className="hero-section">
          <img src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800" alt="India" />
        </div>
      </main>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HomePage />);
