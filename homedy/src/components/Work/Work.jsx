
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../project.css';
import { Link } from 'react-router-dom';

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

    const overlayStyles = `absolute h-full w-full overlay-container hover:opacity-90 transition duration-500
    bg-gray-200 bg-opacity-90 z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
    ;

    const handleHover = (event) => {
        const overlay = event.currentTarget.querySelector('.hover-overlay');
        overlay.style.opacity = '0.9';
    };

    const handleHoverOut = (event) => {
        const overlay = event.currentTarget.querySelector('.hover-overlay');
        overlay.style.opacity = '0'; // Set opacity back to 0 when hover out
    };

    return (
        <motion.div variants={projectVariant} className="relative" onMouseEnter={handleHover} onMouseLeave={handleHoverOut}>
            <div className={`${overlayStyles}`}>
                <p className="text-2xl font-playfair">{BrandName}</p>
                <p className="mt-7 hover-overlay" style={{ opacity: '0' }}>
                    {about_us.description}
                </p>
            </div>
            <img src={`${process.env.REACT_APP_BACKEND}/${userImage}`} alt={BrandName} className="  transition-opacity duration-500"  style={{maxHeight:'100%',maxWidth:'100%'}}/>
        </motion.div>
    );
};



const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch('http://localhost:5000/artist/byName');
                if (response.ok) {
                    const data = await response.json();
                    // Limiting to only 6 artists
                    const limitedData = data.slice(0, 5);
                    setProjects(limitedData);
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
                        <span className="text-red" style={{ color: '#0E4D4F' }}>TALENTED</span> ARTISANS
                    </p>

                    <div className="flex justify-center mt-5">
                        <div style={{ borderBottom: '2px solid #6C9192', width: '66.67%' }} />
                    </div>


                </div>
                <p className="mt-10 mb-10" style={{fontSize:'20px'}}>
    Discover our talented artisans who bring creativity and skill to every project. 
    From innovative designs to masterful craftsmanship, our artisans 
    infuse passion into their work, creating unique and exceptional experiences for you.
</p>
            </motion.div>
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
                        className="flex justify-center text-center items-center p-10  text-2xl font-playfair font-semibold"
                        style={{ backgroundColor: '#6C9192',maxHeight:'100%',maxWidth:'100%'}}
                    >
                        Crafted with passion, each piece tells a story.
                    </div>
                    {projects.map((project, index) => (
                        <Project key={index} projectData={project} />
                    ))}
                </motion.div>
 
            </div>
            <div className='style button' style={{ marginLeft: '45%' }}>
    <Link to="/services" className="view-more-button" style={{ textDecoration: 'none' }}>View More</Link>
</div>

        </section>
    );
};

export default Projects;
