import {
	Avatar,
	Box,
	FormControl,
	IconButton,
	InputAdornment,
	InputBase,
	OutlinedInput,
	Paper,
	Typography,
} from '@mui/material';
import {DataGrid, GridToolbar} from '@mui/x-data-grid';
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
			width: 214,
			editable: false,
			renderCell: (params) => getUser(params.row),
		},
		{
			field: 'project',
			headerName: 'Project',
			width: 214,
			editable: false,
		},
		{
			field: 'address',
			headerName: 'Address',
			width: 270,
			editable: false,
		},
		{
			field: 'date',
			headerName: 'Date',
			width: 191,
			editable: false,
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
		<Box
			sx={{
				height: '100%',
				width: '100%',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'flex-start',
				alignItems: 'flex-start',
			}}
		>
			<Typography variant="h5">Order List</Typography>
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
		</Box>
	);
};

export default OrderListPage;
