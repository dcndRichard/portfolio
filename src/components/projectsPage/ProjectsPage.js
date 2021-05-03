import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import './ProjectsPage.css';
import { projects } from './projects.data';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ProjectsPage() {
	const history = useHistory();

	return (
		<div className="projects-page">
			<div className="section intro">
				<FontAwesomeIcon
					className="backArrow"
					onClick={() => {
						history.push('/');
					}}
					icon="arrow-circle-left"
				/>
				<h1 className="page-title">Projects</h1>
				<p className="smTxt">
					Below are samples of my projects. Some are still underdevelopment but functional enough to
					showcase. My earlier projects from the bottom up are to show my progression
					from working with vanilla javascript to frameworks to full-stack development.
				</p>
			</div>

			<div className="section current">
				<p style={{ fontWeight: '900' }}>Current objective</p>
				<p className="smTxt">Looking to work at a company of any size.</p>
			</div>

			{projects.map((item, idx) => {
				return (
					<a href={item.urlLink} target="_blank" className="project-cards">
						<div key={idx}>
							<p style={{ fontWeight: '900' }}>{item.title}</p>
							<p className="smTxt">{item.desc}</p>
							<div style={{ marginTop: '10px' }}>
								<h2>Technologies</h2>
								<div className="tech">
									{item.tech.map((_tech, i) => {
										return (
											<span
												key={i}
												style={{
													color: '#fff',
													margin: '5px',
													padding: '0 5px',
													background: '#196a00e3',
												}}
											>
												{_tech}
											</span>
										);
									})}
								</div>
							</div>
							<div style={{ marginTop: '10px', width: '300px' }}>
								<img src={item.imgSrc} alt={item.title} />
							</div>
						</div>
					</a>
				);
			})}
		</div>
	);
}
