import React,{Component,useState} from 'react';
import {GiReceiveMoney} from 'react-icons/gi';
import './LandingPage.scss';
import 'tachyons';

const LandingPage =()=>
{
  return(
    <div className="landing-div pa5">
     <div className="left-div" data-aos="fade-right" data-aos-animation="4000">
       <p style={{fontSize:'45px',fontWeight:'600'}}>What is <span style={{color:'#0069FF'}}>Growthway Investments?</span></p>
       <p className="f4">Pioneered in 2020, GrowthWay Investments is a budding firm to assist our clients with all the investments and finances, in order to achieve a balance of their best interests. </p>
       <p className="f4">We provide<span className="b"> short term investing</span> solutions with guaranteed returns at<span className="b"> Zero Risk</span>.</p>
     </div>
     <div className="flex flex-column">
          <div>
           <p className="f3 b"><GiReceiveMoney color="#0069FF" size="1.8rem"/>Services provided</p>
           <p data-aos="fade-up" data-aos-delay="100">•	Investment advisory, analysis and management</p>
           <p data-aos="fade-up" data-aos-delay="300">•	Cryptocurrency investment and exchange</p>
           <p data-aos="fade-up" data-aos-delay="300">•	Events (Educational, Sports and Social)</p>
           <p data-aos="fade-up" data-aos-delay="300">•	Health Insurance</p>
           <p data-aos="fade-up" data-aos-delay="300">•	Legal and tax advisory</p>
           <p data-aos="fade-up" data-aos-delay="300">•	Professional training provider in stock market trading and investing</p>
           <p data-aos="fade-up" data-aos-delay="200">•	Real estate - investing, decor</p>
           <p data-aos="fade-up" data-aos-delay="500">•	Venture capital financing and investing</p>
          </div>
     </div>
  </div>
  )
}

export default LandingPage;
