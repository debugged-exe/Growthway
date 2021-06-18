import React,{Component,useState} from 'react';
import 'tachyons';
import './Navbar.scss';
import { useLocation } from 'react-router-dom';
import {Nav,Navbar,NavDropdown} from 'react-bootstrap'
import { BiMenu } from "react-icons/bi";
import { ImCross } from "react-icons/im";
import { HashLink as Link } from 'react-router-hash-link';

const NavBar =()=>
{
  const[visible,setVisible]=useState(false);


  const location = useLocation();
    return (
      <Navbar style={{overflow:'hidden'}} fixed="top" variant="dark" className="Navbar-color" expand="lg">
          <div className="white show-ham" onClick={()=>{setVisible(!visible)}} >
            <BiMenu/>
          </div>
          <Nav className={`mr-auto Navbar-text-color nav ${visible?' toggle':''}`}>
             <Link className=" links" to='/' ><span className={` f4 ${location.pathname==='/'?'active':''} `} >Home</span></Link>
              <Link className=" links" to='/services' ><span className={` f4 ${location.pathname==='/services'?'active':''} `} >Services</span></Link>
             <Link className=" links" to='/surveyform' ><span className={` f4 ${location.pathname==='/surveyform'?'active':''} `}   >Survey</span></Link>
             <Link className=" links" to='/about' ><span className={` f4 ${location.pathname==='/about'?'active':''} `} >About Us</span></Link>
              <Link className=" links" to='/workwithus' ><span className={` f4 ${location.pathname==='/workwithus'?'active':''} `} >Work with Us</span></Link>
             <Link className=" links" to='/blog' ><span className={` f4 ${location.pathname==='/blog'?'active':''} `} >Blogs</span></Link>
          </Nav>

      </Navbar>
    );
  }

export default NavBar;
