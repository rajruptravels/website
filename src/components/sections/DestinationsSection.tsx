import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Clock, ArrowRight } from 'lucide-react';
import destinationsData from '@/data/destinations';

const destinations = destinationsData;

export const DestinationsSection: React.FC = () => {
  return (
    <section id="destinations" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">Featured Destinations</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our handpicked destinations and start planning your next adventure
          </p>
        </div>

        {/* ✅ Show only first 3 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.slice(0, 3).map((destination, index) => (
            <Card
              key={destination.id}
              className={`group overflow-hidden hover:shadow-travel transition-all duration-500 transform hover:-translate-y-2 animate-slide-up ${
                destination.featured ? 'lg:scale-105 border-primary/50' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {destination.featured && (
                  <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                    Featured
                  </Badge>
                )}

                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-1">{destination.name}</h3>
                  <div className="flex items-center gap-2 text-sm">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span>{destination.rating}</span>
                    <span>({destination.reviews} reviews)</span>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {destination.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {destination.highlights.map((highlight) => (
                    <Badge key={highlight} variant="secondary" className="text-xs">
                      {highlight}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="text-2xl font-bold text-primary">
                      {destination.price}
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      {destination.duration} Days
                    </div>
                  </div>
                </div>

                <Link to={`/destination/${destination.id}`}>
                  <Button className="w-full group bg-gradient-adventure hover:opacity-90 transition-all">
                    Explore Package
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-primary/20 hover:bg-primary/10"
          >
            <Link to="/destinations">View All Destinations</Link>
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};
