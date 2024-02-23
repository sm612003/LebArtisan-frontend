import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Heading from "../common/Heading";

const Category = () => {
  const [allArtists, setAllArtists] = useState([]);
  const [artists, setArtists] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchArtists();
    fetchCategories();
  }, []);

  const fetchArtists = async () => {
    try {
      const response = await fetch("http://localhost:5000/artist/artists");
      const data = await response.json();
      setAllArtists(data);
      setArtists(data); // Initially, set all artists to be shown
    } catch (error) {
      console.error("Error fetching artists:", error);
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

  const filterItems = async (categoryId) => {
    try {
      const response = await fetch(`http://localhost:5000/artist/${categoryId}`);
      const data = await response.json();
      setArtists(data);
    } catch (error) {
      console.error("Error filtering artists:", error);
    }
  };
  
  

  return (
    <div className="bg-white mt-16 text-center">
      <Heading
        title="Best Seller"
        description="LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPESETTING INDUSTRY"
      />
      <div className="flex justify-center">
        {/* Render category buttons */}
        {categories.map((category) => (
          <button
            key={category._id}
            type="button"
            className="bg-gray-200 pt-2 pb-2 pl-4 pr-4 mr-2 text-black font-semibold hover:bg-black hover:text-white transition-all duration-300"
            onClick={() => filterItems(category._id)}
          >
            {category.title}
          </button>
        ))}
      </div>
      <div className="m-10 overflow-hidden text-center relative grid grid-cols-4 flex-wrap">
      {artists.map((artist, index) => (
  <div key={index} className="relative">
    <div className="m-4 relative group">
      {artist.userId && (
        <Link to={`/product/${artist.userId._id}`}>
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
  </div>
))}


      </div>
    </div>
  );
};

export default Category;
