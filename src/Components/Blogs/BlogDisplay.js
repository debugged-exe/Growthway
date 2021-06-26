import React, {useState, useEffect } from 'react';
import {BsChevronDoubleDown, BsCalendar } from "react-icons/bs";
import { Link } from "react-router-dom";
import 'tachyons';
import './BlogDisplay.scss';

const BlogDisplay = () => {

	const[items,setItems]=useState([]);
	const [visible, setVisible] = useState(3);
	const [len, setLen] = useState(0);

	const showMoreItems = () => {
		setVisible((prev) => prev + 3);
	}

	useEffect(()=>{
    fetch('https://stormy-escarpment-39477.herokuapp.com/blog')
    .then(response=>response.json())
    .then(resp=>{
      if(resp[0].heading){
        setItems(resp);
        setLen(resp.length);
        console.log(resp.length);
      }
    })
    .catch(err => {
     console.log(err)

   })
 },[])

	return (

    <div id="blog" className="pt6">
      <h1 className="tc">Blogs</h1>
      <div className="flex flex-column justify-center items-center">
        {
          items.slice(0,visible)
          .map((item,index) => {
            if(index===0 || (index%2)===0){
              return(
								<>
                <div className="blog-item" key={index}>
                  <div>
                    <img src={item.img} loading="lazy" alt="blogs" style={{width: '100%', objectFit: 'cover'}}/>
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
            else if( index===1 || (index%2)!==0 )
						{
              return(
								<>
                <div className="blog-item">
                  <div className="content">
                    <h2>{item.heading}</h2>
										<p><BsCalendar color="#0069FF"/> {item.date}</p>
                    <p>{item.description}</p>
                  </div>
                  <div>
                    <img src={item.img} loading="lazy" alt="blogs" style={{width: '100%', objectFit: 'cover'}}/>
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
