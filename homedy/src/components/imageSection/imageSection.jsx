// ImageGrid.js
import img from '../../assets/Frame 9.png'
import img2 from "../../assets/Frame 10.png"
import img3 from '../../assets/Frame 11.png'
import img4 from '../../assets/Frame 12.png'
import React from 'react';
import styles from './imageSection.module.css';

const ImageGrid = () => {
  return (
    <div className={styles.gridContainer}>
      <img className={styles.image1} src={img} alt='image'/>
      <img className={styles.image2} src={img4} alt='image'/>
      <img className={styles.image3} src={img2} alt='image'/>
      <img className={styles.image4} src={img3} alt='image'/>
    </div>
  );
};

export default ImageGrid;
