import React, { useRef } from 'react';
import "./contact.css";
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_wqnx1qm', 'template_khkghun', form.current, 'jbmAklMBAdNz-dxcX')
        e.target.reset();
    };

    return (
        <section className="contact section" id="contact">
            <h2 className="section_title">Contact Me</h2>
			<span className="section_subtitle">Get In Touch</span>

            <div className="contact_container container grid">
                <div className="contact_content">
                    <h3 className="contact_title">Talk To Me</h3>
                    <div className="contact_info">
                        <div className="contact_card">
                            <i className='bx bx-mail-send contact_card-icon'></i>

                            <h3 className="contact_card-title">Email</h3>
                            <span className="contact_card-data">souravbarik001@gmail.com</span>

                            <a href="mailto:souravbarik001@gmail.com" className="contact_button">Write Me 
                                <i className='bx bx-right-arrow-alt contact_button-icon'></i>
                            </a>
                        </div>

                        <div className="contact_card">
                            <i className='bx bxl-whatsapp contact_card-icon'></i>

                            <h3 className="contact_card-title">Whatsapp</h3>
                            <span className="contact_card-data">+916204553925</span>
                        </div>

                        <div className="contact_card">
                            <i class='bx bxs-phone-call contact_card-icon'></i>

                            <h3 className="contact_card-title">Phone</h3>
                            <span className="contact_card-data">+916204553925</span>
                        </div>
                    </div>
                </div>

                <div className="contact_content">
                    <h3 className="contact_title">Further Queries ?</h3>

                    <form ref={form} onSubmit={sendEmail} className="contact_form">
                        <div className="contact_form-div">
                            <label className="contact_form-tag">Name</label>
                            <input required type="text" name='name' className='contact_form-input' placeholder='Insert Your Name' />
                        </div>
                        <div className="contact_form-div">
                            <label className="contact_form-tag">Mail</label>
                            <input required type="email" name='email' className='contact_form-input' placeholder='Insert Your Email' />
                        </div>
                        <div className="contact_form-div">
                            <label className="contact_form-tag">Message</label>
                            <textarea required name="message" className='contact_form-input contact_form-area' cols="30" rows="10" 
                            placeholder='Insert Your Message'></textarea>
                        </div>
                        <button className='button contact-below-button button-flex'>Send Response</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact