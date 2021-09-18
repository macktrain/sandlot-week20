import React, { useState , useEffect } from 'react'
import Header from '../components/Header'
import MySlider from '../components/MySlider';
const { red, blue, green } = require('@material-ui/core/colors');
const Button = require('@material-ui/core/Button').default;

const Home = () => {
    const [role, setRole] = useState(0);
    
    const roles = [ 
        'Full Stack Web Engineer',
        'Project Manager',
        'People Manager'
    ];

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
            {/* <MySlider/> */}
        </div>
    )
}

export default Home
