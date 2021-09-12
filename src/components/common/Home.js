import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

import heroImageOne from '../../assets/hero_caracal_one.jpg'
import heroImageTwo from '../../assets/hero_caracal_two.jpeg'
import heroImageThree from '../../assets/hero_caracal_three.jpg'
import heroImageFour from '../../assets/hero_caracal_four.jpg'

function Home() {
  return (
    <>
      <section className="hero-slideshow">
        <div>
          <AliceCarousel autoPlay autoPlayInterval="3000">
            <img src={heroImageOne} className="sliderimg" alt="caracal"/>
            <img src={heroImageTwo} className="sliderimg" alt="caracal"/>
            <img src={heroImageThree} className="sliderimg" alt="caracal"/>
            <img src={heroImageFour} className="sliderimg" alt="caracal"/>
          </AliceCarousel>
        </div>
      </section>
    </>
    

  )
}

export default Home