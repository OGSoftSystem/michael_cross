"use client";

import { useState } from "react";
import Image from "next/image";
import MaxWidthWrapper from "./max-width-wrapper";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import {
  Search,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Star,
  Award,
} from "lucide-react";
import Link from "next/link";

const doctors = [
  {
    id: 1,
    name: "Dr. Adebayo Johnson",
    specialty: "Cardiologist",
    department: "Cardiology",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    qualifications: [
      "MD, Cardiology",
      "Fellow, American College of Cardiology",
    ],
    experience: "15 years",
    rating: 4.9,
    available: true,
    email: "a.johnson@michaelcrosshospital.org",
    phone: "+234 800 642 4301",
    location: "Lagos Main Branch",
    bio: "Specialized in interventional cardiology with expertise in complex cardiac procedures. Dr. Johnson has performed over 2,000 successful heart surgeries.",
  },
  {
    id: 2,
    name: "Dr. Chinyere Okoro",
    specialty: "Pediatrician",
    department: "Pediatrics",
    image:
      "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    qualifications: [
      "MD, Pediatrics",
      "Fellow, American Academy of Pediatrics",
    ],
    experience: "12 years",
    rating: 4.8,
    available: true,
    email: "c.okoro@michaelcrosshospital.org",
    phone: "+234 800 642 4302",
    location: "Abuja Specialist Center",
    bio: "Passionate about child healthcare with special interest in neonatal care and childhood development disorders.",
  },
  {
    id: 3,
    name: "Dr. Ibrahim Mohammed",
    specialty: "Orthopedic Surgeon",
    department: "Orthopedics",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    qualifications: [
      "MD, Orthopedic Surgery",
      "FRCS, Royal College of Surgeons",
    ],
    experience: "18 years",
    rating: 4.9,
    available: false,
    email: "i.mohammed@michaelcrosshospital.org",
    phone: "+234 800 642 4303",
    location: "Lagos Main Branch",
    bio: "Expert in joint replacement surgeries and sports medicine. Pioneered minimally invasive orthopedic procedures in Nigeria.",
  },
  {
    id: 4,
    name: "Dr. Funmi Adebayo",
    specialty: "Neurologist",
    department: "Neurology",
    image:
      "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    qualifications: ["MD, Neurology", "Fellow, American Academy of Neurology"],
    experience: "14 years",
    rating: 4.7,
    available: true,
    email: "f.adebayo@michaelcrosshospital.org",
    phone: "+234 800 642 4304",
    location: "Port Harcourt Center",
    bio: "Specializes in stroke management and neurological disorders. Leads our advanced neurology diagnostic unit.",
  },
  {
    id: 5,
    name: "Dr. Ngozi Eze",
    specialty: "Dermatologist",
    department: "Dermatology",
    image:
      "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    qualifications: [
      "MD, Dermatology",
      "Fellow, American Academy of Dermatology",
    ],
    experience: "10 years",
    rating: 4.8,
    available: true,
    email: "n.eze@michaelcrosshospital.org",
    phone: "+234 800 642 4305",
    location: "Kano Regional Hospital",
    bio: "Expert in medical and cosmetic dermatology with focus on skin cancer prevention and treatment.",
  },
];

