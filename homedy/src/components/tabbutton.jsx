import React from "react";
import { motion } from "framer-motion";

const variants = {
    default: { width: 0 ,backgroundColor: "#0E4D4F"},
    active: { width: "calc(100% - 0.75rem)", backgroundColor: "#0E4D4F" }, // Add backgroundColor property
  };
  

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "text-white" : "text-[#0E4D4F]";

  return (
    <button onClick={selectTab}>
<p className={`mr-3 font-semibold hover:text-white`} style={{ color: '#0E4D4F' }}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-primary-500 mt-2 mr-3"
      ></motion.div>
    </button>
  );
};

export default TabButton;