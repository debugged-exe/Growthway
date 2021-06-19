import React from 'react';
import './Pricing.scss';
import {Plans} from './Plans.js';
import {TiTick} from 'react-icons/ti';
import 'tachyons';

const Pricing = () => {
	return (
    <div>
		<div className="head-bg1 flex tc flex-column justify-center items-center white b">
			<p className="ma0 pa0 f1">Our Services</p>
		</div>

    <div className="main-container" style={{lineHeight:'1.5'}}>
      <div className="features-div">
			   <div className="sub-div">
				   <h1>Choose your plan</h1>
					 <p>If you are unsure which pricing plan to choose, then register
					    for a 14-day free trial to start building your business.</p>
				 </div>
			   <div className="sub-div">
				   <h3 style={{color:'blue'}}>Features</h3>
					   <p><TiTick color="blue"/> Business Architecture</p>
						 <p><TiTick color="blue"/> Cognitive Architecture</p>
						 <p><TiTick color="blue"/> Interior Architecture</p>
						 <p><TiTick color="blue"/> Landscape Architecture</p>
             <p><TiTick color="blue"/> UI/UX designs</p>
						 <p><TiTick color="blue"/> SEO marketing</p>
				 </div>
				 <div className="sub-div">
						 <h3 style={{color:'blue'}}>Benefits</h3>
							<p><TiTick color="blue"/> Business Architecture</p>
							<p><TiTick color="blue"/> Cognitive Architecture</p>
							<p><TiTick color="blue"/> Interior Architecture</p>
							<p><TiTick color="blue"/> Landscape Architecture</p>
						  <p><TiTick color="blue"/> UI/UX designs</p>
							<p><TiTick color="blue"/> SEO marketing</p>
				 </div>
			</div>
        <p className="tc fw5" style={{fontSize:'2.5rem'}}>Pricing Panel</p>
					<div className="price-grid">
						{
							Plans.map((plan, index) => {
								return(
									<div className="tc">
												<div className="price shadow-2 ma3">
													 <p className="f4"><span className="fw5" style={{color:'blue',fontSize:'2.5rem'}}> {plan.interest}</span><sub> Rate of interest </sub></p>
													 <h2>{plan.planType}</h2>
													 <h3>( {plan.planPrice} )</h3>

													 <p><TiTick color="blue"/>{plan.subHeading1}</p>
													 <p><TiTick color="blue"/>{plan.subHeading2}</p>
													 <p><TiTick color="blue"/>{plan.subHeading3}</p>
													 <p><TiTick color="blue"/>{plan.subHeading4}</p>
												 <div>
														<button className="button mv6"><span>Pay Now!</span></button>
												 </div>
											</div>
										</div>
								);
							})
						}
					</div>
      </div>
		  <div className="tc">
			  <p style={{fontSize:'40px',fontWeight:'600'}}>Start working together?</p>
				<button className="mb4 fw6 white pa3 ph4 f5 grow pointer" style={{borderRadius:'8px',border:'none',backgroundColor:'blue'}}>Find Out More</button>
			</div>
		</div>
			)}

export default Pricing;