const Doctors = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredDoctors, setFilteredDoctors] = useState<typeof doctors>([]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      setFilteredDoctors([]);
      return;
    }

    const query = searchQuery.toLowerCase().trim();
    const results = doctors.filter(
      (doctor) =>
        doctor.name.toLowerCase().startsWith(query) ||
        doctor.specialty.toLowerCase().includes(query) ||
        doctor.department.toLowerCase().includes(query)
    );

    setFilteredDoctors(results);
  };

  const clearSearch = () => {
    setSearchQuery("");
    setFilteredDoctors([]);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-app-blue/5">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-app-blue to-blue-700 text-white py-20">
        <MaxWidthWrapper className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Find Your Doctor
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto">
            Connect with our team of specialist doctors and schedule your
            appointment
          </p>
        </MaxWidthWrapper>
      </section>

      <MaxWidthWrapper className="paddingY">
        {/* Search Section */}
        <div className="max-w-2xl mx-auto mb-12">
          <form onSubmit={handleSearch} className="space-y-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search by doctor name, specialty, or department..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-6 text-lg border-2 border-gray-200 focus:border-app-blue rounded-2xl"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                type="submit"
                className={cn(
                  "bg-app-blue hover:bg-app-blue/90 text-white font-semibold",
                  "px-8 py-6 rounded-2xl text-lg transition-all duration-300",
                  "hover:scale-105 hover:shadow-lg flex-1"
                )}
              >
                <Search className="w-5 h-5 mr-2" />
                Search Doctors
              </Button>

              {searchQuery && (
                <Button
                  type="button"
                  onClick={clearSearch}
                  variant="outline"
                  className={cn(
                    "border-gray-300 text-gray-600 hover:bg-gray-50",
                    "px-8 py-6 rounded-2xl text-lg transition-all duration-300",
                    "hover:scale-105 flex-1"
                  )}
                >
                  Clear Search
                </Button>
              )}
            </div>
          </form>

          {/* Search Tips */}
          <div className="mt-6 text-center">
            <p className="text-gray-500 text-sm">
              Try searching by: {"Dr. Adebayo"}, {"Cardiology"},{" "}
              {"Pediatrician"}
            </p>
          </div>
        </div>

        {/* Results Section */}
        <div className="space-y-8">
          {/* No Results Message */}
          {searchQuery && filteredDoctors.length === 0 && (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No doctors found
              </h3>
              <p className="text-gray-600 max-w-md mx-auto">
                No doctors match your search for <strong>{searchQuery}</strong>.
                Try searching with different terms or contact us for assistance.
              </p>
            </div>
          )}

          {/* Doctor Cards */}
          {filteredDoctors.length > 0 && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  Search Results ({filteredDoctors.length})
                </h2>
                <button
                  onClick={clearSearch}
                  className="text-app-blue hover:text-app-blue/80 font-semibold"
                >
                  Clear all
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {filteredDoctors.map((doctor) => (
                  <div
                    key={doctor.id}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                  >
                    <div className="p-6">
                      <div className="flex flex-col sm:flex-row gap-6">
                        {/* Doctor Image */}
                        <div className="shrink-0">
                          <div className="relative w-32 h-32 rounded-2xl overflow-hidden">
                            <Image
                              src={doctor.image}
                              alt={`Portrait of ${doctor.name}`}
                              fill
                              className="object-cover"
                            />
                            {!doctor.available && (
                              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                                <span className="text-white text-sm font-semibold bg-red-500 px-2 py-1 rounded">
                                  On Leave
                                </span>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Doctor Info */}
                        <div className="flex-1 space-y-3">
                          {/* Name and Specialty */}
                          <div>
                            <h3 className="text-xl font-bold text-gray-900">
                              {doctor.name}
                            </h3>
                            <p className="text-app-blue font-semibold">
                              {doctor.specialty}
                            </p>
                            <div className="flex items-center space-x-4 mt-1">
                              <div className="flex items-center space-x-1">
                                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                <span className="text-sm text-gray-600">
                                  {doctor.rating}
                                </span>
                              </div>
                              <span className="text-sm text-gray-500">
                                {doctor.experience} experience
                              </span>
                              <div
                                className={cn(
                                  "w-2 h-2 rounded-full",
                                  doctor.available
                                    ? "bg-green-500"
                                    : "bg-red-500"
                                )}
                              />
                            </div>
                          </div>

                          {/* Department and Location */}
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <div className="flex items-center space-x-1">
                              <Award className="w-4 h-4" />
                              <span>{doctor.department}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MapPin className="w-4 h-4" />
                              <span>{doctor.location}</span>
                            </div>
                          </div>

                          {/* Bio */}
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {doctor.bio}
                          </p>

                          {/* Qualifications */}
                          <div className="space-y-1">
                            {doctor.qualifications.map((qual, index) => (
                              <div
                                key={index}
                                className="flex items-center space-x-2 text-sm text-gray-500"
                              >
                                <div className="w-1 h-1 bg-gray-400 rounded-full" />
                                <span>{qual}</span>
                              </div>
                            ))}
                          </div>

                          {/* Contact Actions */}
                          <div className="flex flex-col sm:flex-row gap-3 pt-4">
                            <Button
                              asChild
                              className={cn(
                                "bg-app-blue hover:bg-app-blue/90 text-white font-semibold",
                                "px-6 py-3 rounded-xl transition-all duration-300",
                                "hover:scale-105 hover:shadow-lg flex-1",
                                !doctor.available &&
                                  "opacity-50 cursor-not-allowed"
                              )}
                              disabled={!doctor.available}
                            >
                              <Link href={"/appointment"}>
                                <Calendar className="w-4 h-4 mr-2" />
                                Book Appointment
                              </Link>
                            </Button>

                            <div className="flex gap-2">
                              <Button
                                variant="outline"
                                size="sm"
                                className="flex-1 border-app-blue text-app-blue hover:bg-app-blue hover:text-white"
                              >
                                <Mail className="w-4 h-4" />
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                className="flex-1 border-app-blue text-app-blue hover:bg-app-blue hover:text-white"
                              >
                                <Phone className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Initial State - No Search */}
          {!searchQuery && (
            <div className="text-center py-16">
              <div className="w-32 h-32 bg-app-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-16 h-16 text-app-blue" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Find the Right Doctor for You
              </h3>
              <p className="text-gray-600 max-w-md mx-auto text-lg mb-8">
                Search for our specialist doctors by name, specialty, or
                department to schedule your appointment.
              </p>

              {/* Quick Search Suggestions */}
              <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
                {[
                  "Cardiology",
                  "Pediatrics",
                  "Orthopedics",
                  "Neurology",
                  "Dermatology",
                ].map((specialty) => (
                  <button
                    key={specialty}
                    onClick={() => setSearchQuery(specialty)}
                    className="px-4 py-2 bg-white border border-gray-200 rounded-xl hover:border-app-blue hover:text-app-blue transition-colors"
                  >
                    {specialty}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Doctors;
