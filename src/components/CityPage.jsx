import React from 'react';
import { useParams } from 'react-router-dom';
import './CityPage.css';
import Footer from './Footer';

const cityData = {
  hyderabad: {
    name: 'Hyderabad',
    state: 'Telangana',
    description: 'The City of Pearls, known for its rich history and IT industry',
    attractions: [
      { title: 'Charminar', description: 'Iconic monument and mosque built in 1591', image: 'https://images.unsplash.com/photo-1609920658906-8223bd289001?w=600' },
      { title: 'Golconda Fort', description: 'Historic fortress with stunning architecture', image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600' },
      { title: 'Hussain Sagar Lake', description: 'Heart-shaped lake with Buddha statue', image: 'https://images.unsplash.com/photo-1580837119756-563d608dd119?w=600' },
      { title: 'Ramoji Film City', description: 'World\'s largest film studio complex', image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=600' }
    ]
  },
  warangal: {
    name: 'Warangal',
    state: 'Telangana',
    description: 'Ancient city with magnificent temples and forts',
    attractions: [
      { title: 'Warangal Fort', description: 'Historic fort with intricate stone gateways', image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=600' },
      { title: 'Thousand Pillar Temple', description: 'Architectural marvel from Kakatiya dynasty', image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=600' },
      { title: 'Bhadrakali Temple', description: 'Ancient temple dedicated to Goddess Kali', image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=600' },
      { title: 'Laknavaram Lake', description: 'Scenic lake with hanging bridge', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600' }
    ]
  },
  nizamabad: {
    name: 'Nizamabad',
    state: 'Telangana',
    description: 'Historic city known for temples and forts',
    attractions: [
      { title: 'Nizamabad Fort', description: 'Ancient fort with historical significance', image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600' },
      { title: 'Dichpally Ramalayam', description: 'Beautiful temple with intricate carvings', image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=600' },
      { title: 'Alisagar Reservoir', description: 'Scenic reservoir with gardens', image: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=600' },
      { title: 'Domakonda Fort', description: 'Historic fort ruins', image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=600' }
    ]
  },
  karimnagar: {
    name: 'Karimnagar',
    state: 'Telangana',
    description: 'City known for temples and historical monuments',
    attractions: [
      { title: 'Lower Manair Dam', description: 'Beautiful dam with scenic views', image: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=600' },
      { title: 'Elgandal Fort', description: 'Historic fort with panoramic views', image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600' },
      { title: 'Vemulawada Temple', description: 'Ancient Shiva temple', image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=600' },
      { title: 'Kondagattu Temple', description: 'Hilltop temple dedicated to Lord Hanuman', image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=600' }
    ]
  },
  alampur: {
    name: 'Alampur',
    state: 'Telangana',
    description: 'Temple town known for Navabrahma Temples',
    attractions: [
      { title: 'Jogulamba Temple', description: 'One of the 18 Shakti Peethas', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Jogulamba_temple.jpg/800px-Jogulamba_temple.jpg' },
      { title: 'Navabrahma Temples', description: 'Group of nine Shiva temples from 7th century', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Alampur_Navabrahma_Temples.jpg/800px-Alampur_Navabrahma_Temples.jpg' },
      { title: 'Sangameswara Temple', description: 'Ancient temple at Krishna-Tungabhadra confluence', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Sangameshwara_Temple%2C_Alampur.jpg/800px-Sangameshwara_Temple%2C_Alampur.jpg' },
      { title: 'Alampur Museum', description: 'Archaeological museum with ancient sculptures', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Alampur_Museum.jpg/800px-Alampur_Museum.jpg' }
    ]
  },
  visakhapatnam: {
    name: 'Visakhapatnam',
    state: 'Andhra Pradesh',
    description: 'Port city with beautiful beaches and hills',
    attractions: [
      { title: 'RK Beach', description: 'Popular beach with submarine museum', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600' },
      { title: 'Araku Valley', description: 'Hill station with coffee plantations', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600' },
      { title: 'Borra Caves', description: 'Natural limestone caves', image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=600' },
      { title: 'Kailasagiri', description: 'Hilltop park with panoramic views', image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600' }
    ]
  },
  vijayawada: {
    name: 'Vijayawada',
    state: 'Andhra Pradesh',
    description: 'City on banks of Krishna River',
    attractions: [
      { title: 'Kanaka Durga Temple', description: 'Famous hilltop temple', image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=600' },
      { title: 'Prakasam Barrage', description: 'Bridge across Krishna River', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600' },
      { title: 'Undavalli Caves', description: 'Ancient rock-cut caves', image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=600' },
      { title: 'Bhavani Island', description: 'Largest river island in India', image: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=600' }
    ]
  },
  tirupati: {
    name: 'Tirupati',
    state: 'Andhra Pradesh',
    description: 'Sacred city home to Tirumala Venkateswara Temple',
    attractions: [
      { title: 'Tirumala Temple', description: 'Most visited Hindu temple in the world', image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=600' },
      { title: 'Sri Venkateswara Zoological Park', description: 'Large zoo with diverse wildlife', image: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=600' },
      { title: 'Chandragiri Fort', description: 'Historic fort with palace', image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600' },
      { title: 'Talakona Waterfall', description: 'Highest waterfall in Andhra Pradesh', image: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=600' }
    ]
  },
  guntur: {
    name: 'Guntur',
    state: 'Andhra Pradesh',
    description: 'City known for chili and cotton trade',
    attractions: [
      { title: 'Amaravati', description: 'Ancient Buddhist site', image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=600' },
      { title: 'Uppalapadu Bird Sanctuary', description: 'Sanctuary for migratory birds', image: 'https://images.unsplash.com/photo-1444464666168-49d633b86797?w=600' },
      { title: 'Kondaveedu Fort', description: 'Historic hill fort', image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=600' },
      { title: 'Nagarjuna Sagar', description: 'Large dam and reservoir', image: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=600' }
    ]
  },
  chennai: {
    name: 'Chennai',
    state: 'Tamil Nadu',
    description: 'Cultural capital with temples and beaches',
    attractions: [
      { title: 'Marina Beach', description: 'Second longest urban beach in the world', image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=600' },
      { title: 'Kapaleeshwarar Temple', description: 'Ancient Shiva temple with Dravidian architecture', image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600' },
      { title: 'Fort St. George', description: 'First English fortress in India', image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=600' },
      { title: 'Government Museum', description: 'One of the oldest museums in India', image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=600' }
    ]
  },
  coimbatore: {
    name: 'Coimbatore',
    state: 'Tamil Nadu',
    description: 'Manchester of South India',
    attractions: [
      { title: 'Marudhamalai Temple', description: 'Hilltop temple dedicated to Lord Murugan', image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=600' },
      { title: 'Siruvani Waterfalls', description: 'Beautiful waterfall with pure water', image: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=600' },
      { title: 'VOC Park', description: 'Large park with zoo', image: 'https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=600' },
      { title: 'Dhyanalinga Temple', description: 'Unique meditation temple', image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=600' }
    ]
  },
  madurai: {
    name: 'Madurai',
    state: 'Tamil Nadu',
    description: 'Temple city with rich cultural heritage',
    attractions: [
      { title: 'Meenakshi Temple', description: 'Magnificent temple with towering gopurams', image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600' },
      { title: 'Thirumalai Nayak Palace', description: 'Indo-Saracenic palace', image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=600' },
      { title: 'Gandhi Memorial Museum', description: 'Museum dedicated to Mahatma Gandhi', image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=600' },
      { title: 'Alagar Kovil', description: 'Temple in scenic hills', image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=600' }
    ]
  },
  ooty: {
    name: 'Ooty',
    state: 'Tamil Nadu',
    description: 'Queen of Hill Stations',
    attractions: [
      { title: 'Botanical Gardens', description: 'Beautiful gardens with rare plants', image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600' },
      { title: 'Ooty Lake', description: 'Scenic lake with boating', image: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=600' },
      { title: 'Doddabetta Peak', description: 'Highest peak in Nilgiris', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600' },
      { title: 'Nilgiri Mountain Railway', description: 'UNESCO heritage toy train', image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=600' }
    ]
  },
  bangalore: {
    name: 'Bangalore',
    state: 'Karnataka',
    description: 'Silicon Valley of India with pleasant weather',
    attractions: [
      { title: 'Lalbagh Garden', description: 'Botanical garden with glass house', image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600' },
      { title: 'Bangalore Palace', description: 'Tudor-style palace with beautiful architecture', image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=600' },
      { title: 'Cubbon Park', description: 'Sprawling green space in city center', image: 'https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=600' },
      { title: 'ISKCON Temple', description: 'Modern temple with stunning architecture', image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=600' }
    ]
  },
  mysore: {
    name: 'Mysore',
    state: 'Karnataka',
    description: 'City of Palaces with royal heritage',
    attractions: [
      { title: 'Mysore Palace', description: 'Magnificent royal palace', image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=600' },
      { title: 'Chamundi Hills', description: 'Sacred hill with temple', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600' },
      { title: 'Brindavan Gardens', description: 'Musical fountain gardens', image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600' },
      { title: 'St. Philomena\'s Cathedral', description: 'Neo-Gothic church', image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=600' }
    ]
  },
  hampi: {
    name: 'Hampi',
    state: 'Karnataka',
    description: 'UNESCO World Heritage Site with ancient ruins',
    attractions: [
      { title: 'Virupaksha Temple', description: 'Ancient functioning temple', image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=600' },
      { title: 'Vittala Temple', description: 'Temple with stone chariot', image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600' },
      { title: 'Lotus Mahal', description: 'Indo-Islamic palace', image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=600' },
      { title: 'Matanga Hill', description: 'Hill with panoramic views', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600' }
    ]
  },
  coorg: {
    name: 'Coorg',
    state: 'Karnataka',
    description: 'Scotland of India with coffee plantations',
    attractions: [
      { title: 'Abbey Falls', description: 'Scenic waterfall in coffee estates', image: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=600' },
      { title: 'Raja\'s Seat', description: 'Garden with sunset views', image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600' },
      { title: 'Dubare Elephant Camp', description: 'Elephant interaction camp', image: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=600' },
      { title: 'Talacauvery', description: 'Source of river Cauvery', image: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=600' }
    ]
  },
  tawang: {
    name: 'Tawang',
    state: 'Arunachal Pradesh',
    description: 'Himalayan town with monasteries and natural beauty',
    attractions: [
      { title: 'Tawang Monastery', description: 'Largest monastery in India', image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=600' },
      { title: 'Sela Pass', description: 'High altitude mountain pass with lake', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600' },
      { title: 'Madhuri Lake', description: 'Beautiful lake surrounded by mountains', image: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=600' },
      { title: 'War Memorial', description: 'Memorial for soldiers of 1962 war', image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=600' }
    ]
  },
  ziro: {
    name: 'Ziro',
    state: 'Arunachal Pradesh',
    description: 'UNESCO World Heritage Site with Apatani tribe',
    attractions: [
      { title: 'Ziro Valley', description: 'Picturesque valley with rice fields', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600' },
      { title: 'Talley Valley', description: 'Wildlife sanctuary with biodiversity', image: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=600' },
      { title: 'Kile Pakho', description: 'Scenic hilltop viewpoint', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600' },
      { title: 'Apatani Villages', description: 'Traditional tribal villages', image: 'https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=600' }
    ]
  },
  bomdila: {
    name: 'Bomdila',
    state: 'Arunachal Pradesh',
    description: 'Hill station with Buddhist monasteries',
    attractions: [
      { title: 'Bomdila Monastery', description: 'Buddhist monastery with views', image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=600' },
      { title: 'Eaglenest Wildlife Sanctuary', description: 'Biodiversity hotspot', image: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=600' },
      { title: 'Bomdila View Point', description: 'Panoramic mountain views', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600' },
      { title: 'Apple Orchards', description: 'Beautiful apple gardens', image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600' }
    ]
  },
  itanagar: {
    name: 'Itanagar',
    state: 'Arunachal Pradesh',
    description: 'Capital city with historical fort',
    attractions: [
      { title: 'Ita Fort', description: 'Ancient brick fort', image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600' },
      { title: 'Ganga Lake', description: 'Scenic lake with orchid garden', image: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=600' },
      { title: 'Jawaharlal Nehru Museum', description: 'State museum with tribal artifacts', image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=600' },
      { title: 'Buddhist Temple', description: 'Peaceful Buddhist monastery', image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=600' }
    ]
  },
  kochi: {
    name: 'Kochi',
    state: 'Kerala',
    description: 'Queen of Arabian Sea with colonial heritage and backwaters',
    attractions: [
      { title: 'Fort Kochi', description: 'Historic area with colonial architecture', image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=600' },
      { title: 'Chinese Fishing Nets', description: 'Iconic fishing nets from ancient China', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600' },
      { title: 'Mattancherry Palace', description: 'Portuguese palace with Kerala murals', image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=600' },
      { title: 'Marine Drive', description: 'Scenic promenade along backwaters', image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600' }
    ]
  },
  munnar: {
    name: 'Munnar',
    state: 'Kerala',
    description: 'Hill station famous for tea plantations and scenic beauty',
    attractions: [
      { title: 'Tea Gardens', description: 'Sprawling tea plantations on rolling hills', image: 'https://images.unsplash.com/photo-1563789031959-4c02bcb41319?w=600' },
      { title: 'Eravikulam National Park', description: 'Home to endangered Nilgiri Tahr', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600' },
      { title: 'Mattupetty Dam', description: 'Beautiful dam surrounded by hills', image: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=600' },
      { title: 'Echo Point', description: 'Natural echo phenomenon spot', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600' }
    ]
  },
  alleppey: {
    name: 'Alleppey',
    state: 'Kerala',
    description: 'Venice of the East known for backwater houseboats',
    attractions: [
      { title: 'Backwater Cruise', description: 'Houseboat journey through serene backwaters', image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600' },
      { title: 'Alappuzha Beach', description: 'Beautiful beach with historic pier', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600' },
      { title: 'Vembanad Lake', description: 'Largest lake in Kerala', image: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=600' },
      { title: 'Kumarakom Bird Sanctuary', description: 'Paradise for bird watchers', image: 'https://images.unsplash.com/photo-1444464666168-49d633b86797?w=600' }
    ]
  },
  kovalam: {
    name: 'Kovalam',
    state: 'Kerala',
    description: 'Beach paradise with crescent-shaped coastline',
    attractions: [
      { title: 'Lighthouse Beach', description: 'Popular beach with iconic lighthouse', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600' },
      { title: 'Hawah Beach', description: 'Serene beach perfect for relaxation', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600' },
      { title: 'Vizhinjam Marine Aquarium', description: 'Aquarium with diverse marine life', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600' },
      { title: 'Ayurvedic Spas', description: 'Traditional Kerala wellness treatments', image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600' }
    ]
  }
};

const CityPage = () => {
  const { city } = useParams();
  const data = cityData[city.toLowerCase()] || cityData.hyderabad;

  return (
    <div className="city-page">
      <div className="city-header">
        <h1>{data.name}</h1>
        <p className="state-badge">{data.state}</p>
        <p className="city-description">{data.description}</p>
      </div>

      <div className="attractions-section">
        <h2>Top Attractions</h2>
        <div className="attractions-grid">
          {data.attractions.map((attraction, index) => (
            <div key={index} className="attraction-card">
              <div className="attraction-icon">
                {attraction.image.startsWith('http') ? (
                  <img src={attraction.image} alt={attraction.title} loading="lazy" />
                ) : (
                  <span style={{ fontSize: '60px', display: 'block', paddingTop: '80px' }}>{attraction.image}</span>
                )}
              </div>
              <h3>{attraction.title}</h3>
              <p>{attraction.description}</p>
              <button className="explore-btn">Explore More</button>
            </div>
          ))}
        </div>
      </div>

      <div className="info-section">
        <div className="info-card">
          <h3>🌤️ Best Time to Visit</h3>
          <p>October to March</p>
        </div>
        <div className="info-card">
          <h3>🚗 How to Reach</h3>
          <p>Well connected by air, rail, and road</p>
        </div>
        <div className="info-card">
          <h3>🏨 Accommodation</h3>
          <p>Wide range of hotels and resorts available</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CityPage;
