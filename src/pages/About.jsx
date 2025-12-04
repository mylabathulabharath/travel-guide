import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Users, Award, Globe, Heart } from 'lucide-react'

export default function About() {
  const features = [
    {
      icon: <Globe className="h-8 w-8 text-accent" />,
      title: 'Expert Travel Guides',
      description: 'Our team of local experts knows New Zealand inside and out, ensuring you experience the best of what this beautiful country has to offer.',
    },
    {
      icon: <Award className="h-8 w-8 text-accent" />,
      title: 'Premium Experiences',
      description: 'We curate only the finest accommodations, activities, and destinations to make your journey truly unforgettable.',
    },
    {
      icon: <Users className="h-8 w-8 text-accent" />,
      title: 'Personalized Service',
      description: 'Every trip is tailored to your preferences, ensuring a unique and personalized adventure that matches your dreams.',
    },
    {
      icon: <Heart className="h-8 w-8 text-accent" />,
      title: 'Passion for Travel',
      description: 'We are passionate about sharing the beauty of New Zealand and creating memories that will last a lifetime.',
    },
  ]

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-text mb-4">
            About Travel.NZ
          </h1>
          <p className="text-xl text-text-70 max-w-3xl mx-auto">
            Your trusted partner in discovering the wonders of New Zealand
          </p>
        </div>

        {/* Mission Section */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-3xl">Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-text-80 leading-relaxed">
              At Travel.NZ, our mission is to provide exceptional travel experiences
              that showcase the natural beauty, rich culture, and adventurous spirit
              of New Zealand. We believe that travel should be transformative,
              inspiring, and accessible to everyone. Our commitment is to create
              journeys that not only exceed expectations but also foster a deep
              appreciation for this incredible country.
            </p>
          </CardContent>
        </Card>

        {/* Who We Are */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-3xl">Who We Are</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-text-80 leading-relaxed mb-4">
              Travel.NZ is a team of passionate travel enthusiasts, local experts,
              and adventure seekers who have made it our life's work to share the
              magic of New Zealand with the world. Founded with a vision to make
              travel planning seamless and experiences unforgettable, we combine
              local knowledge with global expertise.
            </p>
            <p className="text-lg text-text-80 leading-relaxed">
              Our team includes certified guides, travel consultants, and destination
              specialists who are dedicated to ensuring every aspect of your journey
              is perfect. We work closely with local partners, accommodations, and
              activity providers to offer authentic and high-quality experiences.
            </p>
          </CardContent>
        </Card>

        {/* Why Choose Us */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-text text-center mb-8">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="mb-4">{feature.icon}</div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Values */}
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl">Our Values</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg text-text mb-2">
                  Sustainability
                </h3>
                <p className="text-text-80">
                  We are committed to sustainable tourism practices that protect
                  New Zealand's natural environment for future generations.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-text mb-2">
                  Authenticity
                </h3>
                <p className="text-text-80">
                  We believe in authentic experiences that connect you with the
                  real New Zealand, its people, and its culture.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-text mb-2">
                  Excellence
                </h3>
                <p className="text-text-80">
                  We strive for excellence in every detail, from planning to
                  execution, ensuring your journey is flawless.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
