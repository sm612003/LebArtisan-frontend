// import React from "react";
// import Gallery1 from '../assets/Frame 10.png';
// import Gallery2 from '../assets/Frame 11.png';
// import Gallery3 from '../assets/Frame 9.png';
// import Gallery4 from '../assets/pexels-lil-artsy-3427720.jpg';
// import Gallery5 from '../assets/Frame 11.png';
// import Gallery6 from '../assets/Frame 10.png';

// export function ImageGallery() {
//     return (
//         <div className="container py-5">
//             <h2 className="text-center fs-1 mb-5 text-uppercase fw-bold">Image Gallery</h2>
//             <div className="row">
//                 <div className="col-md-4 px-2">
//                     <div className="my-3">
//                         <img src={Gallery1} className="img-fluid" alt="" />
//                     </div>
//                     <div className="my-3">
//                         <img src={Gallery2} className="img-fluid" alt="" />
//                     </div>
//                 </div>
//                 <div className="col-md-4 px-2">
//                     <div className="my-3">
//                         <img src={Gallery3} className="img-fluid" alt="" />
//                     </div>
//                     <div className="my-3">
//                         <img src={Gallery4} className="img-fluid" alt="" />
//                     </div>
//                 </div>
//                 <div className="col-md-4 px-2">
//                     <div className="my-3">
//                         <img src={Gallery5} className="img-fluid" alt="" />
//                     </div>
//                     <div className="my-3">
//                         <img src={Gallery6} className="img-fluid" alt="" />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
import React from "react";

export function ImageGallery({ images }) {
  return (
    <div className="container py-5">
      <h2 className="text-center fs-1 mb-5 text-uppercase fw-bold">Image Gallery</h2>
      <div className="row">
        {images.map((imageUrl, index) => (
          <div key={index} className="col-md-4 px-2">
            <div className="my-3">
              <img  src={`${process.env.REACT_APP_BACKEND}/${imageUrl}`}
 className="img-fluid" alt={`pop ${index + 1}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
