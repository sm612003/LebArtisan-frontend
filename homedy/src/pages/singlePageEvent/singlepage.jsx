import React, { useState, useEffect } from "react";
import TabButton from "../../components/tabbutton";
import axios from 'axios';
import img from '/home/souhad-moussa/lebartisan/LebArtisan-frontend/homedy/src/assets/11.jpg';
import { useParams } from "react-router-dom";

const Eventdetails = () => {
  const [event, setEvent] = useState(null);
  const [tab, setTab] = useState('location');

  // Retrieve event ID from URL parameter
  const { eventId } = useParams();

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/events/${eventId}`);
        setEvent(response.data);
      } catch (error) {
        console.error('Error fetching event details:', error);
      }
    };
    fetchEvent();
  }, [eventId]);

  const TAB_DATA = [
    {
      title: "Location",
      id: "location",
      content: (
        <ul className="list-disc pl-2 text-E0EFF6" style={{ color: '#0E4D4F' }}>
          <li>Location: {event && event.location}</li>
        </ul>
      ),
    },
    {
      title: "Time",
      id: "date_time",
      content: (
        <ul className="list-disc pl-2 text-E0EFF6" style={{ color: '#0E4D4F' }}>
          <li>Start Time: {event && event.start_time}</li>
          <li>End Time: {event && event.end_time}</li>
        </ul>
      ),
    },

  ];

  const handleTabChange = (id) => {
    setTab(id);
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 mt-28" style={{ backgroundColor: '#E0EFF6' }}>
        <img src={img} width={500} height={500} alt="Event" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-red-500 mb-4" style={{ color: '#0E4D4F' }}>{event && event.title}</h2>
          <p className="text-base text-E0EFF6" style={{ color: '#0E4D4F' }}>
            {event && event.description}
          </p>
          <div className="flex flex-row justify-start mt-8 space-x-36">
            {TAB_DATA.map((tabItem) => (
              <TabButton
                key={tabItem.id}
                selectTab={() => handleTabChange(tabItem.id)}
                active={tab === tabItem.id}
              >
                {tabItem.title}
              </TabButton>
            ))}
          </div>
          <div className="mt-8">
            {event && TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Eventdetails;
