import React from 'react';
import './TaglineCarousel.css';
import {FaQuoteLeft} from 'react-icons/fa';
import Carousel from 'react-elastic-carousel';
import { Taglines } from './Taglines';

const TaglineComponent = ({quote,author}) => {
    return(
        <div className="grow tagline-component flex flex-column justify-center ma4">
            <FaQuoteLeft color="#0066ef"/>
            <p className="i f4">{quote}</p>
            <p className="b f3">{author}</p>
        </div>
    );
}


const TaglineCarousel = () => {
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 1 },
        { width: 850, itemsToShow: 1 },
        { width: 1150, itemsToShow: 3 },
        { width: 1450, itemsToShow: 3 },
        { width: 1750, itemsToShow: 3 },
    ]

    return(
        <div className=" flex justify-center items-center tagline-carousel-container">
            <Carousel breakPoints={breakPoints} showArrows={false}>
                {
                    Taglines.map((item)=>{
                        return(
                            <TaglineComponent quote={item.quote} author={item.author}/>
                        )
                    })
                }
            </Carousel>
        </div>
    );
}

export default TaglineCarousel;