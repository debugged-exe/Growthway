import React from 'react';
import Faqs from '../../Components/Faqs/faqfun.js';
import  Aboutus from '../../Components/Aboutus/Aboutus.js';

import Testimonial from '../../Components/Testimonial/Testimonial.js';
import './AboutPage.scss';

const AboutPage=()=>{
  return (
    <div className=" pt5 ">
      <Aboutus/>
      <Testimonial/>
      <Faqs/>
    </div>
  )
}

export default AboutPage;
