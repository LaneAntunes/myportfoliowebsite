import React from 'react'
import './header.css'
import ME from '../../assets/photo.png'
import HeaderSocials from './HeaderSocials'
import Typerwriter from 'typewriter-effect'
import { VscFoldDown } from 'react-icons/vsc'
import { FiDownload } from 'react-icons/fi'

import CV from '../../assets/cv.pdf'

function Header() {
    return (
        <header>
            <div className=' container header_container '>
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
                <a href={CV} download className=' btn-download '>Download CV</a>
                <a href={CV} download className=' btn-download-mobile '>CV  <FiDownload /></a>
                <div className="me">
                    <img src={ME} alt="me" />
                </div>
                <a href='mailto:laneantunes51@gmail.com' target="_blank" className='scroll-down-email'>laneAntunes51@gmail.com</a>
            </div>
        </header>
    )
}

export default Header