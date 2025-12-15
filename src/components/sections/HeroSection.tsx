import React from 'react';
import { Button } from '@/components/ui/button';
import { FloatingGlobe } from '@/components/3d/FloatingGlobe';
import { FloatingElements } from '@/components/3d/FloatingElements';
import { Play, ArrowRight, Link } from 'lucide-react';
import HeroImage from '/public/destinations/sikkim.jpg';
export const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src={HeroImage} 
          alt="Adventure Mountains" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>


      {/* Content */}
      <div className="relative z-30 container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-left space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Discover Your Next
              <span className="bg-gradient-adventure bg-clip-text text-transparent block">
                Adventure
              </span>
            </h1>
            <p className="text-xl text-foreground/80 max-w-2xl leading-relaxed">
              Create unforgettable memories with our expertly crafted travel experiences. 
              From the majestic Himalayas to pristine beaches, your dream journey awaits.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-gradient-adventure hover:opacity-90 transition-all transform hover:scale-105 shadow-travel"
            >
              <a href="/destinations">Start Your Journey</a>
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            {/*<Button 
              variant="outline" 
              size="lg"
              className="border-foreground/20 hover:bg-foreground/10 backdrop-blur-sm"
            >
              <Play className="mr-2 w-5 h-5" />
              Watch Our Story
            </Button>*/}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-foreground/10">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">10K+</div>
              <div className="text-sm text-muted-foreground">Happy Travelers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">12+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">4.8★</div>
              <div className="text-sm text-muted-foreground">Customer Rating</div>
            </div>
          </div>
        </div>

        {/* Mobile globe */}
        <div className="lg:hidden h-64">
          <FloatingGlobe />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};