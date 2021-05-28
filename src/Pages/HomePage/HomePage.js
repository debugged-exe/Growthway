import React from 'react';
import Header from '../../Components/Header/Header.js';
import Blogs from '../../Components/Blogs/Blogs.js';
import Work from '../../Components/WorkTogether/Work.js';
import Testimonial from '../../Components/Testimonial/Testimonial.js';
import Faqs from '../../Components/Faqs/faqfun.js';
import Pricing from '../../Components/Pricing/Pricing.js';
import CallBack from '../../Components/CallBack/CallBack.js';

const HomePage = () => {
	return (
		<div>
			<Header/>
			<Blogs/>
			<Faqs/>
			<Work/>
			<Testimonial/>
			<Pricing/>
			<CallBack/>
		</div>
	)
}

export default HomePage;
