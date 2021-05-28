import React from 'react';
import './Pricing.scss';

const Pricing = () => {
	return (
    <div className="mb5">
      <p className="tc" style={{fontSize:'2rem'}}>Pricing Panel</p>
      <div className="grid tc">
          <div>
             <h2 className="white pa3 bg-black">Basic</h2>
             <h3>FREE</h3>
               <p>Add a subheading</p>
               <p>Add a subheading</p>
               <p>Add a subheading</p>
               <p>Add a subheading</p>
            <button className="button mt3 mb3"><span>Enroll Now!</span></button>
          </div>
          <div>
             <h2 className="white pa3 bg-black">Gold</h2>
             <h3>2999/mo</h3>
               <p>Add a subheading</p>
               <p>Add a subheading</p>
               <p>Add a subheading</p>
               <p>Add a subheading</p>
            <button className="button mt3 mb3"><span>Enroll Now!</span></button>
          </div>
          <div>
             <h2 className="white pa3 bg-black">Platinum</h2>
             <h3>9999/yr</h3>
                <p>Add a subheading</p>
                <p>Add a subheading</p>
                <p>Add a subheading</p>
                <p>Add a subheading</p>
            <button className="button mt3 mb3"><span>Enroll Now!</span></button>
          </div>
      </div>
    </div>
	)
}

export default Pricing;
