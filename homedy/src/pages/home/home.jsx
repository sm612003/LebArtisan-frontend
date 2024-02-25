import React from 'react'
import { useState } from "react";
import "./home.css";
import ImageGrid from '../../components/imageSection/imageSection';
import { ImageGallery } from '../../components/ImageGallery';
import HeroSectionHomepage from "../../components/HeroSection/HeroSection";
import { SearchResultsList } from "../../components/searchlist/searchlist";
import About from '../../components/About/About';
import styles, { layout } from "../../style.js";
import  ImageSlider from '../../components/Arrival.js';
import Testimonials  from '../../components/Testimonials/Testimonials.jsx';
import  Work  from '../../components/Work/Work.jsx'
import Projects from '../../components/Work/Work.jsx';

export default function Home() {
  const [results, setResults] = useState([]);


  return (
    <div>
<h1>home</h1>
< HeroSectionHomepage/>


    {/* <div className="search-bar-container">
        <SearchBar setResults={setResults} />
        {results && results.length > 0 && <SearchResultsList results={results} />}
      </div>  */}
          {/* <CardSlider/> */}
{/* <About/> */}
{/* <Business/> */}
<Projects/>
{/* <Testimonials/> */}

{/* < ImageSlider /> */}

{/* <ImageGrid /> */}
    </div>
 )
}



