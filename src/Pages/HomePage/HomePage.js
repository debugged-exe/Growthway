import React from 'react';
import Header from '../../Components/Header/Header.js';
import CallBack from '../../Components/CallBack/CallBack.js';
import Calculator from '../../Components/Calculator/Calculator.js';
import OurServices from "../../Components/OurServices/OurServices";
import OurClients from '../../Components/OurClients/OurClients';
import TaglineCarousel from '../../Components/TaglineCarousel/TaglineCarousel.jsx';
import Services from '../../Components/Aboutus/Services';
import LandingPage from '../../Components/Aboutus/LandingPage';
import Blogs from '../../Components/Blogs/Blogs';

const HomePage = () => {
	return (
		<div>
			<Header/>
			<LandingPage />
			<TaglineCarousel/>
			<Services />
			<CallBack/>
			<OurClients />
			<OurServices />
			<Calculator/>
			<Blogs />
		</div>
	)
}

export default HomePage;
