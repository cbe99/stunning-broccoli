import React from 'react';
import {
	Toolbar,
	IconButton,
	Typography,
	Switch,
	FormControl,
	OutlinedInput,
	InputAdornment,
} from '@mui/material';
import {Menu, Favorite, WbSunny, NightsStay, Search} from '@mui/icons-material';
import {useLocation} from 'react-router-dom';
import {AppBar, DrawerHeader} from './header.styled';
import {useTheme} from '@emotion/react';
import CollapseIconSvg from '../../assets/collapseIcon';
import FavouritesIconSvg from '../../assets/favouritesIcon';
import SunnyIconSvg from '../../assets/sunnyIcon';
import HistoryIconSvg from '../../assets/historyIcon';
import AlertIconSvg from '../../assets/alertIcon';
import CommandIconSvg from '../../assets/commandIcon';

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
					<CollapseIconSvg />
				</IconButton>
				<IconButton
					color="inherit"
					//	onClick={toggleFavorite}
				>
					<FavouritesIconSvg color={isFavorite ? 'secondary' : 'inherit'} />
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

				<FormControl
					sx={{m: 1, borderRadius: '8px'}}
					variant="outlined"
				>
					<OutlinedInput
						startAdornment={
							<InputAdornment position="start">
								<Search color="inherit" />
							</InputAdornment>
						}
						endAdornment={
							<InputAdornment position="end">
								<CommandIconSvg />
							</InputAdornment>
						}
						placeholder="Search"
						size="small"
						sx={{borderRadius: '8px'}}
					/>
				</FormControl>

				<IconButton
					color="inherit"
					onClick={toggleDarkMode}
				>
					{isDarkMode ? <SunnyIconSvg /> : <SunnyIconSvg />}
				</IconButton>
				<IconButton color="inherit">
					<HistoryIconSvg />
				</IconButton>
				<IconButton color="inherit">
					<AlertIconSvg />
				</IconButton>
				<IconButton
					color="inherit"
					aria-label="open drawer"
					edge="start"
					onClick={toggleNotificationPanel}
					sx={{marginLeft: 1, marginRight: 2}}
				>
					<CollapseIconSvg />
				</IconButton>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
