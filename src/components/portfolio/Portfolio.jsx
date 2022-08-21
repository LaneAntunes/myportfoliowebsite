import React from 'react'
import './portfolio.css'
import MasterGroceries from '../../assets/Capture3.PNG';


function Portfolio() {
    return (
        <section className='portfolio--section' id="portfolio">
            <h5>Some things I have built</h5>
            <h1>My Projecs</h1>
            <div className='my-projects'>
                <div className='project--details'>
                    <div className='product--img'><img src={MasterGroceries} alt="MasterGroceries" /></div>
                    <div className='project--description'>
                        <h3 >Master Groceries</h3>
                        <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta minus architecto repellat corrupti sint harum perferendis quo dolores deleniti ex. Excepturi incidunt, hic cupiditate perferendis aliquid harum facilis sint debitis.</p></div>
                        <div className='project--tools'>
                            <h4>Javascript(ES6)</h4>
                            <h4>HTML</h4>
                            <h4>CSS</h4>
                        </div>
                        <div className='project--btns'>
                            <a href='https://mastergroceries.herokuapp.com/' target='_blank' className='btn'>Live</a>
                            <a href='https://github.com/LaneAntunes/MasterGroceries' target='_blank' className='btn'>Code</a>
                        </div>
                    </div>
                </div>
                <div className='project--details'>
                    <div className='product--img'><img src={MasterGroceries} alt="MasterGroceries" /></div>
                    <div className='project--description'>
                        <h3 >Meme Generator</h3>
                        <div ><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta minus architecto repellat corrupti sint harum perferendis quo dolores deleniti ex. Excepturi incidunt, hic cupiditate perferendis aliquid harum facilis sint debitis.</p></div>
                        <div className='project--tools'>
                            <h4>React</h4>
                            <h4>API</h4>

                        </div>
                        <div className='project--btns'>
                            <a href='#' className='btn'>Live</a>
                            <a href='#' className='btn'>Code</a>
                        </div>
                    </div>
                </div>
                <div className='project--details'>
                    <div className='product--img'><img src={MasterGroceries} alt="MasterGroceries" /></div>
                    <div className='project--description'>
                        <h3 >Portfolio Website</h3>
                        <div ><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta minus architecto repellat corrupti sint harum perferendis quo dolores deleniti ex. Excepturi incidunt, hic cupiditate perferendis aliquid harum facilis sint debitis.</p></div>
                        <div className='project--tools'>
                            <h4>React</h4>
                        </div>
                        <div className='project--btns'>
                            <a href='#' className='btn'>Live</a>
                            <a href='https://github.com/LaneAntunes/My-Portfolio-Website' target='_blank' className='btn'>Code</a>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Portfolio