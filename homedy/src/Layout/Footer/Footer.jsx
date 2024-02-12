import React, { useState, useEffect } from "react";
import style from "./Footer.module.css";
import { Link, NavLink, useNavigate } from "react-router-dom";


const Footer = () => {
  const navigate= useNavigate()
  const [isloading, setIsLoading] = useState(true);
  const [companyInfos, setCompanyInfos] = useState([]);
 
  // useEffect(() => {
  //   const fetchCompanyInfo = async () => {
  //     try {
  //       const response = await axios.get(
  //         `${import.meta.env.VITE_REACT_APP_PATH}/company/`, {withCredentials: true}
  //       );
  //       setCompanyInfos(response.data);
  //       setIsLoading(false);
  //     } catch (error) {
  //       console.error(error);
  //       setIsLoading(false);
  //     }
  //   };
  //   fetchCompanyInfo();
  // }, []);

  return (
    <footer>
      <h3 className={style.footerCopyright}>
        Copyright , All rights reserved | Powered By : <u><NavLink to="/developers" style={{color:"white"}}>Codi Team</NavLink></u>
      </h3>
    </footer>
  
  )
};
  
export default Footer;
