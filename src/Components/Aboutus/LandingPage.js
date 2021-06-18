import React,{Component,useState} from 'react';
import {BiBug} from 'react-icons/bi';
import './LandingPage.scss';
import 'tachyons';

const LandingPage =()=>
{
  return(
    <div className="landing-div pa5">
     <div className="left-div">
       <p style={{fontSize:'45px',fontWeight:'600'}}>Awesome landing <span style={{color:'blue'}}>page design</span></p>
       <p className="f4">We learn from landing page's best practices and great landing pages in order to create a clear,
        crisp design that suits all your needs for a responsive landing site.</p>
     </div>
     <div className="flex flex-column">
          <div>
           <p className="f3 b"><BiBug color="blue"/> Debugged.exe</p>
           <p>Since its establishment in 2000, Brook Creative has been focusing on project management &
              implementation through cooperation.</p>
          </div>
          <div>
           <p className="f3 b"><BiBug color="blue"/> Unique designs</p>
           <p>In total, Brook Creative has created more than 2000 projects related to constructional designing
              and landscaping industries worldwide.</p>
          </div>
     </div>
  </div>
  )
}

export default LandingPage;
