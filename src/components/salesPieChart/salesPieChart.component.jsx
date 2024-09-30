import {Box, Card, CardContent, Typography, useTheme} from '@mui/material';
import {PieChart} from '@mui/x-charts';
import React from 'react';

const SalesPieChart = ({salesData}) => {
	const theme = useTheme();
	const pieData = salesData?.map((item) => ({
		id: item.company,
		value: item.sales,
	}));

	const formatSale = (salesValue) => {
		return `$${salesValue}`;
	};

	const lightModeColors = ['#1C1C1C', '#BAEDBD', '#B1E3FF', '#95A4FC'];

	const darkModeColors = ['#C6C7F8', '#BAEDBD', '#95A4FC', '#B1E3FF'];

	const customColors =
		theme.palette.mode === 'dark' ? darkModeColors : lightModeColors;

	return (
		<Card
			elevation={0}
			sx={{
				height: '100%',
				backgroundColor: (theme) => theme.palette.primary.light,
			}}
		>
			<CardContent>
				<Typography variant="h5">Total Sales</Typography>

				<PieChart
					colors={customColors}
					series={[
						{
							data: pieData,
							labelKey: 'id',
							valueKey: 'value',
							paddingAngle: 1,
							innerRadius: 45,
							outerRadius: 80,
							cornerRadius: 10,
							arcLabel: (params) => (params.company ? params.company : ''),
							arcLabelMinAngle: 20,
						},
					]}
					margin={{right: 5}}
					width={200}
					height={200}
				/>
				{salesData.map((data, i) => (
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'space-between',
							alignItems: 'flex-start',
						}}
						key={i}
					>
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'row',
								justifyContent: 'flex-start',
							}}
						>
							<Box
								sx={{
									width: 6,
									height: 6,
									borderRadius: '50%',
									backgroundColor: customColors[i % customColors.length],
									marginRight: 1,
									marginTop: 1,
								}}
							/>
							<Typography>{data.company}</Typography>
						</Box>
						<Typography>{formatSale(data.sales)}</Typography>
					</Box>
				))}
			</CardContent>
		</Card>
	);
};

export default SalesPieChart;
