import React from 'react'
import bodyImg from './images/cartoonbody.gif'
import "../App.css";

const Home = () => {

    return (
        <div class='wrapper' >
            <div id='leftSide'>
                <img id='bodyImg' src={bodyImg} alt='Cartoon Lee' />
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
                        <div>
                            Who is also 
                        </div>
                        <div id='plus'>
                            &#x2B;
                        </div>
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
                <div id='equals'>
                    <hr
                        style={{
                            color: "green",
                            height: 3,
                            width: 200
                        }}
                    />
                </div>
                <div id='result'>
                    Great Teammate!
                </div>
            </div>
        </div>
    )
}

export default Home
