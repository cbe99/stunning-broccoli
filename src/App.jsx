import React, {useState} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Sidebar from './components/sidebar';
import {CssBaseline, ThemeProvider, Toolbar} from '@mui/material';
import Header from './components/header';
import NotificationPanel from './components/notificationPanel';
import {Main} from './App.styled';
import AppRoutes from './router';
import getTheme from './themes/getTheme';

const App = () => {
	const [isDarkMode, setIsDarkMode] = useState(false);
	const [isSidebarOpen, setIsSidebarOpen] = useState(true);
	const [isNotificationPanelOpen, setIsNotificationPanelOpen] = useState(true);
	const [favorites, setFavorites] = useState([]);

	const toggleDarkMode = () => {
		setIsDarkMode(!isDarkMode);
	};

	const toggleNotificationPanel = () => {
		setIsNotificationPanelOpen(!isNotificationPanelOpen);
	};

	const toggleSidebar = () => {
		setIsSidebarOpen(!isSidebarOpen);
	};

	const toggleFavorite = (route) => {
		setFavorites((prevFavorites) =>
			prevFavorites.includes(route)
				? prevFavorites.filter((fav) => fav !== route)
				: [...prevFavorites, route]
		);
	};

	return (
		<ThemeProvider theme={isDarkMode ? getTheme('dark') : getTheme('light')}>
			<CssBaseline />
			<Router>
				<Sidebar
					isDarkMode={isDarkMode}
					toggleDarkMode={toggleDarkMode}
					isOpen={isSidebarOpen}
					favorites={favorites}
				/>

				<NotificationPanel isOpen={isNotificationPanelOpen} />
				<Main
					openLeft={isSidebarOpen}
					openRight={isNotificationPanelOpen}
					component="main"
					sx={{
						flexGrow: 1,
						marginLeft: isSidebarOpen ? '240px' : 8,
						marginRight: isNotificationPanelOpen ? '210px' : 8,
					}}
				>
					<Header
						toggleSidebar={toggleSidebar}
						isDarkMode={isDarkMode}
						isSidebarOpen={isSidebarOpen}
						isNotificationPanelOpen={isNotificationPanelOpen}
						toggleNotificationPanel={toggleNotificationPanel}
						toggleDarkMode={toggleDarkMode}
						toggleFavorite={toggleFavorite}
					/>
					<Toolbar />
					<AppRoutes />
				</Main>
			</Router>
		</ThemeProvider>
	);
};

export default App;
