import React from 'react';
import {
	Box,
	Card,
	CardContent,
	CardHeader,
	LinearProgress,
	Typography,
} from '@mui/material';
import WorldMapSvg from '../../assets';

const RevenueLocationCard = ({revenueDetails}) => {
	const getRevenueProgress = (revenue) => {
		return revenue / 1000;
	};

	const formatRevenue = (revenue) => {
		if (revenue >= 1000) {
			return `${Math.round(revenue / 1000)}K`;
		}
		return revenue;
	};
	return (
		<Card sx={{height: '100%'}}>
			<CardContent
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between',
					gap: 1,
				}}
			>
				<Typography variant="h6">Revenue By Location</Typography>
				<Box
					display={'flex'}
					justifyContent={'center'}
				>
					<WorldMapSvg />
				</Box>
				{revenueDetails.map((revenueDetail, i) => (
					<React.Fragment>
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'row',
								justifyContent: 'space-between',
							}}
						>
							<Typography>{revenueDetail.name}</Typography>
							<Typography>{formatRevenue(revenueDetail.revenue)}</Typography>
						</Box>
						<LinearProgress
							variant="determinate"
							value={getRevenueProgress(revenueDetail.revenue)}
						/>
					</React.Fragment>
				))}
			</CardContent>
		</Card>
	);
};

export default RevenueLocationCard;
