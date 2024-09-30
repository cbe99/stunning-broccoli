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
		timestamp: '2024-09-24T09:15:40Z',
		type: 'Subscription',
		user: 'Jane Smith',
		icon: <KorayOkumusSvg />,
	},
	{
		message: 'Submitted a bug',
		id: 203,
		timestamp: '2024-09-23T15:05:30Z',
		type: 'Bug',
		user: 'Mark Johnson',
		icon: <NatalieCraigSvg />,
	},
	{
		message: 'Modified data in Page X',
		id: 204,
		timestamp: '2024-09-22T10:40:25Z',
		type: 'Bug Fix',
		user: 'Emily Brown',
		icon: <OrlandoDiggsSvg />,
	},
	{
		message: 'Deleted a page in Project X',
		id: 205,
		timestamp: '2024-09-21T08:20:10Z',
		type: 'Project',
		user: 'Michael Clark',
		icon: <AndieLaneSvg />,
	},
];
