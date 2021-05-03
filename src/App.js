import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/header/Header';
import MainPage from './components/mainPage/MainPage';
import ProjectsPage from './components/projectsPage/ProjectsPage';

/* FONT AWSOME */
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faBars, faEnvelope, faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
library.add(fab, faBars, faEnvelope, faArrowCircleLeft);
/* ********** */

class App extends React.Component {
	render() {
		return (
			<Router>
				<div>
					<Header />
					<Switch>
						<Route path="/" exact component={MainPage} />
						<Route path="/projects" exact component={ProjectsPage} />
						<Route path="*" render={() => <div>404</div>} />
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
