import React, { useState } from 'react';
import "./project.css";

const Projects = () => {
    const[toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <section className="projects section" id="projects">
            <h2 className="section_title">Projects</h2>
			<span className="section_subtitle">Click To View</span>

            <div className="projects_container container grid">
                <div className="projects_content">
                    <div>
                        <i class='bx bx-link projects_icon'></i>
                        <h3 className="projects_title">Razorpay <br /> Clone</h3>
                    </div>

                    <span className="projects_button" onClick={() => toggleTab(1)}>View More
                        <i className='uil uil-arrow-right projects_button-icon'></i>
                    </span>

                    <div className={toggleState == 1 ? "projects_modal active-modal" : "projects_modal"}>
                        <div className="projects_modal-content">
                            <i onClick={()=>toggleTab(0)} className='uil uil-times projects_modal-close'></i>
                            <h3 className="projects_modal-title">Razorpay Clone</h3>
                            <p className="projects_modal-description">"A Razorpay clone frontend made using HTML and 
                            Tailwind CSS is a user interface replica of the payment gateway functionality of the 
                            Razorpay platform."</p>
                            <ul className="projects_modal-services grid">
                                <li className="projects_modal-service">
                                    <i className='uil uil-check-circle projects_modal-icon'></i>
                                    <p className="projects_modal-info">This Project Only Contains Frondend Part</p>
                                </li>
                                <li className="projects_modal-service">
                                    <i className='uil uil-check-circle projects_modal-icon'></i>
                                    <p className="projects_modal-info">Made Using Tailwind CSS</p>
                                </li>
                                <li className="projects_modal-service">
                                    <i className='uil uil-check-circle projects_modal-icon'></i>
                                    <p className="projects_modal-info">Clean UI Experience</p>
                                </li>
                                <li className="projects_modal-service">
                                    <i className='uil uil-check-circle projects_modal-icon'></i>
                                    <a className='projects_modal-info' href="https://sourav-razorpay.netlify.app/" target='_blank'>Click this to view my project</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="projects_content">
                    <div>
                        <i class='bx bxl-trip-advisor projects_icon'></i>
                        <h3 className="projects_title">Git <br /> Spy</h3>
                    </div>

                    <span className="projects_button" onClick={() => toggleTab(2)}>View More
                        <i className='uil uil-arrow-right projects_button-icon'></i>
                    </span>

                    <div className={toggleState == 2 ? "projects_modal active-modal" : "projects_modal"}>
                        <div className="projects_modal-content">
                            <i onClick={()=>toggleTab(0)} className='uil uil-times projects_modal-close'></i>
                            <h3 className="projects_modal-title">Git Spy</h3>
                            <p className="projects_modal-description">"Users can see their profile photo used in github, 
                            nos. of repos a person have, any specified link & also their location"</p>
                            <ul className="projects_modal-services grid">
                                <li className="projects_modal-service">
                                    <i className='uil uil-check-circle projects_modal-icon'></i>
                                    <p className="projects_modal-info">Uses an APIs Call to fetch the data from Github</p>
                                </li>
                                <li className="projects_modal-service">
                                    <i className='uil uil-check-circle projects_modal-icon'></i>
                                    <p className="projects_modal-info">Made Using HTML, CSS & Javascript</p>
                                </li>
                                <li className="projects_modal-service">
                                    <i className='uil uil-check-circle projects_modal-icon'></i>
                                    <p className="projects_modal-info">Ability to Switch between Light Mode & Dark Modes</p>
                                </li>
                                <li className="projects_modal-service">
                                    <i className='uil uil-check-circle projects_modal-icon'></i>
                                    <a className='projects_modal-info' href="https://sourav-gitspy.netlify.app/" target='_blank'>Click this to view my project</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="projects_content">
                    <div>
                        <i class='bx bxl-shopify projects_icon'></i>
                        <h3 className="projects_title">Bazaar <br /> Mall</h3>
                    </div>

                    <span className="projects_button" onClick={() => toggleTab(3)}>View More
                        <i className='uil uil-arrow-right projects_button-icon'></i>
                    </span>

                    <div className={toggleState == 3 ? "projects_modal active-modal" : "projects_modal"}>
                        <div className="projects_modal-content">
                            <i onClick={()=>toggleTab(0)} className='uil uil-times projects_modal-close'></i>
                            <h3 className="projects_modal-title">Bazaar Mall</h3>
                            <p className="projects_modal-description">"It is a part Of E-Commerce Website where users can 
                            select any item to buy or remove from cart. They can also see their total bill in cart option"</p>
                            <ul className="projects_modal-services grid">
                                <li className="projects_modal-service">
                                    <i className='uil uil-check-circle projects_modal-icon'></i>
                                    <p className="projects_modal-info">This Project Uses an API Call which get handled 
                                    by async function()</p>
                                </li>
                                <li className="projects_modal-service">
                                    <i className='uil uil-check-circle projects_modal-icon'></i>
                                    <p className="projects_modal-info">Made Using React(Toastify, Routes, Redux & Tailwind CSS)</p>
                                </li>
                                <li className="projects_modal-service">
                                    <i className='uil uil-check-circle projects_modal-icon'></i>
                                    <p className="projects_modal-info">Clean UI Experience w/ Responsiveness</p>
                                </li>
                                <li className="projects_modal-service">
                                    <i className='uil uil-check-circle projects_modal-icon'></i>
                                    <a className='projects_modal-info' href="https://sourav-shopping-cart.netlify.app/" target='_blank'>Click this to view my project</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects