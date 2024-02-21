import React from 'react';
import { Link } from 'react-router-dom';
import '../eventSECTION/event.css'
 import img4 from '/home/souhad-moussa/lebartisan/LebArtisan-frontend/homedy/src/assets/images/pexels-antoni-shkraba-4348401.jpg'
 const Events = () => {
    return (
        <section className="venue" id="venue">
            <div className="title">
            </div>
            <div className="venue-list">
                <div className="venue-box">
                    <img src={img4} alt="img" />
                    <div className="venue-info">
                        <h2>Goa</h2>
                        <p>Azaya Beach Resort, Goa</p>
                        <Link to="/single-page" className="btn">More Info</Link>
                    </div>
                </div>
                <div className="venue-box">
                    <img src={img4} alt="img" />
                    <div className="venue-info">
                        <h2>Jaipur</h2>
                        <p>The Raj Palace</p>
                        <Link to="/single-page" className="btn">More Info</Link>
                    </div>
                </div>
                <div className="venue-box">
                    <img src={img4} alt="img" />
                    <div className="venue-info">
                        <h2>Udaipur</h2>
                        <p>Taj Aravalli Resort and Spa</p>
                        <Link to="/single-page" className="btn">More Info</Link>
                    </div>
                </div>
                <div className="venue-box">
                    <img src={img4} alt="img" />
                    <div className="venue-info">
                        <h2>Thailand</h2>
                        <p>Prince Palace Hotel</p>
                        <Link to="/single-page" className="btn">More Info</Link>
                    </div>
                </div>
                <div className="venue-box">
                    <img src={img4}  alt="img" />
                    <div className="venue-info">
                        <h2>Mumbai</h2>
                        <p>Grand Banquet, Chembur</p>
                        <Link to="/single-page" className="btn">More Info</Link>
                    </div>
                </div>
                <div className="venue-box">
                    <img src={img4}  alt="img" />
                    <div className="venue-info">
                        <h2>Daman</h2>
                        <p>The Deltin,Daman</p>
                        <Link to="/single-page" className="btn">More Info</Link>

                        
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Events;
