import React,{Component,useState} from 'react';
import 'tachyons';
import './Navbar.scss';
import { useLocation } from 'react-router-dom';
import {Nav,Navbar,NavDropdown} from 'react-bootstrap'
import { BiMenu } from "react-icons/bi";
import { ImCross } from "react-icons/im";
import { HashLink as Link } from 'react-router-hash-link';
import Logo from './Growthway-04.png';

const NavBar =()=>
{
  const[visible,setVisible]=useState(false);


  const location = useLocation();
  console.log(location);
    return (
      <Navbar style={{overflow:'hidden'}} fixed="top" variant="dark" className="Navbar-color shadow-5" expand="lg">
          <div className="black show-ham" onClick={()=>{setVisible(!visible)}} >
            <BiMenu/>
          </div>
          <Nav className={`mr-auto nav ${visible?' toggle':''}`}>
            <div className="">
            <img src={Logo} alt="Logo" style={{height:"60px", width:"146px"}} className="pa2"></img>
            </div>

            <div className="w-80 navbar-right">
              <Link  style={{color:"#002e45"}} className="font-weight-nav links" to='/' ><span className={` f5 ${location.pathname==='/'?'active':''} `} >Home</span></Link>
              <Link  style={{color:"#002e45"}} className="font-weight-nav links" to='/services' ><span className={` f5 ${location.pathname==='/services'?'active':''} `} >Services</span></Link>
              <Link  style={{color:"#002e45"}} className="font-weight-nav links" to='/surveyform' ><span className={` f5 ${location.pathname==='/surveyform'?'active':''} `}   >Survey</span></Link>
              <Link  style={{color:"#002e45"}} className="font-weight-nav links" to='/about' ><span className={` f5 ${location.pathname==='/about'?'active':''} `} >About Us</span></Link>
              <Link  style={{color:"#002e45"}} className="font-weight-nav links" to='/workwithus' ><span className={` f5 ${location.pathname==='/workwithus'?'active':''} `} >Work with Us</span></Link>
              <Link  style={{color:"#002e45"}} className="font-weight-nav links" to='/blog' ><span className={` f5 ${location.pathname==='/blog' ?'active':''} `} >Blogs</span></Link>
            </div>
          </Nav>

      </Navbar>
    );
  }

export default NavBar;
