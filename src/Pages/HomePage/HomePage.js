import React from 'react';
import Header from '../../Components/Header/Header.js';
import Work from '../../Components/WorkTogether/Work.js';
import Testimonial from '../../Components/Testimonial/Testimonial.js';
import Pricing from '../../Components/Pricing/Pricing.js';
import CallBack from '../../Components/CallBack/CallBack.js';
import ReachUsAt from '../../Components/ReachUsAt/ReachUsAt.js';
import Aboutus from '../../Components/Aboutus/Aboutus.js';
import Calculator from '../../Components/Calculator/Calculator.js';


const HomePage = () => {
	return (
		<div>
			<Header/>
			<Work/>
			<Testimonial/>
			<Pricing/>
			<CallBack/>
			<ReachUsAt/>
			<Aboutus/>
      <Calculator/>
		</div>
	)
}

export default HomePage;
