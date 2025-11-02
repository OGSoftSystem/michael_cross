import Appointment from "@/components/appointment-form";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata ={
title:"Appointments"
}
const AppointmentPage = () => {
  return <Appointment />;
};

export default AppointmentPage;
