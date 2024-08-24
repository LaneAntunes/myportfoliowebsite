import React from "react"
import "./skills.css"
import { BsPatchCheckFill } from "react-icons/bs"

function Skills() {
  return (
    <section classname="skills--section" id="skills">
      <h5>Core Competencies</h5>
      <h1>Skills & Technologies</h1>
      <div className="skill-containers">
        <div className="skill-cards" style={{ width: "60%" }}>
          <h2>Font-end</h2>
          <div className="frontend-card">
            <div>
              <article>
                <BsPatchCheckFill className="icons" />
                <h4>Javascript</h4>
              </article>
              <article>
                <BsPatchCheckFill className="icons" />
                <h4>React </h4>
              </article>
              <article>
                <BsPatchCheckFill className="icons" />
                <h4>React Native</h4>
              </article>
            </div>
            <div>
              <article>
                <BsPatchCheckFill className="icons" />
                <h4>CSS/SASS</h4>
              </article>
              <article>
                <BsPatchCheckFill className="icons" />
                <h4>Tailwind CSS / Material UI</h4>
              </article>
              <article>
                <BsPatchCheckFill className="icons" />
                <h4>Git/SourceTree</h4>
              </article>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            gap: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="skill-cards">
            <h2>Back-end</h2>
            <div className="backend-card">
              <article>
                <BsPatchCheckFill className="icons" />
                <div>
                  <h4>Firebase</h4>
                </div>
              </article>
              <article>
                <BsPatchCheckFill className="icons" />
                <div>
                  <h4>AWS Lambda</h4>
                </div>
              </article>
            </div>
            <div style={{ paddingLeft: 15, paddingRight: 15 }}>
              <h5 style={{ textAlign: "center" }}>
                *Authentication, database operations, and cloud functions.
              </h5>
            </div>
          </div>
          <div className="skill-cards">
            <h3>Languages</h3>
            <div className="language-card" style={{ gap: 30 }}>
              <article>
                <div>
                  <h4>Portuguese</h4>
                  <h5>Native</h5>
                </div>
              </article>
              <article>
                <div>
                  <h4>English</h4>
                  <h5>Fluent</h5>
                </div>
              </article>
              <div>
                <article>
                  <div>
                    <h4>French</h4>
                    <h5>Intermediate</h5>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
