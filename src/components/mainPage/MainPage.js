import React from 'react';
import { useHistory } from 'react-router-dom';
import './MainPage.css';
import profilePic from './profilePic.jpg';
import Header from '../header/Header';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function MainPage() {
	const history = useHistory();
	return (
		<div className={'main-page'}>
			<div className="textBg">
				<h1 className="myname">Duane Richard</h1>
				<div className="profilePic">
					<img src={profilePic} alt="profile pictures" />
				</div>
				<h2 className="mytitle">Full-Stack Web Developer</h2>
				<p className="description smTxt">My area of focus is Javascript and its frameworks</p>
				<div className="frameworks">
					<FontAwesomeIcon className="icons react" icon={['fab', 'react']} />
					<FontAwesomeIcon className="icons angular" icon={['fab', 'angular']} />
					<FontAwesomeIcon className="icons node" icon={['fab', 'node-js']} />
				</div>
				<button type="button" onClick={() => history.push('/projects')}>
					My Projects
				</button>
			</div>
		</div>
	);
}
