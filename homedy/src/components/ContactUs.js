import React from "react";
import img from '../assets/pexels-freestocksorg-3940335.jpg'
import styles from '../components/contactus.module.css'

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <div className="m-16">
        <div className="grid place-items-end">
          <div className="bg-white text-black font-semibold p-10">
            <div className="p-5">
              <h4 className="uppercase text-2xl mb-4">Hello Customer!</h4>
              <h2 className="uppercase text-5xl">Visit our store</h2>
            </div>
            <div className="p-4 text-xl font-normal">
              <p className="mb-4">21 W. 46th St., New York, United States</p>
              <p className="mb-4">Bigboom@domain.com</p>
              <p>+84 (800) 3333 4567</p>
            </div>
            <div className="p-4">
              <button
                type="button"
                className={styles.button}
              >
                Contact Us
              </button>
              
              
            </div>
          </div>
        </div>
      </div>
      <div className="sticky-background">
        <img src={img} alt="img" />
      </div>
    </div>
  );
};

export default ContactUs;
