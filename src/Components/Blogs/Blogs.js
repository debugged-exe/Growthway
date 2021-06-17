import React, {useState, useEffect } from 'react';
import {BsChevronDoubleDown, BsCalendar } from "react-icons/bs";
import { BlogsList } from './BlogsList.js';
import 'tachyons';
import './Blog.scss';

const Blogs = () => {

	const[setItems]=useState([]);
	const [visible, setVisible] = useState(4);
	const [len, setLen] = useState(BlogsList.length);

	const showMoreItems = () => {
		setVisible((prev) => prev + 4);
	}

	return (
		<div className="blog-container">
		   <div className="item">1</div>
			 <div className="item">2</div>
			 <div className="item">3</div>
		</div>

	)
}

export default Blogs;




// <div>
// 	<h1 className="tc">Blogs</h1>
// 	<div className="blog-item-container">
// 		{
// 			BlogsList.slice(0,visible)
// 			.map((item,index) => {
// 				return(
// 					<div className="blog-item">
// 						<div>
// 							<img src={item.image} alt="hehe" style={{width: '100%', objectFit: 'cover'}}/>
// 						</div>
// 						<div className="blog-item-header">
// 							<h3 className="">{item.heading}</h3>
// 							<span style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}>
// 								<BsCalendar color={'green'} size={'1.5rem'} />
// 								<p className="mh2" style={{color: 'green', fontWeight: 'bold', fontSize: '1.3rem'}}>{item.date}</p>
// 							</span>
// 						</div>
// 						<div>
// 							<p className="blog-item-desc">{item.description}</p>
// 						</div>
// 					</div>
// 				);
// 			})
// 		}
// 	</div>
// 	<div className="pointer" onClick={showMoreItems}>
// 		<p className={`center ${visible >= len ? 'hide' : ''}`} style= {{textAlign: 'center'}}>Show More</p>
// 		<BsChevronDoubleDown className={` arrowdown code ${visible >= len ? 'hide' : ''}`} size="2rem" style= {{width:'100%', textAlign: 'center'}}/>
// 	</div>
// </div>
