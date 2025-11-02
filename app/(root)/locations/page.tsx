import Locations from "@/components/location";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Locations",
};
const LocationPage = () => {
  return <Locations />;
};

export default LocationPage;
