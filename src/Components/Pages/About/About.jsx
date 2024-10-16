import React, {useEffect} from 'react'
import { Parallax } from 'react-parallax'
import firstoImg from '../Assets/Homemade Pepperoni Pizza.jpeg';
import secondoImg from '../Assets/ddd.jpg'
import * as Icon from 'react-bootstrap-icons';
import para2 from '../Assets/para2.jpg'
import Abtimg1 from '../Assets/mmm.jpg' 
import chef1 from '../Assets/comm (1).jpg'
import chef2 from '../Assets/comm (2).jpg'
import chef3 from '../Assets/comm (3).jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './About.css'
import { NavLink } from 'react-router-dom'

const About = () => {
  useEffect(() => {
    AOS.init({ duration:1000});
  }, []);


  return (
    <div className='About'>
      <Parallax strength={200} bgImageAlt='backg' blur={{min: -5, max: 5}} bgImage={Abtimg1} bgStyle={{ filter: 'brightness(0.5)' }}>
      <div className="abt-first-cont">
          <p className='title' data-aos="fade-right" data-aos-duration="1500" data-aos-once="true">About us</p>
        <div className="breadcrumbs" data-aos="zoom-in-up" data-aos-delay="1000" data-aos-duration="1500" data-aos-once="true">
          <p><NavLink to="/" className="abt-link">Home</NavLink> {'>'} <span>About</span></p>
        </div>
      </div>
      </Parallax>
      <div className="firsto-Anon">
      <div className="firsto-sect">
        <p data-aos="fade-left" data-aos-duration="1500" data-aos-once="true">RICO Pizzeria</p>
        <p data-aos="fade-right" data-aos-duration="1500" data-aos-once="true">Welcome</p>
        <p className='short-inf' data-aos="flip-right"  data-aos-duration="1500" data-aos-once="true">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores beatae doloremque distinctio similique quo sapiente delectus tempore! Quis latur!</p>
      </div>
      <div className="firsto-sect" data-aos="fade-down" data-aos-duration="1500" data-aos-once="true">
        <img src={firstoImg} alt="popimg"  />
      </div>
    </div>

    <div className="secondo-Anon">
      <div className="secondo-sect" data-aos="fade-down" data-aos-duration="1500" data-aos-once="true">
        <img src={secondoImg} alt="popimg"  />
      </div>
      <div className="secondo-sect">
        <p data-aos="fade-left" data-aos-duration="1500" data-aos-once="true">Tastylicious</p>
        <p data-aos="fade-right" data-aos-duration="1500" data-aos-once="true">Recipies</p>
        <p className='short-inf' data-aos="flip-right"  data-aos-duration="1500" data-aos-once="true">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores beatae doloremque distinctio similique quo sapiente delectus tempore! Quis latur!</p>
      </div>
    </div>

    <Parallax strength={200} bgImageAlt='backg' blur={{min: -5, max: 5}} bgImage={para2} bgStyle={{ filter: 'brightness(0.5)' }}>
      <div className="parallax2-about">
        RICO PIZZAs
      </div>
    </Parallax>

    <div className="abt-story">
      <p className="story-title"> Our Story </p>
      <div className="story-box">
       <p>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam voluptatem necessitatibus nostrum omnis dolores sit vero quae id animi obcaecati incidunt natus ea, dolore harum tenetur architecto unde cupiditate enim.
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam voluptatem necessitatibus nostrum omnis dolores sit vero quae id animi obcaecati incidunt natus ea, dolore harum tenetur architecto unde cupiditate enim.
        </p>
      </div>
    </div>

    <div className="chefs">
      <p className='title'>Our Chefs</p>
      <div className="chef-sect-cont">
      <div className="chefs-sect" data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true">
        <img src={chef1} alt="jjj" />
        <p className="name">-Abimbola Richard-</p>
          <p className='chef-inf'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, deserunt labore quo nam.</p>
          <div className="chef-icon">
           <a href="facebook.com"><Icon.Facebook  className='chef-ico'/></a>
          <a href="instagram.com"><Icon.Instagram className='chef-ico' /></a>
        </div>
      </div>
      <div className="chefs-sect" data-aos="zoom-in" data-aos-duration="1300" data-aos-once="true">
        <img src={chef2} alt="jjj" />
        <p className="name">-Abimbola Richard-</p>
          <p className='chef-inf'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, deserunt labore quo nam.</p>
          <div className="chef-icon">
          <a href="facebook.com"><Icon.Facebook  className='chef-ico'/></a>
          <a href="instagram.com"><Icon.Instagram className='chef-ico' /></a>
        </div>
      </div>
      <div className="chefs-sect" data-aos="zoom-in" data-aos-duration="1600" data-aos-once="true">
        <img src={chef3} alt="jjj" />
        <p className="name">-Abimbola Richard-</p>
          <p className='chef-inf'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, deserunt labore quo nam.</p>
          <div className="chef-icon">
          <a href="facebook.com"><Icon.Facebook  className='chef-ico' /></a>
          <a href="instagram.com"><Icon.Instagram className='chef-ico' /></a>
        </div>
      </div>
      </div>
    </div>
    </div>
  )
}

export default About