import React from 'react'
import './skills.css'
import { BsPatchCheckFill } from 'react-icons/bs'

function Skills() {
    return (
        <section classname='skills--section' id="skills">
            <h5>What I have been learning</h5>
            <h1>Skills</h1>
            <div className='skill-containers'>
                <div className='skill-cards'>
                    <h3>Front End Development</h3>
                    <div className='skills-details'>
                        <div>
                            <article>
                                <BsPatchCheckFill className="icons" />
                                <h4>HTML</h4>
                            </article>
                            <article>
                                <BsPatchCheckFill className="icons" />
                                <h4>CSS</h4>
                            </article>
                            <article>
                                <BsPatchCheckFill className="icons" />
                                <h4>JavaScript</h4>
                            </article>
                        </div>
                        <div>
                            <article>
                                <BsPatchCheckFill className="icons" />
                                <h4>REACT</h4>
                            </article>
                            <article>
                                <BsPatchCheckFill className="icons" />
                                <h4>GIT</h4>
                            </article>
                        </div>
                    </div>
                </div>
                <div className='skill-cards'>
                    <h3>Human Languages</h3>
                    <div className='skills-details'>
                        <div >
                            <article>
                                <BsPatchCheckFill className="icons" />
                                <div>
                                    <h4>Portuguese</h4>
                                    <h5>Native</h5>
                                </div>

                            </article>
                            <article>
                                <BsPatchCheckFill className="icons" />
                                <div>
                                    <h4>English</h4>
                                    <h5>Proficient</h5>
                                </div>
                            </article>
                        </div>
                        <div >
                            <article>
                                <BsPatchCheckFill className="icons" />
                                <div>
                                    <h4>French</h4>
                                    <h5>Intermediate</h5>
                                </div>
                            </article>
                            <article>
                                <BsPatchCheckFill className="icons" />
                                <div>
                                    <h4>German</h4>
                                    <h5>Beginner</h5>
                                </div>
                            </article>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    )
}

export default Skills
