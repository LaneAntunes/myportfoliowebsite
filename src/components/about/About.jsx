import React from 'react'
import './about.css'




function About() {
    return (
        <section className='about--section' id="about">
            <h1 className='about--me--title'>Get to know more about me</h1>
            <div className='description'>
                <p>
                    I am a self-taught front-end developer currently based in Lisbon, Portugal.
                    I am very passionate about programming and would love to have an opportunity to work with the technologies listed here. I am also eager to learn new technogies to improve myself as a developer.
                </p>
                <p>
                    I have excellent communication skills and can easily adapt to new cultures, as I have taught languages for many years and lived in several countries.
                </p>

                <a href="#contact" className='btn'>Let's Talk</a>
            </div>
        </section>
    )
}

export default About

