import React from 'react';

// component

import BlogDisplay from '../../Components/Blogs/BlogDisplay.js';

// css
import './BlogPage.scss';

const BlogPage = () => {
	return (

		<div className="blog-page" >
		 <span id="blog"></span>
			<BlogDisplay/>
		</div>
	)
}

export default BlogPage;
