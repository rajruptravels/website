import React from 'react';
import { Link } from 'react-router-dom';
import { Navigation } from '@/components/ui/navigation';
import { Footer } from '@/components/sections/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Clock, ArrowRight } from 'lucide-react';
import destinationsData from '@/data/destinations.json';

const destinations = destinationsData.destinations;

const Destinations: React.FC = () => {
  const nationalDestinations = destinations.filter((d) => d.type === "national");
  const internationalDestinations = destinations.filter((d) => d.type === "international");
  const wbDestinations = destinations.filter((d) => d.type === "west-bengal");

  const renderGrid = (list: typeof destinations) => (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {list.map((destination, index) => (
        <Card
          key={destination.id}
          className={`group overflow-hidden hover:shadow-lg transition-all duration-500 transform hover:-translate-y-2 animate-slide-up ${
            destination.featured ? 'lg:scale-105 border-primary/50' : ''
          }`}
          style={{ animationDelay: `${index * 0.15}s` }}
        >
          {/* Image */}
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

          {/* Content */}
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
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-6 text-center">
          <Badge className="mb-6 bg-accent text-accent-foreground">Our Destinations</Badge>
          <h1 className="text-5xl font-bold mb-6">Explore The World With Us</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover handpicked destinations across the globe, curated by our travel experts for
            unforgettable journeys and unique cultural experiences.
          </p>
        </div>
      </section>

      {/* West Bengal Destinations */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">West Bengal Destinations</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore the beauty and heritage of West Bengal
            </p>
          </div>
          {renderGrid(wbDestinations)}
        </div>
      </section>

      {/* National Destinations */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">National Destinations</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore India’s most popular travel experiences
            </p>
          </div>
          {renderGrid(nationalDestinations)}
        </div>
      </section>

      {/* International Destinations */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">International Destinations</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover breathtaking journeys across the world
            </p>
          </div>
          {renderGrid(internationalDestinations)}
        </div>
      </section>



      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Start Your Adventure Today</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Pick your dream destination and let us take care of everything else.
          </p>
          <Button className="px-8 py-4 bg-primary text-white rounded-xl font-semibold shadow hover:bg-primary/90 transition">
            Plan Your Trip
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Destinations;
