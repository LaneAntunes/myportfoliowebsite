import React from 'react'
import './about.css'




function About() {
    return (
        <section className='about--section' id="about">
            <h1 className='about--me--title'>A little about me</h1>
            <div className='description'>
                <p>
                    I am a self-taught front-end developer from Brazil, currently based in Lisbon, Portugal.
                    I am very passionate about programming, and would love to have an opportunity to work with the technologies listed here.  I am also highly motivated to learn and embrace new technologies to continually enhance my development skills.
                </p>
                <p>
                    My experience teaching in various countries has honed my expertise in language instruction, resulting in solid communication skills and a natural ability to adapt to diverse cultures and environments.                </p>

                <a href="#contact" className='btn'>Let's Talk</a>
            </div>
        </section>
    )
}

export default About

