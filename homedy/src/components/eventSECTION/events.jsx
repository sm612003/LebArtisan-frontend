import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../eventSECTION/event.css';

const Events = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        // Fetch events data from the backend
        axios.get('http://localhost:5000/events/read/all')
            .then(response => {
                // Set the fetched events data to state
                setEvents(response.data);
            })
            .catch(error => {
                console.error('Error fetching events:', error);
            });
    }, []);

    return (
        <section className="venue" id="venue">
            <div className="venue-list">
                {events.map(event => (
                    <div key={event._id} className="venue-box">
                        <img src={`${process.env.REACT_APP_BACKEND}/${event.image}`} alt={event.title} />
                        <div className="venue-info">
                            <h2>{event.title}</h2>
                            <p>Date: {new Date(event.date_time).toLocaleDateString()}</p>
                            {/* Update the link to include the event ID */}
                            <Link to={`/event/${event._id}`} className="btn">More Info</Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Events;
