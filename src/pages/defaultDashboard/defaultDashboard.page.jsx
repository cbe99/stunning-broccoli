import {Box, Grid2 as Grid, Typography} from '@mui/material';
import React from 'react';
import MetricCard from '../../components/metricCard';
import METRICS from '../../mockData/eCommerceMetrics.json';
import GROWTH_MARGIN from '../../mockData/growthMargin.json';
import REVENUE_BY_YEAR from '../../mockData/revenueByWeek.json';

import StackedBarCard from '../../components/stackedBarCard';
import RevenueComparisonChart from '../../components/revenueComparisonCard';

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
							//	width: '432px',
							height: '352px',
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
				<Grid size={12}>
					<RevenueComparisonChart revenueByYear={REVENUE_BY_YEAR} />
				</Grid>
			</Grid>
		</Box>
	);
};

export default DefaultDashboardPage;
