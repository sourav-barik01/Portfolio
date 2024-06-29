import React, { useState } from 'react';
import "./qualification.css";

const Qualification = () => {

    const[toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <section className="qualification section" id='qualification'>
            <h2 className="section_title">Qualifications</h2>
			<span className="section_subtitle">My Personal Journey</span>

            <div className="qualification_container container">
                {/* Qualification Tabs */}
                <div className="qualification_tabs">
                    {/* Education */}
                    <div onClick={()=>toggleTab(1)} className={toggleState == 1 ? "qualification_button qualification_active button-flex" :
                    "qualification_button button-flex"}>
                        <i className='uil uil-graduation-cap qualification_icon'></i>Education
                    </div>
                    {/* Experience */}
                    <div onClick={()=>toggleTab(2)} className={toggleState == 2 ? "qualification_button qualification_active button-flex" :
                    "qualification_button button-flex"}>
                        <i className='uil uil-briefcase-alt qualification_icon'></i>Experience
                    </div>
                </div>

                {/* Qualification Section */}
                <div className="qualification_sections">
                    <div className={toggleState == 1 ? "qualification_content qualification_content-active" :
                    "qualification_content"}>
                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">BTECH</h3>
                                <span className="qualification_subtitle">BIT Mesra, Ranchi</span>
                                <div className="qualification_calendar">
                                    <i className='uil uil-calendar-alt'></i> 2020 - 2024
                                </div>
                            </div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                        </div>

                        <div className="qualification_data">
                            <div></div>     {/*Gives Extra Gap*/}
                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>

                            <div>
                                <h3 className="qualification_title">Class XII</h3>
                                <span className="qualification_subtitle">D.A.V PS</span>
                                <div className="qualification_calendar">
                                    <i className='uil uil-calendar-alt'></i> 2020
                                </div>
                            </div>
                        </div>

                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">Class X</h3>
                                <span className="qualification_subtitle">D.A.V PS</span>
                                <div className="qualification_calendar">
                                    <i className='uil uil-calendar-alt'></i> 2018
                                </div>
                            </div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                        </div>
                    </div>

                    <div className={toggleState == 2 ? "qualification_content qualification_content-active" :
                    "qualification_content"}>
                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">Frontend Developer Intern</h3>
                                <span className="qualification_subtitle">PHN Technology Pvt. Ltd</span>
                                <div className="qualification_calendar">
                                    <i className='uil uil-calendar-alt'></i> Apr 2023 - June 2023
                                </div>
                            </div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                        </div>

                        <div className="qualification_data">
                            <div></div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>

                            <div>
                                <h3 className="qualification_title">Graphics Designer Intern</h3>
                                <span className="qualification_subtitle">Asiana Times</span>
                                <div className="qualification_calendar">
                                    <i className='uil uil-calendar-alt'></i> Sept 2022 - Oct 2022
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification