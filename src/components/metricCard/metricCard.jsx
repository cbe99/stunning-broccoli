import {ArrowDownward, ArrowUpward} from '@mui/icons-material';
import {Box, Card, CardContent, Typography, useTheme} from '@mui/material';
import React from 'react';

const MetricCard = ({type, number, change, currency, unit, color}) => {
	const theme = useTheme();
	const isDarkTheme = theme.palette.mode === 'dark';

	// Define dynamic colors
	const cardBgColor = {
		lightblue: '#ADD8E6',
		secondary: theme.palette.secondary.main,
		dark: isDarkTheme ? theme.palette.grey[800] : theme.palette.grey[700],
	};

	return (
		<Card
			sx={{
				backgroundColor: cardBgColor[color],
				color: 'white',
				mb: 2,
				height: '100%',
			}}
		>
			<CardContent>
				<Typography
					variant="h6"
					component="div"
					gutterBottom
				>
					{type}
				</Typography>

				<Typography variant="h4">
					{currency ? `${currency} ${number}` : `${number}${unit ? unit : ''}`}
				</Typography>

				<Box
					display="flex"
					alignItems="center"
					mt={1}
				>
					{change.direction === 'increase' ? (
						<ArrowUpward style={{color: 'green'}} />
					) : (
						<ArrowDownward style={{color: 'red'}} />
					)}
					<Typography
						variant="body2"
						ml={1}
						style={{color: change.direction === 'increase' ? 'green' : 'red'}}
					>
						{change.direction === 'increase' ? '+' : '-'}
						{change.value}%
					</Typography>
				</Box>
			</CardContent>
		</Card>
	);
};

export default MetricCard;
