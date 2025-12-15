import React from 'react';
import { Navigation } from '@/components/ui/navigation';
import { Footer } from '@/components/sections/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Award, MapPin, Heart, Star, Shield, Globe, Clock } from 'lucide-react';
import Ssp from "../../public/about-us/ssp.png"
const AboutUs = () => {
  const stats = [
    { icon: Users, label: 'Happy Travelers', value: '5,000+' },
    { icon: MapPin, label: 'Destinations', value: '200+' },
    { icon: Award, label: 'Years Experience', value: '12+' },
    { icon: Star, label: 'Customer Rating', value: '4.7' },
  ];

  const values = [
    {
      icon: Heart,
      title: 'Passion for Travel',
      description: 'We live and breathe travel, bringing you authentic experiences that create lasting memories.'
    },
    {
      icon: Shield,
      title: 'Trust & Safety',
      description: 'Your safety and satisfaction are our top priorities. We ensure secure and reliable travel experiences.'
    },
    {
      icon: Globe,
      title: 'Global Expertise',
      description: 'With extensive knowledge of destinations worldwide, we craft journeys that showcase the best of each location.'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Our dedicated team is available round-the-clock to assist you throughout your travel journey.'
    },
  ];

  const team = [
    {
      name: 'Pinky Saha Poddar',
      role: 'Founder',
      description: 'Pinky is the heart and soul of Rajrup Travels, ensuring every client feels like family.',
      image: ''
    },
    {
      name: 'Ratan Saha Poddar',
      role: 'Travel Advisor',
      description: 'Ratan is a seasoned travel advisor with a knack for crafting personalized itineraries.',
      image: ''
    },
    {
      name: 'Swarnadeep Saha Poddar',
      role: 'Operations Head',
      description: 'With a background in IT and travel, Swarnadeep integrates technology to enhance our service delivery.',
      image: Ssp
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-6 text-center">
          <Badge className="mb-6 bg-accent text-accent-foreground">
            About Rajrup Travels
          </Badge>
          <h1 className="text-5xl font-bold mb-6">Your Journey, Our Passion</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            For over 12 years, Rajrup Travels has been crafting extraordinary travel experiences,
            turning dreams into reality and creating memories that last a lifetime. We believe that
            travel is not just about destinations, but about the transformative power of exploration.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <Card key={stat.label} className="text-center border-primary/20">
                <CardContent className="p-6">
                  <stat.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <p className="text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  RajRup Travels began with a heartfelt vision: to bring the joy of travel to everyone by making
                  journeys seamless, memorable, and affordable. What started as a small initiative in Malbazar,
                  West Bengal, has now grown into a trusted name for travelers across India.
                </p>
                <p>
                  Founded by the Saha Poddar family, RajRup Travels was built on a passion for exploration and a
                  commitment to hospitality. With deep roots in the Dooars and North Bengal region, we set out
                  to showcase the natural beauty, culture, and heritage of India while offering comfort and care
                  to every traveler.
                </p>
                <p>
                  Over the years, we've proudly served thousands of travelers, curating trips to stunning
                  destinations like Darjeeling, Sikkim, Dooars, Himachal, Andaman, and beyond. From tranquil
                  hill stations to thrilling wildlife safaris, from serene beaches to vibrant cultural tours,
                  RajRup Travels continues to craft unforgettable journeys filled with experiences that last a
                  lifetime.
                </p>

              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop"
                alt="Travel landscape"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide us in creating exceptional travel experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <Card key={value.title} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <value.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The passionate professionals who make your travel dreams come true
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <Card key={member.name} className="text-center overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="p-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold mb-4 text-primary">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide exceptional travel experiences that inspire, educate, and connect people
                  with diverse cultures and destinations. We strive to make every journey safe,
                  comfortable, and memorable while promoting responsible and sustainable tourism.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold mb-4 text-primary">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be India's most trusted and innovative travel company, recognized for our
                  commitment to excellence, customer satisfaction, and sustainable tourism practices.
                  We envision a world where travel brings people together and creates lasting positive impact.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Rajrup Travels?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Here's what sets us apart in the travel industry
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Planning</h3>
              <p className="text-muted-foreground">Meticulously crafted itineraries by travel experts with local knowledge.</p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Trusted Service</h3>
              <p className="text-muted-foreground">15+ years of reliable service with thousands of satisfied customers.</p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Personalized Care</h3>
              <p className="text-muted-foreground">Every trip is tailored to your preferences and requirements.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;