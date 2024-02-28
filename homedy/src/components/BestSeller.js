import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Heading from "../common/Heading";
import EmptyList from "../common/EmptyList"; // Import the EmptyList component

const Category = () => {
  const [allArtists, setAllArtists] = useState([]);
  const [artists, setArtists] = useState([]);
  const [categories, setCategories] = useState([]);
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

  const filterItems = async (categoryId) => {
    try {
      const response = await fetch(`http://localhost:5000/artist/ByCategory/${categoryId}`);
      const data = await response.json();
      setArtists(data);
    } catch (error) {
      console.error("Error filtering artists:", error);
    }
  };
  
  return (
    <div className="bg-white mt-16 text-center">
      <Heading
        title="Our Artisans"
        description="Handmade treasures, where artistry meets soul, bringing beauty into every fold"
      />
      <div className="flex justify-center">
        {/* Render category buttons */}
        {categories.map((category) => (
          <button style={{color:'white',backgroundColor:'#8B8B8B'}}
            key={category._id}
            type="button"
            className="bg-gray-200 pt-2 pb-2 pl-4 pr-4 mr-2  font-semibold hover:bg-black hover:text-white transition-all duration-300"
            onClick={() => filterItems(category._id)}
          >
            {category.title}
          </button>
        ))}
      </div>
      {loading ? ( // Conditional rendering based on loading state
        <EmptyList /> // Show EmptyList component while loading
      ) : (
        <div className="m-10 overflow-hidden text-center relative grid grid-cols-4 flex-wrap">
          {artists.map((artist, index) => (
            <div key={index} className="relative">
              <div className="m-4 relative group">
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
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Category;
