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
						<div style={{background: `url(${item.image}) no-repeat center center`,height:'75vh', backgroundSize: 'cover'}}
						className=" center">
							<div className="white" style={{backgroundColor:'rgba(0,0,0,0.5)',width:'55vw',height:'50vh'}}>
								<h1>{item.heading}</h1>
								<p>{item.description}</p>
							</div>
						</div>
					)
				})
			}
			</div>

		</div>
	)
}

export default Blogs;
