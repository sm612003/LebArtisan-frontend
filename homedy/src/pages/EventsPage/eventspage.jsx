import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import { ImageGallery } from '../../components/ImageGallery';
import Events from '../../components/eventSECTION/events';
import  Eventdetails from '../singlePageEvent/singlepage';

const Eventspage = () => {
  return (
    <div>
      <Events/>
      {/* < Eventdetails/> */}
    </div>
  )
}

export default Eventspage;
