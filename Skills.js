import React from 'react';
import '../styles/Skills.css';
const Skills = () => {
	return (
		<div className="Skills">
			<h3 className="Title">Skills</h3>
			<div className="Skills" />
			<ul className="Skills-List">
				<h3 className="Skill-Sections">Languages </h3>
				<ul>
					<li>
						<p className="Skill-Title">JavaScript</p>
						<div className="Skills-Container">
							<div className="Skill-iso JavaScript" />
						</div>
					</li>
					<li>
						<p className="Skill-Title">Python</p>
						<div className="Skills-Container">
							<div className="Skill-iso Python" />
						</div>
					</li>
					<li>
						<p className="Skill-Title">SQL </p>
						<div className="Skills-Container">
							<div className="Skill-iso SQL" />
						</div>
					</li>
					<li>
						<p className="Skill-Title">Java</p>
						<div className="Skills-Container">
							<div className="Skill-iso Java" />
						</div>
					</li>
					<li>
						<p className="Skill-Title">C++</p>
						<div className="Skills-Container">
							<div className="Skill-iso C" />
						</div>
					</li>
				</ul>

				<h3 className="Skill-Sections">Libraries </h3>
				<ul>
					<li>
						<p className="Skill-Title">React</p>
						<div className="Skills-Container">
							<div className="Skill-iso React" />
						</div>
					</li>
				</ul>
				<h3 className="Skill-Sections">Other</h3>
				<ul>
					<li>
						<p className="Skill-Title">Object Oriented Programming</p>
						<div className="Skills-Container">
							<div className="Skill-iso Oriented" />
						</div>
					</li>

					<li>
						<p className="Skill-Title">Git</p>
						<div className="Skills-Container">
							<div className="Skill-iso Git" />
						</div>
					</li>

				</ul>
			</ul>
		</div>
	);
};
export default Skills;
