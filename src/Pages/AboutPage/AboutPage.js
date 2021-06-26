import React from 'react';
import Faqs from '../../Components/Faqs/faqfun.js';
import  Aboutus from '../../Components/Aboutus/Aboutus.js';
import  MySkills from '../../Components/MySkills/MySkills.js';
import  BasicProfile  from '../../Components/Basicprofile/BasicProfile';
import './AboutPage.scss';

const AboutPage=()=>{
  return (
    <div id='about'>
      <Aboutus/>
      <BasicProfile/>
      <MySkills/>
      <Faqs/>
    </div>
  )
}

export default AboutPage;
