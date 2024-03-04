import SocialMediaIcons from "../components/SocialMediaIcons";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import img from '../assets/pexels-sena-12377188.jpg'
import { Link } from "react-router-dom";

const Landing = ({ setSelectedPage }) => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  
  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10"
      style={{ backgroundColor: '#8B8B8B', marginTop: '32px'}}
    >
      {/* IMAGE SECTION */}
      <div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
        {isAboveLarge ? (
          <div
            className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[400px] before:w-full before:max-w-[400px]  before:h-full before:border-2 before:border-0E4D4F before:z-[-1]"
          >
            <img
              alt="profile"
              className="transition duration-500 z-10 w-full max-w-[400px] border border-blue border-t-0 border-l-0 border-r-0 rounded-t-[400px]"
              style={{ zIndex: '1',marginBottom:'100px' }}
              src={img}
            />
          </div>
        ) : (
          <img
            alt="profile"
            className="z-10 w-full max-w-[400px] md:max-w-[600px] border border-blue border-t-0 border-l-0 border-r-0 rounded-t-[400px]"
            src={img}
            style={{ zIndex: '1' }}
          />
        )}
      </div>

      {/* MAIN TEXT */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-6xl font-playfair z-10 md:text-start" style={{ color: 'white', padding: '1px' ,margin:'0 auto', width:'94%', marginBottom:'50px'}}>
            Leb {""}
            <span
              className="xs:relative xs:text-deep-blue xs:font-semibold z-20 xs:before:content-brush before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1]"
            >
              Artisan
            </span>
          </p>

          <p className="mt-10 mb-7 text-sm  md:text-start" style={{ fontSize: '23px', letterSpacing: '5px',  width:'94%',lineHeight: '30px', color: 'white', padding: '1px' ,margin:'0 auto'}}>
            your gateway to discovering and supporting the rich tapestry of Lebanese craftsmanship.
          Our platform serves as a digital marketplace where
             artisans can showcase their creations, tell their stories,
              and connect directly with customers who appreciate the value of handcrafted goods.
          </p>
        </motion.div>

        {/* CALL TO ACTIONS */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          {/* <Link
            className="rounded-sm py-3 px-7 font-semibold 
            hover:text-white transition duration-500"
            style={{ backgroundColor: '#70908B', marginLeft: '320px', textDecoration: 'none', color: 'white' }}
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Contact Me
          </Link> */}
        </motion.div>

        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          {/* Other content */}
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
