import React, { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  className?: string;
  id?: string;
}
const MaxWidthWrapper = ({ children, className, id }: Props) => {
  return (
    <div
      id={id}
      className={`size-full px-4 md:px-6 lg:px-8  max-w-7xl mx-auto ${className}`}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
