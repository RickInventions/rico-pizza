import React, { useEffect, useState } from 'react';
import { Parallax } from 'react-parallax';
import * as Icon from 'react-bootstrap-icons'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Webdata from './Webdata.json';
import { NavLink } from 'react-router-dom';
import Abtimg1 from '../Assets/mmm.jpg';
import './Gallery.css';

const Gallery = () => {
  const [data, setData] = useState([]);
  const [collection, setCollection] = useState([]);
  const [selectedTag, setSelectedTag] = useState(null);

  useEffect(() => {
    setData(Webdata);
    setCollection([...new Set(Webdata.map((item) => item.tag))]);
    AOS.init({ duration: 1000 });
  }, []);

  const webFilter = (tag) => {
    const filterData = Webdata.filter((item) => item.tag === tag);
    setData(filterData);
    setSelectedTag(tag);
  };

  const clearFilter = () => {
    setData(Webdata);
    setSelectedTag(null);
  };

  return (
    <div className="Gallery">
      <Parallax
        strength={200}
        bgImageAlt="backg"
        blur={{ min: -5, max: 5 }}
        bgImage={Abtimg1}
        bgStyle={{ filter: 'brightness(0.5)' }}
      >
        <div className="gall-first-cont">
        <p className='title' data-aos="fade-right" data-aos-duration="1500" data-aos-once="true">Gallery</p>
        <div className="breadcrumbs" data-aos="zoom-in-up" data-aos-delay="1000" data-aos-duration="1500" data-aos-once="true">
            <p>
              <NavLink to="/" className="gall-link">
                Home
              </NavLink>{' '}
              {'>'} <span>Gallery</span>
            </p>
          </div>
        </div>
      </Parallax>
      <div className="gall-body">
        <p
          data-aos="fade-right"
          data-aos-once="true"
          className="filter-text"
        >
           <span className="filter">
            <button className={selectedTag === null ? 'active' : ''} onClick={clearFilter}>
              All
            </button>
            {collection.map((tag, index) => (
              <button key={index} className={selectedTag === tag ? 'active' : ''} onClick={() => webFilter(tag)}>
                {tag}
              </button>
            ))}
          </span>
        </p>
        <div className="gall-body-res">
          {data.map((item, i) => (
            <div className="sect-res" key={i} data-aos="fade-up" data-aos-delay={item.id * 150} data-aos-duration="1300" data-aos-once="true">
              <div className="sect-res-imgCont">
                <img src={`./GalleryAssets/${item.imgSrc}`} alt={item.name}/>
              </div>
              <div className="sect-res-rest-cont">
              {/* eslint-disable-next-line */}
                <a href="#"><button><Icon.Search/></button></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
