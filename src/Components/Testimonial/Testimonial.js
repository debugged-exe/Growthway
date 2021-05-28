import React, {useState, useEffect } from 'react';
import 'tachyons';
// import './Testimonial.scss';
import Carousel from 'react-elastic-carousel';
import './style.scss';

const Testimonial = () => {
	return (
		<div className="testimonials">
    <p className="tf pt3 pl5"
    style={{fontSize:'3.5rem',fontWeight:'500'}}>
      Testimonial's </p>
	  <p className="tf pt3 pl5"
    style={{fontSize:'1rem',fontWeight:'300'}}>From our early days, we've been providing reliable service to our clientele.<br/>
We've had the honor being the firm of choice of the following corporations:</p>
		<Carousel itemsToShow={3}>
		<div className="mt5 pa5 bg-white client-card">
			<h1> Client's name </h1>
			<p>
			From our early days, we've been providing reliableservice to our clientele.
			We've had the honor being the firm of choice of thefollowing corporations:
			</p>
		</div>
		<div>2</div>
		<div>3</div>
		<div>4</div>
		<div>5</div>
		<div>6</div>
		</Carousel>
		</div>
	)
}

export default Testimonial;
