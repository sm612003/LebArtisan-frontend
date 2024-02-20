import React, { useTransition, useState } from "react";
import TabButton from "../../components/tabbutton";
import img from '/home/souhad-moussa/lebartisan/LebArtisan-frontend/homedy/src/assets/11.jpg'
import { color } from "framer-motion";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
<ul className="list-disc pl-2  text-E0EFF6"  style={{ color: '#0E4D4F' , paddingRight: '28rem' }}> {/* Add text-E0EFF6 class for text color */}
<li>Location 1</li>
        <li>Location 2</li>
      
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2 text-red-500" style={{ color: '#0E4D4F' }}> {/* Add text-red-500 class */}
       <li>Date and Time 1</li>
        <li>Date and Time 2</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2 text-red-500"  style={{ color: '#0E4D4F' , paddingLeft: '25rem' }}> {/* Add text-red-500 class */}
  <li>Artisan's Name 1</li>
        <li>Artisan's Name 2</li>
      </ul>
    ),
  },
];

const Eventdetails= () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
<div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 mt-28" style={{ backgroundColor: '#E0EFF6' }}> {/* Add mt-28 class for top margin */}
        <img src={img} width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-red-500 mb-4" style={{ color: '#0E4D4F' }}>Event</h2> {/* Add text-red-500 class */}
          <p className="text-base lg:text-lg text-red-500" style={{ color: '#0E4D4F' }}> {/* Add text-red-500 class */}
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
            Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8 space-x-36"> {/* Add space-x-4 class for gap */}
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Eventdetails;
