import React, {useState, useEffect } from 'react';
import image from './cryptocurrency-market.jpg';
import {BsChevronDoubleDown } from "react-icons/bs";
import { BlogsList } from './BlogsList.js';
import 'tachyons';
import './Blog.scss';

const Blogs = () => {

  const val=BlogsList.length;
	const[setItems]=useState([]);
	const [visible, setVisible] = useState(3);
	const [len, setLen] = useState(val);

	const showMoreItems = () => {
		setVisible((prev) => prev + 3);
	}

	return (
		<div>
			<h1 className="tc">Blogs</h1>
			<div>
				{
					BlogsList.slice(0, visible).map((item) => {
						return (
							<div style={{ background: `url(${item.image}) no-repeat center center`, backgroundSize: 'cover' }}
								className=" center blog-container">
								<p className="white blog-id">
									{item.id}
								</p>
								<div className="blog-content white" style={{ backgroundColor: 'rgba(0,0,0,0.5)', position: 'relative' }}>
									<h1 className="blog-heading">{item.heading}</h1>
									<p>{item.description}</p>
								</div>
							</div>
						);
					})
				}
			</div>
			<h4 onClick={showMoreItems} className={`center pointer ${visible >= len ? 'hide' : ''}`} style= {{textAlign: 'center'}}>Show More</h4>
			<BsChevronDoubleDown className={` arrowdown code ${visible >= len ? 'hide' : ''}`} size="3rem" style= {{width:'100%', textAlign: 'center'}}/>
		</div>
	)
}

export default Blogs;
