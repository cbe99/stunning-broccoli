import { Box, Card, styled } from "@mui/material";

export const ParentCard = styled(Card)(({ theme }) => ({
    height: 400,
    p: theme.spacing(2),
}));

export const StyledBox = styled(Box)(({ theme }) => ({
    display: 'flex', alignItems: 'center', mb: theme.spacing(2)
}))