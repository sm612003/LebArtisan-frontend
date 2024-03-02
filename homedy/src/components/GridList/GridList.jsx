import React from "react";
// import styled from "styled-components";
import Product from "../product/Product";
import '../GridList/Style.css';


const GridView = ({ products }) => {
  return (
    <div className='blogList-wrap' style={{marginBottom:'15%'}}>
        {products.map((curElem) => {
          return <Product key={curElem.id} {...curElem} />;
        })}
    </div>
  );
};



export default GridView;