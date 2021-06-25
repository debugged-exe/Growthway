import React,{Component,useState} from 'react';
import {BiBug} from 'react-icons/bi';
import './Services.scss';
import { Link } from "react-router-dom";
import Image from './services.svg';
import Image1 from './services1.svg';
import 'tachyons';

const Services =()=>
{
  return(
    <div style={{overflow:"hidden"}}>
    <div className="services-div" data-aos="fade-left" data-aos-duration="3000">
      <div className="pa4"><img src={Image} alt="first"/></div>
      <div className="service-content bg-dark-gray white">
         <h2>When was the last time you were caught up in unexpected financial trouble and what did you do to get out of it? </h2>
         <p>Broke your FD, sold your holdings, asked your peers or relatives for help or took a gold loan?</p>
         <p>With Growthway you don't have to anymore.</p>
         <Link to='/services'><button className="mt3 fw6 white pa3 f5 grow pointer" style={{borderRadius:'8px',border:'none',backgroundColor:'#0069FF'}}>Learn More</button></Link>
      </div>
      <div className="service-content bg-white black shadow-5">
         <h2><span style={{color:"rgb(0, 105, 255)"}}>Worried about finance?</span> A little planning can get things sorted for you</h2>
         <p>• Next Holiday Trip or travelling</p>
         <p>• New Mobile Phone</p>
         <p>• Shopping, Home Appliances, Other Gadgets</p>
         <p>• Down Payments for your new car/house</p>
         <p>• Unannounced emergency</p>
         <p>• Other personal expenses</p>
         {/* <Link to='/services'><button className="mt3 fw6 white pa3 f5 grow pointer" style={{borderRadius:'8px',border:'none',backgroundColor:'#0069FF'}}>Learn More</button></Link> */}
      </div>
      <div className="service-content white" style={{backgroundColor:'#0069FF'}}>
        <h2>Investment today is a source of income tomorrow</h2>
        <p className="pb4">Investment is interesting and it is secure enough to sail you through the floods of unannounced expenses that life puts you in! And GrowthWay Investments is here to help you invest smartly and securely.</p>
        <Link to='/services'><button className="mt5 fw6 bg-white black pa3 f5 grow pointer" style={{borderRadius:'8px',border:'none'}}>Learn More</button></Link>
      </div>
    </div>
    </div>
  )
}

export default Services;
