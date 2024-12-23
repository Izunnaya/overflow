import Navbar from "@/components/Navigation/Navbar";
import { ReactNode } from "react";

//This is the layout that'll house root application.

const Rootlayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
};

export default Rootlayout;
