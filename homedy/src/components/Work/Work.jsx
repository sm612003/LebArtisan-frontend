import React, {useState} from 'react';
import {works} from "../../constants/data";
import "./Work.css";
import {BsPlusLg} from "react-icons/bs";
import {ImCancelCircle} from "react-icons/im";
import { Link } from 'react-router-dom';

const Work = () => {
    const [imageModal, setImageModal] = useState(false);
    const [imageSource, setImageSource] = useState("");

    const setImageOnModal = (src) => {
        setImageModal(true);
        setImageSource(src);
    }

  return (
    <div className='work section-p bg-grey' id = "work">
        <div className={imageModal ? "image-box show-image-box" : "image-box"}>
            <div className='image-box-content'>
                <img src = {imageSource} alt = "" />
                <span className='image-box-close-btn' onClick={() => setImageModal(false)}>
                    <ImCancelCircle size = {30} className = "text"  />
                </span>
            </div>
        </div>

        <div className='container'>
            <div className='work-content'>
                <div className='section-title'>
                    <h3 className='text-brown'>Our <span className='text-dark'>Artisans</span></h3>
                    <p className='text'>Handcrafted by famous artisans 
in Bat Trang pottery village.</p>
                </div>

                <div className='work-list grid'>
                    {
                        works.map((work, index) => {
                            return (
                                <div className='work-item text-center' key = {index} onClick = {() => setImageOnModal(work.image)}>
                                    <img src = {work.image} alt = "" />
                                    <span className='work-item-icon'>
                                        <BsPlusLg size = {38} className = "text" />
                                    </span>
                                </div>
                            )
                        })
                    }

                </div>
                <div className="text-center">
    <Link to="/services" className="button view-more-button">View More</Link>
</div>

            </div>
        </div>
    </div>
  )
}

export default Work