import {Box, Card, CardContent, styled, Typography} from '@mui/material';
import {PieChart} from '@mui/x-charts';
import React from 'react';

const SalesPieChart = ({salesData}) => {
	const pieData = salesData?.map((item) => ({
		id: item.company,
		value: item.sales,
	}));
	const formatSale = (salesValue) => {
		return `$${salesValue}`;
	};
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
					series={[
						{
							data: pieData,
							labelKey: 'id',
							valueKey: 'value',
							paddingAngle: 1,
							innerRadius: 45,
							outerRadius: 80,
							cornerRadius: 10,
							arcLabel: (params) => params.label ?? '',
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
								//	padding: 1,
							}}
						>
							<Box
								sx={{
									width: 6,
									height: 6,
									borderRadius: '50%',
									backgroundColor: 'black',
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
