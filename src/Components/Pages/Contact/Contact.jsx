import React from 'react'
import { Parallax } from 'react-parallax'
import { NavLink } from 'react-router-dom'
import Abtimg1 from '../Assets/mmm.jpg' 
import './Contact.css'

const Contact = () => {
  return (
    <div className='Contact'>
      <Parallax strength={200} bgImageAlt='backg' blur={{min: -5, max: 5}} bgImage={Abtimg1} bgStyle={{ filter: 'brightness(0.5)' }}>
        <div className="contact-first-cont">
        <p className='title' data-aos="fade-right" data-aos-duration="1500" data-aos-once="true">contact us</p>
        <div className="breadcrumbs" data-aos="zoom-in-up" data-aos-delay="1000" data-aos-duration="1500" data-aos-once="true">
            <p><NavLink to="/" className="contact-link">Home</NavLink> {'>'} <span>Contact</span></p>
          </div>
        </div>
      </Parallax>
      <div className="contact-body">
        <div className="contact-map" data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
      <iframe title='myLoc' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2335.167862324794!2d3.349263!3d6.6052746!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9232246d658d%3A0x7abcde53f2b47f7!2sAPTECH%20COMPUTER%20EDUCATION%20ALLEN%20AVENUE%20IKEJA!5e1!3m2!1sen!2sng!4v1679485797862!5m2!1sen!2sng" 
        width="100%" height="100%" style={{border:0}}
        allowfullscreen=""
        loading="lazy" referrerpolicy="no-referrer-when-downgrade" >
        </iframe>
          </div>
        <form data-aos="fade-up" data-aos-duration="1500" data-aos-delay="500" data-aos-once="true">
          <div className="name-sect">
            <input type="text" id='fName' placeholder='First Name'required/>
            <input type="text" id='lName' placeholder='Last Name' required/>
          </div>
          <input type="email" id='email' placeholder='Email' required/>
          <textarea name="msg" id='msg' placeholder='Enter Message'  required/>
          <button>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact