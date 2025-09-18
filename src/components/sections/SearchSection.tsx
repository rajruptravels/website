import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Calendar, Users, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

// ✅ Import destinations data from JSON
import destinationsData from "@/data/destinations.json";

export const SearchSection: React.FC = () => {
  const navigate = useNavigate();

  const [destination, setDestination] = useState<string | null>(null);
  const [date, setDate] = useState<string | null>(null);
  const [travelers, setTravelers] = useState<string | null>(null);

  const handleSearch = () => {
    if (!destination) return;
    navigate(`/destination/${destination}`);
  };

  return (
    <section className="relative -mt-20 z-40">
      <div className="container mx-auto px-6">
        <Card className="bg-background/95 backdrop-blur-lg border-border/50 shadow-travel">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">Find Your Perfect Trip</h2>
              <p className="text-muted-foreground">
                Discover amazing destinations worldwide
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-4">
              {/* Destination */}
              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  Destination
                </label>
                <Select onValueChange={(val) => setDestination(val)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Destination" />
                  </SelectTrigger>
                  <SelectContent>
                    {destinationsData.destinations.map((dest) => (
                      <SelectItem key={dest.id} value={dest.id}>
                        {dest.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Travel Date */}
              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  Travel Date
                </label>
                <Input type="date" onChange={(e) => setDate(e.target.value)} />
              </div>

              {/* Travelers */}
              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-2">
                  <Users className="w-4 h-4 text-primary" />
                  Travelers
                </label>
                <Select onValueChange={(val) => setTravelers(val)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Number of Travelers" />
                  </SelectTrigger>
                  <SelectContent>
                    {[...Array(10)].map((_, i) => (
                      <SelectItem key={i + 1} value={(i + 1).toString()}>
                        {i + 1} Traveler{i + 1 > 1 ? "s" : ""}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Search Button */}
              <div className="space-y-2">
                <label className="text-sm font-medium opacity-0">Search</label>
                <Button
                  onClick={handleSearch}
                  disabled={!destination}
                  className="w-full bg-gradient-adventure hover:opacity-90 transition-all transform hover:scale-105"
                >
                  <Search className="w-4 h-4 mr-2" />
                  Search Trips
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
