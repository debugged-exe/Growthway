import React from 'react';
import './ReachUsAt.scss';
import image from './ReachUsAt.png';
import { FaGithub,FaWhatsapp,FaFacebookF,FaPhoneAlt,FaDiscord } from "react-icons/fa";
import { GoMail,GoLocation } from "react-icons/go";
import { AiFillLinkedin,AiFillTwitterCircle,AiOutlineInstagram } from "react-icons/ai";
import { FiSend } from "react-icons/fi";
import 'tachyons';

const ReachUsAt = () => {
	return (
		<div className="reach-container bg-black white pb4">
       <div className="center mt3 line">
        <hr className="vertical" style={{border: '2px solid green'}}/>
	       <img src={image} className="reach-img" style={{borderRadius:'50%'}}/>
        <hr className="horizontal" style={{border: '2px solid green'}}/>
			 </div>
       <div className=" flex flex-column reach-text mb4" >
         <p className="f2"><span style={{borderBottom: '3px solid green'}}>Reach Us At</span></p>
         <div className='tl flex flex-column' id='links'>
          <a href='mailto:debugged.exe@gmail.com' className="mb2"><GoMail size='2em' style={{marginRight: '5px'}}/>debugged.exe@gmail.com</a>
          <a href="tel:919168894490" className="mb2 mt2"><FaPhoneAlt  size="1.5em" style={{marginRight: '5px'}}/>+91 9168894490</a>
          <p><GoLocation style={{marginRight: '5px'}}/>Address is dummy, flat no 90, Sr 100, India</p>
         </div>
         <div>
           <p className="f2"><span style={{borderBottom: '3px solid green'}}>Useful Links</span></p>
           <a href="https://twitter.com/ExeDebugged?s=08" className="icon"><AiFillTwitterCircle size="2em"/></a>
           <a href="https://www.linkedin.com/company/debugged-exe" className="icon"> <AiFillLinkedin size="2em"/></a>
           <a href="https://www.facebook.com/Debuggedexe-103521081750705/" className="icon"><FaFacebookF size="1.8em"/></a>
           <a href="#" className="icon"><FaDiscord size='2em'/></a>
           <a href="https://wa.me/919168894490" className="icon"><FaWhatsapp size="2em"/></a>
           <a href="https://instagram.com/debugged.exe?igshid=eun6v0gval7m" className="icon"><AiOutlineInstagram size='2em'/></a>
         </div>
       </div>
		</div>
	)
}

export default ReachUsAt;
