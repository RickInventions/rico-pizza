import React, {useEffect} from 'react'
import AOS from 'aos'
import { Parallax } from 'react-parallax'
import img1 from '../Assets/type1.jpg'
import img2 from '../Assets/type2.jpg'
import img3 from '../Assets/type3.jpg'
import firstoImg from '../Assets/Homemade Pepperoni Pizza.jpeg';
import parallax1 from '../Assets/parallax-1.jpg'
import gall1 from '../Assets/gall-home (1).jpg'
import gall2 from '../Assets/gall-home (2).jpg'
import gall3 from '../Assets/gall-home (3).jpg'
import grid0 from '../Assets/Pepperoni Pizza.jpeg'
import grid1 from '../Assets/grid1.jpg'
import grid2 from '../Assets/grid2.jpg'
import grid3 from '../Assets/grid3.jpg'
import grid4 from '../Assets/grid4.jpg'
import grid5 from '../Assets/grid5.jpg'
import * as Icon from 'react-bootstrap-icons';
import { NavLink } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import Comments from './Comments.json'
import { Navigation, Pagination, A11y, EffectFlip, Keyboard } from 'swiper/modules';
import './Home.css'

const Home = () => {
  useEffect(() => {
    AOS.init({ duration:1000,  });
  }, []);

  return (
    <div className='Home'>
              <div id="carouselExampleCaptions" class="carousel slide carousel-fade">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item">
              <img src={img1} alt="img1"/>
            <div class="carousel-caption">
            <div className="out-sect">
              <p>Welcome to</p>
              <p>Rico pizzas</p>
            </div>
            <div className="in-sect">
              <p className='info'>Check our exclusive collection of dishes to be served at the perfect times of the day.</p>
              <NavLink to="/Menu" className="in-btn"><button>Menu</button></NavLink>
            </div>
          </div>
        </div>
        <div class="carousel-item" >
          <img src={img2} alt="img2"/>
          <div class="carousel-caption">
            <div className="out-sect">
              <p>Welcome to</p>
              <p>Rico pizzas</p>
            </div>
            <div className="in-sect">
              <p className='info'>Scroll through our breath-taking flavours and recipies made with top of the town ingredients, provided with lots of nutrients.</p>
              <NavLink to="/Menu" className="in-btn"><button>Gallery</button></NavLink>
            </div>
          </div>
        </div>
        <div class="carousel-item active" >
          <img src={img3} alt="img3"/>
          <div class="carousel-caption">
            <div className="out-sect">
              <p data-aos="fade-left" data-aos-once="true">Welcome to</p>
              <p data-aos="fade-right" data-aos-delay="500" data-aos-once="true">Rico pizzas</p>
            </div>
            <div className="in-sect">
              <p className='info'  data-aos="flip-right" data-aos-delay="1000" data-aos-duration="1500" data-aos-once="true" >Browse through our landing page and see for yourself or great offers and excusite Pizza or go to our web to order now!</p>
              <a href="www.google.com" className='in-btn'><button data-aos="flip-left" data-aos-delay="800" data-aos-duration="1200" data-aos-once="true">Official Web</button></a>
            </div>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    <div className="firsto-Anon">
      <div className="firsto-sect">
        <p data-aos="fade-left" data-aos-duration="1500" data-aos-once="true">RICO Pizzeria</p>
        <p data-aos="fade-right" data-aos-duration="1500" data-aos-once="true">Welcome</p>
        <p className='short-inf' data-aos="flip-right"  data-aos-duration="1500" data-aos-once="true">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores beatae doloremque distinctio similique quo sapiente delectus tempore! Quis latur!</p>
        <NavLink to="/About"><h4 className="link-btn"  data-aos="flip-left" data-aos-duration="1500" data-aos-once="true">About Us? <Icon.ArrowRight/> </h4></NavLink>
      </div>
      <div className="firsto-sect" data-aos="fade-down" data-aos-duration="1500" data-aos-once="true">
        <img src={firstoImg} alt="popimg"  />
      </div>
    </div>

    <Parallax strength={200} bgImageAlt='backg' blur={{min: -12, max: 15}} bgImage={parallax1}>
      <div className="discover-Anon">
          <div className="in-cont">
            <p data-aos="fade-left" data-aos-duration="1500" data-aos-once="true">Discover</p>
            <p data-aos="fade-right" data-aos-duration="1500" data-aos-once="true">RICO PIZZAS</p>
          </div>
      </div>
    </Parallax>

      <div className="discover-list-Anon">
        <div className="discover-list-sect" data-aos="fade-down" data-aos-duration="1500" data-aos-once="true">
          <img src={gall1} alt="first pic" />
          <h2>Premium Recipies</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. .</p>
          <NavLink to="/Gallery/toppings" ><h4 className="link-btn">Go To Gallery <Icon.ArrowRight/> </h4></NavLink>
        </div>
        <div className="discover-list-sect" data-aos="fade-down" data-aos-delay="200" data-aos-duration="1500" data-aos-once="true">
          <img src={gall2} alt="first pic" />
          <h2>Numerous Toppings</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. .</p>
          <NavLink to="/Gallery/toppings" ><h4 className="link-btn">Go To Gallery <Icon.ArrowRight/> </h4></NavLink>
        </div>
        <div className="discover-list-sect" data-aos="fade-down" data-aos-delay="400" data-aos-duration="1500" data-aos-once="true">
          <img src={gall3} alt="first pic" />
          <h2>A+ Chefs</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. .</p>
          <NavLink to="/Gallery/toppings" ><h4 className="link-btn">Go To Gallery <Icon.ArrowRight/> </h4></NavLink>
        </div>
      </div>

      <div className="discover-grid-Anon">
        <div className="in-cont">
          <p data-aos="fade-left" data-aos-duration="1500" data-aos-once="true">Discover</p>
          <p data-aos="fade-right" data-aos-duration="1500" data-aos-once="true">Our Menu</p>
        </div>
        <div class="discover-grid">
          <div id="item-0" data-aos="fade-right" data-aos-delay="300" data-aos-duration="1500" data-aos-once="true">
            <img src={grid0} alt="imag" />
            <NavLink to="/Menu/toppings"><p className="grid-btn">Hot Pizza</p></NavLink>
          </div>
          <div id="item-1" data-aos="fade-down" data-aos-duration="1500" data-aos-once="true">
            <img src={grid1} alt="imag" />
            <NavLink to="/Menu/toppings"><p className="grid-btn">Claim Discounts</p></NavLink>
          </div>
          <div id="item-2" data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
            <img src={grid2} alt="imag" />
            <NavLink to="/Menu/toppings"><p className="grid-btn">Low Prices</p></NavLink>
          </div>
          <div id="item-3" data-aos="fade-left" data-aos-delay="300" data-aos-duration="1500" data-aos-once="true">
            <img src={grid3} alt="imag" />
            <NavLink to="/Menu/toppings"><p className="grid-btn">The best</p></NavLink>
          </div>
          <div id="item-4" data-aos="fade-right" data-aos-delay="300" data-aos-duration="1500" data-aos-once="true">
            <img src={grid4} alt="imag" />
            <NavLink to="/Menu/toppings"><p className="grid-btn">Incredible Ingredients</p></NavLink>
          </div>
          <div id="item-5" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1500" data-aos-once="true">
             <img src={grid5} alt="imag"  />
             <NavLink to="/Menu/toppings"><p className="grid-btn">Extra...</p></NavLink>
           </div>
         </div>
       </div>


      <div className="home-review-cont">
        <div className="home-review-head">
          <p data-aos="fade-left"data-aos-duration="1500" data-aos-once="true">Discover</p>
          <p data-aos="fade-right"data-aos-duration="1500" data-aos-once="true">Reviews</p>
        </div>
        <Swiper
          modules={[Navigation, Pagination, A11y, Keyboard ,EffectFlip]}
          effect='flip'
          navigation = {true}
          keyboard={{
            enabled: true
          }}
          pagination={{ clickable: true }}
          spaceBetween={30}
          loop={true}
          slidesPerView={1}
        >
          {Comments.map((item) => (
            <SwiperSlide key={item.id}>
              <div className='comments'>
                <div className="comm-img-cont">
                  <img src={item.imgSrc} alt={item.Name}  />
                </div>
                <div className="comm-inf">
                  <p className='comment'>{item.comment}</p>
                  <p className='Name'>-{item.Name}-</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Home;
