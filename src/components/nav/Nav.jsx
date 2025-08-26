import React from 'react'
import './nav.css'
import { AiOutlineHome } from "react-icons/ai"
import { AiOutlineUser } from "react-icons/ai"
import { GiBrain } from "react-icons/gi"
import { VscProject } from "react-icons/vsc"
import { BiMessageDots } from "react-icons/bi"
import { useState } from 'react'

function Nav() {

    const [activeNav, setActiveNav] = useState("#")

    return (
        <nav>
            <a href="#" className={activeNav == '#' ? 'active' : ''} onClick={() => setActiveNav(prev => "#")}><AiOutlineHome /></a>
            <a href="#about" className={activeNav == '#about' ? 'active' : ''} onClick={() => setActiveNav(prev => "#about")}><AiOutlineUser /></a>
            <a href="#skills" className={activeNav == '#skills' ? 'active' : ''} onClick={() => setActiveNav(prev => "#skills")}><GiBrain /></a>
            <a href="#portfolio" className={activeNav == '#portfolio' ? 'active' : ''} onClick={() => setActiveNav(prev => "#portfolio")}><VscProject /></a>
            <a href="#contact" className={activeNav == '#contact' ? 'active' : ''} onClick={() => setActiveNav(prev => "#contact")}><BiMessageDots /></a>
        </nav >
    )
}

export default Nav