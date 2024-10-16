import React from 'react'
import * as Icon from 'react-bootstrap-icons'
import './Footer.css'

const Footer = () => {
  return (
    <div className='Footer'>
      <div className="topFooter">
        
        <div className="foot-sect">
          <p className="title">Contact Us</p>
          <div className="inf">
            <p><Icon.GeoAltFill className='foot-ico'/>  8th floor, 379 Hudson St, New York, NY 10018</p>
            <p><Icon.TelephoneFill className='foot-ico'/> (+234)812 1025 098</p>
            <p><Icon.EnvelopeAtFill className='foot-ico'/> richardabimbola121@gmail.com</p>
          </div>
        </div>

        <div className="foot-sect">
          <p className="title">Opening Times</p>
          <div className="inf">
            <p><Icon.Clock className='foot-ico'/> 8:30 AM - 11PM <br /> Everyday</p>
          </div>
        </div>

      </div>
      <div className="bottomFooter">
        <div className="foot-ico">
        {/* eslint-disable-next-line */}
          <a href="#"><Icon.Facebook/></a>
        {/* eslint-disable-next-line */}
          <a href="#"><Icon.Instagram/></a>
        {/* eslint-disable-next-line */}
          <a href="#"><Icon.Tiktok/></a>
        </div>
        <div className="credits">
          <p>@ 2023 Rickinventionss. Buy this theme.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer