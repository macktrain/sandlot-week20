import React, { useState , useEffect } from 'react'
import Carousel from 'react-elastic-carousel';
import Item from "../components/Item";
import "../App.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 3, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 }
];

const Portfolio = () => {

    const [items, setItems] = useState([1, 2, 3, 4, 5]);

    return (
        <div class='wrapper'>
            <div id='carousel'>
                <div>
                    Portfolio
                </div>
                <div>
                    Portfolio
                </div>
                <div>
                    Portfolio
                </div>
                <Carousel breakPoints={breakPoints}>
                {items.map((item) => (
                    <Item key={item}>{item}</Item>
                ))}
                </Carousel>
            </div>
        </div>
    )
}

export default Portfolio
