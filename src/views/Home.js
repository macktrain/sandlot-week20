import React, { useState , useEffect } from 'react'
import bodyImg from './cartoonbody.gif'
import "../App.css";

const Home = () => {

    return (
        <div class='wrapper' >
            <div id='leftSide'>
                <img id='bodyImg' src={bodyImg} />
            </div>
            <div id='rightside'>
                <div>
                    <div id='intro'>
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
                    <span id='role'>
                        Full Stack Web Engineer
                    </span>
                </div>
                <div id='addBackground'>
                    <div id ='openingNote'>
                        Who is also 
                    </div>
                    <div class="otherRoles">
                        <div align="left" class='individualRole'> an Innovator</div>
                        <div align="left" class='individualRole'> a Strong Communicator</div>
                        <div align="left" class='individualRole'> a Project Manager</div>
                        <div align="left" class='individualRole'> a Scrum Master</div>
                        <div align="left" class='individualRole'> a Scrum Product Owner</div>
                        <div align="left" class='individualRole'> a Technology Leader</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
