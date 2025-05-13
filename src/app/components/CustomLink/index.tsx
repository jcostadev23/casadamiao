"use client";

import React from "react";

export const CustomLink = (
  props: React.AnchorHTMLAttributes<HTMLAnchorElement>
) => {
  const isExternal = props.href?.startsWith("http");
  return (
    <a
      {...props}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
    />
  );
};
