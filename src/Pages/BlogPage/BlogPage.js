import React from 'react';

// component
import Blogs from '../../Components/Blogs/Blogs.js';

// css
import './BlogPage.scss';

const BlogPage = () => {
	return (
		<div className="blog-page bg-dark-gray">
			<div className="blog-page-header">
				<h1 className="">Our Latest <span style={{color: 'green'}}>News</span></h1>
				<p className="blog-page-para">Deerunt sit ut tempor non ut enim deserunt proident sint elit nostrud non veniam commodo mollit nisi nulla ut dolor irure nulla reprehenderit laborum in est in sed do sunt non.</p>
			</div>
			<Blogs />
		</div>
	)
}

export default BlogPage;