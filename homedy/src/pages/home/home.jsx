import React from 'react'
import { useState } from "react";
import "./home.css";
import ImageGrid from '../../components/imageSection/imageSection';
import HeroSectionHomepage from "../../components/HeroSection/HeroSection";
import CardSlider from '../cartslider/cartslider'
import { SearchResultsList } from "../../components/searchlist/searchlist";
import EmptyList from '../../common/EmptyList/index';
import BlogList from '../../components/Home/BlogList';
import SearchBar from '../../components/Home/SearchBar';
import { blogList } from '../../config/data';
import About from '../../components/About/About';
export default function Home() {
  const [results, setResults] = useState([]);
  const [blogs, setBlogs] = useState(blogList);
  const [searchKey, setSearchKey] = useState('');

  // Search submit
  const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults();
  };

  // Search for blog by category
  const handleSearchResults = () => {
    const allBlogs = blogList;
    const filteredBlogs = allBlogs.filter((blog) =>
      blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setBlogs(filteredBlogs);
  };

  // Clear search and show all blogs
  const handleClearSearch = () => {
    setBlogs(blogList);
    setSearchKey('');
  };

  return (
    <div>
<h1>home</h1>
< HeroSectionHomepage/>

    {/* <div className="search-bar-container">
        <SearchBar setResults={setResults} />
        {results && results.length > 0 && <SearchResultsList results={results} />}
      </div>  */}
          {/* <CardSlider/> */}
<About/>
<ImageGrid />
    {/* Search Bar */}
    <SearchBar
        value={searchKey}
        clearSearch={handleClearSearch}
        formSubmit={handleSearchBar}
        handleSearchKey={(e) => setSearchKey(e.target.value)}
      />

      {/* Blog List & Empty View */}
      {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}
    </div>
 )
}



