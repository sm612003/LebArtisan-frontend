// import React from 'react';
// import { work_process } from '../../data/Data.js';
// import "./WorkProcess.css";

// const WorkProcess = () => {
//   return (
//     <div className='workprocess section-p bg-white' id = "workprocess">
//       <div className='container'>
//         <div className='workprocess-content'>
//             <div className='section-title'>
//                 <span className="text-red" style={{ color: '#0E4D4F',fontSize:'50px' }}>Materials</span>

//                 <p className='text'>I offer the right solutions for your digital business.</p>
//             </div>

//             <div className='workprocess-list grid'>
//                 {
//                     work_process.map((workprocess, index) => {
//                         return (
//                             <div className='workprocess-item text-center' key = {index}>
//                                 <div className='workprocess-item-title flex'>
//                                     <span className='text-brown fw-7'>0 {index + 1}</span>
//                                     <h3 className='text-dark fw-5'>{workprocess.title}</h3>
//                                 </div>
//                                 <p className='text'>{workprocess.paragraph}</p>
//                             </div>
//                         )
//                     })
//                 }
//             </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default WorkProcess
import React from 'react';
import "./WorkProcess.css";

const WorkProcess = ({ materials }) => {
  return (
    <div className='workprocess section-p bg-white' id="workprocess">
      <div className='container'>
        <div className='workprocess-content'>
          <div className='section-title'>
            <span className="text-red" style={{ color: '#0E4D4F', fontSize: '50px' }}>Materials</span>
            <p className='text'>I offer the right solutions for your digital business.</p>
          </div>

          <div className='workprocess-list grid'>
            {materials.map((material, index) => {
              return (
                <div className='workprocess-item text-center' key={index}>
                  <div className='workprocess-item-title flex'>
                    <span className='text-brown fw-7'>0 {index + 1}</span>
                    <h3 className='text-dark fw-5'>{material.name}</h3>
                  </div>
                  <p className='text'>{material.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkProcess;
