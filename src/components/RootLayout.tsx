import React, { ReactElement } from "react";
import Navbar from "./header/Navbar";
import BottomHeader from "./header/BottomHeader";
import Footer from "./Footer";

interface Props {
  children: ReactElement;
}

const RootLayout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      <BottomHeader />
      {children}
      <Footer />
    </>
  );
};

export default RootLayout;
