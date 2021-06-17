import React from 'react';

// component
import Blogs from '../../Components/Blogs/Blogs.js';
import BlogDisplay from '../../Components/Blogs/BlogDisplay.js';

// css
import './BlogPage.scss';

const BlogPage = () => {
	return (
		<div className="blog-page">
			<div className="blog-page-header">
				<p style={{fontSize:'45px',fontWeight:'600'}}>Our Latest <span style={{color: 'blue'}}>News</span></p>
				<p className="blog-page-para">Deerunt sit ut tempor non ut enim deserunt proident sint elit nostrud non veniam commodo mollit nisi nulla ut dolor irure nulla reprehenderit laborum in est in sed do sunt non.</p>
			</div>
			<Blogs />
			<BlogDisplay/>
		</div>
	)
}

export default BlogPage;
