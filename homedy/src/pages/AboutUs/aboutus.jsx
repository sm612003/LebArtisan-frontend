import React from 'react'
import Landing from '../../components/Landing'
import Projects from '../../components/Projects'
import MySkills from '../../components/MySkills'
import Work from '../../components/Projects'

const Aboutus = () => {
  return (
    <div style={{marginTop:'80px'}}>
      <Landing/>
      <Work/>
      <MySkills/>
    </div>
  )
}

export default Aboutus
