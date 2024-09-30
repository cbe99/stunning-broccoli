import React from 'react';
import {Toolbar, IconButton, Typography, InputAdornment} from '@mui/material';
import {useLocation} from 'react-router-dom';
import {
	AppBar,
	NotificationCollapseButton,
	SearchBar,
	StyledFormControl,
} from './header.styled';
import CollapseIconSvg from '../../assets/collapseIcon';
import FavouritesIconSvg from '../../assets/favouritesIcon';
import SunnyIconSvg from '../../assets/sunnyIcon';
import HistoryIconSvg from '../../assets/historyIcon';
import AlertIconSvg from '../../assets/alertIcon';
import CommandIconSvg from '../../assets/commandIcon';
import SearchIconSvg from '../../assets/searchIcon';

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
	const pathnames = location.pathname.split('/').filter((x) => x);

	return (
		<AppBar
			position="fixed"
			openLeft={isSidebarOpen}
			openRight={isNotificationPanelOpen}
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
				<IconButton color="inherit">
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

				<StyledFormControl variant="standard">
					<SearchBar
						startAdornment={
							<InputAdornment position="start">
								<SearchIconSvg color={isDarkMode ? 'white' : 'inherit'} />
							</InputAdornment>
						}
						endAdornment={
							<InputAdornment position="end">
								<CommandIconSvg color={isDarkMode ? 'white' : 'inherit'} />
							</InputAdornment>
						}
						placeholder="Search"
						size="small"
					/>
				</StyledFormControl>

				<IconButton
					sx={{padding: 1}}
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
				<NotificationCollapseButton
					color="inherit"
					aria-label="open drawer"
					edge="start"
					onClick={toggleNotificationPanel}
				>
					<CollapseIconSvg />
				</NotificationCollapseButton>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
