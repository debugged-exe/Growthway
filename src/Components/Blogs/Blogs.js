import React, {useState, useEffect } from 'react';
import image from './cryptocurrency-market.jpg';
import {BsChevronDoubleDown } from "react-icons/bs";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BlogsList } from './BlogsList.js';
import 'tachyons';
import './Blog.scss';

const Blogs = () => {

	const[setItems]=useState([]);
	const [visible, setVisible] = useState(3);
	const [len, setLen] = useState(0);

	useEffect(() => {
		fetch('https://fierce-wave-93667.herokuapp.com/completed')
			.then(response => response.json())
			.then(resp => {
				if (resp[0].title) {
					setItems(resp);
					setLen(resp.length);
					console.log(resp.length);
				}
			})
			.catch(err => {
				console.log(err)

			})
	}, [])

	const showMoreItems = () => {
		setVisible((prev) => prev + 3);
	}

	return (
		<div>
			<h1>Blogs</h1>
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
			<h5 onClick={showMoreItems} className={`center showmore mt5 ${visible >= len ? 'hide' : ''}`} style= {{textAlign: 'center'}}>Show More</h5>
			<BsChevronDoubleDown className={` arrowdown code ${visible >= len ? 'hide' : ''}`} size="2rem" style= {{width:'100%', textAlign: 'center'}}/>
		</div>
	)
}

export default Blogs;
