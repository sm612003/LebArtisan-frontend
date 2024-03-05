
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../project.css';
import { Link } from 'react-router-dom';
import EmptyList from '../../common/EmptyList';

const container = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};
const projectVariant = {
    hidden: { opacity: 1, scale: 0.6 }, // Adjusted opacity to 1 and scale to 0.6
    visible: { opacity: 1, scale: 1 },  // Adjusted opacity to 1 and scale to 1
};
const Project = ({ projectData }) => {
    const { BrandName, userImage, about_us } = projectData;

    
    // Define handleHover and handleHoverOut functions
    const handleHover = (event) => {
        const overlay = event.currentTarget.querySelector('.hover-overlay');
        overlay.style.opacity = '0.9';
    };

    const handleHoverOut = (event) => {
        const overlay = event.currentTarget.querySelector('.hover-overlay');
        overlay.style.opacity = '0'; // Set opacity back to 0 when hover out
    };
    
    // Define overlayStyles
    const overlayStyles = `absolute h-full w-full overlay-container hover:opacity-90 transition duration-500
        bg-gray-200 bg-opacity-90 z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;

    return (
        <div className="work-item relative">
            {/* Apply motion to the entire container */}
            <motion.div variants={projectVariant} className="relative" onMouseEnter={handleHover} onMouseLeave={handleHoverOut}>
                {/* Apply motion to the overlay */}
                <motion.div className={`${overlayStyles} hover-overlay`} style={{ opacity: '0' }}>
                    <p className="text-2xl font-playfair">{BrandName}</p>
                    <p className="mt-7">{about_us.description}</p>
                </motion.div>
                <img src={`${process.env.REACT_APP_BACKEND}/${userImage}`} alt={BrandName} className="transition-opacity duration-500" style={{ maxHeight: '100%', maxWidth: '100%' }} />
            </motion.div>
        </div>
    );
};


const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true); // State for loading indicator
    const screenWidth = window.innerWidth;

    // Conditionally add class based on screen width
    const textAlignmentClass = screenWidth >= 280 && screenWidth <= 450 ? "text-left" : "";
    const borderWidthClass = screenWidth >= 280 && screenWidth <= 450 ? "custom-border-width" : "";


    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_BACKEND}/artist/byName`);
                if (response.ok) {
                    const data = await response.json();
                    // Limiting to only 6 artists
                    const limitedData = data.slice(0, 4);
                    setProjects(limitedData);
                    setLoading(false); // Set loading to false after fetching
                } else {
                    console.error('Failed to fetch projects');
                }
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
            
        };
    
        fetchProjects();
    }, []);
    

    return (
        <section id="projects" className="pt-16 pb-48" >
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
                        <span className="text-red" style={{ color: '#0E4D4F',marginBottom:'100px' }}>TALENTED</span> ARTISANS
                    </p>


<div className="flex justify-center mt-5">
  <div className={borderWidthClass} style={{ borderBottom: '2px solid #6C9192', width: '66.67%' }} />
</div>

                </div>
                <p className={`mt-10 mb-10 ${textAlignmentClass}`} style={{ fontSize: '20px' }}>
    Discover our talented artisans who bring creativity and skill to every project. 
    From innovative designs to masterful craftsmanship, our artisans 
    infuse passion into their work, creating unique and exceptional experiences for you.
</p>
            </motion.div>
            <div className="flex justify-center">
            {loading ? (
                <EmptyList/>
                ) : (
                <motion.div
                    className="sm:grid sm:grid-cols-3"
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {/* ROW 1 */}
                    <div className={`flex justify-center  items-center p-10 text-2xl font-playfair font-semibold ${textAlignmentClass}`}
                        style={{ backgroundColor: '#6C9192',maxHeight:'100%',maxWidth:'100%'}}
                    >
Each piece they create is a testament to their passion, skill, and unwavering dedication to their art.                     </div>
                    {projects.map((project, index) => (
                        <Project key={index} projectData={project} />
                    ))}
                     {/* Another div similar to the one above */}
                     
                    <div className={`flex justify-center  items-center p-10 text-2xl font-playfair font-semibold ${textAlignmentClass}`}
                    style={{ backgroundColor: '#E1E1E0', maxHeight: '100%', maxWidth: '100%' }}
                    >
                       Through their hands, they breathe life into the mundane,
                        turning simple materials into extraordinary masterpieces.
                    </div>
                </motion.div>
                
                 )}
                 

            </div>
            <div className='style button'>
    <Link to="/product" className="view-more-button" style={{ textDecoration: 'none' }}>View More</Link>
</div>

        </section>
    );
};

export default Projects;
