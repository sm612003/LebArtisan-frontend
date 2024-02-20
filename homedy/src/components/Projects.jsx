import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import img1 from '../assets/project-1.jpeg'
import img2 from '../assets/project-2.jpeg'
import img3 from '../assets/project-3.jpeg'
// import img2 from '../assets/project-1.jpeg'

import img4 from '../assets/project-4.jpeg'

import img5 from '../assets/project-5.jpeg'
{/* <img src={img1} alt='img' />
<img src={img2} alt='img2' /> */}

{/* ROW 2 */}
//  <img src={img3} alt='img' />
// <img src={img4} alt='img' />
// <img src={img5} alt='img' /> 


const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, image }) => {
  const overlayStyles = `absolute h-full w-full transition duration-500
  bg-gray-200 bg-opacity-90 z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;


  const handleHover = () => {
    const overlay = document.getElementById(`overlay-${title}`);
    overlay.style.opacity = '0.9'; // Set the desired opacity value here
  };

  const handleHoverOut = () => {
    const overlay = document.getElementById(`overlay-${title}`);
    overlay.style.opacity = '0';
  };

  return (
    <motion.div
      variants={projectVariant}
      className="relative"
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverOut}
    >
      <div id={`overlay-${title}`} className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">
          Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla
          porttitor accumsan tincidunt.
        </p>
      </div>
      <img src={image} alt={title} />
    </motion.div>
  );
};



const Projects = () => {
  // Define array of images
  const images = [img1, img2, img3, img4, img5];

  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          Aliquam, amet dui feugiat facilisi dui. Aliquam aliquet integer ut
          fames odio in at. At magna ornare dictum lectus. Purus massa morbi
          purus nec eget eleifend ut elit.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>
          {/* Map through the images array and render Project component for each image */}
          {images.map((image, index) => (
  <Project key={index} title={`Project ${index + 1}`} image={image} />
))}


       
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
