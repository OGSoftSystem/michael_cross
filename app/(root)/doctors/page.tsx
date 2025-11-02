import Doctors from "@/components/doctor-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Doctors",
};
const DoctorsPage = () => {
  return <Doctors />;
};

export default DoctorsPage;
