import React from 'react';
import Header from '../../Components/Header/Header.js';
import Pricing from '../../Components/Pricing/Pricing.js';
import CallBack from '../../Components/CallBack/CallBack.js';
import Calculator from '../../Components/Calculator/Calculator.js';
import OurServices from "../../Components/OurServices/OurServices";
import OurClients from '../../Components/OurClients/OurClients';

const HomePage = () => {
	return (
		<div>
			<Header/>
			<Pricing/>
			<CallBack/>
      		<Calculator/>
			<OurServices />
			<OurClients />
		</div>
	)
}

export default HomePage;
