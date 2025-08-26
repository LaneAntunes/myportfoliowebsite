import React from "react"
import "./footer.css"
import { BsWhatsapp } from "react-icons/bs"
import { BsLinkedin } from "react-icons/bs"
import { FaGithub } from "react-icons/fa"

function Footer() {
  return (
    <footer id="footer">
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        {/* <li>
          <a href="#contact"></a>
        </li> */}
      </ul>
      <div className="footer--socials">
        <a href="https://github.com/LaneAntunes">
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/lane-antunes-57a07690/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a href="https://wa.me/351910570477" target="_blank">
          <BsWhatsapp />
        </a>
      </div>
    </footer>
  )
}

export default Footer
