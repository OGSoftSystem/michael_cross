"use client";

import { useState } from "react";
import MaxWidthWrapper from "./max-width-wrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Search, MapPin, Phone, Clock, Car, Star } from "lucide-react";
import { siteConfig } from "@/config";

// Nigeria states with coordinates (approximate positions for the map)
const hospitalLocations = [
  {
    id: 1,
    state: "FCT-Abuja",
    city: "Abuja",
    address: siteConfig.location,
    phone: siteConfig.phone,
    hours: "Mon-Sun: 6:00 AM - 10:00 PM",
    type: "Specialist Hospital",
    coordinates: { x: 50, y: 45 }, // Center
    features: [
      "Gynaecology",
      "Emergency care",
      "Pediatrics",
      "Maternity Care",
      "Infertility management",
      "General Surgery and dermatology",
    ],
    rating: 4.8,
  },
];

const Locations = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredLocation, setHoveredLocation] = useState<number | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<number | null>(null);

  const filteredLocations = hospitalLocations.filter(
    (location) =>
      location.state.toLowerCase().includes(searchQuery.toLowerCase()) ||
      location.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      location.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const selectedLocationData = selectedLocation
    ? hospitalLocations.find((loc) => loc.id === selectedLocation)
    : null;

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-app-blue/5">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-app-blue to-blue-700 text-white py-20">
        <MaxWidthWrapper className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Our Location
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            With our hospital in Nigeria, quality healthcare is alway
            within reach
          </p>
        </MaxWidthWrapper>
      </section>

      <MaxWidthWrapper className="paddingY">
        {/* Search Section */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search by state, city, or hospital type..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-4 py-6 text-lg border-2 border-gray-200 focus:border-app-blue rounded-2xl"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Find Us In Abuja, Nigeria
              </h2>

              {/* Interactive Map */}
              <div className="relative bg-blue-50 rounded-xl p-8 border-2 border-blue-100">
                {/* Nigeria Map Outline */}
                <div className="relative w-full h-96 bg-linear-to-br from-blue-100 to-green-100 rounded-lg overflow-hidden border border-blue-200">
                  {/* Simplified Nigeria outline with markers */}
                  <div className="absolute inset-0">
                    {/* This is a simplified representation of Nigeria */}
                    <div className="absolute inset-4 bg-green-50 rounded-lg border-2 border-green-200">
                      {/* Marker points */}
                      {hospitalLocations.map((location) => (
                        <button
                          key={location.id}
                          className={cn(
                            "absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-200",
                            "hover:scale-125 focus:outline-none focus:ring-2 focus:ring-app-blue focus:ring-offset-2 rounded-full"
                          )}
                          style={{
                            left: `${location.coordinates.x}%`,
                            top: `${location.coordinates.y}%`,
                          }}
                          onMouseEnter={() => setHoveredLocation(location.id)}
                          onMouseLeave={() => setHoveredLocation(null)}
                          onClick={() => setSelectedLocation(location.id)}
                        >
                          <div className="relative">
                            <MapPin
                              className={cn(
                                "w-8 h-8 transition-all duration-200",
                                hoveredLocation === location.id ||
                                  selectedLocation === location.id
                                  ? "text-red-500 fill-red-500 scale-125"
                                  : "text-app-blue fill-app-blue",
                                selectedLocation === location.id &&
                                  "text-red-600 fill-red-600"
                              )}
                            />

                            {/* Hover Tooltip */}
                            {(hoveredLocation === location.id ||
                              selectedLocation === location.id) && (
                              <div
                                className={cn(
                                  "absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2",
                                  "bg-white rounded-lg shadow-lg border border-gray-200 p-3 min-w-48",
                                  "animate-in fade-in-0 zoom-in-95"
                                )}
                              >
                                <div className="text-center">
                                  <div className="font-semibold text-gray-900">
                                    {location.state}
                                  </div>
                                  <div className="text-sm text-gray-600">
                                    {location.city}
                                  </div>
                                  <div className="text-xs text-app-blue font-medium mt-1">
                                    {location.type}
                                  </div>
                                </div>
                                {/* Tooltip arrow */}
                                <div className="absolute top-full left-1/2 transform -translate-x-1/2 -translate-y-1">
                                  <div className="w-3 h-3 bg-white border-r border-b border-gray-200 transform rotate-45" />
                                </div>
                              </div>
                            )}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Map Legend */}
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                    <div className="text-sm font-semibold text-gray-900 mb-2">
                      Legend
                    </div>
                    <div className="space-y-1 text-xs">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-app-blue fill-app-blue" />
                        <span className="text-gray-600">Hospital Location</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-red-500 fill-red-500" />
                        <span className="text-gray-600">Selected Location</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-2 mt-6">
                  <Stat value={"1"} text="Hospital" />
                  <Stat value={"1"} text="State1" />
                  <Stat value={"24/7"} text=" Emergency Care" />
                </div>
              </div>
            </div>
          </div>

          {/* Location Details Sidebar */}
          <div className="space-y-6">
            {/* Selected Location Details */}
            {selectedLocationData ? (
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {selectedLocationData.state} Branch
                      </h3>
                      <p className="text-app-blue font-semibold">
                        {selectedLocationData.type}
                      </p>
                    </div>
                    <div className="flex items-center space-x-1 bg-green-50 px-2 py-1 rounded">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-semibold text-green-800">
                        {selectedLocationData.rating}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 text-sm">
                      <MapPin className="w-4 h-4 text-app-blue shrink-0" />
                      <span className="text-gray-600">
                        {selectedLocationData.address}
                      </span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm">
                      <Phone className="w-4 h-4 text-app-blue shrink-0" />
                      <span className="text-gray-600">
                        {selectedLocationData.phone}
                      </span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm">
                      <Clock className="w-4 h-4 text-app-blue shrink-0" />
                      <span className="text-gray-600">
                        {selectedLocationData.hours}
                      </span>
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Services Available
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedLocationData.features.map((feature, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-app-blue/10 text-app-blue text-xs rounded-md"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button className="flex-1 bg-app-blue hover:bg-app-blue/90">
                      <Car className="w-4 h-4 mr-2" />
                      Get Directions
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
                <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Select a Location
                </h3>
                <p className="text-gray-600 text-sm">
                  Click on any hospital marker on the map to view detailed
                  information
                </p>
              </div>
            )}

            {/* All Locations List */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                All Locations ({filteredLocations.length})
              </h3>
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {filteredLocations.map((location) => (
                  <button
                    key={location.id}
                    onClick={() => setSelectedLocation(location.id)}
                    className={cn(
                      "w-full text-left p-3 rounded-lg border transition-all duration-200",
                      "hover:border-app-blue hover:bg-blue-50",
                      selectedLocation === location.id
                        ? "border-app-blue bg-app-blue/5"
                        : "border-gray-200"
                    )}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="font-semibold text-gray-900">
                          {location.state}
                        </div>
                        <div className="text-sm text-gray-600">
                          {location.city} • {location.type}
                        </div>
                      </div>
                      <MapPin
                        className={cn(
                          "w-4 h-4 mt-1 shrink-0",
                          selectedLocation === location.id
                            ? "text-red-500"
                            : "text-app-blue"
                        )}
                      />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Emergency CTA */}
        <div className="mt-12 bg-red-50 border border-red-200 rounded-2xl p-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-red-900 mb-4">
              🚨 Medical Emergency?
            </h3>
            <p className="text-red-800 mb-6">
              Don&apos;t wait - visit the nearest {siteConfig.title}
              immediately or call our emergency line
            </p>
            <div className="flex flex-col items-center sm:flex-row gap-4 justify-center">
              <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg">
                <Phone className="w-5 h-5 mr-2" />
                Call Emergency: {siteConfig.phone}
              </Button>
              <Button
                variant="outline"
                className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
              >
                Find Nearest ER
              </Button>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Locations;

function Stat({ value, text }: { value: string; text: string }) {
  return (
    <div className="text-center p-3 bg-app-blue/10 rounded-lg">
      <div className="text-xl md:text-2xl font-bold text-app-blue">{value}</div>
      <div className="text-xs md:text-sm text-gray-600">{text}</div>
    </div>
  );
}
