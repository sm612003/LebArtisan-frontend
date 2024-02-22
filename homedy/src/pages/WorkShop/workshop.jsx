import React from 'react';
import EmptyList from '../../common/EmptyList/index';
import BlogList from '../../components/Home/BlogList';
import SearchBar from '../../components/Home/SearchBar';
import { blogList } from '../../config/data';
import { useState } from "react";
import Header from '../../components/Home/Header/index';
import HeroSectionHomepage from '../HeroSectionWorkshop/herosection';


const Workshop = () => {
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
        <HeroSectionHomepage/>
            {/* Page Header */}
      {/* <Header /> */}
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

export default Workshop
