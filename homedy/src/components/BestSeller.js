import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Heading from "../common/Heading";
import EmptyList from "../common/EmptyList"; // Import the EmptyList component

const Category = () => {
  const [allArtists, setAllArtists] = useState([]);
  const [artists, setArtists] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [loading, setLoading] = useState(true); // State to track loading status

  useEffect(() => {
    fetchArtists();
    fetchCategories();
  }, []);

  const fetchArtists = async () => {
    try {
      const response = await fetch("http://localhost:5000/artist/byName");
      if (!response.ok) {
        throw new Error('Failed to fetch artists');
      }
      const data = await response.json();
      setAllArtists(data);
      setArtists(data); // Initially, set all artists to be shown
      setLoading(false); // Set loading to false once data is fetched
    } catch (error) {
      console.error("Error fetching artists:", error);
      // Handle the error gracefully, e.g., show an error message to the user
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await fetch("http://localhost:5000/category/read/all");
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const toggleCategory = (categoryId) => {
    setSelectedCategories((prevSelectedCategories) => {
      if (categoryId === 'all') {
        // Toggle "All" selection
        return prevSelectedCategories.includes('all') ? [] : ['all'];
      } else {
        // Toggle other category selections
        if (prevSelectedCategories.includes(categoryId)) {
          return prevSelectedCategories.filter((id) => id !== categoryId && id !== 'all');
        } else {
          // If any other category is selected, deselect "All"
          if (prevSelectedCategories.includes('all')) {
            return [categoryId];
          } else {
            return [...prevSelectedCategories, categoryId];
          }
        }
      }
    });
  };
  

  const filterItems = async () => {
    try {
      if (selectedCategories.length === 0 || selectedCategories.includes('all')) {
        // If no category selected or 'All' is selected, fetch all artists
        setArtists(allArtists);
      } else {
        // Fetch artists by selected categories
        const response = await fetch(`http://localhost:5000/artist/ByCategory/${selectedCategories.join(',')}`);
        const data = await response.json();
        setArtists(data);
      }
    } catch (error) {
      console.error("Error filtering artists:", error);
    }
  };
  
  
  useEffect(() => {
    filterItems();
  }, [selectedCategories]);

  return (
    <div className="bg-white mt-16">
      <div className="container mx-auto flex justify-center" style={{marginTop:'10%',marginBottom:'10%'}}>
        {/* Category Filter */}
        <div className="w-1/4 px-4" style={{backgroundColor:'lightblue'}}>
          <Heading title="Category" />
          <div className="flex flex-col items-start" style={{width:'220%',height:'400px'}}>
            {/* "All" Checkbox */}
            <label className="mb-2" style={{display:'flex',gap:'15px',fontSize:'20px'}}>
              <input
                type="checkbox"
                value="all"
                checked={selectedCategories.includes('all')}
                onChange={() => toggleCategory('all')}
              />
              All
            </label>

            {/* Individual Category Checkboxes */}
            {categories.map((category) => (
              <label key={category._id} className="mb-2" style={{display:'flex',gap:'15px',fontSize:'20px'}}>
                <input
                  type="checkbox"
                  value={category._id}
                  checked={selectedCategories.includes(category._id)}
                  onChange={() => toggleCategory(category._id)}
                />
                {category.title}
              </label>
            ))}
          </div>
        </div>
        
        {/* Artist Cards */}
        <div className="w-3/4 px-4">
          <Heading
            title="Our Artisans"
            description="Handmade treasures, where artistry meets soul, bringing beauty into every fold"
          />
          <div className="m-4 grid grid-cols-4 gap-4">
            {loading ? (
              <EmptyList />
            ) : (
              artists.map((artist, index) => (
                <div key={index} className="relative group">
                  {artist.userId && (
                    <Link to={`/product/${artist._id}`}>
                      <img
                        src={`${process.env.REACT_APP_BACKEND}/${artist.userImage || artist.userId.image}`}
                        alt={artist.BrandName}
                        className="mx-auto h-full w-full hover:shadow-md transition-all duration-300 bg-cover"
                      />
                    </Link>
                  )}
                  <div className="mt-4">
                    <div className="font-semibold uppercase">{artist.BrandName}</div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;