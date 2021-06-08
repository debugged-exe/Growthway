import React from 'react';

// css
import './Aboutus.scss';
import 'tachyons';

// components
import img from './aboutimage.jpg';
import {BiUserCircle} from 'react-icons/bi';
import {GiReceiveMoney} from 'react-icons/gi';
import {FaHandHoldingUsd} from 'react-icons/fa';


const Aboutus = () => {
	return (

		<div className="tc white">
				<h1>How <span style={{color:'green'}}>Growthway Investments</span> Works</h1>
				 <p>Get involved in our tremendous platform and Invest. We will utilize
		     your money and give you profit in your wallet automatically.</p>
			<div className="about-grid">
				<div className="circle-div">
					<div className="bg-black" style={{borderRadius:'50%',height:'200px',width:'200px',border:'5px solid green', paddingTop: '12%'}}>
				    	<BiUserCircle size="5rem"/>
					</div>
					<p className="f3">01 Create Account</p>
				</div>
				<div className=" circle-div" >
				    <div className="bg-black" style={{borderRadius:'50%',height:'200px',width:'200px',border:'5px solid green', paddingTop: '11%'}}>
				    	<FaHandHoldingUsd size="5rem"/>
					</div>
					<p className="f3">02 Invest to plan</p>
				</div>
				<div className=" circle-div" >
				    <div className="bg-black" style={{borderRadius:'50%',height:'200px',width:'200px',border:'5px solid green', paddingTop: '11%'}}>
					    <GiReceiveMoney size="5rem"/>
					</div>
					<p className="f3">03 Get profit</p>
				</div>
			</div>

	   <div className="about-with-image">
			 <div className="parallax">
			    <p className="about-header" style={{ fontSize: '3rem', fontWeight: '700'}}>
			    	About <span style={{color:'green'}}>us</span>
			    </p>
				<p className="about">
					In publishing and graphic design, Lorem ipsum is a placeholder text
					commonly used to demonstrate the visual form of a document or a
					typeface without relying on meaningful content. Lorem ipsum may be
					used as a placeholder before final copy is available.In publishing and graphic design, Lorem ipsum is a placeholder text
					commonly used to demonstrate the visual form of a document or a
					typeface without relying on meaningful content. Lorem ipsum may be
					used as a placeholder before final copy is available.In publishing and graphic design, Lorem ipsum is a placeholder text
					commonly used to demonstrate the visual form of a document or a
					typeface without relying on meaningful content. Lorem ipsum may be
					used as a placeholder before final copy is available.<br /><br />
				</p>
			 </div>
		 </div>
		</div>
	)
}

export default Aboutus;
