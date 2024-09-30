import React, {useState} from 'react';
import {
	Drawer,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Collapse,
	Box,
	Avatar,
	Toolbar,
	Typography,
	ListItemButton,
	useTheme,
} from '@mui/material';
import {Link, useLocation} from 'react-router-dom';
import {ExpandLess, ExpandMore} from '@mui/icons-material';
import {SIDEBAR_WIDTH} from '../../constants/drawerWidth';
import {PATHS} from '../../constants/path';
import ByeWindSvg from '../../assets/profiles/bye-wind';

const Sidebar = ({isDarkMode, isOpen, favorites}) => {
	const [open, setOpen] = useState({});
	const location = useLocation();
	const theme = useTheme();

	const handleClick = (itemName) => {
		setOpen((prevState) => ({...prevState, [itemName]: !prevState[itemName]}));
	};

	const ListItemLink = ({to, children, ...props}) => {
		const isSelected = location.pathname === to;

		return (
			<ListItemButton
				component={Link}
				to={to}
				selected={isSelected}
				{...props}
			>
				{children}
			</ListItemButton>
		);
	};

	const renderNavItem = (item, depth = 0) => {
		const Icon = item.icon;
		if (item.subitems) {
			return (
				<React.Fragment key={item.name}>
					<ListItemButton
						onClick={() => handleClick(item.name)}
						sx={{pl: 2}}
					>
						{Icon ? (
							<ListItemIcon>
								<Icon color={isDarkMode ? 'white' : 'inherit'} />
							</ListItemIcon>
						) : (
							<Box
								sx={{
									width: '6px',
									height: '6px',
									borderRadius: '50%',
									backgroundColor: 'grey',
									marginRight: 1,
									padding: 0.5,
								}}
							/>
						)}
						<ListItemText primary={item.name} />
						{open[item.name] ? <ExpandLess /> : <ExpandMore />}
					</ListItemButton>
					<Collapse
						in={open[item.name]}
						timeout="auto"
						unmountOnExit
					>
						<List
							component="div"
							disablePadding
						>
							{item.subitems.map((subitem) =>
								renderNavItem(subitem, depth + 1)
							)}
						</List>
					</Collapse>
				</React.Fragment>
			);
		} else {
			return (
				<ListItemLink
					to={item.route}
					key={item.name}
					sx={{pl: 2}}
				>
					{Icon ? (
						<ListItemIcon>
							<Icon color={isDarkMode ? 'white' : 'inherit'} />
						</ListItemIcon>
					) : (
						<Box
							sx={{
								width: '6px',
								height: '6px',
								borderRadius: '50%',
								backgroundColor: 'grey',
								marginRight: 1,
								padding: 0.5,
							}}
						/>
					)}
					<ListItemText primary={item.name} />
				</ListItemLink>
			);
		}
	};

	return (
		<Drawer
			variant="persistent"
			anchor="left"
			open={isOpen}
			sx={{
				width: SIDEBAR_WIDTH,
				flexShrink: 0,
				'& .MuiDrawer-paper': {
					width: SIDEBAR_WIDTH,
					boxSizing: 'border-box',
					paddingTop: 1,
					borderRight: `1px solid ${theme.palette.primary.light}`,
				},
			}}
		>
			<Box
				sx={{
					marginTop: 2,
					marginLeft: 2,
					display: 'flex',
					flexDirection: 'row',
				}}
			>
				<Avatar sx={{width: '24px', height: '24px', marginRight: 2}}>
					<ByeWindSvg />
				</Avatar>
				<Typography
					sx={{marginTop: 0.5}}
					variant="body1"
				>
					Bye Wind
				</Typography>
			</Box>
			<List>
				{PATHS.map((section) => (
					<React.Fragment key={section.heading}>
						<ListItem>
							<ListItemText
								primary={section.heading}
								primaryTypographyProps={{fontWeight: 'regular'}}
							/>
						</ListItem>
						{section.items.map((item) => renderNavItem(item))}
					</React.Fragment>
				))}
				{favorites.length > 0 && (
					<React.Fragment>
						<ListItem>
							<ListItemText
								primary="Favorites"
								primaryTypographyProps={{fontWeight: 'regular'}}
							/>
						</ListItem>
						{favorites.map((route) => (
							<ListItemLink
								to={route}
								key={route}
							>
								<ListItemIcon>
									<Box
										sx={{
											width: '6px',
											height: '6px',
											borderRadius: '50%',
											backgroundColor: 'grey',
											marginRight: 1,
											padding: 0.5,
										}}
									/>
								</ListItemIcon>
								<ListItemText primary={route.split('/').pop()} />
							</ListItemLink>
						))}
					</React.Fragment>
				)}
			</List>
		</Drawer>
	);
};

export default Sidebar;
