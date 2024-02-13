import React from 'react'
import HeroSectionHomepage from '../hersection/herosection'
import CardSlider from '../cartslider/cartslider'
import Aboutus from '../sectionaboutus/setionABoutUs'

export default function Home() {
  return (
    <div>
    <HeroSectionHomepage/>
    <CardSlider/>
    {/* <Aboutus/> */}
    </div>
  )
}
