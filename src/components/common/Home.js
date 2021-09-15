import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

import heroImageOne from '../../assets/hero_caracal_one.jpg'
import heroImageTwo from '../../assets/hero_caracal_two.jpeg'
import heroImageThree from '../../assets/hero_caracal_three.jpg'
import heroImageFour from '../../assets/hero_caracal_four.jpg'
import { isAuthenticated } from '../../lib/auth'
import { Link } from 'react-router-dom'

function Home() {
  const isAuth = isAuthenticated()
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
      {isAuth && (
        <div className="column is-three-fifths is-offset-one-fifth">
          <div className="card home-card">
            <div className="card-content">
              <div className="box home-box">
                <h1 className="centered">Find Floppas Now</h1>
                <Link to="/users" className="button is-light is-danger">
                Start
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
      {!isAuth && (
        <div className="column is-three-fifths is-offset-one-fifth">
          <div className="card home-card">
            <div className="card-content">
              <div className="box home-box">
                <h1 className="centered">
                  Find Floppas is the premier dating app for the wildest cats...
                </h1>
                <Link to="/auth/register" className="button is-light is-danger">
                Register Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      )} 
    </>
    

  )
}

export default Home