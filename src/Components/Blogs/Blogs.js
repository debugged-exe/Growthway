import React, {useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import 'tachyons';
import './Blog.scss';

const Blogs = ({blogs}) => {

	return (
		<div className="flex flex-column justify-center items-center">
		 <h1>Latest Blogs</h1>
			<div className="blog-container">
			{
       blogs.map((item,index)=>{
				 if(index===0){
					 return(
	 					<Link to="/blog/#blog"  style={{padding:"5%"}}>
	 	 	 			   <div className="item shadow-2">
	 	 	 				   <h3 className="ma3">{item.heading}</h3>
	 	 	 					 <p className="ma3">{item.date}</p>
	 	 	 				 </div>
	  	 				 </Link>
	 				)
				 }
				 else if(index===1)
				 {
					 return(
 					 <Link to="/blog/#blog"  style={{padding:"5%"}}>
 							<div className="item1 shadow-2">
 								<h3 className="ma3">{item.heading}</h3>
 								<p className="ma3">{item.date}</p>
 							</div>
 							</Link>
 				 )
				 }
				 else if (index===2) {
					 return(
 					 <Link to="/blog/#blog"  style={{padding:"5%"}}>
 							<div className="item2 shadow-2">
 								<h3 className="ma3">{item.heading}</h3>
 								<p className="ma3">{item.date}</p>
 							</div>
 							</Link>
 				 )
				 }


			 })
			}
			</div>
  </div>
	)
}

export default Blogs;
