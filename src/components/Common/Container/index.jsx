import React from "react";
import { twMerge } from "tailwind-merge";

const Container = ({ children, className, asChild, style, props }) => {
  if (asChild) {
    return React.cloneElement(children, {
      style,
      className: twMerge(children.props?.className, className),
      ...props,
    });
  }

  return (
    <div className={twMerge("container", className)} style={style} {...props}>
      {children}
    </div>
  );
};

export default Container;
