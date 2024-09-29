import BugIconSvg from '../assets/bugIcon';
import NewUserIconSvg from '../assets/newUserIcon';
import BroadcastIconSvg from '../assets/broadcastIcon';

export const Notification = [
	{
		message: 'New bug reported in the mobile app.',
		id: 101,
		timestamp: 'Just now',
		type: 'Bug',
		icon: <BugIconSvg />,
	},
	{
		message: 'New user JaneSmith registered on the platform.',
		id: 103,
		timestamp: '59 minutes ago',
		type: 'New User',
		icon: <NewUserIconSvg />,
	},
	{
		message: 'Bug fix deployed for the e-commerce platform.',
		id: 104,
		timestamp: '12 hours ago',
		type: 'Bug',
		icon: <BugIconSvg />,
	},
	{
		message: 'Andi Lane subscribed to you.',
		id: 105,
		timestamp: 'Today, 11:59 AM',
		type: 'Broadcasr',
		icon: <BroadcastIconSvg />,
	},
];
