import React, { useState , useEffect } from 'react'
import bodyImg from './cartoonbody.gif'
import "../App.css";

const Home = () => {
    const [role, setRole] = useState(0);
    
    const roles = [ 
        'Full Stack Web Engineer',
        'Project Manager',        
        'People Manager'
    ];

    const [items, setItems] = useState([1, 2, 3, 4, 5]);

    return (
        <div class='wrapper'>
            <div>
                <div>
                    <span id='intro' class='wrapper-items'>
                        Hello, my name is 
                    </span>
                    <span id='name' class='wrapper-items'>
                        Lee Macklin 
                    </span>
                    <span class='wrapper-items'>
                        and I am a 
                    </span>
                </div>
                <span id='roles'>
                    { roles[role] }
                </span>
            </div>
            <div id='addBackground'>
                <img id='bodyImg' src={bodyImg} />
                <div id ='openingNote'>
                    Who is also 
                </div>
                <div class="marqueeContainer blur">
                    <ul class="slider">
                        <li><p> an Innovator</p></li>
                        <li><p> a Strong Comunicator</p></li>
                        <li><p> a Project Manager</p></li>
                        <li><p> a Scrum Master</p></li>
                        <li><p> a Scrum Product Owner</p></li>
                        <li><p> a Technology Leader</p></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Home
