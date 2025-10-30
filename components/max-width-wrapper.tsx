import React, { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  className?: string;
}
const MaxWidthWrapper = ({ children, className }: Props) => {
  return (
    <div className={`size-full px-4 md:px-6 lg:px-8  max-w-7xl mx-auto ${className}`}>
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
