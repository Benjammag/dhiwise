import React from "react";

const sizes = {
  xs: "text-xs font-medium",
  lg: "text-[26px] font-medium md:text-2xl sm:text-[22px]",
  s: "text-base font-normal",
  "2xl": "text-[80px] font-normal md:text-5xl",
  xl: "text-[32px] font-normal md:text-3xl sm:text-[28px]",
  md: "text-2xl font-normal md:text-[22px]",
};

const Text = ({ children, className = "", as, size = "lg", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-white-A700 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
