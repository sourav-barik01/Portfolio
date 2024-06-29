import React from 'react'

const Info = () => {
    return (
        <div className="about_info grid">
            <div className="about_box">
                <i class='bx bx-code-alt about_icons'></i>
                <h3 className="about_title">Coding Skills</h3>
                <span className="about_subtitle">Solved 600+ Questions</span>
            </div>

            <div className="about_box">
                <i class='bx bxs-file-doc about_icons'></i>
                <h3 className="about_title">Front-End Projects</h3>
                <span className="about_subtitle">Completed 7+ Projects</span>
            </div>

            <div className="about_box">
                <i class='bx bx-briefcase-alt-2 about_icons'></i>
                <h3 className="about_title">Internship</h3>
                <span className="about_subtitle">Completed From PHN Technology Pvt. Ltd</span>
            </div>
        </div>
    )
}

export default Info