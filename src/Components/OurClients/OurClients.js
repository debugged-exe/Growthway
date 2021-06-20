import React from 'react';
import * as BsIcons from "react-icons/bs";
import { Quotes } from "phosphor-react";
import Icon1 from './undraw1.svg';
import Icon2 from './undraw2.svg';
import Icon3 from './undraw3.svg';

import './OurClients.scss';


const testimonial = [
	{
		description: 'Pariatur cillum et deserunt dolore adipisicing in pariatur consequat non aute in cupidatat velit do nulla sint.',
		name: 'Tejas',
		designation: 'Developer',
		icon: Icon1
	},
	{
		description: 'Pariatur cillum et deserunt dolore adipisicing in pariatur consequat non aute in cupidatat velit do nulla sint.',
		name: 'Tejas',
		designation: 'Developer',
		icon: Icon2
	},
	{
		description: 'Pariatur cillum et deserunt dolore adipisicing in pariatur consequat non aute in cupidatat velit do nulla sint.',
		name: 'Tejas',
		designation: 'Developer',
		icon: Icon3
	}
]

const OurClients = () => {
	return (
		<div className="our-clients" data-aos="fade-up" data-aos-duration="2000">
			<h2>Our Clients</h2>
			<div className="testimonial-grid">
				{
					testimonial.map((item, index) => {
						return(
							<div key={index} className="testimon-card shadow-4">
								<div>
									<p className="testimon-description">
										{item.description}
									</p>
								</div>
								<div className="profile-intro">
									<div className='image-container1'>
										<img src={item.icon} alt="" style={{height: '100%', width: '100%'}}/>
									</div>
									<div className="">
										<h3 className="">{item.name}</h3>
										<p className="">{item.designation}</p>
									</div>
								</div>
								<div className="flex justify-end items-center" style={{height: '12%', width: '100%'}}>
									<Quotes className="quote" size={48} weight="fill"/>
								</div>
							</div>
						);
					})
				}
			</div>
		</div>
	)
}

export default OurClients;