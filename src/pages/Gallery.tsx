import React from "react";
import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/sections/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Camera, Image as ImageIcon, ArrowRight } from "lucide-react";
import destinationsData from '@/data/destinations';

const galleryImages = destinationsData;
// Sample Gallery Data

const Gallery: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-6 text-center">
          <Badge className="mb-6 bg-accent text-accent-foreground">
            Travel Gallery
          </Badge>
          <h1 className="text-5xl font-bold mb-6">
            Capturing Moments Around the World
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore our gallery of breathtaking destinations, unforgettable
            experiences, and the beauty of travel through our lens.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Our Travel Moments</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A collection of memories and adventures from across the globe
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <Card
                key={image.id}
                className="group relative overflow-hidden rounded-xl hover:shadow-lg transition-all animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={image.image}
                  alt={image.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm text-gray-200">{image.name}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Highlight Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Why Our Gallery?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            More than just pictures – these are experiences, emotions, and
            stories captured from real journeys.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-background rounded-xl shadow-sm">
              <Camera className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Authentic Shots</h3>
              <p className="text-muted-foreground">
                Every picture is taken during our real travel experiences.
              </p>
            </div>
            <div className="p-6 bg-background rounded-xl shadow-sm">
              <ImageIcon className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Diverse Locations</h3>
              <p className="text-muted-foreground">
                From beaches to mountains, explore destinations across the globe.
              </p>
            </div>
            <div className="p-6 bg-background rounded-xl shadow-sm">
              <ArrowRight className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Inspire Your Journey</h3>
              <p className="text-muted-foreground">
                Let these moments inspire your next adventure with us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Create Your Own Memories?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join us on your next adventure and let us capture moments that you’ll
            cherish forever.
          </p>
          <Button className="px-8 py-4 bg-primary text-white rounded-xl font-semibold shadow hover:bg-primary/90 transition">
            Start Your Journey
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
