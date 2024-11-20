import React, { ReactNode } from "react";

interface HTTPSLinkProps {
  decoratedText: string;
  children: ReactNode;
}

export default function HTTPSLink({ decoratedText, children }: HTTPSLinkProps) {
  return (
    <a
      href={decoratedText}
      title={decoratedText}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
}
