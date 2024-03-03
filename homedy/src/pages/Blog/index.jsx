
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './styles.css';
import { FaCalendarAlt, FaUserFriends, FaMoneyBillAlt, FaWhatsapp } from 'react-icons/fa';
import  WorkProcess from '../../components/WorkProcess/WorkProcess';


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
          <h1 style={{color:'#0E4D4F'}}>{workshop.title}</h1>
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
                <h3 style={{ color: '#212523'}}>Contact Us</h3>
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
