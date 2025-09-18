import React from 'react';
import { Button } from '@/components/ui/button';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
export const Footer: React.FC = () => {
  return (
    <footer className="bg-background border-t border-border/50">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-adventure rounded-lg flex items-center justify-center">
                              <img
                src="/src/assets/logo_square.svg"
                alt="Logo"
                className="w-full h-full object-contain"
              />
              </div>
            <img
              className="text-xl font-bold bg-gradient-adventure bg-clip-text text-transparent"
              src="/src/assets/logo.png"
              alt="Logo Text"
            />
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Creating unforgettable travel experiences for over 15 years. Your trusted partner for 
              adventure, comfort, and memories that last a lifetime.
            </p>
            <div className="flex space-x-4">
              <Button variant="outline" size="sm" className="w-10 h-10 p-0">
                <a href="https://www.facebook.com/rajrup.travels.1" target="_blank" rel="noopener noreferrer">
                  <Facebook className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="outline" size="sm" className="w-10 h-10 p-0">
                <a href="https://www.instagram.com/rajruptravels" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="outline" size="sm" className="w-10 h-10 p-0">
                <Linkedin className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <div className="space-y-3">
              <Link to="/" className="block text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/about-us" className="block text-muted-foreground hover:text-primary transition-colors">
                About Us
              </Link>
              <Link to="/services" className="block text-muted-foreground hover:text-primary transition-colors">
                Services
              </Link>
              <Link to="/destinations" className="block text-muted-foreground hover:text-primary transition-colors">
                Destinations
              </Link>
              <Link to="/gallery" className="block text-muted-foreground hover:text-primary transition-colors">
                Gallery
              </Link>
              <Link to="/contact" className="block text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Popular Destinations</h4>
            <div className="space-y-3">
              <Link to="/destination/bangkok" className="block text-muted-foreground hover:text-primary transition-colors">
                Bangkok
              </Link>
              <Link to="/destination/srilanka" className="block text-muted-foreground hover:text-primary transition-colors">
                Sri Lanka
              </Link>
              <Link to="/destination/darjeeling" className="block text-muted-foreground hover:text-primary transition-colors">
                Darjeeling
              </Link>
              <Link to="/destination/sikkim" className="block text-muted-foreground hover:text-primary transition-colors">
                Sikkim
              </Link>
              <Link to="/destination/rajasthan" className="block text-muted-foreground hover:text-primary transition-colors">
                Rajasthan
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm text-muted-foreground">+91 82504 28016</p>
                  <p className="text-sm text-muted-foreground">+91 76798 44850</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm text-muted-foreground">enquiry@rajruptravels.co.in</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm text-muted-foreground">
                    Rajrup Travels Office<br />
                    Station Road, Malbazar<br />
                    West Bengal, India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/50 py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>&copy; 2025 Rajrup Travels. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Cancellation Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};