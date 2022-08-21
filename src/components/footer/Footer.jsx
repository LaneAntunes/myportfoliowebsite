import React from 'react'
import './footer.css'
import { BsWhatsapp } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'

function Footer() {
    return (
        <footer id="footer">
            <ul className='permalinks'>
                <li><a href='#'>Home</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#skills'>Skills</a></li>
                <li><a href='#portfolio'>Portfolio</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>
            <div className='footer--socials'>
                <a href='https//whats'><FaGithub /></a>
                <a href='https//whats'><BsWhatsapp /></a>
            </div>
        </footer>
    )
}

export default Footer