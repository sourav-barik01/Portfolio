import React from 'react';
import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer_container container">
                <h1 className="footer_title">Sourav Barik</h1>
                <ul className="footer_list">
                    <li>
                        <a href="#about" className="footer_link">About</a>
                    </li>
                    <li>
                        <a href="#skills" className="footer_link">Skills</a>
                    </li>
                    <li>
                        <a href="#projects" className="footer_link">Project</a>
                    </li>
                </ul>

                <div className="footer_social">
                    <a href="https://www.linkedin.com/in/sourav-barik/" className='home_social-icon' target='_blank'>
                        <i class="uil uil-linkedin"></i>
                    </a>

                    <a href="https://github.com/sourav-barik01" className='home_social-icon' target='_blank'>
                        <i class="uil uil-github"></i>
                    </a>
                </div>

                <span className="footer_copy">&#169; Sourav Barik, All Right Reserved</span>
            </div>
        </footer>
    )
}

export default Footer