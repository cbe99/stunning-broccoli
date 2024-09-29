import React from 'react';
import {Toolbar, IconButton, Typography, Switch} from '@mui/material';
import {Menu, Favorite, WbSunny, NightsStay} from '@mui/icons-material';
import {useLocation} from 'react-router-dom';
import {AppBar, DrawerHeader} from './header.styled';
import {useTheme} from '@emotion/react';

const Header = ({
	toggleSidebar,
	isDarkMode,
	toggleDarkMode,
	currentRoute,
	isSidebarOpen,
	isNotificationPanelOpen,
	toggleFavorite,
	toggleNotificationPanel,
	isFavorite,
}) => {
	const location = useLocation();
	const theme = useTheme();
	const pathnames = location.pathname.split('/').filter((x) => x);

	return (
		<AppBar
			position="fixed"
			openLeft={isSidebarOpen}
			openRight={isNotificationPanelOpen}
			sx={{zIndex: (theme) => theme.zIndex.drawer + 1}}
		>
			<Toolbar>
				<IconButton
					color="inherit"
					aria-label="open drawer"
					edge="start"
					onClick={toggleSidebar}
					sx={{marginRight: 2}}
				>
					<Menu />
				</IconButton>
				<Typography
					variant="h6"
					noWrap
					component="div"
					sx={{flexGrow: 1}}
				>
					Dashboards /{' '}
					{pathnames.map((value, index) => (
						<span key={index}>
							{index > 0 && ' / '}
							{value.charAt(0).toUpperCase() + value.slice(1)}
						</span>
					))}
				</Typography>
				<IconButton
					color="inherit"
					//	onClick={toggleFavorite}
				>
					<Favorite color={isFavorite ? 'secondary' : 'inherit'} />
				</IconButton>
				<IconButton
					color="inherit"
					onClick={toggleDarkMode}
				>
					{isDarkMode ? <NightsStay /> : <WbSunny />}
				</IconButton>
				<IconButton
					color="inherit"
					aria-label="open drawer"
					edge="start"
					onClick={toggleNotificationPanel}
					sx={{marginRight: 2}}
				>
					<Menu />
				</IconButton>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
