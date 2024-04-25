  import React from "react";
  import Navbar from "@/components/navbar";
  import { HeroSection } from "@/components/heroSection";
  export function Home(){
  return(
  // TODO we are showing the navabar + section as we want to show it single image as backgroun for navbar and this hero section
  <>
    <Navbar  />
    <div className="bg-hero-pattern bg-cover bg-right bg-no-repeat h-full w-full absolute top-0 left-0 "></div>
    <HeroSection />

  </>)
  }