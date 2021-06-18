import React from 'react';
import './Header.scss';
import 'tachyons';

const Header = () => {
	return (
		<div className="head-bg flex tc flex-column justify-center items-center white b">
			<p className="ma0 pa0 f1">Growthway Investments</p>
			<p className="ma0 pa0 f4">Since, 2020</p>
		</div>
	)
}

export default Header;
