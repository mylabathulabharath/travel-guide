import { useNavigate } from 'react-router-dom'
import { destinations } from '@/data/destinations'

export default function Tour() {
  const navigate = useNavigate()
  const featuredDestinations = destinations.slice(0, 4)

  return (
    <div className="min-h-screen">
      {/* Main Content Area */}
      <section className="tour-main-section">
        <div className="tour-container">
          {/* Main Title */}
          <h1 className="home-main-title">
            Adventures In New Zealand
          </h1>

          {/* 2x2 Grid of Destinations */}
          <div className="home-destinations-grid">
            {featuredDestinations.map((destination) => (
              <div 
                key={destination.id} 
                className="home-destination-item"
                onClick={() => navigate(`/destination/${destination.id}`)}
              >
                <div className="home-destination-image">
                  <img
                    src={destination.image}
                    alt={destination.name}
                  />
                </div>
                <div className="home-destination-caption">
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
