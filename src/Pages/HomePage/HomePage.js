import React from 'react';
import Header from '../../Components/Header/Header.js';
import Blogs from '../../Components/Blogs/Blogs.js';
import Work from '../../Components/WorkTogether/Work.js';
import Testimonial from '../../Components/Testimonial/Testimonial.js';
import Faqs from '../../Components/Faqs/faqfun.js';

const HomePage = () => {
	return (
		<div>
			<Header/>
			<Blogs/>
			<Work/>
			<Testimonial/>
			<Faqs/>
		</div>
	)
}

export default HomePage;
