import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import img1 from '../assets/skills-image.png'

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
<section id="skills" style={{marginLeft:'50px',marginRight:'50px',paddingBottom:'7rem'}}>
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            <span className="text-red" style={{ color: '#0E4D4F' }}>Hom</span>edy
          </p>
          <div style={{ borderBottom: '2px solid #6C9192', width: '66.67%' }} />
          <p className="mt-10 mb-7">
          By bridging the gap between artisans and consumers, we aim to create opportunities
           for economic empowerment and cultural exchange, fostering a community that celebrates creativity, craftsmanship, and individuality.
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveLarge ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <img
                alt="skills"
                className="z-10"
                src={img1}
              />
            </div>
          ) : (
            <img alt="skills" className="z-10" src={img1} />
          )}
        </div>
      </div>

      {/* SKILLS */}
      <div className="md:flex md:justify-between mt-16 gap-32">
        {/* EXPERIENCE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">01</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Our Mission
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32  absolute right-0 top-0 z-[-1]"   style={{backgroundColor:'#E0EFF6'}}
          />
          </div>
          <p className="mt-5">
          At Homedy, our mission is to empower and promote artisans and local businesses by providing them with a platform to showcase their 
          handmade creations. We believe in celebrating craftsmanship and supporting the passion and talent behind every unique piece.           </p>
        </motion.div>

        {/* INNOVATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">02</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
             Our  Values
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]"  style={{backgroundColor:'#B1D4D6'}}/>
          </div>
          <p className="mt-5">
          We value authenticity in everything we do. We celebrate the unique stories, traditions,
           and craftsmanship behind each handmade item, fostering genuine connections between artisans and consumers.
          </p>
        </motion.div>
        {/* IMAGINATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">03</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
              Our Vision
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 absolute right-0 top-0 z-[-1]"  style={{backgroundColor:'#6C9192'}}/>
          </div>
          <p className="mt-5">
          Our vision at Homedy is to create a global community that values and sustains the beauty of handmade goods. We envision a world where
           artisans are recognized and rewarded for their skills, where consumers appreciate the stories and effort imbued into each handmade item
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
