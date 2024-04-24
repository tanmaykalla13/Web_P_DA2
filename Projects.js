import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import '../styles/Projects.css';
import modernchair from '../media/modernchair.jpg';
import discord from '../media/discord.jpg';
import KrishiSarthi from '../media/Krishi-Sarthi.jpg';
import portfolio from '../media/portfolio.jpg';
const Projects = () => {
	return (
		<div className="Projects ">
			<p className="Title">Projects</p>
			<ul className="Projects-Mods">
				<li>
					<TypeAnimation cursor={false} sequence={['First Website [HTML & CSS only :)]']} />
					{/* <a href="https://www.codeavail.com/blog/wp-content/uploads/2023/01/Computer-Science-Projects-1024x555.jpg" target='blank'> */}
					<img src={modernchair} alt="chair olx" />
					{/* </a> */}
				</li>
				<li>
					<TypeAnimation cursor={false} sequence={['First Cloned Website']} />
					{/* <a href="https://www.codeavail.com/blog/wp-content/uploads/2023/01/Computer-Science-Projects-1024x555.jpg" target='blank'> */}
					<img src={discord} alt="discord" />
					{/* </a> */}
				</li>
				<li>
					<TypeAnimation cursor={false} sequence={['Krishi Sarthi [Group Project for Hackathon!]']} />
					{/* <a href="https://www.codeavail.com/blog/wp-content/uploads/2023/01/Computer-Science-Projects-1024x555.jpg" target='blank' > */}
					<img src={KrishiSarthi} alt="krishi sarthi" />
					{/* </a> */}
				</li>
				<li>
					<TypeAnimation cursor={false} sequence={['Portfolio Website']} />
					<a href="https://github.com/tanmaykalla13/Web_P_DA1" target='blank'>
						<img src={portfolio} alt="portfolio" />
					</a>
				</li>
			</ul>
		</div>
	);
};
export default Projects;
