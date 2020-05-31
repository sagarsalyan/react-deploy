import React from 'react';
import logo from './logo.svg';
import profileImg from './images/sagar.png';
import './App.css';

function App() {
	return (
		<div className="App">
			<h1>My React App Deployed to GitHub</h1>
			<h2>Author: Sagar Salyan</h2>
			<img src={profileImg} alt="profile-image" height="200px" style={{ borderRadius: 100 }} />
		</div>
	);
}

export default App;
