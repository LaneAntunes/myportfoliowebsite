import React from 'react'
import './portfolio.css'
import MasterGroceries from '../../assets/Capture4.PNG';
import MemeGenerator from '../../assets/Capture2.PNG';
import AibnbClone from '../../assets/Capture5.PNG';




function Portfolio() {
    return (
        <section className='portfolio--section' id="portfolio">
            <h5>Some things I have built</h5>
            <h1>My Projects</h1>
            <a href='https://github.com/LaneAntunes/My-Portfolio-Website' target='_blank' className=' website--code'>Website Code</a>
            <div className='my-projects'>
                <div className='project--details'>
                    <div className='product--img'><img src={MasterGroceries} alt="MasterGroceries" /></div>
                    <div className='project--description'>
                        <h3 >Meal Planner App</h3>
                        <p>The user can add, remove meals and cross off items they have already purchased. Every time a meal is added or removed from the list, the number of servings and price is updated. The JS files don't need to be changed in order to add new meals or categories to the app.</p>
                        <div className='project--tools'>
                            <h4>Javascript(ES6)</h4>
                            <h4>HTML</h4>
                            <h4>CSS3</h4>
                        </div>
                        <div className='project--btns'>
                            <a href='https://laneantunes.github.io/mastergroceries.github.io/' target='_blank' className='btn'>Live</a>
                            <a href='https://github.com/LaneAntunes/MasterGroceries' target='_blank' className='btn'>Code</a>
                        </div>
                    </div>
                </div>

                <div className='project--details'>
                    <div className='product--img'><img src={AibnbClone} alt="airbnb" /></div>
                    <div className='project--description'>
                        <h3 >Airbnb Clone</h3>
                        <p> All projects, including this one, were built using CSS3 variables, flexbox, grid and media queries for tablet and mobile.</p>
                        <div className='tools-and-btns'>
                            <div className='project--tools'>
                                <h4>HTML</h4>
                                <h4>CSS3</h4>
                            </div>
                            <div className='project--btns'>
                                <a href='https://laneantunes.github.io/myairbnbclone.github.io/' target='_blank' className='btn'>Live</a>
                                <a href='https://github.com/LaneAntunes/myairbnbclone.github.io' target='_blank' className='btn'>Code</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='project--details'>
                    <div className='product--img'><img src={MemeGenerator} alt="meme" /></div>
                    <div className='project--description'>
                        <h3 >Meme Generator</h3>
                        <p>The user can choose a funny image (from an API) and write a joke on it to create their own meme.</p>
                        <div className='tools-and-btns'>
                            <div className='project--tools'>
                                <h4>React</h4>
                                <h4>API</h4>
                            </div>
                            <div className='project--btns'>
                                <a href='https://laneantunes.github.io/memegenerator/' target='_blank' className='btn'>Live</a>
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