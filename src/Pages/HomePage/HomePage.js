import React from 'react';
import Header from '../../Components/Header/Header.js';
import Pricing from '../../Components/Pricing/Pricing.js';
import CallBack from '../../Components/CallBack/CallBack.js';
import Calculator from '../../Components/Calculator/Calculator.js';
import TaglineCarousel from '../../Components/TaglineCarousel/TaglineCarousel.jsx';
import OurServices from "../../Components/OurServices/OurServices";


const HomePage = () => {
    return (
        <div>
            <Header/>
            <TaglineCarousel/>
            <Pricing/>
            <CallBack/>
            <Calculator/>
            <OurServices/>
        </div>
    )
}

export default HomePage;
