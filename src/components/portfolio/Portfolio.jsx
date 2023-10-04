import React from 'react'
import './portfolio.css'
import MasterGroceries from '../../assets/Capture4.PNG';
import MemeGenerator from '../../assets/Capture2.PNG';
import tenzies from '../../assets/tenziesGamePic.PNG';
import websitePicture from '../../assets/websitePicture.JPG';
import portfolioWebsite from '../../assets/portfolioWebsite.JPG';

function Portfolio() {
    return (
        <section className='portfolio-section' id="portfolio">
            <h5>Some things I have built</h5>
            <h1>My Projects</h1>
            <div className='main-project '>
                <div className='product-img'><img src={websitePicture} alt="Language website" /></div>
                <div className='main-project-description '>
                    <h2 >Full-Stack Language Website</h2>
                    <h3>Users can:</h3>
                    <div className='all-user-actions'>
                        <p className='user-actions'>1. Log in/out </p>
                        <p className='user-actions'>2. Take tests </p>
                        <p className='user-actions'>3. Save their scores. </p>
                        <p className='user-actions'>4. Have a personalized progress page. </p>
                        <p className='user-actions'>5. Sign up for a newsletter. </p>
                        <p className='user-actions'>6. Contact the teacher. </p>

                        <p className='user-actions'>7. Subscribe to a language course.</p>
                    </div>
                    <div className='main-project-tools '>
                        <div className='back-front-end'>
                            <h3>Back-end:</h3>
                            <p>Firebase functions, firestore, authentication and firebase storage.</p>
                        </div>
                        <div className='back-front-end'>
                            <h3>Front-end:</h3>
                            <p>React and Tailwind CSS</p>
                        </div>

                    </div>

                    <p className='extra-tools-main-project'>* Axios, react router, custom hooks, functional components, props, useState, useEffect...</p>
                    <div className='project-btns'>
                        <a href='https://teacherlaneantunes.com.br/' target='_blank' rel="noreferrer" className='btn'>Live</a>
                        <a href='https://github.com/LaneAntunes/Language-Website-Full-Stack' target='_blank' rel="noreferrer" className='btn'>Code</a>
                    </div>
                </div>
            </div>

            <div className='my-projects'>
                <div className='project-details'>
                    <div className='product-img'><img src={MasterGroceries} alt="MasterGroceries" /></div>
                    <div className='project-description'>
                        <h3 >Meal Planner Application</h3>
                        <p>I created a meal management application with vanilla Javascript. Users can select meals to add to their supermarket list. The app instantly updates the list's details, including prices. Users can also remove meals and mark items as purchased for efficient shopping.
                        </p>
                        <div className='project-tools'>
                            <h4>Javascript(ES6)</h4>
                            <h4>HTML</h4>
                            <h4>CSS3</h4>
                        </div>
                        <div className='project-btns'>
                            <a href='https://mastergroceries.vercel.app/' target='_blank' rel="noreferrer" className='btn'>Live</a>
                            <a href='https://github.com/LaneAntunes/MasterGroceries' target='_blank' rel="noreferrer" className='btn'>Code</a>
                        </div>
                    </div>
                </div>
                <div className='project-details'>
                    <div className='product-img'><img src={portfolioWebsite} alt="portfolio" /></div>
                    <div className='project-description'>
                        <h3 >Portfolio Website</h3>
                        <p>My portfolio website combines React and CSS to create a visually appealing, responsive, and well-performing platform that effectively presents my skills and achievements..</p>
                        <div className='tools-and-btns'>
                            <div className='project-tools'>
                                <h4>CSS3</h4>
                                <h4>React</h4>

                            </div>
                            <div className='project-btns'>
                                <a href='https://laneantunes.com/' target='_blank' rel="noreferrer" className='btn'>Live</a>
                                <a href='https://github.com/LaneAntunes/myportfoliowebsite' className='btn'>Code</a>
                            </div>
                        </div>
                    </div>
                </div>


                {/* <div className='project-details'>
                    <div className='product-img'><img src={tenzies} alt="tenzies" /></div>
                    <div className='project-description'>
                        <h3 >Tenzies Game</h3>
                        <p>Tenzi is a dice-rolling game. Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
                        <div className='tools-and-btns'>
                            <div className='project-tools'>
                                <h4>CSS3</h4>
                                <h4>React</h4>
                            </div>
                            <div className='project-btns'>
                                <a href='https://laneantunes.com/tenziesgame/' target='_blank' className='btn'>Live</a>
                                <a href='https://github.com/LaneAntunes/tenziesgame' target='_blank' className='btn'>Code</a>
                            </div>
                        </div>
                    </div>
                </div> */}

            </div>
        </section>
    )
}

export default Portfolio