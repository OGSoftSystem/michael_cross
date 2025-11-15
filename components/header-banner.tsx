import React from "react";

const HeaderBanner = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="text-center space-y-4 mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{title}</h2>
      <div className="w-20 h-1.5 bg-app-blue rounded-full mx-auto" />
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">{description}</p>
    </div>
  );
};

export default HeaderBanner;
