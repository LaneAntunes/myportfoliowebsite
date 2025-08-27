import React from "react"
import "./about.css"

function About() {
  return (
    <section className="about--section" id="about">
      <h1 className="about--me--title">A little about me</h1>
      <div className="description">
        <p>
          I’m a Brazilian developer based in Lisbon, currently working remotely on a London-based fantasy football platform.
        </p>
        <p>
          In 2022, I transitioned from language teaching to software development, driven by curiosity and self-learning. I enjoy building clean, responsive interfaces and turning complex tools into simple, intuitive experiences.        </p>
        <a href="#contact" className="btn">
          Let's Talk
        </a>
      </div>
    </section>
  )
}

export default About
