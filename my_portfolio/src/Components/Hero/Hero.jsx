import React from 'react';
import './Hero.css';
import profile_img from '../../assets/Me.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="Profile" />
        <h1><span>I'am Vladimir Machkovski,</span> full stack developer based in Macedonia</h1>
        <p>I am a full stack developer from Macedonia</p>
        <div className="hero-action">
            <div className="hero-connect">
                <AnchorLink href="#contact">Connect with me</AnchorLink>
            </div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  );
}

export default Hero;
