import React from 'react';
import { Link } from 'react-router-dom';
import { Navigation } from '@/components/ui/navigation';
import { Footer } from '@/components/sections/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Plane, Hotel, Car, Mountain, Users, Shield, CheckCircle } from 'lucide-react';

const services = [
  {
    icon: Plane,
    title: 'Flight & Train Bookings',
    description: 'Hassle-free reservations at best prices with instant confirmations and 24/7 support.',
    features: ['Best Price Guarantee', 'Instant Confirmation', '24/7 Support'],
  },
  {
    icon: Hotel,
    title: 'Hotel & Resort Stays',
    description: 'Comfortable accommodations from budget to luxury including exclusive resort partnerships.',
    features: ['Luxury Resorts', 'Budget Options', 'Poddar Retreat'],
  },
  {
    icon: Car,
    title: 'Local Transport',
    description: 'Seamless travel logistics and car rentals with experienced local drivers.',
    features: ['Car Rentals', 'Local Drivers', 'Airport Transfers'],
  },
  {
    icon: Mountain,
    title: 'Adventure Tours',
    description: 'Exciting trekking and adventure packages designed for thrill seekers and nature lovers.',
    features: ['Trekking', 'Rock Climbing', 'Water Sports'],
  },
  {
    icon: Users,
    title: 'Group Travel',
    description: 'Specialized packages for corporate and group tours with attractive group discounts.',
    features: ['Corporate Tours', 'Group Discounts', 'Custom Itineraries'],
  },
  {
    icon: Shield,
    title: '100% Secure Booking',
    description: 'Safe and secure payment gateway with comprehensive travel insurance options.',
    features: ['Secure Payments', 'Travel Insurance', 'Money Back Guarantee'],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-6 text-center">
          <Badge className="mb-6 bg-accent text-accent-foreground">Our Services</Badge>
          <h1 className="text-5xl font-bold mb-6">Seamless Travel, End-to-End</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From booking flights and hotels to adventure tours and secure payments — Rajrup Travels has 
            everything you need for a perfect journey.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                 <a href={`https://api.whatsapp.com/send/?phone=+917679844850&text=I Want More Information About Your ${service.title}`} key={service.title}>
                   <Card 
                     key={service.title}
                     className="group hover:shadow-lg transition-all duration-500 transform hover:-translate-y-2 border-border/50 bg-card/50 backdrop-blur-sm"
                   >
                     <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-tr from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="space-y-2">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center justify-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Why Choose Our Services?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            We go the extra mile to ensure your travel experience is smooth, affordable, and memorable.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-background rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3">One-Stop Solution</h3>
              <p className="text-muted-foreground">Flights, hotels, transport, and tours — all under one roof.</p>
            </div>
            <div className="p-6 bg-background rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Affordable Pricing</h3>
              <p className="text-muted-foreground">Best deals with guaranteed value for your money.</p>
            </div>
            <div className="p-6 bg-background rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Trusted by Thousands</h3>
              <p className="text-muted-foreground">50,000+ happy travelers across 200+ destinations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">How It Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            Simple steps to book your dream journey with us
          </p>

          <div className="grid md:grid-cols-4 gap-8">
            {['Choose Destination', 'Select Package', 'Confirm Booking', 'Enjoy Your Trip'].map((step, i) => (
              <div key={step} className="text-center">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  {i + 1}
                </div>
                <h3 className="text-lg font-semibold">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Plan Your Next Journey Today</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let Rajrup Travels take care of the details so you can focus on making memories.
          </p>
          <button className="px-8 py-4 bg-primary text-white rounded-xl font-semibold shadow hover:bg-primary/90 transition">
           <Link to="/destinations"className="flex items-center justify-center">
             Start Planning
             </Link>
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
