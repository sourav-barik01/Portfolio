import React from 'react';
import "./about.css";
import ProfilePhoto from "../../Assests/Sourav.jpg"
import CV from "../../Assests/Sourav-Barik_Resume.pdf";
import Info from './Info'

const About = () => {
	return (
		<section className="about section" id="about">
			<h2 className="section_title">About Me</h2>
			<span className="section_subtitle">My Introduction</span>

			<div className="about_container container grid">
				<img src={ProfilePhoto} alt="" className="about_img" />
				<div className="about_data">
					<Info/>
					<p className="about_description">
						I am a Frontend Developer using ReactJS with a extended version 
						of CSS i.e Tailwind CSS. But recently I have also Completed my Backend Development & currently 
						making a project on it. I have also pratice DSA in various platform. Here I am providing you
						some of the links : <br />
						GFG : <a href="https://auth.geeksforgeeks.org/user/sourav_barik/practice">Click Here</a><br />
						Leetcode : <a href="https://leetcode.com/barik-sourav/">Click Here</a>
					</p>
					<a download="Resume" href={CV} className="button button-flex">Download CV</a>
				</div>
			</div>
		</section>
	)
}

export default About