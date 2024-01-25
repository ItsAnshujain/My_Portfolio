import React from 'react'
import Profile from '../../assets/profile.jpg'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import './home.css'
const Home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} alt="" className='home_img'/>

      <div className="home_content">
        <div className="home_data">
          <h1 className="home_title">
            <span>I'm Anshu Jain </span><h4>Full Stack Web Developer</h4> 
          </h1>
          <p className="home_description">I'm Anshu Jain, a passionate and curious computer science student with a drive to explore and innovate in the world of technology. As a lifelong learner, I'm constantly seeking opportunities to expand my skill set. Proficient in languages like C++, Core and advance Java. I have also gained experience in database management, front-end and back-end development, and React js.</p>
          <Link to='/about' className='button'>
            More about me{' '}
            <span className='button_icon'>
              <FaArrowRight/>
            </span>
          </Link>
        </div>
      </div>
      <div className="color_block"></div>
    </section>
  )
}

export default Home
