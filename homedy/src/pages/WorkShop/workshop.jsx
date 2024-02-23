// import React from 'react';
// import EmptyList from '../../common/EmptyList/index';
// import BlogList from '../../components/Home/BlogList';
// import SearchBar from '../../components/Home/SearchBar';
// import { blogList } from '../../config/data';
// import { useState } from "react";
// import Header from '../../components/Home/Header/index';
// import HeroSectionHomepage from '../HeroSectionWorkshop/herosection';


// const Workshop = () => {
//     const [blogs, setBlogs] = useState(blogList);
//   const [searchKey, setSearchKey] = useState('');

//   // Search submit
//   const handleSearchBar = (e) => {
//     e.preventDefault();
//     handleSearchResults();
//   };

//   // Search for blog by category
//   const handleSearchResults = () => {
//     const allBlogs = blogList;
//     const filteredBlogs = allBlogs.filter((blog) =>
//       blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
//     );
//     setBlogs(filteredBlogs);
//   };

//   // Clear search and show all blogs
//   const handleClearSearch = () => {
//     setBlogs(blogList);
//     setSearchKey('');
//   };

//   return (
//     <div>
//         <HeroSectionHomepage/>
//             {/* Page Header */}
//       {/* <Header /> */}
//           {/* Search Bar */}
//     <SearchBar
//         value={searchKey}
//         clearSearch={handleClearSearch}
//         formSubmit={handleSearchBar}
//         handleSearchKey={(e) => setSearchKey(e.target.value)}
//       />

//       {/* Blog List & Empty View */}
//       {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}
//     </div>
//   )
// }

// export default Workshop
import React, { useState, useEffect } from 'react';
import EmptyList from '../../common/EmptyList/index';
import WorkshopList from '../../components/Home/BlogList';
import SearchBar from '../../components/Home/SearchBar';
import Header from '../../components/Home/Header/index';
import HeroSectionHomepage from '../HeroSectionWorkshop/herosection';

const Workshop = () => {
  const [workshops, setWorkshops] = useState([]);
  const [searchKey, setSearchKey] = useState('');
  const [categorySuggestions, setCategorySuggestions] = useState([]);

  useEffect(() => {
    // Fetch workshop data from API
    fetchWorkshops();
  }, []);

  const fetchWorkshops = async () => {
    try {
      const response = await fetch('http://localhost:5000/workshop/read/all');
      const data = await response.json();
      setWorkshops(data);
    } catch (error) {
      console.error('Error fetching workshops:', error);
    }
  };

  const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults();
  };

  const handleSearchKey = (e) => {
    setSearchKey(e.target.value);
    // Filter categories based on search key
    const filteredCategories = workshops
      .map((workshop) => workshop.categoryTitle)
      .filter((category) =>
        category.toLowerCase().includes(e.target.value.toLowerCase().trim())
      );
    // Set category suggestions
    setCategorySuggestions(filteredCategories);
  };

  const handleSuggestionClick = (category) => {
    // Set search key to the clicked category
    setSearchKey(category);
    // Filter workshops based on the clicked category
    const filteredWorkshops = workshops.filter((workshop) =>
      workshop.categoryTitle.toLowerCase().includes(category.toLowerCase())
    );
    // Update workshops state with filtered workshops
    setWorkshops(filteredWorkshops);
    // Clear category suggestions
    setCategorySuggestions([]);
  };

  const handleClearSearch = () => {
    // Reset workshops to the initial state
    fetchWorkshops();
    setSearchKey('');
  };

  const handleSearchResults = () => {
    // Implement your search functionality here
    // This function should filter the workshops based on the search key
    // For now, let's just log the search key to the console
    console.log('Search key:', searchKey);
  };

  return (
    <div>
      <HeroSectionHomepage />
      <SearchBar
  value={searchKey}
  clearSearch={handleClearSearch}
  formSubmit={handleSearchBar}
  handleSearchKey={handleSearchKey}
  categorySuggestions={categorySuggestions}
  handleSuggestionClick={handleSuggestionClick} // Pass handleSuggestionClick as a prop
/>

      {!workshops.length ? <EmptyList /> : <WorkshopList workshops={workshops} />}
    </div>
  );
};

export default Workshop;



