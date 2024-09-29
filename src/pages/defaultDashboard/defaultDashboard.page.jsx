import {Box, Grid2 as Grid, Typography} from '@mui/material';
import React from 'react';
import MetricCard from '../../components/metricCard';
import METRICS from '../../mockData/eCommerceMetrics.json';
import GROWTH_MARGIN from '../../mockData/growthMargin.json';
import REVENUE_BY_YEAR from '../../mockData/revenueByWeek.json';
import REVENUE_BY_LOCATION from '../../mockData/revenueByLocation.json';
import TOP_PRODUCTS from '../../mockData/topSellingProductList.json';
import TOTAL_SALES_DATA from '../../mockData/totalSales.json';

import StackedBarCard from '../../components/stackedBarCard';
import RevenueComparisonChart from '../../components/revenueComparisonCard';
import RevenueLocationCard from '../../components/revenueLocationCard';
import TopProductsTable from '../../components/topProductsTable';
import SalesPieChart from '../../components/salesPieChart';

const DefaultDashboardPage = () => {
	return (
		<Box sx={{flexGrow: 1, width: '100%'}}>
			<Grid
				container
				spacing={2}
				columns={12}
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
				}}
			>
				<Grid size={12}>
					<Typography variant="h4">eCommerce</Typography>
				</Grid>
				<Grid
					container
					size={12}
				>
					<Grid
						container
						size={'auto'}
						sx={{
							display: 'flex',
							flexDirection: 'row',
							gap: 2,
							justifyContent: 'space-between',
							//	width: '432px',
							height: '100%',
						}}
					>
						{METRICS.map((metric) => (
							<Grid
								size={6}
								key={metric.type}
							>
								<MetricCard {...metric} />
							</Grid>
						))}
					</Grid>
					<Grid
						size={'auto'}
						sx={{width: '432px', height: '352px'}}
					>
						<StackedBarCard data={GROWTH_MARGIN.projectionsVsActuals} />
					</Grid>
				</Grid>
				<Grid
					container
					size={12}
				>
					<Grid size={8}>
						<RevenueComparisonChart revenueByYear={REVENUE_BY_YEAR} />
					</Grid>
					<Grid size={4}>
						<RevenueLocationCard revenueDetails={REVENUE_BY_LOCATION} />
					</Grid>
				</Grid>
				<Grid
					container
					size={12}
				>
					<Grid size={8}>
						<TopProductsTable topProducts={TOP_PRODUCTS} />
					</Grid>
					<Grid size={4}>
						<SalesPieChart salesData={TOTAL_SALES_DATA} />
					</Grid>
				</Grid>
			</Grid>
		</Box>
	);
};

export default DefaultDashboardPage;
