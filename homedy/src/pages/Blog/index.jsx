// import React from 'react';
// import img from '../../assets/1.jpg';
// import './styles.css';
// import { Link } from 'react-router-dom';
// import  WorkProcess from '../../components/WorkProcess/WorkProcess'
// import { FaCalendarAlt, FaUserFriends, FaMoneyBillAlt, FaWhatsapp } from 'react-icons/fa'; // Import necessary icons

// const Blog = () => {
//   return (
//     <section className='about_achievements'>
//       <div className='container about_achievement-container'>
//         <div className='about_achievements-left'>
//           <img className='imagedetail' src={img} alt="" />
//         </div>
//         <div className='about_achievements-right'>
//           <h1> Introduction to Web Development Workshop</h1>
//           <p>This workshop is designed for beginners who want to learn the basics of web development. Participants will be introduced to HTML, CSS, and JavaScript, the three fundamental languages used to create websites. By the end of the workshop, attendees will have built a simple web page from scratch and will have a foundational understanding of web development concepts.</p>
//           <div className='achievements_cards'>
//             <article className="achievement_card">
//               <span className="achievement_icon">
//                 <FaCalendarAlt />
//               </span>
//               <h3>Date</h3>
//               <p>Saturday, March 5th, 2024</p>
//             </article>
//             <article className="achievement_card">
//               <span className="achievement_icon">
//                 <FaUserFriends />
//               </span>
//               <h3>Capacity</h3>
//               <p>20 limited person</p>
//             </article>
//             <article className="achievement_card">
//               <span className="achievement_icon">
//                 <FaMoneyBillAlt />
//               </span>
//               <h3>Cost</h3>
//               <p>$20 including materials</p>
//             </article>
//             {/* Make this section clickable */}
//             <Link to="https://wa.me/1234567890" target="_blank" className="achievement_card" style={{ textDecoration: 'none' }}>
//   <span className="achievement_icon">
//     <FaWhatsapp />
//   </span>
//   <span>
//     <h3 style={{color:'#212523',width:'150px'}}>Contact Us</h3>
//     <p  style={{color:'#212523'}}>Contact us via WhatsApp</p>
//   </span>
// </Link>


//           </div>
//         </div>
//       </div>
//       <div>
//         <WorkProcess />
//       </div>
//     </section>
//   );
// };

// export default Blog;
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';import './styles.css';
import { FaCalendarAlt, FaUserFriends, FaMoneyBillAlt, FaWhatsapp } from 'react-icons/fa';
import  WorkProcess from '../../components/WorkProcess/WorkProcess'


const WorkshopDetails = () => {
  const [workshop, setWorkshop] = useState(null);
  const { id } = useParams(); // Get the id parameter from the URL

  useEffect(() => {
    // Fetch workshop data based on the id parameter
    const fetchWorkshop = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND}/workshop/${id}`);
        const data = await response.json();
        setWorkshop(data);
      } catch (error) {
        console.error('Error fetching workshop:', error);
      }
    };

    fetchWorkshop();
  }, [id]); // Fetch workshop data whenever id changes

  // Render loading state if workshop is not fetched yet
  if (!workshop) {
    return <div>Loading...</div>;
  }
  return (
    <section className='about_achievements'>
      <div className='container about_achievement-container'>
        <div className='about_achievements-left'>
          <img className='imagedetail' 
           src={`${process.env.REACT_APP_BACKEND}/${workshop.image}`} alt="" />
        </div>
        <div className='about_achievements-right'>
          <h1>{workshop.title}</h1>
          <p>{workshop.description}</p>
          <div className='achievements_cards'>
            <article className="achievement_card">
              <span className="achievement_icon">
                <FaCalendarAlt />
              </span>
              <h3>Date</h3>
              <p>{new Date(workshop.date_time).toLocaleString()}</p>
            </article>
            <article className="achievement_card">
              <span className="achievement_icon">
                <FaUserFriends />
              </span>
              <h3>Capacity</h3>
              <p>{workshop.capacity}</p>
            </article>
            <article className="achievement_card">
              <span  className="achievement_icon">
                <FaMoneyBillAlt />
              </span>
              <h3>Cost</h3>
              <p>${workshop.cost}</p>
            </article>
            <a href={`https://wa.me/${workshop.artisanId.userId.whatsapp}`} target="blank" className="achievement_card" style={{ textDecoration: 'none' }}>
              <span className="achievement_icon">
                <FaWhatsapp />
              </span>
              <span>
                <h3 style={{ color: '#212523', width: '150px' }}>Contact Us</h3>
                <p style={{ color: '#212523' }}>Contact us via WhatsApp</p>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div>
      <WorkProcess materials={workshop.materials} />
      </div>
    </section>
  );
};

export default WorkshopDetails;
