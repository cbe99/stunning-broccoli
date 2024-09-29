import React from 'react';
import {Routes, Route} from 'react-router-dom';
import HomePage from '../pages/home';
import DefaultDashboardPage from '../pages/defaultDashboard';

const AppRoutes = () => {
	return (
		<Routes>
			<Route
				path="/"
				element={<HomePage />}
			/>
			<Route
				path="/default"
				element={<DefaultDashboardPage />}
			/>
		</Routes>
	);
};

export default AppRoutes;
