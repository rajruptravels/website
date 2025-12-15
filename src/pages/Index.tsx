import React from 'react';
import { Navigation } from '@/components/ui/navigation';
import { HeroSection } from '@/components/sections/HeroSection';
import { SearchSection } from '@/components/sections/SearchSection';
import { DestinationsSection } from '@/components/sections/DestinationsSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { StatsSection } from '@/components/sections/StatsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/sections/Footer';

const Index = () => {
  return (
    {console.log("Hello")}
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <SearchSection />
      <DestinationsSection />
      <ServicesSection />
      <StatsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
