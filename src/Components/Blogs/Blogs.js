import React from 'react';
import image from './cryptocurrency-market.jpg';
import {BlogsList} from './BlogsList.js';
import 'tachyons';

const Blogs = () => {
	return (
		<div>
      <h1>Blogs</h1>
			<div>
			{
				BlogsList.map((item)=>{
					return(
						<div style={{background: `url(${item.image}) no-repeat center center`, backgroundSize: 'cover'}}
						className=" center">
							<h1 className="white">{item.heading}</h1>
							<img src={item.image}/>
						</div>
					)
				})
			}
			</div>

		</div>
	)
}

export default Blogs;
