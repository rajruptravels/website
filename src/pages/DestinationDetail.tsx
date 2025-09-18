import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Navigation } from '@/components/ui/navigation';
import { Footer } from '@/components/sections/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Star, Clock, MapPin, Check, X } from 'lucide-react';
import destinationsData from '@/data/destinations.json';

const DestinationDetail = () => {
  const { id } = useParams<{ id: string }>();
  const destination = destinationsData.destinations.find(dest => dest.id === id);

  if (!destination) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Destination Not Found</h1>
          <Link to="/">
            <Button variant="outline">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Home
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <img 
          src={destination.image} 
          alt={destination.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-6 pb-16">
            <Link to="/destinations" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Destinations
            </Link>
            
            <div className="max-w-3xl">
              {destination.featured && (
                <Badge className="mb-4 bg-accent text-accent-foreground">
                  Featured Destination
                </Badge>
              )}
              
              <h1 className="text-5xl font-bold text-white mb-4">{destination.name}</h1>
              <p className="text-xl text-white/90 mb-6">{destination.description}</p>
              
              <div className="flex flex-wrap items-center gap-6 text-white">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">{destination.rating}</span>
                  <span className="text-white/80">({destination.reviews} reviews)</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>{destination.duration}</span>
                </div>
                
                <div className="text-3xl font-bold text-accent">
                  {destination.price}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Highlights */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Package Highlights</h2>
                <div className="flex flex-wrap gap-3">
                  {destination.highlights.map((highlight) => (
                    <Badge key={highlight} variant="secondary" className="text-sm px-4 py-2">
                      {highlight}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Itinerary */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Day-wise Itinerary</h2>
                <div className="space-y-6">
                  {destination.itinerary.map((day) => (
                    <Card key={day.day} className="overflow-hidden">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold text-sm flex-shrink-0">
                            {day.day}
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold mb-2">{day.title}</h3>
                            <p className="text-muted-foreground">{day.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Inclusions & Exclusions */}
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-green-200 dark:border-green-800">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4 text-green-700 dark:text-green-400">
                      Inclusions
                    </h3>
                    <ul className="space-y-2">
                      {destination.inclusions.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-red-200 dark:border-red-800">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4 text-red-700 dark:text-red-400">
                      Exclusions
                    </h3>
                    <ul className="space-y-2">
                      {destination.exclusions.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <X className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Booking Card */}
              <Card className="sticky top-8">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-primary mb-2">
                      {destination.price}
                    </div>
                    <p className="text-muted-foreground">per person</p>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span>Duration:</span>
                      <span className="font-semibold">{destination.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Rating:</span>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold">{destination.rating}</span>
                      </div>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-gradient-adventure hover:opacity-90 transition-all">
                    Book Now
                  </Button>
                  
                  <Button variant="outline" className="w-full mt-3">
                    Get Quote
                  </Button>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Need Help?</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-medium">Call Us</p>
                     <a href="tel:+918250428016">+91 82504 28016</a>
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:info@rajruptravels.com">info@rajruptravels.com</a>
                    </div>
                    <div>
                      <p className="font-medium">Office Hours</p>
                      <p className="text-muted-foreground">Mon-Sat: 9AM-7PM</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DestinationDetail;