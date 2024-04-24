import React from 'react';
import '../styles/AboutMe.css';
const AboutMe = () => {
	return (
		<div className="AboutMe">
			<div className="AboutMe-Intro">
				<p className="Title">About Me</p>
				<ul>
					<li>
						<b>Web Developer</b><b> [in process]</b>
					</li>
					<li>{`Born in jodhpur, rajasthan -->lived in gurgaon my whole life--> now in vit vellore, tamil nadu.`}</li>
					<li>it has been an absolute blast learning web development. boring at first but you can do cool stuff with it</li>
					<li style={{ color: 'red' }}>Danger Zone: - <a href='https://i.pinimg.com/originals/9b/bb/28/9bbb28fecad2a29b4ebdc1ddbecbb6e6.gif' styles={{ color: 'red' }}>dont click but you wont listen to me will you?</a></li>
				</ul>
			</div>
		</div>
	);
};
export default AboutMe;
