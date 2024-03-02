import React from "react";
// import styled from "styled-components";
import Product from "../product/Product";
import '../GridList/Style.css';


const GridView = ({ products }) => {
  return (
    <div className='blogListt-wrap' style={{marginBottom:'15%'}}>
        {products.map((curElem) => {
          return <Product key={curElem.id} {...curElem} />;
        })}
    </div>
  );
};



export default GridView;