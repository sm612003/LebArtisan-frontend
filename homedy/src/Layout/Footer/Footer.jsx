import React from "react";
import { Link } from "react-router-dom";
import "./Footer.module.css";
import styles from "./Footer.module.css";
import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';



const Footer = () => {



  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container__wrapper}`}>
        <div className={styles.logo__description}>
          <Link  style={{textDecoration:'none'}} to={"/"} className={styles.logo__container}>
            <div className={styles.logo__wrapper}>
              {/* <div className={styles.logo}>
                <img src={confluence} alt="" />
              </div> */}
              <p className={styles.logo__name}>Homedy</p>
            </div>
          </Link>
          <p className={styles.slogan}>
         Homedy aims to celebrate and empower local artisans by showcasing their unique creations to a broader audience.
          </p>
        </div>
        <div className={styles.company}>
          <h3 className={styles.section__title}>Website Sections</h3>
          <ul className={styles.links}>
            <Link  style={{textDecoration:'none'}} to="/">
              <li>
                Home
              </li>
            </Link>
            <Link  style={{textDecoration:'none'}} to="/product">
              <li>
                Artisans
              </li>
            </Link>
            <Link   style={{textDecoration:'none'}}to={"/workshop"}>
              <li>
Workshop              </li>
            </Link>
            <Link   style={{textDecoration:'none'}} to="/events">
              <li>
                Event
              </li>
            </Link>
          </ul>
        </div>
        <div className={styles.company}>
          <h3 className={styles.section__title}>Navigation Links</h3>
          <ul className={styles.links}>
            <Link style={{textDecoration:'none'}} to={"/about"}>
              <li>
                About Us
              </li>
            </Link>
            <Link  style={{textDecoration:'none'}} to="/signup">
              <li>
                Join as Artisan
              </li>
  {/* <h3 className={styles.section__title}>Follow Us</h3> */}
  <div className={styles.social__icons}>
    <a href="https://www.instagram.com/souhad_moussa/?igsh=MXZ0amw0cnF4aGthcQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
      <FaInstagram className={styles.icon}   style={{fill:'#0E4D4F'}}/>
    </a>
    <a href="https://www.linkedin.com/in/souhad-moussa-84ba67232?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
      <FaLinkedin className={styles.icon}   style={{fill:'#0E4D4F'}}/>
    </a>
    <a href="https://wa.me/70572631" target="_blank" rel="noopener noreferrer">
      <FaWhatsapp className={styles.icon}  style={{fill:'#0E4D4F'}} />
    </a>
  </div>


            </Link>
            {/* <a href="https://wa.me/70572631" target="_blank" style={{ textDecoration: 'none' }}>
  <li style={{ display: 'flex', alignItems: 'center' }}>
    Contact Us
  </li>
</a> */}

            {/* <Link  style={{textDecoration:'none'}} to="/login">
              <li>
              <img src={anglesRight} alt="" style={{ filter: 'brightness(1) invert(1) sepia(100%) saturate(10000%) hue-rotate(168deg)' }} />
                Login
              </li>
            </Link> */}
          </ul>
        </div>

      </div>
      <div className={styles.copyright}>
        © 2024 - Homedy All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;