// src/components/Sidebar.js
import React, {useState} from 'react';
import {
	Drawer,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Collapse,
} from '@mui/material';
import {Link, useLocation} from 'react-router-dom';
import {ExpandLess, ExpandMore, StarBorder} from '@mui/icons-material';
import {sidebarWidth} from '../../constants/drawerWidth';
import {PATHS} from '../../constants/path';

const Sidebar = ({isDarkMode, isOpen, favorites}) => {
	const [open, setOpen] = useState({});
	const location = useLocation();

	const handleClick = (itemName) => {
		setOpen((prevState) => ({...prevState, [itemName]: !prevState[itemName]}));
	};

	const ListItemLink = (props) => {
		return (
			<ListItem
				button
				component={Link}
				{...props}
			/>
		);
	};

	const renderNavItem = (item, depth = 0) => {
		const Icon = item.icon;
		if (item.subitems) {
			return (
				<React.Fragment key={item.name}>
					<ListItem
						button
						onClick={() => handleClick(item.name)}
						sx={{pl: 2 * depth}}
					>
						{Icon && (
							<ListItemIcon>
								<Icon />
							</ListItemIcon>
						)}
						<ListItemText primary={item.name} />
						{open[item.name] ? <ExpandLess /> : <ExpandMore />}
					</ListItem>
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
					sx={{pl: 2 * depth}}
				>
					{Icon && (
						<ListItemIcon>
							<Icon />
						</ListItemIcon>
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
				width: sidebarWidth,
				flexShrink: 0,
				'& .MuiDrawer-paper': {
					width: sidebarWidth,
					boxSizing: 'border-box',
				},
			}}
		>
			<List>
				{PATHS.map((section) => (
					<React.Fragment key={section.heading}>
						<ListItem>
							<ListItemText
								primary={section.heading}
								primaryTypographyProps={{fontWeight: 'bold'}}
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
								primaryTypographyProps={{fontWeight: 'bold'}}
							/>
						</ListItem>
						{favorites.map((route) => (
							<ListItemLink
								to={route}
								key={route}
							>
								<ListItemIcon>
									<StarBorder />
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
