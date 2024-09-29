import React from 'react';
import {LineChart, AnimatedLine} from '@mui/x-charts/LineChart';
import {useChartId, useDrawingArea, useXScale} from '@mui/x-charts/hooks';
import {Box, Card, CardContent, Divider, Typography} from '@mui/material';

const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

const formatYAxis = (value) => {
	return `${value / 1e6}M`;
};

function CustomAnimatedLine(props) {
	const {limit, sxBefore, sxAfter, ...other} = props;
	const {top, bottom, height, left, width} = useDrawingArea();
	const scale = useXScale();
	const chartId = useChartId();

	if (limit === undefined) {
		return <AnimatedLine {...other} />;
	}

	const limitPosition = scale(limit);

	if (limitPosition === undefined) {
		return <AnimatedLine {...other} />;
	}

	const clipIdleft = `${chartId}-${props.ownerState.id}-line-limit-${limit}-1`;
	const clipIdRight = `${chartId}-${props.ownerState.id}-line-limit-${limit}-2`;
	return (
		<React.Fragment>
			<clipPath id={clipIdleft}>
				<rect
					x={left}
					y={0}
					width={limitPosition - left}
					height={top + height + bottom}
				/>
			</clipPath>
			<clipPath id={clipIdRight}>
				<rect
					x={limitPosition}
					y={0}
					width={left + width - limitPosition}
					height={top + height + bottom}
				/>
			</clipPath>
			<g clipPath={`url(#${clipIdleft})`}>
				<AnimatedLine
					{...other}
					sx={sxBefore}
				/>
			</g>
			<g clipPath={`url(#${clipIdRight})`}>
				<AnimatedLine
					{...other}
					sx={sxAfter}
				/>
			</g>
		</React.Fragment>
	);
}

const RevenueComparisonChart = ({revenueByYear}) => {
	return (
		<Card sx={{height: 400, p: 2}}>
			<CardContent>
				<Box sx={{display: 'flex', alignItems: 'center', mb: 2}}>
					<Typography
						variant="body1"
						gutterBottom
					>
						Revenue
					</Typography>
					{/* Divider with flexGrow to fill the space */}

					<Divider
						orientation="vertical"
						variant="middle"
						flexItem
						sx={{
							padding: 1,
							width: '5px',
							background: '--black-20, #1C1C1C33',
						}}
					/>

					<Box sx={{width: 20, height: 2, bgcolor: '#A8C5DA', m: 1}} />
					<Typography variant="body2">2024 Revenue</Typography>
					<Box sx={{width: 20, height: 2, bgcolor: '#1C1C1C', m: 1}} />
					<Typography variant="body2">2023 Revenue</Typography>
				</Box>

				<LineChart
					//width={600}
					height={300}
					grid={{horizontal: true}}
					series={[
						{
							data: revenueByYear.map((item) => item['2024Revenue']),
							color: '#A8C5DA',
							showMark: false,
							type: 'line',
							valueFormatter: (v, i) => `${v}`,
						},
						{
							data: revenueByYear.map((item) => item['2023Revenue']),
							type: 'line',
							color: '#1C1C1C',
							showMark: false,
							valueFormatter: (v, i) =>
								i.dataIndex > 3 ? `${v} (estimated)` : `${v}`,
						},
					]}
					xAxis={[
						{
							data: monthNames,
							scaleType: 'point',
						},
					]}
					yAxis={[
						{
							valueFormatter: (value) => formatYAxis(value),
							disableLine: true,
							disableTicks: true,
						},
					]}
					slots={{line: CustomAnimatedLine}}
					slotProps={{
						line: {
							limit: 3,
							sxAfter: {strokeDasharray: '10 5'},
						},
					}}
				/>
			</CardContent>
		</Card>
	);
};

export default RevenueComparisonChart;
