import React, { useEffect } from 'react'
import { Parallax } from 'react-parallax'
import Abtimg1 from '../Assets/mmm.jpg'
import { NavLink } from 'react-router-dom'
import head1 from '../Assets/ivan-torres-MQUqbmszGGM-unsplash.jpg'
import menu1 from '../Assets/peter-bravo-de-los-rios-OklpRh8-Sns-unsplash.jpg'
import head2 from '../Assets/shourav-sheikh-xLfqx4Psf94-unsplash.jpg'
import menu2 from '../Assets/pranjall-kumar-sejqj6Eaqe8-unsplash.jpg'
import head3 from '../Assets/head3.jpg'
import menu3 from '../Assets/food-photographer-E94j3rMcxlw-unsplash.jpg'
import head4 from '../Assets/bakd-raw-by-karolin-baitinger-kTsAm3qPnvE-unsplash.jpg'
import menu4 from '../Assets/sara-julie-9Gz5bMWdGYE-unsplash.jpg'
import Aos from 'aos'
import './Menu.css'

const Menu = () => {
  useEffect(() => {
    Aos.init({ duration:1000,  });
  }, []);
  return (
    <div className="Menu">
      <Parallax strength={200} bgImageAlt='backg' blur={{min: -5, max: 5}} bgImage={Abtimg1} bgStyle={{ filter: 'brightness(0.5)' }}>
      <div className="menu-first-cont">
      <p className='title' data-aos="fade-right" data-aos-duration="1500" data-aos-once="true">Menu</p>
        <div className="breadcrumbs" data-aos="zoom-in-up" data-aos-delay="1000" data-aos-duration="1500" data-aos-once="true">
          <p><NavLink to="/" className="menu-link">Home</NavLink> {'>'} <span>Menu</span></p>
        </div>
      </div>
      </Parallax>
      <div className="menu-body">
        <div className="menu-sect">

          <div className="menu-head" data-aos="fade-right" data-aos-duration="1500" data-aos-once="true">
            <p>Pizza Sorts</p>
            <img src={head1} alt="" />
          </div>

          <div className="menu-body-cont">
          <div className="menu-sect-body" data-aos="zoom-in" data-aos-duration="1500" data-aos-once="true">
            <img src={menu1} alt="" />
            <div className="menu-inf" >
              <p className='topic'>SED VARIUS</p>
              <p>Aenean pharetra tortor dui in pellentesque</p>
              <p className='price'>$29.79</p>
            </div>
          </div>
          <div className="menu-sect-body" data-aos="zoom-in" data-aos-duration="1500" data-aos-once="true">
            <img src={menu1} alt="" />
            <div className="menu-inf">
              <p className='topic'>SED VARIUS</p>
              <p>Aenean pharetra tortor dui in pellentesque</p>
              <p className='price'>$29.79</p>
            </div>
          </div>
          <div className="menu-sect-body" data-aos="zoom-in" data-aos-duration="1500" data-aos-once="true">
            <img src={menu1} alt="" />
            <div className="menu-inf">
              <p className='topic'>SED VARIUS</p>
              <p>Aenean pharetra tortor dui in pellentesque</p>
              <p className='price'>$29.79</p>
            </div>
          </div>
          <div className="menu-sect-body" data-aos="zoom-in" data-aos-duration="1500" data-aos-once="true">
            <img src={menu1} alt="" />
            <div className="menu-inf">
              <p className='topic'>SED VARIUS</p>
              <p>Aenean pharetra tortor dui in pellentesque</p>
              <p className='price'>$29.79</p>
            </div>
          </div>
          <div className="menu-sect-body" data-aos="zoom-in" data-aos-duration="1500" data-aos-once="true">
            <img src={menu1} alt="" />
            <div className="menu-inf">
              <p className='topic'>SED VARIUS</p>
              <p>Aenean pharetra tortor dui in pellentesque</p>
              <p className='price'>$29.79</p>
            </div>
          </div>
          </div>

          <div className="menu-head" data-aos="fade-right" data-aos-duration="1500" data-aos-once="true">
            <p>Pizza</p>
            <img src={head2} alt="" />
          </div>

          <div className="menu-body-cont">
          <div className="menu-sect-body" data-aos="zoom-in" data-aos-duration="1500" data-aos-once="true">
            <img src={menu2} alt="" />
            <div className="menu-inf">
              <p className='topic'>SUSPENDISSE EU</p>
              <p>Sed fermentum eros vitae eros</p>
              <p className='price'>$45</p>
            </div>
          </div>
          <div className="menu-sect-body" data-aos="zoom-in" data-aos-duration="1500" data-aos-once="true">
            <img src={menu2} alt="" />
            <div className="menu-inf">
              <p className='topic'>SUSPENDISSE EU</p>
              <p>Sed fermentum eros vitae eros</p>
              <p className='price'>$45</p>
            </div>
          </div>
          <div className="menu-sect-body" data-aos="zoom-in" data-aos-duration="1500" data-aos-once="true">
            <img src={menu2} alt="" />
            <div className="menu-inf">
              <p className='topic'>SUSPENDISSE EU</p>
              <p>Sed fermentum eros vitae eros</p>
              <p className='price'>$45</p>
            </div>
          </div>
          <div className="menu-sect-body" data-aos="zoom-in" data-aos-duration="1500" data-aos-once="true">
            <img src={menu2} alt="" />
            <div className="menu-inf">
              <p className='topic'>SUSPENDISSE EU</p>
              <p>Sed fermentum eros vitae eros</p>
              <p className='price'>$45</p>
            </div>
          </div>
          <div className="menu-sect-body" data-aos="zoom-in" data-aos-duration="1500" data-aos-once="true">
            <img src={menu2} alt="" />
            <div className="menu-inf">
              <p className='topic'>SUSPENDISSE EU</p>
              <p>Sed fermentum eros vitae eros</p>
              <p className='price'>$45</p>
            </div>
          </div>
          </div>

          <div className="menu-head" data-aos="fade-right" data-aos-duration="1500" data-aos-once="true">
            <p>Other Snacks</p>
            <img src={head3} alt="" />
          </div>

          <div className="menu-body-cont">
          <div className="menu-sect-body" data-aos="zoom-in" data-aos-duration="1500" data-aos-once="true">
            <img src={menu3} alt="" />
            <div className="menu-inf">
              <p className='topic'>CRAS MAXIMUS</p>
              <p>Proin lacinia nisl ut ultricies posuere nulla</p>
              <p className='price'>$77.80</p>
            </div>
          </div>
          <div className="menu-sect-body" data-aos="zoom-in" data-aos-duration="1500" data-aos-once="true">
            <img src={menu3} alt="" />
            <div className="menu-inf">
              <p className='topic'>CRAS MAXIMUS</p>
              <p>Proin lacinia nisl ut ultricies posuere nulla</p>
              <p className='price'>$77.80</p>
            </div>
          </div>
          <div className="menu-sect-body" data-aos="zoom-in" data-aos-duration="1500" data-aos-once="true">
            <img src={menu3} alt="" />
            <div className="menu-inf">
              <p className='topic'>CRAS MAXIMUS</p>
              <p>Proin lacinia nisl ut ultricies posuere nulla</p>
              <p className='price'>$77.80</p>
            </div>
          </div>
          <div className="menu-sect-body" data-aos="zoom-in" data-aos-duration="1500" data-aos-once="true">
            <img src={menu3} alt="" />
            <div className="menu-inf">
              <p className='topic'>CRAS MAXIMUS</p>
              <p>Proin lacinia nisl ut ultricies posuere nulla</p>
              <p className='price'>$77.80</p>
            </div>
          </div>
          <div className="menu-sect-body" data-aos="zoom-in" data-aos-duration="1500" data-aos-once="true">
            <img src={menu3} alt="" />
            <div className="menu-inf">
              <p className='topic'>CRAS MAXIMUS</p>
              <p>Proin lacinia nisl ut ultricies posuere nulla</p>
              <p className='price'>$77.80</p>
            </div>
          </div>
          </div>

          <div className="menu-head" data-aos="fade-right" data-aos-duration="1500" data-aos-once="true">
            <p>Pizza</p>
            <img src={head4} alt="" />
          </div>

          <div className="menu-body-cont">
          <div className="menu-sect-body" data-aos="zoom-in" data-aos-duration="1500" data-aos-once="true">
            <img src={menu4} alt="" />
            <div className="menu-inf">
              <p className='topic'>CRAS EGET MAGNA</p>
              <p>Proin lacinia nisl ut ultricies posuere nulla</p>
              <p className='price'>$25.88</p>
            </div>
          </div>
          <div className="menu-sect-body" data-aos="zoom-in" data-aos-duration="1500" data-aos-once="true">
            <img src={menu4} alt="" />
            <div className="menu-inf">
              <p className='topic'>CRAS EGET MAGNA</p>
              <p>Proin lacinia nisl ut ultricies posuere nulla</p>
              <p className='price'>$25.88</p>
            </div>
          </div>
          <div className="menu-sect-body" data-aos="zoom-in" data-aos-duration="1500" data-aos-once="true">
            <img src={menu4} alt="" />
            <div className="menu-inf">
              <p className='topic'>CRAS EGET MAGNA</p>
              <p>Proin lacinia nisl ut ultricies posuere nulla</p>
              <p className='price'>$25.88</p>
            </div>
          </div>
          <div className="menu-sect-body" data-aos="zoom-in" data-aos-duration="1500" data-aos-once="true">
            <img src={menu4} alt="" />
            <div className="menu-inf">
              <p className='topic'>CRAS EGET MAGNA</p>
              <p>Proin lacinia nisl ut ultricies posuere nulla</p>
              <p className='price'>$25.88</p>
            </div>
          </div>
          <div className="menu-sect-body" data-aos="zoom-in" data-aos-duration="1500" data-aos-once="true">
            <img src={menu4} alt="" />
            <div className="menu-inf">
              <p className='topic'>CRAS EGET MAGNA</p>
              <p>Proin lacinia nisl ut ultricies posuere nulla</p>
              <p className='price'>$25.88</p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu