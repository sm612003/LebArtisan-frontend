// import React, {useRef, useState} from 'react';
// import "./About.css";
// import images from "../../constants/images";
// import {about_stats} from "../../constants/data";
// import video from "../../assets/videos/video.mp4";
// import {FaPlay} from "react-icons/fa";

// const About = () => {
//     const vidRef = useRef(null);
//     const [toggleVideo, setToggleVideo] = useState(false);
//     const playVideo = () => {
//         setToggleVideo(!toggleVideo);
//         if(toggleVideo) vidRef.current.play();
//         else vidRef.current.pause();
//     }

//   return (
//     <div className='about section-p'>
//         <div className='container'>
//             <div className='about-content'>
//                 <div className='about-grid grid'>
//                     <div className='section-title'>
//                     </div>
//                 </div>

//                 <div className='about-grid grid'>
//                     {
//                         about_stats.map((about_stat, index) => {
//                             return (
//                                 <div className='about-item text-center flex' key = {index}>
//                                     <div className='about-item-icon'>
//                                     </div>
//                                     <div className='about-item-text text-left'>

//                                     </div>
//                                 </div>
//                             )
//                         })
//                     }
//                 </div>

//                 <div className='about-grid grid'>
//                     <div className='section-title'>
//                         <h3 className='text-brown'>Hand crafted <span className='text-dark'>Pottery since 1975</span></h3>
//                         <p className='text mx-auto'>
//                         Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
//                          Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. 
//                         Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.</p>
//                     </div>

//                     <div className='about-video'>
//                         <video className='about-video' autoPlay loop ref = {vidRef}>
//                             <source src = {video} type = "video/mp4" />
//                         </video>
//                         <button type = "button" className='vidPlayBtn flex flex-c' onClick={playVideo}>
//                             <FaPlay className='text-brown' size = {28} />
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default About
//222
// import React, { useRef } from 'react';
// import { FaPlay } from "react-icons/fa";

// const About = ({ title, description, videoUrl }) => {
//     const vidRef = useRef(null);

//     const playVideo = () => {
//         vidRef.current?.play(); // Use optional chaining to safely access the play() method
//     }

//     // Check if the video URL is from YouTube
//     const isYouTubeVideo = videoUrl.includes("youtube.com");

//     return (
//         <div className='about section-p'>
//             <div className='container'>
//                 <div className='about-content'>
//                     <div className='about-grid grid'>
//                         <div className='section-title'>
//                             <h3 className='text-brown'>{title}</h3>
//                             <p className='text mx-auto'>{description}</p>
//                         </div>
//                     </div>
//                 </div>

//                 <div className='about-grid grid'>
//                     <div className='about-item text-center flex'>
//                         <div className='about-item-text text-left'></div>
//                     </div>
//                 </div>

//                 <div className='about-grid grid'>
//                     <div className='section-title'>
//                         <div className='about-video'>
//                             {isYouTubeVideo ? (
//                                 <iframe
//                                     className="about-video"
//                                     src={videoUrl}  // Use the original YouTube URL
//                                     title="YouTube Video"
//                                     allowFullScreen
//                                 />
//                             ) : (
//                                 <video className='about-video' autoPlay loop ref={vidRef}>
//                                     <source src={videoUrl} type="video/mp4" />
//                                 </video>
//                             )}
//                             <button type="button" className='vidPlayBtn flex flex-c' onClick={playVideo}>
//                                 <FaPlay className='text-brown' size={28} />
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default About;

// import React, { useRef, useState } from 'react';
// import { FaPlay } from "react-icons/fa";
// import ReactPlayer from 'react-player';
// import "./About.css";

// const About = ({ title, description, videoUrl }) => {
//     const [isPlaying, setIsPlaying] = useState(false);

//     const togglePlay = () => {
//         setIsPlaying(!isPlaying);
//     };

//     // Construct the video URL
//     const constructedVideoUrl = `${process.env.REACT_APP_BACKEND}/${videoUrl}`;

//     // Log the constructed video URL to the console
//     console.log("Constructed Video URL:", constructedVideoUrl);

//     return (
//         <div className='about section-p'>
//             <div className='container'>
//                 <div className='about-content'>
//                     <div className='about-grid grid'>
//                         <div className='section-title'>
//                             <h3 style={{color:'red'}} className='text-brown'>{title}</h3>
//                             <p className='text mx-auto'>{description}</p>
//                         </div>
//                     </div>

//                     <div className='about-grid grid'>
//                         <div className='section-title'>
//                             <div className='about-video'>
//                                 <ReactPlayer
//                                     light={true}
//                                     url={constructedVideoUrl}
//                                     playing={isPlaying}
//                                     controls={true}
//                                     width='100%'
//                                     height='100%'
//                                 />
//                                 <button type="button" className='vidPlayBtn flex flex-c' onClick={togglePlay}>
//                                     <FaPlay className='text-brown' size={28} />
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default About;
import React, { useRef, useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import "./About.css"; // Import CSS file

const About = ({ title, description, videoUrl }) => {
    const vidRef = useRef(null);
    const [toggleVideo, setToggleVideo] = useState(false);
    const playVideo = () => {
        setToggleVideo(!toggleVideo);
        if(toggleVideo) vidRef.current.play();
        else vidRef.current.pause();
    };

    return (
        <div className='about section-p'>
            <div className='container'>
                <div className='about-content'>
                    <div className='about-grid grid'>
                        <div className='about-video'>
                            <video className='about-video' autoPlay loop ref={vidRef}>
                                <source src={`${process.env.REACT_APP_BACKEND}/${videoUrl}`} type='video/mp4' />
                            </video>
                            <button type='button' className='vidPlayBtn flex flex-c' onClick={playVideo}>
                                <FaPlay  style={{marginTop:'15px', marginLeft:'15px'}} className='text-brown' size={28} />
                            </button>
                        </div>
                        <div className='section-title'>
                            <h3 className='text-brown' style={{color:'#0E4D4F' , marginTop:'35px',marginBottom:'35px'}}>{title}</h3>
                            <p className='text mx-auto'>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
