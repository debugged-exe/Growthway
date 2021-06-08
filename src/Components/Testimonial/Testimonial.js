import React, { useState, useEffect } from 'react';
import 'tachyons';
import { TestimonialData } from './TestimonialData.js';
import Carousel from 'react-elastic-carousel';
import './Testimonial.scss';

const Testimonial = () => {
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 850, itemsToShow: 2 },
        { width: 1150, itemsToShow: 3 },
        { width: 1450, itemsToShow: 3 },
        { width: 1750, itemsToShow: 3 },
    ]

    return (
        <div className="testimonials" >
            <h2 className="testimonial-heading">
                Testimonial's 
            </h2>
            <p className=" testimonial-quote">
                From our early days, we've been providing reliable service to our clientele.<br />
                We've had the honor being the firm of choice of the following corporations
            </p>
            <Carousel breakPoints={breakPoints}>
                {
                    TestimonialData.map((item) => {
                        return (
                            <div className="bg-white client-card">
                                <h2>{item.client}</h2>
                                <p style={{textAlign: 'left'}}>{item.description}</p>
                            </div>
                        )
                    })
                }
            </Carousel>
        </div>
    )
}

export default Testimonial;
