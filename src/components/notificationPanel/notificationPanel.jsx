import {
	List,
	ListItem,
	ListItemText,
	Typography,
	ListItemAvatar,
} from '@mui/material';
import React from 'react';
import {ContactsList} from '../../mockData/contactsList';
import {Notification} from '../../mockData/notifications';
import {Activities} from '../../mockData/activities';
import {StyledDrawer} from './notificationPanel.styled';

const NotificationPanel = ({
	isOpen,
	notifications = Notification,
	activities = Activities,
	contacts = ContactsList,
}) => {
	return (
		<StyledDrawer
			variant="persistent"
			anchor="right"
			open={isOpen}
		>
			{/* Notifications Section */}
			<Typography
				variant="h5"
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
						<ListItemAvatar>{notification.icon}</ListItemAvatar>
						<ListItemText
							primaryTypographyProps={{sx: {fontSize: '14px'}}}
							secondaryTypographyProps={{sx: {fontSize: '12px'}}}
							primary={notification.message}
							secondary={notification.timestamp}
						/>
					</ListItem>
				))}
			</List>

			{/* Activities Section */}
			<Typography
				variant="h5"
				sx={{marginTop: 2}}
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
						<ListItemAvatar>{activity.icon}</ListItemAvatar>
						<ListItemText
							primaryTypographyProps={{sx: {fontSize: '14px'}}}
							secondaryTypographyProps={{sx: {fontSize: '12px'}}}
							primary={activity.message}
							secondary={activity.timestamp}
						/>
					</ListItem>
				))}
			</List>

			{/* Contacts Section */}
			<Typography
				variant="h5"
				gutterBottom
				sx={{marginTop: 2}}
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
						<ListItemText sx={{marginTop: 1.5, fontSize: '14px'}}>
							{contact.userName}
						</ListItemText>
					</ListItem>
				))}
			</List>
		</StyledDrawer>
	);
};

export default NotificationPanel;
