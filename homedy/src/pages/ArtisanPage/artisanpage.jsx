import React from "react";
import Sliders from "../../components/Slider";
import Category from "../../components/Category";
import Arrival from "../../components/Arrival";
import Popular from "../../components/Popular";
import BestSeller from "../../components/BestSeller";
import ContactUs from "../../components/ContactUs";
import HeroSectionHomepage from "../../components/HeroSection/HeroSection";
import Hero from "../../components/heroArtisan/heroArtisan";
import Banner from '../../components/Banner'

export default function Artisan() {
  return (
    <>
      <div className="bg-white" style={{marginTop:'80px'}}>
        <Hero/>
        {/* < HeroSectionHomepage/> */}

        {/* <Category /> */}
        {/* <Popular /> */}
        <BestSeller />
        {/* <Banner /> */}
        {/* <Brand /> */}

      </div>
    </>
  );
}
