import React from 'react';
import img from '../../assets/1.jpg';
import './styles.css';
import { Link } from 'react-router-dom';
import  WorkProcess from '../../components/WorkProcess/WorkProcess'
import { FaCalendarAlt, FaUserFriends, FaMoneyBillAlt, FaWhatsapp } from 'react-icons/fa'; // Import necessary icons

const Blog = () => {
  return (
    <section className='about_achievements'>
      <div className='container about_achievement-container'>
        <div className='about_achievements-left'>
          <img className='imagedetail' src={img} alt="" />
        </div>
        <div className='about_achievements-right'>
          <h1> Introduction to Web Development Workshop</h1>
          <p>This workshop is designed for beginners who want to learn the basics of web development. Participants will be introduced to HTML, CSS, and JavaScript, the three fundamental languages used to create websites. By the end of the workshop, attendees will have built a simple web page from scratch and will have a foundational understanding of web development concepts.</p>
          <div className='achievements_cards'>
            <article className="achievement_card">
              <span className="achievement_icon">
                <FaCalendarAlt />
              </span>
              <h3>Date</h3>
              <p>Saturday, March 5th, 2024</p>
            </article>
            <article className="achievement_card">
              <span className="achievement_icon">
                <FaUserFriends />
              </span>
              <h3>Capacity</h3>
              <p>20 limited person</p>
            </article>
            <article className="achievement_card">
              <span className="achievement_icon">
                <FaMoneyBillAlt />
              </span>
              <h3>Cost</h3>
              <p>$20 including materials</p>
            </article>
            {/* Make this section clickable */}
            <Link to="https://wa.me/1234567890" target="_blank" className="achievement_card" style={{ textDecoration: 'none' }}>
  <span className="achievement_icon">
    <FaWhatsapp />
  </span>
  <span>
    <h3 style={{color:'#212523',width:'150px'}}>Contact Us</h3>
    <p  style={{color:'#212523'}}>Contact us via WhatsApp</p>
  </span>
</Link>


          </div>
        </div>
      </div>
      <div>
        <WorkProcess />
      </div>
    </section>
  );
};

export default Blog;
