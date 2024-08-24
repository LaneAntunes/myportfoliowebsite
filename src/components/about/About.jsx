import React from "react"
import "./about.css"

function About() {
  return (
    <section className="about--section" id="about">
      <h1 className="about--me--title">A little about me</h1>
      <div className="description">
        <p>
          With nearly one year of professional experience and an additional
          eighteen months of rigorous programming training, I have honed my
          skills in developing dynamic web and mobile applications using the
          React framework.
        </p>
        <p>
          I enjoy experimenting with various component libraries and tools to
          optimize the functionality, efficiency, and performance of the
          projects I engage with. Always happy to connect with fellow tech
          enthusiasts and share insights on the latest trends in development.
        </p>
        <a href="#contact" className="btn">
          Let's Talk
        </a>
      </div>
    </section>
  )
}

export default About
