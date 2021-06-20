import React, {useState, useEffect } from 'react';
import {BsChevronDoubleDown, BsCalendar } from "react-icons/bs";
import { BlogsList } from './BlogsList.js';
import { Link } from "react-router-dom";
import 'tachyons';
import './BlogDisplay.scss';

const BlogDisplay = () => {

	const[setItems]=useState([]);
	const [visible, setVisible] = useState(3);
	const [len, setLen] = useState(BlogsList.length);

	const showMoreItems = () => {
		setVisible((prev) => prev + 3);
	}

	return (

    <div id="blogtop" className="pt6">
      <h1 className="tc">Blogs</h1>
      <div className="flex flex-column justify-center items-center">
        {
          BlogsList.slice(0,visible)
          .map((item,index) => {
            if(item.display==="left"){
              return(
								<>
                <div className="blog-item">
                  <div>
                    <img src={item.image} alt="hehe" style={{width: '100%', objectFit: 'cover'}}/>
                  </div>
                  <div className="content">
                    <h2>{item.heading}</h2>
									  <p><BsCalendar color="#0069FF"/> {item.date}</p>
                    <p>{item.description}</p>
                  </div>
                </div>
							<p className="center" style={{width:'100px',borderBottom:'2px solid #0069FF'}}></p>
            </>
							);
            }
            else {
              return(
								<>
                <div className="blog-item">
                  <div className="content">
                    <h2>{item.heading}</h2>
										<p><BsCalendar/> {item.date}</p>
                    <p>{item.description}</p>
                  </div>
                  <div>
                    <img src={item.image} alt="hehe" style={{width: '100%', objectFit: 'cover'}}/>
                  </div>
                </div>
							<p className="center" style={{width:'100px',borderBottom:'2px solid #0069FF'}}></p>
							</>
              )

            }
          })
        }
      </div>
      <div className="pointer" onClick={showMoreItems}>
        <p className={`center ${visible >= len ? 'hide' : ''}`} style= {{textAlign: 'center'}}>Show More</p>
        <BsChevronDoubleDown className={` arrowdown code ${visible >= len ? 'hide' : ''}`} size="2rem" style= {{color:'#0069FF',width:'100%', textAlign: 'center'}}/>
      </div>
    </div>

	)
}

export default BlogDisplay;
