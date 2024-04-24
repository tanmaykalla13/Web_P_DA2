import React from 'react';
import profile from '../media/tanmay22bce0897.jpg';
import { AiOutlineGithub, AiOutlineMail, AiOutlineLinkedin } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Home.css';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
	const navigate = useNavigate();

	document.addEventListener('keydown', function (event) {
		if (event.key === 'Enter') {
			navigate('/terminal');
			console.log('clicking');
		}
	});
	return (
		<div className="Home">
			<div className="Home-Name">
				<TypeAnimation
					sequence={['Portfolio', 1000, 'of', 100, 'tanmay kalla']}
					wrapper="h1"
					cursor={true}
				/>
			</div>

			<div className="Home-TitleIMG">
				<div className="Home-IMGFrame">
					<img src={profile} alt="Tanmay" />
				</div>

				<p>Full-Stack Developer</p>
			</div>
			<div className="Home-More">
				<h3>
					click <Link to={'/terminal'}> Enter</Link> for more information
				</h3>
			</div>

			<div className="Home-Links">
				<a href="https://github.com/tanmaykalla13/Web_P_DA1" target='blank'>
					<AiOutlineGithub />
				</a>
				<a href="mailto: kallatanmay@gmail.com">
					<AiOutlineMail />
				</a>
				<a href="https://www.linkedin.com/public-profile/settings" target='blank'>
					<AiOutlineLinkedin />
				</a>
			</div>
		</div>
	);
};

export default Home;
