import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom'

export default function Header() {
	return (
		<header>
			<div className="social-media">
                <a href="#" target="_blank"><FontAwesomeIcon className="gmail" icon="envelope" /></a>
                <a href="https://github.com/dcndRichard" target="_blank"><FontAwesomeIcon className="git" icon={["fab", "github"]} /></a>
                <a href="https://www.linkedin.com/in/duane-richard/" target="_blank"><FontAwesomeIcon className="linkedIn" icon={["fab", "linkedin"]} /></a>
                <a href="https://www.facebook.com/" target="_blank"><FontAwesomeIcon className="facebook" icon={["fab", "facebook"]} /></a>
			</div>
                <Link to="/"><FontAwesomeIcon className="bars" icon="bars" /></Link>
		</header>
	);
}
