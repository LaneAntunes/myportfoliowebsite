import React from "react"
import "./about.css"

function About() {
  return (
    <section className="about--section" id="about">
      <h1 className="about--me--title">A little about me</h1>
      <div className="description">
        <p>
          In 2022, I transitioned from teaching languages to software development, a shift driven by curiosity and a lot of self-teaching.
        </p>
        <p>
          Since then, I’ve been working on a fantasy football platform with over a million users, where I focus on building intuitive, responsive interfaces and simplifying complex features.
        </p>
        {/* <p>
          I have developed and integrated sophisticated features, enhanced
          application performance, and resolved numerous bugs, significantly
          boosting stability and reliability for over one million users.
        </p> */}
        <a href="#contact" className="btn">
          Let's Talk
        </a>
      </div>
    </section>
  )
}

export default About
