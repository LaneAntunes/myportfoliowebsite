import React from 'react'
import './about.css'




function About() {
    return (
        <section className='about--section' id="about">
            <h1>A bit about me</h1>
            <div className='description'>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, necessitatibus! Impedit doloremque omnis unde maiores. Asperiores eveniet et sit. Nostrum rem quas repellat quibusdam maxime aperiam minima consequuntur tenetur labore!
                </p>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit cum labore numquam voluptatem, placeat cupiditate reiciendis nam ad vero. Nesciunt, fugit! Ullam, sequi tempora deserunt amet omnis quasi repellendus facere!
                </p>

                <a href="#contact" className='btn'>Let's Talk</a>
            </div>
        </section>
    )
}

export default About

