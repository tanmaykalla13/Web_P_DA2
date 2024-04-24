import React from 'react';

import '../styles/Work.css';
const Work = () => {
	return (
		<div className="Work">
			<div className="Work-Intro">
				<p className="Title">Work History</p>

				<p className="Work-Job">DSA person :)</p>

				<p className="Work-Date">02/2024 -present</p>
				<p className="Work-Position">Amateur Leetcoder</p>
				<ul className="Work-Detail">
					<li>
						<b>almost 100 Questions solved</b> mainly focused on logic building.
					</li>
					<li>
						{' '}
						<b>Created bruteforce solutions</b> and helped my friends solve questions too😊
					</li>
				</ul>
				<p className="Work-Job">Senior Core 2024,IEECS, VIT</p>
				<p className="Work-Date">01/2024-present</p>
				<p className="Work-Position">Technical and research team member</p>
				<ul className="Work-Detail">
					<li>
						{' '}
						Programmed website for <b>Riviera event</b> using <b>MERN STACK</b>.
					</li>
					<li>Secured a spot among the <b>Top Ten Teams </b> in the hackathon for event HackBattle!</li>
					<li>
						{' '}
						<b>Created KrishiSarthi</b> a revolutionary platform providing farmers with a comprehensive solution to all their needs.
					</li>
				</ul>
			</div>
		</div>
	);
};
export default Work;
