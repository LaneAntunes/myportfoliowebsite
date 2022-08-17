import React from 'react'
import './about.css'
import aboutPhoto from '../../assets/aboutPhoto.jpg'



function About() {
    return (
        <section className='container about--section' id="about">

            <div className='description'>
                <h2>About me</h2>
                <h3>Hi there!</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt error maxime molestiae. Maxime, animi blanditiis? Dolorem accusamus ipsam maiores voluptatem culpa dicta mollitia! Illo rem velit laborum culpa nulla expedita.</p>
                <a href="#contact" className='btn'>Let's Talk</a>
            </div>
        </section>
    )
}

export default About