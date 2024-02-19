import React from 'react';
import '../eventSECTION/event.css'
 import img4 from '/home/souhad-moussa/lebartisan/LebArtisan-frontend/homedy/src/assets/images/pexels-antoni-shkraba-4348401.jpg'
 const Venue = () => {
    return (
        <section className="venue" id="venue">
            <div className="title">
                <h1><span>V</span>enues</h1>
            </div>
            <div className="venue-list">
                <div className="venue-box">
                    <img src={img4} alt="img" />
                    <div className="venue-info">
                        <h2>Goa</h2>
                        <p>Azaya Beach Resort, Goa</p>
                        <button className="btn">More Info</button>
                    </div>
                </div>
                <div className="venue-box">
                    <img src={img4} alt="img" />
                    <div className="venue-info">
                        <h2>Jaipur</h2>
                        <p>The Raj Palace</p>
                        <button className="btn">More Info</button>
                    </div>
                </div>
                <div className="venue-box">
                    <img src={img4} alt="img" />
                    <div className="venue-info">
                        <h2>Udaipur</h2>
                        <p>Taj Aravalli Resort and Spa</p>
                        <button className="btn">More Info</button>
                    </div>
                </div>
                <div className="venue-box">
                    <img src={img4} alt="img" />
                    <div className="venue-info">
                        <h2>Thailand</h2>
                        <p>Prince Palace Hotel</p>
                        <button className="btn">More Info</button>
                    </div>
                </div>
                <div className="venue-box">
                    <img src={img4}  alt="img" />
                    <div className="venue-info">
                        <h2>Mumbai</h2>
                        <p>Grand Banquet, Chembur</p>
                        <button className="btn">More Info</button>
                    </div>
                </div>
                <div className="venue-box">
                    <img src={img4}  alt="img" />
                    <div className="venue-info">
                        <h2>Daman</h2>
                        <p>The Deltin,Daman</p>
                        <button className="btn">More Info</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Venue;
