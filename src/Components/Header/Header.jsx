import React, { useState } from 'react';
import './header.css';

const Header = () => {

    const[Toggle, showMenu] = useState(false);
    const[activeNav, setActiveNav] = useState("#home");

    return (
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className='nav_logo'>Sourav</a>
                <div className={Toggle ? "nav_menu show-menu" : "nav_menu"}>
                    <ul className="nav_list grid">
                        <li className="nav_items">
                            <a href="#home" onClick={() => setActiveNav("#home")} className={activeNav == "#home" ?
                            "nav_links active_link" : "nav_links"}>
                                <i class="uil uil-estate nav_icons"></i>Home
                            </a>
                        </li>
                        <li className="nav_items">
                            <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav == "#about" ?
                            "nav_links active_link" : "nav_links"}>
                                <i class="uil uil-user nav_icons"></i>About
                            </a>
                        </li>
                        <li className="nav_items">
                            <a href="#skills" onClick={() => setActiveNav("#skills")} className={activeNav == "#skills" ?
                            "nav_links active_link" : "nav_links"}>
                                <i class="uil uil-file-alt nav_icons"></i>Skills
                            </a>
                        </li>
                        <li className="nav_items">
                            <a href="#projects" onClick={() => setActiveNav("#projects")} className={activeNav == "#projects" ?
                            "nav_links active_link" : "nav_links"}>
                                <i class="uil uil-briefcase-alt nav_icons"></i>Projects
                            </a>
                        </li>
                        <li className="nav_items">
                            <a href="#qualification" onClick={() => setActiveNav("#qualification")} className={activeNav == "#qualification" ?
                            "nav_links active_link" : "nav_links"}>
                                <i class="uil uil-briefcase-alt nav_icons"></i>Qualification
                            </a>
                        </li>
                        <li className="nav_items">
                            <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav == "#contact" ?
                            "nav_links active_link" : "nav_links"}>
                                <i class="uil uil-message nav_icons"></i>Contacts
                            </a>
                        </li>
                    </ul>

                    <i class="uil uil-times nav_close" onClick={()=>showMenu(!Toggle)}></i>
                </div>

                <div className='nav_toggle' onClick={()=>showMenu(!Toggle)}>
                    <i class="uil uil-align-right"></i>
                </div>
            </nav>
        </header>
    )
}

export default Header