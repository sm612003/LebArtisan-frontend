import React from "react";
import img from '../../assets/Intersect (8).png';
import HeroSectionCss from "./herosection.module.css";

const HeroSectionHomepage = () => {
  return (
    <section className={`${HeroSectionCss.container} ${HeroSectionCss.containerHero}`}>
      <div className={HeroSectionCss.main}>
        <div className={HeroSectionCss.detail}>
          <h1>Learn Handcraft to start your own business</h1>
          <p className={HeroSectionCss.discount}>
            Select desired courses from online or on-site categories,
            get individual assistance from instructors and master your new skills
          </p>
          {/* Button linking to the contact page */}
          <div className={HeroSectionCss.genralBtn}>
            <button href="/contact" className={HeroSectionCss.genralBtn} >
              Contact Us
            </button>
          </div>
        </div>
        <div className={HeroSectionCss.images}>
          <img
            src={img}
            alt=""
            className={HeroSectionCss.imgW}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSectionHomepage;
