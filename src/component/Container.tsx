import React, { JSX } from "react";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements; 
};

export default function Container({
  children,
  className = "",
  as: Tag = "div",
}: ContainerProps) {
  return (
<Tag className={`mx-auto w-full max-w-[1350px] px-3 md:px-4 lg:px-5 ${className}`}>

      {children}
    </Tag>
  );
}