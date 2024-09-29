import {
	Card,
	CardContent,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
} from '@mui/material';
import React from 'react';

const TopProductsTable = ({topProducts}) => {
	return (
		<Card>
			<CardContent>
				<Typography variant="h6">Top Selling Products</Typography>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>Name</TableCell>
							<TableCell align="right">Price</TableCell>
							<TableCell align="right">Quantity</TableCell>
							<TableCell align="right">Amount</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{topProducts?.map((row) => (
							<TableRow
								key={row.name}
								sx={{'&:last-child td, &:last-child th': {border: 0}}}
							>
								<TableCell
									component="th"
									scope="row"
								>
									{row.name}
								</TableCell>
								<TableCell align="right">{row.price}</TableCell>
								<TableCell align="right">{row.quantity}</TableCell>
								<TableCell align="right">{row.amount}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</CardContent>
		</Card>
	);
};

export default TopProductsTable;
