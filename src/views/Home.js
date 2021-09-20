import React, { useState , useEffect } from 'react'
import Carousel from 'react-elastic-carousel';
import Item from "../components/Item";
import "../App.css";

const Home = () => {
    const [role, setRole] = useState(0);
    
    const roles = [ 
        'Full Stack Web Engineer',
        'Project Manager',
        'People Manager'
    ];

    state = {
        items: [
          {id: 1, title: 'item #1'},
          {id: 2, title: 'item #2'},
          {id: 3, title: 'item #3'},
          {id: 4, title: 'item #4'},
          {id: 5, title: 'item #5'}
        ]
    }

    const { items } = this.state;

    return (
        <div class='wrapper'>
            <div class="main">
                <p class="textString">
                    <span id='intro' class='wrapper-items'>
                        Hello, my name is 
                    </span>
                    <span id='name' class='wrapper-items'>
                        Lee Macklin 
                    </span>
                    <span class='wrapper-items'>
                        and I am a 
                    </span>
                    <span id='roles' class='wrapper-items'>
                        { roles[role] }
                    </span>
                </p>
            </div>
            <div>
                <Carousel>
                    {items.map(item => <div key={item.id}>{item.title}</div>)}
                </Carousel>
            </div>
        </div>
    )
}

export default Home
