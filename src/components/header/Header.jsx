import React from 'react'
import './header.css'
import ME from '../../assets/photo.png'
import HeaderSocials from './HeaderSocials'
import Typerwriter from 'typewriter-effect'
import { VscFoldDown } from 'react-icons/vsc'
import CV from '../../assets/cv.pdf'

function Header() {
    return (
        <header>
            <div className='container header_container'>
                <h2>Hi, </h2>
                <h2>I'm Lane</h2>
                <h2 className="typewriter-effect">
                    <Typerwriter
                        onInit={(typewriter) => {
                            typewriter
                                .typeString("A Front End Developer")
                                .pauseFor(1500)
                                .deleteAll()
                                .typeString(" A React Developer")
                                .pauseFor(1500)
                                .deleteAll()
                                .typeString("I am a Web Developer")
                                .start();
                        }}
                    />
                </h2>
                <HeaderSocials />

                <a href={CV} download className='btn btn-primary'>Download CV</a>

                <div className="me">
                    <img src={ME} alt="me" />
                </div>
                <a href="#contact" className='scroll_down'><VscFoldDown /></a>
            </div>
        </header>
    )
}

export default Header