
import HeroSection from './Hero/Hero';
import WhoweareSection from './Who_we_are/Whoweare';
import Latest from './LatestEvents/Latest';
// import Test from './Testing/test';
import Vendors from './Vendors/Vendors';
import SLNavbar from "../Navbar/Navbar";
import SLChat from "../ChatBot/Chat";
import SLFooter from "../Footer/Footer";
import React from "react";


function Home() {
  return (
    <>
      <SLNavbar />
      <SLChat />

      <HeroSection />
      <WhoweareSection />
      <Vendors />
      <Latest />
      <SLFooter />
    </>
  );
}

export default Home;