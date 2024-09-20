import React from "react"
import "./about.css"

function About() {
  return (
    <section className="about--section" id="about">
      <h1 className="about--me--title">A little about me</h1>
      <div className="description">
        <p>
          With nearly a year of professional experience and an intensive
          programming training, I specialize in developing web and mobile
          applications using React.
        </p>
        <p>
          My experience at a small company has provided me with the unique
          opportunity to take on diverse responsibilities, rapidly expanding my
          skill set and allowing me to make significant contributions across
          multiple aspects of the development process.
        </p>
        <p>
          I have developed and integrated sophisticated features, enhanced
          application performance, and resolved numerous bugs, significantly
          boosting stability and reliability for over million users.
        </p>
        <a href="#contact" className="btn">
          Let's Talk
        </a>
      </div>
    </section>
  )
}

export default About
