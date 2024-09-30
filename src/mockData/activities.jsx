import KateMorrisonSvg from '../assets/profiles/kate-morrison';
import KorayOkumusSvg from '../assets/profiles/koray-okumus';
import NatalieCraigSvg from '../assets/profiles/natalie-craig';
import AndieLaneSvg from '../assets/profiles/andie-lane';
import OrlandoDiggsSvg from '../assets/profiles/orlando-diggs';

export const Activities = [
	{
		message: 'You have a bug that needs immediate attention',
		id: 201,
		timestamp: 'Just Now',
		type: 'Project',
		user: 'John Doe',
		icon: <KateMorrisonSvg />,
	},
	{
		message: 'Released a new version.',
		id: 202,
		timestamp: '59 minutes ago',
		type: 'Subscription',
		user: 'Jane Smith',
		icon: <KorayOkumusSvg />,
	},
	{
		message: 'Submitted a bug',
		id: 203,
		timestamp: '12 hours ago',
		type: 'Bug',
		user: 'Mark Johnson',
		icon: <NatalieCraigSvg />,
	},
	{
		message: 'Modified data in Page X',
		id: 204,
		timestamp: 'Today, 11:59 AM',
		type: 'Bug Fix',
		user: 'Emily Brown',
		icon: <OrlandoDiggsSvg />,
	},
	{
		message: 'Deleted a page in Project X',
		id: 205,
		timestamp: 'Feb 2, 2023',
		type: 'Project',
		user: 'Michael Clark',
		icon: <AndieLaneSvg />,
	},
];
