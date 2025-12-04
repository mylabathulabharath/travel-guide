import { useNavigate } from 'react-router-dom'
import { destinations } from '@/data/destinations'

export default function Home() {
  const navigate = useNavigate()
  
  // Filter to show Auckland, Wellington, Hamilton, Christchurch
  const homeDestinations = destinations.filter(d => 
    ['AUCKLAND', 'WELLINGTON', 'HAMILTON', 'CHRISTCHURCH'].includes(d.name)
  )

  return (
    <div className="min-h-screen">
      <section className="home-main-section">
        <div className="home-container">
          {/* Top Row of Destinations */}
          <div className="tour-destinations-row">
            {homeDestinations.slice(0, 2).map((destination) => (
              <div 
                key={destination.id} 
                className="tour-destination-item"
                onClick={() => navigate(`/destination/${destination.id}`)}
              >
                <div className="tour-destination-image">
                  <img
                    src={destination.image}
                    alt={destination.name}
                  />
                </div>
                <div className="tour-destination-caption">
                  {destination.name}
                </div>
              </div>
            ))}
          </div>

          {/* Promotional Text */}
          <div className="tour-promotional-text">
            <p>Find Your Next Destination – Adventure, Relaxation, and Everything in Between.</p>
            <p>Book Now and Save – Explore Our Latest Travel Offers.</p>
            <p>Travel More, Worry Less – Plan Your Next Adventure with Us.</p>
          </div>

          {/* Bottom Row of Destinations */}
          <div className="tour-destinations-row">
            {homeDestinations.slice(2, 4).map((destination) => (
              <div 
                key={destination.id} 
                className="tour-destination-item"
                onClick={() => navigate(`/destination/${destination.id}`)}
              >
                <div className="tour-destination-image">
                  <img
                    src={destination.image}
                    alt={destination.name}
                  />
                </div>
                <div className="tour-destination-caption">
                  {destination.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
