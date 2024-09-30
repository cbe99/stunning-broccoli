import React from 'react';
import {LineChart, AnimatedLine} from '@mui/x-charts/LineChart';
import {useChartId, useDrawingArea, useXScale} from '@mui/x-charts/hooks';
import {
	Box,
	Card,
	CardContent,
	Divider,
	Typography,
	useTheme,
} from '@mui/material';
import {ParentCard, StyledBox} from './revenueComparisonCard.styled';

// line chart card - compares revenue

const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

const formatYAxis = (value) => {
	return `${value / 1e6}M`;
};

const formatXAxis = (value) => {
	return monthNames[value - 1];
};

function CustomAnimatedLine(props) {
	const {limit, sxBefore, sxAfter, ...other} = props;
	const {top, bottom, height, left, width} = useDrawingArea();
	const scale = useXScale();
	const chartId = useChartId();

	if (limit === undefined || props.ownerState.id !== '2023Revenue') {
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
	const theme = useTheme();
	const isDarkTheme = theme.palette.mode === 'dark';

	return (
		<ParentCard
			elevation={0}
			sx={{
				backgroundColor: (theme) => theme.palette.primary.light,
			}}
		>
			<CardContent>
				<StyledBox>
					<Typography
						variant="h5"
						gutterBottom
					>
						Revenue
					</Typography>

					<Divider
						orientation="vertical"
						variant="middle"
						flexItem
						sx={{
							padding: 1,
							width: '5px',
							background: isDarkTheme
								? '--white-20, #FFFFFF33'
								: '--black-20, #1C1C1C33',
						}}
					/>

					<Box
						sx={{
							width: 6,
							height: 6,
							bgcolor: (theme) => theme.palette.primary.main,
							borderRadius: '50%',
							m: 1,
						}}
					/>
					<Typography variant="body1">2024 Revenue</Typography>
					<Box
						sx={{
							width: 6,
							height: 6,
							bgcolor: (theme) => theme.palette.text.primary,
							borderRadius: '50%',
							m: 1,
						}}
					/>
					<Typography variant="body1">2023 Revenue</Typography>
				</StyledBox>

				<LineChart
					//width={600}
					height={300}
					grid={{horizontal: true}}
					series={[
						{
							id: '2024Revenue',
							data: revenueByYear.map((item) => item['2024Revenue']),
							color: theme.palette.secondary.main,
							showMark: false,
							type: 'line',
							valueFormatter: (v, i) => `${v}`,
						},
						{
							id: '2023Revenue',
							data: revenueByYear.map((item) => item['2023Revenue']),
							type: 'line',
							color: isDarkTheme
								? theme.palette.purple.main
								: theme.palette.primary.dark,
							showMark: false,
							valueFormatter: (v, i) =>
								i.dataIndex > 4 ? `${v} (estimated)` : `${v}`,
						},
					]}
					xAxis={[
						{
							valueFormatter: (value) => formatXAxis(value),
							data: [1, 2, 3, 4, 5, 6],
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
							limit: 4,
							sxAfter: {strokeDasharray: '10 3'},
						},
					}}
				/>
			</CardContent>
		</ParentCard>
	);
};

export default RevenueComparisonChart;
