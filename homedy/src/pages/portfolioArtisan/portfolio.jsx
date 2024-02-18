// ProductDetail.js
import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../../data/Data.js"
import { ImageGallery } from "../../components/ImageGallery.jsx";
import About from "../../components/About/About.jsx";
import HeroSectionsingle from "../../components/heroSinglePage/herosingle.jsx";
import ContactUs from "../../components/ContactUs.js";

const ProductDetail = () => {
  const { productId } = useParams();
  const product = products.find((p) => p.id === parseInt(productId));

  return (
    <div>
    <div className="bg-white">
    <HeroSectionsingle/>
      <About/>
      <ImageGallery/>

    
    </div>
          <ContactUs />

          </div>   

  );
};

export default ProductDetail;
