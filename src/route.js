import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './screens/home/Home';
import ApiClient from "./client/ApiClient";

const apiClient = new ApiClient();

class Routes extends Component {
	render() {
		return (
			<Router>
				<div className="main-container">
					<Route exact path='/' render={(props) => <Home apiClient={apiClient} {...props} />} />
				</div>
			</Router>
		)
	}
}
export default Routes;