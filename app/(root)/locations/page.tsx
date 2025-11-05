import Locations from "@/components/location";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hospital Locations",
};
const LocationPage = () => {
  return <Locations />;
};

export default LocationPage;
