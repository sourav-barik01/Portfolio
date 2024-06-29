import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Qualification from './Components/Qualification/Qualification';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

function App() {
	return (
		<div className="App">
			<Header/>
			<main className="main">
				<Home/>
				<About/>
				<Skills/>
				<Projects/>
				<Qualification/>
				<Contact/>
				<Footer/>
			</main>
		</div>
	);
}

export default App;
