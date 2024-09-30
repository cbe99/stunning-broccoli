import React from 'react';
import {Card, CardContent, Typography, useTheme} from '@mui/material';
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	Tooltip,
	Legend,
	CartesianGrid,
} from 'recharts';

// Corrected data
const projectionsVsActuals = [
	{
		month: '2024-01',
		projection: 21000000,
		actual: 17500000,
	},
	{
		month: '2024-02',
		projection: 26000000,
		actual: 20500000,
	},
	{
		month: '2024-03',
		projection: 22000000,
		actual: 19000000,
	},
	{
		month: '2024-04',
		projection: 29000000,
		actual: 22000000,
	},
	{
		month: '2024-05',
		projection: 33000000,
		actual: 31000000,
	},
	{
		month: '2024-06',
		projection: 24000000,
		actual: 20600000,
	},
];

const CustomBar = ({fill, x, y, width, height, isTop}) => {
	const radius = 4;

	return (
		<g>
			<rect
				x={x}
				y={y}
				width={width}
				height={height}
				fill={fill}
				rx={isTop ? radius : 0}
				ry={isTop ? radius : 0}
			/>
		</g>
	);
};

const StackedBarGraphCard = () => {
	const theme = useTheme();

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
					width={384}
					height={250}
					data={projectionsVsActuals}
					margin={{
						top: 20,
						right: 30,
						left: 5,
						bottom: 5,
					}}
				>
					<CartesianGrid strokeDasharray="1 1" />
					<XAxis
						dataKey="month"
						tickFormatter={(month) => {
							const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
							return monthNames[parseInt(month.split('-')[1]) - 1];
						}}
						tick={{fontSize: 12}}
					/>
					<YAxis
						ticks={[0, 10000000, 20000000, 30000000]}
						tickFormatter={(value) => `${value / 1000000}M`}
					/>
					<Tooltip formatter={(value) => `$${(value / 1000000).toFixed(2)}M`} />
					<Bar
						dataKey="projection"
						stackId="a"
						shape={(props) => <CustomBar {...props} />}
						fill={theme.palette.primary.main}
						width={20}
						barSize={20}
					/>
					<Bar
						dataKey="actual"
						stackId="a"
						shape={CustomBar}
						fill="#E5ECF6"
						width={20}
						barSize={20}
					/>
				</BarChart>
			</CardContent>
		</Card>
	);
};

export default StackedBarGraphCard;
