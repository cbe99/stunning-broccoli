import React, {useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Sidebar from './components/sidebar';
import {
	Box,
	createTheme,
	CssBaseline,
	styled,
	ThemeProvider,
} from '@mui/material';
import HomePage from './pages/home';
import Header from './components/header';
import NotificationPanel from './components/notificationPanel';
import {Main} from './App.styled';

const App = () => {
	const [isDarkMode, setIsDarkMode] = useState(false);
	const [isSidebarOpen, setIsSidebarOpen] = useState(true);
	const [isNotificationPanelOpen, setIsNotificationPanelOpen] = useState(true);
	const [favorites, setFavorites] = useState([]);

	const lightTheme = createTheme({
		palette: {
			mode: 'light',
		},
	});

	const darkTheme = createTheme({
		palette: {
			mode: 'dark',
		},
	});

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
		<ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
			<CssBaseline />
			<Router>
				<Box sx={{display: 'flex'}}>
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
							p: 3,
							mt: 8,
							marginLeft: isSidebarOpen ? '240px' : 0,
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
						<Routes>
							<Route
								path="/"
								element={<HomePage />}
							/>
						</Routes>
					</Main>
				</Box>
			</Router>
		</ThemeProvider>
	);
};

export default App;
