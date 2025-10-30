import React, { ComponentPropsWithRef } from "react";

const AppButton = (props: ComponentPropsWithRef<"button">) => {
  return <button {...props} />;
};

export default AppButton;
