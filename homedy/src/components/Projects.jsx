// import LineGradient from "../components/LineGradient";
// import { motion } from "framer-motion";
// import img1 from '../assets/project-1.jpeg';
// import img2 from '../assets/project-2.jpeg';
// import img3 from '../assets/project-3.jpeg';
// import img4 from '../assets/project-4.jpeg';
// import img5 from '../assets/project-5.jpeg';
// // import '../components/project.css'

// const container = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.2,
//     },
//   },
// };

// const projectVariant = {
//   hidden: { opacity: 0, scale: 0.8 },
//   visible: { opacity: 1, scale: 1 },
// };

// const getImage = (title) => {
//   const images = {
//     "Project 1": img1,
//     "Project 2": img2,
//     "Project 3": img3,
//     "Project 4": img4,
//     "Project 5": img5,
//   };

//   return images[title];
// };


// const Project = ({ title }) => {
//   const overlayStyles = `absolute h-full w-full overlay-container hover:opacity-90 transition duration-500
//   bg-gray-200 bg-opacity-90 z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;

// const image = getImage(title);

  
// const handleHover = (event) => {
//   const overlay = event.currentTarget.querySelector('.hover-overlay');
//   overlay.style.opacity = '0.9';
// };

// const handleHoverOut = (event) => {
//   const overlay = event.currentTarget.querySelector('.hover-overlay');
//   overlay.style.opacity = '0';
// };

// return (
//   <motion.div variants={projectVariant} className="relative" onMouseEnter={handleHover} onMouseLeave={handleHoverOut}>
//     <div className={`${overlayStyles}`}>
//       <p className="text-2xl font-playfair">{title}</p>
//       <p className="mt-7 hover-overlay" style={{ opacity: '0' }}>
//         Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla
//         porttitor accumsan tincidunt.
//       </p>
//     </div>
//     <img src={image} alt={title} className="w-full h-auto transition-opacity duration-500" />
//   </motion.div>
// );


// }
// const Projects = () => {
//   const images = [img1, img2, img3, img4, img5];

//   return (
//     <section id="projects" className="pt-48 pb-48">
//       {/* HEADINGS */}
//       <motion.div
//         className="md:w-2/5 mx-auto text-center"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.5 }}
//         transition={{ duration: 0.5 }}
//         variants={{
//           hidden: { opacity: 0, y: -50 },
//           visible: { opacity: 1, y: 0 },
//         }}
//       >
//         <div>
        
//   <p className="font-playfair font-semibold text-4xl">
//     <span className="text-red" style={{ color: '#0E4D4F' }}>PRO</span>JECTS
//   </p>

//   <div className="flex justify-center mt-5">
//   <div style={{ borderBottom: '2px solid #6C9192', width: '66.67%' }} />
// </div>


//         </div>
//         <p className="mt-10 mb-10">
//           Aliquam, amet dui feugiat facilisi dui. Aliquam aliquet integer ut
//           fames odio in at. At magna ornare dictum lectus. Purus massa morbi
//           purus nec eget eleifend ut elit.
//         </p>
//       </motion.div>

//       {/* PROJECTS */}
//       <div className="flex justify-center">
//         <motion.div
//           className="sm:grid sm:grid-cols-3"
//           variants={container}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.2 }}
//         >
//           {/* ROW 1 */}
//           <div
//   className="flex justify-center text-center items-center p-10 bg-red max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
//   style={{ backgroundColor: '#6C9192' }}
// >
//   BEAUTIFUL USER INTERFACES
// </div>

//           {images.map((image, index) => (
//             <Project key={index} title={`Project ${index + 1}`} />
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Projects;
import React, {useState} from 'react';
import {works} from "../../src/constants/data.js";
import "../components/Work/Work.css";
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
                    <h3 className='text-brown'>Our <span className='Artisan'>Artisans</span></h3>
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
                <div className=' style button' >
    <Link to="/services" className=" view-more-button">View More</Link>
</div>

            </div>
        </div>
    </div>
  )
}

export default Work