import React from "react"
import "./skills.css"
import { BsPatchCheckFill } from "react-icons/bs"

function Skills() {
  return (
    <section classname="skills--section" id="skills">
      <h5>Core Competencies</h5>
      <h1>Skills & Technologies</h1>
      <div className="skill-containers">
        <div className="skill-cards fontend">
          <h2>Font-end</h2>
          <div className=" py-5">
            {/* <div> */}
            <article>
              <BsPatchCheckFill className="icons" />
              <h4>Javascript</h4>
            </article>
            <article>
              <BsPatchCheckFill className="icons" />
              <h4>React JS/React Native </h4>
            </article>
            {/* <article>
                <BsPatchCheckFill className="icons" />
                <h4>React Native</h4>
              </article> */}
            {/* </div> */}
            <div>
              <article>
                <BsPatchCheckFill className="icons" />
                <h4>CSS/SASS</h4>
              </article>
              <article>
                <BsPatchCheckFill className="icons" />
                <h4>Tailwind CSS</h4>
              </article>
              <article>
                <BsPatchCheckFill className="icons" />
                <h4> Material UI</h4>
              </article>
              {/* <article>
                <BsPatchCheckFill className="icons" />
                <h4>Git/SourceTree</h4>
              </article> */}
            </div>
          </div>
        </div>
        {/* <div className="small-skill-containers"> */}
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
          <div style={{ paddingLeft: 15, paddingRight: 15 }} className="pb-5">
            <h5 style={{ textAlign: "center" }} className="text-xs">
              *Authentication, database operations, and cloud functions.
            </h5>
          </div>
        </div>
        <div className="skill-cards">
          <h2>Tools</h2>
          <div className=" bg-blue min-w-full flex-wrap  flex gap-2 p-3 justify-center ">
            {/* <div className=" min-w-full flex flex-row flex-wrap"> */}
            <article>
              <BsPatchCheckFill className="icons" />
              <div>
                <h4>
                  <span className="text-purple-500">Version Control:</span>
                  Git, GitHub, SourceTree, Bitbucket.
                </h4>
              </div>
            </article>
            <article>
              <BsPatchCheckFill className="icons" />
              <div>
                <h4>
                  <span className="text-purple-500">IDEs:</span> XCode, Android
                  Studio, WebStorm, Visual Studio Code.
                </h4>
              </div>
            </article>
            {/* <article>
                <BsPatchCheckFill className="icons" />
                <div>
                  <h4>SourceTree</h4>
                </div>
              </article>
              <article>
                <BsPatchCheckFill className="icons" />
                <div>
                  <h4>Bitbucket</h4>
                </div>
              </article>
              <article>
                <BsPatchCheckFill className="icons" />
                <div>
                  <h4>XCode - Android Studio</h4>
                </div>
              </article>
              <article>
                <BsPatchCheckFill className="icons" />
                <div>
                  <h4>Webstorm - VS code</h4>
                </div>
              </article> */}
            {/* </div> */}
          </div>
        </div>
        <div className="skill-cards pb-5">
          <h2>Human Languages</h2>
          <div className="language-card">
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
      {/* </div> */}
    </section>
  )
}

export default Skills
