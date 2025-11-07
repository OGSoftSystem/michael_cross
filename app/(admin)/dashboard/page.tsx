import DashboardLanding from "@/components/dashboard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
};
const DashboardPage = () => {
  return <DashboardLanding />;
};

export default DashboardPage;
