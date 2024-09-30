import {ArrowDownward, ArrowUpward} from '@mui/icons-material';
import {
	Box,
	Card,
	CardContent,
	CardHeader,
	Grid2,
	Typography,
	useTheme,
} from '@mui/material';
import React from 'react';
import ArrowUpIconSvg from '../../assets/arrowUpIcon';
import ArrowDownIconSvg from '../../assets/arrowDownIcon';
import {ParentCard} from './metricCard.styled';

const MetricCard = ({type, number, change, currency, unit, color}) => {
	const theme = useTheme();
	const isDarkTheme = theme.palette.mode === 'dark';

	// Define dynamic colors
	const cardBgColor = {
		lightblue: theme.palette.primary.main,
		secondary: theme.palette.primary.light,
		dark: theme.palette.purple.main,
	};

	const contrastColor = {
		lightblue: 'black',
		secondary: isDarkTheme ? 'white' : 'black',
		dark: 'black',
	};

	return (
		<ParentCard
			elevation={0}
			sx={{
				backgroundColor: cardBgColor[color],
			}}
		>
			<CardContent>
				<Typography
					variant="h5"
					component="div"
					gutterBottom
					style={{color: contrastColor[color]}}
				>
					{type}
				</Typography>

				<Grid2
					size={'auto'}
					display="flex"
					flexDirection={'row'}
					alignItems="center"
					justifyContent={'space-between'}
					mt={1}
				>
					<Typography
						variant="h2"
						style={{color: contrastColor[color]}}
					>
						{currency
							? `${currency} ${number}`
							: `${number}${unit ? unit : ''}`}
					</Typography>

					<Typography
						variant="body2"
						ml={1}
						style={{color: change.direction === 'increase' ? 'green' : 'red'}}
					>
						{change.direction === 'increase' ? '+' : '-'}
						{change.value}%
						{change.direction === 'increase' ? (
							<ArrowUpIconSvg style={{color: contrastColor[color]}} />
						) : (
							<ArrowDownIconSvg style={{color: contrastColor[color]}} />
						)}
					</Typography>
				</Grid2>
			</CardContent>
		</ParentCard>
	);
};

export default MetricCard;
