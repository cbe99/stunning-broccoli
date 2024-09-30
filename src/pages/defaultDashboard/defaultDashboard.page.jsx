import {Box, Grid2 as Grid, Typography} from '@mui/material';
import React from 'react';
import MetricCard from '../../components/metricCard';
import METRICS from '../../mockData/eCommerceMetrics.json';
import REVENUE_BY_YEAR from '../../mockData/revenueByWeek.json';
import REVENUE_BY_LOCATION from '../../mockData/revenueByLocation.json';
import TOP_PRODUCTS from '../../mockData/topSellingProductList.json';
import TOTAL_SALES_DATA from '../../mockData/totalSales.json';

import StackedBarCard from '../../components/stackedBarCard';
import RevenueComparisonChart from '../../components/revenueComparisonCard';
import RevenueLocationCard from '../../components/revenueLocationCard';
import TopProductsTable from '../../components/topProductsTable';
import SalesPieChart from '../../components/salesPieChart';
import {useNavigate} from 'react-router-dom';
import {ProjectionsVsActuals} from '../../mockData/growthMargin';

const DefaultDashboardPage = () => {
	const navigate = useNavigate();

	return (
		<Box sx={{flexGrow: 1, width: '100%', paddingX: 2}}>
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
						size={8}
						sx={{
							display: 'flex',
							flexDirection: 'row',
							gap: 1,
							justifyContent: 'space-between',
							height: '100%',
						}}
					>
						{METRICS.map((metric) => (
							<Grid
								size={6}
								key={metric.type}
								onClick={() => navigate(`/default/${metric.path}`)}
							>
								<MetricCard {...metric} />
							</Grid>
						))}
					</Grid>
					<Grid
						size={4}
						//	sx={{width: '432px', height: '352px'}}
					>
						<StackedBarCard data={ProjectionsVsActuals} />
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
