import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';




function Contact() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_nfnmgqr', 'template_w1oiw5h', form.current, 'sQ7sR6O7HijO-g0ZI')
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
                        <a href='mailto:laneantunes51@gmail.com' target="_blank">Send a message</a>
                    </article>
                    <article className='contact-option'>
                        <BsWhatsapp className='contact-icons' />
                        <h4>WhatsApp</h4>
                        <h5>+351 910570477</h5>
                        <a href="https://api.whatsapp.com/send?phone+351910570477" target="_blank">Send a message</a>
                    </article>

                </div>

            </div>

        </section>
    )
}

export default Contact