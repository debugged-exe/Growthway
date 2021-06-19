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
				   <h1>Are you willing to do that? </h1>
					 <p>Your risk is only limited to trusting us. We will take care of the rest.</p>
				 </div>
			   <div className="sub-div">
				   <h3 style={{color:'blue'}}>Features</h3>
					   <p><TiTick color="blue"/>	High rate of interest</p>
						 <p><TiTick color="blue"/>	Guaranteed returns</p>
						 <p><TiTick color="blue"/>  Zero risk</p>
						 <p><TiTick color="blue"/> 	Clear and precise documentation in order to avoid any fraudulent</p>
				 </div>
				 <div className="sub-div">
						 <h3 style={{color:'blue'}}>Benefits</h3>
							<p><TiTick color="blue"/> Free consultation</p>
							<p><TiTick color="blue"/> No more botheration of the market fluctuations</p>
							<p><TiTick color="blue"/>	An emergency fund ready 24*7</p>
							<p><TiTick color="blue"/> Get the best value on your money  </p>
						  <p><TiTick color="blue"/> Secure your long-term services</p>
							<p><TiTick color="blue"/> Get a sound sleep and sound mind</p>
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
