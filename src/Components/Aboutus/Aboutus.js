import React from 'react';
import './Aboutus.scss';
import 'tachyons';

const Aboutus = () => {
	return (
		<div className="tc about-us">
			<p style={{ fontSize: '4rem', fontWeight: '700', textDecoration: '3px underline green'}}>About us</p>
			<p className="about">In publishing and graphic design, Lorem ipsum is a placeholder text
			commonly used to demonstrate the visual form of a document or a
			typeface without relying on meaningful content. Lorem ipsum may be
			used as a placeholder before final copy is available. <br /><br />In publishing and graphic design, Lorem ipsum is a placeholder text
			commonly used to demonstrate the visual form of a document or a
			typeface without relying on meaningful content. Lorem ipsum may be
			used as a placeholder before final copy is available. <br /><br />In publishing and graphic design, Lorem ipsum is a placeholder text
			commonly used to demonstrate the visual form of a document or a
			typeface without relying on meaningful content. Lorem ipsum may be
			used as a placeholder before final copy is available.<br /><br /></p>
		</div>
	)
}

export default Aboutus;
