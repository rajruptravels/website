import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import {Link} from "react-router-dom";

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-adventure rounded-lg flex items-center justify-center">
              <img
                src="/logo_square.svg"
                alt="Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <img
              className="text-xl font-bold bg-gradient-adventure bg-clip-text text-transparent"
              src="/logo.png"
              alt="Logo Text"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">Home</Link>
            <Link to="/about-us" className="text-foreground hover:text-primary transition-colors">About Us</Link>
            <Link to="/services" className="text-foreground hover:text-primary transition-colors">Services</Link>
            <Link to="/destinations" className="text-foreground hover:text-primary transition-colors">Destinations</Link>
            <Link to="/gallery" className="text-foreground hover:text-primary transition-colors">Gallery</Link>
            <Link to="/contact" className="text-foreground hover:text-primary transition-colors">Contact</Link>
          </div>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button size="sm" className="bg-gradient-adventure hover:opacity-90 transition-opacity">
              <a href="tel:+918250428016">Call Now</a>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-t border-border/50">
          <div className="flex flex-col space-y-4 p-6">
            <a href="/" className="text-foreground hover:text-primary transition-colors">Home</a>
            <a href="/about-us" className="text-foreground hover:text-primary transition-colors">About Us</a>
            <a href="/services" className="text-foreground hover:text-primary transition-colors">Services</a>
            <a href="/destinations" className="text-foreground hover:text-primary transition-colors">Destinations</a>
            <a href="/gallery" className="text-foreground hover:text-primary transition-colors">Gallery</a>
            <a href="/contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
            <Button size="sm" className="bg-gradient-adventure hover:opacity-90 transition-opacity">
              <a href="tel:+918250428016">Call Now</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};
