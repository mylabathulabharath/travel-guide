import { useNavigate } from 'react-router-dom'
import { destinations } from '@/data/destinations'
import DestinationCard from '@/components/DestinationCard'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function Home() {
  const navigate = useNavigate()
  const featuredDestinations = destinations.slice(0, 4)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <h1 className="hero-title md:text-6xl">
            Adventures In New Zealand
          </h1>
          <p className="hero-subtitle md:text-2xl">
            Discover breathtaking landscapes, vibrant cities, and unforgettable experiences
            in the land of the long white cloud.
          </p>
          <Button
            size="lg"
            onClick={() => navigate('/tour')}
            className="flex items-center"
          >
            Explore Destinations
            <ArrowRight className="icon-spacing h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="section section-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-text text-center mb-12">
            Featured Destinations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredDestinations.map((destination) => (
              <DestinationCard
                key={destination.id}
                image={destination.image}
                title={destination.name}
                shortDescription={destination.shortDescription}
                onClick={() => navigate(`/destination/${destination.id}`)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section section-gradient">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-text mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-text-80 mb-8">
            Contact us today to plan your perfect New Zealand adventure.
          </p>
          <Button
            size="lg"
            variant="outline"
            onClick={() => navigate('/contact')}
          >
            Get In Touch
          </Button>
        </div>
      </section>
    </div>
  )
}
