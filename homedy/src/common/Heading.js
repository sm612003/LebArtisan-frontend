import React from "react";

const Heading = ({ title, description }) => {
  return (
    <div>
<h1 className="font-bold text-4xl m-2 p-2 text-500" style={{ color: '#0E4D4F',display:'flex',alignContent:'flex-start' }}>{title}</h1>
      <p className="mb-8" style={{fontSize:'20px', marginLeft:'20px'}}>{description}</p>
    </div>
  );
};

export default Heading;
