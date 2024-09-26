import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ThemeSwitch from './components/themeSwitch';
import Home from './pages/home';
import Sidebar from './components/sidebar';

const Routes = () => {
	return <></>;
	// <Router>
	// 	<ThemeSwitch>
	// 		<Sidebar />
	// 		<Routes>
	// 			<Route
	// 				path="/"
	// 				element={<Home />}
	// 			/>
	// 		</Routes>
	// 	</ThemeSwitch>
	// </Router>
};

export default Routes;
