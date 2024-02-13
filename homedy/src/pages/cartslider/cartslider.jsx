import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img2 from '../../assets/unsplash_EWIfwcLPALQ.png';
import styles from '../cartslider/cardslider.module.css';

function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#E1E1E0 " }}
      onClick={onClick}
    />
  );
}

function Carousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    nextArrow: <Arrow  />,
    prevArrow: <Arrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

    
  return (
    <div className={`${styles.container} ${styles.carouselContainer}`}>
        <div className={styles.title}>
            <h1>Events</h1>
        </div>
      <Slider {...settings}>
        <div className="card">
             <img src={img2} alt="Image 1" style={{ width: "80%", height: "275px" }} />
             <div className="card-body">
             <h3>hello</h3>
             <p>hi hhhh</p>

             </div>

        </div>
        <div className="card">
           <img src={img2} alt="Image 1"style={{ width: "80%", height: "275px" }}/>
           <div className="card-body">
           <h3>hello</h3>
           <p>hi hhhh</p>


           </div>

        </div>
        <div className="card">
           <img src={img2} alt="Image 1"   style={{ width: "80%", height: "275px" }} />
           <div className="card-body">
           <h3>hello</h3>
           <p>hi hhhh</p>

           </div>

        </div>
        <div className="card">
          <img src={img2} alt="Image 1"   style={{ width: "80%", height: "275px",objectFit:'cover' }} />
          <div className="card-body">
          <h3>hello</h3>
          <p>hi hhhh</p>

          </div>

        </div>
        <div className="card">
            <img src={img2} alt="Image 1"  style={{ width: "80%", height: "275px"}} />
            <div className="card-body">
            <h3>hello</h3>
            <p>hi hhhh</p>

            </div>
        </div>
        <div className={styles.card}>
           <img src={img2} alt="Image 2" style={{ width: "80%", height: "275px" }} />
         <div className="card-body">
         <h3>hello</h3>
            <p>hi hhhh</p>

         </div>


        </div>
      </Slider>
    </div>
  );
}
//   return (
  
        // <Slider {...settings}>
        //   <div>
        //     <img src={img} alt="Image 1" style={{ width: "100%", height: "304px" }} />
        //   </div>
        //   <div>
        //     <img src={img1} alt="Image 2" style={{ width: "100%", height: "304px" }} />
        //   </div>
        //   <div>
        //     <img src={img2} alt="Image 3" style={{ width: "100%", height: "304px" }} />
        //   </div>
        //   <div>
        //     <img src={img3} alt="Image 4" style={{ width: "100%", height: "auto" }} />
        //   </div>
        //   <div>
        //     <img src={img1} alt="Image 5" style={{ width: "100%", height: "304px" }} />
        //   </div>
        //   <div>
        //     <img src={img2} alt="Image 6" style={{ width: "100%", height: "304px" }} />
        //   </div>
        //   <div>
        //     <img src={img3} alt="Image 7" style={{ width: "100%", height: "304px" }} />
        //   </div>
        //   <div>
        //     <img src={img1} alt="Image 8" style={{ width: "100%", height: "304px" }} />
        //   </div>
        // </Slider>
   
//   );
// }

export default Carousel;
