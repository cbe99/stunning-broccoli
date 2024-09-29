import {
	Drawer,
	List,
	ListItem,
	ListItemText,
	Divider,
	Typography,
	ListItemAvatar,
	Avatar,
} from '@mui/material';
import React from 'react';
import {notificationPanelWidth} from '../../constants/drawerWidth';
import ACTIVITIES from '../../mockData/activities.json';
import NOTIFICATIONS from '../../mockData/notifications.json';
import {ContactsList} from '../../mockData/contactsList';

const NotificationPanel = ({
	isOpen,
	notifications = NOTIFICATIONS,
	activities = ACTIVITIES,
	contacts = ContactsList,
}) => {
	return (
		<Drawer
			variant="persistent"
			anchor="right"
			open={isOpen}
			sx={{
				width: notificationPanelWidth,
				flexShrink: 0,
				'& .MuiDrawer-paper': {
					width: notificationPanelWidth,
					boxSizing: 'border-box',
					padding: 2,
				},
			}}
		>
			{/* Notifications Section */}
			<Typography
				variant="h6"
				gutterBottom
			>
				Notifications
			</Typography>
			<List>
				{notifications.map((notification) => (
					<ListItem
						key={notification.id}
						alignItems="flex-start"
					>
						<ListItemText
							primary={notification.message}
							secondary={new Date(notification.timestamp).toLocaleString()}
						/>
					</ListItem>
				))}
			</List>
			<Divider />

			{/* Activities Section */}
			<Typography
				variant="h6"
				gutterBottom
			>
				Recent Activities
			</Typography>
			<List>
				{activities.map((activity) => (
					<ListItem
						key={activity.id}
						alignItems="flex-start"
					>
						<ListItemText
							primary={activity.message}
							secondary={`${activity.user} • ${new Date(
								activity.timestamp
							).toLocaleString()}`}
						/>
					</ListItem>
				))}
			</List>
			<Divider />

			{/* Contacts Section */}
			<Typography
				variant="h6"
				gutterBottom
			>
				Contacts
			</Typography>
			<List>
				{contacts.map((contact) => (
					<ListItem
						key={contact.id}
						alignItems="flex-start"
					>
						<ListItemAvatar>{contact.profilePicture}</ListItemAvatar>
						<ListItemText primary={contact.userName} />
					</ListItem>
				))}
			</List>
		</Drawer>
	);
};

export default NotificationPanel;
