import React from 'react';
import './Header.scss';
import 'tachyons';

const Header = () => {
	return (
		<div className="head white">
		 <div className="heading-container">
			<p className="heading mt0 flex" >Growthway Investments</p>
			<div className="title gray">
			  <h2>Expertise.</h2>
				<h2>Commitment.</h2>
				<h2>Value.</h2>
			</div>
			 <h3 style={{fontWeight:'300'}}>Since 2020 </h3>
		 </div>
		</div>
	)
}

export default Header;
