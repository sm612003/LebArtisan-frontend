import React from 'react'
// import { useState } from "react";
import "./home.css";
import HeroSectionHomepage from "../../components/HeroSection/HeroSection";

import  ImageSlider from '../../components/Arrival.js';

import Projects from '../../components/Work/Work.jsx';

export default function Home() {
  // const [results, setResults] = useState([]);


  return (
    <div style={{marginTop:'84px'}}>
< HeroSectionHomepage/>



          {/* <CardSlider/> */}
{/* <About/> */}
{/* <Business/> */}
<Projects/>
{/* <Testimonials/> */}

< ImageSlider />

{/* <ImageGrid /> */}
    </div>
 )
}



