import React, {useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import 'tachyons';
import './Blog.scss';

const Blogs = () => {

	return (
		<div className="flex flex-column justify-center items-center">
		 <h1>Latest Blogs</h1>
			<div className="blog-container">
			 <Link to="/blog">
			   <div className="item shadow-2">
				   <h3 className="ma3">1950's upto now pop-music design</h3>
					 <p className="ma3">May 21st 2018 | Genre</p>
				 </div>
				</Link>
				<Link to="/blog">
				 <div className="item shadow-2">
				   <h3 className="ma3">Niche blogs for rising metal bands</h3>
					 <p className="ma3">May 21st 2018 | Genre</p>
				 </div>
				</Link>
				<Link to="/blog">
				 <div className="item shadow-2">
				   <h3 className="ma3">4 best ways to keep inspired</h3>
					 <p className="ma3">May 21st 2018 | Genre</p>
				 </div>
				</Link>
			</div>
  </div>
	)
}

export default Blogs;
