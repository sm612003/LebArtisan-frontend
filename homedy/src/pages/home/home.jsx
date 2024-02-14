import React from 'react'
import { useState } from "react";
import "./home.css";

import HeroSectionHomepage from "../../components/HeroSection/HeroSection";
import CardSlider from '../cartslider/cartslider'
import Aboutus from '../sectionaboutus/setionABoutUs'
import { SearchBar } from "../../components/searchbar/search";
import { SearchResultsList } from "../../components/searchlist/searchlist";
export default function Home() {
  const [results, setResults] = useState([]);

  return (
    <div>
<h1>home</h1>
< HeroSectionHomepage/>

    <div className="search-bar-container">
        <SearchBar setResults={setResults} />
        {results && results.length > 0 && <SearchResultsList results={results} />}
      </div> */
          {/* <CardSlider/> */}

    </div>
  )
}



