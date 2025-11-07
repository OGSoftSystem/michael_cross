export const siteConfig = {
  baseUrl:
    process.env.NODE_ENV === "production"
      ? "https://michael-cross.vercel.app"
      : "localhost:3000",
  email: "info@michaelcrosspecialist.com",
  phone: "(234) 802 637 8305",
  location:
    "Site, Plot F9 church road, Old Karu, Abuja",
    // "Site, Plot F9 church road,Karu, Old Karu, Abuja, Federal Capital Territory",
  description: "Healing hearts, restoring hope",
  shortDesc: "Healing hearts, restoring hope",
  title: "Michael Cross Specialists Hospital",
};
