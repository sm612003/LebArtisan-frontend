// import React from "react";
// import img from '../assets/pexels-freestocksorg-3940335.jpg'
// import styles from '../components/contactus.module.css'

// const ContactUs = ({ contactInfo }) => {
//   return (
//     <div className="contact-us-container">
//       <div className="m-16">
//         <div className="grid place-items-end">
//           <div className="text-black font-semibold p-10">
//             <div className="p-5">
//               <h4 className="uppercase text-2xl mb-4">Hello Customer!</h4>
//               <h2 className="uppercase text-5xl">Visit our store</h2>
//             </div>
//             <div className="p-4 text-xl font-normal">
//               <p className="mb-4">Location: {contactInfo.location}</p>
//               <p className="mb-4">WhatsApp: {contactInfo.whatsapp}</p>
//               <p> Facebook:{contactInfo.facebook}</p>
//               <p> Instagram:{contactInfo.instagram}</p>

//             </div>
//             <div className="p-4">
//               <button
//                 type="button"
//                 className={styles.button}
//               >
//                 Contact Us
//               </button>
              
              
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="sticky-background">
//         <img src={img} alt="img" />
//       </div>
//     </div>
//   );
// };

// export default ContactUs;
// ContactUs.js
// import React from "react";
// import img from '../assets/pexels-freestocksorg-3940335.jpg'
// import styles from '../components/contactus.module.css'

// const ContactUs = ({ contactInfo }) => {
//   return (
//     <div className="contact-us-container">
//       <div className="m-16">
//         <div className="grid place-items-end">
//           <div className={`${styles.contactContainer}`}>
//             <div className="p-5">
//               <h4 className="uppercase text-2xl mb-4">Hello Customer!</h4>
//               <h2 className="uppercase text-5xl">Visit our store</h2>
//             </div>
//             <div className="p-4">
//               <p className="mb-4">Location: {contactInfo.location}</p>
//               <p className="mb-4">WhatsApp: {contactInfo.whatsapp}</p>
//               <p className="mb-4">Facebook: <a href={contactInfo.facebook}>{contactInfo.facebook}</a></p>
//               <p className="mb-4">Instagram: <a href={contactInfo.instagram}>{contactInfo.instagram}</a></p>
//             </div>
//             <div className="p-4">
//               <button type="button" className={`${styles.button}`}>
//                 Contact Us
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className={`${styles.stickyBackground}`}>
//         <img src={img} alt="img" />
//       </div>
//     </div>
//   );
// };

// export default ContactUs;
// import React from "react";
// import img from '../assets/pexels-freestocksorg-3940335.jpg'
// import styles from '../components/contactus.module.css'

// const ContactUs = ({ contactInfo }) => {
//   return (
//     <div className="contact-us-container">
//       <div className="m-16">
//         <div className="grid place-items-end">
//           <div className="bg-white text-black font-semibold p-10">
//             <div className="p-5">
//               <h4 className="uppercase text-2xl mb-4">Hello Customer!</h4>
//               <h2 className="uppercase text-5xl">Visit our store</h2>
//             </div>
//             <div className="p-4 text-xl font-normal">
//               <p className="mb-4">{contactInfo.location}</p>
//               <p className="mb-4">{contactInfo.whatsapp}</p>
//               <p>{contactInfo.whatsapp}</p>
//             </div>
//             <div className="p-4">
//               <button
//                 type="button"
//                 className={styles.button}
//               >
//                 Contact Us
//               </button>
              
              
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="sticky-background">
//         <img src={img} alt="img" />
//       </div>
//     </div>
//   );
// };

// export default ContactUs;
import React from "react";
import img from '../assets/pexels-freestocksorg-3940335.jpg';
import styles from '../components/contactus.module.css';

const ContactUs = ({ contactInfo }) => {
  
  return (
    <div className={styles.container}>
      <div className="bg-white ">
        <div className="absolute text-black font-semibold p-10" style={{ width: '600px', backgroundColor: 'whitesmoke', marginLeft: '60%', marginTop: '70px', height: '672px' }}>
          <div className="p-2">
            <h4 className="uppercase text-2xl mb-4">Hello Customer!</h4>
            <h2 className="uppercase text-5xl">Visit our store</h2>
          </div>
          <div className="p-4 text-xl font-normal">
            <p className="mb-4">Location: {contactInfo.location}</p>
            <p className="mb-4">WhatsApp: {contactInfo.whatsapp}</p>
            <p className="mb-4">Facebook: <a href={contactInfo.facebook}>{contactInfo.facebook}</a></p>
            <p>Instagram: <a href={contactInfo.instagram}>{contactInfo.instagram}</a></p>
          </div>
          <div className="p-4">
            <aside className={styles.button}>
              <a className="on"
                href={`https://wa.me/${contactInfo.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer" style={{color:'white',textDecoration:'none',}}
              >
                Contact Us
              </a>
            </aside>
          </div>
        </div>
        <div className={styles.stickyBackground}>
          <img src={img} style={{ height: '100vh', objectFit: 'cover' }} alt="img" className={styles.image} />
        </div>
      </div>
    </div>
  );
  }  

export default ContactUs;
