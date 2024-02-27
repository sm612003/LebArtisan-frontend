import React from 'react'
import Eventdetails from './singlePageEvent/singlepage'
import Testimonials from '../components/Testimonials'
import { useParams } from 'react-router-dom'
const DetailsEvent = () => {
  const { eventId } = useParams();

  return (
    <div>
      <Eventdetails/>
      <Testimonials eventId={eventId} />
    </div>
  )

}

export default DetailsEvent
