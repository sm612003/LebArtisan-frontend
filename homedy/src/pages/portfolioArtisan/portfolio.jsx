// ProductDetail.js
import React , {useState,  useEffect} from "react";
import { useParams } from "react-router-dom";
import { ImageGallery } from "../../components/ImageGallery.jsx";
import About from "../../components/About/About.jsx";
import HeroSectionsingle from "../../components/heroSinglePage/herosingle.jsx";
import ContactUs from "../../components/ContactUs.js";



const ProductDetail = () => {
  const { artistId } = useParams();
  const [artistDetails, setArtistDetails] = useState(null);
  const [productImages, setProductImages] = useState([]);

  useEffect(() => {
    const fetchArtistDetails = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND}/artist/${artistId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch artist details');
        }
        const data = await response.json();
        setArtistDetails(data);
      } catch (error) {
        console.error("Error fetching artist details:", error);
      }
    };

    fetchArtistDetails();
  }, [artistId]);

  useEffect(() => {
    const fetchProductImages = async (artisanId) => {
      try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND}product/image/${artisanId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch product images');
        }
        const data = await response.json();
        setProductImages(data.map(item => item.image));
      } catch (error) {
        console.error("Error fetching product images:", error);
      }
    };

    fetchProductImages(artistId);
  }, [artistId]);

  return (
    <div>
      <div className="bg-white">
        <HeroSectionsingle />
        {artistDetails && (
          <>
            <About
              title={artistDetails.about_us.title}
              description={artistDetails.about_us.description}
              videoUrl={artistDetails.about_us.video}
            />
            <ImageGallery images={productImages} />
            <ContactUs contactInfo={artistDetails} />
          </>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
