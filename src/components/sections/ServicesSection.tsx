import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Plane, Hotel, Car, Mountain, Users, Shield } from 'lucide-react';

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

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our comprehensive range of travel services designed to make your journey seamless and memorable
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <a href={`https://api.whatsapp.com/send/?phone=+917679844850&text=I Want More Information About Your ${service.title}`} key={service.title}>
              <Card 
                key={service.title}
                className="group hover:shadow-travel transition-all duration-500 transform hover:-translate-y-2 border-border/50 bg-card/50 backdrop-blur-sm animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-adventure rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse-glow transition-all">
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
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
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
  );
};