import { styled } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

export const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
    border: 'none',
    '& .MuiDataGrid-cell': {
        border: 'none',
    },
    '& .MuiDataGrid-columnHeaders': {
        borderBottom: 'none',
    },
    '& .MuiDataGrid-footer': {
        borderTop: 'none',
    },
}))