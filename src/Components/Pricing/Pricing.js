import React from 'react';
import './Pricing.scss';
import {Plans} from './Plans.js'
import 'tachyons';

const Pricing = () => {
	return (
    <div >
      <p className="tc" style={{fontSize:'2rem'}}>Pricing Panel</p>
      <div className="grid tc">
       { Plans.map((plan) => {
         return (
          <div style={{height: 'fit-content',  marginTop: '0%', paddingTop: '0%', borderRight: '1px solid black'}}>
              <p className="white pa4 bg-black" style={{ margin: '0%',fontSize: '3rem', fontWeight: '700'}}>{plan.planType}</p>
              <p style={{padding: '7%',fontSize: '2rem', fontWeight: '600'}}>{plan.planPrice}</p>
              <ul className='tc' style={{maxWidth: 'fit-content'}}>
                <li>{plan.subHeading1}</li>
                <li>{plan.subHeading2}</li>
                <li>{plan.subHeading3}</li>
                <li>{plan.subHeading4}</li>
              </ul>
            <button className="button mt3"><span>Enroll Now!</span></button>
          </div>
         );
       })
       }
      </div>
    </div>
	)
}

export default Pricing;


