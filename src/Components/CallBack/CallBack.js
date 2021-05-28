import React from 'react';
import './CallBack.scss';
import 'tachyons';

const CallBack = () => {
	return (
    <div className="bg-black white callback-container">
        <div className="grid-design">

          <p className="f2 bb pb3">Book a Consultation Call only <span className="b">@ ₹99/-</span></p>

          <div className="bb flex flex-warp">
            <p className="gray ma0" style={{fontSize:'5rem',fontWeight:'500'}}>01</p>
            <div className="ml4">
              <h1>Tax Presentation</h1>
              <p>We prepare everything you need for your tax return </p>
            </div>
          </div>

          <div className="bb flex flex-warp">
            <p className="gray ma0" style={{fontSize:'5rem',fontWeight:'500'}}>02</p>
            <div className="ml4">
              <h1>Start-up Package</h1>
              <p>We prepare everything you need for your tax return </p>
            </div>
          </div>

          <div className="bb flex flex-warp">
            <p className="gray ma0" style={{fontSize:'5rem',fontWeight:'500'}}>03</p>
            <div className="ml4">
              <h1>Wealth Management</h1>
              <p>We prepare everything you need for your tax return </p>
            </div>
          </div>

        </div>

        <div>
          <h2>Request a Call-Back</h2>
        </div>
    </div>
	)
}

export default CallBack;
