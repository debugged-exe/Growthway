import React from 'react';
import './Header.scss';
import 'tachyons';

const Header = () => {
	return (
		<div style={{lineHeight:'1.6'}} className="head-bg flex tc flex-column justify-center items-center white b">
			<p style={{fontSize:"3.4rem"}} className="ma0 pa0">Growthway Investments</p>
			<p style={{fontSize:"1.6rem"}} className="ma0 pa0">Providing Short Term Investment Solutions.</p>
			<p className="ma0 pa0 f6 black">- Registered Since 2020</p>
		</div>
	)
}

export default Header;
