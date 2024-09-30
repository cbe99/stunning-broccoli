import React, {Suspense, lazy} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import {PATHS} from '../constants/path';
import METRICS from '../mockData/eCommerceMetrics.json';

const HomePage = lazy(() => import('../pages/home'));
const DefaultDashboardPage = lazy(() => import('../pages/defaultDashboard'));
const PageNotFoundPage = lazy(() => import('../pages/pageNotFound'));

const loadMetricComponent = (path) => {
	switch (path) {
		case 'orders':
			return lazy(() => import('../pages/orderList'));
		case 'growth':
		case 'revenue':
		case 'customers':
		default:
			return lazy(() => import('../pages/pageNotFound'));
	}
};

const loadComponent = (route) => {
	switch (route) {
		case '/':
			return <HomePage />;
		case '/default':
			return <DefaultDashboardPage />;
		default:
			return <PageNotFoundPage />;
	}
};

const generateRoutes = (routes) => {
	return routes.map((route) => {
		if (route.children && route.children.length > 0) {
			return (
				<Route
					key={route.route}
					path={route.route}
					element={loadComponent(route.route)}
				>
					{generateRoutes(route.children)}
				</Route>
			);
		} else {
			return (
				<Route
					key={route.route}
					path={route.route}
					element={loadComponent(route.route)}
				/>
			);
		}
	});
};

const generateMetricRoutes = () => {
	return METRICS.map((metric) => {
		const MetricPage = loadMetricComponent(metric.path);
		return (
			<Route
				key={metric.path}
				path={`/default/${metric.path}`}
				element={
					<Suspense fallback={<div>Loading Metric Page...</div>}>
						<MetricPage />
					</Suspense>
				}
			/>
		);
	});
};

const AppRoutes = () => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Routes>
				{generateRoutes(PATHS.flatMap((pathGroup) => pathGroup.items))}
				{generateMetricRoutes()}
			</Routes>
		</Suspense>
	);
};

export default AppRoutes;
