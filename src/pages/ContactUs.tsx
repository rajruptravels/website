import React from "react";
import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-6 text-center">
          <span className="px-4 py-1 text-sm rounded-full bg-accent text-accent-foreground mb-6 inline-block">
            Contact Us
          </span>
          <h1 className="text-5xl font-bold mb-6">We’d Love to Hear From You</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Whether you’re planning your next trip or have a query, our travel experts are just a message away.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-adventure rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <a href="tel:+918250428016" className="text-muted-foreground">+91 82504 28016</a><br />
                    <a href="tel:+917679844850" className="text-muted-foreground">+91 76798 44850</a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-adventure rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <a href="mailto:enquiry@rajruptravels.co.in" className="text-muted-foreground">enquiry@rajruptravels.co.in</a><br />
                    <a href="mailto:rajruptravelsmal@gmail.com" className="text-muted-foreground">rajruptravelsmal@gmail.com</a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-adventure rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Office</h4>
                    <p className="text-muted-foreground">
                      Banka Villa, South Colony<br />
                      Vivekananda Road, Malbazar<br />
                      West Bengal, India
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-adventure rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Business Hours</h4>
                    <p className="text-muted-foreground">
                      Mon - Sat: 9:00 AM - 8:00 PM <br />
                      Sun: 10:00 AM - 6:00 PM
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>

                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Name *</label>
                        <Input placeholder="Your full name" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Email *</label>
                        <Input type="email" placeholder="your@email.com" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Phone</label>
                        <Input placeholder="+91 XXXXX XXXXX" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Travel Date</label>
                        <Input type="date" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Destination of Interest</label>
                      <Input placeholder="e.g., Himachal, Andaman, Darjeeling" />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Message *</label>
                      <Textarea
                        rows={5}
                        placeholder="Tell us about your travel preferences, group size, budget, and any special requirements..."
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-adventure hover:opacity-90 transition-all transform hover:scale-105"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Find Us on the Map</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Visit our office or get directions instantly using Google Maps.
          </p>

          <div className="w-full h-[450px] rounded-xl overflow-hidden shadow-lg">
            {/* Replace src with your Google Maps embed link */}
            <iframe
              title="Rajrup Travels Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.2416600907513!2d88.7461515!3d26.8640622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e40bc6492e4675%3A0x94d69db16fc7f464!2sRAJRUP%20TRAVELS!5e0!3m2!1sen!2sin!4v1756463410458!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Quick answers to some of the most common travel queries
          </p>

          <div className="grid md:grid-cols-2 gap-8 text-left">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-2">Do you provide custom packages?</h3>
              <p className="text-muted-foreground">
                Yes! We tailor packages based on your budget, preferences, and travel dates.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-2">Can I book last-minute trips?</h3>
              <p className="text-muted-foreground">
                Depending on availability, we do accommodate last-minute travel bookings.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-2">Do you handle international trips?</h3>
              <p className="text-muted-foreground">
                Absolutely. We cover both domestic and international destinations worldwide.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-2">What payment methods do you accept?</h3>
              <p className="text-muted-foreground">
                We accept credit/debit cards, UPI, net banking, and direct bank transfers.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Start Your Journey with Us</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get in touch today and let’s plan your dream vacation together.
          </p>
          <Button className="px-8 py-4 bg-primary text-white rounded-xl font-semibold shadow hover:bg-primary/90 transition" onClick={() => window.location.href = '/destinations'}>
            Plan My Trip
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
