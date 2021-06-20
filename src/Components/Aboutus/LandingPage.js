import React,{Component,useState} from 'react';
import {GiReceiveMoney} from 'react-icons/gi';
import './LandingPage.scss';
import 'tachyons';

const LandingPage =()=>
{
  return(
    <div className="landing-div pa5">
     <div className="left-div">
       <p style={{fontSize:'45px',fontWeight:'600'}}>What is <span style={{color:'#0069FF'}}>Growthway Investments?</span></p>
       <p className="f4">Pioneered in 2020, GrowthWay Investments is a budding firm to assist our clients with all the investments and finances, in order to achieve a balance of their best interests. </p>
     </div>
     <div className="flex flex-column">
          <div>
           <p className="f3 b"><GiReceiveMoney color="#0069FF" size="1.8rem"/>Services provided</p>
           <p>•	Investment advisory and management services</p>
           <p>•	Investment analysis services</p>
           <p>•	Cryptocurrency investment and exchange services</p>
           <p>•	Real estate agency and investment services</p>
           <p>•	Venture capital financing</p>
          </div>
     </div>
  </div>
  )
}

export default LandingPage;
