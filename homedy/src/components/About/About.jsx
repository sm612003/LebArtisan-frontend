import React, {useRef, useState} from 'react';
import "./About.css";
import images from "../../constants/images";
import {about_stats} from "../../constants/data";
import video from "../../assets/videos/video.mp4";
import {FaPlay} from "react-icons/fa";

const About = () => {
    const vidRef = useRef(null);
    const [toggleVideo, setToggleVideo] = useState(false);
    const playVideo = () => {
        setToggleVideo(!toggleVideo);
        if(toggleVideo) vidRef.current.play();
        else vidRef.current.pause();
    }

  return (
    <div className='about section-p'>
        <div className='container'>
            <div className='about-content'>
                <div className='about-grid grid'>
                    <div className='section-title'>
                    </div>
                </div>

                <div className='about-grid grid'>
                    {
                        about_stats.map((about_stat, index) => {
                            return (
                                <div className='about-item text-center flex' key = {index}>
                                    <div className='about-item-icon'>
                                    </div>
                                    <div className='about-item-text text-left'>
                                     
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

                <div className='about-grid grid'>
                    <div className='section-title'>
                        <h3 className='text-brown'>Hand crafted <span className='text-dark'>Pottery since 1975</span></h3>
                        <p className='text mx-auto'>
                        Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
                         Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. 
                        Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.</p>
                    </div>

                    <div className='about-video'>
                        <video className='about-video' autoPlay loop ref = {vidRef}>
                            <source src = {video} type = "video/mp4" />
                        </video>
                        <button type = "button" className='vidPlayBtn flex flex-c' onClick={playVideo}>
                            <FaPlay className='text-brown' size = {28} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About