import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'


function Contact() {
    return (
        <section id="contact">
            <h5>Get in Touch</h5>
            <h1>Contact Me</h1>
            <div className='contact--container'>
                <div className='contact-options'>
                    <article className='contact-option'>
                        <MdOutlineEmail />
                        <h4>Email</h4>
                        <h5>laneantunes51@gmail.com</h5>
                        <a href='mailto:laneantunes51@gmail.com'>Send a message</a>
                    </article>
                    <article className='contact-option'>
                        <MdOutlineEmail />
                        <h4>WhatsApp</h4>
                        <h5>+351 910570477</h5>
                        <a href="https://api.whatsapp.com/send?phone+351910570477">Send a message</a>
                    </article>
                    <article className='contact-option'></article>
                </div>
                <form actions="" className='contact-form'>
                    <input placeholder='Enter Your Name'></input>
                    <input placeholder='Enter Your E-mail'></input>
                    <textarea></textarea>
                    <a href='#'>Send message</a>
                </form>
            </div>

        </section>
    )
}

export default Contact