import { useParams, useNavigate } from 'react-router-dom'
import { destinations } from '@/data/destinations'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { ArrowLeft, Hotel, Plane, DollarSign } from 'lucide-react'

export default function DestinationDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const destination = destinations.find((d) => d.id === parseInt(id))

  if (!destination) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card>
          <CardHeader>
            <CardTitle>Destination Not Found</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">The destination you're looking for doesn't exist.</p>
            <Button onClick={() => navigate('/tour')}>Back to Tours</Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      {/* Banner Image */}
      <div className="banner">
        <img
          src={destination.image}
          alt={destination.name}
        />
        <div className="banner-overlay" />
        <div className="banner-content">
          <Button
            variant="outline"
            onClick={() => navigate('/tour')}
            className="mb-4 bg-white-90"
          >
            <ArrowLeft className="icon-spacing h-4 w-4" />
            Back to Tours
          </Button>
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            {destination.name}
          </h1>
        </div>
      </div>

      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <Card>
              <CardHeader>
                <CardTitle>About {destination.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-text-80 leading-relaxed">
                  {destination.longDescription}
                </p>
              </CardContent>
            </Card>

            {/* Hotels */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Hotel className="icon-spacing h-6 w-6 text-accent" />
                  Hotels
                </CardTitle>
                <CardDescription>
                  Recommended accommodations for your stay
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {destination.hotels.map((hotel, index) => (
                    <AccordionItem key={index} value={`hotel-${index}`}>
                      <AccordionTrigger>{hotel}</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-text-70">
                          Experience luxury and comfort at this premium accommodation.
                          Contact us for booking details and special rates.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>

            {/* Flight Options */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Plane className="icon-spacing h-6 w-6 text-accent" />
                  Flight Options
                </CardTitle>
                <CardDescription>
                  Available flights to reach your destination
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {destination.flights.map((flight, index) => (
                    <AccordionItem key={index} value={`flight-${index}`}>
                      <AccordionTrigger>{flight}</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-text-70">
                          Flexible booking options available. Contact us for
                          current prices and availability.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <DollarSign className="icon-spacing h-6 w-6 text-accent" />
                  Price Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <p className="text-3xl font-bold text-accent mb-2">
                    ${destination.price}
                  </p>
                  <p className="text-text-70">per person</p>
                </div>

                <div className="space-y-2 text-sm text-text-70">
                  <p>✓ Accommodation included</p>
                  <p>✓ Local guide services</p>
                  <p>✓ Transportation</p>
                  <p>✓ 24/7 support</p>
                </div>

                <Button
                  className="btn-full"
                  size="lg"
                  onClick={() => navigate('/contact')}
                >
                  Book Now
                </Button>

                <p className="text-xs text-text-60 text-center">
                  Prices may vary based on dates and availability. Contact us
                  for a personalized quote.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
