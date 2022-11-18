import React from 'react'
import './portfolio.css'
import MasterGroceries from '../../assets/Capture4.PNG';
import MemeGenerator from '../../assets/Capture2.PNG';
import tenzies from '../../assets/tenziesGamePic.PNG';


function Portfolio() {
    return (
        <section className='portfolio-section' id="portfolio">
            <h5>Some things I have built</h5>
            <h1>My Projects</h1>
            <a href='https://github.com/LaneAntunes/My-Portfolio-Website' target='_blank' className=' website-code'>Website Source Code</a>
            <div className='my-projects'>
                <div className='project-details'>
                    <div className='product-img'><img src={MasterGroceries} alt="MasterGroceries" /></div>
                    <div className='project-description'>
                        <h3 >Meal Planner</h3>
                        <p>
                            The program loops over the objects in a JS file, and displays information about each recipe on the screen. The user can add, remove meals and cross off items they have already purchased.</p>
                        <div className='project-tools'>
                            <h4>Javascript(ES6)</h4>
                            <h4>HTML</h4>
                            <h4>CSS3</h4>
                        </div>
                        <div className='project-btns'>
                            <a href='https://laneantunes.com/mastergroceriesjs/' target='_blank' className='btn'>Live</a>
                            <a href='https://github.com/LaneAntunes/MasterGroceries' target='_blank' className='btn'>Code</a>
                        </div>
                    </div>
                </div>

                <div className='project-details'>
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
                </div>
                <div className='project-details'>
                    <div className='product-img'><img src={MemeGenerator} alt="meme" /></div>
                    <div className='project-description'>
                        <h3 >Meme Generator</h3>
                        <p>The user can choose a funny image (fetched from an API) and write a joke on it to create their own meme.</p>
                        <div className='tools-and-btns'>
                            <div className='project-tools'>
                                <h4>CSS3</h4>
                                <h4>React</h4>
                                <h4>API</h4>
                            </div>
                            <div className='project-btns'>
                                <a href='https://laneantunes.com/memegenerator/' target='_blank' className='btn'>Live</a>
                                <a href='https://github.com/LaneAntunes/memegenerator' className='btn'>Code</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio