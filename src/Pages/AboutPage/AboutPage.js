import React from 'react';
import Faqs from '../../Components/Faqs/faqfun.js';
import  Aboutus from '../../Components/Aboutus/Aboutus.js';
import './AboutPage.scss';

const AboutPage=()=>{
  return (
    <div className="bg-dark-gray pt5 white ">
      <Aboutus/>
      <Faqs/>
    </div>
  )
}

export default AboutPage;
