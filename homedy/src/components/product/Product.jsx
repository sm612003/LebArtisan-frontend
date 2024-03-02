import React from "react";
import { NavLink } from "react-router-dom";
import '../product/Style.css'

const Product = ({ id, BrandName, userImage, userId }) => {
  const imageUrl = userImage ? `${process.env.REACT_APP_BACKEND}/${userImage}` : `${process.env.REACT_APP_BACKEND}/${userId.image}`;

  return (
   
      <div className=" blogItem-wrap">
          <img className='blogItem-cover'  src={imageUrl} alt={BrandName} />
        <div className=" blogItem-author">
          <div>
            <h3>{BrandName}</h3>
          </div>
        </div>
      </div>
  );
};

export default Product;

