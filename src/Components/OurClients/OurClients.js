import React,{useState,useEffect} from 'react';
import * as BsIcons from "react-icons/bs";
import { Quotes } from "phosphor-react";
import Carousel from 'react-elastic-carousel';
import Icon1 from './undraw1.svg';
import Icon2 from './undraw2.svg';
import './OurClients.scss';

const OurClients = () => {
	const [testimonial,setTestimonial] = useState([]);

	useEffect(()=>{
		fetch('https://stormy-escarpment-39477.herokuapp.com/')
		.then(response=>response.json())
		.then(resp=>{
			if(resp[0].name){
				setTestimonial(resp);
			}
		})
		.catch(err => {
		 console.log(err)
	 })
	},[])

	const breakPoints = [
 		 { width: 1, itemsToShow: 1 },
 		 { width: 550, itemsToShow: 1 },
 		 { width: 850, itemsToShow: 1 },
 		 { width: 1150, itemsToShow: 3 },
 		 { width: 1450, itemsToShow: 3 },
 		 { width: 1750, itemsToShow: 3 },
  ]

	return (
		<div className="our-clients" style={{overflow:'hidden'}} data-aos="fade-up" data-aos-duration="2000">
			<h2>Our Clients</h2>
		<Carousel className="carousel-div" breakPoints={breakPoints} showArrows={false}>
		{
					testimonial.map((item, index) => {
						if(index===0 || (index%2)===0){
							return(
								<div key={index} className="testimon-card shadow-4">
									<div>
										<p className="testimon-description">
											{item.describe}
										</p>
									</div>
									<div className="profile-intro">
										<div className='image-container1'>
											<img src={Icon1} alt="" style={{height: '100%', width: '100%'}}/>
										</div>
										<div className="">
											<h3 className="">{item.name}</h3>
											<p className="">{item.designation}</p>
										</div>
									</div>
									<div className="flex justify-end items-center" style={{height: '12%', width: '100%'}}>
										<Quotes className="quote" size='2rem' weight="fill"/>
									</div>
								</div>
							);
						}
						else if(index===1 || (index%2)!==0){
							return(
									<div key={index} className="testimon-card shadow-4">
										<div>
											<p className="testimon-description">
												{item.describe}
											</p>
										</div>
										<div className="profile-intro">
											<div className='image-container1'>
												<img src={Icon2} alt="" style={{height: '100%', width: '100%'}}/>
											</div>
											<div className="">
												<h3 className="">{item.name}</h3>
												<p className="">{item.designation}</p>
											</div>
										</div>
										<div className="flex justify-end items-center" style={{height: '12%', width: '100%'}}>
											<Quotes className="quote" size='2rem' weight="fill"/>
										</div>
									</div>
								);
						}

					})
		}

			</Carousel>
		</div>
	)
}

export default OurClients;
