import React from 'react';

// component

import BlogDisplay from '../../Components/Blogs/BlogDisplay.js';

// css
import './BlogPage.scss';

const BlogPage = ({blogs,len}) => {
	return (

		<div className="blog-page" >
		 <span id="blog"></span>
			<BlogDisplay blogs={blogs} len={len}/>
		</div>
	)
}

export default BlogPage;
