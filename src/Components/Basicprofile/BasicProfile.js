import React from 'react';
import './Basicprofile.css';
import * as AiIcons from 'react-icons/ai';
import {ImTumblr2} from 'react-icons/im';
import {GrLinkedin} from 'react-icons/gr';
import basicprofile from './basicprofile.svg';
import CountUp from 'react-countup';

function BasicProfile(){
    return(
        <div className="basic-profile flex justify-around w-100 mt4 pa2">
            <div classname="w-50">
                <img src={basicprofile} className="profile-image" alt="basicprofile"/>
            </div>

            <div className=" w-100-m w-50-ns w-100">
                <h2 className="pl3-m">Basic Profile</h2>
                <div className="basic-profile-data  flex justify-space-around  w-100 " >
                    <div className="w-50-l w-50-m-ns pl3-m w-100 pl0-ns pl3" >
                        <h4 style={{color:'#0069FF'}}>Biography</h4>
                        <p style={{lineHeight:"1.5", fontFamily:"sans-serif"}}><span className="f2 b"><CountUp end={752} duration={5}/> + </span> Total clients served</p>
                        <p style={{lineHeight:"1.5", fontFamily:"sans-serif"}}><span className="b f2"><CountUp end={200} duration={5}/> + </span> Present Clients</p>
                        <p style={{lineHeight:"1.5", fontFamily:"sans-serif"}}><span className="b f2"><CountUp end={4} duration={5}/> + </span> Countries of Operation</p>
                        <p style={{lineHeight:"1.5", fontFamily:"sans-serif"}}><span className="b f2">6 : 4 </span> Male/Female Investor Ratio</p>
                    </div>
                    <div className="w-50-l w-50-m-ns pl3-m w-100 pl0-ns pl3" >
                        <h4 className="pl3-ns" style={{color:'#0069FF'}}>Our focus</h4>
                        <p style={{lineHeight:"1.5"}} className="pl3-ns">We aim at providing prioritized services to our clients in the sectors of investment and finances.</p>
                        <p style={{lineHeight:"1.5"}} className="pl3-ns">Growthway is delighted and takes pride to have filled this <span className="b">gender parity</span> to a healthy extend in the field of investment.</p>
                    </div>
                </div>
                <div className="pt4">
                            <a className="black" href="https://www.facebook.com/growthwayinvestments/"><AiIcons.AiFillFacebook className={'pa2 grow-large hover-social-icons'} size={'1.8rem'}/></a>
                            <a className="black" href="https://twitter.com/GrowthwayI?s=09"><AiIcons.AiOutlineTwitter className={'pa2 grow-large hover-social-icons'} size={'1.8rem'}/></a>
                            <a className="black" href="https://instagram.com/growthwayinvestments?utm_medium=copy_link"><ImTumblr2 className={'pa2 grow-large hover-social-icons'} size={'1.8rem'}/></a>
                            <a className="black" href="http://growthwayinvestments.tumblr.com"><AiIcons.AiOutlineInstagram className={'pa2 grow-large hover-social-icons'} size={'1.9rem'}/></a>
                            <a className="black" href="https://www.linkedin.com/company/growthwayinvestments"><GrLinkedin className={'pa2 grow-large hover-social-icons'} size={'1.8rem'}/></a>
                 </div>
            </div>
        </div>
    )
}

export default BasicProfile;
