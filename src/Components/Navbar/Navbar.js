import React,{Component,useState} from 'react';
import 'tachyons';
import './Navbar.scss';
import { useLocation } from 'react-router-dom';
import {Nav,Navbar,NavDropdown} from 'react-bootstrap'
import { BiMenu } from "react-icons/bi";
import { IoLogoWhatsapp } from "react-icons/io";
import { ImCross } from "react-icons/im";
import { HashLink as Link } from 'react-router-hash-link';
import Logo from './Growthway-04.png';

const NavBar =()=>
{
  const[visible,setVisible]=useState(false);


  const location = useLocation();
  console.log(location);
    return (
      <div>
        <a style={{
          position:"fixed",
          bottom:"20px",
          right:"2px",
          zIndex:"10"
        }} href="https://wa.me/917832890455" rel="noreferrer" target="_blank" className="pa2">
          <IoLogoWhatsapp className="bg-white br4 shadow-5" size="3rem" color="#25D366"/>
        </a>
      <Navbar style={{overflow:'hidden'}} fixed="top" variant="dark" className="Navbar-color shadow-5" expand="lg">
          <div className="black show-ham flex items-center" onClick={()=>{setVisible(!visible)}} >
            <img className={`mr-auto nav ${visible?'':'toggle'}`} src={Logo} alt="logo" style={{height:'30px',width:'70px',float:'left'}}/>
            <BiMenu size='1.8rem'/>
          </div>
          <Nav className={`mr-auto nav ${visible?' toggle':''}`}>
            <div className="">
            <img src={Logo} alt="Logo" style={{height:"60px", width:"146px"}} className="pa2"></img>
            </div>

            <div className="w-80 navbar-right">
              <Link  style={{color:"#002e45"}} className="font-weight-nav links" to='/' ><span className={` f5 ${location.pathname==='/'?'active':''} `} >Home</span></Link>
              <Link  style={{color:"#002e45"}} className="font-weight-nav links" to='/services/#service' ><span className={` f5 ${location.pathname==='/services/' && location.hash==='#service'?'active':''} `} >Services</span></Link>
              <Link  style={{color:"#002e45"}} className="font-weight-nav links" to='/surveyform/#survey' ><span className={` f5 ${location.pathname==='/surveyform/' && location.hash==='#survey'?'active':''} `}   >Survey</span></Link>
              <Link  style={{color:"#002e45"}} className="font-weight-nav links" to='/about/#about' ><span className={` f5 ${location.pathname==='/about/' && location.hash==='#about'?'active':''} `} >About Us</span></Link>
              <Link  style={{color:"#002e45"}} className="font-weight-nav links" to='/workwithus/#work' ><span className={` f5 ${location.pathname==='/workwithus/' && location.hash==='#work'?'active':''} `} >Work with Us</span></Link>
              <Link  style={{color:"#002e45"}} className="font-weight-nav links" to='/blog/#blog' ><span className={` f5 ${location.pathname==='/blog/' && location.hash==='#blog'?'active':''} `} >Blogs</span></Link>
            </div>
          </Nav>
      </Navbar>
      </div>
    );
  }

export default NavBar;
