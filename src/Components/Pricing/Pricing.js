import React from 'react';
import './Pricing.scss';
import {Plans} from './Plans.js';
import {TiTick} from 'react-icons/ti';
import 'tachyons';

const Pricing = () => {
	return (
    <div className="main-container" style={{lineHeight:'1.5'}}>
      <p className="tc fw5" style={{fontSize:'2.5rem'}}>Pricing Panel</p>

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

					<div className="grid">
					 {
						 Plans.map((plan) => {
						 return (
							 <div className="price shadow-2 pl4">
  						     <h2>{plan.planType}</h2>
  								 <h3>{plan.planPrice}</h3>
									 <h4>Rate of interest <span style={{color:'blue'}}>{plan.interest}</span></h4>
									 <p><TiTick color="blue"/>{plan.subHeading1}</p>
									 <p><TiTick color="blue"/>{plan.subHeading2}</p>
									 <p><TiTick color="blue"/>{plan.subHeading3}</p>
									 <p><TiTick color="blue"/>{plan.subHeading4}</p>
  						 <button className="button mt6"><span>Pay Now!</span></button>
              </div>
	              )
              }
					)}
     </div>

		  <div className="tc">
			  <p style={{fontSize:'40px',fontWeight:'600'}}>Start working together?</p>
				<button className="mb4 fw6 white pa3 ph4 f5 grow pointer" style={{borderRadius:'8px',border:'none',backgroundColor:'blue'}}>Find Out More</button>
			</div>
		</div>
			)}

export default Pricing;
