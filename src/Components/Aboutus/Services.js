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
    <div className="services-div">
      <div className="pa4"><img src={Image}/></div>
      <div className="service-content bg-dark-gray white">
         <h2>Unlimited power & customization possibilities</h2>
         <p>Brook presents your services with flexible, convenient and multipurpose layouts. You can select your favorite layouts &
          elements for particular projects with unlimited customization possibilities.</p>
         <Link to='/services'><button className="mt5 fw6 white pa3 f5 grow pointer" style={{borderRadius:'8px',border:'none',backgroundColor:'blue'}}>Learn More</button></Link>
      </div>
      <div className="pa4"><img src={Image1}/></div>
      <div className="service-content white" style={{backgroundColor:'blue'}}>
        <h2>Pixel perfect design and clear code delivered to you</h2>
        <p>Pixel-perfect replication of the designers is intended for both front-end & back-end developers to build their pages with
          greater comfort thanks to the higher customizability, adaptability as well as flexibility.</p>
        <Link to='/services'><button className="mt5 fw6 bg-white black pa3 f5 grow pointer" style={{borderRadius:'8px',border:'none'}}>Learn More</button></Link>
      </div>
    </div>
  )
}

export default Services;
