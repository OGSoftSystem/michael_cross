import Doctors from "@/components/doctor-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Doctors",
};
const DoctorsPage = () => {
  return <Doctors />;
};

export default DoctorsPage;
