import React from "react";
import { NavLink } from "react-router-dom";
import '../product/Style.css'
import {motion} from 'framer-motion'

const Product = ({ id, BrandName, userImage, userId }) => {
  const imageUrl = userImage ? `${process.env.REACT_APP_BACKEND}/${userImage}` : `${process.env.REACT_APP_BACKEND}/${userId.image}`;

  return (
   
      <motion.div layout
      animate={{opacity:1}}
      initial={{opacity:0}}
      exit={{opacity:0}}
       className=" blogItemm-wrap">
          <img className='blogItemm-cover'  src={imageUrl} alt={BrandName} />
        <div className=" blogItemm-author">
          <div>
            <h3>{BrandName}</h3>
          </div>
        </div>
      </motion.div>
  );
};

export default Product;

