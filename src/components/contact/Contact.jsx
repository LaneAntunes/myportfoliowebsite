import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';


const serviceKey = process.env.REACT_EMAILJS_SERVICE_KEY
const templateKey = process.env.REACT_EMAILJS_TEMPLATE_KEY
const accessKey = process.env.REACT_EMAILJS_ACCESS_KEY


function Contact() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(serviceKey, templateKey, form.current, accessKey)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()

    };

    return (
        <section className='contact--section' id="contact">
            <h5>Get in Touch</h5>
            <h1>Contact Me</h1>
            <div className='contact--container'>
                <form ref={form} onSubmit={sendEmail} className='contact-form'>
                    <input type="text" name='name' placeholder='Enter Your Name' required />
                    <input type="email" name='email' placeholder='Enter Your E-mail' required />
                    <textarea name='message' rows="7" placeholder='Your Message' required></textarea>
                    <button type='submit' className='btn'>Send Message</button>
                </form >
                <div className='contact-options'>
                    <article className='contact-option'>
                        <MdOutlineEmail className='contact-icons' />
                        <h4>Email</h4>
                        <h5>laneantunes51@gmail.com</h5>
                        <a href='mailto:laneantunes51@gmail.com' target="_blank" rel="noopener noreferrer" >Send a message</a>
                    </article>
                    <article className='contact-option'>
                        <BsWhatsapp className='contact-icons' />
                        <h4>WhatsApp</h4>
                        <h5>+351 910570477</h5>
                        <a href="https://wa.me/351910570477" target="_blank" rel="noopener noreferrer">Send a message</a>
                    </article>

                </div>

            </div>

        </section>
    )
}

export default Contact