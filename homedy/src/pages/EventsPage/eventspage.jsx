import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import { ImageGallery } from '../../components/ImageGallery';
import Events from '../../components/eventSECTION/events';
import  Eventdetails from '../singlePageEvent/singlepage';
import HeroEvent from '../../components/heroEvent/HeroEvent';

const Eventspage = () => {
  return (
    <div style={{marginTop:'80px'}}>
      <HeroEvent/>
      <Events/>
      {/* < Eventdetails/> */}
    </div>
  )
}

export default Eventspage;
