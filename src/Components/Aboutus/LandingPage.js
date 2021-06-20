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
     </div>
     <div className="flex flex-column">
          <div>
           <p className="f3 b"><GiReceiveMoney color="#0069FF" size="1.8rem"/>Services provided</p>
           <p data-aos="fade-up" data-aos-delay="100">•	Investment advisory and management services</p>
           <p data-aos="fade-up" data-aos-delay="200">•	Investment analysis services</p>
           <p data-aos="fade-up" data-aos-delay="300">•	Cryptocurrency investment and exchange services</p>
           <p data-aos="fade-up" data-aos-delay="400">•	Real estate agency and investment services</p>
           <p data-aos="fade-up" data-aos-delay="500">•	Venture capital financing</p>
          </div>
     </div>
  </div>
  )
}

export default LandingPage;
