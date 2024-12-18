import { ReactNode } from "react";

export const Background = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen bg-[#85FFBD] bg-[linear-gradient(45deg,#85FFBD_0%,#FFFB7D_100%)]">
      {children}
    </div>
  );
};
