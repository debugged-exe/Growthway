import React,{useState} from 'react';
import Modal from 'react-modal';
import './Pricing.scss';
import {Plans} from './Plans.js';
import {TiTick} from 'react-icons/ti';
import 'tachyons';
import { Link} from "react-router-dom";
import PaymentForm from '../PaymentForm/PaymentForm';
import {AiOutlineClose} from 'react-icons/ai';

const Pricing = () => {

	const [showPayment, setShowPayment] = useState(false);
	const [plan, setPlan] = useState("");

	return (
    <div className={`${showPayment===true?"bg-dark":"''"}`}>
			<div className="head-bg1 flex tc flex-column justify-center items-center white b">
				<p className="ma0 pa0 f1">Our Services</p>
			</div>

			<div className="main-container" style={{lineHeight:'1.5'}}>
			<div className="features-div">
					<div className="sub-div">
						<h1>Are you wondering about the risks in investment? </h1>
							<p>Well, your risk is only limited to trusting us. We will take care of the rest. Explained below are our precious gems which will provide you excellent rates of interest on your investments. Not to mention are the benefits and features alongside.</p>
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
														<div onClick={()=>
														{
															setShowPayment(true);
															setPlan(plan.planType)
														}}>
															<button className="button mv6"><span>Pay Now!</span></button>
														</div>
												</div>
											</div>
									);
								})
							}
						</div>
			</div>
			<Modal isOpen={showPayment}
				style={
					{
						overlay:{
							backgroundColor:"rgba(0, 0, 0, 0.75)",
						},
						content:{
							background:"white",
							display:"flex",
							alignItems:"center",
							justifyContent:'center',
						}
					}
				}
			>
				<div className="flex flex-wrap justify-center items-start mt4">
				<span style={{backgroundColor:"tomato",borderRadius:"50%"}} className="pa2 pointer" onClick={() => setShowPayment(false)}><AiOutlineClose size="1.6rem"/></span>
				<PaymentForm plan={plan}/>
				</div>
			</Modal>
				<div className="tc">
					<p style={{fontSize:'40px',fontWeight:'600'}} className="mb1">Start working together?</p>
					<p>You can learn the investment and finance basics by interning with us. Click below to know more.</p>
					<Link to="/workwithus"><button className="mb4 fw6 white pa3 ph4 f5 grow pointer" style={{borderRadius:'8px',border:'none',backgroundColor:'blue'}}>Find Out More</button></Link>
				</div>
		</div>
			)}

export default Pricing;
