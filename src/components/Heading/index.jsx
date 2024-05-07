import React from "react";

const sizes = {
  xl: "text-[50px] font-semibold md:text-[46px] sm:text-[40px]",
  s: "text-3xl font-bold md:text-[28px] sm:text-[26px]",
  md: "text-[40px] font-bold md:text-[38px] sm:text-4xl",
  xs: "text-2xl font-bold md:text-[22px]",
  lg: "text-5xl font-bold md:text-[44px] sm:text-[38px]",
};

const Heading = ({ children, className = "", size = "lg", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-teal-700 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
