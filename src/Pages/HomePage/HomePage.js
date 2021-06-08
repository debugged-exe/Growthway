import React from 'react';
import Header from '../../Components/Header/Header.js';
import Pricing from '../../Components/Pricing/Pricing.js';
import CallBack from '../../Components/CallBack/CallBack.js';
import Calculator from '../../Components/Calculator/Calculator.js';


const HomePage = () => {
	return (
		<div>
			<Header/>
			<Pricing/>
			<CallBack/>
      <Calculator/>
		</div>
	)
}

export default HomePage;
