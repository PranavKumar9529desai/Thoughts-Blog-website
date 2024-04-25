  import React from "react";
  import Navbar from "@/components/navbar";
  import { HeroSection } from "@/components/heroSection";
  export function Home(){
  return(
  // TODO we are showing the navabar + section as we want to show it single image as backgroun for navbar and this hero section
  <>
    
    <div className="bg-hero-pattern bg-cover bg-right bg-no-repeat h-700px w-full absolute top-0 left-0 ">
     {/* to add color add use bg-customGray and for background image bg-hero-pattern */}
    <Navbar  />
    <HeroSection />
    </div>
    

  </>)
  }