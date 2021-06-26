import React, {useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import 'tachyons';
import './Blog.scss';

const Blogs = () => {

	return (
		<div className="flex flex-column justify-center items-center">
		 <h1>Latest Blogs</h1>
			<div className="blog-container">
			<Link to="/blog/#blog"  style={{padding:"5%"}}>
			   <div className="item shadow-2">
				   <h3 className="ma3">Your financial decisions are in the governments hands.</h3>
					 <p className="ma3">May 21st 2018 | Genre</p>
				 </div>
				 </Link>

				<Link to="/blog/#blog" style={{padding:"5%"}}>
				 <div className="item1 shadow-2">
				   <h3 className="ma3">Your financial decisions are in the governments hands.</h3>
					 <p className="ma3">May 21st 2018 | Genre</p>
				 </div>
				</Link>
				<Link to="/blog/#blog" style={{padding:"5%"}}>
				 <div className="item2 shadow-2">
				   <h3 className="ma3">Your financial decisions are in the governments hands.</h3>
					 <p className="ma3">May 21st 2018 | Genre</p>
				 </div>
				</Link>
			</div>
  </div>
	)
}

export default Blogs;
