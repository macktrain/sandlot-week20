import React from 'react'
import agartha from './images/agartha.gif'
import budget from './images/budget.gif'
import weather from './images/weather.gif'
import pet from './images/petfinder.gif'
import portfolioImg from './images/portfolio.gif'
import blog from './images/blog.gif'
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardLink, MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';

const Portfolio = () => {
    return (
            <div>
                <div class='portfolioRow' id='1'>
                    <div class='project'>
                        <MDBCard style={{ width: '18rem' }}>
                            <MDBCardImage position='top' alt='...' src={agartha} />
                            <MDBCardBody>
                                <MDBCardTitle>Agarthan Adventures</MDBCardTitle>
                                <MDBCardText>
                                    MVP role player text adventure game that allows a user to create a user and fight enemies!
                                </MDBCardText>
                            </MDBCardBody>
                            <MDBListGroup flush>
                                <MDBListGroupItem>NodeJS, Express, MySQL, HTML/CSS/JS</MDBListGroupItem>
                                <MDBListGroupItem>Team Project where I built out server, api end points, routers and front end.</MDBListGroupItem>
                            </MDBListGroup>
                            <MDBCardBody>
                                <MDBCardLink href='https://agarthan-adventures.herokuapp.com/' target="_blank" rel="noopener noreferrer">Live link</MDBCardLink>
                                <MDBCardLink href='https://github.com/macktrain/Agarthan-Adventures'  target="_blank" rel="noopener noreferrer">Github</MDBCardLink>
                            </MDBCardBody>
                        </MDBCard>
                    </div>
                    <div class='project'>
                        <MDBCard style={{ width: '18rem' }}>
                            <MDBCardImage position='top' alt='...' src={budget} />
                            <MDBCardBody>
                                <MDBCardTitle>On/Offline Budget Tool</MDBCardTitle>
                                <MDBCardText>
                                Budget tracker that allows user to manage expenses while online, but will also track expenses while offline.
                                </MDBCardText>
                            </MDBCardBody>
                            <MDBListGroup flush>
                                <MDBListGroupItem>NodeJS, Express, Cloud MongoDB, IndexedDB</MDBListGroupItem>
                                <MDBListGroupItem>Individual Project</MDBListGroupItem>
                            </MDBListGroup>
                            <MDBCardBody>
                                <MDBCardLink href='https://leebudgetapp.herokuapp.com/' target="_blank" rel="noopener noreferrer">Live link</MDBCardLink>
                                <MDBCardLink href='https://github.com/macktrain/sandlot-week19' target="_blank" rel="noopener noreferrer">Github</MDBCardLink>
                            </MDBCardBody>
                        </MDBCard>
                    </div>
                    <div class='project'>
                        <MDBCard style={{ width: '18rem' }}>
                            <MDBCardImage position='top' alt='...' src={weather} />
                            <MDBCardBody>
                                <MDBCardTitle>Weather App</MDBCardTitle>
                                <MDBCardText>
                                A weather app that leverages  a 3rd party API, allowing us to see weather forecasts in the US while keeping history.
                                </MDBCardText>
                            </MDBCardBody>
                            <MDBListGroup flush>
                                <MDBListGroupItem>HTML/CSS/JS, Openweather API, </MDBListGroupItem>
                                <MDBListGroupItem>Individual Project</MDBListGroupItem>
                            </MDBListGroup>
                            <MDBCardBody>
                                <MDBCardLink href='https://macktrain.github.io/sandlot-week6/' target="_blank" rel="noopener noreferrer">Live link</MDBCardLink>
                                <MDBCardLink href='https://github.com/macktrain/sandlot-week6' target="_blank" rel="noopener noreferrer">Github</MDBCardLink>
                            </MDBCardBody>
                        </MDBCard>
                    </div>
                </div>
                <div class='portfolioRow' id='2'>
                    <div class='project'>
                        <MDBCard style={{ width: '18rem' }}>
                            <MDBCardImage position='top' alt='...' src={pet} />
                            <MDBCardBody>
                                <MDBCardTitle>PetHarmony</MDBCardTitle>
                                <MDBCardText>
                                    App that allows a user to find a US-based pet and get directions to that pet.
                                </MDBCardText>
                            </MDBCardBody>
                            <MDBListGroup flush>
                                <MDBListGroupItem>HTML/CSS/JS, GoogleMaps API, PetFinder API</MDBListGroupItem>
                                <MDBListGroupItem>Team Project where I built out backend and API integrations.</MDBListGroupItem>
                            </MDBListGroup>
                            <MDBCardBody>
                                <MDBCardLink href='https://macktrain.github.io/teamProject/' target="_blank" rel="noopener noreferrer">Live link</MDBCardLink>
                                <MDBCardLink href='https://github.com/macktrain/sandlot-week12'  target="_blank" rel="noopener noreferrer">Github</MDBCardLink>
                            </MDBCardBody>
                        </MDBCard>
                    </div>
                    <div class='project'>
                        <MDBCard style={{ width: '18rem' }}>
                            <MDBCardImage position='top' alt='...' src={portfolioImg} />
                            <MDBCardBody>
                                <MDBCardTitle>Personal Portfolio</MDBCardTitle>
                                <MDBCardText>
                                Personal portfolio explaining who I am and my skills.  A user will also be able to contact me and review my resume at their leisure.
                                </MDBCardText>
                            </MDBCardBody>
                            <MDBListGroup flush>
                                <MDBListGroupItem>ReactJS</MDBListGroupItem>
                                <MDBListGroupItem>Individual Project</MDBListGroupItem>
                            </MDBListGroup>
                            <MDBCardBody>
                                <MDBCardLink href='https://leebudgetapp.herokuapp.com/' target="_blank" rel="noopener noreferrer">Live link</MDBCardLink>
                                <MDBCardLink href='https://github.com/macktrain/sandlot-week19' target="_blank" rel="noopener noreferrer">Github</MDBCardLink>
                            </MDBCardBody>
                        </MDBCard>
                    </div>
                    <div class='project'>
                        <MDBCard style={{ width: '18rem' }}>
                            <MDBCardImage position='top' alt='...' src={blog} />
                            <MDBCardBody>
                                <MDBCardTitle>Blog Site</MDBCardTitle>
                                <MDBCardText>
                                   Everything necessary to create a social community through a blog site is available here.
                                </MDBCardText>
                            </MDBCardBody>
                            <MDBListGroup flush>
                                <MDBListGroupItem>HTML/CSS/JS, Handlebars, Node.js, MySQL/JAWSDB</MDBListGroupItem>
                                <MDBListGroupItem>Individual Project</MDBListGroupItem>
                            </MDBListGroup>
                            <MDBCardBody>
                                <MDBCardLink href='https://leemacklinblog.herokuapp.com/' target="_blank" rel="noopener noreferrer">Live link</MDBCardLink>
                                <MDBCardLink href='https://github.com/macktrain/sandlot-week14' target="_blank" rel="noopener noreferrer">Github</MDBCardLink>
                            </MDBCardBody>
                        </MDBCard>
                    </div>
                </div>
            </div>
    )
}

export default Portfolio
