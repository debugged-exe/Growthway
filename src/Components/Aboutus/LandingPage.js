import React,{Component,useState} from 'react';
import './LandingPage.scss';
import Image from './landingpage.svg';
import 'tachyons';

const LandingPage =()=>
{
  return(
    <div className="landing-div pa5">
     <div className="left-div" data-aos="fade-right" data-aos-animation="4000">
       <p style={{fontSize:'45px',fontWeight:'600'}}>What is <span style={{color:'#0069FF'}}>Growthway Investments?</span></p>
       <p className="f4">Pioneered in 2020, GrowthWay Investments is a budding firm which aims to assist it's clients with all their investments and finances, in order to achieve a balance of their best interests. </p>
       <p className="f4">We provide<span className="b"> short term investing</span> solutions with guaranteed returns at<span className="b"> Zero Risk</span>.</p>
     </div>
     <div className="pa5">
       <img src={Image} alt="img"/>
     </div>

  </div>
  )
}

export default LandingPage;
