import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Navigation } from '@/components/ui/navigation';
import { Footer } from '@/components/sections/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  ArrowLeft,
  Star,
  Clock,
  MapPin,
  Check,
  X,
  Calendar,
  Share2,
  Heart,
  Info
} from 'lucide-react';
import destinationsData from '@/data/destinations';
import { usePageMeta } from '@/hooks/usePageMeta';

const DestinationDetail = () => {
  const { id } = useParams<{ id: string }>();
  const destination = destinationsData.find(dest => dest.id === id);
  const [activeTab, setActiveTab] = useState("overview");

  usePageMeta({
    title: destination ? `RajRup Travels | ${destination.name}` : 'Destination Not Found',
    description: destination?.description || '',
    keywords: destination?.highlights.join(", ") || '',
    ogTitle: destination ? `RajRup Travels | ${destination.name}` : '',
    ogDescription: destination?.description || '',
    ogImage: destination?.image || '',
  });

  if (!destination) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navigation />
        <div className="flex-1 flex flex-col items-center justify-center container mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4 text-foreground">Destination Not Found</h1>
          <p className="text-muted-foreground mb-8">The destination you are looking for does not exist or has been removed.</p>
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
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/10">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[60vh] lg:h-[70vh] w-full overflow-hidden group">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-700 z-10" />
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />

        <div className="absolute bottom-0 left-0 right-0 z-20 pb-12 lg:pb-20">
          <div className="container mx-auto px-6">
            <Link to="/destinations" className="inline-flex items-center text-white/90 hover:text-white mb-6 transition-colors bg-black/30 px-4 py-2 rounded-full backdrop-blur-sm hover:bg-black/50">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Destinations
            </Link>

            <div className="max-w-4xl space-y-4 animate-in slide-in-from-bottom-5 fade-in duration-700">
              <div className="flex flex-wrap gap-3">
                {destination.featured && (
                  <Badge className="bg-amber-500 hover:bg-amber-600 text-white border-none px-3 py-1">
                    Featured Choice
                  </Badge>
                )}
                <Badge variant="outline" className="text-white border-white/40 bg-black/20 backdrop-blur-sm">
                  {destination.type === 'international' ? 'International' : 'National'}
                </Badge>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold text-white tracking-tight drop-shadow-lg">
                {destination.name}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-white/95 text-lg">
                <div className="flex items-center gap-2 bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full">
                  <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                  <span className="font-semibold">{destination.rating}</span>
                  <span className="opacity-80">({destination.reviews} reviews)</span>
                </div>

                <div className="flex items-center gap-2 bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full">
                  <Clock className="w-5 h-5" />
                  <span>{destination.duration} Nights / {destination.duration + 1} Days</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12">

            {/* Left Column (Content) */}
            <div className="lg:col-span-8 space-y-10">

              {/* Description & Gallery */}
              <div className="space-y-8">
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <h2 className="text-3xl font-bold text-foreground mb-4">About this Trip</h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {destination.description}
                  </p>
                </div>

                {destination.gallery && destination.gallery.length > 0 && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {destination.gallery.map((img, idx) => (
                      <div key={idx} className={`relative rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow aspect-square ${idx === 0 ? 'col-span-2 row-span-2' : ''}`}>
                        <img
                          src={img}
                          alt={`${destination.name} gallery ${idx + 1}`}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Tabs Section */}
              <div className="space-y-6" id="details-section">
                <Tabs defaultValue="itinerary" className="w-full" onValueChange={setActiveTab}>
                  <div className="sticky top-[80px] z-30 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-4 -mx-6 px-6 border-b mb-6">
                    <TabsList className="w-full justify-start h-auto p-1 bg-muted/50 rounded-xl">
                      <TabsTrigger value="itinerary" className="rounded-lg px-6 py-2.5 data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm text-base">Itinerary</TabsTrigger>
                      <TabsTrigger value="highlights" className="rounded-lg px-6 py-2.5 data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm text-base">Highlights</TabsTrigger>
                      <TabsTrigger value="policies" className="rounded-lg px-6 py-2.5 data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm text-base">Policies</TabsTrigger>
                    </TabsList>
                  </div>

                  <TabsContent value="itinerary" className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-2xl font-bold">Day by Day Itinerary</h3>
                      <Badge variant="outline" className="px-3 py-1">
                        {destination.itinerary.length} Days Plan
                      </Badge>
                    </div>
                    <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-muted-foreground/20 before:to-transparent">
                      {destination.itinerary.map((day, index) => (
                        <div key={day.day} className="relative pl-12 group">
                          <div className="absolute left-0 top-1 w-10 h-10 rounded-full border-4 border-background bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm shadow-md z-10 group-hover:scale-110 transition-transform">
                            {day.day}
                          </div>
                          <Card className="border-border/40 shadow-sm hover:shadow-md transition-all group-hover:border-primary/20 bg-card/50 backdrop-blur-sm">
                            <CardContent className="p-6">
                              <h4 className="text-xl font-bold mb-2 text-foreground">{day.title}</h4>
                              <p className="text-muted-foreground leading-relaxed">{day.description}</p>
                            </CardContent>
                          </Card>
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="highlights" className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <h3 className="text-2xl font-bold mb-6">Trip Highlights</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {destination.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-accent/30 border border-accent/50 hover:bg-accent/50 transition-colors">
                          <div className="bg-primary/10 p-2 rounded-full text-primary shrink-0">
                            <MapPin className="w-5 h-5" />
                          </div>
                          <span className="font-medium text-foreground pt-1.5">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="policies" className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="grid md:grid-cols-2 gap-6">
                      <Card className="border-green-100 bg-green-50/30 dark:bg-green-900/10 dark:border-green-800">
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-400">
                            <Check className="w-5 h-5" />
                            Inclusions
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-3">
                            {destination.inclusions.map((item, index) => (
                              <li key={index} className="flex items-start gap-2.5 text-sm md:text-base">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
                                <span className="text-foreground/80">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>

                      <Card className="border-red-100 bg-red-50/30 dark:bg-red-900/10 dark:border-red-800">
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2 text-red-700 dark:text-red-400">
                            <X className="w-5 h-5" />
                            Exclusions
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-3">
                            {destination.exclusions.map((item, index) => (
                              <li key={index} className="flex items-start gap-2.5 text-sm md:text-base">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                                <span className="text-foreground/80">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>

            {/* Right Column (Sidebar) */}
            <div className="lg:col-span-4">
              <div className="sticky top-24 space-y-6">

                {/* Booking Card */}
                <Card className="overflow-hidden border-border/50 shadow-xl shadow-primary/5">
                  <div className="bg-primary/5 p-6 border-b border-border/50">
                    <div className="flex items-baseline justify-between mb-1">
                      <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Starting From</p>
                      {destination.featured && <Badge variant="secondary" className="text-xs">Best Value</Badge>}
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold text-primary">{destination.price}</span>
                      <span className="text-muted-foreground">/ person</span>
                    </div>
                  </div>

                  <CardContent className="p-6 space-y-6">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex flex-col gap-1 p-3 rounded-lg bg-accent/30 text-center">
                        <span className="text-muted-foreground">Duration</span>
                        <span className="font-semibold">{destination.duration} Nights</span>
                      </div>
                      <div className="flex flex-col gap-1 p-3 rounded-lg bg-accent/30 text-center">
                        <span className="text-muted-foreground">Reviews</span>
                        <span className="font-semibold flex items-center justify-center gap-1">
                          {destination.rating} <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                        </span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Button className="w-full text-lg h-12 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all hover:scale-[1.02]">
                        Book Now
                      </Button>
                      <div className="grid grid-cols-2 gap-3">
                        <Button variant="outline" className="w-full">
                          Enquire
                        </Button>
                        <Button variant="ghost" className="w-full">
                          <Share2 className="w-4 h-4 mr-2" />
                          Share
                        </Button>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-border/40 text-xs text-muted-foreground text-center">
                      <p className="flex items-center justify-center gap-1.5 mb-2">
                        <Info className="w-3.5 h-3.5" />
                        No hidden charges • Instant Confirmation
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Additional Info */}
                <Card className="border-border/40 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4 flex items-center gap-2">
                      Why Book With Us?
                    </h3>
                    <ul className="space-y-3 text-sm text-foreground/80">
                      <li className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                          <Check className="w-4 h-4" />
                        </div>
                        <span>Verified Hotels & Homestays</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                          <Check className="w-4 h-4" />
                        </div>
                        <span>Best Price Guarantee</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
                          <Check className="w-4 h-4" />
                        </div>
                        <span>24/7 On-Trip Support</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DestinationDetail;
