import { useNavigate } from 'react-router-dom'
import { destinations } from '@/data/destinations'
import DestinationCard from '@/components/DestinationCard'

export default function Tour() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-text mb-4">
            All Destinations
          </h1>
          <p className="text-xl text-text-70 max-w-2xl mx-auto">
            Explore all the amazing destinations New Zealand has to offer. From
            stunning mountains to pristine lakes, your adventure awaits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination) => (
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
    </div>
  )
}
