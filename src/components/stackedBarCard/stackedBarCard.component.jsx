import React from 'react';
import {Card, CardContent, Typography, useTheme} from '@mui/material';
import {BarChart} from '@mui/x-charts';

const StackedBarCard = ({data}) => {
	const theme = useTheme();

	const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

	const formatYAxis = (value) => {
		return `${value / 1e6}M`;
	};

	return (
		<Card
			elevation={0}
			sx={{backgroundColor: theme.palette.primary.light}}
		>
			<CardContent>
				<Typography
					variant="h5"
					component="div"
					gutterBottom
				>
					Projections vs Actuals
				</Typography>

				<BarChart
					series={data}
					grid={{horizontal: true}}
					xAxis={[
						{
							data: monthNames,
							scaleType: 'band',
							id: 'months',
						},
					]}
					yAxis={[
						{
							valueFormatter: (val) => formatYAxis(val),
						},
					]}
					colors={[theme.palette.primary.main, theme.palette.secondary.main]}
					height={230}
					borderRadius={10}
				/>
			</CardContent>
		</Card>
	);
};

export default StackedBarCard;
