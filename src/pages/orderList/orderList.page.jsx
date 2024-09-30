import {
	Avatar,
	Box,
	FormControl,
	Grid2,
	IconButton,
	InputAdornment,
	OutlinedInput,
	Paper,
	Typography,
} from '@mui/material';
import React from 'react';
import {OrderList} from '../../mockData/orderList';
import {StyledDataGrid} from './orderList.styled';
import {Add, Search, Sort} from '@mui/icons-material';
import SortIconSvg from '../../assets/sortIcon';
import ArrangeIconSvg from '../../assets/arrangeIcon';

const OrderListPage = () => {
	const getStatus = (row) => {
		let color;
		switch (row.status) {
			case 'Complete':
				color = '#4AA785';
				break;
			case 'Pending':
				color = '#59A8D4';
				break;
			case 'In Progress':
				color = '#8A8CD9';
				break;
			case 'Approved':
				color = '#FFC555';
				break;
			default:
				color = 'gray';
		}

		return (
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'row',
					margin: 1,
					marginTop: 3,
					justifyContent: 'flex-start',
					alignItems: 'center',
				}}
			>
				<Box
					sx={{
						width: '6px',
						height: '6px',
						borderRadius: '50%',
						backgroundColor: color,
						marginRight: 1,
						padding: 0.5,
					}}
				/>
				<Typography sx={{color: color}}>{row.status}</Typography>
			</Box>
		);
	};

	const getUser = (row) => {
		return (
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'row',
					margin: 1,
					marginTop: 3,
					justifyContent: 'flex-start',
				}}
			>
				<Avatar sx={{width: 24, height: 24, marginRight: 1}}>
					{row.profilePicture}
				</Avatar>
				<Typography>{row.userName}</Typography>
			</Box>
		);
	};
	const columns = [
		{field: 'id', headerName: 'Order ID', width: 100},
		{
			field: 'user',
			headerName: 'User',
			width: 180,
			editable: false,
			renderCell: (params) => getUser(params.row),
			flex: 1,
		},
		{
			field: 'project',
			headerName: 'Project',
			width: 150,
			editable: false,
			flex: 1,
		},
		{
			field: 'address',
			headerName: 'Address',
			width: 150,
			editable: false,
			flex: 1,
		},
		{
			field: 'date',
			headerName: 'Date',
			width: 150,
			editable: false,
			flex: 1,
		},
		{
			field: 'status',
			headerName: 'Status',
			sortable: false,
			width: 150,
			renderCell: (params) => getStatus(params.row),
		},
	];

	return (
		<Box sx={{flexGrow: 1, width: '100%'}}>
			<Grid2
				container
				spacing={2}
				columns={12}
			>
				<Grid2 size={12}>
					<Typography variant="h5">Order List</Typography>
				</Grid2>
				<Grid2 size={11}>
					<Paper
						sx={{
							boxShadow: 'none',
							width: '100%',
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'space-between',
						}}
					>
						<Box sx={{m: 1}}>
							<IconButton>
								<Add />
							</IconButton>
							<IconButton>
								<SortIconSvg />
							</IconButton>
							<IconButton>
								<ArrangeIconSvg />
							</IconButton>
						</Box>
						<FormControl
							sx={{m: 1, borderRadius: '8px'}}
							variant="outlined"
						>
							<OutlinedInput
								startAdornment={
									<InputAdornment position="start">
										<Search />
									</InputAdornment>
								}
								placeholder="Search"
								size="small"
								sx={{borderRadius: '8px'}}
							/>
						</FormControl>
					</Paper>
				</Grid2>
				<Grid2 size={11}>
					<StyledDataGrid
						density="comfortable"
						rows={OrderList}
						columns={columns}
						initialState={{
							pagination: {
								paginationModel: {
									pageSize: 5,
								},
							},
						}}
						pageSizeOptions={[5]}
						checkboxSelection
						disableColumnFilter
						disableColumnMenu
						disableColumnSorting
						disableRowSelectionOnClick
					/>
				</Grid2>
			</Grid2>
		</Box>
	);
};

export default OrderListPage;
