import React, { useState } from "react"
import { hero } from "../../dummyData.js"
import "./hero.css"
import Card from "./Card"

const Hero = () => {
  const [items, setIems] = useState(hero)
  console.log(setIems)

  return (
    <>
      <section className='hero'>
        <div className='container' style={{paddingLeft:'0',paddingRight:'0'}}>
          {items.map((item) => {
            return (
              <>
                <Card key={item.id} item={item} />
              </>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Hero
