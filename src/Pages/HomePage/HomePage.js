import React from 'react';
import Header from '../../Components/Header/Header.js';
import CallBack from '../../Components/CallBack/CallBack.js';
import Services from '../../Components/Aboutus/Services.js';
import  LandingPage from '../../Components/Aboutus/LandingPage.js';
import Calculator from '../../Components/Calculator/Calculator.js';
import OurServices from "../../Components/OurServices/OurServices";
import OurClients from '../../Components/OurClients/OurClients';
import Blogs from '../../Components/Blogs/Blogs.js';
import TaglineCarousel from '../../Components/TaglineCarousel/TaglineCarousel.jsx';

const HomePage = () => {
	return (
		<div>
			<Header/>
			<TaglineCarousel/>
			<LandingPage/>
			<Services/>
			<CallBack/>
			<OurClients />
			<OurServices />
			<Calculator/>
			<Blogs />



		</div>
	)
}

export default HomePage;
